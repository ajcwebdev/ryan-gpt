---
showLink: "https://www.youtube.com/watch?v=E3jYGTB50LE"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "SolidJS - The Hard Parts w/ Dan Jutan"
description: ""
publishDate: "2023-03-18"
coverImage: "https://i.ytimg.com/vi/E3jYGTB50LE/sddefault.jpg?v=6414ae11"
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

[00:00:00]  Hello everyone welcome to my stream today um let's give everyone a moment to come in and say hi in the chat I'm actually kind of like on time today which has
[00:00:16]  been unusual over recent weeks so you know got a bit of a throat thing going on today so my voice a little scratchy but luckily I've got gonna have Dan J
[00:00:28] utan on here to help me out for a bit you're getting a lot of echo I wonder if my mic isn't set up properly give me two seconds it's like so
[00:00:41]  settings okay no I'm using my mic it's just this room is very empty I don't know yeah I mean I was really debating it I've been going hard the
[00:01:05]  last little while um so you know I was going to take a bit of a break um but you know we we uh there's always something interesting and new to talk about
[00:01:20]  and uh Dan uh offered he's like the thing is we keep on seeing the same sort of requests repeatedly in help channels and whatnot and I I understand like a certain element
[00:01:33]  of it is gonna be you know comes down to docs and documentation and how we can approach that but I also think that there's a lot of like big conceptual things that we
[00:01:45]  should you know be aware of um in terms of the patterns um and it's funny enough a lot of these patterns aren't specific to solid even it's just that like the
[00:01:58]  information out there has been pretty you know so far on these topics but we thought well let's look at let's look at solid and see if we can like identify some of
[00:02:10]  those areas but let's see here I should probably get the word out on twitch that we're live as are sorry on twitter that we're live uh let me see
[00:02:26]  here if I can do that but yeah well we're going how's everyone doing today I'm actually pretty happy to see the focus on docs in general the last couple years it
[00:02:47] 's not just the work you know that's being done in any specific community it's just like everywhere there's been a real push to up the quality of docs part of
[00:02:56]  this probably came from the fact that at one point the usage for these frameworks is a lot narrower is the best way to put it um like there was a certain amount of I
[00:03:16]  don't know how to put it but like the use cases weren't as wide and people were kind of accepting of where things were at for quite a while but we've
[00:03:23]  seen huge efforts across all the communities to make docs like a first priority all right we got some hellos in chat hey hi hey david sweet hi michael talking about docs
[00:03:43]  um michael's been doing amazing work on solid stocks we got here hey cousin good greg how's it going now we'll talk about that tweet a little bit later
[00:04:00]  in this week in javascript hey anthony good we got some people coming in now right now i'm just getting my my throat in a good place i should put my
[00:04:10]  phone away um i don't know if anyone's seen this suja organic or ginger love it's like cayenne pepper and lemon in a bottle i love it um all
[00:04:23]  right it's probably a better choice than what else is sitting on my desk i mean i got water right but i was i was on a podcast this week um that their
[00:04:37]  whole gimmick is whiskey so like i've got a bunch of whiskey on my desk um which i don't know if that's gonna be the best thing for my throat
[00:04:55]  yeah whiskey whiskey web and whatnot yeah uh so yeah okay anyway just catching up with chat here how am i feeling defeating the cold not really i i i've been actually really
[00:05:16]  excited about the work i've been doing on solid 1.7 it's been a while since i've attacked a certain category of feature and i i wasn't really thinking i
[00:05:25]  was going to attack it originally for 1.7 but that's partially why i've been delaying it is i realized that i want to actually look at the rendering again we
[00:05:32] 'll talk about that um in the upcoming stream but i've been doing like different sorts of optimizations there and i'm pretty excited about that um so i've been trying
[00:05:42]  to get sleep but then it's you know i've been staying up as late i've been working on my stuff to a limit but then i just don't sleep anyways so
[00:05:51]  i don't know i'm sure it'll be fine in a few days all right yeah i mean this is a good question maybe we'll ask this question when dan joins
[00:06:09]  the stream um about the oss and stuff because i think i i generally give the same answer but i find that it sounds better when different people give their answer but yeah how
[00:06:20]  are we doing here we've got some people coming in joining the stream getting past those twitch pre-rolls yeah i mean it's gonna be fun coming up i i've
[00:06:37]  literally i think like a six or seven week period um in may where i have a conference talk that i have to travel to every single week um and even i guess technically
[00:06:49]  it starts in april so it's like yeah there's almost like two months of like straight um conference talks and stuff i might have some difficulty doing the streams there only might
[00:07:01]  be only a couple streams during that time period but um hopefully there'll be a lot of great online live content so yeah okay i think i think i'm done just killing
[00:07:17]  time also big thanks to adriui subscribed at tier three they've subscribed for six months that's about as long as i've had affiliate on uh twitch so thank you
[00:07:31]  very much adriui all right all right should i get down on the stream are we are we are we at that point yet i probably should get down on the stream
[00:07:49]  all right all right let's see what the chat says it'll be up to you guys yeah okay good yeah let's do it okay all right hey jacob nice
[00:08:15]  to see you all right um without any further ado um let's welcome dan onto the stream how you doing hello i i don't know if people know how stream yard works
[00:08:29]  but basically i'm in like a an invisible like cage watching the chat and watching ryan and like everyone in chat is talking about docs which is like my favorite thing and i
[00:08:39] 'm like sitting here like wanting to respond but stuck in the cage so um hi everyone uh oh my gosh sylvia vargas is here great to see you jac
[00:08:50] ob um evans is here uh huge friend i mean i'll shout out everyone the tarnav is here um anthony's here so this is this is super exciting um
[00:09:02]  yeah and and i don't know if you want i can catch up on chat and talk about docs or uh i mean i i think i i think there's a there was
[00:09:13]  a couple good questions before even launching but maybe first just you know for anyone who doesn't know who you are just introduce yourself a bit and then we can kind of go
[00:09:24]  from there yeah so i'm dan um the main thing i do these days is i work on astro docs and community related stuff um but i've been involved in solid for
[00:09:35]  uh over a year um and i've done docs and community related stuff um with solid two um recently i've started going back to making videos so um if you go on
[00:09:46]  the official solid youtube channel i've made a bunch of videos to explain solid in like a conceptual way um and right now i'm actually transitioning into making um like better structured solid
[00:10:00]  content so i haven't been posting lately on youtube but i have been planning like a solid curriculum oh dan is a little quiet let me let me change that i have a
[00:10:09]  gain adjustment here should be a little louder now um so i can talk about that a little bit but i've been planning like an entire free solid uh guide and so that's
[00:10:20]  that's sort of where my head's been at this past week um i've been uh even chatting with some some course uh experts in uh in web dev to to sort
[00:10:34]  of figure this out um but yeah that's what i do i do i like i like docs i like teaching and um i don't know anything about back end that's
[00:10:44]  that's that's fair um yeah dan's been making a pretty much the majority of our content on this official solid youtube channel um and you've been doing a lot of streaming
[00:10:57]  and stuff yourself um as of late i've seen if i've seen at least you be on some guest uh show um podcasts and uh our streams and i remember you had
[00:11:08]  your your channel a little while back have you gone back to that at all or i haven't gone back to my own channel yet um but anyone who asks me to come on
[00:11:17]  their stream i usually say yes um and uh i like being able to talk about solid from kind of like a beginner angle you do that too but um i tend to like
[00:11:31]  to like really hammer home the like this the simple parts you know what i mean yeah yeah no this is this is a challenge for me always um so yeah i've sorry what
[00:11:44]  i've got to do is actually block this person yeah yeah it's like it's funny though a stream yard it's it's not letting me do anything do i have to
[00:11:55]  go over to twitch for this one i can't put it in you should get um did you give like mod status to people yet because they can they can yeah yeah maybe
[00:12:03]  that's the way to go i think i modded somebody uh a little while ago yeah i think anthony anthony's mod yeah yeah yeah um so yeah it's funny
[00:12:14]  because in stream yard i can mod youtube but mod twitch so what a deal it's too late anyway um yeah so uh yeah i mean we we can dan owes me a
[00:12:35]  live stream on solid yet dan has has an incredible gift for being able to talk about uh some of the more complicated stuff um in a much simpler way than i do i
[00:12:44]  it's funny i there was a tweet and i think it might come up later is where i actually did an okay job of explaining stuff in like straightforward terms that were searchable
[00:12:55]  that weren't in domain specific jargon too much but like you know people still like it's still very dense so they're like how do i do this so they feed my
[00:13:04]  response through chat gpt and ask it questions to get the answers and the chat gpt actually gave it the correct answers uh gave them the correct answers so i'm you
[00:13:12]  know that that's another solution but with dan you don't need chat gpt it was so good first of all uh the question you were answering was not about solid it was
[00:13:23]  a react question so i made this whole tweet about you spending your time answering beginner react questions um but yeah uh i i called that ryan carnibato yeah yeah i
[00:13:34]  mean the true story about that even though it was actually i was like working on solid um stuff and npm like i published a dom expressions release and npm wasn't pushing
[00:13:48]  it forward i was like trying to do a solid beta release for 1.7 and npm was like we've like it's been released i got the email it showed up
[00:13:56]  but then when you go to the actual like versions of the repository it wasn't there so i couldn't install it and i was just like sitting there and i was just
[00:14:02]  like i just like saw that and i was like okay fine i'm gonna answer a react question why not um i love it yeah it's but yeah i mean this is not
[00:14:11]  the first time that chat gpt has come to the rescue um so to speak so i i it's something that at least i am very very aware of so hopefully we
[00:14:22]  can do we can do a better job today than that so um uh ryan explained self for goodness loss of beginner is an expert oh i i've watched uh some of your
[00:14:35]  old streams and like turned that into content before like it's it's it's it's like you have really good um uh content that can be turned into beginner content yeah
[00:14:47]  yeah i mean i'm hoping some people are learning stuff that's why we got people on the stream today right we're gonna learn some stuff um okay so before we launch into
[00:14:59]  any solid specific stuff uh two questions came up the chat right at the beginning one of them was uh i mean i mean first do you want to give some comments on docs just
[00:15:10]  yeah so some people are saying like the docs aren't where they should they should be um uh some people are just saying that they like docs which i i agree with um
[00:15:22]  so we have someone michael working on docs directly um and i'm i'm also trying to solve that in my own way by having an opinionated guide so you can just
[00:15:31]  like learn solid in a really streamlined way the the bottom line of like why docs are hard is a question that i've been thinking about it a lot more as i've
[00:15:43]  gone back into working on astro docs and it's just such an enterprise like astro docs is um two of us dedicated to docs and then a bunch of volunteers and we
[00:15:55]  still struggle to keep up with everything um but it it is it is really rewarding and i'm hoping that over time the the solid resources um that are developing both in the
[00:16:08]  community out of the community improve a lot uh it's it's true about the amount of effort when you consider like again talking docs react docs came out uh like officially out
[00:16:21]  of beta i believe this week yeah yesterday and just to know how many people and how many years went into making those docs you like the enormity of such a project and this
[00:16:35]  is not unique to react like this is just what it takes these days yeah we we've gotten a lot of interest in astro docs lately so we started doing like weekly live
[00:16:46]  streams so if you want to if you want to check out like what it's like to work on a really big docs project you can follow the astro channel and and
[00:16:53]  and and join us um yeah huge shout out to rachel neighbors um they're they're probably the reason why i got so interested in open source docs in the first place um
[00:17:05]  if you don't know who rachel neighbors is um they have a really interesting career behind them which includes like web web animation like api stuff um and also like a cartoon
[00:17:18]  a career as a cartoonist but uh they speederheaded the react beta docs effort um they left the project about a year ago but um like they basically designed the entire
[00:17:31]  um the entire effort um and yeah it's this is this is a big release not just for the react community but i'm sort of celebrating this on behalf of like the entire
[00:17:42]  web dev community because like it or not beginners are learning the react and having really good official react docs is going to make uh the lives of beginner web devs a lot
[00:17:55]  better yeah it's it's absolutely huge i mean this this is kind of the missing piece i mean the challenge is like the web is this platform that is like accessible to so
[00:18:06]  many different users with different backgrounds different you know perspectives kind of coming in and um it's interesting when you have something you know as popular as react um also having its own
[00:18:21]  level of you know information paradigms we kind of i don't want to say required knowledge but like you you will get to that knowledge eventually um that it's it
[00:18:31] 's absolutely important to be able to kind of teach this stuff because really what's happened in the front end uh is that because of the how fast things move and how things are
[00:18:45]  developed like any community we've developed our own vernacular and words and jargon to explain concepts and there in a way there isn't any problem with that from my perspective
[00:18:57]  because like these are actual things that have actual like names like you need to be that way you can communicate these ideas more succinctly but like how do you approach this when
[00:19:08]  it's kind of gone so deep into its own cycles yeah um and there's a lot i could say about the react beta docs in terms of the approach and how it
[00:19:20]  ultimately ended up um but i i don't want to say anything negative on stream but the positives is that there's so many diagrams and so many like conceptual ways to explain things
[00:19:31]  and um one of the benefits of dan abramov becoming the primary writer is he's very good at anticipating all the different use cases for a given thing and you can if
[00:19:43]  if you're ready to learn you can go to any of these pages and just get the complete picture on whatever hook or whatever system you're you're um looking at just
[00:19:52]  so just so you know my favorite react hook is use imperative handle okay that's interesting yeah my favorite react hook is probably use effect i know people don't like it but i
[00:20:05]  like use effect i just i just like the funniest names for react hooks okay not quite the same question i've asked people this question on stream multiple times figured out this a
[00:20:19]  little more solid geared but just in general what would you what would you tell someone who wants to get involved in oss or even solid project um for solid i guess i'll
[00:20:31]  do solid first um i would um get involved in what salt the solid primitives project is doing um or actually there the cool thing about solid is there's a very close-
[00:20:43] knit group of ecosystem projects um that they're not like official like in other words they're not made by you but they are made by like close community members um that
[00:20:54]  you can help out with and you can get involved in um so solid primitives is one cobalt ui is one um solid dev tools um damien's in the
[00:21:04]  chat um and i mean there's there's the main ones but there's a few others that i'm not thinking of and the reason why i suggest those is because the
[00:21:16]  solid library itself runs like a a really well-oiled machine and it's like a small machine and it's very hard to like do valuable prs when this machine is
[00:21:29]  running on ryan's brain um you can like hop into issues and like uh see people arguing about whatever obscure reactive behavior um but like i wouldn't recommend as your first
[00:21:43]  uh foray into open source like try to contribute to the to the main solid um repo um in terms of uh non-solid projects like there are are libraries that
[00:22:00]  um are uh you know like like utility libraries for for like i only know about front dead and so like you can go contribute to like a random forum library you can contribute to
[00:22:11]  a component library you contribute to um things like uh validation or like uh you can contribute to like meta frameworks if you want and and there's there's just so much so much
[00:22:23]  out there it's it's interesting solid start which is in beta which like you know has a much smaller number of get up stars much smaller amount of um eyeballs already has
[00:22:34]  like as many contributors as the solid does um it's just like the nature of the beast when you build a like a meta framework when you get further out in the layers it
[00:22:45] 's just easier to contribute and it's and and there's there's more opportunities too i think that's the the key thing um yeah i i like how you mentioned that
[00:22:54]  like a lot of issues on solids main repo are really like like obscure like thing we've got some someone mentioned like talking about how solids main repo only had four bugs in it
[00:23:04]  right um part of that is good triaging and putting bugs where they belong like oh there's you know there's problems with hmr put in the hmr repo this would
[00:23:12]  start whatever and the other part is because solid core is so small like there there are bugs there are definitely bugs from time to time we have smaller usage but a lot of
[00:23:21]  it is when bugs come up there like my perspective is these bugs could potentially affect everyone and that's where i spend my focus um so that's that's that's something i
[00:23:32]  can do um but it's a lot trickier when you consider all the work that goes into solid i i could never do that by myself i yeah i want to i
[00:23:40]  can't i can't speak directly to solid start because i don't like spend a lot of time in that repo but i spend a lot of time in in the astro
[00:23:47]  uh world and there is a there's just sort of parallel in the kind of tool that astro is to the kind of tool that solid start is they're both basically sets
[00:23:56]  of v plugins and and internal packages um and uh i yeah i i totally recommend uh checking out the astro issues or the or the solid start issues there are real issues
[00:24:09]  there um not just like right like crazy obscure things but like real problems that come up occasionally you'll you'll even have regressions um and um you'll have issues with
[00:24:20]  all of the different parts that integrate with astro or with solid start so like astro has like um uh like six or so different um adapters for um deploying to
[00:24:34]  a server and those uh adapters um need uh need work to keep to keep them up to date with the platforms um and to just you know uh catch bugs and stuff so
[00:24:48]  i yeah i highly recommend like if you're really interested in like in in you know the world of web dev um learning how a meta framework works is such a rewarding process
[00:24:57]  like i don't i don't really know how astro works but every step of the way that that i learned about it is very very rewarding it's it's interesting because
[00:25:06]  you a minute ago you're like i'm not a back-end dev or whatever but i mean does astro kind kind of make you a back-end dev it
[00:25:14] 's uh i mean if if you're if you're like uh working on astro core you have to know a lot about veet and a good amount about node i i
[00:25:25]  get i guess i guess it makes you like a back-end i mean dave in the chat would say no you have to know like go and sql or something
[00:25:33]  but uh but uh it's it's so cool that that the meta frameworks are you know deploying servers now um outputting servers because it does kind of get you in this
[00:25:45]  full stack world um uh theo t3 theo is really good at painting the world of next js as a full stack world um he talks about prisma he talks about databases he
[00:25:56]  talks about trpc to connect your back-end code your back-end logic with your front-end logic and and i i definitely think that meta frameworks um are
[00:26:04]  this this new world where you can you can do uh use your front-end skills extend them a little bit and now be you know a back-end developer in some way
[00:26:12]  yeah makes sense uh like a good comment in here biggest thing about doing all that's to get over your fear and just do it the worst thing you can do is your pr
[00:26:21]  get rejected at least five ignore prs and more merge one thing i want to say about prs is like do look for the opportunity to do them but like like like
[00:26:28]  i would always start from issues or like something where you know that like the solution is desired like come at it as a question maybe first and then before jumping in on the solution
[00:26:41]  um but yeah i mean you just got to be part of the conversation and it's it's i don't know in my experience that as long as like people are there because
[00:26:53]  they want to contribute they want to make things better they want to do this so they're like generally you're gonna you know if you come at it with the right attitude
[00:27:03]  you're you know it's it's fairly welcoming experience this just stream art have a way for me to send a link to both uh youtube and twitch oh that's interesting i
[00:27:13]  can i can do it because i can post i don't know if you can i put it in the private chat and you can you can put it in the uh in
[00:27:21]  the comments um we uh spend a lot of time writing these guides for the astro docs on like how to contribute nicely and basically what what you just said like make an issue
[00:27:34]  first or or make sure your pr addresses an issue like don't just uh you know go and do something that you think uh is desired because you know the the maintainers have
[00:27:45]  something else in mind um kevin kevin here is a astro docs maintainer um ellian here is a astro ambassador who works a lot on docs um ke
[00:27:53] vin says i like starting at the issue merged pr level then try to come up with a fix then peek at the merged pr for a full solution that's that's really interesting
[00:28:02]  um choose a pr that's already done and and and and try to do it yourself and then check your work that's a really cool idea very good learning approach um and
[00:28:14]  yeah this is a true story um deep observation on stores i have some ideas that i want to approach on solid 2.0 on how to do this it's a complicated topic
[00:28:24]  and there's ways to do it but what was really awesome was it came in as a pr on solid main repo and actually ended up getting into um solid primitives um
[00:28:33]  so and then solid primitives which for the use those who don't know and we talked about like this a minute ago is like salt version of react use view use and we
[00:28:43]  have a whole like proposal set up there where there's like rfc's essentially or like stages and you go so cool huge props to dave and the solid primitive team
[00:28:51]  for for coming up with that it gives us good exposure and and what happens is i start looking at these patterns that get used and then we start figuring out how to what
[00:29:00]  to do with them it actually really informs me like there's a whole bunch of patterns around like i mean complicated stuff that you probably don't even worry about like creating sub-
[00:29:07] roots and all this kind of thing in primitives and i was like i looked at it and i was like oh okay well with 2.0 we should maybe look at making
[00:29:15]  this a lot easier of a pattern to employ if it may you know because it makes sense so these kind of things do eventually influence stuff i'm just very very protective of the
[00:29:26]  core primitives because those have to be pardon the pun like rock solid so that like all the other pieces could be built on top of them so um the process of going through
[00:29:35]  solid primitives is great because we get to vet the ideas we get to try the ideas we get to put them out to the wider ecosystem and who knows one day it might
[00:29:44]  even be core it's it's really nice to have close-knit repos that aren't the main repo for this reason of people who are interested in getting involved
[00:29:53]  because it's a lot harder to go and create your own library independently and like get people to use it whereas you can submit a proposal to solid primitives and have an audience
[00:30:01]  um by the way we've had like three people ask and i actually i think it's two people and one person asked the question twice they want to know about solid starts ast
[00:30:11] ro future and what's going on with that yeah yeah okay fine i i i mean this is my fault the thing is since i had tanner on and we talked about
[00:30:22]  it this comes up every stream um so we have like that segment i guess i mean i can i can talk about it from the astro side a little bit which is that
[00:30:30]  astro is not changing like there's uh there's a little bit of like yeah if you guys have a cool idea and something needs to be exposed like the the platform
[00:30:38]  team will will will you know work with you and and maybe try to expose something but astro is staying the same yeah i mean there that's the whole thing there isn't
[00:30:46]  really much that we need from astro there's some manifests and build configs like a few exported things astro already does all these pieces like there just wasn't uh that
[00:30:58]  that's why this was attractive to us not because i think the biggest point of confusion is people use solid with astro which is a great combination um for building your content
[00:31:09]  sites amazing i would say even with the dynamic ssr probably a decent solution for performance e-commerce as well so you know we're seeing we're seeing that kind of
[00:31:19]  pick up now and then when we said about solid start people like go oh like the picture solid in those islands and that's not what we're talking about we're actually literally
[00:31:27]  talking about solid start basically being the same as solid start today just using astro's underpinnings for deployment adapters and hooking into veet but once you get
[00:31:37]  to the like i'm handling a request level in astro which is a level that a lot of people don't actually spend time in because astro has everything so nicely laid
[00:31:44]  out but once you get to like that level we just take over so it's it's really um just a way of us like taking a third of the effort to solid
[00:31:56]  start and putting on a company that actually has money that does a little work i mean and it's it's yeah it's not even it's not even like one giant island
[00:32:06]  it's even a level lower than that it's like you're literally taking so uh people in the chat probably probably know about this but in astro like in next js you
[00:32:15]  can create api routes and these are just custom routes that let you handle any http requests that you want and what solid start and tan stack are doing is just effectively making
[00:32:27]  one of those api routes for you that manages all the requests to that endpoint and does it all within solid start yeah and what's really cool about this is we have so
[00:32:37]  much control there because we don't it's not it doesn't even have to be the single endpoint because astro has this mechanism we could still split it across multiple end
[00:32:46] points or whatever like we we have a complete control at that endpoint level but yeah we're bypassing the dot astro level so to speak like the the actual files and the
[00:32:56]  islands and all that and are you are you even using their like serialization at all i don't believe so um i mean sharing that would be an interesting thing if we could
[00:33:07]  reduce some kind of like dupleted effort and stuff but generally speaking no like we're just using it almost like a beat starter server yeah you're you're you get
[00:33:17]  to use um underlying no rendering you yeah the easiest one that you get to use is is deployment so you get adapters um what what else do you get um potentially tools
[00:33:34]  that come from the cli um anything that's framework agnostic is interesting most we've been building a lot of stuff ourselves with bling but also like like i think
[00:33:44]  there's opportunity to leverage actually astro's features like things like content collections like i don't i don't know what that looks like yet but i anything that there anything that
[00:33:55] 's handled also that in an agnostic way at the data level could be shared i think as well um so yeah i mean mostly for us the deployment adapters are
[00:34:07]  not a small thing um being able to manage like you just said that you know come if you want to help with bugs and stuff work yeah i work on the deployment adapters
[00:34:18]  yeah so yeah i mean this is big for us because you have to understand like what is a meta framework um and for us it's that level that i've talked about
[00:34:28]  with astro and like bling and that kind of stuff it's a router actually that's it like like like like it might there might be some uh like a library for
[00:34:41]  data fetching things but everything we do in solid start is actually generic enough that you could like if you have the backing of something like bling and astro or like
[00:34:50]  veat you can basically just use the same libraries like the that's that's the whole thing like it's the same router it's the same meta tag library but like there
[00:35:01]  isn't really any other features it's just actually and that's the plan like if we change you know we get the hybrid routing working properly um you know our server component solution
[00:35:12]  it's going to be built like into the router you know like the router is going to have the routing responsibility something else will have the bundling responsibility probably bling you
[00:35:21]  know on veat or astro like we're not out there to create new tools we're we're like look this is if you have a each library does its thing um
[00:35:33]  and yeah biggest thing here is like i'm being practical i've always had to be practical um because there is just a lot of work that goes into these things yeah someone
[00:35:46]  asked like if you want an interactive app um do you keep betting on solid start yeah you you should keep betting on solid start like i i don't think solid start is like
[00:35:57]  pick it up today and like build your production app it's a little risky for that but if you want to like as theo puts it like bleed bleed responsibly um you
[00:36:07]  can choose you can use all of your bleed points on solid start yeah yeah and and the thing is i don't like telling people to use something that i don't consider ready
[00:36:17]  i'm very picky on that side i don't like bugs like when stuff has a lot of bugs it doesn't feel ready to me which some people have different levels they're
[00:36:24]  okay with that um but i mean there are production apps on solid start um there are startups um built on solid start uh so especially if you have the kind of engineers that
[00:36:38]  would like contribute back upstream yeah yeah yeah i mean that that's a big thing i mean you're going to hit issues with any kind of thing when you're tailoring it
[00:36:46]  to your experience um you know you you've got other libraries you have to work with i had a lot of experience recently figuring out how to make aws amplify and solid
[00:36:53]  start play nicely together because i was helping one of those startups um so you know there there's there's challenges they would have had the same issues maybe there they would have found
[00:37:03]  stack overflow answers for some of it but like the issues i hit are were not like specific to solid they were just like what comes when you actually have to build stuff for you
[00:37:15]  like within you know your specific setup um the the meta like there's always exceptions to every rule the meta frameworks and these two links can only do so much and give you
[00:37:24]  like good defaults but reality always like breaks all the rules yeah in chat someone so much is like bling and you you actually did i didn't watch it yet but you
[00:37:35]  did a like hour-long stream or something all about um the magic bundling stuff yeah with with uh the quick guys it was kind of funny it was supposed to be me
[00:37:44]  and tanner the tenor at the drop off and then adam joined in so it was like the three quick guys and me talking about it so i was a little bit
[00:37:51]  you know surrounded on all sides but to be fair quick quick's whole philosophy is built off this code extraction so it makes a lot of sense but what we've been looking at
[00:38:00]  is how do we give tools like that to every javascript framework um yeah i i probably could find the link somewhere but yeah i was it was it's one of those
[00:38:10]  builder io streams it's definitely i view i view this as uh in the in the like dx territory of like experimental in the api sense like you are pushing uh like
[00:38:24]  okay we've seen uh next js have a little bit of code extraction forever right that's get static paths and that kind of thing um we've seen remix go a little
[00:38:34]  bit further with the loader action pattern yeah we've seen svelte say no you are not extracting my functions out of my files put that in in their own files so
[00:38:44]  svelte is definitely taking taking a stance against this um but everyone else is pushing a little bit more a little bit more and then you say oh no you can just do
[00:38:54]  this anywhere in the file using a this like compiler function and in my mind it's not not proven whether this is something people will like um it's something that we all
[00:39:05]  agree is cool because we're on the cutting edge but in my mind like it is yet to be determined whether we want to have like server functions all over the place inside of
[00:39:16]  our inside of our isomorphic code yeah it's it's it's interesting the thing that for me is once you have the and this is such a primitive view of things
[00:39:27]  once you have this building block that works like this then you can make that decision right like it's like if you really decide that we should keep it to the file system
[00:39:37]  like guess what it still works like so like this is this is just having the like most primitive version of it and the most primitive version might be abusable so we have to
[00:39:50]  like look into that but like that's that's where the focus is um so yeah uh that's it we're like jumping into a topic that like probably we were like
[00:40:00]  we're gonna really focus on beginner topics and stuff we're talking about code extraction and meta frameworks which is like so far down the deep end of of like uh you know this
[00:40:09]  stuff so maybe we should bring this back around again and start actually getting on topic a bit on what we wanted to talk about today yeah let's bring it back and and
[00:40:18]  when i say beginner topic i actually i'm gonna guess that a lot of a lot of your viewers um don't actually use solid on a daily basis to the extent of like
[00:40:26]  knowing all these things um so i think i think it'll be good for this crowd too okay yeah no that's good then let's figure out how are we gonna set that
[00:40:35]  up maybe i'll share my screen here and stop looking at my dms on twitter i've been i've been so far behind this morning i caught up on like five
[00:40:45]  weeks worth of dms on twitter i just like since my birthday i like took my birthday off and then i came back and like i just didn't look at my twitter d
[00:40:53] ms for like like five weeks are people dming you with like hot takes or are they asking you to go on like streams yeah ask me to go on stream invite me to
[00:41:02]  conferences ask me to come job to job i i answered to people who are already inside my dms but i'm talking about like the dm requests i haven't gone
[00:41:09]  to the ones like like the the other side so you know like if i've already been in conversations i've been talking to people but it's like all the like you know
[00:41:16]  come give a workshop blah blah blah like things that i'm like i i just it's really bad because if if if i just answered these people i could actually even direct them
[00:41:24]  to other people in the community that could help them um you know because i'm if even if i'm too busy i just haven't been uh you know what what net
[00:41:32] lify should do um you and zach leatherman and anyone else um who does this kind of thing they should give you like a secretary to share as as a group and and
[00:41:41]  and they'll like go through your dms go through emails like come up with your speaking schedule make sure make sure it's all it's all to your liking i i love
[00:41:48]  that yeah this is this is interesting right the the life of being like the this like the maintain like the maybe main maintainer of like one of these javascript frameworks
[00:42:00]  when you're in like that core you end up like it's not just you know i'm gonna do some code tonight it's like it's like it's juggling a
[00:42:08]  whole bunch of different things especially um a lot of public speaking rules yeah uh i i have applied to six conferences and so far i've gotten rejected from two but that's
[00:42:20]  okay because one of them had 200 applications the other one had 400 and so i'm not i don't i don't i don't take it personally but uh yeah i we
[00:42:29]  yeah we need to do something about that we need to have more conferences i i i can't like i'm getting to a point now where there's like so many conferences
[00:42:38]  happening i i i'm like getting double booked i can't even like go to the same the same weekend yeah yeah so like um i've been trying to push stuff around especially
[00:42:46]  workshops workshops are something that people like and i don't think i'm actually the best person for workshops someone wants like an like a lecture style like with a whiteboard i can
[00:42:55]  do that but like building a real app with solid like i feel like and those things those things are exhausting like those are like three or four hours you got to like stand
[00:43:05]  in front of people like you got to come up with like a you know the code samples to start and everything um i i know um um josh goldberg uh does these
[00:43:15]  all the time for typescript um kent c dodds basically built his career on the back of doing these things but they seem really hard like just just to be on for
[00:43:26]  that long yeah yeah no it's there's that i mean i i don't i can go long like everyone who watches the stream knows that i can just keep on going
[00:43:34]  but it takes a different type of prep work i find it a lot more comfortable to just talk about like like if if anyone has a question about any topic we can just like
[00:43:42]  whiteboard it and sketch it out and that's what i'm going to do today right that's the plan but like to actually come up with concrete examples is like a new
[00:43:51]  different level i've done it i did it for marco um i like it's a different level than like even just preparing slides and stuff for a talk yeah right dan
[00:44:03]  and orion disguise give me a talk about solid js yeah i mean um my brussels talk was really well received and it sort of like lit lit the fuel in my
[00:44:14]  fire of like doing more of those it got i think it got like 18 000 views on youtube like i was so excited about that that talk is amazing and it was short and
[00:44:23]  sweet and it's in a certain way it's like a better version of the short like 10 the the youtube the 10 minute version of the youtube video like the youtube video
[00:44:33]  is good and it's clear and it's well produced but that talk had all the pieces plus more and nailed it home um i just started using it and it was also i
[00:44:40]  think i mentioned before is like i i've been tweaking my world beyond components talk like at each conference and that talk was like the unlock i needed to make the really
[00:44:51]  dry long part of my talk shorter um which gave me more time to put exciting stuff on and a large reason why i think that like the later versions of that talk are a
[00:45:00]  lot better was because of the way you so condensed explained how solid works so anyway people should check out that talk if they haven't i'm pretty sure i've it's like
[00:45:13]  the i have like on my youtube channel um we should do this on the solid youtube channel where i put like solid js talks and and you you make a playlist and then
[00:45:22]  if i make a playlist i can you can just you know you can just see it as if it was your own video right this is this talk is is is just yeah this
[00:45:33]  is one of the best because of its like brevity and to the point this is one of the best solid talks and i think um i'm seeing this the content of
[00:45:42]  this talk making it into other talks like the like when ben was talking it's been a whole uh design talk i saw today opt out yeah opt in opt out right um this
[00:45:52]  talk was really nailed that home for me back in i guess you did back in september when you recorded it um so yeah really really cool talk and yeah i want to see
[00:46:03]  more more dan people are asking about using solid without jsx i made a video on this uh go to go to the solid uh channel and find it um uh you can
[00:46:15]  yeah you can use the html uh templating module i actually originally i wanted this stream to be about dom expressions which which is a very under the hood um it
[00:46:26] 's basically the the the jsx um rendering system but it's also a lot of people don't know this but like solid has an agnostic rendering core like it has
[00:46:38]  these like primitives that you can use to make any templating system um for solid um and uh i think it's like uh really really cool to to under to understand
[00:46:51]  how that works because if you look at the compiled output you'll sort of see those those primitives and also if you want to know how like the map array and like the
[00:47:00]  four component works yeah what's better h or html i mean i'm going to say html hyperscript is just whatever i i i explained this in the
[00:47:13]  video html does the same sort of uh work that the compiler does that the jsx compiler does it just does it at runtime yeah so yeah this again dan making
[00:47:23]  the great content um yeah that that's a topic in itself and you know it's yeah it's an interesting one because again solid gets sold as on its compiler compiler is important
[00:47:35]  but it's not important in the way that people think it's important it's more that it gives us this tool to kind of generalize the templating language in such
[00:47:44]  a way that it can work in like different platforms and different like different environments and stuff and lets us apply certain types of optimizations there um one of the benefits i guess you
[00:47:54]  could say of the virtual dom is that you have this like representation that is like at runtime that you can you know use to kind of do that kind of adapterness like swap
[00:48:07]  and we do have the reactive system that can work like that to a degree um but i the compiler gives us this ability to like i don't know do more um which
[00:48:19]  is really interesting to me and honestly i think common pattern you're seeing other even jsx frameworks of people doing more optimization there i think hyperscript is like it has
[00:48:32]  a wall you know and like i wouldn't be surprised when react forget comes out that like the hyperscript part starts to kind of fade into the into the background you know
[00:48:43]  like i think it's almost inevitable that the jsx the future is not the jsx of today like the general jsx 2.0 no well i didn't say
[00:48:55]  that the breaking change only happens when the api changes but yeah um okay okay okay so let's let's let's get somewhere because all right let's uh yeah uh do
[00:49:05]  you want to share your screen yeah sure let's let me do that let me add to stream add to stream here we are yeah i just want to say the last time i
[00:49:14]  went on your stream uh you did not have any anywhere near this amount of viewers like the amount of comments are coming in is absurd like last time we did we i streamed
[00:49:22]  it was like two in the morning and like you had like 10 people or something this is amazing you've you've come a long way yeah no thank you uh this is
[00:49:30]  this is not that this is this is actually we're kind of i was hoping more coming we're kind of below average we've been we've been averaging almost double double this
[00:49:38]  the last few weeks but i think that's because of all the controversy but yeah it's controversy and like big big names you you went for for for uh for an amoe
[00:49:47] ba this time you know you gotta you gotta have more like uh daniel from nux and like zach from 11d um but basically what i want to do here is
[00:49:58]  um i want to i want to chart out solid's api surface a little bit um so it starts uh it actually starts with jsx so like when you're learning solid
[00:50:09]  you need to learn how like jsx elements work and then you need to learn how uh components work and then you need to learn how props work um and we're gonna
[00:50:21]  come back to props because it gets really complicated in a second but at the very basic when you're learning solid you need to understand that you can make your elements anywhere in your
[00:50:31]  code then you can group your elements into into functions and then you can pass values in between those functions um and that's step one so this is this is this is uh
[00:50:45]  this is like templating and this looks small but if if you're not coming from react this is gonna take a little while because uh it's a little bit confusing um there
[00:50:55] 's a lot you can do with jsx you can spread props you can pass style objects all all that is included here um so there's that and then we get into
[00:51:06]  reactivity um so we've got oh i just went to new tab we've got create signal then we've got um i actually i i'm i'm starting to change my
[00:51:21]  mind on derived signals by the way yeah um i've i've stopped using derived signals as like its own thing yeah it's um so i'm just gonna put it here
[00:51:31]  as uh thunks or i'll just do this yeah i i i just wanted to explain like it's one of those things where like it feels like i'm like making a
[00:51:42]  concept up but i'm i was trying to actually like describe the advantage of using signals yeah like yeah it's not like a thing itself it's just is so this this is
[00:51:52]  what what i call like the the reactive flow um and basically the idea of this is wherever your um uh wherever your signal is used anything that calls that um sort of like
[00:52:08]  spreads it on to the thing that calls the thing that comes after it um so i i usually do like a like i i've done streams where like i put i put a
[00:52:17]  component function and then i like call something within a template and then i like color that yellow and and i sort of go all the way back but i think our viewers know
[00:52:25]  what i'm talking about here this is derived signals yeah you have to know how basically this is tracking you have to learn how tracking works um you have to learn how tracking works
[00:52:35]  um i like this i like this breakdown because i i was i was i saw someone did a tweet um this week the the one that i answered in fact where they they
[00:52:48]  showed what i thought was really simple react code and we're like what the hell is going on here and it's and it's because of this sort of um like thinking right
[00:53:00]  like we have so many implied mechanisms that we've just stacked on top of each other that if you start from scratch you might not like realize how many things are actually there
[00:53:09]  sorry yeah continue like within that for for react this gets really messy really quickly there's like a there's like a pedagogical pedagogical game in react how far can
[00:53:21]  you get your student in terms of capability without explaining how reacts render model works that's the game when you're teaching react it's like at what point do you say hey uh
[00:53:30]  we're going to stop building our example app and we're going to go do a deep dive into how rex rendering model works um and that's a high cost in
[00:53:39]  react but we're not teaching react i can talk about that too yeah but um yeah basically you need to learn tracking so signals and tracking and you can learn all of this you
[00:53:48]  can learn tracking without actually having to do create effect you just explain that there's this idea of a tracking context um you don't have to use the term tracking content you just
[00:53:58]  say in solid your template your jsx template tracks and then you explain what tracking is and if you don't explain what tracking is you're gonna like run into into problems
[00:54:07]  later so i usually want to i want to go straight into tracking early on um and that's and then we and we hit tracking immediately in the in the in the videos um
[00:54:15]  like the 10 minute video and the 10 minute talk right um then you uh you can you can do memos first if you want i usually like to do effect first because
[00:54:30]  um it it helps to do an analogy with memos but you basically say create effect um templates are effects so you explain what create effect is you do a little demo and then
[00:54:42]  you hammer home this point that like solid the the tracking mechanism that we created is the same tracking mechanism that's used inside create effect um and then the the reactive updating that
[00:54:53]  that you saw um uh is is is the same thing absolutely with effects and actually i i skipped i skipped a step um you need to explain um before you get to create effect
[00:55:05]  you i mean you you you could you could switch the order but i think after doing this you want to do you want to do reactive props um reactive props because what you
[00:55:19]  can do is explain that this like once once you have an exam a code example where there's a derived signal you just explain that props are passing on drive signals because that's
[00:55:31]  that's actually how they work they have getter functions that are derived signals um so you teach that and then you teach create effect um and then if you want you can
[00:55:40]  teach memos um that's hilarious reactive props is part of a different thing than your your other one so it's fine i can tighten it up for you oh that's so
[00:55:51]  annoying yeah um and yeah probably in here says props are getters and what what's a getter a getter is a a thunk it's one of these uh one
[00:56:00]  of these little uh i don't know if my cursor shows on your screen um this this mechanism is is how a getter works um uh we have i i once wrote
[00:56:12]  an article called javascript for solid and explains all the piece of thing all the pieces of jobs for that you need to know to use solid and i actually left out get
[00:56:20] ters i think getters are getter the reason why i left it out is i i was thinking to myself if you have to teach getters before teaching solid then do you
[00:56:27]  have to teach um proxies and i was like i don't want to teach proxies so i left out getters but i actually think it's okay to
[00:56:36]  it's okay to teach to teach getters just so they know how props work right you what you're talking about is that if you go const my object and then you go
[00:56:46]  this and then you can you you can like literally go get um uh what's it not uh yeah you have to do a word you have to put a word there yeah
[00:56:56]  yeah um data yeah or values the one that we like to use right yeah value and then you can this is a function where you can say hi right and then what's key
[00:57:10]  about this is if i console dot log my object dot value i'm console logging high here like it you don't call it as a function it is it is a function
[00:57:23]  you can do whatever you want here you can go like what uh math dot random you know you you can we can do this as many times we want and we're gonna get
[00:57:35]  a different value each time we call object dot value um it is a function hidden as a property um and this is how um yeah props and whatnot work in solid this is
[00:57:50]  a good insight someone says when i learned solid js before any js i liked learning about proxies um so we can explain proxies on the stream too um they're
[00:57:59]  like they're like getters to the point where view decided one day to just change their implementation from getters to proxies yeah it's funny a lot of my
[00:58:09]  work in solid and because of the time period we also have proxies and we're like this is a game changer for reactivity because on to this point you were doing
[00:58:16]  signals and signals and signals like signal inception which um and it was like what meant that whenever you got new data you had to map it twice you had you usually map the data
[00:58:26]  to take your data make into signals and then you'd map it in your view level to actually make it do stuff in the dom and this is one of those classic examples
[00:58:36]  that um will come up in old react talks or will come up like even today if you talk to certain people around the react community um where there's like this perception that like
[00:58:47]  that this is the way it has to be and the truth of the matter is proxies give you the ability to basically make everything interceptable so like every property you
[00:59:00]  can you can have i don't like should we show it really we should do one because people are asking about like what's the difference between a proxy and a getter yeah
[00:59:08]  and the the way they work is very it's very similar but the api is very different yeah so const uh what i've got my object to new proxy and i
[00:59:19] 'm gonna just give it an x empty object initially and then i'm this is what this thing is where all the magic happens we can set traps and the example of a trap
[00:59:29]  is get and you will get the target which is the actual underlying thing and you will get the property that you're that you're you're going to um get and the
[00:59:41]  funny thing is if if i just do this again it'll intercept every single property exactly so if if i could literally go in here and copy our silly example now for my object
[00:59:57]  too and i could just make up the properties like obviously typescript is not going to be happy because i haven't said what's what this has but i could be like
[01:00:05]  v i could be like hhh i could be like triple dollar sign and what you're going to notice um to make this a little bit clearer and i'm going to add
[01:00:16]  you know one two three is like it's it it doesn't matter what property access it calls this function which means that you don't have the pro the tricky thing with
[01:00:32]  getters objects is you need to like define them like these are specific properties so you have to like know you know you can't change the shape of the object with prox
[01:00:41] ies you can literally handle anything and you can just go like i don't know you know if you can be like if property equals v then i'm going to do something
[01:00:53]  different i'm going to say hello you know instead of instead of that and now one hello random random right because i access property v this is super super powerful um it's a
[01:01:06]  little bit more costly but like what you start realizing is you can have the proxy return another proxy nested so even though the proxy only cares about its immediate properties if you
[01:01:20]  have objects you know like deep objects you can actually have the proxy return a proxy that returns a proxy all the way down so you can track that get access on every possible
[01:01:30]  property on every nested level and you can um i i with with getters so first of all you can you can add a property to an object at runtime and you can
[01:01:42]  have your getter return an object with a getter too and i think that's how view always implemented their nested reactivity before proxies right the biggest thing with
[01:01:51]  view is i think you there was like a separate call if you needed to add more props after the fact like yeah or like like i think it was like view dot set
[01:02:00]  yeah yeah um because you you can do it with this nice syntax you can also use object dot define and like add them later because obviously as an assignment isn't going to be
[01:02:09]  able to add a getter like like because you're just setting the values so you you can use like object dot define property and then you can be like on my object i
[01:02:20]  want to add a second property um which will be data let's call it and then that property is going to have a getter itself yeah and then that's great data
[01:02:34]  right and now in our silly example you know going back here uh again i'll comment out object two and go back to our getters we can we can change one of these
[01:02:47]  to uh data and see typescripts complaining because it doesn't know from the object shape we have to do it but you'll see that we'll we have data here
[01:02:56]  um because if if we didn't do this what you're going to see is we're going to have undefined because unlike the proxy it doesn't handle everything it only
[01:03:05]  handles the specific get getter value so when you access something that's not there you get undefined you have to manually add it with the getter now you're fine
[01:03:16]  proxies just handle it all in one centralized place yeah and uh someone asked in the chat like how stores work and yes the the tricky thing to remember remember about like
[01:03:26]  how solids reactivity works is props are turned into objects with getters whereas stores are turned into proxies um should i ask what why why that is i mean i
[01:03:43] 'm i'm i'm just a zealot for performance you know getters are more performant because they're known set than proxies and like we don't really
[01:03:55]  we don't really need um like the funny thing is props are sometimes proxies which is probably why this is a good topic to talk about because in theory while you
[01:04:08]  you can use this object define trick to merge like you can take the properties of one object that have getters and actually apply those getters to another object that's how we
[01:04:18]  do merge props generally speaking so we can take two reactive objects that have getters and actually merge them together not by moving their value across but by moving their getter across um
[01:04:30]  if the shape of any of those project proxies could change or object could change um essentially like if one if one thing's a proxy in that whole mess um something
[01:04:41]  that could change values we actually can't do that anymore so we have to convert them into proxies so sometimes props like when you're doing spreads against dynamic stuff become pro
[01:04:52] xies but um fancy it's because we have to account for that which is you know an interesting thing that the syntax kind of protects you from to a certain degree because
[01:05:02]  you can just like go in and be like okay i'm just gonna add some properties add some you know dynamic stuff but like if it's if there's any possibility that the
[01:05:11]  object could change then getters is not going to suffice like you don't know this like you might be going what can example where the the object could change well this if
[01:05:22]  you know you have my object or whatever this this is not this this is not going to change because it's like whatever you define like and people doing this i mean that
[01:05:30] 's that would be on them like generally speaking you're just making an object you're passing it through right but if you do this suddenly like the shape of that object could could
[01:05:41]  change and i that might not be obvious to people but it's because this function could return a completely different object um with different properties on it uh and you want to be
[01:05:52]  smart about the diff basically you want to right you don't want you know just really you don't want to replace the entire thing you want to be able to have control over
[01:06:00]  each property and and the truth of the matter is actually have them reactive because the thing that we didn't we didn't talk about yet that's important here is with with this
[01:06:09]  approach of adding it like with the getters adding it if i listen to data and it's not set yet nothing tracks like when i get data it's undefined
[01:06:21]  because it's literally undefined with a proxy you can listen to properties that don't exist yet because like it doesn't like it doesn't actually know like you you could
[01:06:31]  still return undefined here because it's like doesn't exist but technically speaking you could also track on something that doesn't exist yet so um i don't know if that
[01:06:41] 's getting like a little bit too out there brain wise but it means that definitely it doesn't come it doesn't really come up because you're when you use a store
[01:06:51]  like you you you want to track a specific thing in the store right and people usually use stores as a fixed shape but where this comes up is props where people might change which
[01:07:01]  props are being sent down um it doesn't happen terribly commonly but if people actually change the shape of the of the props that come down because solid doesn't re-render
[01:07:12]  components ever the weight of actually different shapes it gets handled by these proxies so you could like if you write a you like your picture you write your component and you're
[01:07:24]  like you know my counter component and you're like you know if props dot something do something and the parent because they're using spread might send an object that has that property
[01:07:33]  or or later send an object that you know doesn't have that property like you know either or like switch it based on what they send down your code down here actually has to
[01:07:43]  subscribe to the possibility of the property existing um right that's that's that's super way so if you spread uh the compiler turns that into a proxy um not always i
[01:07:55] 'm i'm i'm pretty smart and this was a big part of 1.6 like we're pretty smart in terms of being able to like determine what things can be static
[01:08:03]  or dynamic in shape 1.6 i call the deproxification because originally everything was a proxy you know in those cases i managed to reduce it so that we could tell
[01:08:11]  by the inputs coming in what could possibly change and not use proxies everywhere this is important for um low-end devices that don't support it um and solid is
[01:08:20]  amazing for like mobile and like low-end devices because of its memory usage and it's like performance profile you have to just basically the idea is you want to be able to
[01:08:29]  just say avoid stores and you can use solid on old stuff pretty much yeah there's two rules avoid stores and avoid spreading function calls uh those are the two places where if it
[01:08:40] 's as long as you don't spread function calls you'll you'll be fine um so so yeah for those who don't know um proxy was one of those like new
[01:08:49]  web api features now it's basically available everywhere but like this was a big deal when the view community went went to view three is they lost the the cool internet explorer applic
[01:09:01] ability but yeah people are asking like do i have to know the difference between proxies and getters like no you you don't um i i like to explain get
[01:09:12] ters depending on depending on the audience like i like to explain getters because um it's the identical mechanic as thunks so like once you explain a derived signal which is just
[01:09:25]  wrapping a signal in a function call to do something with it you can say like hey just like this um saves the reactivity of like uh conserves the reactivity of
[01:09:35]  the signal and passes it on so too that's how props work props are actually functions under underneath the hood and and that's how props stay reactive right the the the old double
[01:09:46]  count example like why does this still work even though double count is not a signal sorry i got rid of my stupid spread here but why what is why does this still work
[01:09:58]  right and it's simple because i mean the the runtime reactivity has has to do with that but more so that it's just that any function that wraps a signal is also
[01:10:07]  just kind of like an accessor itself it's just you're propagating the reactivity through and if you look at it this is just a function or this is just
[01:10:17]  a function um so it's the same idea by the way i i know why you did this but the fact that in solid um jsx will just try to call any function
[01:10:28]  you give it uh that that's what uh that's what made that um double count tweet go viral um because if if you if you remove that um it still works and so
[01:10:40]  it's the consumption of double count is identical whether or not it's a function or not um yeah which which is a little bit awkward um es lint warns as you
[01:10:51]  can see here typescript is going to error in future version of solid that's a plan for 1.7 act actually i i love this and i know some people will be
[01:11:03]  angry maybe because it like might affect the way they write code but like what what's really cool about this is that first user who comes in and learns solid for the first time
[01:11:13]  and they like they forget to call the count because they're using react like thinking they come in and they put it and they put count in here and they're going to
[01:11:21]  get a red squiggly line right away being like hey you're not calling this as a function you should be calling this as a function um by the way uh so astro
[01:11:30]  does the same thing it'll try to call it if it's a function so because astro doesn't have like uh you can't use elements in the template where the
[01:11:42]  rest of your logic is people will you uh use an anonymous function like turn count into like a a a thunk with a with curly braces and then put an if statement in
[01:11:52]  there and that's what people do uh like people will people literally have like open open a function in the jsx and like put put put a switch statement or put an if
[01:12:02]  statement and return um something yeah i mean i what's always interesting to me is like what is this supposed to mean um like you know i mean like this doesn't mean
[01:12:17]  anything to to me like you you're passing a function you're not calling a value you're passing a function to this button poor button doesn't know like this in the
[01:12:27]  future it's funny this is this is like our linter apparently doesn't complain about this but in the future this will error in typescript and in solid just like randomly passing
[01:12:39]  a function that doesn't get called to the jsx like this doesn't this is this doesn't what about the uh control flow components that return functions that you do some types
[01:12:48] cript magic to make those work yeah that's the unfortunate part the trade-off was that people writing the control flow have to actually force the jsx casting that's or
[01:12:56]  return a memo or sorry not return memo return a fragment um yeah this is also starting to get into obscure territory that we would have to explain but basically some some of solid's
[01:13:07]  control flow components don't just return elements they return functions that return elements um okay i want to shout this out in chat because we are talking about teaching so um manendra asks
[01:13:19]  says i think we should switch to get count and set count i actually agree with this i i i i i have conceded to the community like i'm not gonna
[01:13:27]  i'm not gonna insist that the community switch to get count but when working with beginners like in in my new guide that that i'm writing i i am gonna take this approach
[01:13:38]  and and teach get count and set count and then later on say hey you can shorten it to count um have i ever talked about this on stream probably not you've talked about
[01:13:47]  it on twitter like several times like i'm talking about this a lot because like i i actually don't like get count a lot and i understand why it helps people be
[01:13:59]  sane but it's got to do with identity and again this is i realized after talking with dan abramoff and having that whole signals discussion this is where the the the where
[01:14:08]  that piece comes from right because i when i look at stuff i don't really look at it completely like it's javascript i look at it like it's my
[01:14:17]  reactive language doing what i what i want it to do so for me uh get count is something that gets a value sure but what i have is count count in in its
[01:14:28]  identity the signal same with double count like because you go well it should be get count and then get double count and then like you just get all the way down but to me
[01:14:39]  it's actually the function that gets called that is the identity of the thing not the value that you return and that's such like a subtle uh piece but it's like
[01:14:50]  it's it's like kind of the the foundation the fact that and it ties it all into like how solid doesn't have an is signal like it's just like it's
[01:15:00]  the fact that like the count is the accessor um so i i get why the the idea basically is to you count is like the thing and it happens to be something
[01:15:17]  that is called as a function but it's not like a regular function it's a thing it's a reactive thing and like that's sort of yeah it um by the way
[01:15:25]  um i'm i'm glad people are asking these sort of questions um someone asked don't people sometimes declare functions like that to cause reactivity to work yeah put this one on
[01:15:35]  screen um it was title um so this is really important and this is kind of why j why in in solid we do call everything you pass because it lets you pass put
[01:15:49]  data dot value and solid will automatically turn that into a function a wrapping function call so in other words the two code examples you have here you have data dot value and then you
[01:15:59]  have like the thunk that returns data dot value if you put the first one in solid solid will actually consider it exactly like the second one yeah yeah this is the whole
[01:16:08]  point is i the jsx interface is you don't pass signals around again this is all the same the same thing right like which for me obviously spending have spent like my whole
[01:16:21]  like thinking on it it takes a minute though i realized to get there is like in a sense the signals don't leave the scope of the component you're in which is
[01:16:34]  kind of a funny way of thinking about it um even though reactivity is preserved we we really try and make it so that like that all the thinking is localized even with props
[01:16:45]  it's just like you look at and go treat everything that you're in the same way that you would want potentially to be reactive as reactive use it as you would like
[01:16:54]  as like there's no actual need to wrap this in a function in the jsx you literally just put data dot value in here and like you pat you kind of go through
[01:17:03]  the motion of passing the value into your jsx out of your template so that the reactivity is almost localized in reality um we preserve um the reactivity through with the
[01:17:16]  jxx transform but it lets you kind of look at each component independently um because again you're not going is signal you're not like checking you if this thing's a
[01:17:25]  function you just treat it as it is yeah the the beauty is that when you're working with props like props dot value um solid does not care whether value is reactive or not
[01:17:36]  it it wraps it in a function call so if it is reactive it conserves that if it's not it's just called and returns value um there are like uh like
[01:17:47]  vobie is like the alternate the alternate ego of solid like in another world you have to be extremely explicit about what everything is um like vobie is is works like
[01:17:57]  that like you have to always pat like if you want something to be reactive you have to wrap it in a function um so there is that sort of alternate universe um yeah
[01:18:07]  oren says um i don't like the longer names everywhere seems redundant yeah i agree with you like the convention the con whatever whatever uh even if i use get count to like
[01:18:18]  onboard someone like the convention is just to do count and and and it's shorter um someone asked can you go back to that don't use stores i don't mean don't
[01:18:29]  use stores i mean if you if you have to support a really old browser that doesn't uh work with proxies so like an internet explorer then you might want to
[01:18:39]  void stores yeah how far can we go back there because the ie11 supports proxies right like you we can you can pull up the uh the fancy chart i'm curious
[01:18:50]  can i use yeah proxy uh edge right from the beginning no yeah you're right ie is the ie 11 is like the is the line um but you can go back to
[01:19:10]  safari 10 on ios and i think you can go back yeah okay safari 10 all versions of edge chrome for the last like six years or something seven years um
[01:19:23]  yeah i firefox for since firefox 18. yeah i mean we're like what when did chrome 49 come out 2016 2016. march yeah so yeah it's been about
[01:19:43]  seven years so yeah yeah i mean there are some things out there but these days almost none of this i'm pretty sure no browser supports a version like officially that doesn't support
[01:19:59]  proxies um at least from like the browser vendor perspective it's different from like low-end device kind of like embedded device things which we we were finding out um
[01:20:09]  stuff even like react native didn't support proxies till about two years ago um but like on the web on the browser i don't think any like supported version you know
[01:20:21]  officially supported version on the browser is actually don't support proxies now i uh this is actually a really great uh conceptual thing um someone asks can you pass a parameter to
[01:20:35]  double count and answer is yes like these are normal functions and any like as long as the function calls a signal at runtime solid will call a signal and when solid calls a
[01:20:47]  signal inside a template the thing becomes reactive right so you're saying like we could put like num here and then yeah exactly num and it's not double it's like molt count
[01:20:59]  i i love this question because this this is exactly what i want to get at when i teach drive signals is that they're not some special thing they're just functions and
[01:21:07]  the reason why they work is because solid calls the function and the function calls the signal yeah so yeah and actually you know what this this is actually a really good point it's
[01:21:18]  like a function name is a verb just a preference right for me signals are a noun like like like like so like this is why i this is actually a really good way
[01:21:27]  of explaining it yeah like count isn't a function it's it's like it's like it's like a it's yeah exactly it's a noun yeah i like that yeah
[01:21:36]  people this is great people are asking amazing questions um uh okay i think i think we're we're mostly caught is is there a fundamental difference between a store and an object that
[01:21:49]  contains a signal getter and a setter pair for every single property there's no i mean the fundamental difference is that stores have a a fancy api around them like
[01:21:58]  you can you can they give you a setter um they are are nested um a getter and setter pair is only one way down in other words there's a
[01:22:08]  there's a getter yeah um yeah so also so there's there's a few differences here one one is that an object that has a getter and setter pair
[01:22:15]  you can set the value on the object in solid we have read write uh we have a separation between read and write so you can't set a property on a store by saying
[01:22:25]  store dot value equals you can't do that but you would in your hypothetical scenario so that's one difference the other difference is that uh a signal getter and setter is
[01:22:35]  not nested like uh if you return an object from the getter that's not react that's not reactive but um in stores it is nested look look at this
[01:22:44]  this is fun dan just to prove this it's funny there were some examples from react where the react core team was asking me like how do you do this thing and they showed
[01:22:52]  like how they were using refs to reference functions so that they could keep uh referential equality on the functions and i'm like why don't you just pass the signal as
[01:23:00]  a prop to the other expression um because like you don't need all these use refs on functions and all this kind of stuff like like it's really not it's
[01:23:07]  a super simple solution and when i saw this multi-count or multi-count i was like why don't we just pass count back in i love that i love that right
[01:23:16]  so now you're getting uh like perfect squares yeah because because like like you it could be a different signal we pass in it doesn't really matter like the it's still getting
[01:23:27]  all like evaluated yeah anyway sorry just yeah i'm so glad we're doing this because we're getting a lot of questions from people who like don't like you like are
[01:23:36]  asking us some basic more basic questions so you know we we always assumed your audience was like solid pros but it's not true people people come from from all around um i got
[01:23:46]  i got a well dan someone just sent a well dan at the chat um you can const count set count because create signal zero const my object equals get count return count set
[01:24:00]  count uh yeah i mean this was this was what what nathan was talking about yeah um it's still not nested which was my point yeah yeah like there's there's
[01:24:15]  a little bit more code if you want to nest it a lot of the api decisions around solids uh is the maintain that read write segregation like the count versus account hey
[01:24:25]  actually going back to arc scale draw uh i mean is there another is there another box for um do you want me to show you where create mutable is no i don't
[01:24:35]  i don't want to know where create mutable is i i want to know like read write segregation those kind of topics where do they fit on so you i actually asked you
[01:24:45]  about this because i i don't i don't explain the why behind rewrite segregation i just let i just let you use it and and sort of figure it out um but
[01:24:56]  you have to explain you have to explain the rewrite segregation here because that's how signals work um so then do you talk about unidirectional flow i don't know no
[01:25:09]  no you you you can't talk about unidirectional flow until you're used to passing reactive props so that has to come after here um at least um uh you
[01:25:19]  so events are actually here under like here's where you introduce on click right um actually let me send you my my little curriculum just so you can put it on on stream um
[01:25:38]  i'm gonna put this in the chat you can pull it up and you can sort of see what goes under um it's a lot less fun than excel a draw but
[01:25:49]  it lets you expand do you see it um yeah i do see it let me see if i can open that oh wow this is nice this is just like a it's a
[01:26:01]  curriculum you you have wow see this this is what this is what we should be all aiming for here look at this he's got he's got everything by topic category these
[01:26:12]  are prerequisites then he's got like so this so if you look here like jsx i i just said all you need to teach at this point is elements and events
[01:26:21]  um so you need to show how to do on click um and then put a thunk in there right um and then under drive state i call it like reactive flow um
[01:26:30]  and yeah so that's that um but we can go back to the uh back to the excel a draw um yeah i like i wasn't sure if we were doing any more
[01:26:39]  with the playground i think we've gotten we've gotten it yeah let's see how far we can get before people um get us off track again which is really fun there there
[01:26:47]  was one question oh wait no this one i think i talked about this on stream what are your thoughts about downsiver and how react keeps raw values maybe it's my react brain
[01:26:54]  something's easier to reconcile raw values and maintain to go to prevent recreating dom notes on update yeah the funniest thing about this and i talked about this before and i'm
[01:27:02]  trying to remember if i can find the pete i don't i don't even get this i'm like i'm trying to wrap my head around this question it's easier
[01:27:08]  to reconcile raw values oh my brain went to solid reconcile that's not what he's talking about it's easier to reconcile raw values than may maintain referential equality to prevent rec
[01:27:17] reating dom notes on updates so in solid you maintain referential equality he what he's talking oh there's an assumption uh nowhere that see dan said i thought i react props
[01:27:28]  yeah here's the question being asked react props are raw values if you want to pass a list of things you pass an array if you want to store a number string you store
[01:27:37]  a thing the json you fetch the json you render raw is unsophisticated but in essence not to toss but in essence not to toss okay sure um right and
[01:27:46]  this is this is true because when you're dealing with reactivity you're actually wrapping the values the funny thing though is in practice this isn't exactly true anymore in in
[01:27:58]  react in that like a raw sense because uh where is it i want to find it pete hunt is a this i love this uh tanner tanner lindsley
[01:28:09]  goes part of my ramp the interesting agnostic library context while immutably in js and its collective buy-in was one of the biggest reasons behind react's success as
[01:28:16]  a platform i firmly believe it'll be one of react's biggest contribute to its biggest like to its demise he was very unhappy with how inefficient immutability was for his
[01:28:24]  use cases and then pete hunt came in he said immutably didn't have much to do with react success in my opinion object identity has only mattered in the post hooks
[01:28:31]  era and the thing is i i this is what i loved about this conversation was because what dan's saying isn't exactly true anymore now that hooks are around like yes you pass
[01:28:43]  raw values as props um you know in in essence and in a sense if you execute a signals value and get the value out of it you're also getting a raw value
[01:28:52]  each signals an immutable you know piece but what matters is in in react's re-render model when the hooks are inside the components you'd have those dependency arrays and
[01:29:05]  so for it to know not to re-render again it actually has to referentially check those dependencies this never mattered in react before they didn't care they're just like blow
[01:29:15]  out the world but hooks kind of came in and we're like no no no no no no we actually care you you have to structurally clone this data you have to be
[01:29:22]  aware that this reference changes you have to wrap it in a use callback or you use ref you have to do all of that stuff so in a sense from like a
[01:29:32]  theoretical standpoint i get what dan saying like i don't know if that's react today do you know what i mean like in a sense because in solidr components don't re
[01:29:41] -render again you have to be aware of the rules of reactivity when you look at your code when you load when you come in here and you see these functions you got
[01:29:49]  to be like oh okay this is this this is this this is how i wire them together but you're not worrying about referential equality anymore um right like like it for
[01:30:04]  to understand react today you can't think of it as like oh i just have some random data from a server that's going to do a whole bunch of extra work for you
[01:30:14]  um unless you actually do like understand how all the comparisons work so yeah i don't know i i sorry this is just a tangent but it's like one of those ones
[01:30:25]  where it's it's interesting um yeah sorry this i i didn't completely i the question still bothers me because like maintain referential equality to prevent recreating dom nodes like in
[01:30:36]  solid you don't want to prevent recreating dom nodes because that means you have a piece of state that's not reflected in the dot like in the ui so like
[01:30:44]  i don't really well i mean it's it's more that like check it out we have uh special control flow right we have like a for loop and the reason we don
[01:30:54] 't just use map is because if you use map you would recreate all the dom nodes so technically we do this referential checking there is this referential checking is inherent to
[01:31:06]  doing the diffing we do on the fine grain level so it is present it's just interesting to me that like you know someone like dan would like put it out front as
[01:31:16]  like this is a big win for react and like this is why it's so good when literally they have the same problem except they shove it in your face like it's
[01:31:24]  it's it's interesting to me um that's that that's sort of where i'm getting at here like i actually think when you start using these patterns what ends up happening
[01:31:36]  is you're less worried about the referential equality because like you have you've how do you put it you have primitives that take care of that for you so like
[01:31:45]  you've abstracted that into its unit you use a for component or a special map function you you basically build on the pieces or on the pieces so you never have to worry
[01:31:55]  about it um so yeah it's yeah i don't know if you have any more thoughts on that dan but that that was that's where my position or thinking was yeah and
[01:32:07]  the thing about like the raw values thing yeah it is it is nice um i just view it as as solid gives you the ability to be explicit about your value whether it
[01:32:23] 's whether it's reactive or not and then not have to worry about it later on um you know when you're in a react function and you create a constant it's like
[01:32:33]  a well i mean you still use use state never mind but whatever it's it's yeah nothing like nothing is safe but but but but but they're yeah immediately better way
[01:32:47]  before hooks in a class component this is true like if you wanted to do things effectively with should component update this is true i think the the the shift was that when hooks came
[01:32:57]  out it was suddenly like like very much in your face like referential equality is why hooks have dependency arrays why use callback even exists for example um but yes it's
[01:33:13]  true if you want to write good react code you had to be aware of this stuff and what reacted was like they basically gave you a pattern to let you write better react code
[01:33:21]  um like hooks i think generates like hooks used properly generates more optimal code than what classes do but sorry we're kind of like diverging a little bit off the solid track i
[01:33:33]  just it's one this is partially why i like doing these kind of topics though because there's a lot of parallels and people because the way stuff is taught and the way
[01:33:42]  people like approach the problem people assume like oh my solution doesn't have this problem when in reality all the solutions are generally dealing with this it's like fundamental so so i i
[01:33:53]  like going through the exercise of learning because then you can go like oh now after using solid actually understand react better like that that there's been a lot yeah we hear we
[01:34:02]  hear that a lot i love it um yeah something like how the four stuff works in solid takes up less mind mind space and all the other reactions yeah it's interesting in solid
[01:34:16]  it's it's cumulative so like you have to learn how the four stuff works like you have to learn how keyed show works you have to learn how how index works etc
[01:34:23]  and and it it you sort of like learn them you know in in pieces apply the same principle to different things um whereas in react it's like this game like i said
[01:34:34]  before like what like when do you learn how the how the render model works and then once you learn that it's like okay it spreads to everything which is why create effect is
[01:34:43]  or use effect is such a funny funny hook and why it's my favorite hook because if you look at this approach you create you teach create effect like pretty early on it
[01:34:54] 's fundamental to understanding what the model is and use effect is like the thing that react doesn't want to teach you it's escape hatch the way i put it is crate effect
[01:35:05]  is how solids rendering works and in react use effect is how you opt out of react rendering yeah um and yeah so someone someone in chat might might ask like why why am i
[01:35:17]  saying templates are effects aren't aren't templates create render effect and like that is not a distinction that i teach at this point no um i don't do i don't
[01:35:25]  do timing in my curriculum it's not even in my curriculum but it would be like a chapter at the end for like timing like what how the like how create memo gets organized
[01:35:35]  versus create effect anyway back to this yeah um so yeah we do we we have react props then we have create effect and then we probably do memos um create memo and
[01:35:51]  then it's up to you whether you want to do stores at this point um right but um i kind of like doing it but it depends um so you can do you can
[01:36:04]  do create store here or not um okay then we get into um reactive rendering so we do all the like um we've got we've got show um we've got
[01:36:24]  four and index uh we've got switch and match which i don't like yeah switch and match we've got um uh i actually like i like doing dynamic as part of this
[01:36:43]  group i think it's a really cool way to teach um how uh how solid on tracks well you don't have to go that deep but i whatever i like doing dynamic
[01:36:58]  yeah um and then this stuff this stuff can actually be pretty hard but like once you wrap your head around it um you feel pretty good like um the reason why i do like
[01:37:11]  teaching memos is that you can then explain show using a memo because because show memoizes both the condition and the thing you're showing um yeah someone says don't forget
[01:37:26]  untrack so actually if you go to my um curriculum i actually teach untrack with effects so if you go to meet the primitives um i do i do
[01:37:39]  effects tracking and then untrack it on yeah i don't like on i i wish i didn't have on it's fine people like it for convenience but on is like
[01:37:47]  one of the most annoying useless apis because it like it makes it more declarative so you can see it having a benefit and makes it easier to write things that are
[01:37:57]  deferred like like like execute not the first time but execute the second time so it's it's important but it like it what's cool about it for me is that it
[01:38:11]  lets you teach automatic tracking by showing you how to opt out out of it right but but you're right i might even take it out of that outline then like it it
[01:38:20]  it's it's cool but it's not like the benefit of on i guess is that it splits it so you can go like now we can take the reactive part and separate
[01:38:31]  it from the like like what you do with it like separate the reactivity from the side effect so yeah i mean so the cool thing if you if you do untr
[01:38:44] ack if you teach untrack in in when you're doing tracking and when you're doing crate effect you can then bring up untrack again when you do dynamic because
[01:38:54]  we we get this question a lot in um in discord so someone will say like why would you do like that dynamic uh component equals uh uh like why why would you do
[01:39:09]  this in your jsx when you can just do this in your jsx um and um am i it is component right i got that right okay um and uh the answer is
[01:39:26]  that um if you do this in your jsx um it won't um uh it will actually consider anything in the function body of whatever as uh as reactive yeah yeah which
[01:39:42]  is dangerous and anything that you call in here it's not just as simple as wrapping whatever with untrack you also have to consider the props coming in so like you
[01:39:52]  saw this in the playground when i was like past count in here and like if if if this had been like if instead this was like two you know like whatever then like this
[01:40:06]  still works because the count's tracking out here so the other thing is it doesn't wrap the props so you you're both like tracking the the body of the component itself like
[01:40:18]  if multi-count was a component so you're like every time it changes you're like recreating that jsx recreating that dom you're also um any prop changes
[01:40:26]  would cause the whole thing to to like rerun as well um you basically by doing this you tr you're treating your component as a derived signal and what that means is that
[01:40:44]  um yeah anything inside it will um uh will will cause this whole thing to to to rerun um so yeah it's a little hard to explain i i need to i
[01:40:57]  need to do it in writing first and then probably make a video about it but um when you when you actually use a component in jsx um solid kind of like resets
[01:41:07]  the tracking scope like resets tracking it's like um okay go like go i mean i mean i can i can show it right now i mean it's it's it
[01:41:15] 's actually a combination of what everything we just showed you this is what works thing so what you end up with is if it's my comp now what we do is we have
[01:41:23]  to go untrack my comp essentially and we look at the props and we we do this essentially we do both so what this means is that uh what am i doing
[01:41:42]  wrong here yeah i'm missing the opening and then this needs to come back yeah so we're doing both this and this which means that it doesn't it both doesn't
[01:41:56]  track the body of the component and the props themselves also don't get tracked until you use them so it's like because if this was like you know whatever count or signal or
[01:42:10]  whatever like um you know it should get couch into okay sorry um we do both of these things we both isolate the props um for execution and we isolate the component body uh
[01:42:28]  yes um uh ian ian i don't know how to pronounce it um he says uh you make it a react component instead of a solid component yeah kind of if you
[01:42:38]  if you just call it as as a function in jsx it that's kind of funny it's it's a react code it'll it'll re-render no matter like
[01:42:45]  it'll render the entire thing whenever whenever anything changes because that's how derived signals work they rerun their entire thing whenever whenever um any of it changes um so i like
[01:42:54]  doing that like if we're doing a real conceptual deep dive i'll i'll explain what untracking is when when like when you explain tracking it's a great time to
[01:43:02]  explain untracking um and um and then when you get to dynamic you can be like well why the heck do you need dynamic it's because behind the scenes solid will unt
[01:43:11] rack your components and if you look at the compiled output when you use a component you'll see the create component um the create component uh uh function call in there and
[01:43:22]  then you can explain what that does yeah um yeah yeah damien's like well you don't even get the vdob with it it's the worst both worlds it'll
[01:43:29]  re-render it it will it'll just be render everything and you won't get a vdob yeah yeah yeah yeah um there's a question here this is a
[01:43:40]  good one you should answer this one yeah um the answer is uh i actually don't push people too hard on show if if if you feel like a ternary or an
[01:43:54]  and sign or whatever makes sense for your use case like because you're just inserting some text or whatever or like just doing something really lightweight go for it and go in the
[01:44:03]  flow yeah solid didn't always um transform uh the those flows inside the jsx but it it's analyzable language from javascript's perspective so i was okay um
[01:44:15]  doing that because like unlike dot map this is javascript language and solids control like solid when you're inside the jsx and you put you know these conditions in you
[01:44:27]  basically get the same thing you would get out of of a show i don't i think it's so funny it's weird i actually think show components are more ergonomic than
[01:44:36]  doing a bunch of turnaries and stuff in a lot of cases like i think the actual components you you actually see it as a layout so like i wasn't going to just
[01:44:43]  like be like oh we don't need show anymore but um generally speaking use the inline stuff where it makes sense to use the inline stuff i i have a i
[01:44:53] 'm not settled on this yet but i like using dot map it when the array is not reactive because it's more explicit so um yeah i did it's it it's not
[01:45:06]  a good argument for for the the double ampersand because the compiler actually makes that reactive no no matter what um but but but i do like saying that dot map is
[01:45:17]  okay i i i reviewed um an article yesterday that was teaching solid and it used index for like a non-reactive array and it looked kind of awkward um and i i
[01:45:27]  do like being able to explain why you need for an index and that includes saying hey if it's not reactive you actually don't need it right yeah uh it's interesting
[01:45:38]  because people see that and they it's because they see for a show and they're like they think immediately to like stuff like uh each or view or you know svelte
[01:45:48] 's each or views or angular and all these directives and the thing in solid is these components are completely runtime like they're they're they're like there's no special
[01:45:58]  transform for dynamic or for four and stuff it's just like it's the it's the same just javascript that we hear people like you know waxing poetic about the
[01:46:07]  difference is we move to the component abstraction sooner that's like the because like we're able to like because the way reactivity memorizes and stuff like we get to basically move
[01:46:19]  the memoization to that level so you actually don't need a compiler to get all those benefits like you could like to be fair the there are ergonomic benefits of using
[01:46:30]  the compiler like we've been talking about but generally speaking this is why solid works without a compiler and has basically other than like some optimizations we do around like and static analysis
[01:46:42]  for grouping stuff basically has the same performance without a compiler so it's like you you don't need the compiler to get the benefit um you could write like i i like
[01:46:56]  joking with people a little bit like because you you know what i mean you could just be like yeah sure like you you might i'm not suggesting you do this necessarily but you
[01:47:04]  you know you there's there's nothing wrong with with with doing with doing this you know you're just like uh you know like make your own control flow that's literally
[01:47:15]  like um uh so it occurs to me that in the future this is going to be a little bit trickier to do um because of the casting but generally like there's nothing
[01:47:25]  to stop you just to be like props dot uh i don't know what do we want to say uh was it for each props dot each dot map like uh item props
[01:47:39]  dot children i like tada you've you've you've you've now written your own for component like that's all we're basically doing our map function is different here but
[01:47:51]  like if map array yeah one to play with yeah but generally speaking like this is all we're doing solids compiler is not like oh i see a four i'm doing magic no
[01:48:03]  it's like we we have this component somewhere yeah and you're memoizing the children um yeah yeah yeah yeah yeah i mean that's what the function like the special for
[01:48:14]  the functions my point is like yeah like it's just making an yeah i guess you know what actually yeah this is this this would be my recommendation in the post 1.7
[01:48:25]  world right there you go um just close that up because nick because fragments will will automatically memoize yeah exactly they do yeah yeah so there you go this is this is this
[01:48:36]  is how you write your own this even better this is how you write your own four component there there's the secret i mean this this is what i've been trying to get
[01:48:46]  at and i don't know if i i succeeded explaining this to people much but um this is this is all like there's not some like there's not some crazy magic here
[01:48:58]  going on with the compilation um and you can you know like uh a lot of people do this like they'll go to the solid source code once they realize that it's
[01:49:07]  not compiler magic and they'll just like look up for and and um show show is more interesting than four because four just basically wraps map array but show does like a little bit
[01:49:17]  a little bit more um especially with key um and that's really fun like i i don't know if i'm gonna put that in my guide but i might put it
[01:49:26]  as an aside like hey here's a link to how solid implements show you don't have to understand how this works right now but it's just to to prove that like
[01:49:34]  solid is not a black box like it it it this is a real component dan abramoff called it a custom dsl yeah i mean which is so funny because the
[01:49:43]  entire point of it is it's not a dsl it's jsx yeah i mean it's it's i i think there's misunderstanding here like does he call suspense a
[01:49:50]  custom dsl like i mean it it is in a sense but like react is has a custom dsl too so you know yeah i you can't get too holier than
[01:50:01]  thou on these kind of things that's been my experience everyone's doing the same stuff in slightly different ways um you know all right let me let me continue on my uh
[01:50:10]  on my little map here map through map through solid so we we we we have these things these are the control flow components um i want to make sure i'm not missing anything
[01:50:22]  um i'm i i i don't so i'm gonna do another box because i'm i'm unsettled on whether i want to do error boundary here or after resources but
[01:50:30]  right you error boundary works with regular components too um it will it will trigger as long as you throw an error somewhere in the tree yeah um so you can do error boundary
[01:50:43]  here all right then we get to um context um and uh so this is this is where our our global state box our our state management box so so first you do uh uh
[01:50:59]  the singleton pattern which is a real pattern um and um i like to show um uh protecting signals um so what this means is that instead of having like instead of having
[01:51:21]  like export like like you can do cons like uh uh count set count right let's create signal and then you can basically do like export count and set count i like i
[01:51:39]  like explaining how like no you don't have to do this you can be like uh export count and uh add three right do you know do you know this pattern is very
[01:51:52]  common reactive storage solutions it's like the action thing the action pattern yeah yeah like like like how like you dispatch actions and redux and whatnot yeah i in my in my head
[01:52:04]  it's it's called protecting because in like in uh object-oriented programming languages you have like a protected field that's only available to children and then you expose what you want
[01:52:13]  um but yeah um i like to show this pattern like you don't have to expose all of your signals you can you can have these actions um and then once once you
[01:52:23]  show this stuff it's actually easier to teach context why because context only accepts one value so once you teach the pattern of putting all the stuff you need on one object um yeah
[01:52:36]  yeah this should actually be like export this should be like const store or whatever or const data and then you export that i yeah i do have something i want to talk about
[01:52:48]  oh hey theo how's it going hey um that like it's funny though i actually have a pattern that i use here and i know people don't seem to teach it or
[01:52:58]  use it that much and i'm going to pull up the playground um a bit i think i know what you're going to say i want to see it yeah because like
[01:53:04]  here's the thing if i'm going to do this and let's make our our counter and i'm going to set count the thing that and this is comes down a bit
[01:53:14]  to consistency from my perspective is i actually use this pattern a lot which is that it's i do export const you know whatever my store is equals an array still yes and then
[01:53:28]  i put a count here and then i put an object here and then i put add count you know or increment yeah decrement here and the reason that i do this is
[01:53:40]  for is for two reasons first of all it keeps the the the read right which again i may be getting a little bit crazy on you know that part you guys can be like
[01:53:49]  ryan why are you such a zealot but more so is because this value can be it could be a uh it could be a hush it could be a
[01:54:01]  single signal it can be a an object with getters like we showed it can be a proxy you know sorry object with getters it could be a proxy any number of things
[01:54:11]  if we treat the convention that the first argument is the reactive value then we know not to like go and destructure it but if we treat the actions over here as like
[01:54:22]  the right side we can destructure this freely so what ends up happening is you'll you'll get in here and you'll be like okay a const you know my store or
[01:54:28]  whatever and then you'd be like you'd be like count and then you'd be like increment like this this is the pattern that i use for context i use it for global
[01:54:39]  i use it for all of it um it like it basically tells you that hey this is reactive handle with care this is like all your rights and things you need to do
[01:54:51]  um yeah i'm looking for i'm trying to find this thread but there was a great uh discord discussion where we were we were actually figuring this out like ryan was in
[01:55:03]  there eric domain was in there and we were we were like writing out all of our different um like shared state patterns um and this was there ended up being four and
[01:55:14]  this was one of them so um one of the four um so yeah there's that one where where you you have read write separation and then there's one where you make everything
[01:55:23]  like a getter or a setter um like like you keep you basically turn it into like um uh do you want to show an example yeah i'm doing it on
[01:55:37]  my yeah you you can do it i mean if you got it you got it here go for it yeah it would be like it would be like const data equals and then you
[01:55:44]  have like you have like you have like literally so basically there's two there's two patterns you can you can either do uh it's fine you know what you're saying
[01:55:56]  like it would actually be like yeah here get count here or you would literally write get count um and set count so like there there's there there's a version where you
[01:56:08]  do like get count and set count and then there's a version where you do um get count and like yeah and set count right so it's like do you want to be
[01:56:20]  explicit that you're setting a function or do you want to use the setter pattern and then like have that all mixed up in there and neither of these do what ryan
[01:56:29]  wants which is read write separation um which is the nice thing about ryan's pattern so ryan's pattern was like uh yeah uh the the other big thing for me
[01:56:41]  though is it gives you freedom to understand like i like just like flag right away i can destructure this if you get back the store and it contains both reactive values like to
[01:56:53]  be fair your version which has get and set yeah this is this one you can destructure and this that i should have pointed that out this one destructures and this one
[01:57:01]  can't right so but the thing is like depending on the shape if you want to universalize it if you want to look at things like you can always make getters around
[01:57:09]  your signals you can always use stores like if you want to expand from that pattern and and grow it you're probably going to get to a point where you have reactive objects i
[01:57:18]  probably i maybe not but probably so yeah anyway yeah a little tangent i needed to i need to decide because i i don't want to teach four of them i'll probably
[01:57:29]  do uh your your way and then the explicit get in set because i just like the ability to destructure it yeah um sorry just a little tangent on on my my side but
[01:57:41]  yeah so basically you teach you teach how to like just do this with like signals and stores um depending on whether you're already taught stores and then you explain context uh and the
[01:57:51]  hardest part of context is always explaining why you want to do it um so you it's a good question right because people it's and we're hitting it a lot right
[01:58:02]  now because people see my like my silly demo right they see me do this one right here we we've got our our our number and then i go you know put two two
[01:58:10]  counters on the screen uh you know yeah this this this silly demo and they're just like you know okay so now we have two counters and then they're like okay sweet
[01:58:20]  each with their own state and then you pull it up and you're like ooh now it's global state you know and then they're like okay this is how you do global
[01:58:31]  state and the and the answer is like actually probably not um like you could but like probably not like there parts your app own data like there is like true global state but
[01:58:44]  i think it's interesting to see that how little is actually truly global and how much is context relevant so like i actually still like tying it to parts of the tree and have
[01:58:55]  clear ownership on data um but like there's a temptation here just to make a billion global things and i i mean i i get it but you know it's not even true
[01:59:06]  that ssr just blows up it only blows up if you start setting the values on the server you can still only set the values on the client it'll work fine
[01:59:12]  yeah yeah to be fair like if you if your resources are like inside the components right and doing the data fetching and then you never actually write to any signals like you could
[01:59:22]  keep them outside um and it would still work it's just yeah i mean yeah and and view has the same problem by the way because they have provide inject which is their
[01:59:36]  version of context but they also have you can just like put your refs you know in a in an exported file right so like this is not a problem unique to to solid
[01:59:46]  it's just a property of reactivity this is a very illustrative way of showing off reactivity being able to do this like hoisting of the signal but reality is
[01:59:54]  that there's still value the biggest thing is context has been treated as kind of like a black sheep in react like you're kind of like oh you know use context for
[02:00:03]  some stuff like your theming maybe where you need to pass it down but don't expect to get 60 fps animations out of it you know and the truth matters in solid you
[02:00:12]  can get 60 fps animations out of context like it literally is just a container and it's interesting because you have guys like the redux uh like mark erickson who's
[02:00:20]  like very much like hey context and use reducer are not the same as redux because context is just a you know a container and if you're using a component to
[02:00:33]  do your state you're re-rendering your tree redux actually uses like separates it to make sure that like you're not always re-rendering everything only the things
[02:00:41]  that you connect to the store and i think that um that's just how solid because of this disconnect of our signals that i showed off that's how solid works all the
[02:00:52]  time so you can just stick as much state as you want in some context provider and have no fear of re-rendering you can you can put it at the very top
[02:01:00]  of your tree and do one thing in the leaf it's still only that little thing in the leaf that's updating um so like a lot of the bad stigma around context
[02:01:09]  it just isn't here the um yeah the the other thing about context that is interesting is that it's the first one where you start to think in your head how does this
[02:01:24]  work with hydration um because it's like connecting different parts of the tree and one part of the tree like might be hydrated and the other one from the server um so that
[02:01:34]  that's worth shouting out but yeah in terms of teaching context you want to explain how it's not really true that you usually want global state like you often want this part of
[02:01:44]  your app to use um to use certain values and so you can scope it using context you can explain how you can have two different trees in your app with their own version of
[02:01:54]  the context and then my favorite way of explaining it um for more experienced developers is with the idea of dependency injection when you use a global store you are literally importing that exact
[02:02:07]  thing like in this example here you are importing the data object um and you are coupling your code to the exact data object with context you use use context and then whatever is above
[02:02:18]  it in the tree um like if you use use context solid will go up the tree find the context and whatever value it happens to be carrying that and that is the value
[02:02:29]  that is going to be used and that allows you to decouple the component that uses the data from the couple that provides the data and that's that's my favorite way
[02:02:38]  of explaining it um you get to decouple that nice yeah no i mean is that um explanation convincing to people just chat did that make sense to you i probably would need
[02:02:52]  to to draw a picture in order for that to make any sense okay i but i'm just gonna get this out of our way we don't really probably need that anymore
[02:03:01]  all right we gotta wait we got a 100 in chat if people if people uh give me a hundreds i won't draw it out um routers are a great example for this
[02:03:09]  um memory history hash yeah so solids router uses um uses uh context all over the place yeah because there's different strategies to how and we can basically inject it um you can
[02:03:23]  have the same api for the router but actually manage it using different means um okay so that's this um this is the state management box state management um this is the
[02:03:40]  the reactive rendering box this is the uh primitives or basic primitives box um i'm gonna draw the next two boxes okay we have zoom out a bit so we can get
[02:03:59]  the bird's eye view um let me what i'll do actually is i'll i'll show how like the order at this point is less important so you could either go
[02:04:09]  straight to state management or you could do data fetching okay um so you can you can choose your own adventure here which one you want to do first um it's good we
[02:04:19] 're getting into beefier subjects yeah so now we start getting into the stuff that gets difficult so you you you you got create resource um which at its core turns and we
[02:04:34]  we were talking about this the other day where you were saying that create resource is actually two things one is it's a way to make an asynchronous value work in reactivity
[02:04:48]  and the other thing is it actually is kind of a helper for refetching stuff and and for coupling your input to a function um so you kind of have to explain both
[02:04:57]  parts so um that's what i usually do is i um you first explain the the one parameter version and then you explain the two parameter version and what that lets you do is
[02:05:07]  sort of like divide it up first first you just explain like the basic way that you can give create resource an asynchronous function and it will go and fetch it and give you
[02:05:17]  a signal like that's all you do so you the first thing you do is i'll just draw it out here so first we show const i mean do we have an example
[02:05:26]  in the tutorial probably of this where the examples did i did this one does this one survive the move like the really simple swappy api oh no but this isn't the
[02:05:41]  simple case this is the second case i'm just gonna like draw draw down the next dollar draw um yeah fair enough um async uh async function fetch fetch thing um
[02:05:53]  so uh so first you just explain this which is like okay you've got a function that returns a promise and then what create resource does is it turns that promise into an actual
[02:06:08]  into an actual reactive signal um so first you explain that then you explain const uh uh uh input set input equals create signal um and then you do then you explain so this
[02:06:26]  is uh step one step two oops oops uh input all right um and here already you can explain um data dot loading data dot error yeah this is always tricky for me because
[02:06:50]  i understand why we teach it this way it's just very unfortunate because it leads people down to a path where later things get more confusing this is actually this is actually why
[02:06:59]  why i wanted to do the stream um is to cover like what we're going to cover with suspense so i'll just write it out here like this you don't have to
[02:07:07]  use this if you're using suspense and you don't have to use this if you're using error boundary um uh error boundary must like have some special logic right to deal
[02:07:21]  with this because this isn't actually like this this catches the error yeah so so this is sort of important like um depending on how things go in solid like i'll change my
[02:07:35]  explanation right like um right now i like to like if you if you look at my video on create resource i don't talk about suspense and error boundary just show loading an error
[02:07:43]  because it's quote-unquote simpler but it's not necessarily simpler it's kind of weird to call a prop like like to be clear this is a signal like this
[02:07:53]  gives you the value and then you're calling a reactive property on a signal like what the heck like this this isn't that simple um no it's not it's not that
[02:08:05]  nice of an api so you know when it comes to teaching this stuff like i'm sort of in the middle like i could totally see switching to suspense and not even
[02:08:13]  explaining what data dot loading is right um the the the key to the two the number two which is what i was trying to get to here is that it's not about a
[02:08:24]  single promise right like this is your fetcher is a promise factory it is every time you call it you're creating a new promise yes so it's important to understand that
[02:08:38]  this is why we ended up with the resource api is yes whenever the user id change fetch and this is this this gives us a stable identity because we know that user is
[02:08:49]  a thing so like conceptually when you're in here you can have you know ultimately over the course of your app fetch 10 times user is still the same user right you
[02:09:01]  have this idea of that it is stale um there there's you know alternate apis you could look at here how to simplify this but it comes down to the fact that
[02:09:12]  we felt that it was important to have an identity that was not just the promise um because promises only last once and uh like they can only be resolved once and a resource
[02:09:26]  is something that can evolve over time yeah this that's the difference between maybe i'm misunderstanding but i think you use and react takes a literal promise not a promise factory right which
[02:09:39]  means that you need a second half because if the component's going to re-render how do you like memoize it right like you need like you need to like give
[02:09:48]  it an identity but even then memoizing it uh like isn't it's interesting because like use memo isn't guaranteed not to rerun in react it's more of just a
[02:10:00]  suggestion so like it's more you you really have to hoist it outside of react system into a cache like it basically forces you into caching right at the get-go
[02:10:10]  in terms of how to handle this so that you make sure that you end up with the same promise but but then like there's again there's no sense of time between
[02:10:19]  the two promises because like if you do the second fetch you now have a second promise these are not those promises are not tied to each other so in a sense this works because
[02:10:29]  suspense doesn't care it just knows that the promise hasn't resolved but there's no constant concept at the primitive level of something that is loading or not which means that you have
[02:10:39]  to introduce new ideas like use deferred value as a way of being like oh what was the previous value of this state and you have to like derive that state from the
[02:10:50]  previous state and have it only like update then so basically by introducing uh some kind of external caching a use primitive and create deferred value do you have the ability to ask
[02:11:03]  the question if something is loading um which is fine because you might not need to know it you could just use suspense but it's interesting when you get to more advanced use
[02:11:11]  cases the repercussions of of those sort of uh decisions uh sorry i went on a little bit of a react tangent i've never played with the use hook and react until like
[02:11:19]  yesterday i thought used was only a server-side thing um so yeah i need i need to play around with it myself um but but the nice thing about create resource and
[02:11:30]  and the reason why number two needs to be a separate thing is like as soon as you put in this input like you start to get into that promise factory territory what happens when
[02:11:39]  you change the input before the promise comes back oh it overrides that promise and it starts fetching the new thing right we solve race conditions and stuff like that solve race
[02:11:47]  yeah so all of that you need to actually get your hands on it and and this is something i realized after getting so many create resource questions in discord is like you you
[02:11:56]  can't understand create resource until you get your hands on it and you play with it you see what happens when you start changing your input value um and um to be fair it
[02:12:07] 's a lot like react query yes yes yeah you designed it based on react query right yeah yeah i mean i was just looking at it i'm like this is kind of
[02:12:18]  what we want to do right um so yeah the biggest difference in solid and i don't know if if we ever teach this thing but i i it's i i think i
[02:12:27]  do teach it somewhere and it confuses the hell out of people when i show like the the set timeout component uh or like the the fact that like because of reactivity
[02:12:38]  is not re-render thing like if you change the value like we all understand the fact that if i change a signal it updates the one place in the dom like it
[02:12:47]  doesn't re-render the component but this is also kind of true of async patterns you can like have it go fetch and then when the data comes in we can just
[02:12:55]  like continue from where we left off um irregardless of component boundaries right like it's it's just like because we happen to read this user resource down here or whatever
[02:13:08]  like that we were able to continue on our journey um fuzzy says i'm puddled yeah i don't think i understand the this is the example you're talking about yeah
[02:13:17]  i mean this is such a do you want to skip it or i've been trying i've been trying to decide but it's easier to explain with suspense than it is at
[02:13:26]  this point okay well we'll do it later um but yeah basically you want to do create resource um this gets its own box because resources like you just want to play with
[02:13:36]  it um and uh yeah i mean there's there's sort of like if you want you can and you you probably do want um you want to show the stuff you can
[02:13:48]  do um here which is refetch and mutate um right i don't like refetch because the whole point is you get declarative stuff with input but hey well there's
[02:14:03]  there's a reason for refetch right like getting getting the last the last one right it's like sometimes the input doesn't actually change you just need to like you you
[02:14:14]  just need to do it again like yeah you um oh you switch tabs you know you know what i don't like about it i don't like the ability to pass additional parameters
[02:14:24]  through refetch that's what i don't like right you're talking about the invalidation mechanism yeah i don't really get it well yeah see i mean and what he's
[02:14:33]  talking about is refetch can be passed a value that gets passed in to the your fetcher function and the reason i did this was because again solid doesn't have a
[02:14:45]  cache so i didn't have to come up with a caching mechanism for this but i assumed that you would so i basically into create resource created all the tools that anyone because
[02:14:55]  we again this comes important a minute when we talk about suspense you the trade-off is yes you can use create effect and write a signal you know uh you know if
[02:15:05]  you want and have that work in solid fine but you're not going to trigger suspense and because suspense mechanisms built off create resource every third-party library that wants to do data
[02:15:17]  fetching in solid should be using create resource under the hood so like solid query uses create resource under the hood so i needed to build it in such a way that adding
[02:15:26]  a cache was trivial so this this is a mechanism essentially of being able to um you know inject ability to invalidate resources essentially based on like cache keys solid itself doesn't need
[02:15:43]  to use it because it doesn't have cache keys but it gives us that ability so here here's what just to illustrate because i don't think a lot of people have
[02:15:50]  have done this basically um the fetcher takes um so sorry i'm just laughing at chat it's easier to patch global fetch yeah that's such a slight so the the fet
[02:16:04] cher normally takes just one thing a value um and then if you whatever you change the input to it will pass that devout to the value but it also takes uh what
[02:16:16]  is this called uh value here like this right yeah yeah the the value passed in is is the how should i put it the value passed in is the like i call it the
[02:16:27]  source like the thing that comes from the first input input inputs fine right the value is the previous value of the resource um which i don't know if i've come to
[02:16:38]  regret that one but so basically what you can do is if you so if you call if you call refetch yeah um with no parameters this value will be whatever the last um
[02:16:49]  the last value of the resource was right right but then if you you can actually change that so you can like refetch no the it's a different property that comes through it
[02:17:00] 's not it's not actually we don't change value the value is always the same oh it's it's it's this yeah yeah yeah yeah yeah there's a flag
[02:17:09]  for reef for refetching where you can pass in like like this this way your fetcher can go am i being refetched and you can also be past this data
[02:17:17]  and you can you can be the key so you can be like your fetcher can go oh i'm not going to refetch again i'm going to actually go to your
[02:17:24]  cache and uh return the value from the key because you can you can always control that fetcher um so it just works really well for abstractions because you can write a
[02:17:33]  very simple cache and solid in maybe like 20 30 lines um and just wrap create resource and then now you have a caching system similar to like react query or whatever yeah so
[02:17:43]  the way you'd implement a cache is you you first of all the if the input changes to something that that was already passed before um then you can call the cache but
[02:17:52]  then if you but then you you have to implement the logic for refetch too so if you refetch um and the input is the same no yes i don't yeah if
[02:18:05]  you if you refetch it calls the it calls the input it still yeah yeah it passes it passes the previous input everything's the same it just it tells you that it's
[02:18:13]  refetching with this information yeah um but yeah so this is so this starts to get complicated um and that's why i put it even though it's one primitive i
[02:18:20]  put it in its own box because it's yeah this one is tricky because i've tried to minimize as much as i can but it does so much heavy lifting in the system
[02:18:31]  that it is probably in itself the the most complicated yet in a sense it actually doesn't do everything it's um and people people like this api um i have my gri
[02:18:43] pes with just this part like the dot loading dot error dot latest all that but people really like like create resource yeah i mean it's the similarity react query and it makes
[02:18:53]  it very easy to build the cool thing is once you because of how flexible this primitive is you know solid query wraps this now you're using it and everything that's made in
[02:19:05]  solid to work with resources just works with solid query perfectly streaming suspense server-side rendering all that stuff just instantly works you don't have to do anything else so like that
[02:19:14] 's the real benefit here because of the flexibility of the primitive people who build on top of that primitive build their own libraries basically get like every third party fetching data fetching
[02:19:25]  thing feels like it's first party and solid so like that that is the power here um yeah let me go ahead and correct this so first of all if you got to state
[02:19:35]  management and you hadn't you hadn't taught stores yet um you you you're going to teach stores here so let me just add that add that here um uh stores um
[02:19:47]  right uh is it is the change the potential change to just stores public info yet no okay i mean it is on the stream but we it's i don't it's
[02:20:01]  not really not relevant okay our solid source likes felt stores i think the person i think the person asking this knows the answer so i'm not going to answer it fair social is
[02:20:11]  just just coming in here but sure okay so actually um someone says something that i think is really important um not because our docs are lacking but because so the docs are create
[02:20:22]  resource and create rotators that are lacking so what this points out is that create resource is extremely important for server-side rendering patterns create resource does something special on the server um
[02:20:35]  and that's what what makes things what gets us into solid the hard parts when when when you start dealing with with parts of solid that work differently on the server on the client
[02:20:45]  and have to come together to make the the ssr and hydration experience work and so that gets us to that gets us to our next step actually before we go to
[02:20:54]  the next step i i'm gonna do the uh the sort of like forbidden fruit box which is parts of solid that i don't teach um so we're gonna make we're
[02:21:06]  gonna make this red um and so you know like the good the bad and the ugly like this is the ugly um so the no offense to uh ryan who made it but
[02:21:16]  we don't we don't teach create mutable because uh it's it's garbage breaks breaks the read right thing we don't teach batch because you shouldn't need it
[02:21:25]  and we don't teach um uh create computed because because you also shouldn't need it yeah well okay there's some cases where you need it but uh but uh uh you can
[02:21:39]  in my opinion you can accomplish that edge case you're right um in create effect instead yeah the the truth of the matter is i am such a like i i wouldn't
[02:21:50]  i don't want people to suffer even the tiniest bit of performance consideration when using solid to the point that like i don't bother like stuff exists in solid sometimes because
[02:22:04]  i'm not i i'm if the answer is like oh yeah we just don't think that's a good enough pattern but yeah you're right that would be a little
[02:22:12]  bit better or faster if that's the answer i've created it because if it could be better i like if it could be faster we have to have it like that's i
[02:22:21] 'm finding new ways to work around it but like if someone it's my own personal judgment someone just told me something's good enough usually i i don't i don't
[02:22:32]  trust them so like it's it's my own distrust that has led me as a maintainer to have to actually um entertain everyone's ideas on how they should you know
[02:22:42]  do things even if i don't always agree with it mostly because um i don't i like if i can concede that they're right in any sort of way then i
[02:22:53]  i should at least give it consideration actually i should put like create render effect in here too because okay we don't teach it but there's nothing wrong with create render effect
[02:23:03]  no it's just for library authors yeah create render you know i i won't i won't put that here because there's a lot of things we could put in that category
[02:23:10]  like get owner like who the heck is going to use it it's not bad but no one's going to use it yeah these these ones are actually kind of like not like
[02:23:18]  yeah they're not great yeah um there's nothing wrong with get owner or there's other ones here there's to be to be fair there's nothing actually wrong with batch
[02:23:26]  just there's a lot of confusion around batch where people like like there's a lot of cases where you just don't actually need it like 95 of cases i don't like
[02:23:39]  batch because i'd rather teach the batching behavior and then you work around that and it's it's it's it's it's not something you you need to use
[02:23:47]  batch for what about create selector i mean there's there's those apis but the i'll give you a little something on that stuff like create selector and maybe create
[02:23:57]  uh deferred maybe those belong in solid primitives or something but i didn't have solid primitives at the beginning like i i'm re-examining those with 2
[02:24:05] .0 like they don't go away maybe they just go somewhere else uh create selector is does use internal um logic so it's not completely createable and outside like
[02:24:18]  it you could create a version of it but the way we do it is a little bit different it it's a little bit special i'm going to mention just because it solves
[02:24:27]  a category of problem that's real and it's funny as i'm working on replacements for create computed i'm coming into more examples where i want something like create sele
[02:24:36] ctor there is this challenge with reactivity about like the if you draw like i don't know if i want to go here but if you derive data you're creating a tree
[02:24:50]  right you're kind of like there's like you have like the node and then i've driven i've drawn this tree on stream multiple times the last several weeks where you have
[02:24:57]  like the node and the derived values all the way down to the effects you create this tree and sometimes most of the time the tree kind of like fans out in a certain
[02:25:06]  way so like it's it's it's fine but like if the tree ever is wider at the top than it is the bottom or like you change the shape of the tree
[02:25:14]  crate selector is more optimal than other solutions so we still need something of this category to solve problems create selector is like a very specific implementation of that but i think that
[02:25:27]  um as we better understand these kind of problems there's going to be more consideration around generalizing this problem another example of where create selector is kind of the same mentality
[02:25:40]  is if we wanted to make a memoized store like a drive store like a store that drives from another store they need the same kind of consideration as create selector would need
[02:25:50]  um i know this is probably a terrible technical answer i've i've never used crate selector i know i know what it does like it tells you if um like it
[02:25:58]  gives you you you pass it a value and then it gives you a function and then it like tells you if the the value you pass the function match matches the original value um
[02:26:06]  yeah i i've never used it i i don't think i've used create deferred either but create deferred is like a use idle right yeah it was just like a
[02:26:15]  task queueing it's because the browser's request idle callback wasn't great and stuff and we already had a scheduler in solid that i was working on for like
[02:26:25]  concurrent rendering and stuff that i that we have that it might be extractable into its own thing uh it just it depends on how i feel about uh time slicing and where
[02:26:37]  how you know we want to move forward with that in the future solid create deferred is create deferred could be in this in this category actually under this red box to be
[02:26:48]  fair um all right if it is it ugly like i'm only gonna put it here if it's ugly it's it's ugly in that i think it might set wrong expectations
[02:26:57]  on what it does it's just because i believe and when we talk about suspense i'll get into this i believe in async consistency and create deferred is just like
[02:27:06]  a ticket to to tearing like it's just it doesn't solve the same thing as suspense or transitions it does it does it like the opposite way um and while this is really
[02:27:17]  helpful in a few cases to get performance um it's not the ideal thing so yeah i think you put create deferred there we also like uh similar to on is create reaction
[02:27:30]  which people don't use i think i don't know the funniest thing about create reaction is a bunch of people even like really into the reactivity talk about how they don
[02:27:39] 't use it and they don't get it but then like something comes up and they're like how do you do this and i'm like create reaction did like don't you
[02:27:44]  guys get it create reaction literally does everything like it's the most powerful primitive there is um it's like how do how do i make react and solid work together create reaction how
[02:27:54]  do i do lazy memos create reaction like it's that's really interesting i might i might want to revisit that for like uh advanced i got it from mob x um
[02:28:03]  so the mob x had this ability and this is actually literally how mob x works with react it's it's whenever you're dealing with an immutable system that's outside this
[02:28:13]  is where you kind of need this one because you it separates the tracking from the side effect in time so you're able we can we can do a category for advanced react
[02:28:23] ivity like yeah you you probably won't need this to build your app but we have things like create reaction uh create root uh get owner yeah run with owner um there's like
[02:28:41]  uh what am i thinking of i mean you can put create render effect here too if you want yeah it's it's borderline i feel like when computers get out create
[02:28:52]  render effect becomes like our create layout effect like i feel like people will find use cases it's the effect that runs on the server when you're doing ssr like that
[02:29:00] 's what that's what it is like it's the effect that runs on the server uh it it runs on the server really yes yeah because it's how we do all
[02:29:11]  rendering and solid so it oh okay it's it's it it actually that's kind of neat yeah uh yeah uh i mean there we go in in in the entire reason why
[02:29:22]  i wanted to do the stream is is stuff that that has a certain like an interesting server side part of it um we also have uh like all all the reconcile stuff uh
[02:29:31]  like literally like reconcile and like observable and whatever yeah the um i observe there's i'm like looking at the api now i'm like i definitely i've never called
[02:29:44]  from from yeah there's another but that but that goes with uh reconcile and observable for like stuff that helps you when you're working with external yeah a lot of this stuff
[02:29:54]  could have been some of the stuff like observable and from could have been out of the core library this is just me giving like rx.js and svelte
[02:30:01]  stores a bit of a nod like with from um you can literally just take a svelte store or rx.js and it just works with solid yeah so um maybe
[02:30:10]  i'll be like this stuff is like for oh i guess i should put create reaction in here like this stuff is for working with other stuff yeah um but create root you could
[02:30:23]  you could use that if you really wanted to yeah um like create root is probably the most common of these i don't i don't know what uses get owner and run
[02:30:36]  with owner but it comes up a lot in like fancy cases um in like solid primitives that's like where you yeah that's okay um work work with external reactive data
[02:30:53]  um yeah okay so uh i'm gonna call this uh like advanced reactivity um yeah so this this is like library author mostly um and that takes us to where i i
[02:31:16]  want to go for however much time we have left um which is suspense um so there there's a few in this category so we're gonna put um so if you didn
[02:31:29] 't do maybe i should just get this out of your way like you can bring that box down yeah if you didn't do um error boundary before i'm gonna put that here
[02:31:41]  um if you didn't do um if you didn't do that um let me have suspense um and for me and this this this is where uh i i sort of get
[02:31:57]  like pedagogical again is like to me suspense is the key to understanding the difference between uh render async render to so sorry i'm gonna get the names confused because
[02:32:17]  we renamed them in star start yeah because they're middleware the actual ones are render it's fine render to string async right here to stream and i don't know how
[02:32:30]  i got to be there and render oh we're having to string um so um oh wait someone said nested signals in chat and i'm actually going to put that here
[02:32:48]  uh when when you teach when you teach create store like you should teach it as nested signals at first um so i'm gonna i'm gonna put nested signals here um
[02:33:00]  that's a good call out okay um so the the what basically what what i'm saying here with suspense is that even though you can use suspense in a in a spa
[02:33:11]  with no server-side rendering um it's also the the key to how solid server-side rendering works um and actually i should i should probably put use transition in a different
[02:33:27]  box because it's less relevant for ssr i don't know what it isn't relevant for ssr yeah it goes in its own box of obscure things you
[02:33:37]  can learn yeah it's it's interesting though because this is this is why we've gotten into this kind of mess and why react 18 took like five years and why like everything
[02:33:50]  is kind of in this thing once you hit this pattern and you start seeing the same patterns everywhere you suddenly want to put them all together and in a single explainable way
[02:34:01]  and the key to this whole thing is understanding suspense and i don't mean like yay we can show placeholders but actually understanding why like what suspense is uh okay actually let
[02:34:16] 's let's let's do that first so before before we get to the different ssr things the basic under usage of suspense is uh render a fallback while uh
[02:34:29]  while an async function right but yeah i mean that's that's the mechanical thing we talk about yeah um it's funny last time i talked about suspense on stream i hadn
[02:34:38] 't even written my article on suspense at the time and i was like i wrote one on dev too maybe i'll post the link for that if for more detailed discussion on that
[02:34:47]  and that's more about the fallback stuff no actually this this one actually it was like why is why does this exist at all because like there's lots of ways to show
[02:34:56]  um fallbacks this is why all the suspense understand async consistency javascript frameworks this is actually like the the the the the whole explanation the problem is that we have
[02:35:10]  uis that we want to keep in sync we don't want to have the data model in the background and the data model that we're showing out of date with them um
[02:35:20]  a classic example of this that you always use is like you're looking at something on the screen you click to go to the next navigation and then it's fetching data
[02:35:29]  in the background if you interact with something on the page are you like are you interacting with the future state of the data or the current state of the data i think i i
[02:35:40]  think i wonder if they fixed it a perfect example of this tearing was actually in the taste movies app for angular it might go too fast for people to see it but if you
[02:35:50]  change the the the the if you change it come on is it down my luck if you change the state you can actually see the headers and everything update but then you're
[02:36:02]  still looking at the old data like like there's like a um okay i think for an angular movies app let me it looks like they might have updated this but i'm in
[02:36:14]  popular look what happened i hit top category you see that wait do it again upcoming i only get to do it once because the data fetching timing but look at look at
[02:36:24]  this i i i can do it one more time when i go to upcoming look look what happens upcoming yes yeah right you can it says upcoming but then you're seeing the
[02:36:35]  old data um yeah because if i go back now it's going to be fast because it cache the results but oh there it is action let's do it again like this sort
[02:36:45]  of tearing um can happen more detrimental places than just like the header in in a navigation and the thing about suspense is so we have some solid users like really prominent users um
[02:37:01]  i'm thinking of two but i don't need to say their names who are who use solid only for spas which by the way is totally fine like if if you're
[02:37:08]  making like a very highly interactive app spas are totally fine still um if you only use solid for spas that problem where where you have tearing and like uh you want to
[02:37:20]  make sure some parts of the dom wait for other parts of the dom you can solve that using just a show component um yes yeah there's ways around it that don't
[02:37:31]  involve um that you can like hoist it and manage this your yourself um definitely you don't need suspense to solve this problem but suspense solves it in a nice way because suspense
[02:37:42]  doesn't need like uh if you let's do a code demo um well the thing the reason the reason i want to show this one is look at this is the nu
[02:37:51] xt app version of it and when i switch these categories nah it's it's too fast it actually uh nuxt is yeah this version is too fast it actually holds the page
[02:38:04]  i you're right we're gonna have to do the other demo it actually holds this is a transition i guess but the point is suspense has suspense comes down to the fact that
[02:38:14]  you don't want to show that tearing so you've you've only got like really a couple options of how not to show tearing on any async action you can either keep
[02:38:24]  everything in the past so show what you have currently on the screen wait for everything to load and show the next thing you you can show put a placeholder up this is what
[02:38:36]  we know commonly with suspense where like essentially you go i don't know what this is going to be i'm going to remove the current items and show a loading spinner and
[02:38:46]  then load in them when they're ready this is kind of what your show component does as well i do want to point out the suspense can do stuff that show component can't
[02:38:55]  do as easily you can definitely do it but it involves kind of hoisting it much higher up on the tree because the problem is the placeholder might be fine in this
[02:39:04]  nested content and you have to have but what if you like the the problem with with you know trying to hold the previous page and navigating is you have both states at
[02:39:17]  the same time you have this stuff that you're showing currently and the the you have to go fetch the next data right so you you have to like clone that data like you
[02:39:27]  if if you have a tab or you know like a category like i'm showing here that we're swapping between you have to actually actually have the category that you're
[02:39:35]  showing on the screen and have switched to the future category to tell the data to go fetch that and you can handle this all in the router you know like preemptively fetch
[02:39:45]  and then when it's done render the page but you have to hoist this all the way to the top of the tree all the logic has to be not where it happens
[02:39:52]  in your view but actually all the way at the top of the tree but those are the two most common patterns right you either try and hold stuff in the past or you
[02:40:02]  um blow it away and show loading state until you can show the consistent state the third pattern only applies to certain things where you have enough information like mutation which is optimistic update to
[02:40:13]  show the future immediately so show where you're going to go and then replace it with the real stuff when you when you get there so like if you you know have a
[02:40:21]  if you like hit your like button on twitter you show the heart right away assuming that it's going to succeed and then at a future point um when the data comes in you
[02:40:31]  know it is actually liked and that doesn't doesn't really work when you're when instead of uh liking something you're fetching fetching because you don't have the data
[02:40:39]  you don't have so there's only really those three ways to be consistent if you want to avoid tearing blow it away or bail out stay in the past or um uh
[02:40:51]  or sorry uh or go to the future in specific cases so we're going to stop not think about go to the future for a minute because it's not like really relevant for
[02:41:01]  data fetching and only talk about the other two and and i think i already kind of got at it actually staying in the past is really hard unless you build it into
[02:41:10]  the router and build your whole app around the data being like at that level um it's fine in a sense that's what remix has done and but to be clear like in
[02:41:19]  this example staying in the past would be you go to the next page and like nothing changes on the screen until the data is done yeah yeah so like i have an example it
[02:41:29] 's like the no placeholder the no placeholder because you guess you're not doing anything right you could you could you'd like give some kind of stale indicator if
[02:41:37]  you wanted to but like if i if i think i think we have an example here like this is both examples being shown here this is stay in the past i'm going to
[02:41:48]  click dose click sorry and then i said tray waiting for it see it fades a little bit to give us an indicator but we're staying on the past until the data is loaded
[02:41:57]  that one's a fast one let's see if we can get a slower one you need it uh just change the timing yeah change the example yeah it's like can we
[02:42:05]  make this slower uh child because what we have is a component here that's doing some kind of random delay but let's let's up that delay considerably um so change yeah
[02:42:17]  so click yeah you see how the line doesn't move until after the the like the content is all loaded this is staying in the past i mean how do you how does it
[02:42:30]  oh it did the the freaking uh use transition does the does the yeah exactly but i was like how do you how do you do the the um graying out without suspense the
[02:42:39]  answer is use transition which is suspense there is suspense here um but the the the bail that's what these things are all tied together the thing is the bailout is a
[02:42:49]  lot easier to do right this is the bailout right see notice when this line moves across it moves immediately when i click it and then we just blow out the content no tearing
[02:43:00]  right but yeah what i'm what i'm getting at is to do you're saying you use suspense for either bailout or stale in the past yes because you need
[02:43:13]  suspense for transitions these things are all tied together it's the same range of things um and the the reason this is okay because now i'm gonna do the bailout slow yeah
[02:43:26]  i mean there was some proof some not proof but some kind of like study done on ui that it was better not to go back to the skeleton state unless a sufficiently
[02:43:39]  long period of time has come which really informed the decision on how these apis work because it was seen that this was worse experience then then basically i have to i have to
[02:43:53]  make the time out the same essentially although this is fringing on being too long to be fair for my point but that this felt faster to people than then then then going
[02:44:04]  back to the fallback that this felt like a smoother ui experience for people that was interesting the and i i actually performed this experiment at my work and i questioned people in
[02:44:16]  dev and mostly people outside of dev i went to like 20 different people and they all told me that the version that didn't go to the fallback they're like yeah
[02:44:24]  that that version's faster and i think or sorry except two so it was like it was sorry 17 said that it was faster one said they weren't sure and the other two
[02:44:34]  said that the uh the loading like the skeleton was faster yeah it's i i guess the way i i can conceptualize that is like maybe the idea is when you show the
[02:44:44]  fallback there's like so much changing that it looks like a whole process is going on right so like this this kind of but this is why from the client perspective um
[02:44:57]  we we care about this consistency but the reason it all gets tied together is the mechanism to do this can be handled a few different ways but what was really interesting about suspense is
[02:45:10]  it's based on where the data is read not where the data is fetched that's the whole key you can fetch the data anywhere in the tree but we only care
[02:45:20]  to suspend when we know it's stale like if like the thing is if if we can read the d if we we're not reading that out of date data like and
[02:45:30]  by stale data i mean data that's currently you have data for but then you're gonna fetch it again you know or you don't have it it has never fetched
[02:45:37]  if you obviously if you've never had the data it's stale like i when i load this page i can't show you anything but this loading spinner because like there
[02:45:46] 's no data to show but the question is if you already have data and you go somewhere else um you have that choice of showing what's there like show that tearing if you
[02:45:57]  want to um and the the obviously the idea here is to prevent that but the the criteria of that is based on the view not based on the data fetching it's about
[02:46:07]  like where you use it like if if you nested a a bunch of suspense boundaries inside each other it's only the suspense boundary where you read it that needs to go
[02:46:15]  to fall back you can presumably show the rest of the page um and this this as you said we put transition its own box transition is just the way that we stay in the
[02:46:26]  past we don't have to worry about that but this aspect of how the suspense boundary is the nearest one's the one that falls back based on read is actually really important
[02:46:37]  for ssr um because if you think about it with ssr how do you know when like let's say you're doing some async data fetching how do
[02:46:46]  you know when the um data's done like how do you know when to render the page um and a big part of at the ssr story is is streaming i
[02:47:00] 'm just wondering if i should like we should just launch into that a bit but talk like let me scale draw something for a minute if it if it if it'll help it
[02:47:11]  i i i mean we can we can also talk about like if you use create resource on the server uh without suspense what happens well nothing really because right because like you just
[02:47:29]  you just essentially like it works both ways we there's there's a reason that i want to show the client side because i want to show that the read matters because you
[02:47:43]  could here's an example you could fetch two pieces of data and based on the data that returns from the first source not actually need to read the second piece of data yet okay
[02:47:56]  yeah we we should show that that suspense triggers on read right um yeah so i mean we can go back to this example i guess also um people haven't been chatting uh
[02:48:08]  so we should we should if if something's confusing like uh throw it out uh ask some questions uh we don't want we don't want to lose anyone yeah i mean this
[02:48:19]  is a tricky topic we knew we'd get into some tricky topics when we got to this point in the stream um yeah reset okay so what what what i mean by that
[02:48:31]  is yeah what are we doing here we have we might want to just create a new example from scratch honestly yeah go to a playground and just it's the thing is what's
[02:48:42]  this has all the setup i need which it makes it nice because it it this doesn't use an async component it just uses all this does is it creates a child
[02:48:54]  component on each route and it has a resource in it and that resource is is read inside that component essentially so down here we have a switch match not your favorite component but you
[02:49:08]  pretend it's your router it based on what tab it shows a child with different props uno dos tres and it uses that prop essentially to look up like do an async
[02:49:20]  request your server to get the data for that specific story right that's the biggest like the resource is just a delay timer for our purposes but what it does is like based on
[02:49:31]  that prop decide okay i'm gonna get uno i'm gonna get dos i'm gonna get tres uh you know like get the the different uh you know get the the different data
[02:49:41]  based on it so when we're swap swapping through we we basically just have a component that's below the route below the switch that actually does the data fetching and
[02:49:52]  what suspense lets us do is when we read this time here um show that fallback like if we don't read the time if i just put in like 100 here or something
[02:50:04]  or 11 it doesn't really matter what it is first of all when we load the page it's not waiting for that like it didn't need to read the resource so
[02:50:13]  it doesn't have to wait for that so when i switch like it goes immediately it goes immediately it's only because it knows that it has to wait for what was it
[02:50:23]  too fixed whatever i think it's too too fixed that it has to show that loading state because it's not ready yet um and the funny thing is we could isolate right now
[02:50:39]  our app is really simple we just put a a suspense boundary around our switch so we show the the tabs up here and then all the content around the route you know are
[02:50:50]  under a suspense boundary so it picks everything up to this point and it shows loading instead of instead of uh whatever content but We could do something here where we could go,
[02:51:06]  let's add another suspense boundary. And we could put that suspense boundary much more narrow. We could put it here, right? We can go, I'm going to actually
[02:51:18]  put this in the suspense boundary. And I'm going to, what's my fallback going to be? Fallback equals, I'm trying to pick, think what
[02:51:33]  I want my fallback to be. Let's just do what? Let's just do a string. Let's do. Loading time, I don't know. Unknown
[02:51:44]  milliseconds, okay? And you can already see it with the loading here. Like the page loads instantly and then it swaps the unknown. And as we navigate, you
[02:51:59] 're going to see the page switch instantly. And the reason that is, is because this data isn't actually being looked up. I just hard coded it in. It's
[02:52:09]  not part of the actual request. One thing that's cool about this is it's the same mechanic as when you call use context. You go up the tree and whatever
[02:52:23]  context provider is closest to you, it gives you the data. You don't have to go up anymore. And that's the same thing that happens here. The big suspense
[02:52:35]  is not reached. We go up to the soonest, closest, well, I'm really stumbling here. But we go up to the closest suspense and that gives
[02:52:44]  us our fallback and we never use the outer fallback. So I put the content inside the suspense boundary now just so that I can, but you can, you
[02:52:54]  can see that like it was able to render this part of the page without waiting because we broke it apart. Yeah, and, and, um, when you use multiple
[02:53:09]  resources inside of suspense, it waits for all of them. Right. It waits for the ones that that specific boundary cares about. Um, and yeah, I mean, there
[02:53:24] 's a suspense list, which is annoying and I don't like it. Well, it's first orchestrating suspense. Um, and, and we might have a tutorial
[02:53:34]  on it here somewhere, but it's, it's, it's, it's not the immediately important thing. Um, the, the important thing here is we say we
[02:53:44]  break our app into these boundaries where we're comfortable, uh, in terms of like saying like this data goes together. But like, what's cool about this approach is like
[02:53:56]  as data requirements change over time, the app just, you can create those resources wherever they may be. It makes sense and the app can scale with it. Like this
[02:54:05]  resource is inside a component, right? Some people talk about this, like, Oh, I like data fetching inside co-located inside my component. That's what
[02:54:13]  this is basically doing. I'm not suggesting that this is like doing it down. Some crazy nested waterfall tree is always, you know, the best thing. Cause
[02:54:21]  you, this doesn't prevent waterfalls, but as soon as you have suspense data fetching, like wherever the hell you feel like, um, you know, it just
[02:54:31] , it just works like this, right? Like you, you, you don't have to worry about the race conditions and, um, the UI just works itself out
[02:54:39] . But I guess where we're trying to go with this though, is that this same, like, if you look at the initial page note load considerations here and forget the
[02:54:54]  fact that this is an app. That's like rendered in the client that data loading in the client, this same mechanism can be used, um, for SSR essentially
[02:55:04] , because it tells us when the UI is ready and it can do it in pieces, which is really important. That I guess a lot of people don't realize this
[02:55:15]  is solid early days. I mean, I think I have a, was it real world demo demo, uh, uh, solid, I wrote an article a couple of years
[02:55:27]  ago, a solid implementation, real world demo. Um, not that I want the actual medium article. Yeah. I wrote this article and, uh, where was it?
[02:55:38]  Um, I, I, I showed these performance metrics, um, you know, for the real world demo. And this is like light speed, like a lighthouse page
[02:55:49]  scores and stuff. It's not really that interesting. It's just initial load and talks about time to interactive talks about, you know, time of loading trace. I get
[02:55:58]  into a whole bunch of metrics and solid is doing really, really well in like every single metric. And the funniest thing about this demo was like a people like, yeah
[02:56:06] , we know solid's fast was a lot of the competition was actually server rendered. Right. So solid, solid client side rendering was outperforming server rendered pages, which
[02:56:17]  is kind of nuts. We weren't on a slow network to be fair. And that will make client side rendering just diet, evil, slow death. But if on
[02:56:26]  a fast network, we were outperforming a bunch of server rendered, uh, applications. Like this felt app, I think was built in Sapper. Um, and
[02:56:37]  honestly felt performance is good, but there was other ones that were built in like, like that were built using SSR here. Like, and they were doing much,
[02:56:48]  much worse. And it was because the, the timing and the way that lighthouse scored and stuff, they were waiting to get all the data fetched before they rendered anything on
[02:57:01]  the page. Right. Like that, that was the pattern. And the reason for that is, is that where I was going to get to is on SSR,
[02:57:12]  the classic pattern that we've been doing here is synchronous rendering. So we go, we go, we go fetch all the data for the page and then render to string.
[02:57:22]  So go one, two, right. This is what, this is, you know, sync SSR. The, the problem with this are actually, I'm going
[02:57:33]  to call it classic async SSR to be fair. The, the, the problem with this approach is, first of all, you need some mechanism to know what data
[02:57:47]  to fetch. And that's, that's, yeah. So, so like in, in next JS, you have get static props or whatever. And next you have
[02:57:58]  fetch. So like every, you need like a server side framework to know what to fetch. Right. Yeah. Like the, so the, the, that was the first
[02:58:07]  thing. So they're like, how do you identify this? Well, you need like gets GC, you know, GSS, whatever gets server side props or load
[02:58:16] ers or whatever you need something. It's funny. Cause solid actually has these mechanisms, but actually doesn't need them. I think they're good for performance. Cause they
[02:58:25]  hoist the fetching to the top, which is a good thing. To be, to be clear. Like you can do solid SSR without solid start. And you
[02:58:32]  won't have these. Right. Right. The, the, the special export is actually just a data field on, on the router to be fair. You can,
[02:58:40]  you could still produce the same data fetching patterns without solid start. Like, like this without having the file system routing. But yeah. So the thing is that they use
[02:58:50]  this approach to identify the data, fetch it all upfront and then render string. There's some other interesting approaches where they, they, they do like double rendering where they
[02:58:57]  like render the page, do all the data fetching and then render the whole page again after all the data fetching. Yeah. Like a pre render, like a double
[02:59:07]  pass. Um, uh, what was this thing? It was called like pre pass or whatever. But like, this is the state of the art of SSR, like
[02:59:17]  up to like pretty recently. Um, this is what like, this is, this is up, up until like RSCs. Like this is how, uh,
[02:59:24]  right. Right. Right. Yeah. Exactly. Like this, this was, and for performance standpoint, it was like shooting fish in a barrel. Like, like, this
[02:59:32]  is just not like, like, this is just not, you know what I mean? Like, so like the funny thing is you don't actually need RSCs or
[02:59:39]  react server components to solve this. React 18 actually had all the tools to solve it. Remix has been solving this as well with their, their deferred, but
[02:59:48]  this is all very recent this past year. Right. So it was very easy for my stupid client side demos to outperform on load when they had no business to, because
[02:59:58]  of, you know, just the nature of having like a small demo and having efficient code. Of course, Solid's SSR solution for the last few years has
[03:00:07]  also taken these learnings because the thing is the other, so this is kind of like, honestly, pre suspense, this is what you had to do in less.
[03:00:19]  Like, I mean, the alternative is, is this, the alternative is what we're going to call what we're going to call this sync SSR, which is render
[03:00:30]  to string fetch on the client. Right. Yeah. I mean, this, this, this is, this is people do this in next all the time. They don't
[03:00:43]  use get server side props. Yeah. Then they render the, the synchronous part of the, of the page. Uh, like, so the shell, and then when
[03:00:52]  the page loads, the rest of the content loads in. So you get like an app shell and then you see all the loading spinners and then you, um, and
[03:00:59]  then you fetch on the client. Okay. And, and to be clear, um, uh, solid routers use route data is a version of a loader basically.
[03:01:10]  Uh, no, no, I, because it doesn't fetch up front like this. Oh, it doesn't like, no, it literally only works cause we have
[03:01:24]  suspense. Okay. Like there's no, there's no suspense in the router. Yeah. Well, how should I put it? It's the router is really dumb.
[03:01:35]  Um, so the, the fact that like, basically it, it does, this needs, this needs like, this needs to like run twice. I don't know
[03:01:45]  how, how I can put this, but like this either needs to run twice or use a compiler. Like you need to be like bundler compiler, right? The beef
[03:01:53]  solids, uh, loaders are there just to optimize when you do the data fetching in parallel. It's not like, it's not actually a compile thing.
[03:02:01]  It's a runtime thing. So you actually don't get to it until you're actually executing your component tree. Okay. And when you say solid solid loaders, we
[03:02:08] 're, we're referring to, uh, use route data. Yeah, exactly. So it's not actually this, it was just a choice to hoist it because that
[03:02:15] 's just, here's the thing. Even if you, that's what, that's what I'm getting at. Like we hoist it. So it looks like
[03:02:19]  a loader, but you're saying it's not really a loader. Like it's still, you still have to get there first. Right. It's literally just
[03:02:22]  a function that gets called when the route gets resolved. It's just like registering a bunch of like, like on route change things. You actually have to render the page to
[03:02:24]  get to it. It's not actually hoisted all the way up. It doesn't like it only, we only see it when we rendered a string. We did
[03:02:31]  not need to build a bundle or a compiler to do this. This is why anyone who goes, picks up solid router can go and just do that and run with SSR
[03:02:37]  without having a meta framework and get the same benefits of parallelized data fetching. Yeah. It's parallelized data fetching. It's not prefetching on the
[03:02:43]  server. Right. Right. So the, but the thing is, this is why I was really excited about the solution when we came up with it a few years ago
[03:02:50]  and solid was because we literally could take the two pieces of the puzzle, put them together, get the same benefits without me having to write anything. I don't know.
[03:03:03]  I don't know. Right. So the, but the thing is, this is why I was really excited about the solution when we came up with it a few years ago
[03:03:08]  and solid was because we literally could take the two pieces of the puzzle, put them together, get the same benefits without me having to write anything. I don't like
[03:03:15] , I didn't want to make this thing. You know, I didn't want to make GSFP. I didn't want to actually like go through the work of actually
[03:03:21]  compiling it out and doing all that stuff. I was like, you know, screw that. Let's just like. You did it anyway, like three years later,
[03:03:26]  but back then. Well, yeah, I did it anyways as a, as a convention, but the funniest thing is the file system router just like links a file to a
[03:03:33]  file. We don't actually still to this day. Don't hoist out the data fetching because it's important because if you hoist out the data fetching like
[03:03:40]  this, well, I mean, you can solve it. Remix managed to solve it a different way. But like if you hoist out the data fetching and
[03:03:46]  you await it, like if you, if you put an await call here, like you, you, you don't get the render string until you finish your await, so
[03:03:56]  to speak. Um, so like this, this, this is the worlds we lived in this, like until this past year, these, these are, um, your
[03:04:05]  choices. And honestly, I call, I don't call this classic sync SSR because technically solids rendered a string still works this way. Cause this is what you like.
[03:04:13]  You just rendered a string and then this happens on the client. So yeah, this is, this is, this is like, let's be clear. Like, even
[03:04:20]  if you use suspense, if you're, if you're using, I mean, we, we should throw it out here. Like, uh, solid has three SSR
[03:04:28]  modes. Yeah. A lot of people don't know this. Um, solid has three SSR modes and they're all used in production. Um, yeah.
[03:04:35]  Yeah. So, um, even if you use suspense, the way render to string works is it will run. Um, uh, yeah, it'll, it'll run
[03:04:49]  to the render the fallback on the server. Right. Right. Yeah, exactly. Yeah. So it'll render the fallback on the server, ignore any resources exists
[03:04:56] . So like essentially it just, it, it, it does actually acknowledge the resource read, but it doesn't actually like do the fetch. It's kind of,
[03:05:04]  it's, it's clever that way. So it doesn't actually fetch on the server. What do you mean? You're saying the, the, the, when you
[03:05:11]  say it acknowledges the read, you're saying it triggers the fallback. Yeah, exactly. But it's yeah. But if, if you did it, if you
[03:05:18]  wrote your resource in such a way that they didn't fetch on the server, it can also not trigger the fallback. Like we still trigger the fallback based on whether
[03:05:28]  it would actually suspend. And you'd be like, why would you do that? Why would you do that? Well, if you didn't suspend a suspense boundary on
[03:05:34]  the server, that means you can show the content right away on the client. Right. So there's no, there's no point actually having the client have to wait to
[03:05:42]  find that out. Yeah. So you're, you're, you're smart about it. Like you run the code. Yeah. Yeah. Um, if, if
[03:05:49] , if it wouldn't normally suspend, then you can show it back. Yeah. You can show the actual code that gets written. Yeah. So again, this is that
[03:05:59]  knowledge of, of, uh, that comes from reading the resources of knowing what you need to. Right. So the, where I was going to go to next is
[03:06:07]  the funny thing is today in solid, the other two are almost actually identical, but they're, but I have them there for, uh, API convenience and stuff,
[03:06:17]  but it's like, how do you actually do async SSR? Right. And the answer to that is fetch as you render, um, which is you don't
[03:06:35]  wait. You just start fetching the data as you hit it. And then basically re-render, render, uh, suspense boundaries as they complete that. That's
[03:06:54] , that's it. It, to be fair, it's, it's like a smarter version of pre-pass. Um, but well, and, and, and
[03:07:02]  when you say re-read like this, we're still on the server. Yeah. Yeah. Async SSR is like, it, it's, it,
[03:07:10]  it waits. Um, it does the, it does the fetching on the server. So the, like, theoretically, uh, if you compare sync SSR with,
[03:07:20]  with async SSR, you'll get your response quicker with sync SSR. Yes. Because the fetching still happens here. This is, this is very similar to
[03:07:29]  this. Like if this is where we, if this, if the, then it's like send response. Like send response. If this is where we stop the story
[03:07:37] . I just recreated this without having a compiler. Like we, we just recreated the, this experience without having any, uh, like GSSP loaders,
[03:07:47]  whatever. Like you, you just like, you don't need that to do async SSR and solid. I, I, I get the, it's funny
[03:07:55] . The main reason for actually hoisting this stuff out is because the client, because the client does code splitting and the client wants to be able to fetch the data and
[03:08:04]  the code at the same time. If you didn't have to worry about code splitting, then you could just fetch in all your components and, you know, deal with the
[03:08:11]  waterfalls. If you're like, just deal with it as you deal with it. Right. It comes down to suspense. Doesn't prevent you from making waterfalls
[03:08:20] , but it lets you kind of like put that data fetching wherever the hell you want, because you know that it can control, you know, where it happens. Why
[03:08:29] , where that happens matters is that the third mode, which is secretly async SSR actually just uses under the hood. Wait, before we get to the third mode
[03:08:37] , I want to be clear about what happens if you don't use suspense, but you have async SSR on, you know, you'll get to a resource.
[03:08:47]  Yeah. And then what will happen? It will, it will do the data fetching. Then it'll read the resource, see no suspense boundary and go, okay,
[03:08:58]  well, I guess we're not suspending. We don't care about that. It will just, uh, like, just treat it like whatever and just go like
[03:09:07] , it'll just, it'll just continue on its way and go get to the end of the rendering and go, I guess we're done. So it'll, it
[03:09:13]  won't wait for the data fetching to come back. Um, so this is interesting. So it'll, the, the fetching starts when the resource is encountered,
[03:09:21]  right? Yeah. So the resource encountered the, the fetching starts and then it finishes rendering and sends the, sends the, sends the result to the client. So
[03:09:34]  there, there's, there's, uh, in other words, this is not equivalent. Um, if you do, uh, this is equivalent on the client. If
[03:09:43]  you're not using SSR and you do suspense, uh, data, suspense, and then you do this. So these are equivalent on the client, right? Um
[03:09:59] , not really. Right. The, the one will show the fallback when data is not available. And the other one will just be undefined. Like they're
[03:10:07] , they're, they're, they're equivalent because the fallback is undefined here, but. Right. And, and, and, and they're not
[03:10:16]  actually equivalent if there's a parent suspense boundary, because this one will get picked up by the parent and this one will be isolated to the specific. Okay, fine. My
[03:10:25] , my, my fun, my fun point wasn't, wasn't, it doesn't work so well, but. My, my, I was actually trying to say
[03:10:31]  that this is like almost the exact same mentality. That's why we went with this like API. Cause it's kind of the same thing. Like that. Essentially. It
[03:10:41] 's based on where you read it to know which parts of the viewer aren't available or are stale. So if, if the thing is one thing we could do
[03:10:49]  is wrap the whole thing in suspense automatically. Um, and if you look at all the solid start examples, they all have suspense. Which I'm annoyed by. You're
[03:10:59]  annoyed by. I don't like how they, they wrap the entire thing in suspense because that teaches people to not use suspense for its intended purpose, which is to do,
[03:11:08]  you know, granular fallbacks. Right. The thing is like, there, there is an ambiguous case of like, what should like. The default behavior. Exactly.
[03:11:18]  Like where you're like, we should just like collect it and be like, I don't know. Because there's also what triggers suspense, um, on the server,
[03:11:24]  mostly just data fetching, but in general suspense triggers also on like a lazy component boundaries, right? Like if the code isn't there yet, you suspend. Um,
[03:11:33]  if the data isn't there yet, you suspend. It's, it's all kind of like the, the same sort of mechanism. So, yeah, so this
[03:11:43]  is interesting. Um, if like, if you, if you don't have any suspense, the create resource will be effectively ignored. Um, if we wanted to dive really
[03:11:54]  deep, I would ask you, what's the mechanism that suspense uses to tell the server to wait? Yeah. I mean, it's, it's, it's
[03:12:02] , it's, it's, it's a context again, essentially. It's a, it's a different context, but it's a basically context. It, it
[03:12:07]  registers it. It goes, Oh, Hey, there is a suspense boundary. Let's register. It registers the resource with it. It works very similar. And then
[03:12:16]  the, the only difference is the suspense element itself. It's a little special during SSR where it basically tells the, the renderer, like the render call that,
[03:12:25]  Hey, um, the, the, there's still more work to be done. Don't close the connection. So to speak, it's easier to explain this from
[03:12:34]  the fact that actually the async SSR is just a wrapper around the streaming SSR. Um, okay. Yeah. Let's talk about streaming SSR. Yeah.
[03:12:42]  Um, cause which is why I was trying to kind of get there is that this, this would be, as I said, kind of ended the story if we were just
[03:12:52] , um, if we stopped there. But the reason this is interesting is streaming SSR, um, it's actually the same steps, but this, the difference is
[03:13:06] , this is like a weight. Yeah. And this one, this one is not, this one is the second you render everything. It sends a response. And then as
[03:13:16]  the suspense boundaries complete. Each one sends their own response. Yeah. Yeah. Yeah. Stream the individual suspense boundaries. I mean, we can, we can do like
[03:13:29]  a more parallel timeline here. Like you, um, we do an initial pass through the dom. And when at the end of that pass, we send, we, we
[03:13:43]  send a response, send to the client. Um, as we're going through this pass, we are encountering suspense boundaries with, with resources. Um, okay.
[03:13:55]  I'm going to think of the best way to work to like, this is a suspense and like, this is, this is a suspense too. And each one of the
[03:14:07] , one of these triggers their own timeline. Um, right. Um, right. Yeah. So, um, nice. Okay. I'm following. I'm taking
[03:14:15]  what you're doing here. And if you, if you encounter a suspense inside a suspense, you have the same thing. Um, yeah. And the idea is,
[03:14:34]  um, you, when we, when we hit the, the send marks, we send, uh, whatever we have, um, at that point. So, yeah
[03:14:52] , exactly. So sometimes like the child might finish before the parent finishes and then we send them both together. Sometimes they don't. And then they get sent one after each
[03:15:02]  other, but this, it lets us like, kind of like send it almost like an onion. Like each layer gets sent out as it's available. Okay. That
[03:15:11] 's interesting. Let's think about when, when they get resolved together. So the idea is if, um, I mean, that wouldn't happen at the top, right
[03:15:20] ? No, no. But like the thing is like the second one you have here. Yeah. If this one finishes before this, I mean, this isn't actually showing
[03:15:29]  it very well. Um, because the, the, the, do you know why this doesn't show it well? And I'll explain this because the whole idea is you
[03:15:36]  show the fallback, but you're still actually running the code. So if you have a child suspense inside a suspense component, it's still going. It's a
[03:15:44] , you hit it like early enough. Like you can still hit it even though like, um, it's, it's, you know, we sent out the response with
[03:15:53]  the fallbacks here. So technically speaking, this one here could finish before this one finishes. And then this, when this chunk sends, it actually sends them both. Or
[03:16:03]  if this one finishes first, it'll send it. And then when this one finishes, it'll send this. Yeah. Um, onions don't work like that.
[03:16:10]  Okay. Fair. But, uh, yeah. So yeah, the, the nest, the nest of stuff is really, it's really hard to wrap your brain around
[03:16:24] . You kind of have to watch it, I guess. Yeah. I mean, I, I did visualize this at one point on a stream where I actually drew a Twitter
[03:16:32]  app and showed like the, the different sections, like, or like, or I drew like a website and I showed like, like different. I remember that. Like
[03:16:42] , like this, the way the stuff streamed into the, each section out of order. Here. You want to see something cool? I took notes on that. I
[03:16:48] 'm going to send this to you and you can pull it on, on, on your screen. Um, this was like, this was like 2021. Um, I
[03:16:58]  even did a, I even put a table at the bottom. Um, I like this because I see you, you did the, you had my diagram here about the
[03:17:10]  portions. And then you, we showed how, as the pieces came in, you would like have the, you like, we pretended that one, two, three came out
[03:17:20]  synchronously. And then that four and five were under a nested suspense boundary. So when you first rendered the page, you got one, two, three, and
[03:17:28]  you got the placeholder, like the fallback for four. So this is loading here. And then when four completed, it would stream onto the end of the document
[03:17:40]  four plus the five placeholder, which would then get inserted to replace the four placeholder. So stream that in replace. And then I don't know what that is
[03:17:53] . Yeah, I don't, that's yeah. Um, did we not, did we not explain hydration, but. Okay. But the point is then five would finish
[03:18:03]  and then it would get added to the bottom and then it get replaced into five P. But the, that replacement of four going into four P or, um, five going
[03:18:12]  into five P, which is a fallback or placeholder can happen on the server as well. So like, technically speaking, we can like, if, if you
[03:18:20]  run the UI through and you fetch the data for four and five at the same time, if five finishes first, the server can actually insert five into five P before streaming the
[03:18:34]  four to the client. And then four will get streamed to the client. And then it will be inserting the client into four P. Um, so that, that.
[03:18:43]  I need, I need to do some sort of animation or, or demo that really shows everything. Um, okay. But, uh, yeah, I, I like
[03:18:50]  what Ian's saying here, um, about the difference between, um, render to string async and render to stream is that render to string async is like you put
[03:19:02]  a promise dot all around everything. Um, and what's nice about that is on the server, you can put the, like, you don't have this problem of
[03:19:14]  like sending it at the bottom of the stream. Like as soon as your data is done loading, you render it in the right spot. And it's not, that
[03:19:22] 's not a particularly tricky process. Right. Um, I'm trying to imagine like the renderer, like at different points at the same time. Um, I mean
[03:19:34] , it is, it is, it is way simpler than that. You can picture that we're just making a giant string and then the string has like a marker in it
[03:19:41] . And then we go and like string replace at that marker on the other pieces. Like that. That's like literally what we do. We like take one block of string
[03:19:49]  and insert it in the other string. So like on the client it's strings on the Dom it's Dom node. Here's a question. No, one's going
[03:20:00]  to see the fallback, right? No. So, so you don't even have to render it to render that to a string. If it's a, if it
[03:20:05] 's a very intensive fallback for some reason, you don't, you just ignore it. Yeah. You literally just put like fallback here. Like, yeah. Yeah
[03:20:14] . That's, that's awesome. Um, but what, what, what, but the thing is with the async approach is you have to wait for everything.
[03:20:21]  Um, and the streaming approach, uh, because what, that's what I meant by like the way they compress is. Cause if you just wait to send till the end
[03:20:29] , it all gets compressed. Like we talked about, but if you send as you go, then there's potential of stuff. So you have to support both. And,
[03:20:37]  but the, the key differences in solid, our resources have this concept of defer stream, which means that each resource can choose whether it causes the stream to wait or not.
[03:20:48]  So if you tell every resource in your app to cause the stream to wait, you end up with async, even when you're streaming. Right. This is the
[03:20:56]  pro this is the problem with the solid start demos is if you go to one of those solid start demos and you change it to streaming, you get no benefits because the suspense
[03:21:03]  is at the root. Yes. Yeah. Yeah. Yeah. You, you, you'll just like, you'll, I mean, it depends on what you do
[03:21:10] , but generally speaking, you put your nav, like the hacker news demo, the nav will be above the suspense boundary. And then like, like you see the nav
[03:21:17]  and then the whole page is streamed in. Yeah. Right. That's okay. At least, at least the nav is above the suspense. But yes, you're
[03:21:25]  right. The, this is the thing is you, you want more granular suspense to be able to do smarter things because suspense has a characteristic that we didn't talk about too
[03:21:33]  much in this demo. It's that we did show how it's lazy like this. Um, so you can picture that, you know, streaming in or whatever,
[03:21:44]  but it also applies to, um, it's fine. It transitions as well. New suspense always falls back. So you can use this mechanism also to, uh, to
[03:21:55]  like cause transitions to only like, you can change where the transitions hold. This is why suspense and transitions are the same concepts. I think I, I think I might
[03:22:05]  want to go to transitions next, but I want to make sure that we summarize, um, this, right. The, here's the insight that I, I'm going
[03:22:16]  to start using when I'm teaching is the only difference between the SSR modes is suspense, right? Like if you're not using suspense in your app, all the SS
[03:22:28] R modes do the same thing. Yeah. I mean, uh, yeah, I mean, but that's the whole thing. And this is maybe where the confusion is
[03:22:39]  like not using suspense makes no sense. Like you, you, you, you, you want to use suspense if there's async involved, period. Even in the
[03:22:47]  sync case that gives you your fallbacks. Right. Right. In, in the, in the async case that tells it when it's done rendering. And in
[03:22:54]  the streaming case, that gives you that granularity. You, you use the exact same pattern with the exact same code and you can basically do all three. And in
[03:23:02]  the case of streaming to async, async is like, just like the, the reason we default right now is just because like, you have to send the headers.
[03:23:09]  You have to like send the response. And there's like some difficulty with libraries working with streaming that we just made the default. But generally speaking, even async mode
[03:23:19]  is just an, a special specialization on streaming. So technically speaking with streaming, you can do all the behaviors. Like there, it is possible to write the code to
[03:23:30]  do all the behaviors. Streaming can do sync rendering and then tell the client to fetch everything. It can hold all the resources to do async rendering or can do everything
[03:23:38]  as you want to. So in the sense streaming SSR and the way you control that is with suspense. You and the defer on the resources. Yes. Defer
[03:23:48] . Oh gosh. We should probably should talk about that. No, I mean, we did a minute ago. That's why I was saying the, if you defer all
[03:23:53]  the resources, like defer stream, then it becomes async. Like it's becomes the same. So all defer does is tell that each individual resource, like, Hey,
[03:24:05]  like don't stream until these resources have completed. It, it, it batches them together. Yeah. Well, yeah, it basically defers when you actually start
[03:24:16]  sending the response. So if you deferred them all, you, you, you go back to async because then you wait till the end. If you defer only couple
[03:24:24]  of them, like say you defer your off, but don't defer your data fetching, then you can at least have the power in your stream to go. Okay
[03:24:32] . This person's unauthorized. Like while you're on the server, don't show anything like do a four or four. And then, you know, if they
[03:24:39]  are authorized, then you're like, okay, fine. I will send the response now. And I will wait for the rest of the data to come in. Like
[03:24:46]  it gives you that ability to, to kind of choose which stuff has to happen before we respond and which stuff can happen later. So yeah, streaming is its own level
[03:24:59]  of complexity, which is why there's this interesting thing. Why, you know, we default this way, but like the thing is the combination of suspense and streaming and this
[03:25:08]  defer thing I mentioned before gives you the power to actually do all of every existing approach, all as one approach. That's why this is so powerful and why, you
[03:25:19]  know, default to streaming with React 18, you know, and, you know, next 13 app directory and all this stuff is, I mean, the hard part actually with
[03:25:29]  streaming is that not every platform supports it. You know, AWS serverless doesn't support it, you know, like, which is tricky when like Vercel and
[03:25:37]  Netlify also use that for their primary thing, but they support it, right? Well, I don't know if Vercel has done something recently, but generally
[03:25:46]  speaking, only in their edge functions actually had streaming because under the hood serverless functions, AWS. So don't support streaming. So this is the second, there's
[03:25:59]  like a lot of places where streaming, you know, has these trade offs right now, just because like, until this past year, the only frameworks that use streaming were Marco
[03:26:10]  and solid. And you know where I got it from. One, one other thing about async SSR, if you use, if you're trying to make like an
[03:26:23]  SSG. Yeah. Yeah. You can use async SSR to do data fetching. Yeah. Yeah. I mean, that, that, that, that
[03:26:32] 's, that was the original reason why I even kept the async mode. Like these used to be different. And then I made them the same is because from an SS
[03:26:39] G standpoint, you don't care about streaming out the data. So like, you're just going to render async because. Yeah. Yeah. SSG is also handled
[03:26:47] . We didn't talk about that. SSG is also handled by this pattern because it's just when you do the request, right? You, if you do the
[03:26:53]  request at build time, that's what SSG is. It's just do the requested at build time. It's sort of on. There's no reason to do sync
[03:27:02]  SSR. Like let, let's say you had async SSR turned on, but you wanted it to work like sync SSR. You could just not use
[03:27:10]  suspense. Yeah. Or not use resources and stuff. Yeah. I, yeah. I, I, because the, the tricky part is you still want the suspense in the
[03:27:21]  client. You always want suspense. Oh yeah. Right. To show your fallbacks. Yeah. So there's, it's a little bit trickier than that. And
[03:27:28]  this is why teaching the stuff can be tricky at times because, because I actually think the answer is you always want suspense. Yeah. I think the, the spot,
[03:27:37]  like, and this is why I want to bring, I want to teach suspense with SSR because if you don't bring any of this into it, someone can just be
[03:27:49]  like, look, I'm always just going to couple my resource to my fallback. Um, and you know, it's, it's, it's simple.
[03:27:58]  It's simple enough because they're, they're reusing the show thing that they learned earlier. I think, um, in other words, without SSR suspense versus like
[03:28:09]  dot loading is the same argument as context versus global state. It's like, do you want to, do you want to couple it or not? Right. And,
[03:28:18]  and, and the problem is suspense, even in the client does so much more. So it's like, it's tricky because, um, what else does it do in
[03:28:25]  the client aside for decoupling? Transitions. Okay. That's what, that's why we need. Right. So, so like, like the, and the
[03:28:35] , the thing is suspense is so, so powerful, um, because it ties all these pieces together in a singular async model. So you can write your code in
[03:28:44]  one way. The funny thing is as a, it's a kind of a low level API. Um, at least the transitions are so transitions get hidden in routers.
[03:28:51]  And what we're seeing is suspense is getting hidden in, in like file system routers as well. And, but that doesn't really let you leverage it fully. Do
[03:29:01]  you know what I mean? Like one thing that I'm seeing a lot of right now is like, like next new routing has like a placeholder file, like, like
[03:29:09]  the, the folder. And that's like basically, again, like a good defaults kind of approach, but trying to convince, like, it's basically like,
[03:29:18]  okay. I don't get the example. It's a, it's a, it's a default file. What is it? Okay. Maybe you haven't seen this
[03:29:25] . Uh, yeah, I didn't last week's stream. Next app directory. No, this is when I was, let me see if I can find it.
[03:29:31]  Uh, app router. Uh, maybe the fundamentals. This isn't terribly important, but the thing is like their file system router has, has specific named files that include suspense
[03:29:46]  and errors boundaries built into the file system routing. Oh, and at the root of the file, basically, there's a suspense. Yeah. So we have page.
[03:29:54]  We have layout. We have loading. Error. Like, see, this is suspense. Okay. This is interesting. Loading.js. Create loading UI. Lo
[03:30:04] ading wraps a page in a suspense boundary. Wow. That is weird. That is, uh, really, really interesting. Yeah. So, so this is, so
[03:30:12]  first of all, this is similar to like the felt thing where like you have a folder for your route. Yeah. Um, so like the, like there, there's
[03:30:21]  a lot of attempts right now to try and simplify these mechanisms, uh, for people. Cause like, like, like, like you can still see this doesn't actually solve
[03:30:30]  our problem. Right? Like the, and it'll suspend your entire page when, or it's nested route section. Okay. So it's like a little bit
[03:30:40]  better, but one of the things that I think is really interesting about this pattern is there's a reason for this in react. And, um, I can show it really
[03:30:48]  quickly here. It's because I think I showed on a previous stream. So I apologize for the people who've already seen this, but it's this async function,
[03:30:57]  my component. So this is going to be my server component, right? It's because whether you're using a weight or use, but a weight makes this like really obvious
[03:31:08] . Yes. Equals a weight. Fetch data, whatever. Whether you use it. It doesn't matter. This could be used. React subscribes at a
[03:31:16]  component level. Right? So picture what your entry to your route section looks like. If you're presumably going to wrap it in error boundaries and suspense. You want
[03:31:29]  this to be like my homepage, right? You want this to be homepage, but it can't be because you can't put suspense here and expect it to suspend.
[03:31:43]  Because even if you read it, you're reading it right here. You're not reading it under the suspense boundary. Ah, no. Even if you read it under the
[03:31:52]  suspense boundary, it's considered per component. Right. So even if this was used or something, it's this component. So you actually, your homepage has to actually
[03:32:05]  be return suspense boundary, like this kind of wiring. Suspense, you know, my actual component. And this is because the mechanism we talked about in solid that
[03:32:20]  triggers suspense is the read. Right. And React is still the read, but they only have the capability of reading at a component level. Wow. So this is cool because
[03:32:34]  this is like a really interesting benefit of like the fine-grained reactive approach that has big ergonomic consequences when it comes to these server-side patterns. Right.
[03:32:45]  Well, the consequence is they don't want you to have to write this every time. So they go, okay, don't worry. You can write this code and we
[03:32:54] 'll expose this through a file system router. Yeah. And you can't do granular. Yeah. The only way to do granular suspense is by creating a new component. Yes
[03:33:06] . Right. Yeah. So this is why like they're kind of on board with this. Whereas, as I mentioned in solid, you can literally just go create resource
[03:33:15]  here, suspense, read it underneath the suspense boundary. All in one component. This would make a really good conference talk because everyone's talking about suspense and next 13. It
[03:33:27] 'd be really cool to show how solid does suspense. Right. But what I'm getting at is this sort of awkwardness is why we ended up with the file system
[03:33:39]  routing like this because there's like, you don't want every person who uses your app to have to wire that up. Like who creates a page, you want to
[03:33:47]  just make a page file and not have to worry about this, but it makes you prescriptively fall into certain patterns, which is tricky. So, yeah. So
[03:33:59] , how about error boundary on the server? I mean, it's a similar problem though, right? Like you have to wrap the error boundary around where the error occurs.
[03:34:11]  So, like it's fine from the perspective of like, you can still error in like a JSX binding and get caught by the error boundary. I think it's
[03:34:20]  fine. But yeah, this, this is, this is, this is why they have dot error and, or error dot JS and, and placeholder loading dot JS or
[03:34:33]  whatever. So, and it, in solid error boundary, that doesn't change, that doesn't change per mode, does it? No, no. I, the
[03:34:46] , the only part that gets tricky is if you've already flushed the error boundary into the client and the server, um, is, is, uh, still like crunch
[03:34:55] ing on it. Right now, right now we have this mechanism where we can actually throw the error across the stream. So like you can error on the server and tell
[03:35:03]  the client that's mid rendered on the stream that, Hey, something error. Do you guys need to handle the error boundary in the client? So, so that would like
[03:35:10]  to just to do an example of what this looked like if you, Oh, sorry. I, I, my mic doesn't pick up because it's one of these cond
[03:35:18] enser mics. So when I leaned back, no one can hear me. Okay, fine. Uh, sorry. Um, so this would be, if you have,
[03:35:27]  uh, like if this is error boundary with like some stuff here and then you had suspense here, suspense data. Yeah. Yeah, exactly. The, the, the
[03:35:49]  tricky part here is server components change the math a bit that I think you almost have to make suspense into error boundaries. Cause there's no guarantee that you will have a client
[03:35:57]  side error boundary above the, the error. So I, I have to rethink this a little bit in a server components world, but right now, well, there's
[03:36:07]  no guarantee. Well, there's no guarantee. I mean, there's, there's no guarantee regardless. Like you don't have to put an error boundary here. Right
[03:36:12] . I guess so. It's just one of those kind of interesting things. If the error boundary doesn't make it to the client. Um, so I mean,
[03:36:18]  this is interesting cause we should talk about error boundary. Um, cause a lot of people don't use it. Um, so if you, if you, if you have
[03:36:25]  suspense and your, and your resource throws an error and there's no error boundary, what happens if you're like in async SSR mode? Async SSR mode
[03:36:35] . I mean, everything's on the server. So not, I mean, I actually think async, this might be the one place that I haven't actually completely patch
[03:36:41] ed async because it still treats it as a stream. So it still pretends like it's been flushed to a certain degree. Um, it's, but
[03:36:49]  generally speaking, if you're outside of the suspense error boundary and suspense, uh, recognizes that the air boundary is gone. I can't remember if with async, what
[03:36:58] , whether I patch this piece, but if it recognizes that the parent's gone, it will just throw the error across the network and expect the client to handle it. If
[03:37:07]  it's the other scenario, we just handle it on the server. It just does like a re-render the fallback and an insertion just like the same way
[03:37:13]  suspense does. So, uh, we had, uh, a pattern in, uh, in the discord where someone basically said like, like const async, like props equals
[03:37:28] , uh, like error boundary suspense. It's right. Props dot children. Wait, what is going on? Yeah. Why is this not? Okay. Hang
[03:37:42]  on. Let me. Yeah. It was like this. Um, so is this a pattern you like now? I mean, if people want to do that, they
[03:37:53]  can do that. I just, like, do you always want, are you, are you saying that error, like error boundaries should be explicit, but like still, like
[03:38:01]  still in the same place or, or, or do you think it's like a good idea to, to move your error boundaries? Yeah. I mean, it's
[03:38:08] , it's an interesting one. I mean, it's, it's hard to have hard set opinions on it. I can see cases where the error boundaries should be more
[03:38:16]  granular than the suspense boundaries. I can also see why you'd want an error boundary to catch the whole thing. So yeah, I could see a situation where you wrap
[03:38:25]  your entire app in an error boundary, but you use granular suspense. Yeah. And granular error boundaries like error boundaries sometimes should be more granular than suspense. Right. So yeah
[03:38:37] , I mean, this is like a nested thing. And I guess this is where a lot of like, where we have the mechanism that's so powerful and more
[03:38:48]  meta frameworks are trying to like abstract it away. So people don't have to worry or think about it is maybe where, where this is kind of coming into right now.
[03:38:55]  Um, but like, technically speaking, these are tools at our disposal that are very, very powerful. Yeah. Yeah. Um, I think the only thing left for me
[03:39:09]  is the dreaded use transition, which. I bet we can distill use transition into a sentence. Yeah. I mean, we already showed it. You transition is,
[03:39:20]  is like whole things in the past. Those things in the past can even still be interactive. It just, the, the challenges to, I told you it was hard to
[03:39:26]  do it, to have like both show the data and, and like have stuff fetching in the background. And the thing is, the reason is if you were going to
[03:39:34]  do it manually, you'd have to like duplicate stuff, like have like actual tab and display tab. You know what I mean? Like, so that you could like
[03:39:42]  show the tab that's on the page. And then when you click here, sorry, let's switch to the transition mode. When you click here, now I'm switched
[03:39:50]  to like, you know, actual tab is already updated, but show tab hasn't updated. What suspense lets you do is that forking like that, like you,
[03:39:59]  like having different versions, or so transitions do is like that different version. Like the, the tab that's on in the display and the tab that's in the future,
[03:40:08]  just the framework does it for you. Um, so it actually forks the reactive graph to a potential future reactive graph. And when it finishes, it merges them
[03:40:19]  back together, kind of like it. Um, so that's, that's a lot for people to think about because like, Yeah, that's too much for my
[03:40:28]  one sentence, uh, use transition. But, but the result is you wrap a change. So you pick some kind of change, like setting the tab. It doesn't
[03:40:37]  matter what it is. You wrap the whole change and it's downstream repercussions in something that is considered a transition. It's, it's lower priority. It's
[03:40:45]  something that's like happens off the main UI. So your, your UI stays the same. And what happens is any async resources, any suspense that triggers anything that happens
[03:40:55]  in the background, we just registered and go, Hey, you're not done until all the async stuff's done. So you, you have your active page in front
[03:41:03]  of you. This is kind of going off doing its thing. And then when it's like, I'm done now, it comes back in any better. I mean
[03:41:16] , like you, we've, we've literally done a call where you've explained use transition to me and I wrote down notes and I still, I just need to do
[03:41:22] , just need to really do it. Maybe that would be a fun thing. Uh, we, you know, we switched to my screen and I start from scratch and do
[03:41:29]  a transition. Um, trying to think of like the problem with transition, like suspenses, you always need so much setup because you need like the, the async
[03:41:40]  thing. You need the suspense component. You need the, the, uh, we can do, uh, one of the solid start demos. Cause those don't have transitions
[03:41:48] , right? Do they? No, I mean the, technically the router has the transitions. The thing with transitions is you don't see them usually because the, like
[03:42:00]  the, the, like the router will wrap every route change in a transition for you. And then, and it won't do anything if you're not using suspense anywhere
[03:42:08] . Right. Exactly. And S and if you do use suspense in a naive way, it just does this kind of holding thing that I'm showing you here. What
[03:42:17] 's interesting is if we go back to my silly example that I showed a moment ago where I was like, Oh, what happens if we just wrap, you know, this
[03:42:27]  in the suspense boundary? Um, you know, this, this scenario, the cool thing about transitions is they only care about existing suspense boundaries. They care about suspense.
[03:42:38]  It's already happened. So like, they're like, look, we know that, um, you, we have something to show here, but the, the, this
[03:42:48]  is again, why suspense is so powerful is if you put the suspense boundary. And, uh, you know, a nested suspense boundary, so the first suspense boundary
[03:42:57] , the one that wraps the whole app, you know, wraps the whole router, this one exists and it exists now. So when I switch, you know, that it
[03:43:06] 's going to like trigger the read. But what I've done now is when we switched to the new page, there's a new suspense boundary underneath the page and a new
[03:43:17]  suspense boundary doesn't actually trigger the transition. It always triggers the fallback. Like it treats it like it's new. It, it, it isolates the suspense
[03:43:25]  from the transition. Like it, like it, it, it isolates the read. So now when I switch page, cause we started the transition outside of it. Right
[03:43:33] . Right. So now when I switched the page, what you're seeing is, is it actually goes immediately. Um, and showing, and it shows the fallback.
[03:43:43]  Uh, so where is it? Suspense, uh, do, do, do, do, do, um, I should put a fallback here. So
[03:43:50]  we can see it fallback. Um, unknown. And that's just, just whatever. So like it's, it's working similarly now to when we were fallback
[03:43:54] ing with the nested, uh, suspense boundary. And like we had a moment ago without any transitions and that's. Wait, can you show me this without a
[03:44:15]  transition? Like if you just take it out of the. Yeah. Yeah. It's going to work identical because you're not reading the resource under, um, you're
[03:44:25]  not reading the resource under, uh, um, how should I put it? Yeah. You're not reading the resource under a suspense boundary that feeds into the transition.
[03:44:36]  See, it's still the same. So basically this is, this is really powerful because you can build APIs around transitions that have state. And then the end user through
[03:44:50]  the use of suspense has the ability of controlling when they want to do fallbacks or not, because they can basically top level, higher level suspense situations, um, will
[03:45:02]  stay in the past until available. But you can picture that if you have a page and you have the primary data, and then you have some, you know, secondary data
[03:45:14] . That's like lower priority that can fetch later. What you can do is have the primary data hit the higher level suspense cause meaning that you wait for it because you
[03:45:24] 're like this data is worth waiting for. We don't want to show. We don't want to, we don't want to show in all cases. We don't
[03:45:30]  actually want to show like a full loading state, but we'll wait for that data. So we'll kind of show a stale state on the current page. And then
[03:45:35]  when we go to the new page, if the nested data isn't available, that's okay. We'll show a loading indicator for just that part. If it
[03:45:42] 's available, it'll show up, but essentially you can use nested suspense with transitions also as a way of choosing how long to wait in the past and what to,
[03:45:54]  um, what is worth like not waiting for in the basically. Yeah, we're going to, I, we're going to do this from scratch just to, we'll
[03:46:04] , we'll start, we'll start with the boilerplate. We're going to do the tutorial because I've done this so many times. We're going to,
[03:46:12]  we're going to do this again. Okay. I'm going to share my screen. Okay. Share your screen. A screen one. All right. Okay. We're
[03:46:26]  going to, um, so first of all, the, the behavior that the tutorial shows, there's no, there's no, uh, use transition yet. Yeah
[03:46:36] , it's just simply a fallback. So every time you go, it's loading, loading, loading. All right. And, um, what we can do is
[03:46:47] , um, so, so the idea of a transition is to wrap some sort of setter, basically some sort of, uh, change. Um, so where do
[03:47:03]  we want to do that? Um, someone's mentioning we need really good examples. I will say the react experimental examples for transition. They, they wrote like experimental docs thing
[03:47:14]  that they ended up changing, but the original version of that from like two, three years ago has examples for like every single, like different types of transition scenario. It
[03:47:25] 's actually really, really, really good. Um, someone, someone told, did the dark mode thing, the passive aggressive dark mode request. Yeah. Uh, should,
[03:47:34]  should we go to the react docs, learn about transitions and then come back? I, I mean, I, I, I, I mean, I have some of
[03:47:40]  those examples sitting around written and solid, but it is actually the, the, like the example for the, you know what though? They don't actually have this behavior.
[03:47:50]  This was one behavior that they added later. So we probably should just do it here. It's fine. It's just easier when you have the setup for multiple resources
[03:47:57] . So what we're going to do is we're going to take the thing that's triggering, we're triggering the, the new resource, right? Cause the idea is
[03:48:08]  that as soon as the, the match matches a new child, it renders the child and the child triggers the, reads the resource and triggers the suspense. So yeah
[03:48:20] , is there some confusion in chat? Yeah. I'm sorry. Transition is a terrible name and I probably shouldn't have copied react naming here. It's actually create
[03:48:28]  transaction. Like it's not actually a transition. It's a transaction, like from the database concept of, of it. That's much better naming. I don't know
[03:48:36]  why we ended up with transitions probably cause of the UI implications of it, but it, it, it has nothing to do with like changing the state of stuff. It
[03:48:46] 's like, it's, it's basically a way of doing async transactions in your render library. All right. So we're going to, we're going to see
[03:48:54]  what happens when. Nothing worth coughing from react as hooks. I think you got the, the other way around the, unless that's like a joke about how. All right
[03:49:03] . So the first thing we do is call use transition. Wait, what about create transition? Isn't that a thing? Yeah. You can, you can, you
[03:49:12]  can, you can like, I did use because it shows the pending state, but you can also just like skip the use and just like, just start transition. I think
[03:49:20]  it's called. And you, then you don't have the full thing. The reason we do start is because we, it gives our reuse use is it gives us the
[03:49:26]  pending state. Pending state. All right. Hang on. Hang on. Let's, let's start. That's the one. Start transition. Yeah. Similar
[03:49:36]  to use transition, except there's no associated pending state. Yes. Um, okay. Should we start with that? It seems simpler. I mean, sure. It
[03:49:42]  it's this. Yeah. Let's do that. Let's, let's just, so it, it, yeah, it, um, it's a, wait,
[03:49:51]  are they both promises? I know the start. Okay. Yeah, yeah, yeah, yeah. Um, so all we need to do is. The fact that the promise
[03:50:01]  is useful for some things, but not really relevant to you. You just want to wrap the, the set tab call to start transition. All right. So we're
[03:50:10] , we're, we're taking our, our basic mutation and we're wrapping our basic mutation in start transition. And now, now what that does is, uh, here
[03:50:20] 's what I, here's what I think it's going to do. Right. The, when you say start transition, you're saying this change is a lower, lower
[03:50:28]  priority. Right. The thing is you've got to wrap it in. You need another thunk in there because you're, you're passing the result. You actually
[03:50:36]  have to wrap it in a font function. Like, so it's, it's, well, I can do, I can do this, right? Uh, and do
[03:50:42]  God, this is confusing. Why is it? Yeah. Yeah. Why did I do this? Cause it made it easy to, to, I'm making event handlers
[03:50:52]  at once for all the different ones. So as this, uh, no, you still have wrapped in one more function. Oh, seriously. Cause it needs to,
[03:51:02]  it needs to, you're, you're passing back an event handler based on the index. So like, basically this was a way of, so you can say on click
[03:51:11]  update tab. A nicer example. We would just, we would just literally like have three different functions. Yeah. But then you'd have to go to three different places
[03:51:20] . Yeah. Yeah. Well, I still don't get why we need this wrapper because I don't know. Cause yeah, you have to return a funk. I thought
[03:51:28]  this returns a promise, not a function. Well, it's not. Yeah. It actually, the return value is basically irrelevant. It's basically, it performs the transaction
[03:51:37] . You, you have to wrap it in a function so that it can like start it and run it. Yeah. Like, like from your perspective, it, it
[03:51:45]  returns void. Like it's just. Yeah. Okay. Okay. So, so basically what this says is give me an index and I'll return an event handler. What
[03:51:52]  does that event handler do? It, it starts, it starts a transition. And, uh, that transition is why, why can't I just do, I don
[03:52:04] 't know. Cause right. Right. Right. Right. Right. Right. Otherwise you'd need like a start transition and transition function. Yeah. Yeah. Yeah. Yeah
[03:52:18] . So, so start transition takes my function and it does some fancy stuff with it. And then it, and then it calls the function. Um, so what changed
[03:52:26] , um, what, uh, it held. So basically it ran the function immediately because that's how the suspense got triggered. Right. Um, but so it, it
[03:52:42]  runs, it runs this immediately, but it holds off all dependency, all effects. Yeah. Holds up all effects. And I mean, it does more than that
[03:52:55] . Cause you could have an active counter counting up on the page at the same time. You could be interacting with the page in front of you and it's still alive.
[03:53:01]  So like it's just mechanical. It just, it just goes off, goes off screen. Yeah. And starts a new render tree. Yeah. And it will show you
[03:53:11]  that render tree when the suspense is done. Yeah. And here, and, and here's the important thing. It runs that like in the nooks and crann
[03:53:20] ies of JavaScript's event system. Like it's low, that offscreen thing is low priority because it's not showing. And that part, I, I, I
[03:53:30] , I do it to kind of, it defers it. So it's outside of the synchronous run. Yeah. But to be fair, we don't, by default
[03:53:38] , we don't do what the react calls time slicing, which is where they split the work across multiple frames. I, I'm, I'm not doing that here
[03:53:45] . Um, something because for stuff like this, for IO, what's the bottleneck? It's not the CPU, it's the network. You're waiting for your
[03:53:53]  data to load. So there's no real point of adding a scheduling system on top to because like, you're literally like the code that runs in set tab is like,
[03:54:01]  like it depends. If it was a certain type of workload, I could see an argument for it maybe, but for the most part, like our default behavior doesn't do
[03:54:10]  time slicing. It just, it just, it just goes and renders it because like, why not? So it goes, renders it offscreen. Um,
[03:54:16]  and it's the same synchronous, like maybe the, maybe the, the, the time at which it runs, this is smart. No, no. It runs this immediately
[03:54:26] . This gets run because that's how, that's how the suspense get triggered in the first place. Right? Well, almost, it runs it almost immediately. I close
[03:54:34]  enough to immediately. I mean, this is a technicality. Okay. But the point is that like, it triggers the suspense. It's, it's not this
[03:54:42]  function call. That's deferred. Potentially it's, it's dependencies that are deferred. Well, I mean, yes, yes. You just don't see
[03:54:50]  its effects, including the initial set right away. Um, because if you look at it, well, the initial set is what triggered the suspense. Then that happened immediately.
[03:54:59]  Right. But it happened in such a way that it was isolated from what's on the page. It, it triggered these. Right. But not the, the,
[03:55:12]  not the same these that you're seeing because otherwise the page would update and we can still update the page while this is happening. It literally forks the reactive graph.
[03:55:21]  Like it literally makes a new version. All right. So it, it forks the reactive graph immediately. So the suspense triggered is the suspense on the fork. Yeah.
[03:55:31]  Okay. That's what I didn't get. Um, all right. Um, so how does it communicate with suspense then? So it, it, it runs,
[03:55:44]  it runs the forked tree in the fork tree and encounters suspense. It knows to wait till that suspense is done. And when it's done, uh, the fork tree
[03:55:54]  becomes the regular tree. Yes. Love, love explaining that one. All right. So, so the, the, the fun stuff that you were talking about with the
[03:56:05]  merging is if while that suspense is going, you change a bunch of stuff in the shown tree, there needs to be some way to come combine the two. Now I,
[03:56:16]  I think it would be a fine behavior if you just replaced everything on screen with the, with the new screen, but that's not what happens. No. Uh, you
[03:56:25]  gotta do a merge. Um, yeah, we should do, we should do a demo, a demo with that for sure. Okay. Okay. Well, um
[03:56:33] , well, I mean, one thing you can do is like, how about you create a signal? No, I'm trying to think what the best way to doing
[03:56:40]  this. Yeah. What if you create a signal? Yeah. Create a signal, uh, in the top of the app where tab is, just create another signal, make
[03:56:46]  a counter. And then let's give it a set interval, you know, I mean, you can make a button too. It's really up to you. You
[03:56:56]  don't, do you think a button is more effective or? Yeah. Let's, let's do a button. Um, and I can make the suspense really slow.
[03:57:01]  And then what you want to do is, uh, put the, it's in the child or no, lower down. You want the button to be in the suspense
[03:57:10]  boundary to really prove our point. Like not in there. Keep them going. Oh, Oh, sorry. This is the, this is the menu. Uh, yeah
[03:57:17] . You want the, yeah, let's put it inside the suspense boundary. So under suspense beside switch. Okay. Okay. So, so we'll put it, we
[03:57:26] 're, we're going to do one button. Yeah. Um, because if, if we put it somewhere else, like you could, you could be like, oh,
[03:57:36]  that's outside of the suspense boundary. I'm going to actually set count count plus one. And then you can maybe show the count as the buttons text. I don
[03:57:47] 't know. A bunch of people are talking. Oh, we got a raid. Who, who rated us? Oh yeah. Let's let me check. I have to
[03:57:59]  go over to Twitch to actually see what's going on. Welcome. Welcome. We are doing, we, you just, you just, uh, got here as in the
[03:58:05]  middle of our use transition demo. Yeah. We're doing rocket science over here. Uh, what do we got? A rating party from, uh, was it Mad
[03:58:14] eline of Rivia? Um, it's writing with the party of 79. Wow. Awesome. Yeah. Welcome. Um, all right. So we got, we got
[03:58:23]  a working button and I'm going to go make the suspense, uh, longer. Um, so let's change this to like five, like half a second. So,
[03:58:31]  uh, it's nice and slow. I click this, I wait, click this. I wait. So, uh, what I can do now is, uh,
[03:58:39]  it'll do a nice merge for me. So if I, if I click this increment, the, oh, wait, I need to make it even slower. Yeah
[03:58:46] . Yeah. You gotta, you gotta, you gotta do at least a second. Um, so click this, press the button and then, and then it just works.
[03:58:55]  Yeah. Um, so, um, let's do some fancy stuff on here. So let's, um, uh, oh no, the, it'll, there
[03:59:08] 's no way to do a merge conflict. Um, actually there is a way to do a merge conflict. Um, we put the button in, yeah, we put
[03:59:19]  the button, uh, in, in the switch, right? Well, if, if you put the button in the switch, when it switches, you're going to get
[03:59:29]  a new version of the button and the state's still hoisted. So it's still just shares the same state. Um, wait, wait, wait. Okay.
[03:59:36]  How do we do this? Wait, wait, wait, wait. But even just what you said is interesting. Like, like, yeah. Like if I, if I
[03:59:42]  do this and I go to the next tab, the next tab is not going to have the button. Yeah. Um, okay. That's what you're saying. And
[03:59:51]  then when I go back, it'll work. Yeah. Because you, you've preserved the state. I'm trying to think of a scenario. But what if I make
[03:59:56]  another button on the other page? I don't know. I mean, no, it'll just swap. It'll just swap. Yeah. I mean, yeah.
[04:00:02]  I mean, the, the, the big benefit of this was you could see that the page was still interactive under the suspense boundary while it was holding in the past while rendering
[04:00:11]  proof concurrent rendering in solid JS. Well, uh, there's nothing interesting happening on the other page besides just like a single thing. See, this is the whole thing that
[04:00:23]  I was trying to get at though with this. The thing is the mechanic is really, really cool. Like from that side, but like for you as the user, it
[04:00:30] 's kind of boring. I'll, I'll, I'll show you the proof of concurrent rendering. This, this will be the proof here. We do a set
[04:00:35]  interval. That's the proof. I'll do a const count set count here. And then we'll, we'll, we'll, we'll, we'll do
[04:00:46]  set interval. How do I do this? Set count. Right. Okay. Because you're saying the signals created under the suspense boundary. Sure. Okay. Let's
[04:00:55]  create them everywhere. Let's create them everywhere. We can create signals anywhere. So let's do it. All right. So here. You got to show the count somewhere
[04:01:03] . This will prove concurrent rendering because by the time we get here, this will be running on another thread. Basically on another world. I definitely broke something. What did
[04:01:12]  I create signal? You got to import it. Oh, this file. This file doesn't have create signal in it. All right. All right. Let's. Okay
[04:01:19] . So here, so here we are. So I'm going to press this play with the button. This is not convincing enough. I want to make it like 10
[04:01:39] . Not the, is it, is it, will we, the. It didn't work. You can't, you can't, well, you can't keep
[04:01:53]  it because you're making a new count every time. You, what you want to do is you want to have a slow counter so you can actually see it. It's
[04:01:59]  too fast. You can't see it's jumping too fast. Pick a counter. That's like slow enough that you can actually see that it's not zero when you get
[04:02:05]  to the next page. Like pick, pick something. It's still going to be slower than the R second, but it's got to be like maybe 500. Like,
[04:02:15]  like it's got, cause you're making a new counter each time. You're not preserving it. So you need something so that we know that when you click on
[04:02:23]  the next page, it's not starting from one. So just click those or whatever. Right. Yeah. It starts at two. Right. Okay. Okay. Okay
[04:02:33] . So like that, that proves that both realities are actually executing at the same time. If I make it a little bit smaller, it'll start at like four or something
[04:02:44] . Yeah. Three or four. Okay, cool. All right. I'm convinced. Something cool is happening. Okay. And then the only difference between you doing start
[04:02:56]  transition directly and using use transition is that use transition gives you a signal that tells you whether the suspense has started. Right? Exactly. That'll give you like an indicator
[04:03:11] . Cause if you just sit there for like two seconds and you're going like, did I click the button? Like, yeah. So, so all we have to do
[04:03:18]  to replace this is say, uh, const pending start transition equals. I I'm, yeah, I'm a little proud of this one. I mean, you know
[04:03:29] , people give me some flack. Sometimes you're copying react. We had pending as a first argument before reacted. They, they had it switched. They had start and
[04:03:41]  then pending as the second argument. And I was like, that's dumb. So I swapped it. Um, and then they ended up swapping it. Just small aside
[04:03:51] . Okay. That was the most petty thing I've ever heard. No, it's not about it's petty. It was just like, I wanted to point out
[04:03:58]  that even when I look at react APIs, I don't copy them blindly. Wait, wait, wait. Hang on. Tell me that again. We had, it was
[04:04:05]  reversed. What was it? React when they introduced the API, had it reversed. Like they had start as the first argument and pending as the second argument. And you were
[04:04:13]  like, I don't like that because there's no point of use. Well, it's my, well, no, it's the same. It's the same.
[04:04:19]  Um, split read, right. So I like that. I like that. So I, I also like it because what's the point of a use transition that only
[04:04:28]  returns start transition? Yeah. I mean, you can do that. I mean, cause start transition wasn't a separate API previously. I just wanted to kind of point out
[04:04:37]  that like, like when I was looking at this stuff, I actually made decisions. I didn't just go, Oh, let's copy react. I was like,
[04:04:43]  okay, how should this work right down to the API level. And it was, it was kind of interesting, um, that react actually ended up swapping their API.
[04:04:51]  So they ended up matching up, but that, that would have been confusing to react developers. Like if they were using use transition and they came to solid and they're like
[04:04:57] , why are the arguments in the opposite order? I mean, I just, I thought it was an interesting story from the perspective, like how I look at react when
[04:05:05]  I'm looking at features. It's not just like, uh, you know, like just like, Oh, let's just copy this. Cause reacts doing it. I
[04:05:11]  put a lot of thought into figuring out what makes sense for solid and what we would want to do. So pending is a signal, right? Yeah. All right.
[04:05:19]  So it says start me and then now it's pending and then, okay. Yeah. Neat. All right. You have taught me use transition. Um, the way
[04:05:30]  to explain use transition, uh, I think is to, it's the, the reason why you use transition is difficult to explain is because it does multiple things. Um
[04:05:45] , it does like, we can literally like make a list of things. It does. Let me go back to, um, oh, yeah, it was in different tab
[04:05:54] . Um, all right. We're going to, we're going to do our use transition box. Now you're not in dark mode. You just blew everyone's eye
[04:06:01]  socket. I just blasted everyone. Um, how do I, how do I switch this to dark mode? This should be. Oh, here, here, here.
[04:06:07]  Okay. Um, so, um, I think that use transition is part of the system. Is part of the system is clearly part of the suspense box. No,
[04:06:17]  no question. You, you can't use it without suspense. Um, so use transition, first of all, um, is in the client side part of suspense. So
[04:06:29] , um, all of this stuff here is irrelevant. So that gives us a few choices. We can teach suspense, choose transition, then teach SSR. Or we
[04:06:38]  can teach suspension and SSR and be like, Hey, by the way, use transition. Um, I don't know. I'm just going to believe it separate for
[04:06:43]  now. Um, then we say, um, it, it like watches the suspense, basically the first mechanic, right? Like it, it, um, um,
[04:06:54]  so you, you need to use it. The, the, the, the funny thing is people, because it freezes the whole screen, it's not as obvious that
[04:07:09]  suspense is important, but suspense is important because that's how you choose whether you're transitioning or not. It's based on the resource reads under existing suspense boundaries. If
[04:07:19] , if you run use transition and there's no suspense in the tree, it will trigger the tree and immediately update your, your first tree. Yeah. Yeah. So,
[04:07:32]  so it, it, it, it's basically, God, it's like, it's like taking your fallback and replacing it with your current. Oh my God
[04:07:47] . Yeah. I mean, that's how some people tried to explain it on Twitter this week. I saw that. I saw someone say exactly that. So transitions are like
[04:07:54] , if your current page becomes the fallback for suspense. Yeah. That, that we should start with that. Current page becomes the fallback. It, cause in our
[04:08:01]  example, it was very clear. The fallback was ignored. We just didn't see it. Um, current page becomes the fallback until suspense is done. Right.
[04:08:12]  Yeah. Um, but you have to use it. Uh, so wrap, wrap code that triggers the suspense. Cause if you wrap code that doesn't trigger the suspense
[04:08:29] , it, it doesn't interact with it. Um, current page becomes the fallback. Yeah. Um, I feel like for me, one of the breakthroughs
[04:08:42]  was realizing that it's not your suspense. It's like the new suspense. It's like the new suspense that gets hit. In other words, like immediately, immediately
[04:08:53] , um, uh, well, I mean, it works based on context and reactivity. It works like any other state change. It's like, you trigger that
[04:09:03]  state change. You trigger that state change. It reads. It's somewhere in the tree. And, and then like uses context to find the nearest suspense boundary. So
[04:09:14]  we're not like re-rendering in, in the classic sense it's reactive updates. So the, the reason that it works is that it, so it happens,
[04:09:23]  um, tab is already in the tree. So when you update tab, that tab update happens, you know, you know, starts doing. So, so, okay
[04:09:37] . This is important. In other words, if we do something here, uh, We didn't like re-render the whole page, but we re-render what we
[04:09:45]  would have re-rendered. So when tab changes, what you're seeing is it's going to go to that switch match, essentially. Like there, there's other
[04:09:53]  places, but it goes to the switch match and that switch match goes. Okay. I'm still going to, I now need to read it in this match. I
[04:10:00] 'm going to fork at that point. So like piecewise forks it and it goes, okay. Um, the switch has to change. So switch is now existing in
[04:10:07]  a different, in a different zone. Yeah. I mean, everything's like it's forked immediate. In other words, like we run this, um, but no
[04:10:15]  changes propagate in our tree. Yeah. So it, it, it forks it. And then in that fork, it triggers a suspense. Right. Right. Cause
[04:10:25]  then switch changes, switch goes to a different match term, starts rendering the new match, sees the resource. Yeah. Looks up the suspense boundary, which already exists. Yeah
[04:10:34] . So like, we're not doing extra work. It's not like we're something like re-rendering a whole chunks of the DOM. We get to reuse
[04:10:38]  all the stuff that's already there, but like the tab would have switched anyways. So we would have re-rendered the, like the child anyway, you know,
[04:10:47]  you know what I mean? Like, I don't really, I mean, it is, you're saying it doesn't fork the tree. Like reuses it. Well
[04:10:54] , I mean, it forks the reactive graph. So. Okay. Right. There's no new DOM elements anywhere. Until where there would be new DOM elements anyway
[04:11:03] . So like when you, the, you, you'd switch a match that you unmount the one match and you mount the new match. What I was imagining was
[04:11:14]  like, um, an entire graph with like suspense in it and all the children, but that's not, that doesn't make any sense. It's you, you call
[04:11:28] , right. You call this, um, there's a new reactive graph interacting with the. Okay. That's what, that's weird. Um, so it's
[04:11:39]  not like there's two suspenses. There's one suspense. Like there's no, there's no, like solid doesn't have like two suspenses in memory or anything
[04:11:49] . It has one suspense in memory. Yeah. And, and just like different versions of all the different reactive. Signals. Yeah. Yeah. God. Another raid for
[04:12:02]  who? Holy crap. What's going on now? Hey, rating parting from acorn. Uh, 10, 10. Um, thank you so much. Uh,
[04:12:11]  um, nice. Yeah. Yeah. This fork graph. Fork the reactor graph, but only update the DOM nodes that would update anyways. Check. This, this
[04:12:24]  is super powerful too, because we, we, we, we create the DOM nodes as we go. So like, and because solids ability to resume, uh, like the
[04:12:33]  pause and only update what changes, we get this incredible thing where we can actually preemptively create the DOM nodes as we go, like as the data's doing. So
[04:12:41]  we don't leave it all to the end. So like, we can do a bunch of the work ahead of time in, in the case of a navigation. Like
[04:12:48]  if you go to a new page and it has a bunch of stuff and then you have some data in the middle that you need to load to render. We can render the
[04:12:55]  shell of the page off screen. And then when the data comes in only rent, finish rendering it and then show it on the screen. So we actually save work.
[04:13:01]  That's the thing I'm trying to figure out. Like in, in our example here, it's not just that, like, is it, it's not, it
[04:13:10] 's not just that the value of the, the, the, the, the count is, um, is, is, is, is held off screen. It's the
[04:13:19]  value of the count and anything that depends on it, including the, the, the DOM. Right? Yeah. Yeah. But control flow and solid, which we covered
[04:13:29]  a bit earlier is just a memo with, um, that produces DOM elements. So what we can do is have that forked version of that memo, uh, each holding
[04:13:39]  different versions of those DOM elements. Um, so, so like there is, there, there are DOM elements copied, right? But will be created in this, in the
[04:13:49]  case where you actually switch something. Like if you do that switch match, or if it's a show component, like if you're switching from A to B, then
[04:13:57]  you, you're going to create new DOM elements. So you've been. Oh, I mean, in this example, I'm updating text content. Yeah. I mean
[04:14:04] , yeah. I'm trying to think what do you mean specifically in this example, but like, like it, like. Yeah. Yeah. Like this div, this div
[04:14:10] , you're creating a new component so that you have to create this new div. This, this text content is getting updated in. Well, I mean, look,
[04:14:20]  look, let's look back actually. Uh, where is this? I, I update. I call set. Okay. Yeah. Well, you're creating a new div
[04:14:28]  because you're going to new tab, but if this button in here, that's under the suspense, the where's the, do we still have the button to start me
[04:14:34]  button? Yeah. Yeah. Here. Where, where is that in the view? Uh, the button. Yeah. Well, now that it's down here, it
[04:14:42] 's getting recreated, but when that button was up above, like if you move that button back beside pending, like put it up here, that button is not getting rec
[04:14:52] reated. Okay. Right. So basically when, uh, so when we, when we switch, you were inside the interval and tab equals one, a bunch of Dom nodes
[04:15:07]  get created off screen. Yeah. For, for the, because of the, the, you switched to a new child. Okay. So we, we fork the reactive
[04:15:15]  graph. Um, but we, we only create Dom nodes if those Dom nodes would be created. Um, so, so there's no, there's no switch off screen
[04:15:28] . There's no match off screen. Well, I mean, technically there is the, like we had to fork, like, because they, there's one version that
[04:15:39]  has the one match and one version that has the other match. We did have to fork the, the internal memos inside switch match. But if, okay. We
[04:15:49]  had to, the memo. Yeah. Okay. But, uh, there's no button off screen. No, because like it. Yeah. The only thing that we had
[04:15:59]  that there, there, there might be, um, let me think here. Is there, I'm trying to think of the count would be, if there is a
[04:16:08]  version and I don't think there has to be, but if there is a version of the, of the, of the count off screen, um, it's being kept
[04:16:14] . It's, it's, yeah, it's being kept in sync with the, uh, version on screen. The, we, the, I didn't explain this
[04:16:22]  part. We don't actually merge. I made this a lot simpler in that, uh, things that apply to the transition only applied to the transition things that apply to
[04:16:31]  the main screen that you're interacting with while the transition is going apply to both the main screen and to the transition that way. I don't actually even have to merge.
[04:16:38]  I literally can be base. Yeah. It's rebase. Yeah. Rebase. Wow. That's, that's great. Okay. It's rebase. So
[04:16:49] , so we, we do, we, we, we, we don't just clone the reactive graph. Um, in other words, there isn't a button off
[04:16:57]  screen. There's a count off screen. Yeah. Okay. Yeah. Potentially. Yeah. I like the effect that there's definitely, but there's definitely not a
[04:17:09]  button Dom element in memory. No, no, no, no. Okay. Yeah. Um, is there performance issues? I mean, this is an interesting one, or
[04:17:19]  this is obviously more complicated because you're running more things and check, but actually in my opinion, this has, it depends on your workflows. If, if you,
[04:17:27]  if, if you're doing it, if you're doing like heavy computation stuff and you're getting into a point where you're like, you'd want to do time slicing
[04:17:33] , then maybe, um, there's performance considerations here. But otherwise for like IO type stuff, I actually think this is more performant than the approach. like something
[04:17:41]  that react is doing because we're doing as much work up front as possible. And then like, like it will make things complete quicker. Cause we don't, we have
[04:17:49]  to do, we do way less work as things finish. If that, if that makes sense. Like we do the work as soon as, as soon as we can.
[04:17:59]  Um, and the side effects are all held. So like, like the really expensive side effects, like running the DOM and stuff, um, uh, updating the DOM
[04:18:07]  aren't going to happen. Uh, you can create DOM nodes through this process, but you're not going to be like updating existing DOM nodes until the end. So yeah
[04:18:16] , man, I wish I could explain this better. It seems like a tricky thing. Yeah. I need to think about it. Like this is basically what's happening
[04:18:23]  here. You want a wrap code that triggers a suspense. The current page becomes a fallback while the suspense is running. All the downstream changes happen off stream. Um,
[04:18:33]  uh, or, okay. This is interesting, right? Forked, fork, reactive graph, all changes happen on stream. Uh, changes, uh, changes to the
[04:18:46] , um, it's forked and shared. Like, it's like, uh, any, any changes on, on screen also happen off, off, off screen
[04:18:58] . Uh, uh, when you, at a certain point, when you look at this, you're going to go on like, should I be spending my time, like
[04:19:07]  explaining the mechanical parts of this or just tell a really nice story about how. We, we, we need to tell the nice story, but I'm, I'm just
[04:19:14]  writing down everything I know so far. Yeah. Like this, this, this is, this is the challenge on this. And this is people wanting like, like,
[04:19:22]  like, like a lot of the work, the react team like Dan's doing right now is heroic work because he's, he's dealing with trying to explain the same sort
[04:19:28]  of concepts. And, um, yeah, I mean, this is really powerful stuff. Except the difference between our version and their version is their version has time slicing, which
[04:19:37]  is even more annoying to explain. Yeah. I mean, that's a whole other dimension. We have the ability to enable time slicing, but it's not, that
[04:19:47] 's not our default. Cause we're fast enough. Yeah. Uh, generally you have to have a very specific type of workflow for it to make sense. You have to
[04:19:54]  have a lot of expensive computations distributed across the graph in a relatively equal way. Like if you have one expensive thing, time slicing doesn't help you. And it
[04:20:03] , it can't be the side effects. It can't be the rendering that does it. It has to be like the pure computation, like the things you would put in
[04:20:10]  a, in a crate memo or something. Those are the things that have to be expensive. Because, because if, when you use transition effects are delayed. Exactly.
[04:20:19]  You want to show the reason you do all this is consistency. You want to say, I'm not going to show the page until everything is up to date until I know
[04:20:25]  that everything is consistent. So you, the problem is all the actual rendering work happens at the end. So like if you're, if even with time slicing, if you
[04:20:35] 're like jamming the CPU, like crazy to try and do something like time slicing only helps on something that like the page is already able to render efficiently, which is always
[04:20:44]  weird with those 3d demos. As they always show because it actually, it helps maybe with like building models up or something, but you have to kind of like manufacture
[04:20:51]  the situation because if something was too expensive to render in the browser, then like time slicing doesn't help you. Yeah. Um, the, um, so in terms of
[04:21:05] , I want to talk about like delaying effects. So, um, first of all, we don't delay computations. So any memos are, are run
[04:21:13]  immediately off screen. Right. Uh, yeah. Yeah. Let let's, there's actually a good question that just came in. I'm new to constant suspense. See
[04:21:22]  that it's more true than I thought is the point of learning this and transitions to be able to perform UI or concurrently. So the users are not blocked or interacting.
[04:21:28]  That is why they react as the time slicing thing. But in our case, that actually isn't the reason we want to do this specifically. This is mostly because there
[04:21:37] 's a belief that there's a UX benefit, especially on navigation of being able to like, um, not fall back to like skeleton states, like, so that you're
[04:21:49]  able to like, like have something on the current page and start fetching for the next page and have it smooth. This is something that I always remember noticing when I
[04:21:59]  worked on reacting to native was like, when you're on a web app, you're used to like a lot of loading spinner type scenarios where you like lose the page and
[04:22:06]  like show the, the loading spinners. Whereas like a mobile has noticed the transitions always seem smoother because like they sometimes like there'll, there'll be some loading indicators,
[04:22:17]  but they'll kind of like hold the page or like animate it in or use some kind of like, um, affordance around that where like the data is like,
[04:22:28]  they kind of wait a bit for the data to be available. So you don't have like less jitter. And that's really what the benefit of using stuff like transitions
[04:22:34]  and suspense are is so you can orchestrate the app in a consistent way to remove that kind of jitter. So yeah. So that, that, that's the main
[04:22:43]  story you tell here is that normally suspense. So first of all, if you use suspense with no fallback, it shows a blank screen. While the date is loading
[04:22:50] . If you use suspense with fallback, you can show whatever you want while the date is loading. And if you use suspense with fallback and use transition, uh,
[04:22:59]  you, uh, show the current screen as the fallback while, while the new stuff is loading. The, the, the annoying thing about this, um, is that
[04:23:08]  sometimes the fallback is triggered. If you read, if you read in a child and it's not triggered by start transition, the fallback will be shown. The
[04:23:19]  old, the only, uh, the only reason the fallback is not shown is if you trigger the suspense inside a start transition. Right. Um, I, I
[04:23:31] 'm wondering if you could create a version of suspense that used the current screen as a fallback, triggered all downstream changes off screen and didn't have to use these transition to
[04:23:40]  trigger it. Yeah. And this is something we explored a bit with Marco. The challenge then is you lose the explicitness of knowing that you're doing this. So
[04:23:49]  the, the, the challenge is that like suddenly stuff that sync becomes async, like it's like detached from it. Like every single signal set could potentially trigger suspense.
[04:24:00]  So you like, you take the overhead there and like, as soon as someone might tie stuff together, like you could have something that updates immediately. And then someone needed somewhere
[04:24:11]  else in the code does a code change. And now you're thinking that updates immediately now has, is triggering a, uh, transition. So like now it's like
[04:24:19] , doesn't update immediately. Like I, we went through this a lot. I'm, I, I'm pretty strong in my belief that you have to be explicit about
[04:24:27]  transitions. People expect synchronous behavior by default in these frameworks. And if you just tried to opt everyone into transitions, the like developer experience of trying to figure out what's going
[04:24:38]  on is a lot more complicated because you start getting these entanglements that are hard to trace. Um, the only other option, the one that I did think about
[04:24:46]  is, is like, what if tearing was the default instead of, uh, going back to fallback? Like what if that angular example I showed earlier was the default?
[04:24:57]  Um, because if you understand this, you start understanding why latest exists on resources. Yeah. But you're saying, uh, if, if, if you don't
[04:25:06]  provide a fallback, what if you just went, went to the next screen and did it as if, as if you didn't use suspense at all? Right. No
[04:25:14] , no, no. I'm not saying if you don't provide a fallback, I'm saying in, after it's loaded once, don't suspend. Like the
[04:25:20]  suspense is only for the initial load by default. Like I, I was playing around in my head. Like what would happen if we, if we only show, because
[04:25:26]  you need the fallback when you first load the page, right? There's only three, there's only two choices here or three choices here. Show tearing, bail out
[04:25:35] . So show the fallback, keep things in the past. Only three choices. You need to, to bail out on the initial page load. You have no choice because
[04:25:44]  you don't have the data. After you have the data, you have the choice of either showing in the past or you have the choice of tearing. There's,
[04:25:50]  there's, there's, there's. So, and to be clear, tearing is you keep everything the same and just update. Want to see, want to see tearing
[04:25:57] , um, go back into child and where it reads the resource time, go time.latest instead of calling it as a function. Oh, this doesn't trigger suspense
[04:26:09] . No, not count the other ones. Uh, right. This is the thing that doesn't trigger suspense. It, it does trigger it initially. See, you
[04:26:18]  still got the loading indicator. But now. Uh, why is it tearing? That was tearing. Uh, what? The resource, the resource that you're still, you
[04:26:31]  still have a transition. So the, the transition's happening. Uh, uh, wait, why you're, let me see here. Okay. I need to get rid
[04:26:41]  of this transition cause I'm getting confused. I'm just going to do regular. Well, actually the, actually we need the transition. Sorry for this. It's
[04:26:47]  just, there's too much stuff going on. I think, are we reading time? Time. You need the transition because otherwise my point doesn't go anywhere. How
[04:26:53]  are you determining pending again? It's just what pending is, is from the transition. Right. Right. So the transition is based on the resource loading time, but
[04:27:06]  the UI is not being held by it. That's interesting. I don't know if that's a bug. That's, that's something we should consider. God.
[04:27:11]  I have no idea what's going on anymore. No, no, no, but, but what I'm getting at is you see the tearing. Uh, right.
[04:27:17]  What's the tearing? The, what, what's the tearing? Just click, click on uno. See how it switched immediately or did it switch immediately? Click on
[04:27:24]  dose. It, it only switched pending. Okay. Yeah. So page didn't switch. Yeah. Okay. So we're the latest is not working. Uh, we
[04:27:32]  must be reading time somewhere that I'm not, you're right. This isn't the tearing. Click on Dose? It only switched pending. The page didn't
[04:27:37]  switch. Yeah, okay. So the latest is not working. We must be reading time somewhere that I'm not... You're right. This isn't the tearing. We
[04:27:47] 've made this example so complicated we've lost. Can't you prove the point of .latest without transition? No. That's the whole point of reason exists. It
[04:27:58] 's so that you can opt out of transitions. And I... Oh, you're right. You can opt out of suspense. Right. Just, yeah, remove the
[04:28:05]  transition. My bad. I confused myself for a minute. My bad. You're right. You can do this with suspense. So what this will do is... Greg Johnson
[04:28:20]  says, I went and got dinner and watched a Tinkerbell movie. Are you two still going? Yeah. I need to learn about transition. Okay. Try this one
[04:28:30]  now. Okay. It's triggering the fallback. Okay. Yeah. So somewhere in here we must be reading it and it's not, unfortunately for us, not
[04:28:40]  doing this. I mean, this is the same reason. Are we reading time anywhere else? It's declared in here. It's declared in here. It can't
[04:28:49]  be read. Okay. Oldwater says, this sounds egregiously over-engineered. It's not... There's some moving parts. I wouldn't say it's
[04:29:00]  egregiously over-engineered. The problem is to actually solve this problem is actually more complicated than this if you had to do it in user code. Like significantly
[04:29:11] , like you could default it to a world where you like hoisted it into the routing. But yes, this is complicated. The transitions is like the final piece that
[04:29:21]  is... Honestly, I had it all held down until you were like, oh, .latest. Like, I don't want to know about .latest.
[04:29:28]  I have a .latest example in code sandbox. I just... There's something happening here that is causing suspense still the trigger on that read. Oh, do you know
[04:29:39]  what it is? Oh, Courtney's here. Do you know what it is? It's so obvious what this is and I didn't think of it. It's because
[04:29:45]  time is never... We're creating this for the first time. The resource is underneath the suspense boundary and whenever we go to a new page, it can't... The late
[04:29:53] ... Like, the first time you run latest... Okay. I know what you mean. It's recreating the entire resource. Yeah. But... I don't...
[04:30:03]  This might be difficult to actually... But now we have to pass it in. Yeah. God. Okay. I... I don't know. It's... The problem...
[04:30:18]  I mean, the thing is we're playing with like really... Like, if... The problem is we've created such a contrived case that like we're... Like
[04:30:27] ... It's difficult to actually like track through this mentally. Because the thing is the first time a resource runs... Um... Well... Okay. Okay. Give the resource
[04:30:40]  initial value. Like this is humoring. Yeah. Yeah. Initial value in the object. Yeah. Initial value. Let's just give it two. Let
[04:30:53] 's see if this works. Now switch pages. Wait, but... Okay. Is the transition gone? Transition is gone. Yeah. Yeah. Yeah. See...
[04:31:07]  Yeah. See... Now that's tearing. What? It's... It's going to fall back. It's showing two. It's going to the page immediately showing two
[04:31:14] . And then as it loads in... Then... You call this tearing, but this is the exact behavior we would get if we just used create resource with no suspense.
[04:31:22]  Yes. Yes. Yeah. This is... Yeah. Tearing is what happens if you don't use suspense. I see why dot latest is here. It lets us
[04:31:32]  opt out of suspense. But I don't like the idea of a version of things where we're recommending suspense and we're recommending error boundary. And you still have to sometimes
[04:31:44]  call a property on the signal. Yeah. I mean, the thing is, the way you solve this in React is you make a create deferred value and then do an
[04:31:52]  equality check between the two different deferred values. So they introduced a whole other primitive to do this. How common is this that I want to opt out of suspense?
[04:32:04]  That's the funny thing. I thought that this was not very common. Right? I thought that most people would use transitions. Like, that's the pattern. I was
[04:32:14]  talking to Dan Abramoff in London and he's like, no, actually, we kind of recommend... We think that transitions are for library authors mostly. People like building
[04:32:22]  the router and stuff. And we think that most users actually either want the fallback or they want the tearing for, like, micro stuff that they're going to do
[04:32:30]  on the page. If they want the tearing, they just shouldn't use suspense. Do you know what the benefit of this is? Refresh the page. Reload
[04:32:38] . Not the whole page. It's the example. Reload it. It happens too quickly. Well, you still see the tearing. It's because you got
[04:32:50]  the initial value. Yeah. This example, we can't get it both ways. But generally, you wouldn't have the initial value. When you load the page, you
[04:32:58] 'll get the fallback. And then when you navigate, you will get the tearing. Can we just show the .latest sandbox? I think that's what people
[04:33:08]  are asking for. Yeah. Yeah. Let me see if I can find this. Code sandbox. Yeah. You guys are talking about dinner for Ryan. In my time,
[04:33:20]  it's 7.30. I'm thoroughly enjoying this. We got to go through the whole... I haven't even done... We haven't even done this week in JavaScript
[04:33:31] . So we got to... This is our last example, I think. Let me see here. What do they call it? Stale resource read. Let me get
[04:33:39]  it. Solid stale resource. Okay. I'm going to share my screen. I'm going to swap back around. Yeah. I'll stop sharing. All right.
[04:33:46]  So let's do this. Okay. Bam. Okay. So this is the scenario for this. Pretend we have this API. And like you can go through the
[04:34:02]  different beetles. Okay. And this really shows off the tearing. But it actually slightly grays off. I don't know if you can see this. So you're
[04:34:13]  using transition and you're using pending to do the gray. Exactly. I'm using pending. No. I'm using pending to show the loading up here. So it
[04:34:25] 's not... This loading is not a fallback. This loading... Well, you're also using pending to gray out the list. No. I can't because the list
[04:34:35]  graying out has to do with the data being... Yeah. You're going to hate this. Let me see if I can get a longer data timeout, set
[04:34:43]  timeout. It's one second. Let's make it two seconds, maybe. You're not going to like what's going on here. This is the only reason why
[04:34:56]  I think we need loading on resources. Because... You mean late? Oh, loading or latest? Loading. This example is the case. Because we can work through
[04:35:08]  it piece by piece. Then I can show you what I'm going at. Okay. Because there's three distinct stages. There's this one when it's transitioning. And
[04:35:16]  this one when we're tearing. Because the thing is, if we don't use latest here and just call a resource... What's going to happen is... You can
[04:35:30]  see the loading happening. When we do the page, Ringo loads faster than his data. And if we just read the resource here, what's going to happen... You
[04:35:39]  might have to explain the setup of the example. Because there's like two suspenses. Yeah. So what we have is we have a suspense boundary that wraps the details,
[04:35:47]  which is just the name. And then we have a second suspense boundary showing some like cool facts about the beetle of your choice. Okay. So is there... But it's
[04:35:57]  not... There's two... And there's actually two different resources. There's a user resource and then the list of... Okay. They're not dependent on each other
[04:36:07] . No. They're based on the fact that we have this ID. So we have like George's ID one or Ringo's one and George's two. So the
[04:36:15]  user loads nice and quick. And then fetch post takes longer. Yeah. So I'm going to make this one a little bit longer so we can see it. Okay
[04:36:24] . So what I like about this example is I can literally show all the behaviors all in a single example. So the default one without... Let's start without a transition
[04:36:36] . So let's do... How do I do this best for the transition? Just in the on click. I just... Yeah. I just removed this. Yeah.
[04:36:43]  So we just... We're just doing this. Okay. So first stage. No transition. We still... We see the cascading loading because that's how it works
[04:36:54] . Right? One, two. When we click next... It's not cascading though because it's not dependent. Right. But you can pretend this is a
[04:37:01]  page where you can get the initial data quickly and then you can get the details a bit slower. So that's why we split it. If we... I mean, the
[04:37:08]  real base case is we don't split it. We get rid of this fallback. Like... And then it just waits for both. It waits for the longer one.
[04:37:16]  Okay. Yeah. Okay. So I'm going all the way back. Okay. Basic case. This is where you start with. This is your solid startup or whatever.
[04:37:24]  The whole page is basically wrapped in a suspense boundary. So you have to wait. So you're waiting. And to be clear, the resource.post.loading
[04:37:33]  has no effect right now because all that did was show gray if... Yeah. While it's loading, it's like you're not going to see it anyways. You're
[04:37:43]  seeing this fallback loading profile. When I click next, back to the fallback. We're waiting for all that data. Back to the fallback. Waiting for all
[04:37:50]  that data. So now you use... So now you use... Yeah. And then we're like a little smarter. We're like, well, we actually care about these
[04:37:57]  pieces of information differently. Let's give it its own loading thing. So now our page can load a little faster. And then we're okay with this loading a bit
[04:38:04]  later. And when we go to the next one, same thing. We're waiting for it to load, John, and then it loads. So as we go through
[04:38:12] , you can see the double load because we need to reload the page and then reload the post. Okay. So far, so good? So far, so good. Right
[04:38:23] . And then we're like, well, this is really jarring UX, like having this come to us. So let's wrap this in a transition. So let
[04:38:33] 's do that. Let's start transition here. And now the initial loading is the same. But when we go to the next one, we show the current state. We
[04:38:43]  show like a pending indicator and then we wait to show it. And while this is like better than like around this. So the idea here is when we hit start transition
[04:38:53] , it goes and hit and finds the outer suspense boundary. And that's what it's going to wait for. Yeah, because it needs, yeah, exactly. Like
[04:39:02]  the whole thing, like both of them are actually getting like, both of them actually just read. So like, because this one actually goes. That's the one that gets
[04:39:15]  hit. Yeah. Yeah. Like, because like, but I mean, there's a read here and there's a read here. There's two reads. So like,
[04:39:21]  it's still waiting for the whole transition to finish. Like you're bang, you know, like. It hits both suspenses and the longer one. Okay. Right
[04:39:34] . But the awkward part about this one is like, you're kind of in this zone where you're like, oh, well, maybe I didn't want to, like
[04:39:44] , we did the second granular suspense to break out of this. And now we're waiting for the entire thing. Like, because we turned on transition, it goes and waits
[04:39:55]  for all the suspenses again. And so we lost our whole point of. Right. And to be fair, if we broke this up in such a way where this
[04:40:03]  was like dependent on this in such a way that this was a new suspense boundary. See, this is not a new suspense boundary. We're actually just fine grained updating
[04:40:11]  here, fine grained updating here. This is the, like, this is the same suspense boundary. You're saying if we actually created a suspense boundary after the transition
[04:40:23]  is triggered, it won't wait for the new one? Yeah. And it'll show the fallback. Yeah. That's kind of neat. Okay. So you
[04:40:30]  get that control. That's what I was trying to show. Like, if you go to a new page and you want to, like, do that lazy loading, that
[04:40:35] 's what the other example was good at showing. Because we, that's what I was trying to show in that other example is, like, you can say, like,
[04:40:41]  wait for this, don't wait for this. But in this case, these are all just, like, positioned here. So the thing that they were proposing, and
[04:40:49]  again, this example is navigation, so it's not the best use cases. You might want this for, like, a type ahead kind of scenario, is instead, the
[04:40:58]  idea is, what if you could say, no, actually, I don't want to wait on this one if there is already data there. And if I do that,
[04:41:08]  what can happen? Yeah, just a second. Let's go back to what I, what was there originally. Okay. Okay. Sorry. Something was weird there.
[04:41:22]  Okay. What you're seeing is the initial one is doing the cascade like it always does. But now when we go to the next, what's going to happen is it
[04:41:29] 's going to transition on this one, but this one's not going to trigger the inner suspense to transition. So it's going to loading transition switch tearing go. Okay.
[04:41:41]  So you, you're opting out of the set. Okay. You're using .latest opt out of the inner suspense. Yeah. You could, you could
[04:41:48]  have just put the suspense inside profile timeline and not use .latest. Right. But, and then you would have got a different loading indicator. So like there's
[04:41:58] , there's like a couple of ways to solve the problem, right? You could, you can nest the suspense in a way that it gets created. So then you show
[04:42:04]  a fallback or you, what you can do in this case is you can, if you don't want to show a fallback and you want to tear, like opt
[04:42:13]  out of the whole experience, you can use .latest. And then what I'm doing here is I'm using the loading now to actually indicate that it's loading
[04:42:22]  by graying this out. So when you see, while it's, it's consistent at first, while it's transitioning, when this, as soon as this transition ends
[04:42:31] , it realizes that this is stale and it's grays it out. So like, it's, it's like, we're waiting for it, grays
[04:42:39]  it out, completes. I mean, this, this is an interesting. I don't love this API. Um, I would honestly rather call a fricking hook, uh
[04:42:55] , like a function called latest and wrap resource output. Like I would rather do that than keep this like signal property system. Right. I understand, I understand that the
[04:43:06] , the biggest challenge is the identity, right? Um, so like what latest would have to, to like be specifically made for resources and specifically like it has no meaning outside
[04:43:18]  of this and it would have to specifically, um, know how to read the resource in a specific way. Um, well, what if you, uh, got it from
[04:43:27]  the create resource call, right? Like instead of doing post dot latest, just return latest as part of the object, the return object. I mean, I mean,
[04:43:39]  I mean that, that, that, that is what it is sort of. It's, I know it's like, if you think about it, it's, it
[04:43:46] 's post dot latest. Like it's no, no, just, you know what I mean? Mutate, refetch and latest. Right. But latest is a
[04:43:52]  read, not a write. Oh, God damn it. You're right. And it's reactive. So like, I just, I just can't, I just can
[04:44:00] 't with the, like the whole point of suspense and that's not, not the whole point, but one of the benefits of suspense and error boundaries, we don't need
[04:44:07]  dot loading anymore. We don't need dot latest. Yeah. This is, this is why I've been, you know, like a loop here. Right. Cause
[04:44:13]  if, if, if, if I go experimental, uh, experimental react, Dan, he did warn you that you would hate this. I don't hate it. I
[04:44:23]  just, it's not the most elegant thing in the, in the world. Right. It's just like, if this example actually exists in here, um, and
[04:44:32]  where is it? Uh, not there. It's, where is it concurrent UI patterns? It's there, they had this exact, in the, in the old,
[04:44:41]  you're, you're in the old docs. Yeah. The old docs. Yeah. Um, where is it? Yeah. They, they, they actually, this
[04:44:56]  is, where is it create? Yeah. I, I'd have to find the example again, but this is, this is the one that I actually modeled on where they
[04:45:07]  actually showed, they, they, they, they had, they created, uh, use deferred value basically as a way of determining stuff, but it works because of the
[04:45:17]  way of react re-renders. I, I'm not going to find it right now. It would take me, uh, another 10 minutes for me to figure out
[04:45:23]  what use deferred value. It actually does anyway. So yeah, it's not worth it. Uh, this is, uh, this is a question. Most framework
[04:45:30]  routers use, use transition on URL changes automatically. In other words, when you're using your average spa router, in any framework, you're not going to see a
[04:45:39]  loading indicator. You're going to see the current page. Yeah. This is why there's like, is routing and stuff. Sorry. Someone asked if, if,
[04:45:46]  if, if, if, if they're the only person that likes spinners, it's just funny. Like remakes lust. Oh no, no, no. Rem
[04:45:53] akes hates it. Yeah. Uh, yeah, that's great. Um, all right. Uh, num, num, num, Barry says, so what I just
[04:46:00]  saw was that we can either show a loading spinner while waiting on data. That's the fallback. Or we can wait for the data and not show a spinner.
[04:46:07]  Um, right. But, and then you use the pending state as a way of indicating that it's non-responsive. Like, well, it is responsive using transition
[04:46:16] . Right. Right. But I'm saying that's the key is that you're showing, you have a way of show you, it's augmenting the stale state
[04:46:23]  in versus, um, falling back to skeleton. Yeah. Um, yeah, the, the, the, the third option of tearing is it's. It's first
[04:46:35]  of all, it's the default option. If you don't use suspense, um, it's, these examples might not be the best. I think tearing comes up when
[04:46:42]  you have like stuff like type ahead, like it's for cases where you're like on a page and like, like you, you auto complete and you're like typing in
[04:46:51]  and it's filling in search results for you. Yeah. Like where you like, don't care if you're seeing the old results while like you're, if you're
[04:47:00]  typing a word, you don't want it to go to fall back every time you're searching, like typing a letter, you don't necessarily want to transition. You
[04:47:08]  don't want to hold the, the text while you're typing it so that you, like you, you actually want tearing in this. But the unfortunate part is because this
[04:47:18]  is whole things under a suspense boundary, then you'd be falling. If you didn't individually wrap the suspense, you'd be falling back to the parent suspense. And
[04:47:26]  then someone in chat says, let's just use PHP and wait for stuff. Yeah. If you use Astro, uh, solid suspenses are all client side. Um
[04:47:38] , the, the funny thing is that we get back to the problem at statement at the beginning, right? Like waiting for everything is slow, right? So it's
[04:47:46] , it's like, it, like this is, this is, this is, this is the, this is the, this example here with the, with the stale
[04:47:55]  slicing is, I feel like it exists to prove that it's possible to do this. Not because like anyone actually wants to do this. Yeah. I can see why
[04:48:04]  people want to use, use transition. Um, so I, I'm, I, you, you, you've bought, like I, I'm bought in on a
[04:48:11]  use transition. I'm not quite bought in on dot latest yet. Like the idea of opting out of suspense, once you're in a suspense boundary seems a little,
[04:48:18]  a little weird. Yeah. I was, I was happy that it was an API that we could literally just tag on rather than like have to create a whole, like the
[04:48:28]  use. I don't want the react example, but to do this in react requires a secondary primitive and wiring it a certain way. Like also, also one thing that
[04:48:37]  I don't want to forget in 1.7, can we export use transaction in addition to use transition just so you can use that? Yeah. I mean, we could
[04:48:45]  talk about API designs. I haven't made it, we haven't made a call on that one yet, but this, depending on the concurrency model of 2.0
[04:48:51] , we'll, we'll get there. But yes, transition is probably a terrible, terrible name. This is kind of a cool question. Can you opt into as
[04:48:57] ync rendering on a per route basis in solid start? That's, that's kind of an interesting question. Um, technically yes, but not as like just a switch.
[04:49:08]  Like it was what I've seen is you have to go to the most permissive model and work backwards. So you, you start with, you start with,
[04:49:15]  uh, uh, uh, async and then don't like, don't, don't use, don't use suspense on one of the routes. Yeah. Yeah.
[04:49:20]  Or like maybe it's a little trickier than that. Maybe we need something to create resource that kind of helps us with that. Like maybe another one of those initial value
[04:49:28]  from type things. Like I, I know what you're saying. You're saying you can't just, you can't just not have suspense on one of the routes
[04:49:34]  because it'll still wait for the entire thing. Or, or no, it's more that you, you, you will want it in the client. Yeah. So
[04:49:41]  you need to stream, you want to stream that. Yeah, yeah, yeah, exactly. You'll want it in the client. So the answer is no, but I
[04:49:47] , if you asked me to do it, I could do it like within user land without changing solid code. It just wouldn't be easy. So there's a question whether
[04:49:55]  we should make that easier. I would argue that it like doesn't matter. Like with streaming, you have the ability to control that in a fine grained way. Um
[04:50:03] , so. All right. Should we, uh. Yeah, I think, I think we got to end and I got to like try and do this. We can
[04:50:13]  JavaScript in like 20 minutes. Um, so I, I appreciate you coming on today, Dan, because. This was a blast. We, we, we covered a lot
[04:50:20]  of ground and this is really going to help me because I'm, I'm working on this whole curriculum. So. Yeah. I mean, there is a lot of complicated
[04:50:27] , um, stuff here when you get into the weeds and it's, this is, I mean, it's funny. Like this, maybe this is why the react guys
[04:50:35]  don't talk about this that much or like, it's just Dan doing like a long ramble. Like it's, it's really hard to figure out how to
[04:50:42]  teach this, you know, in a way that, you know, I haven't looked actually at the new docs for this specific section. Like, like do the, I
[04:50:50]  would go check it out, but I know I'm going to get myself confused because their transitions work differently. Well, the funny thing, their, their, their suspense
[04:50:57]  works differently, but the, the, like the behavior of the transitions from like an outside perspective, um, mostly works. Yeah. I mean, they got lots of top
[04:51:08]  level stuff describing the UI, keeping mode of shooting, adding interactivity. This, this, this guide isn't okay. So interesting. So learn react doesn't really
[04:51:17]  have this stuff, right? Like, like, I think, I think they're not going to recommend suspense unless you're like on the server. I think that's their
[04:51:30]  approach. Yeah. So it's going to be like API references where I'm going to find out about this stuff. Like, use there. Yeah. Transition.
[04:51:37]  There's my use imperative handle. What a, what a beauty. Um, use transition is pending. See examples below pending flag. The other one I want to see is
[04:51:48]  use deferred value. This is, this is a good one. Like, cause returns the initial render. The return deferred value will be the same as the value provided
[04:51:57]  during updates. React will first attempt to re-render with the old value. So it returns the old value and then try to another re-render in the background with the
[04:52:03]  new value. Use, oh yeah. Yeah. You know what? We're not, but this is, this is the, yeah. This is their version of dot
[04:52:18]  latest. Yeah. Yeah. Essentially. So you kind of go use state deferred search results, deferred query inside the suspense. And then, yeah, that's basically
[04:52:30]  it. Like, you wrap it in the use deferred value and then you are able to equality check the deferred value against the undeferred value to determine if
[04:52:39]  you're stale. Anyway. Yeah. I, in order, like my, you're really good at context switching from react to solid. In order for me to
[04:52:49] , to do that, I have to like take a deep breath, go into react mindset, open my react stack blitz. And, um, yeah. Yeah.
[04:52:59]  I, I mean, anyways, I, and I'm hoping to, I'm hoping to avoid ever writing a react app again. Um, yeah. So yeah, in
[04:53:12]  each, in, in each of the, I think when we, I think as soon as you figure out how to actually talk about this, there's a lot of power
[04:53:20]  in this. Unfortunately, this is something I struggle with, so I appreciate you taking the time to talk with me through it. I think one of the keys for,
[04:53:27]  first of all, it's explaining it, but then also just showing the router and explaining how the router uses it, uh, for use transition. I think we'll be
[04:53:34] , we'll be interesting. Um, I, one thing as we transition into solid start, I want to be extremely good with teaching people suspense and the three modes.
[04:53:43]  Because, like, you lose a lot of power if you're just doing one suspense at the top every time. Yeah, I agree. It's just like we have to
[04:53:51]  do something sane as a default. Yeah, it actually makes sense as a sane default because you can obviously go more granular than that, right? Um, you can catch,
[04:53:58]  it's like a, it's like a catch. Suspense will, you can, you can catch below it and it will never hit the top one. Exactly,
[04:54:05]  yeah. All right, well, thank you for joining us today, Dan. I'm going to let you go and we're going to like do a speedy This Week
[04:54:11]  in JavaScript. All right. But, um, have a good one. Uh, yeah. Thank you for joining me today. See you soon. Yeah. All right
[04:54:19] . Um, let's figure out what we can do here because I'm just setting up this week in JavaScript. The stream is not over. Um, we get to talk
[04:54:26]  about all the fun stuff that happened this week. Um, uh, where, when did this week start even? All right, when do we, we go March 10th
[04:54:41] -ish? March is when the stream started. All right. I actually got a, yeah, there we go. March 10th. So I covered that. Yeah
[04:54:52] , so actually, okay, there we go. There isn't actually maybe as much this week in JavaScript. We already talked about a few of the points that I wanted
[04:55:04]  to talk on. But while we're here, let's, let me see here. Just checking if there's any solid stuff I want to look at. Um,
[04:55:13]  yeah, that's worth mentioning. And then, doop, doop, doop, doop, doop. Okay, cool. How's everyone doing? You
[04:55:26]  guys still alive? I know that was a lot. Like, a real lot. But, you know, this is why we do C.R.A., this
[04:55:38]  has died. How can it be so cold? Yeah, you know. C.R.A. never meant that much to me. All right. All right.
[04:55:50]  All right. Those two. Okay, perfect. Okay, I think I'm good to go. And I'm going to clean up a few other things here. And.
[04:56:11]  Okay. Have a little drink of water, maybe. All right. Let's do it. All right. Banner. All right. It's time to talk about
[04:56:35]  this week in JavaScript. And, as usual, with every week, this week for me started where last week ended. There was a lot of talk last week about server components
[04:56:46] . It was like, I don't know. It's funny. The week before is all signals. It's like these, like, big hype waves that go for
[04:56:52]  a week and then just kind of disappear off the map. I'd actually made the joke that I'd forgotten about signals. And I believe I'd actually shown that on
[04:57:03]  last week's stream. But, yeah. One great thing. There was some great video content that kind of came in the aftermath. People kind of looking at some of
[04:57:17]  the content that came out last week on these topics and then actually making digestible videos on it. And a great example of this is we had them on stream before.
[04:57:29]  Christopher, maintainer, create T3 app, was like, hey, you know, I think before someone could even watch that server come out stream, they have to understand
[04:57:39]  what next is and what it isn't. And Chris did this great video, which explains how Next.js is a single page app framework, which is really good and
[04:57:50]  to the point. And I think, you know, if a lot of people don't understand this, I take that knowledge sometimes for granted. But I think Chris did a
[04:57:57]  great job of laying it out. And I anticipate that he'll have more videos this week following up on some of those other subjects from the RSC stream and kind of put
[04:58:04]  them in better context. I just did a spew of consciousness off the top of my head. I think that content could easily be made into, like, four or
[04:58:12]  five really focused videos that are really useful for people. So awesome to see that. I've been working on solid a bunch this week. So I'm going to talk about
[04:58:29]  a couple solid things before we move on. One of them is that I've been trying to wrangle in TypeScript for solid. And I asked this question to people
[04:58:41] , which was, like, if we had a control flow where we could narrow the user down to a function call, you know, that could be used. And this is
[04:58:52]  something that we are intending to release in 1.7. If someone tried to then use it again in, like, an undefined context, like a set
[04:59:00]  timeout, what should be logged? And most people on the reactive side kind of go, well, it should be null. Like, if this has been hidden, user
[04:59:08]  is now null, so this is null. The problem is TypeScript does not know how to, basically, once you cast it to be non-null, it
[04:59:18]  doesn't know how to make it nullable again, essentially, is the whole problem. I went through so many variations, variations where I was like, hey, let's
[04:59:31]  make the JavaScript reflect what TypeScript says. I went through examples where I was like, let's see if we can try and force this in a weird way. Ultimately
[04:59:41] , this is not solvable. And either you have to sacrifice the expectation of the runtime, like null, which is really what it should be, versus the expectation of Type
[04:59:50] Script, which is what people want it, you know, here is. The commonality is most people don't want it to throw errors. But in any case,
[05:00:00]  doing stuff like this kind of has the same vibe as, like, trying to use state after a component's been unmounted, you know. So I think ultimately we
[05:00:11] 're going to do kind of a hybrid where it's null plus warn instead of error. I'll talk about this more in the 1.7 stream, but this is
[05:00:22]  a really useful conversation. I had a lot of good people kind of chip in, give their perception on, like, the trade-offs and what they would expect, which
[05:00:32]  is more valuable to me than the results. What people's expectations are gives me a different point of view, a different context than, like, what I'm generally doing here
[05:00:41] . In terms of, like, I can think of many different designs, but the first gut feeling you get says a lot. Just catching up a little bit on chat
[05:01:05] . Yeah, exactly. That's the reality of it. But the funny thing is, inside the scope, on a synchronous execution standpoint, it's as accurate as any
[05:01:23]  other, like, the funny thing is, I'm going to go into this much more depth on the 1.7 stream, which is probably going to be next week.
[05:01:31]  But, like, there is no good solution here, and TypeScript itself can be inconsistent. So, anyways, it was an interesting one. On solid side, while
[05:01:49]  we're talking about it, we added a whole bunch of new solid start examples in StackBlitz. So, you can just get started by clicking on one of these
[05:01:59] , Bear, to do MVC, Tailwind, Auth, Prisma, SolidStyle, VTES. So, this is really cool. You literally just
[05:02:05]  click on the example, and you have a new solid start project at your disposal. And you can just do it in StackBlitz, just from the URL. We
[05:02:15]  had one already for normal solid stuff, but now we have solid start ones. Really good for just jamming away and giving it a try. So, definitely do check
[05:02:28]  that out. That's actually the main solid news this week. I've been so busy working on 1.7. What else is up? I'm speaking at React-
[05:02:38] a-thon. This should be fun. Tanner, Fred, and myself are speaking at React-a-thon about React server components, of all things. What myself
[05:02:49] , Tanner, Lindsley, and Fred have to do with React server components probably might be a mystery to some. And those some include people speaking on that panel. But
[05:03:03]  I think it will be interesting regardless. So, I think we will have a chance to kind of hash out a lot of the differences and understanding between server components and islands.
[05:03:12]  Because there's a bit of a friction going on there right now. And it's going to leak into some of the other discussions we're doing. The thing after,
[05:03:23]  are you talking about the hack-a-thon on the day after? Yeah, I'm excited for that as well. Yeah, I know. It's like, is
[05:03:37]  this secretly where we launch Bling and Astro and stuff? Oh, it's not? Well, I didn't give a link, so no one's going to find
[05:03:47]  it anyways. Yeah, okay. What else have we got here? We're seeing a revival of VDOM libraries on JS Framework Benchmark. Yeah,
[05:04:01]  I want to talk about this for a minute. There's been this whole, like, VDOM slow, reactivity slow. And I did this tweet because I
[05:04:11]  wanted to show some of the recent entries into the JS Framework Benchmark. It was mostly Eevee, which was, like, the fastest virtual DOM library
[05:04:23] . I know Inferno is popular, so it gets more attention. But generally speaking, until the recent change of the warm-ups, Eevee is actually probably
[05:04:30] , or I don't know how to pronounce it, Ivy or Ivy or whatever. It's probably the fastest VDOM library. Like, if you look at the
[05:04:36]  history of this benchmark, Ivy's been the fastest virtual DOM library, like, the longest compared to any, like, over the whole period of time. And the author
[05:04:45]  behind it, Boris, is an absolute genius when it comes to this stuff. And he just released a 2.0, which popped it up ahead. It's been kind
[05:04:53]  of sitting back over in, like, the leptos kind of territory. And that's because him, like Millions, have adopted a new approach to VDOM
[05:05:01]  that was originated by, actually, a library called BlockDOM. Which I talked about a year ago, but it's interesting, which is it's a virtual DOM
[05:05:14]  library that uses the same kind of template cloning that Solid.js does to get the initial creation updates, which is quite impressive because it kind of moves a lot of the
[05:05:26]  weaker benchmarks over, except for, obviously, select rows, which is always slower on the virtual DOM libraries. The interesting thing you might notice is, you're like,
[05:05:35]  wait a second, Millions is fast on where the virtual DOM libraries are fast. How did this jump up in front? This must be, like, the fastest framework out
[05:05:42]  there. I posted this just, you know, to get sensational on the results and kind of see it. Technically speaking, from the framework perspective, Millions is, like
[05:05:55] , and it's been marked properly now, is considered as kind of, I'll show you. It's, it's, it's, it's now marked with
[05:06:04]  772, which means it's considered a vanilla implementation. Basically, it escapes out of declarative to doing direct manipulations to get it. And I'll show you,
[05:06:15]  I'll show you what I, what I mean. Generally speaking, this approach, and actually, I want to show, show BlockDOM here so people can see it
[05:06:23] . Where are we, BlockDOM here, another one, right? BlockDOM is, it's funny because you see this, like, long list of names
[05:06:33]  and you're like this. This list, order shuffles every single release because all these frameworks basically all have the exact same score at this point. Like, they
[05:06:42] 're all, like, 1.08 or 1.9. Like, basically, everyone up from, from Solid here, which I guess this was a slow run for us
[05:06:49]  this week, all the way up to, I'm, I'm going to say, EV, all basically are the same speed. Right? 772 means you do
[05:07:02]  manual DOM manipulation. And, and what this means is, from my perspective, generally, I discount the results. I don't use it in comparisons. I consider it,
[05:07:11]  like, it's fine to do, but, like, every library could do 772. Like, it's basically either you're, you're doing it because you're
[05:07:18]  vanilla library because you're manipulating the DOM directly, or you're kind of cheating what the benchmark doing. I'm not saying there's bad intent there. I'm just saying
[05:07:25]  it just skips, it avoids testing what the benchmark's actually testing. So, manual vent delegation, I don't care about, but generally, when I go
[05:07:34]  here, manual DOM manipulation, view state on the model, cross animation frames, I leave these two. This is what I look at when I look at the actual list.
[05:07:45]  And from that, you can see that list gets a lot smaller. Most of the stuff, a lot of the stuff at the front is basically just not participating in the benchmark
[05:07:57] , so to speak. These ones are interesting because I think they should be flagged in their own way, especially this one, but it's for a different reason.
[05:08:05]  Like, they sort of circumvent declarative data. They're basically, like, just a proxy over a write, but, eh, whatever. I just don't worry
[05:08:14]  about it too much. The list basically starts here. And if you look at this list, they all basically have the same performance. Like, I think the last run
[05:08:28]  before this one, Solid was the one on the front. And then the one before Inferno was. And we just keep on, basically, the fastest libraries are ind
[05:08:37] istinguishable from each other at this point. You might be going, okay, well, why am I being so harsh on million here, right? What's
[05:08:45]  up? Well, I didn't realize this right away when I posted it, but this is how select row works in the million benchmark. So picture, like, this is
[05:08:55]  the code you're writing. One thing you're going to notice about blocks. I love that, actually, that their version uses JSX to generate the blocks, which
[05:09:03]  is really nice. But you will see stuff like row block. So block is a way of signaling, like, that this is a clonable fragment, essentially. So
[05:09:13]  the API does explicitly make you go, like, hey, this is something you want to clone. In some ways, it's not that different than what Vue is doing
[05:09:22]  with its vmemo. Like, basically, it has a directive to say, like, we're going to make these vdom nodes, like, cacheable.
[05:09:29]  But in case of this block, it actually lets them clone DOM nodes on creation. That part is fine. And you look here, you know, you can go, oh
[05:09:37] , on click. But the problem is this kind of stuff. Like, most of the tests, like, you could see it in the length of the implementation itself. Most
[05:09:46]  of the time in here, you'll see something like create row, and then you build some data, and you call. They have a manual update instead of just a set
[05:09:52]  state. But that's not that important. So you build the data, update. This is, like, set state. Build the data, update. Append, update
[05:09:58] . That's fine. Every 10th, go through the list, update it, then call update. Swap rows. But when you go to select rows, what
[05:10:05]  is it doing here? It basically looks into the block, grabs the vdom, calls patch on it manually to remove the existing class name. Then, or sorry, this
[05:10:15]  is grabbing the existing cached one. Then it goes, finds out of the children, the block with that ID, and then it calls a patch render call on that to
[05:10:23]  update the name. Like, I don't, this is not really, I mean, maybe this is the API, but like, this is kind of like why this
[05:10:32]  was kind of called a thing. And actually here, when you on click to do event delegation, this part matters less. It actually does the manual event delegation to figure
[05:10:42]  out. This is actually fine. I don't actually care if people do this. But this is kind of like, this is very explicit way of doing this versus like
[05:10:52] , you know, if you pick, like the way this usually looks is like if you, can I find react hooks as an example for people? Usually when you go
[05:11:03]  in and you do select, it's something like, okay, here's a reducer. So you set the select ID. Okay. Like, like this is the whole
[05:11:13]  implementation. Like, it's just a reducer. It's just like, okay, selected equals selected ID. And then in here, inside your row, you're going
[05:11:22]  to have something like is selected, selected equals ID. Like that's declarative. It's not like calling VDOM patch calls, right? Which is why it
[05:11:30]  gets marked as 772 comparatively, because like, like, let's see what, what's the, I'll do the solid store implementation here. It's, it
[05:11:42] 's solid store select is set state selected to that ID and then is selected show the danger or not. Like you see, it's just, it's just declarative,
[05:11:53]  right? Um, this, this is that you can, you can drastically see the difference in terms of implementation. So that's kind of where things are at. What
[05:12:05] 's happened is in general, um, VDOM approaches are now picking up some of the like initial DOM cloning approaches that we've been using in the reactive libraries,
[05:12:15]  which has now brought them to basically parody because what you can see the trade-off. Actually, I actually like looking at the trade-off because it makes it really
[05:12:24]  clear what we're trading at this point, but everybody's so efficient that this benchmark isn't, is becoming less useful. But what's happening. And, uh, what
[05:12:33]  you can see is again, which implementations let's remove the ones that don't. Okay. What, what you're generally seeing here is VDOM implementations
[05:12:43]  having higher select rows, um, numbers. And then what you're seeing is that, uh, uh, reactive libraries having higher clear row memory, because like it's
[05:12:55]  more expensive to remove stuff in reactive libraries. Um, and it's more expensive to do fine-grained updates in, uh, in VDOM libraries. That
[05:13:06]  trade-off is basically where we're at now. Both of them are equally fast to create. For a while, reactive libraries are faster on creation. Um, but now
[05:13:14]  it's updates versus removal time. That's, that's, that's what it kind of comes down to. Yeah, so, I mean, which is, which
[05:13:30]  is good. So it's, it lets them, um, optimize the VDOM for a very narrow case in the same way that reactivity was able to let us
[05:13:37]  optimize in a kind of narrow case. So, yeah, I mean, that, that's, that's the kind of state of things. I like talking about this and
[05:13:46] , and showing this kind of stuff off because like, I love this, that we have the, a modern VDOM take with Dioxys and a modern signals take
[05:13:53]  in Rust Wasm. Both just neck and neck. Again, you see the same sort of trade-off. Actually, the memory trade-off isn't what's
[05:14:00]  apparent here. It looks like it's creation versus update in the, in this scenario, but you, you, the patterns actually are fairly consistent. Um, and you get
[05:14:12]  good results on a basic benchmark like this regardless. Um, so yeah, this is what I like talking about because it's, it's not like a VDOM is
[05:14:21]  slow narrative. If anything, I'm just more annoyed when people say reactivity can. It can't be fast. That's, that's, that's, that
[05:14:29] 's, you know, that, that's not, that's not quite on, you know, on the level. All right. Let's keep on going. In any
[05:14:39]  case, we are seeing innovation in the, in the VDOM, uh, thanks to BlockDOM and now EV and million taking that on. Um, but
[05:14:49]  a little bit more than meets the eye. Truthfully, we, we aren't seeing any approach specifically faster in this benchmark. I, yeah, I mean, I
[05:15:04] , I, I have to see unless you're writing like what, yeah. Right. Okay. So yeah, time for a new benchmark? Probably. Um, what
[05:15:30] 's really good about this one is it's really, uh, it's really, uh, accessible to people because it's like, uh, like it's, they let
[05:15:39]  you, a lot of stuff like really restricts the data and like does stuff. But this, this one, because it treats everything like a client interaction, makes it
[05:15:46]  really easy for everyone to participate in a way that they feel is fair. Um, most benchmarks are not very good to reactive libraries, but they also like basically create a case
[05:15:55]  that's really odd. Like span. It's like you pick the scenario. Like if you tried to like this one, you could picture it's a little bit extreme,
[05:16:03]  but if you wanted to make this a real life scenario, you can just picture any table managing software and you're drag and dropping and clicking rows and doing all that.
[05:16:10]  Like you can feel that like that, this is an extension of that. Most of the other benchmarks that, um, that, that I've seen are more like the scenario
[05:16:18]  of like, pretend you get data from a server and you're spamming that at 60 frames per second. There's just like, no, no one's, no one
[05:16:27] 's, no one wants to do that. Like re-rendering the whole page over and over again. Like it makes those tests like less interesting, so to speak.
[05:16:37]  Yeah, I mean, we, we need to work with there. I think the biggest problem there was mitosis while it makes it easier to do the benchmark doesn't
[05:16:44]  let each framework actually, it's like you're only as good as what mitosis outputs, so to speak. And I think with meta frameworks, it's a lot harder
[05:16:51]  to compare because there's a lot of like layers, like where you support different things. Like, like if you don't, if you don't convert stuff into request
[05:16:58]  response, you're going to be faster or slower than a library that just uses node straight when you're in node. Like Marco, for example, in there, Marco released
[05:17:06]  Marco run, which is like the request response thing. So maybe that could be compared, but like what I'm getting at is like, like essentially too many feature pieces get
[05:17:16]  in the way on even the core plumbing. I think for that, for me, if I was going to do this, I would kind of adapt the current Marco server
[05:17:23]  rendering benchmark and do something really library specific rather than meta framework specific. Like look at the core of React, Vue, Svelte, Solid, Quick, rather
[05:17:33]  than like SvelteKit or Next or whatever. So, yeah. All right, what else do we got? I told you, this is going to be a short
[05:17:45]  one. See, React launched React.dev, the new home for React and its documentation. This is awesome. We've been seeing the beta docs go forever. This
[05:17:53]  is probably going to be some of the best documentation on the web for modern front end. While you don't need to learn React to use Solid, people who do learn React
[05:18:03] , if, you know, they'll be able to get past their assumptions due to React, this is like a great resource. Like, you know, in a sense,
[05:18:12]  like there's a certain portion of future Solid users that are going to benefit hugely from these docs existing. So, I'm very stoked for that. Yeah, the problem
[05:18:24] , like even the movies app, the movies app is a good data fetching thing, but it's still like limited. Yeah, that might be, example might be okay
[05:18:39] . A few scenarios like that, as I said, like even images become like a discrepancy on the meta frame or kind of feature level. I want something
[05:18:49]  simpler than that, but with enough markup. Yeah, we're getting there. Because this started the kind of spicy thing. But before we do that, just a quick
[05:19:07]  shout out to Greg. You saw him in chat already. He made a video that clarifies a lot of the confusion around Rust and Wozom front end performance.
[05:19:15]  People should watch that if they're into it, they want to know about it. Basically, a lot of, I've been saying this for a while, a lot of
[05:19:23]  the things people assume about Rust and Wozom isn't actually the truth. Like, even if the result is kind of the same, like, okay, maybe not ready
[05:19:30]  for prime time for this or whatever. The reasoning is not what people think, which significantly changes the utility of Rust and Wozom today, if you understand where it
[05:19:39] 's actually good. And it changes the perspective of where it sits for the future. So, definitely recommend looking at that. Okay. Okay, cool. Now, let
[05:19:49] 's get to the spice of the week. Which is, Theo was obviously super stoked that they removed Create React App. And we've talked about this before. There's
[05:20:03]  so many reasons why this is good. Because, you know, starting React on a new foot, you know, getting out there. You know, Create React App has
[05:20:16]  had its time. And this is a challenge with frameworks in general. And I'm using the term really loosely with Create React App. But opinions and tooling change faster than,
[05:20:27]  like, the paradigm. The closer you are to the core of the library, the, like, the less of this kind of churn there tends to be. So,
[05:20:34]  like, when you build opinionated layers, they're going to have a shorter life than the thing that they're built on top of, generally. Unless there's a big
[05:20:40]  paradigm shift. So, like, React outlives CRA. React outlives Next, potentially. Unless Next, like, you know, changes something more fundamental,
[05:20:50]  you know, like, the use of React itself. But, like, generally speaking, this is a truth. So, like, I think CRA has had its time.
[05:21:01]  And I'm glad that it's gone. Because, you know, time to move on. The problem is, what do you choose next? Well, next is the thing
[05:21:13] . And I think we talked about this on discussion on a stream before. I have to admit, I went a little bit far with this. We're, like,
[05:21:21]  this fully with React thing. Because, you know, people are like, what are you getting at, Ryan? Because if you want to build a new app or website fully
[05:21:30]  with React, we recommend picking up one of React-powered frameworks popular in the community. Frameworks provide these features most app sites eventually need, including this. So,
[05:21:38]  like, there's, like, look, the new starter is you need to use a framework to use React. And we knew this because Andrew Clark tweeted this before. Like
[05:21:44] , this is the mindset. I was focusing on this because some of the responses were, like, you know, what do you mean? I've been using fully React
[05:21:53]  for years, you know? And they're right. Like, like, Sophie Elford, of course. Like, people have been building full after React since 2016
[05:22:06] . Yeah. Like, I'm not debating that. I think the thing is, if you read the PR that Theo originally did and Dan's response, you understand that
[05:22:17]  the docs have a certain layer of careful word choosing that is perceptible to someone who's following along. And, yeah, see, because this chat pretty much covers it
[05:22:31] . Because, I mean, that fully with React means something. Like, there's an opinion on what classifies as fully using React. A certain threshold of features. Don
[05:22:38] 't get me wrong. CRA has had its time, but we're also entering a new era. Oh, you read using React to its fullest extent. I don't believe
[05:22:44]  that was with the intention. I'm glad Dan came in and clarified. He's like, in my mind, he's like, I intended both things. So, I
[05:22:49]  wasn't reading too deeply into it. He's like, Sophie's meaning for the more practical-minded readers, but close to Ryan's meaning for those integrated by the
[05:22:58]  second section. And the reason for this is, if you do go into the docs, and if you look at the original PR, there's a lot of question of,
[05:23:05]  like, what should be recommended? And part of that was, like, oh, we should, you know, people, like, Theo's like, just recommend Veet
[05:23:14] . Veet is, like, the perfect swap for that. But if you actually go into the React dev docs, and, you know, go to learn React,
[05:23:21]  and you go to the installation, and you're like, okay, start a new React project. Okay, good. So, I mean, this is a clear breakup.
[05:23:27]  It's, like, new project, existing project. We only care about new project for our point. You see what we were talking about, protecting great React. They mentioned
[05:23:35]  Next, Remix, and Gatsby. This is funny. Some people were like, I wonder how much Shopify, Netlify, and Vercel had to
[05:23:40]  pay React for this. I can tell you nothing. Like, React wants you to use the framework, so they're going to advertise it. This is not, like
[05:23:47] , these frameworks getting preference. I think they were just trying to include everyone to be fair options, right? I work at Netlify. To my knowledge, no money
[05:23:57]  past hands. Like, this is simply the fact that these are the bigger React meta frameworks and Expo for Native. Then they have this deep dive. Oh, React without
[05:24:08]  a framework. Really long description, all to get to the end where we can say, grab React and React DOM for NPM. Set up your custom build processes with
[05:24:16]  bundlers like Vitor, Parcel, add other tools as you need them for routing, blah, blah, blah, and more. You know, basically, how do
[05:24:22]  they phrase it? You'll be on a roll in your old custom setup. We can't stop you, so go for it. That's what I say when people use
[05:24:29]  create mutable and solid. We can't stop you, right? Well, the thing was, and maybe this is a little my fault, I called shot that Ast
[05:24:45] ro would not make a list like this. And it's not because it's, like, being spicy. It's just, in Dan's response, he had,
[05:24:54]  like, two paragraphs going at length why, you know, Astro wouldn't fit into their fully React thing. Because they, this fully with React does mean something. It
[05:25:06] 's not just, like, a full React. Like, it actually means something. It means, like, the server component future. It means, like, the direction
[05:25:15]  that they're going to use all these features, the routing, all the stuff that they're trying to build towards. So, it even mentions view and spelt.
[05:25:26]  So, I can see what, like, I mean, we called this, like, how is this going to go any other way? And, like, that's,
[05:25:38]  I mean, if you understand what's going on, that's what makes sense. I think I sit as much, right? To differentiate solutions, I may not be using
[05:25:48]  all the features they intend, like Astro or simple templates made with V to Parcel. I think it is to explain the reasoning behind the recommendation. Because, you
[05:25:55]  know, Pierre is like, like, why don't you just say, like, these are what I recommend? Why can I go through this, like, fully with React
[05:26:02]  thing? It's because of what I was saying. There's a definite intent there. And, I mean, it's fine. React team is allowed to have that kind
[05:26:12]  of perspective, you know, and recommend what they want to recommend. So, but there is a whole bunch of, you know, if I find Theo's original tweet
[05:26:23]  and go, you can go through the quote tweets. There's a lot of them. Veet is about to get busy. You can tell people, like, not,
[05:26:31]  like, like, if you actually, like, read the quote tweets, a bunch of people are like, where's Veet? Veet. Veet is the way
[05:26:37] . Veet. Veet. Veet. Like, so there's, there's, like, a bit, I can understand why they went so strong in the
[05:26:45]  language, because there's, like, a bit of a disconnect here. Um, because, use Veet. Like, yeah, so, and, like, this,
[05:26:57]  this is, this is kind of the thing. They're, it's time for Veet now. Like, they're not going to recommend Veet either. Why
[05:27:08]  not Veet? Like, it's so funny. I don't have to make this stuff up. It's, like, literally Veet is the most obvious choice.
[05:27:16]  But, you know, we knew this was going to happen. Um, Veet it is. Um, this is a strong stance they're taking, and it's
[05:27:26]  a stance that makes sense if you understand where React is in its life cycle and stuff. Like, they're the incumbent. They can, their unique value is that they can
[05:27:35]  provide full solutions. They have all the pieces. They, they're getting into later and later markets, like, not trendsetters, not people building their own frameworks,
[05:27:44]  not that. They're, they're getting to a point where, like, people trust and build with React. We had that joke that React was the new Angular.
[05:27:51]  Like, it's more than that. React is actually trying to probably be the new jQuery. Like, actually, like, be that big of a player of force.
[05:28:00]  Like, this is how React grows to the next stage. Um, so, I, I think, I think it's fine to, to kind of, like, see
[05:28:13] , you know, this where it is. I do wonder for those meta frameworks, like, Gatsby and Next and, and Remix, how much they end
[05:28:21]  up resembling each other. Or, like, if they don't, how much of a friction that is with React. I am very stoked to seeing the past week
[05:28:27]  Dan Abramoff go in and, like, to those framers. He's asking stuff for the Gatsby team. I forwarded some, forwarded some stuff
[05:28:33]  over to Kyle and, like, asked some stuff of Remix. And he's, like, actively using them to get a feel for them and figuring out how React can
[05:28:39]  work with them. And that is what, exactly what they should be doing right now. But, anyways, enough digging into, to that piece. I mean, I
[05:28:48]  could keep on going until I find Parasocial's, uh, read, quote, tweet. Um, but, like, this is, this is big. Even if
[05:28:58]  people, maybe, some people haven't been using CRA for a while. This, this feels like the final push or nod, right? Um, as I said,
[05:29:06]  a lot of Veet mentions in here. But, um, there's just too many to, to, to go through. What I, I want to get at is
[05:29:18]  that there is this friction going on right now. Which is why I find it very interesting to have Fred and myself and Tanner talking at, uh, the conference on RSC
[05:29:28] s. Is that, um, you can find these kind of threads going on. Because in the same kind of way that we were talking about signals, you know,
[05:29:37]  as, um, you know, with the, the React folks, you know, and they're like, well, what are you talking about? We fixed this. You
[05:29:44]  shouldn't use signals. This is like using go-to statements. There's that same kind of error around the conversation around multi-page apps. Um, and, you
[05:29:53]  know, Matthew Phillips Astro said, there's an expression I like. Never use a chainsaw when a scapula will do. Solving use cases directly is
[05:30:01]  not a hack. It's what you should usually do. Re-architecting your front end and back end to solve small issues is pulling out a chainsaw. Make
[05:30:08]  sure to wear safety glasses. Because if you, if you watch this back and forth, um, here. And, you know, there's a whole thing. They
[05:30:19] 're talking about Veet. Because some people are very upset that Veet isn't mentioned, right? And, you know, it's clear why they don't. It
[05:30:31] 's a full solution, right? Blah, blah, blah. But what I'm getting at is, so what about Astro? You know, and it,
[05:30:37]  it's still a regression, though, that Astro has page loads. I find it difficult to ever recommend using this UX. Okay. I mean, this started a
[05:30:49]  whole thing, you know, and Matthew brings up a bunch of points about, you know, sites that use, um, page reloads. I mean, the first,
[05:30:57]  the most obvious one, he brought up Amazon and, like, eBay and all those. But the most obvious one is actually Google search. Google search is an MPA.
[05:31:04]  One of the most performant things in the thing. This is an MPA app. Google search. You're right? Like, even, even when I go to
[05:31:12]  the next page, I'm pretty sure MPA. And I mean, the truth of the matter is there are use cases where MPAs are better than single page apps
[05:31:23] . I think personally that the gap that server components bring make it that there's a lot less use cases. So this is a fair discussion or argument to have. But even
[05:31:34]  with server components, there will still be cases where MPAs are the preferred choice to go with. And, and when I say MPAs, I mean sites
[05:31:42]  optimized for that page load experience, not just like using an anchor tag in next. Someone with a parasocial was like, oh, you just use this low case A
[05:31:51] . No, I don't mean that. I mean, pages that are authored in a way that can optimize. The truth of the matter is client-side routing is
[05:31:57]  only getting better. But like, it's, it's, it's, it's this attitude. It's still a regression. This is the mentality is why the
[05:32:08] , the, the friction's happening. Right. It's, it's, it's like a problem to be solved. And yeah, I don't know. I,
[05:32:18]  I, I, we'll, we'll see how that, uh, that, that goes over time. But yeah, I mean, this, this is, this
[05:32:36]  is, this is the, the hot debate. Dan brings up the examples of the scroll bars and it, and the math is like, look, it's not like
[05:32:58]  client routers are particularly good here. Actually, uh, uh, uh, Rich Harris's talk again, it's funny. I didn't like the transitional app thing that
[05:33:07]  much, but his transitional app talk is just gold for understanding real, like this talk. I'm going to post this like multiple streams in a row. This talk is
[05:33:19] , can I get the share link? This talk is just gold for understanding that there's trade-offs to client-side routing. Don't worry. We're working on
[05:33:35]  it. Things will get better. I am very much in the server component client-side routing side of things, but I would never state that like multi-page apps
[05:33:47]  couldn't be optimized more than that. Like there's a difference when you go there, they can definitely, there are places where the performance is better for multi-page apps
[05:33:57] . It's just, and where it serves the UX better than client-side routing. It's, this is, to me, it's not even debatable,
[05:34:05]  but this is why there's this friction, um, which is fine. If, if we like, you know, alienating ideas, then like it's, it's
[05:34:13] , it's, it's all good. Just reading some chat. It's a shame that Svelte didn't deliver on transitional apps. I mean, they,
[05:34:36]  it's a hard problem. I think server components is actually delivering on transitional apps. So that is as close as, as we can get, um, or quicker,
[05:34:46]  like something along those lines. I think we're, we're working on those things, but even in a transitional world, like the one extreme still has benefits in some places
[05:34:57] . That's, that's, that's it. Have I add red to a resisting project? Um, briefly, um, is there something special here? Build a framework
[05:35:06]  using react, especially some name. Um, I, I, I assume this meant like my Django thing. And the, oh, okay. So they recommend using
[05:35:20]  VEAT as a way of using react in existing projects as a bundler. That's, that's cool. I, I, I think it's, it
[05:35:37] 's, I think it's, I think it's like makes sense. Um, although I, I do actually think you starting react with VEAT, it makes a
[05:35:54]  ton of sense as well. So, you know, I mean, I, I'm not worried about like, not every framework needs to be mentioned in here. Like
[05:36:05]  it's, it's okay. Like they don't need to mention, uh, you know what I mean? Like they don't, there's, there's no need
[05:36:12]  to mention, uh, Astro in here or whatnot. If that's not what they recommend. It's just, it's, there is this, there's this
[05:36:21]  air and that, that's the place that's interesting for me because, um, I think there's going to be some interesting developments over the next year, you know,
[05:36:35]  on, on both sides and we'll see how that all plays out. Um, one last one I want to do, this isn't a big one that we mentioned
[05:36:47]  this with Dan earlier on the stream, I see this code and it makes perfect sense to me and that's like, okay. Yeah. So you set up some state,
[05:36:55]  use an effect fetch, set the state with the, then if it's an error, log it. I mean, this is not good error handling, but I, I
[05:37:03]  follow fetch it, set it initially return null otherwise return thing seems straightforward, but I, what I really enjoyed about this one was like, he went through, he used
[05:37:16]  react before hooks and he actually went through his learning process and tried to understand it. And this really highlighted, um, a lot of concepts that we take for granted when looking
[05:37:29]  at a framework, kind of like the same breakdown that Dan was doing earlier with solid, he was doing with react. Um, and I realized when I was trying to
[05:37:35]  explain it, not using technical jargon, I still needed a few things. I need to talk about pure functions and side effects. Um, I need to define hooks and
[05:37:43]  use and state preservation and rerun. And there, there, there's a bunch of actual concepts that I had to explain. And it's funny that, um,
[05:37:55]  uh, where is it, is it this one? One of the responses I thought was really clever here. It's amazing how combining Ryan with, with GPD lets
[05:38:07]  you have a personal tutor, walk you through his knowledge. Cause apparently my explanation that I tried to be very brief and to the point on without using too much technical jargon
[05:38:17]  was, you know, still had a lot of baked in concepts. So there, I love this. They're just like, okay, what do, what do I
[05:38:23]  mean by runs? What do I need by purity? And the answers here are actually dead on. Like in the context of react components, pure or purish usually means the
[05:38:31]  component function doesn't have any side effects. Are you modifying global variables or making API calls and that its output is fully determined by its props and state? Like this is
[05:38:39] , this is pretty good stuff. Um, it was just interesting to me cause it, it actually high highlighted that there's so much, you know, preset knowledge here.
[05:38:50]  Like you have to understand that this runs multiple times and that effect runs on the first run, but not the second run. And like, like there's a lot of actual
[05:39:01]  interesting stuff that we learned to parse and use cause of similar familiarity versus like what might make sense for someone just coming into it. I, it, I, I,
[05:39:13]  I enjoyed this thread to be fair. I probably only ended up responding cause I was like that NPM outage that happened. Like I talked about this earlier, like published
[05:39:23]  a package and then I'm like trying to publish solid and it won't install. Um, and it turns out other people posted on Twitter, you know, I went to
[05:39:29]  sleep eventually, but like it was out for a good, like five hours. Um, but it's good. I think these conversations are really illustrative to people on
[05:39:40]  teaching, um, matters and, and the timing for this was good because I, I, it sounds like, ah, but they're looking at the legacy docs. That
[05:39:50]  was the only problem. If, if they had used the new docs, I think this would have been okay. Okay. So then they went to the beta docs.
[05:39:56]  Okay. Fair enough. So anyway, I think, I think this is a good kind of look at understanding of like these assumptions we make as frameworks and framework authors.
[05:40:07]  Um, so yeah. Yeah. Okay. So, I mean, I, I think, I think that's it. I got, I got some sushi to eat come
[05:40:17]  here if there's any left for me. Um, but, uh, this week in react or this week in JavaScript was a lot of react news, um, with
[05:40:28]  the, or, and stuff around the docs. And I, I think that's exciting. I, I think it's going to raise the floor, um, in terms
[05:40:36]  of like getting started on the web, uh, in, well, with react and the, like, this just makes it better for, for everyone. Um, I
[05:40:45] 'm, I'm, I'm really looking forward to seeing how, um, other docs efforts continue to improve. I think this is an area that like everyone's been working
[05:40:56]  on a whole ton. I know we have, we have a new doc site. They'll be coming out in the next couple months, I think. Uh, and I
[05:41:02] , it just makes such a huge difference, um, in terms of being able to like use these apps, um, it's, we're, we're, we
[05:41:11] 're in a different world. Uh, the maturity of frameworks and the tooling is in a very different place than like 10 years ago. 10 years ago, it was like,
[05:41:21]  oh, view the source, figure it out yourself, you know? And now we're like, like, let's give people the tools to be able to succeed.
[05:41:36]  Um, how much wasabi? Um, yeah, I don't know, a certain amount, not like a ton, not like nose burning level, but I, I
[05:41:44]  definitely like my wasabi. All right. Well, good stream. You all have a great weekend. I hope that I can cover 1.7 next week. See how
[05:41:54]  things go. Um, but yeah, if not, um, till next time. All right. All right