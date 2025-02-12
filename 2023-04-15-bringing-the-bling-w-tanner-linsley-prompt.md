---
showLink: "https://www.youtube.com/watch?v=nY7k3ql5mss"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Bringing the Bling w/ Tanner Linsley"
description: ""
publishDate: "2023-04-15"
coverImage: "https://i.ytimg.com/vi/nY7k3ql5mss/sddefault.jpg?v=64382ae2"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one sentence description of the transcript and a one paragraph summary.
  - The one sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include timestamps for when these chapters begin.
  - Chapters should be roughly 7-10 minutes long.
  - Write a two-paragraph description for each chapter (75+ words).
  - Ensure chapters cover the entire content (note the last timestamp, 04:35:11, or 4 hours and 35 minutes).
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

[00:00:00]  all right how's everyone doing today sorry for the delay um just uh i don't know i'm running a little slow this morning had a bit of migraine actually i
[00:00:16] 'm like on advil and tylenol so see how that all goes how's everyone doing today got a bunch of people already coming in through the chat i guess people are
[00:00:25]  excited to hear what we're talking about today either that or the it's got to be that thumbnail right i gotta give david some major cred on that one yeah this
[00:00:37]  this wasn't just this wasn't me the last two were were were me playing around but this one i actually got some help all right yeah a lot of talk yeah so that
[00:00:51]  there you go it's it's science right all right of course um i would have had nikil join us today even potentially um but and i haven't talked to him
[00:01:05]  about that but the truth is we got a better plan nikil's going to come on and be the guest of stream next week um and we're going to talk about some
[00:01:15]  of this stuff but he's been working on something really cool himself he has created um possibly uh i mean it's not the first daishi did it but a beat
[00:01:28]  based react server components solution with routing with mutations it's like very advanced uh react server um component setup built on beat so he's gonna come and talk about that next week all
[00:01:42]  right just catching up we all would chat for those who don't know i always do this at the beginning we just kind of kill the pre-rolls a bit because i
[00:01:51] 'm not twitch savvy enough to actually deal with the pre-rolls and this way instead of having like you know wait for stream kind of stuff you can just hear me
[00:02:00]  ramble about nothing so you know but yeah it's also an opportunity to come and say hi for people to join on the stream we should probably advertise that we are live let
[00:02:10] 's see here yeah like no one every most people on youtube we need more twitch people coming in all right yeah the thumbnail lured me yeah this is all about the thumbnail
[00:02:23]  right yeah hey uh yeah no it is exciting stuff okay so let's let let me just let the twitter verses know that we are live and that we are streaming and give
[00:02:40]  me a second let's see see if my screen share works uh present share screen sorry this is this is me being completely behind like eight ball of it today i like if
[00:03:04]  you could tell from my hair i was i like was laying down right before the stream all right uh where are we all right here we are we are live let's drop
[00:03:19]  the twitch link we need more people on twitch tv slash brian solid all right about to be like the wrong link it happens to me all the time all right here we
[00:03:36]  are shall we get started here in a moment yeah i don't know if i don't know if that's what's in store for us today all right good it's great
[00:03:57]  to see everybody yeah all right all right all right have have i killed enough pre-roll time you guys all got patches the the 30 second or minute ads they're doing
[00:04:08]  on twitch i don't know it seems like they get the ads get longer and longer uh yeah anyway okay well let me see here let's i'm pretty stoked for our guest
[00:04:25]  today um um he's been on my stream before um but it was it was kind of impromptu because we had something to announce and we didn't really give
[00:04:37]  him like the full um proper introduction like we tend to do here proper conversation we just kind of just you know just kind of pulled pull them in for a secret surprise announcement didn
[00:04:50] 't even advertise it so this time we get to spend a little time with it so i'm actually really stoked about it i think you all know him and his amazing contributions
[00:05:00]  to open source tanner lindsley is um over the years uh so let's uh let's welcome tanner lindsley onto the stream hey tanner
[00:05:12]  how's it going what's up i actually didn't have any of this like 10 seconds ago yeah that's not how you were when we were doing that be funny and
[00:05:25]  i'm like what what do i have sitting around me oh yeah we won't we won't do that we won't be back to the stream though where where where are
[00:05:34]  you calling in from today i'm in my office at the nozzle hq nice yeah salt lake city utah nice nice nice yeah yeah there we go chat's loving it
[00:05:50]  um yeah anyways uh uh let's let's let's ask the generic questions let's get started because i didn't get a chance to do this before and i i like
[00:06:00]  to do so when i have a guest like yourself on the show to you know we're going to talk obviously you know talk shop talk about what we've been working on what
[00:06:09]  we think about thoughts of the future kind of go through a whole bunch of topics but where it starts with is a bit more about you and i know i i asked you
[00:06:15]  to introduce yourself last time but we're gonna we're gonna do a little bit more this time i i just you know go for it tanner introduce yourself yeah so i i
[00:06:26]  got into software back in uh high school html css had like just come out it was a big deal and then i kind of didn't do any software for a
[00:06:41]  while it was just for a class i got into audio engineering and uh video production and editing and went to school for both of those for a few years and then when i
[00:06:50]  realized i wasn't going to make any money uh and that i was already paying my bills by building websites with wordpress i was like oh i should probably become like a website
[00:07:01]  person or something like that so i start i went full time uh building wordpress sites for um this one company and that was a lot of fun that eventually evolved into kind of
[00:07:12]  like a vp of tech kind of a role um and so i got way too deep into php and hated my life and then uh when was that about just just
[00:07:24]  for timeline that was like 2012 2011 2012 um so angular was hot right around that time it came out when i was in school still and and everybody's talking about it and
[00:07:41]  i was like where can i learn where can i learn angular are we gonna learn angular you know and and they're like no you're not gonna learn any of this stuff in
[00:07:48]  school and i was like well i need to learn it where can i go so i started going to meetups um i went to a meetup at our adobe the big
[00:07:54]  adobe campus here in utah and um they were talking about angular so i started getting into angular because i wanted to build ios apps like i was raised in the
[00:08:04]  generation where like iphone came out when i was young and i wanted everybody wanted to build an app and that was like part of my dream and i was like oh javas
[00:08:14] cript is way easier than objective c so let's just piggyback on angular and ion i can build an app and i did i built i built a pretty cool app um
[00:08:25]  it did offline mapping and navigation for uh off-roading here in utah in moab it's a it's a location called moab and it's just like a
[00:08:35]  bunch of petrified sand dunes and likes like uh you know rock formations and you drive yeah jeeps all over yeah funny funny enough i think i'm going there
[00:08:46]  this summer our family trip like after i do all the conferences is going to utah to a number of places so well you'll have to tell me when you're in the
[00:08:54]  area um yeah so i i did that for a while uh it was a lot of fun it was kind of a fun thing um but eventually that that took me into like front
[00:09:05] -end development i started going to more meetups and that's actually where i met my co-founders here for nozzle um and i also met kent uh going
[00:09:13]  to that same meetup in fact i met kent on the day that he gave his first talk ever at this meetup um which was really interesting so uh do you remember
[00:09:26]  what the the topic was i can't remember what the topic was yeah it was good as you would expect with kent it was well presented um i just remember that he
[00:09:35]  had a heckler in the audience really it was like no that's not right or whatever you know and all of us were like how many people were in the room it's
[00:09:46]  like 10 people this is a big meetup they're like 40 people there okay and kent even though he was like fresh up on the stage and he was like uh no
[00:09:55]  no i'm right that's that's the right it's right he was very confident and i was like sweet this guy's cool so yeah i remember that and then um
[00:10:07]  we formed nozzle like eight or nine years ago and uh and i i didn't finish school i have like partially three different degrees basically um audio engineering software and uh like video
[00:10:26]  basically film um and then yeah so we started nozzle and then during nozzle is just kind of when everything started to take off so really got into open source because i needed help um
[00:10:40]  started building my own open source libraries because i wanted to dabble in that had to learn react because we were digest cycling all over angular yeah yeah yeah i'm just trying
[00:10:53]  to think of the time period here because nine years ago puts us 2014 15 right around i mean react came on 2013 but like no one liked react in 2013 so we're we
[00:11:03] 're talking about this is when react starting to pick up steam a little bit and you're sitting there with angular js and you're sitting there with the newcomer react what
[00:11:13]  what was that like so i remember the first meetup where i saw it somebody somebody was presenting they had a calendar app and they're like we wrote it in angular and it
[00:11:25]  just it couldn't keep up you know like it was this calendar scheduling kind of a ui and they're like then we we wrote just this one piece in react like
[00:11:34]  it was all angular but then they wrote just one piece in react and it was really fast and i was like oh man my life is turned upside down because i at the time
[00:11:43]  i was definitely an angular person like a lot of people were i think yeah and not a like a javascript or even just software person you know yeah that's interesting
[00:11:58]  yeah because like when you saw angular and you saw its conventions did it feel originally natural to you like from the pre any previous stuff you're looking at or you were just like
[00:12:09]  this is what front end is i guess and i'm gonna i had done so much jquery before that okay so it was like it was the first taste of like real
[00:12:21]  magic that i had felt right in like the my front end career which is still very young but it was very magical like that the two-way data binding man i mean
[00:12:32]  i know in hindsight it's kind of like yuck but it is it was such an amazing sales and marketing pitch it demoed so well yeah yeah because everyone was like used
[00:12:45]  to like manually finding the elements and then like updating them and all the stuff and it was like no all the code disappears no boilerplate yeah i'm actually working on an
[00:12:56]  article around two-way binding i just haven't got around to releasing it um it's it's definitely an interesting topic okay so we're done talking about angular we're talking
[00:13:05]  about react now so yeah so you're like okay we have to use react we were sitting in our in our tech accelerator so we went through a tech accelerator what year did
[00:13:17]  we go through that year in 2016. so we've made it pretty far okay with uh angular and 2016 we're sitting on our tech accelerator it was a kansas city sprint
[00:13:30]  accelerator through tech stars okay yeah it's 2016 angular 2 was like right on the like right about to come up with that that's when angular 2 came out they had announced
[00:13:42]  it i mean yeah it feels like it took years and years and years right yes but it was in like that phase where like angular 2 was out or being teased or something
[00:13:51]  but people were getting impatient including me yeah and and then like i would i was already sold on react by that point we really just kind of said we need to rewrite now so
[00:14:05]  that we can not be held back by this framework so i brought out one of my friends who's i don't even know if he does software anymore he kind of just
[00:14:15]  got burnt out on software overall jason mauer we flew him out and he helped me rewrite nozzle from angular to react in like two or three weeks okay just to help people
[00:14:27]  out here because we talked about nozzle mentioning nozzle again what what is it just for so for like in layman's terms it's it's like an seo analytics platform
[00:14:40]  and we're specifically talking about it's all like mix panel no we're specifically talking about rankings from search engine results okay okay so it's not just it's not like user
[00:14:54]  flow things it's okay search results so so your basic flow is you'd come in an seo team comes in to nozzle and they have a big list of keywords and
[00:15:04]  phrases that they care about ranking high for in google they put in their keywords and we begin to track them at various schedules um and when we say track them we we go out
[00:15:16]  we make the search and we scrape all the html off of that google search result and we we log it we catalog it into like big query and then we gather
[00:15:30]  up a ton of this data and then we have to process it into a huge column store database so that we can query it out and and feed that data back to people
[00:15:41]  so it's it's a search engine result data as a service essentially very cool yeah david who also created our amazing thumbnail today says that he uses nozzle um keywords rankings
[00:15:55]  aggregates into a dashboard to support optimizing seo yeah very cool sweet okay okay so angular digest cycle not doing it for you huge re-rendered dirty checking cycles not good
[00:16:13]  and you got help rewrote in react and it was pretty sweet yeah it was absolutely amazing it was it was a lot faster right nice and it just i mean there
[00:16:24] 's something to be said about maybe it was faster be not just because it was architected to be like faster as a library but also the it changed the your intention like the
[00:16:38]  way that you wrote your code it made you more intentional about data flow and and performance you know instead of just throwing it onto dollar sign scope and just hoping that everything works out
[00:16:52]  so yeah yeah sorry if theo just joined the chat yeah and and for parasocial things like i do remember when react was the fastest option but it was like a magnitude
[00:17:03]  faster in some cases and that's why it was like really groundbreaking well especially because there weren't patterns like even there's a lot of things that were like there's the
[00:17:14]  diffing as an approach was not something that was common others outside this dirty checking so like when you hit a scenario where you could diff instead of like some naive kind of like
[00:17:26]  replacement type stuff we were used to at the time it was it was amazingly faster i remember i remember seeing that uh dbmon example ryan florence did with like
[00:17:35]  he had angular and ember and react and angular actually kept up for quite some time and then he went and he's like removed the throttle and just went he's like
[00:17:44]  spam this as fast as you could and like nothing there could keep track of react of course that example he was sending all the data for the page as fast as possible and diff
[00:17:53] ing the whole page it's hard to beat a diffing engine in a scenario like that right totally yeah it's it's it was it was crazy to like open up
[00:18:06]  the angular dev tools and see um like just how much work it was actually doing in a digest right because going from that where there's like this like it really was just like
[00:18:19]  this washing machine of side effects that was just going and going and going and going until uh it just kind of resolved compared to you know hey we're just going to re-
[00:18:30] render your app top to bottom once yeah one time you know and as long as you didn't have like a lot of like crazy side effects and that gets worse uh with
[00:18:38]  the history of react but yeah like that's how that's how it was and it was really fresh right so you you got the stuff in nozzle got your startup you're got
[00:18:50]  a new react app things look good how how did open source come to the picture from that point like because obviously like it's not like react query started as angular query um
[00:19:03]  no so so i in the beginning like i so let's see my very first open source project was ng try toggle it was the green ios toggle button but you can have
[00:19:18]  three states right left right or off it was super dumb but people loved it a few people loved it um after that i dabbled in a couple of others that we
[00:19:29]  didn't end up using some like touring ui stuff that would kind of like highlight in lightbox certain things in your app and take you on a tour um i actually still
[00:19:39]  own the organization for that tour js if anybody wants it was that stuff at all associated with nozzle and your work you're doing it yeah some of it was like i think it
[00:19:48]  was like nz try toggle okay um and then uh but after that we didn't really have a whole lot of libraries until um until react table came along um and what
[00:20:04]  happened there was we moved over to react and we brought over we didn't we didn't need to bring over a whole lot of things because most of the tools we were
[00:20:13]  using were just kind of like agnostic because it's funny i feel like before react got really popular most tools were agnostic right and it's part of and the
[00:20:23]  difficulty was like making them work in any framework right yeah yeah yeah it makes sense because obviously the history with jquery when it was the biggest and also i think um
[00:20:34]  the component mod model and like componentizing and saying like this is the unit basically is a very like you have to play with the framework the other ways were a little more open
[00:20:46]  to the outside um that's an interesting observation and something that actually applies to server components we might get to that a little later but yeah uh continue there was there was a lot
[00:20:55]  of like okay here's a here's a div element and then we're just kind of kind of like render it and then wire on something that you know has nothing to
[00:21:04]  do with it react right and that's kind of how it was migrating and worked out really well one of the first libraries though that really gave us a problem was we were
[00:21:12]  doing a lot of data tables and i was using a library called ng grid okay and i honestly can't remember now if ng grid was no it wasn't ag grid ng grid
[00:21:25]  was like an angular grid right and there was no equivalent in react or like or like an agnostic solution um i found it so we're talking 2016 and we react
[00:21:38]  ecosystem wasn't quite where the angular ecosystem was there that's another reason why i kind of got into open source because like it's almost like the react ecosystem was fresh and there
[00:21:49]  was a lot of like there was a lot of new new space to explore for like like really first class react libraries because everybody wanted them you know react up to the game
[00:22:01]  on like component system and component designing across the board and i think people kind of started to expect that same quality out of everything that they used so it's like even though in
[00:22:15]  hindsight it's like oh yeah everything should have stayed kind of agnostic when we just have these adapters there was something really nice in the early days about just saying
[00:22:24]  it's a react library you install it and you use it and you're done you know right yeah no that makes sense and when you have specific solutions they often play nicer like
[00:22:34]  together because you you don't have to worry about some other scenarios and you can kind of streamline it i i can i can see the benefit there it's just well you will
[00:22:43]  know specifically first hand why a lot of things needed to kind of be react things is because before react what was reactivity it was you know click handlers and input hand
[00:22:58] lers doing spaghetti code stuff right then you know you have other libraries before that knockout number right but and but reactivity was kind of like what is it as a watch
[00:23:08] er observable kind of a thing you know so reactivity was still a new concept and angular was a really strange reactivity model yeah um and then and and people i feel
[00:23:22]  like people were kind of searching for something a little more concrete and that's why react where it was fully immutable yeah reactivity model it kind of it was a little
[00:23:32]  bit maybe overkill for for people moving away from angular but it was really safe feeling you're like oh everything is very you know everything's immutable and everything is pure and
[00:23:42]  and i can reason about this right people were coming from angular where they was just like i can't reason about any of this right so beyond that what i'm saying is that
[00:23:52]  react from the the beginning i feel like there's been this ecosystem and community of immutability kind of like internally inside of the react ecosystem where it it wasn't this
[00:24:07]  strict when it came out but over the years react has really leaned into immutability yeah i mean they didn't need to initially it was really easy seller like because i i
[00:24:19]  angular cell i guess over say knockout or ember was you didn't need special data the model was so weird because they did everything possible to make it that you were
[00:24:28]  literally using plain objects like no one wanted special data like it was just like oh this is easier react will let you also not use special data but didn't have all the weird
[00:24:38] ness around like zone js and like all the all the updates stuff so and it was very manual you were like it was like do we should we update this component or not
[00:24:49]  and you had to like get into that life cycle and write very specific logic of comparing previous things to next things you know it's kind of crazy though how in the early react
[00:25:01]  days that like don't worry about it like just re-render it like it didn't even really focus on the immutability that much it was just like it was just
[00:25:09]  so empowering from the fact that like you were just like i don't care and like i kind of feel like react might have been able to just continue on that road for
[00:25:17]  a long time and people might have been pretty happy with it it's almost like at a certain point they made everyone aware of like they themselves pointed the like shun the light
[00:25:27]  on where um their performance issues were in a sense which is good it means that they were like hey we need to improve and sometimes by improving you actually indicate where the you
[00:25:36]  know the shortcomings of the approaches yeah and i think that was around like should component update and hooks like that that there was the transition between hey should component update can kind of
[00:25:49]  be a mess to work with sometimes and maybe a lot of people weren't even using should component update yeah you know and then they're like oh yeah and like well now
[00:25:58]  you just have a hook right you know and and now immutability is is kind of this first class citizen of the change detection yeah yeah yeah yeah it's interesting hooks put
[00:26:10]  it literally everywhere and it's so interesting to me because i mean you know my perspective i never react blindsided me a couple times and hooks was was was one of them because
[00:26:22]  like personally i was like i'm fine with my data being special you know i i i'm good on reactivity reacts never going to do that they just want everything to
[00:26:31]  be plain objects hooks is such a funny um middle ground in that they they can still go yeah they're just plain objects but like when you look at the way that it actually
[00:26:41]  works and all the rules and stuff like the the plainness of it is not really a characteristic event anymore i mean you look at hooks you look at a reactive system you're
[00:26:51]  like anyway and that's that's as you said immutability and structural cloning suddenly were important because at every single one of those it reruns based on an equality
[00:27:02]  check and i i really i was really excited about hooks we're really going through a history lesson here but like hooks were so important to me and they were great because of the
[00:27:12]  composability aspect of them because that was very much needed render props were getting way out of hand um there were render props for everything and so when hooks came along like wow
[00:27:24]  they really solved the render problem composability problem but they put closures and memoization and and like the the change detection you know reactivity system of react right in front of
[00:27:36]  you and it was kind of like where you said they improved on one thing and it really like um really brought out the bad and the in another it's funny because until
[00:27:45]  hooks came out the way to solve any problem in react was like make another component because like it's like you're like okay how can i do something here okay we just need
[00:27:54]  more components and then it was like more components make more components make more components yeah um and hooks are like okay no maybe we can like keep the components back in a place that
[00:28:03] 's like closer to logical like it's interesting components serve two purposes there's like the mental mindset of like this is an encapsulatable piece of code that you know has
[00:28:14]  a specific purpose and there's a mechanical piece for react's change system and it doubles on that hooks let them kind of back off the mechanical thing a little bit and give people
[00:28:26]  you know you know different type of composition uh pattern where they could they could like kind of i guess not make everything into a billion little components if they wanted to control execution
[00:28:40]  like i'm talking from an optimistic uh optimizer standpoint most people probably weren't using react the way to like get the most optimal performance uh in 2016 17 i was because i
[00:28:48]  was in benchmarks but i don't think that was where most people's heads were at they were just like re-render everything go yeah and you know and i'm i'm
[00:28:57]  still almost very much in that camp of just kind of like i just want to re-render everything all the time and most of the time i'm just gonna plan on
[00:29:05]  things re-rendering it all the time as fast as possible and if i have bottlenecks and i'll approach them um i still think that's the best ways to approach
[00:29:14]  react anyway right so you're using your class components doing your thing uh it was react query pretty much it was a post hooks thing wasn't it well yeah so i was actually
[00:29:25]  working on a version of react query a little bit before hooks came out i was working on react table version 7 and then hooks came out and within three days i completely re
[00:29:38] -architected react tables version 7 to use hooks instead of uh render prop yeah so you're super stoked yeah in fact i have a talk from react amsterdam a year
[00:29:49]  or two ago that talked about react table you can go listen to that because i talked about that experience um but right after that uh i kind of went back to i had
[00:29:58]  this code where like i was using redux at the time and i had abstracted away all of the life cycle for data fetching using redux into some components like render
[00:30:13]  prop components and it was still using redux at the time and i wanted to move it off of redux and into something custom but then i got into react table hooks
[00:30:23]  came out when i came back i was like this is a great place for hooks to be um and that's when i was like okay we're gonna rip out actually the first
[00:30:34]  version was still using redux it was just abstracted away as an implementation detail right and then yeah that's when i used hooks to get the kind of the first use
[00:30:44]  query that we had in nozzle so we used we used react query internally code named react query internally for a few months and it was it was built on redux interesting it's
[00:30:56]  funny so yeah so yeah like every other react app at that point you were using redux to to your state management oh man that must have been really interesting for your problem space
[00:31:05]  so i'm just like picturing because like redux is very like centralized structured cloning these are the actions everything's off a central store everything runs it just seems very
[00:31:17]  different mindset of what i'm thinking of of like data tables where there's like a billion data points but anyways then you're like okay it was like it had its own store
[00:31:26]  and its own actions and context and everything with it but i like i isolated all that away from the from where you use it so you had no idea it was just a provider
[00:31:37]  and some hooks and some hooks and the hooks had selectors in them at the time but they don't need any more because we went to the key based system right right
[00:31:44]  the query key system but in the beginning they were they were like selectors right gotcha and then okay eventually i just said okay this all this redux stuff is just overhead
[00:31:55]  i'm just going to create this in-memory map you know of of string to whatever hash to all the state and i can do my own state machine stuff like
[00:32:08]  x state was super hot around then and i had been talking to david karsheed a ton and i was like i don't need redux to do my own
[00:32:15]  state machine stuff so i built my own state machine logic into this query system and then it was just ended up just being hooks and i got you know a couple right eight
[00:32:27]  machines right so okay okay that makes sense so you had yeah i mean redux is like a very simple state machine type thing and you just kind of built your own internally and
[00:32:36]  dropped redux because you didn't need a lot of the other stuff and i guess it's funny because redux ended up having rtk query um eventually like their own
[00:32:43]  query client based on so it's funny but you react query actually started in that zone um okay okay i'm following i'm following that so then you were able to kind
[00:32:53]  of drop the extra dependency because i mean here's the thing i mean redux did have the benefit of having really cool dev tools at the time too like so i i guess
[00:33:01]  like what was the major motivator was it just like the size and having to depend on something else um for dropping redux at that point just curious yeah and and just
[00:33:12]  like the mechanisms for getting into redux internals were just kind of clunky i felt like it's it's almost like an immutable versus mutable discussion where with redu
[00:33:22] x you you had to use you had to use the reducers and the actions and all that and while they kind of kept things relatively safe like i was confident that i could
[00:33:32]  write a state machine you know in vanilla javascript that was just going to be extremely tailored to the use case of keeping track of this data makes sense and some things
[00:33:43]  i needed to mutate and some things i didn't and i based it all on immutability still because it worked well for the react ecosystem so and then obviously dev tools
[00:33:51]  were a big thing and i was like oh am i going to lose dev tools you know and then that was i didn't launch with them but honestly it was like a week
[00:34:00]  or two after react query kind of started to take off i was like oh by the way here's a dev tools package that i just built using react and it's just
[00:34:09]  a component you render and feed your your your query client to you know and it ended up being better that way too because the react or the redux dev tools are really good
[00:34:21]  but they're very generalized the the react query dev tools are very specific to querying for data and toggling the states of the state machine and and sorting and filtering and
[00:34:33]  seeing stale and cash time you know stay yeah so it ended up being not too difficult to ship dev tools that were technically better use case for for what we needed makes sense
[00:34:47]  okay yeah so then immediately and that's the thing you're working you're working on at nozzle so you you had like incentive to build these tools because these are like the
[00:34:56]  there be these things are being used inside so you're like okay i need developer tools i'll build them and it all kind of you know went along with that okay that makes
[00:35:05]  that makes a lot of sense so you basically we've got nozzle we have react react hooks in fact having been a big piece this 2018 you decided to just go all in
[00:35:19]  on hooks almost immediately and that led to creating um you were gonna you were working on data fetching patterns for redux anyways and then you're like okay it became its own
[00:35:28]  thing and suddenly react query was born and i it caught on pretty quick hey like i because my memory of react query was like 2019 like it was like it was pretty yeah it
[00:35:40]  was like i had already had react table and react table was like a slow burn and it's still it was like it's a really healthy project but it was it was
[00:35:48]  a much slower like react query scared the crap out of me almost like like i i published it and i was like hey this is really cool and i'm using it check it
[00:35:57]  out and obviously i did some sales and marketing behind it because i thought it was amazing like i wasn't totally surprised i was just overwhelmed by how fast everything happened and then i
[00:36:07]  went i did a talk about it during um or let's see so i did a talk in js conf hawaii about hooks and i mentioned react query in that talk
[00:36:19]  and people really started asking me about it then and then i did a talk about react query itself during the pandemic in 2020 on uh at react summit where i just introed
[00:36:31]  react query and that's really where like 2020 beginning of 2020 or whenever that happened i can't remember when it was it really kind of just took off um yeah yeah yeah no
[00:36:43]  yeah well and that's the thing i remember i remember um seeing it too um because as for those who don't know solid uh resource api was actually inspired by react
[00:36:55]  query um to a certain degree and if you look at it we created like solid resource api came out in 2019 so it was it was actually i guess still fairly new
[00:37:04]  like it was within the first year we looked at it and we're like it had already gone big enough that it was the awareness react query went outside the react ecosystem like that
[00:37:13]  this was a pattern this was a thing which is really really quite cool from my perspective um because yeah i looked at it and i was like huh the keys are a little bit
[00:37:22]  like uh um uh are a a little bit like how should like how should i put it like um uh they're like we need reactive props anyways so like that separation the
[00:37:35]  keys and the fetcher was actually really really convenient from my perspective and i kind of leaned right into it um but somebody mentioned swr too which is interesting because i didn't
[00:37:45]  even know that swr existed and and they didn't know that react query existed and then when we were like kind of sharing the internals around a little bit we coll
[00:37:56] ided a little bit and i can't remember who i talked to if it i can't remember who it was at versell um light at the time but like we were like
[00:38:07]  oh hey you built that too like i just built that we're gonna launch and we launched like within the same week and so we're like clearly the pattern was right yeah i
[00:38:16]  mean it's so funny because like these things happen all the time because you see like the developments in the ecosystem and this evolution everyone's kind of like at at the same time
[00:38:26]  the funniest one for me is to this date i can't get over the fact that the original javascript um frameworks like all came out within like a couple months of each
[00:38:38]  other especially within a week backbone and okay i'm getting echo through your audio now how's that i'm just trying to get rid of this pop pop that there's a
[00:38:51]  pop sound too so yeah okay so now it's not popping and yeah that's better there you go say something more actually you know what i can do is i'll just put
[00:39:01]  my airpods in and like pray to the airpod gods that this works um because that might help yeah because then then we can get some some nice stuff there um
[00:39:12]  but yeah what i was saying is like if you look back backbone came out like a week apart from angular i think angular was first angular js and back when we were a week
[00:39:22]  apart and knockout came out about uh like two months before them like but it was like within that range all through all three javascript frameworks which are arguably the first
[00:39:31]  declarative javascript frameworks there was like prototype and mootools and and like jquery and stuff but the first like template based like kind of like we're all
[00:39:41]  in declarative style all came out within a month or two of each other and you have to imagine those things took more than like uh well maybe back then it only took a
[00:39:49]  couple weeks to put one of those together but like there's some effort you know and to have them all just show up at exactly the same time it's pretty crazy um
[00:39:59]  yeah it's it's really weird sometimes how things like coincide you know without without any planning at all yeah and i think the yeah it's funny the the rpc
[00:40:10]  server function thing which we'll get to a bit later also is an example of this sort of um thing where we're seeing you know just because the needs it just comes very
[00:40:19]  common understanding at the same time that we need to solve these problems and then you find multiple people working on those problems um yeah okay yeah i totally feel that so swr
[00:40:31]  react query we're we're there which is sweet and now we're in a situation where it's picked up nozzles using it uh you have a number of other libraries
[00:40:43]  too right because you got like what's the other one um react virtual like you got any other ones started showing up around this time period right yeah virtual is pretty fresh um i
[00:40:52]  had a handful of others like i had react form for a little bit i still use it internally because it's a technical debt um but i don't advertise it anymore because
[00:41:02]  it's not that great uh react virtual is probably the newest one react ranger is out there and one of my one of my contributors robert kalinski is working to bring
[00:41:12]  that to like a tan stack ranger so it's a really small library but it's a lot of fun right right that's cool oh i before i forget uh i
[00:41:20]  want to thank uh julian ng subscribed at tier one and also the tony subscribed at prime uh thanks both for static yeah i forgot about that one oh there you go yeah
[00:41:34]  so yeah a bunch of these ones and you just prefix them all with react um any thought of the naming funny enough about the react static thing is i spoke about react static
[00:41:44]  at jam step conf in like 2019 i think something like that and uh but react static was a static site generator but and i thought of it oh it's just a static site
[00:41:54]  generator it was a framework like it really was a full-fledged framework and at the time i was competing with next and gatsby right yeah and between us
[00:42:07]  here like when i was working hardcore on react static i was slaying build times against gatsby and next right like before before they even came out like i was doing multi
[00:42:21]  like multi-threaded builds right you know with like distributed builds with react static and it was so cool and it was a progressively enhancing so like it would just statically
[00:42:32]  output the json and the html you needed for the page and then you'd hydrate up from there right it became an app so i was really excited about
[00:42:40]  that that's another talk you go back and watch if you want out of the archives but like the problem there that was like my first that was my first experience with like sustainable
[00:42:50]  open source conundrums where i wanted to put so much time into it but we didn't need that for nozzle right yes and and also like versell they were
[00:43:01]  just like i mean you think for cells dumping like yeah they're dumping way more money into it now but even in the early days the fact that they put full-time employees
[00:43:11]  at all on this open source project that was next i was like i'm competing with a giant and gatsby just raised 30 million dollars you know and i'm just
[00:43:21]  me right yeah yeah i decided pretty soon after that to throw in the towel and like build something that i actually needed which is where table and and query came in so right right
[00:43:34]  it's interesting though because yeah nozzle had no use for like server-side pre-rendering or anything this was just like no i'm actually really interested about this react static
[00:43:42]  thing because actually we used it so we were using hugo to build to do our static site for our marketing site hugo hugo's fast yeah and we didn't
[00:43:50]  need it to be fast but it just was fast and we were a go team so we thought it was cool and then uh i so i built this because i was like i
[00:43:57]  don't want to write go templates i'm not going to do it i want to use react i want it to be cool so that's why i built react static was because
[00:44:04]  we were a three-man team at the time and i was the one who had to do the marketing site so i wanted to have i wanted to have fun while i
[00:44:10]  did it yeah that that makes sense to something like because i i i work with zach from eleventy and that like his whole goal and was to make hugo usable by
[00:44:20]  a javascript developer that was like that's like the whole goal of that project initially um super fast rendering but okay so you had use you just did it and then you
[00:44:30] 're like oh i'm not gonna like actually take this far enough it's interesting though like it's it's definitely become more uh um it's definitely become this people are
[00:44:42]  more aware of these kind of build time performances now than they were back then like it's funny now that we compete on that like we have like beat versus turbo pack and all
[00:44:52]  this stuff and that's obviously not static gen necessarily timings but like this is becoming an area where no one really cared that much about the performance um at a certain point
[00:45:04]  uh that completely changed though yeah and you know it's weird that like some people saw that smell really early and they're like we need to kind of do this serverless c
[00:45:14] dn hybrid thing that's kind of like next pivoted to that that was really smart gatsby just kept leaning harder and harder into static builds and trying to like cloud
[00:45:27]  ci out the static build process which i think was just a really bad bet um and then there's people that just went full serverless or a full like like long running
[00:45:37]  server right like we see a lot of like that's kind of more like where like remix just was like you know when i'm gonna do static stuff you know um so yeah
[00:45:45]  it's become like less and less of a problem uh but yeah in the moment like it was a microcosm of of weird performance benchmarking at the time because it
[00:45:54]  was kind of just like all we knew you know and and we were like little kids playing in the front end sandbox uh just like well my castle's bigger than yours you know
[00:46:03]  um when in reality like there's people on the back end like server side that are just like laughing their heads off yeah you guys are what are you guys doing you know so
[00:46:13]  but it was fun in the in the in the moments like it was really cool to explore like how far can we take static side generation how fast can we do it you
[00:46:20]  know yeah no that that makes a lot of sense okay so getting back around to like react query and stuff because i'm thinking about this a little bit like it's funny because
[00:46:31]  react query kind of went on to be like obviously people use it for data fetching did did you realize like when you built it that like people would use it for like
[00:46:40]  basically promise into state like like basically just as a converter for basically anything promise based in react um absolutely okay i totally planned like there's a reason where i was like okay where
[00:46:54]  where does the abstraction level sit and i was like anything that's a promise literally anything even if the promise resolves immediately that's where i'm going to draw the line
[00:47:06]  and i i mean i knew that it would be used for a lot of things i won't say that i wasn't surprised at some things one of my favorite examples that go
[00:47:15]  to go down in react query history is when theo is like guess what i use react query to access all of the async device apis when when they were doing like ping
[00:47:25]  and stuff like that yeah because the async like the async platform apis are stuck to use and they always have been terrible to use like i even go back to
[00:47:35]  when i use like ionic and capacitor and you know everything's promise based you know in reality you just wanted to treat these things as if they were kind of like synchronous so
[00:47:45]  theo was like hey this is what i do and by the way react query is the ultimate asynchronous to synchronous converter yeah and i was like wow that like that's exactly how
[00:47:55]  i wanted it to be used but i was happily surprised at like how how that came out you know i'm i'm yeah i was interested because yeah i am referring to theo
[00:48:05] 's comments about this and it was very important obviously when i was designing the resources for solid start because i was designing a primitive like i'm not just query like it's funny
[00:48:13]  the reason i mentioned is because react query very much lends to query you know data fetching kind of mentality and just the naming which is why why i asked on it
[00:48:21]  but like when i was creating resources for solid i was like i need this period i need ace any promise to signal right like that's essentially the thing and that's why react
[00:48:32]  query was such a good uh api kind of benchmark for me to look at and see like how that should look at look like right um but uh so i was very curious
[00:48:41]  if it was like always like that okay so okay that's that that's good to know so you kind of always had that kind of use case in your head um i
[00:48:50]  mean we're kind of catching up to the present aren't we right um yeah we're getting pretty close right because like now we've kind of established a bunch of open source
[00:49:02]  libraries and nozzle we're getting into like 2020 um and the pandemic and kind of time period where like there's some questions people are asking about trpc like you know
[00:49:13]  because you know obviously again theo's push the t rpc the last year and a bit i guess year and a half um right has definitely um you know been a big
[00:49:24]  push on on you know another use case where react query is super commonly used but react query was kind of already pretty big on its own right before all of us yeah i
[00:49:35]  mean trpc is like one of like i imagined eventually that react query would get packaged up somehow and when we when we took it agnostic and made it really
[00:49:49]  easy to just integrate into anything you wanted um when trpc did that i was kind of like finally you know like finally somebody figured out that you can just wrap this up
[00:49:59]  and that was around the same time that there were just lots of graphql generator clients coming out that were using it um and even still today there's some coming out
[00:50:09]  that that do that like like buff buff uh connect and buff.io they just barely came out with one that does like connect grpc react query essentially um it's pretty
[00:50:21]  sweet so oh you had to change your npm namespace so you didn't you basically the blue line and the red line should be added on top of each other yeah which
[00:50:29]  is funny that like so the blue line is when we change the namespace and it's funny to see the blue line like already catch up to swr i as far
[00:50:39]  as like vanity metrics go that makes me smile yeah yeah yeah it's yeah i was just trying to figure out like okay what but yes trpc is had amazing growth over
[00:50:50]  a short period of time yeah in terms of like when you get a generic library that works with like every react project like like the the numbers are in a whole different different
[00:51:02]  range let me let me yeah let me scroll out here in a in a thing let's let's watch the whole five year rise yeah do you want to talk about fast growth
[00:51:12]  over a short period of time i mean look at this blue line here um but yeah you can see the red line kind of this is what happens with packages a lot i actually
[00:51:21]  like looking at this because you can see that a lot of people just keep on using packages forever and ever and ever it's not even completely dropping off it's actually going up
[00:51:29]  slightly on the older package name um obviously the new package has caught on but like if you look at this curve if you if you just superimpose this on top of
[00:51:37]  this it's like a it's an exponential curve up up up here uh so to speak uh yeah it it was really it was really exciting to watch it happen to be honest
[00:51:48]  um and i mean it's where like i got most of my twitter followers from react queries growth you know and it was it was kind of just one of those uh like
[00:52:01]  right tool at the right time with the right pitch and marketing and everything so um i mean i definitely didn't plan it to go as well as it did but i prepared
[00:52:11]  as hard as i could for it you know yeah yeah there is always a christmas drop but react query a small react library could have more downloads than small frameworks easily people don
[00:52:22] 't like if if you're looking for like downloads or usage thing the most insignificantly small but useful little piece of a library that works in react will get 10x the
[00:52:33]  downloads of making your own framework right right right from the first like few months you know like uh like yeah i mean i mean yeah like yeah it's not even comparable well
[00:52:48]  and i just to kind of wrap up the thoughts on react query like i just saw it was one of those moments where like i just saw so many people including myself frustrated using
[00:53:01]  a tool using general purpose tools like redux and state management to do something that really wasn't like a a general purpose thing but something that everybody wanted to do at the
[00:53:14]  time and needed to do and needed to just forget about the the implementation details and have it work so it was and and it wasn't just a productivity boost like for developers like
[00:53:25]  a dx thing but like it was also one of those packages where you could install it and start using it and your users would immediately feel the benefits of it like immediately right
[00:53:37]  i i i got i mean this came out after stuff like graphql and like apollo and whatnot right like so you'd already kind of seen this move where people were
[00:53:48]  basically dropping redux for their data fetcher anyways did any of that kind of play into you building out react query or your perspective there like it was kind of around the
[00:53:59]  same time but it's also yeah a little bit before it was around the same time that like graphql was hot but there was also a lot of like fud going
[00:54:08]  around about graphql like maybe being overkill which i still believe that for many use cases it is um and people just wanted something simpler and there was also i i
[00:54:21]  kind of prayed on it a little bit but i mean it's okay like apollo was aging and most people who used graphql at the time used apollo and there
[00:54:33]  was this weird conflation of experience where people were like i love graphql and you didn't really know if they were talking about graphql or the apollo
[00:54:43]  client that was right consume it and funny enough like i feel like most like a good fair amount of the popularity at least through the javascript ecosystem for graphql came
[00:54:54]  through apollo um it was a very beloved project uh and i think people really conflated the two right that you know you can have this really great client that has nothing
[00:55:06]  to do with graphql or everything one of the you know yeah because one of the most standout things from when i first saw react query was you justifying why a
[00:55:14]  document-based query was you didn't need a normalized cache like the docs are very clear on what the features were you had one of those great comparison tables where you like showed
[00:55:23]  what swr react query like all the different ones had and then you were like you were somewhere i'd written explaining why normalized cache wasn't um necessary and that was like
[00:55:35]  kind of a big departure from graphql where everyone was like really trying to get the perfect normalized cache set up and you were just like we don't need it yeah you
[00:55:45]  know and because a lot of times with with caching the best strategy for caching is just to invalidate everything sometimes and just do it again you know yeah and that
[00:55:58] 's very much react queries approach like even optimistic updates uh can be scary sometimes for people using react query and that's why like the very first like honestly you could probably just set
[00:56:10]  it so that after every single mutation it just invalidates the entire cache it doesn't get rid of it but it just invalidates it and you'd probably end up with exactly
[00:56:20]  the same experience that you have now and unless you had some really weird constraint around like well i can't i can't hit my api that much you know right i
[00:56:29]  mean no one likes writing cache logic and i i i i talked about this on one of my previous streams where i talked about the evolution of uh state management and data fetching
[00:56:38]  um and it was kind of react query was like fourth stage on it because it was like the first like in a sense apollo from a client perspective we'll talk about client
[00:56:47]  versus server first perspective a little minute it was like one of the first places where we're kind of like saying no it's okay not to be the most optimal here you
[00:56:57]  know in terms of caching because like yeah just invalidate it like and so it got very common because like it's such a pain to write to caches and the problem
[00:57:08]  is if you use a normalized cache you have to almost definitely write back to caches sure you can do this on one trip then you make sure you send the data you
[00:57:15]  get the the mutation you get the data back and then you write to cache and what react query showed is that people didn't even want to bother writing to cache like you you
[00:57:23]  have that option but they didn't even want even want to bother writing to cache when it came back it was just kind of like nah fetch or sorry do the mutation come back
[00:57:32]  and validate fetch it was like a double hit it's like a waterfall but no one cares waterfall it's a waterfall and validation but like i don't know about you guys
[00:57:42]  but like our apis are pretty dang fast for nozzle by the time that i could stick that in there and invalidate and come back with the new data so so actually it
[00:57:51]  was really fast but let me tell you what we ended up doing is we set up web sockets at nozzle so that anytime that i save something i get i get a web
[00:57:59]  socket event coming back from from the database that says this was updated even if it was for somebody else on your team or workspace like you just get a stream of events that
[00:58:10]  pertain to you and they all have keys and ids that map up to the react query cache so they're they're really like the minute that i save something or anybody
[00:58:20]  else save something in database i get a message back that says these things were invalidated and i can go refetch them and the nice thing about that is that i you
[00:58:29]  know if if the entire cache gets invalidated i don't have to go refetch it immediately you know i'm only fetching what i need but i'm hearing about everything
[00:58:40]  that should be invalidated um yeah and that to me was like an aha moment that you don't care about writing to the cache at all you just care about reading and
[00:58:52]  you want to make sure that it's always up to date as and like as fast as possible and right as fast as possible is different for for people right a waterfall mutation invalid
[00:59:03] ation 99 of the time still going to be fast enough if you need web sockets then you can get really really fast with how you update stuff yeah and here's the thing
[00:59:13]  i think you got a little bit more of an allowance there that people got to think about from like a pure like ux point it's that mutations generally happen in two
[00:59:22]  ways in the foreground or the background right and if it's in the background we don't really care like how long it takes you there'll be some like do you want to
[00:59:28]  refresh the data or it'll do it in this kind of like non-aggressive way too if it's in the foreground the user just committed that action and they're
[00:59:36]  waiting for it like they are aware of doing that and sometimes optimistic can move foreground to background to be fair but i'm saying like you have a little bit more leeway
[00:59:46]  on a mutation a waterfall during data fetching is almost unforgivable from a like a load perspective because you can like see the data coming in you don't want it to
[00:59:53]  be slower but from a mutation standpoint the end user has like performed the action they know conceptually at least this is my theory that like something some work is being done so like
[01:00:03]  you're you're given like a little bit more leeway for that affordance um so it but it was an interesting observation for me too because when i saw that i was
[01:00:14]  like huh like this is uh this is like you know from an optimization standpoint a bit of a departure and the funniest thing is that that pattern of departure has continued on into
[01:00:26]  modern data fetching again even further remix in a sense of just like it takes that same like throw it away kind of you know just like refresh mentality right and then um
[01:00:40]  even and the work with server components is actually with their mutation api coming up is also in the same category um in a sense you can kind of go like it's it
[01:00:51] 's like a scale it's like if you were going to reload the whole page in an mpa like that's like the most aggressive version of just blowing it away yeah
[01:00:59]  you step back from it right if if you step back just a little bit like people's thresholds for that might be a lot more you know open to it than we thought
[01:01:11]  um it depends on what you're doing obviously but i think that's why the amount of simplicity that has brought to be fair rscs have a different scenario because and
[01:01:21]  mpas because you can you don't there's no waterfall you return the new page on the on the response right but it's just kind of interesting that there's a bit
[01:01:30]  of that mentality and for in my opinion react query is actually what started the ball rolling on that whole thing like it's responsible in a sense for that it was the first
[01:01:41]  thing to do that um from we were going hyper optimized in one direction and react query was like you know the first thing to say like hey we don't need to be as
[01:01:50]  optimal we can do kind of good enough and it doesn't matter and i always look for stuff like this because react was another example of something like that where it was like hey
[01:01:58]  maybe we like there's obviously like the crazy angular but on the other side there's this reactivity stuff and people were like you know the data is a little complicated react
[01:02:06]  was an example of like taking a step backwards like getting worse performance in certain cases but being like it's probably good enough um in a practical sense so what's interesting to me
[01:02:17]  about that is it will always catch up to you yeah but it's it's it's a good hedge to make for um short to midterm um you know and sometimes the
[01:02:27]  problem is the shift has to happen because otherwise you like if you're like if you go too far down a hyper optimization path you find yourself in the local maxima where
[01:02:36]  you can't like see out of the woods because you've already like assumed too much yeah anyway yeah okay so sorry we went deep on react query deeper than i thought but i
[01:02:46]  i knew react query is very interesting to me because to me it's very fundamental of the core of the shift in how people start thinking about data fetching um as i said
[01:02:57]  like it's a huge inspiration for everything that came before we've learned stuff from graphql but react query actually i think has a bigger influence on like what would come
[01:03:06]  later um in certain uh mutation patterns especially in modern um javascript frameworks it pretty much the mutation pattern pretty much started with react query from from where i'm sitting but
[01:03:19]  let's let's let's let's now that we've kind of caught up um we're not completely modern but we've caught up to the last couple years um i think
[01:03:28]  i think we can move on from this and kind of talk a bit more about uh um just like where you're at now and i want to talk about the router a
[01:03:42]  bunch as well but i like i i'm trying to think of how they introduce this topic because we're in this interesting place because you tanner are very much an app
[01:03:52]  builder you've been building what we consider you know apps essentially at nozzle your tooling was all built around apps um and what's interestingly has happened is this loosening up i told
[01:04:06]  you on this optimization around data fetching and actions has has kind of come with it people have gone even looser like you did it at a query key level so you
[01:04:16]  could still have kind of fine-grained control over your data but people are just like okay let's just nuke it all all the time kind of getting back to it
[01:04:23]  like a multi-page app kind of mentality and this is very very trendy now and there's this kind of hope i guess and i'm one of those people in that camp
[01:04:33]  of having this hope of like being able to uh somehow do that yet let us write sites and apps by themselves um but i remember you came on stage at jam snap conf
[01:04:47]  and like right at the like at the same point you're just like who here who here is building an app i just can you talk can you talk a bit about your perspective
[01:04:56]  on this i think i said who's building an spa right specifically and like half of the audience raised their hand right and i was like that's more than i thought originally well
[01:05:06]  i mean the question is what do you consider an spa client rendered spa or like a server like i call next js an spa like right what's the app directory i guess
[01:05:14]  i think even more of the spirit of an spa right yeah there's there's the technical there's the technical characteristics of an spa which after first navigation everything should be an spa
[01:05:27]  right uh but there there's like the there's a whole who's building a fully client side rendered application i guess is the there's a there's a there's a
[01:05:38]  lot of people building a client side of applications it's funny create react app might have just been you know axed a little bit as an official recommendation but i mean it's
[01:05:48]  it is an interesting world because like for the longest time people started and like a single page app was the starting point um it's funny because well i mean there's a
[01:06:00]  lot of benefits from that too like it's not necessarily like simple versus hard like there's differences here it's just like what's really cool about a single page app is you
[01:06:08]  can build an app you can literally not be aware of client or server and literally build it as if it like just runs on the device like you like there's an api
[01:06:17]  level of understanding that you know you have to hit end points or something for the server side but like your starting thing before you even get there and you're just like building
[01:06:25]  an app is you just write your code and there's no knowledge of server or client it you just build something interactive you click on it you can make that sudoku solver
[01:06:33]  or tic-tac-toe game or whatever i mean that's why i started i made like little silly games um in javascript and it that's this
[01:06:41]  solution you can like literally run that code in a browser you could put the code in a notepad if you can load the javascript from a cdn like
[01:06:49]  and you just literally open it in your browser and it is an app that runs um it's very interesting to see that like we're kind of going to a place where
[01:07:02]  people are like no the default starts on the server um like i don't know do you have any thoughts yeah i i feel like you know when react and angular and everything got
[01:07:13]  when spas got really big like the default was that they started on the client because that's kind of where they had to start because javascript on the server was
[01:07:22]  really really weird for an unknown concept when everything was really young you know so it started where it had to start and you know it's i think it's really too easy for
[01:07:35]  people to discount how many very successful businesses and products and tools have been built over the last 10 years just simply because front-end developers were just a little bit more empowered
[01:07:50]  to just kind of do it themselves and and build without the restrictions of a full stack environment for better or worse like and these are these are the applications that are still around today
[01:08:02]  where i'm like hey who maintains or builds a you know an app i mean you know yeah i don't believe that a lot of those apps are new or greenfield
[01:08:09]  i believe that a lot of those apps are ones that have been kicking around for years making companies lots of money uh or they have made decisions about how they want things to be
[01:08:20]  and they're like no we don't need to lift and shift our entire stack over to grab some ssr capability right right so i i believe that like it wasn
[01:08:30] 't a bad decision to go full front end spa everything it's just that's just what we could do at the time i also think that it coincided very interestingly with the
[01:08:40]  backend moving towards microservices and distribution and this worked really quite well because if you're trying to kill the monoliths like which they were really desperately trying to kill the mon
[01:08:50] oliths the it was it was very like the back end people all wanted everything to be apis at that point they were like okay we can use like proto buffs or
[01:08:58]  whatever grpc or whatever to communicate between all our like backend services and create this web of an infrastructure microservices and then the client could just stitch this all together from
[01:09:09]  all the different locations right you know it could be all stateless it could all be infinitely scalable and like this was kind of like the mentality uh kind of coming all through that
[01:09:21]  time period it's like it's no surprise to me that these kind of coincided at the same time you know like it was just such an incredible alignment between like what
[01:09:30]  both sides were working on unintentionally like it was really big to kill the monolith everybody wanted to kill the monolith they do they really did so like it kind of worked
[01:09:41]  it's funny because we're getting new monoliths now but the new monoliths that we're getting to now are more of like everyone realizes like there's benefits
[01:09:51]  to co-location or to like authoring that way but it's never like the greatest thing for scale or performance so like we're working ever harder on trying to come
[01:10:00]  up with abstractions that are monolithic and you know yeah co-located and like all together and and granular right so it's like it's such a funny contrast
[01:10:15]  um but we're back again at the monoliths with serverless functions and all and you know yeah it's kind of you know these modern app frameworks but okay so i
[01:10:26]  mean this seems all fine you you were clearly had a side on it like i mean you probably have like a content site or something you build with astro or something i
[01:10:35]  imagine but it really came down to two things right seo and edge performance bandwidth performance right and if you care about those two things you're not building an spa you know you
[01:10:50] 're building like some kind of multi-page app spa combo or you're just building a multi-page or you're just using wordpress or i don't know like
[01:10:58]  if you care about those things honestly like even i'm even i don't really want to ever build a blog again or anything in react right now if i'm going to have
[01:11:06]  like my marketing guys are sitting in the wall like across the room behind me and they are jumping for joy that we just decided to move back to wordpress you know right and
[01:11:16]  and our marketing site is going to be way better because of it um and then like on the nozzle app side it's like seo means absolutely nothing for our application right
[01:11:29]  never it never will um and the whole like you know managing like bandwidth and and performance at the edge for nozzle it like that kind of goes out the window the first second you
[01:11:42]  load up the app because we have big bundle sizes we have lots of tools lots of data viz charting libraries you know it's just the performance the performance goals and
[01:11:55]  metrics are just completely different we think about performance in a completely different way than than we do about our marketing site for the application you know and and to me over the years that
[01:12:06] 's those have been the two things that i always think about mike what what is your goal do you have is seo a major goal and the the edge bandwidth performance goal
[01:12:17]  right yeah and that's usually the the easiest fork for me it's like okay right and and i think i saw some some comments in here from from maple leaf and and i
[01:12:28]  maple has a really good perspective um coming from like like using remix a lot yeah um and i'm i'm in the same boat that i don't want my i don't
[01:12:37]  want tools to be so focused on both kind of like what maple said here um like there shouldn't be like app tools and like mpa tools like kind of this this
[01:12:48]  distinction but unfortunately with this big heavy swing that we're seeing away from spa client rendered stuff almost like we're kind of shunning and i think it's evil and we
[01:13:00]  want to get away from it now um in a way we are now creating tools that don't really cater that well to both sides still uh or or at least you have to
[01:13:11]  incur the costs of one to have the other if you know what i mean like if i want to if i want to have an app uh that that behaves very much like an
[01:13:22]  app you're either turning off all of the the great things from a framework that's mpa focused right um or vice versa so i just i don't want i don
[01:13:33] 't like to see i don't want to see tools get segmented like that um but but the way the patterns that you use and the way you think about and architect your
[01:13:43]  app once you're inside of the tool those are very different paths i believe it's interesting because when you were bringing up your reasoning a moment ago tenor about like the
[01:13:54]  split it sounded like it was mostly not an authoring consideration but like a ux like the like the output consideration like you're talking about oh page loads and this kind of
[01:14:04]  stuff um although just now when you're replying to maple you're saying like you actually there's probably a bit on like how the authoring is tailored for the experience too
[01:14:12]  when you're building a certain type of site you might actually care about how you uh you know like you you your perspective on like what the way you approach what you're
[01:14:22]  building might be different enough that different tools could satisfy that slightly better and and i'll be honest like mo for the most part tools have been really great about that like i as
[01:14:33]  next has shifted back towards the server a lot they haven't really sacrificed a whole lot of things on the app side and and remix has still always had the ability to just
[01:14:44]  go full spa you know after the fact and just have everything be client rendered like those are good escape hatches and and for the most part i've been very happy with all
[01:14:52]  of that it's mostly about everything that happens below the pelt after that and uh um but then everything everything that's above the framework though that's a concerning part for me
[01:15:04]  because like the framework is what it abstracts everything above routing essentially and that's why the only place that i've been unhappy with the shift from spa back to mpa
[01:15:17]  has been with routing right oh just like hey jen uh jen just rated um so we've got some more people here talking with tanner about apps and sites and
[01:15:33]  we're we just had a great history lesson um about uh how he got to where he is today and now we're kind of picking it up and talking about where we're
[01:15:43]  going towards in the future um yes yeah yeah yeah so yeah apps versus sites has been very long kind of as old as well i mean i guess since we we've had
[01:15:57]  the split actually since like the beginning even when you think of like the way like um like what was it i'm trying to remember what the technology was it used to like have
[01:16:07]  uh servlets um in java and and then like websites so we've been we've been you know teetering this line forever um but where i was going with
[01:16:17]  this and the reason i want to probe so much on this app versus site thing is i want to understand now how you know with this knowledge and stuff like how did you end
[01:16:28]  up going like yeah i need to build a router like um so much of this is in that gems.com talk i just gave yeah so that talk is amazing if we
[01:16:42]  really want to dive into that we can just kind of yeah we can outsource to that um i guess i do know the answer technically speaking but i mean you had an incredible
[01:16:54]  need around the the both the query string part because you were like managing large table database places where the state needs to be represented in the url because you know you could
[01:17:06]  refresh a page send a link do do all this stuff and it's super challenging to manage all this difference because the thing is path based urls and like hopefully i'm getting
[01:17:16]  this right in here you know that's like a directory it's a nesting you can understand that you're like entering into a path whereas the query string is like state that
[01:17:26]  like doesn't have that hierarchy it's like it's a global state and it's potentially global but it's also hierarchical depending on what what layer like what route like
[01:17:38]  you got to think about it in a way that if you have four nested routes they're all sharing the same state layer which is the query string so it is hierarchical
[01:17:53]  implicitly but explicitly it's stored flat right and suddenly now you're in a situation where you're setting up anchors and you're setting up like all the state management
[01:18:04]  using this and it's like how do you keep this all in your head it's like a less like the params are much more straightforward like here's the api id
[01:18:13]  here id here now you have all this stuff and suddenly you're like people getting stuff wrong misnaming stuff was probably like painful and like managing it all so you were
[01:18:24]  like i need to have all of this defined somewhere i need to have my completions typescript like i like to build an app where you have so much state that has to
[01:18:35]  be represented in the url it's it'd be almost folly to try and do anything else it really is crazy in that talk that i give i i show some of
[01:18:43]  the urls that we have and they're insane we have we have like some dashboards that are that have maybe most of our dashboards have anywhere between like three and
[01:18:54]  seven to eight widgets on them and each one of these widgets has you know data tables or visualizations that are each individually uh query like sending off uh api requests to
[01:19:06]  our back end that's doing like big query uh stuff so you can see where like react query fits into that and where each one of those widgets needs to store the state that
[01:19:17] 's going to determine you know the the group by and with the columns it's fetching and the sorting and the pagination and any other parameters that you know you let the
[01:19:27]  user tweak um all of that needs to be stored somewhere and if and if you have anything like that you know and you're just storing it in ephemeral state that
[01:19:36] 'd be like going to amazon clicking on all the little categories changing your page and your you know sort by best deal and and then you reload the page and it's all gone
[01:19:45]  like yeah that would be the equivalent and if you look at if you look at applications that have our sites that have sites applications we really need to make that distinction right um
[01:19:57]  if you look at if you look at projects that have that kind of navigation like do you really think that they're just randomly shoving a string into the url using you
[01:20:10]  know react routers params hook or do you think they're do you think they're managing that string manually when they're writing the url in in their ah ref
[01:20:23]  through next you know it's hard to imagine the complexity of that working through um some of the primitives that we've gotten used to with routing in the ecosystem and that's
[01:20:36]  where that's where i landed and i was like you know what this experience really does suck like i had to write not a lot of people know this but i wrote a
[01:20:48]  version of react location that was a massive wrapper around react router v6 beta right i proxied every export i proxied every component every hook i replaced them all with
[01:21:01]  my own and had a bunch of this logic that i was injecting in between me and react router v6 until eventually i couldn't proxy anymore i needed more power needed
[01:21:12]  more control and now and there was no way i could go upstream with it right many for many different reasons that i don't yeah yeah i and and i actually did try and
[01:21:24]  go upstream with it i i talked with i talked with michael jackson a little bit about it um and nothing came from that conversation and that's fine their priorities were
[01:21:34]  not there they didn't care about this problem right right they were getting ready for remix and they're you know they they don't they don't care about the this advanced use
[01:21:42]  case i talked with kent and he's like i can see what you're talking about but that's just not our priority right now and i'm like all right that's
[01:21:49]  fine and that's why i was just like i'm gonna write my own router then so i built react location um that wasn't type safe but had a lot of this stuff
[01:21:57]  in it and then i was like went through my typescript renaissance you know and and i was like okay typescript types with routers is also a really terrible
[01:22:09]  terrible experience so that's kind of where 10 that router came in yeah i shared the link in um hang on for just a second i need to talk to my wife okay yeah
[01:22:20]  so i did share the link for for any of you who want to check it out um but yeah i the the router is amazing when you see it it's because like
[01:22:31]  generally speaking most routers you you basically need a way of connecting the data back to the route essentially um and so you will use like hooks to do that and what's really
[01:22:44]  clever about tan stack router is you actually import all the hooks and stuff from the instance that you create which means the link is already there and then the types are can be
[01:22:54]  inferred instead of being told which is just mind-boggling the first time you see it everyone should watch that video but the reason i'm getting here is because yeah
[01:23:03]  i we we could talk about this stuff for a while i'm trying to fast forward a little bit is you you start you start building re uh react our tan stack router
[01:23:12]  um and you know when you built location we're using do you use location at nozzle actually right now it uses react location so we're using a lot of these new things but
[01:23:21]  it's it's not using 10 stack router yet um i honestly was about to pull the trigger three weeks ago and move over and then we started talking about all this server
[01:23:30]  component stuff and i was like i've been gonna hold off yeah just to make sure yeah speak to that just like a tiny bit as essentially um you start uh 10 stack router
[01:23:43]  at like all the other 10 stack libraries you're like well if i'm going to solve this once i want to solve it for everything right like that there is that kind of
[01:23:51]  mentality and we and we worked um a bunch together trying to figure out like you were thinking like if we can solve this for both a react and a reactive library like solid
[01:24:01]  we got the whole spectrum so like like we we can do anything and it turned out that was actually kind of tricky um you know systems that are based on uh deep mutation i
[01:24:14]  guess is a way that uh and i don't mean that in a bad way like like reactivity generally speaking where it's about fine-grained notification is very different
[01:24:23]  than a data structure is based on structural cloning so like they're at odds with each other yeah they really are like one is one is top down immutability and everything
[01:24:33]  and the other one is like leaf node up uh you know not even leaf node up it's just leaf node observation like they are completely opposite so we tried that and it didn
[01:24:45] 't get to where we wanted to exactly and we're and we're like okay well let's let's let's see if we can just regroup and take the learning
[01:24:53] s there because like as you said you didn't start uh tan stack router initially like like you would have used react router if it made sense or like you know you could so
[01:25:03]  we were like okay as with any open source library i don't want to have to create new maintenance burdens for myself nobody does exactly so this this this is all good we're
[01:25:13]  like okay maybe routing is the one thing that is hard to make agnostic but you still kind of have this problem now because part of the routing is tied to the
[01:25:23]  framework but it's it's are tied to like the render library like react versus solid versus felt we all have like our own view we all have our own change models all this
[01:25:31]  kind of stuff yeah but then it's it's worse than that isn't it because in a lot of ways the way these solutions have been getting presented the last several years is
[01:25:42]  it's it's not react router i mean it is react router in the case react router but it's more like there's next router or nuxt router which is different
[01:25:50]  than view router and svelte kit you know svelte didn't have an official router than they made svelte kit it was actually the meta framework that introduced the
[01:25:57]  router and it became like a cornerstone of of it and it kind of raises this question because i always say that i talk about the importance of routing as being like the
[01:26:06]  paradigm like if you want to talk about the generations of the web you can just look at the history of uh breakthroughs in routing um you know like mpa to original client
[01:26:16]  only spa rendering to server rendering uh spas which again that needed push date like you can see that the thing and we're kind of at this point where it's like a
[01:26:26]  new uh routing technique potentially we're in this zone where like is the router the meta framework and like because the thing is like you got hand stack uh router and you go
[01:26:38]  like okay i'm gonna use that and then it's like well now i don't get to use next i don't get to use remix i don't get to use g
[01:26:45] atsby i don't get to right like so what do you do it just this makes me so frustrated to talk about because i i don't think i i think it
[01:26:58] 's it needs to be said that like if if react router or next had taken types seriously and had just given me a little bit more power or better api around search parameters
[01:27:18]  the last two years of work on react like on 10 stack router would never have happened or react location any of it like but that's the painful part about it and and
[01:27:30]  i definitely tried to make that happen um but you can't you these these are fundamental features and fundamental questions about a router and they would they would require rewrites they would
[01:27:45]  require very deep considerations about the api so it's painful to be here especially i guess the really painful thing to consider is that it's like a bunch of routers
[01:27:59]  did just go through rewrites anyway and they didn't they didn't actually go through this like in a sense um react router 6 was a rewrite um in a sense and
[01:28:10]  what happened between v5 and v6 i can't even remember well they went back to an older pattern essentially they changed the way the matching works like basically v5 was
[01:28:20]  like the react router 4 and 5 had kind of gone to a point where they really consolidated on the patterns they had been working on and react router 6 was like a return
[01:28:29]  to react router 1 it reminds me of ember like the the they had a more considered a way of doing nested routing where you could like declare it all up front and
[01:28:38]  then this way you can do that there's a lot of the outlet stuff it's one of the biggest changes right right it's it's so funny because like when solid started
[01:28:45]  up we had two routers we had mine which was based on ember and then we had someone else's who was based on react uh ryan turnquest was based on
[01:28:54]  react router 5. and when we saw react router 6 merged them together me and him went and merged our efforts together too because we were like oh we can put them together
[01:29:03]  um but somebody mentioned waterfalls being solved and that and i do remember that now right because ember yeah a type approach and data hoisting and loaders like these patterns
[01:29:14]  were back around 2012 and what i've always used with solid um and sapper used them and nuxt use them in fact react ecosystem was like the only ecosystem that didn't
[01:29:24]  care about client side waterfalls um that much for some reason i i'm gathering it was just again like who cares you know like that kind of man that's kind of
[01:29:32]  like the motto of react for a long time it's like it's good enough so like at a certain point it was like like obviously the people writing the router like ryan
[01:29:41]  and michael are like they know this and they're like they're kind of like they did it for dx but they're like look there's a way you can do it
[01:29:46]  performantly but no one's doing it we gotta like hold their hands a little bit and actually show them how to actually where they should fetch the data and when to fetch
[01:29:53]  the data and do all that kind of stuff these were really good enhancements like these were necessary a a return to like these patterns i'm remembering more now and i'm really
[01:30:01]  glad that this all happened and it it's just it really is a tragedy that like they went through this massive rewrite and you guys merged efforts and next has been through how
[01:30:13]  many you know really big changes with their router that like during all of this all you had to do was stick your head out the window of the car and you just hear people
[01:30:24]  yelling typescript at you like but it seemed like it just wasn't a priority so they didn't do typescript the biggest thing is i think these frameworks have a lot of
[01:30:35]  file system generation and if they could do that they're like okay well we can just file generate the type somehow you know we've seen apollo i i know but like
[01:30:43]  think about it i told you all the routers are coming in through the meta framework so not coming in it's not like react or svelte router it's like you
[01:30:52]  know it's like uh right the meta framework is the router now right yeah and it's because to be a meta framework you have to have control and the the most control
[01:31:03]  a meta framework want will ever have and most of what people are willing to you know hand over to a meta framework starts and ends at the router at the router separation right so
[01:31:14]  it makes a lot of sense uh yeah yeah so yes i wanted i wanted all this stuff with my router let's full circle here i i wanted these things i need these things
[01:31:27]  i can't keep scaling my application in without losing my mind without having type safe search parameters and type safe routing and and just and having all the apis that are going
[01:31:41]  to make me be able to do this right uh by the way i'm now a one-man team on the front end at nozzle oh that seems like a lot i don
[01:31:52] 't have a bunch of junior devs that i can say hey go find all the broken links hey go make sure all the states working correctly like uh like i'm outs
[01:31:59] ourcing to typescript here i'm outsourcing to my libraries to make sure that this stuff works really well um and so i can't give that up and like like somebody said
[01:32:10]  in here it's like well if i go okay so if i start using cansec router does that mean you know do i get do i have to forego all of the
[01:32:17]  ssr stuff do i do i not get server do i not get any of that and it's like well no you should be able to have that stuff too just
[01:32:25]  because i'm building a client-side application mostly right doesn't mean that i don't want the ability to call out in a server rpc and do some stuff on
[01:32:35]  the on the server and it doesn't mean that if i wanted to have ssr and server render a page that i that i don't want that ability it's
[01:32:45]  just that i don't want to sacrifice the wonderful things that routers should have just so i can have just so i can have an ssr rendered application that's what
[01:32:57]  it comes down to i'm not willing to sacrifice the the dx the safety the apis the the authoring experience of wonderful tools just so i can jump on board with
[01:33:11]  you know with a with a big monolithic framework just so that i can have server rendered stuff when that's not going to move the needle for me you know yeah yeah
[01:33:22]  it's it's it's very interesting um dilemma now because it's like as you mentioned you could have use for the dx of some of these kind of modern things that are
[01:33:34]  coming in but like there there's like a client versus server mentality right like like it's something that i started kind of observing um with this shift and we're going to kind
[01:33:43]  of get now into like react server components a little bit oh by the way anybody asking if they can apply at nozzle just go convince your marketing team to use nozzle and then
[01:33:54]  i will have the budget to hire you amazing how that works it's really pragmatic it's pragmatic invitation like it's just business yeah so um but yeah like what what i
[01:34:16] 'm getting to is you mentioned that you weren't like you're ready to pull the trigger like we went from like crazy agnostic router to like okay i just need a
[01:34:25]  better react router and you know we we can kind of go from there and then it's like now like things are in turmoil turmoil because of the changes in routing again and
[01:34:39]  um you know like react server components are kind of changing the the equation a little bit right because like it it's interesting right as you mentioned you have you you don't want
[01:34:51]  to sacrifice that client perspective but can we can we just briefly like explain what we mean by client like the client perspective versus the server yeah like uh i think there there's
[01:35:05]  there's there's the idea of have building a server first application and progressively enhancing into you know the client and then there's and then there's the concept of building client side
[01:35:18]  first and then you know opting into the server side things as you need them it's it's more of a spectrum of you know where's a bulk of your logic happening
[01:35:30]  is it happening on the server because you don't need a lot of client side interaction or is it happening on the client because it's very app like you know but you
[01:35:38]  still need to call into the server for things so that's kind of the spectrum i'm talking about right okay yeah i mean they kind of highlight this we me and tenor
[01:35:49]  have talked about this before and i've talked about on stream is like for a long time we had these kind of client centric even with ssr next js is
[01:35:56]  an example this we have like get server side props and we get server side props you have that whole app that runs isomorphically the apps on the client the apps on the
[01:36:03]  server except for this one little piece that's server only right you're just like get server side props which means that hey when we navigate we're gonna call this always on the
[01:36:14]  server and it's the same idea with remix um with their loaders and uh svelte dot server files and all this stuff so we've had this pattern for a
[01:36:25]  while um like this and then react server components came in and they're like no no everything server and as a first basis and now you have to say these things around on the
[01:36:37]  client so it's like this kind of reversal but i i think the funniest thing about it is it's not just like a a pure flip because once you're on the
[01:36:47]  client again you have to denote the things that you want to run on the server again so there's like a there's like a there's like a server client server kind of
[01:36:57]  uh progression through the app um but it but there is definitely a change of defaults right like which is interesting yeah no i agree it's it's just a different way
[01:37:14]  of thinking that shouldn't shouldn't define you know the limitations of what's technically possible but it's just how you approach it right right so the reason the reason i'm bringing
[01:37:29]  this all uh about is because this gets us basically to toward to where the topic of bling and um what what we've been kind of talking about there i don't
[01:37:44]  know if there's any other preface for that no not really i think i think this is a good segue into why like why it's important and also a good explanation for
[01:37:56]  why like the tan stack router repo like made huge progress did talk about it i was about to launch it and i've paused for a minute i have commented here it's
[01:38:05]  like yes i went out of town for a little bit uh i went on vacation with my family i've paused taking a break for a little bit but also because um you know
[01:38:14]  rsc is a thing we talked about bling and the capabilities that bling would bring bling would bring to uh to like an spa centric mentality of building applications could
[01:38:31]  could really change the the patterns that we go with in tan stack router um right so i don't want to i don't want to rush the count right and and and
[01:38:41]  release something and then have to change it immediately after so really nailing down these bits of bling and rsc to make sure that it's a really good story with
[01:38:53]  tan stack router because we really are we i really am approaching the same way that the solid start is right because you're bringing together technologies that should mostly operate independently into a holistic
[01:39:06]  project and um you know you want to make sure that your router can integrate really well with all of your build system and uh you know rpc mitosis stuff that
[01:39:18] 's doing code extraction and also that you know now we have react server components to think about and the the patterns of react server components and islands and things so these are things that
[01:39:30]  i want to be possible with tan stack router that i will admit are not super like like react server components are not super important for me with what i'm working on right
[01:39:41]  now but i know they will be important for p other people using the router so i want to make sure that i treat them as my own problem right now right yeah and uh
[01:39:48]  and also but but the stuff with bling that does immediately pertain to me i want to use everything that bling is going to offer me right yeah it's interesting
[01:39:57]  we've been playing around with this a lot because the it's been difficult to decide where the boundaries are and where the patterns are one of people have been following my stream know
[01:40:06]  that i've been putting a lot of thought in how to generalize the routing solution so that you could put server components um and client components together i don't know if we
[01:40:14] 'll get there today but we'll see but bling um kind of before we even talk about the advent of bling like on the i've talked about this before on
[01:40:26]  the solid start side the server dollar sign came from the fact that from right from the earliest versions of solid start i knew that i wanted to do data fetching as um generally
[01:40:37]  as like uh some kind of how should i put it i knew that i wanted like i didn't really care that much about the i mean there's established patterns for the data
[01:40:49]  fetching side but for the mutation side i knew that i wanted to use rpcs rather than like just the the url tree like the file system tree for get
[01:40:58] ters is fine uh you know that kind of graph it reminded me of graphql in fact but mutations being rpc and having as many per route as you want and
[01:41:07]  all something was very very very important to me so right from the beginning i talked to brill out creator of uh telefunc and and he had this rpc thing
[01:41:17]  and like he he was trying to sell me on v plugin ssr in the time but he told me about telefunc and i was like this is what i'm
[01:41:23]  looking for something like this so i built something very simple using proxies called them actions built them as a solid start this is like march 2021 uh yeah so quite a long
[01:41:33]  it was over two years ago um i like all i'd done in solid start was make a cloudflare streaming demo at that point and then i added actions it kind
[01:41:40]  of sat for a while and i wasn't completely happy with them and nikil was like why don't we just compile it and that's when that's when we got to
[01:41:49]  the point where we're like okay compile it so to be fair if you want to like see what server functions look like you can watch any of my solid start streams or
[01:42:00]  any of uh uh you did a great stream with danju tan yesterday where you guys kind of like talked or showed off like like some of the more syntactual things i
[01:42:09]  mean i think if i open up server here you're gonna see it very similar but what he was saying is like the idea that nikil had was like if we you know
[01:42:19]  we were sitting there like what if you just wrap a function and if you look in the solid discord you can see this happening real time to do like a search for it
[01:42:26]  but what if we could just like wrap a function and then this function always ran on the server and this is really important for solid because salt has reactivity so it's kind
[01:42:34]  of like having a client-side cache where you like you want that granularity to only trigger the stuff when you need to you don't want to do re-renders
[01:42:43]  so it's almost like a baseline need for solid to be able to like go i want to trigger this function only when it changes blowing stuff away is never our game so
[01:42:54]  like it made a lot of sense like we had these resources which are basically like use query essentially yeah and and i was like okay i want just this use query to only run
[01:43:04]  on the server making like a data loader pattern like remix will not give me the our users the power and control we need like right and i want to be able to invalid
[01:43:14] ate just this one data fetch if a query one query parameter changes i can update only the things that need the fetch like and so for me this was the solution again it
[01:43:26] 's not route based it's like rpc based so we went and we added it um it's funny because it's that it was like almost a year later i think
[01:43:34]  it was like april or may 2022 when nakil made the first server function thing we didn't have this dollar sign we just had server functions and it was good it
[01:43:43]  helped us get to solid starts beta api and it was pretty sweet but right before we were about to release it we you well we we actually i've jumped ahead we we
[01:43:51]  use this pattern a couple places we also used it to define islands or server components in solid start we're like oh what if we just do island function and then say this you
[01:44:02]  know import this this import it's kind of like lazy like island import now it's a client component so we're using these kind of patterns and i was like it wasn
[01:44:11] 't they killed it some crazy stuff he even had something just going to mention this he had something where you could co-locate all your fetching in your components like down
[01:44:20]  the tree and it would it could it would hoist the data fetching out into the like the top level loading to parallelize it so like you could co-locate
[01:44:29]  the stuff inside the components and then the router would still be able to do all the pre-loading um all with the composite stuff and when i saw that demo i got
[01:44:39]  every thought leader has told me that that's impossible well it's imp the problem is conditional right you have to accept the fact that those loaders will always run right like
[01:44:50]  like even if the component doesn't get rendered on initial render right um but it also scared me when i saw that there's that consideration and what i saw scared me because i
[01:45:00]  couldn't tell what was happening a bit i was like looking in my files and trying to find all this and nakil really really like showing off the inlining stuff um
[01:45:10]  like we just had it everywhere and at that point i was like we can release this but people are going to get tripped up yeah it was probably a lot of magic
[01:45:18]  right i mean a different very special kind of magic right right so what i mean this is such a silly thing but i'm like how do we how do we decide how to
[01:45:29]  show people that this is getting compiled and i actually looked over at the quick framework and quick had these dollar signs and i was like is i mean for them that's enough apparently
[01:45:39]  like because in quick if you put a dollar sign that means that code's getting code split so wherever you put a dollar sign you have to be aware that there's a
[01:45:46]  serialization boundary and i'm like is that enough if people see the dollar sign will they understand this is special i mean quick's betting the whole framework on this are we okay
[01:45:54]  betting some data loading functions on this and that's we were just like okay yeah let's let's do it so we added the dollar sign to the end um and it was
[01:46:05]  at that point when i i met with the guys from quick i was in a conference in november and manu was like hey i saw i saw the server dollar sign
[01:46:17]  that's pretty cool we can basically do that in quick like already like we don't have this feature but we could do this pretty easily and i'm like i i know it
[01:46:26] 's it's okay it's like you get because quick is based off doing all this code extraction everything's a module you know like they code split everything based on those dollar signs
[01:46:37]  so they did end up releasing it this january um it's a little different because now we're going from client to server instead of server to client but like essentially again
[01:46:45]  we're talking about different people coming to very similar solutions um in a sense this kind of modular extraction as a macro it realized was a very powerful thing we're using it for
[01:46:55]  islands we're using for server functions um and we just started you know yeah hey yeah it's so much fun to go yeah nick what you're still up buddy oh man
[01:47:09]  he's in india so it's like 2 a.m no no it's like it's 12 hours and a half so yeah it's like 2 30 a.m
[01:47:18]  almost hey yeah he kills our our partner in crime as i said i'm gonna have him on next week uh that's the only reason why i didn't bring him in with
[01:47:28]  tanner so we can focus on the tanner tanner stuff today and initially i wasn't sure nikki would still be up by the time we got to bling
[01:47:33]  um but you can you can kind of see there's so much potential here on having these primitives and as me and tanner were working for the router i remember tanner
[01:47:43]  was like trying to different data loading patterns and i'm like man it's not your responsibility it's the framework like responsibility from a routing perspective like there might need to be some
[01:47:54]  data loading an acknowledgement to trigger routes and stuff but the actual like is this server all that kind of like those kind of mechanisms and i think it was kind of we were
[01:48:02]  in this weird place where we were kind of conflicted with like how everything was all start had a very similar goal to tanner and this is why we kind of aligned i
[01:48:13]  think is because we wanted to make a single page app only mode like a spa only client mode so every pattern had to work if there was no server in the background or
[01:48:22]  like no server rendering occurring so like we're like this this pattern could could it could actually work in this in this scenario um sorry i'm talking a lot here um no it
[01:48:34] 's great keep keep going this is well i mean we really arrived at the same the same conclusions right it's like um once again people making the assumption that ssr
[01:48:47]  just has to be there puts constraints on apis and sometimes you don't want to have to opt into those constraints to have the same capabilities right because like if you think about
[01:48:58]  like a client first app you could still use this and this is how we use in solid start like literally you could just write your app like it's isomorphic and
[01:49:04]  then you're just denoting this runs on the server right right you're not server rendering you just have it just you know it's an rpc into whatever server environment
[01:49:14]  you happen to be pointing it at right unfortunately with our spa mode i had the turn off server functions at the current point because of the way we do the the traversal uh
[01:49:24]  with client only code but yeah we just kept on finding more patterns with this like we have a client only we have an island we have a server and we're still kind of
[01:49:32]  discovering this but it was enough that tanner had the same goals and once we gave up on the universal router and realized that like it was going to be per framework we
[01:49:41]  realized that if we could take like like what solid done we take a router taking bling um you could basically have most of the pieces you need to build a framework you didn
[01:49:53] 't have like like tanner you didn't want to build another javascript framework you don't you don't need no like what what is the framework maybe we should
[01:50:01]  establish really quick we have bounced around a lot on what this definition is but from my perspective now i understand a framework or a meta framework as being the combination of three things it
[01:50:13] 's a router it's a build system yeah that can do these types of macros right and set you up for crossing the the server boundary appropriately yeah and it's deployment
[01:50:28]  it's the deployment story as well right yeah those are kind of the three things that they need to work together to make the experience what it needs to be to be considered a
[01:50:40]  meta framework right and those three things each can have their set responsibilities and be pluggable a little bit and what we realized is okay the router is not agnostic
[01:50:48]  right like the the router let's say like maybe we could come up with something but let's say the router is there's some utilities like a utility layer that maybe is ag
[01:50:57] nostic of like yeah let's not rewrite route matching and let's not rewrite some of these things but but at the at the at the delivery layer where you're consuming it
[01:51:07]  like we said with reactivity models the react version is going to be very different from the cell version right and uh sorry where was i going to damn it uh deployment right
[01:51:24]  right yeah yeah we're all writing the same see that was the only part that was specific the funny thing is the macros there might be specific to it but the mechanism it
[01:51:35]  could be somewhat generalized quick has shown the way on here we haven't gone this far here but quick lets you define your own dollar sign functions like they like i don't
[01:51:43]  know how far we haven't done the research into it yet but they actually figured out a way you know there's other people in our ecosystem making their own dollar sign functions and
[01:51:53]  following these kind of conventions but i think there's like this build system bundler system there's probably where a way to make this more generic and that's where bling started
[01:52:00]  in terms of us looking at because we believe that the core of it could be agnostic right which is incredibly powerful obviously but like this this is the same level whether
[01:52:09]  you're doing server dollar sign or use server or use client it's it's this macro mechanism i think there's a lot of benefits to bling's api but but
[01:52:17]  we'll get back to that in two seconds the third piece um which is the deployment side every single meta framework is rewriting those adapters astro's got them svel
[01:52:27] te kits got them nux has got them solid starts got them remix has them and nobody uses the same adapters um so like this and this is where i spend all
[01:52:38]  my time with solid start so like both of us are in this situation where like everyone knows i never wanted to make a meta framework i'm not even doing it and i'm
[01:52:46]  exhausted already i can't imagine you that's actually doing it like just the idea of having to build and maintain these adapters is just the most just exhausting thing ever so so
[01:52:58]  like it was it was kind of cool that when we came to this realization at the exact same time we're like okay let's let's like solid start has a lot
[01:53:05]  of really good patterns there's a reason why we were seeing those patterns show up now in other frameworks so as i mentioned quick doing the server functions and even this even the use
[01:53:15]  client pattern and stuff in react server components um like the way the mutation pattern i guess they haven't announced yet like this rpc thing i mean don't get me
[01:53:24]  wrong i'm sure react guys came out up with it independently because they have the same influence as me of graphql but i'm just saying like you can see how this
[01:53:32]  pattern um was formulating let's extract it and make it reusable and then the adapter side we were just like okay who's gonna write our adapters for us and then we
[01:53:42]  found this guy named fred k shoot or uh shot sorry i i can't get over how funny that video with dax was if you guys missed it um i i
[01:53:51]  i think i think that was that was i haven't streamed in two weeks we'll talk about them this week in javascript later um it was a hilarious video everyone
[01:54:00]  should watch but anyways the astro team has been building a really solid agnostic core for these adapters and stuff there's other options too like nuxt has the
[01:54:10]  on js and like um there are some attempts on the generic space but we just have to pick one and kind of go with it so that's fine we're not necessarily here
[01:54:20]  to talk about tan stack start and solid start which are sibling frameworks that basically are a combination of those three things astro deployment adapters bling and um uh which is
[01:54:33]  the build system piece and then what why am i not remember the third part the router yes the routers which are mutually inspired by each other um but it's you can start
[01:54:44]  seeing how we can work towards these kind of common goals when you have these these three pieces bling itself was actually just kind of a funny thing because um i kept the name
[01:54:57]  stuck i was joking i don't know if you guys know yeah it's funny because like even before we really got serious into the conversation there was a while back where in one
[01:55:08]  of our in one of our chats i think it was a group dm between me and you and some other people but i i was like man i'm writing all this code
[01:55:16]  to like extract away you know server side and client side code and nick he was actually helping me before bling was even a thing he's like hey yeah use this code and
[01:54:59]  just adapt it for how you need it you know yeah and they came into our dm and i was like i was like guys what if what if i just created a
[01:55:32]  a library that was just like macros but for a beat you know that did like you know service or whatever and everybody was like no don't do that and i'm like
[01:55:42]  yeah you're right that's a dumb idea and then like literally three weeks later with you through on like yeah like oh server dollar sign bling we should do that and then
[01:55:51]  all of a sudden everybody was like way on board and and i was like yeah you sold me again let's do it you know yeah yeah i know it's true i
[01:55:58]  i was skeptical but then i saw the react server components and the impact of the use client and use server as a convention and i was getting annoyed i i think you the timing
[01:56:06]  is right react had just told everyone that or andrew clark had just told everyone that they need to use a framework and i'm just like okay gloves are off like
[01:56:14]  like and i'm like okay i don't like i don't like that uh i didn't like when he said that it doesn't matter who said it either i just like
[01:56:24]  do you need to use a framework and i just i don't know i i take it personally because i'm i'm one to cobble my own framework together right and
[01:56:35]  now i'm kind of building one so it's like you need to use a framework is a pretty bold statement for where the ecosystem has been for a really long time yeah and
[01:56:46]  somebody has brought up already that the docs it's enshrined in the docs now as nate just said um but that i think it was parasocial brought it
[01:56:56]  up too they're like the docs kind of spit on spas now a little bit yeah yeah and yeah that that bothers me because instead of saying hey we realize that you know
[01:57:07]  historically react has been very spa so here's a page to help you reconcile some old patterns with some new ones instead they just say they just like have erased it they you know
[01:57:20]  they've they've washed it from history and then they just say you have to use a framework essentially um seems seems a little harsh i mean if if oh right i get
[01:57:31]  if you look you you can still find it you like we did this on stream before uh where is it not hooks we want to get started quick started you quick start quick start
[01:57:42]  writing markup where is it installation yeah here it is starting a new react project and maybe it's gotten better over time right no no it's just it's where is
[01:57:52]  it bleeding edge done next next next oh is it can i use react without a framework there we go yeah it's in here if you get to the if you if you get
[01:58:07]  to the bottom of this blob you will find it down here i'm pretty sure oh there's a part that says if you're still not convinced yes yeah yeah so hey by
[01:58:17]  by the way here's our agenda but if you're not convinced of our agenda go for it grab a react react on from npm set up your custom build president see
[01:58:28]  what's funny is like they say if you're still not convinced then then go you know go into the wild wild west when it's it's so funny that literally literally everything
[01:58:39]  last season that was the way right yeah yeah it's it's it's fine i mean the the you can tell yeah you can tell danny abramoff was very
[01:58:51]  involved in writing this portion of the docs it has his writing all over it they want to create the happy path for people and it's true when if you have people coming in
[01:59:00]  a majority of people are going to probably don't want a framework and they're going to need it so it's it's a really hard sell hard like it's it's
[01:59:07]  a really strong sell marketing marketing pitch for like using a framework and i get it um i i don't want to make the mistake of thinking that every that every develop front
[01:59:18] -end developer is like me right yeah um uh like i i feel like when i look at things very skeptically and and i'm like well do i really need that you
[01:59:29]  know yeah i mean and and on the positive they did include next remix and gatsby um here it's just you know so everyone's you know like decent representation of
[01:59:39]  the different platforms um and the you know you know i i think that's if i don't make it on that list i'm going to be furious well that's the whole
[01:59:49]  thing right there's a whole thing won't be i really don't i really won't care i mean because there's a there's a fully react sub note and we
[01:59:57]  talked about this before because like you know like astro probably never going to get on this list you know just in right it's because it needs to be react first like it
[02:00:06]  yeah exactly and probably very notable like i i doubt that tan stack you know tan start would ever make it onto this list regardless um just because it would take way too long
[02:00:19]  and too much time to like establish it but it's just funny that i think this is this has been brought up before like with documentation where like once you recommend one thing you
[02:00:30]  got to be careful not to you know not to burn bridges with people who think that they need to be on that list right yeah i'm glad i'm not so yeah so
[02:00:41]  now we're stuck building a framework but at least we can you know outsource some of the stuff we got a group effort on bling we have each of us managing
[02:00:53]  our own router that's all we have to worry about we build our own router and we have sharing one right we're going to be sharing a lot of notes on routing and
[02:01:01]  everything so and the wonderful people at astro are going to take care of those deployments for us right so yeah so you know it's a good story but bling
[02:01:14]  itself is a little bit special and i this is like i think bling is really really powerful um and just the approach of it is really cool i mean because there's different
[02:01:23]  ways to do macros we could use directives like or like or sorry what is it yeah and these are more like decorators is the way i'm going to put
[02:01:32]  it because yeah you could use you could use decorators um as we've seen you could use just text flag tokens uh you know or yeah oh yeah directives i guess is
[02:01:46]  the proper term for it right i didn't i guess i forgot that that's what they were called um yeah yeah yeah yeah it's it's just it's it's
[02:01:53]  interesting to me what i love about it is the server function file tagging like that that article that i sent you earlier where it's like for a while they were thinking like
[02:02:02]  oh you just like tagged the file name right so yeah i mean these are basically decorators on functions instead of directives what's interesting to me is because i've been thinking
[02:02:10]  about the patterns what i love about this pattern is it's composable you can call function and function and function i mean technically you could stack directives if you want to
[02:02:18]  what else i like about this pattern is it takes arguments so you could say we always say that the you know like the first argument is like the server function right but you we
[02:02:29]  have options here we can actually change from post to get if it makes sense we can update the request model there's like other capabilities that come with being treating this as as a
[02:02:39]  function call because now there's arguments it's so cool by the way like i don't think people understand like once this is there and you can use this you call server
[02:02:48]  dollar sign and you you know it's create it's doing an rpc under that it was a fetch call from the client and if you turn that to a get you
[02:02:56]  can now have your handler return caching headers yeah that yeah like you know like you just it's just so easy yeah exactly i i think i think it's important to
[02:03:14]  like this kind of capability and control is really really powerful here i mean the thing is we're still figuring out the patterns obviously we have server which is like just rpc
[02:03:24]  you literally just make the function call it anywhere um we have import which is i mean maybe we won't need this that in the future but this looks still but the idea is
[02:03:35]  important to discuss right because what you can do is literally make an inline module there's a there's a there's a proposal for this so maybe this will come up
[02:03:44]  we won't need this in the future but inline modules really kind of powerful because you can just do lazy you know this is how somebody mentioned that you could write an entire
[02:03:52]  application in a single file right right which is really really quite cool i'm actually showing a code example of that in two seconds and then the secret is i mean we're
[02:04:01]  just like what what if we just wanted something to be server only that there should be a client only pairing with this but it's a little bit tricky because client only is kind
[02:04:10]  of like lazy like it might need framework knowledge but right secret secret is just like it just doesn't come across i mean these are just cool little patterns but yeah nikhil
[02:04:21]  you know doing doing doing doing amazing work here made a bunch of examples he's like okay people here know solid and they know we've been doing the solid start so seeing solid
[02:04:33]  with astro router is probably not or our hacker news demo isn't that interesting but what if you could just use react router like i'm not talking remix i'm just
[02:04:42]  talking about react router that everyone uses and this example is a little bit extreme but inside the app directory here we have something set up very similar to solid start it just has entry
[02:04:54]  client entry server and then a root and then a file we're showing files and you could do secret dollar sign in the file name as well yeah we're calling it i added
[02:05:03]  last minute which i think is great yeah well the thing is just because you can do this doesn't need to you mean you need to put the stuff in the same file
[02:05:10]  you can always just like use a file convention you can use like naming or some other thing yeah but this is just showing like the most the most granular the mechanism you can always
[02:05:21]  scale up from that but if you make something that's blockier to begin with you can't come back down as easily so the reason i want to show this is entry server
[02:05:28]  is and client are not terribly interesting they're just a request handler so basically this is just like like on the server uh yeah i don't even know what handle fetches
[02:05:38]  i guess it's whatever it's not terribly important we're rendering our react app and our react handle request is like you're just you're just handling normal requests through the router
[02:05:49]  but there's a special handle request from bling that says hey if there are any like if there are any requests for server-side modules and stuff we need to make sure
[02:05:56]  we route to those and whatnot instead of doing regular routers i want to look at this because there's some experimental stuff like i'm like this is lazy would have to
[02:06:04]  be react specific so pretend lazy is a combination of lazy component and import dollar sign right but which we can we could swap out implementation details pretty easily with lazy you know you could
[02:06:16]  say i'm using lazy and and you just kind of have to configure it to be either like react or solid or something like that and just if if you've ever seen react
[02:06:24]  routers config based routing you can set you can create an object like this over your possible routes right so you can go path element and then children or child routes also have
[02:06:34]  path this is just react router 6 right but react router 6 remix added a data loading pattern that or that and they did it on the server and then they brought it back to
[02:06:46]  react router 6.4 that made that loader happen isomorphically which funny enough solid start has an isomorphic router as well uh loader kind of pattern as
[02:06:55]  well we so you can kind of see this thing is what nikhil does in this example is he just goes and goes okay well let's just make that that that load
[02:07:05] er always run on the server so he just put a dollar sign okay and then he defined the components so app and some route are just some components you know and some route too
[02:07:14]  and if you look up here some route too he used the full lazy thing here let's see him right here app he's lazy he's just trying both mechanisms but he
[02:07:25]  just inlined the components here these components will be lazy loaded so the they will they will actually be code split into their own bundle and only loaded on navigation they'll get loaded
[02:07:38]  and parallelized the way react for outer work suspense and everything yeah yeah exactly and then you've got secret in there but what you're seeing here is in this one file
[02:07:46]  is a whole multi-page app with code splitting and server-side only data fetching like like like here we go here here's here's like a whole remix app or
[02:07:55]  whatever you know like simple demo app all in one file in 130 lines um again i'm not sure if you'd necessarily like want to author it like this but this is the
[02:08:06]  capability and the power of this right you have the router you have this build system that can do all this and then you've removed the constraints of of the file system essentially
[02:08:19]  right there's no conventions because they're unnecessary right and this is something that's funny because like there there is consideration here and i think this is an area that does need work
[02:08:30]  on the compiler and how we approach it but someone's like what about separation of concerns and stuff why is it that whenever that argument comes out you're just like this is
[02:08:38]  this is this is the prefix or something that's going to be proven to be pointless in the future whenever someone says separation of concerns it's like you know that at some point
[02:08:47]  someone's going to say that separation is irrelevant like it just yeah it's it's it's it's just like if you follow history like there there there is some concerns and
[02:08:57]  considerations here um you know around the the compilation and about stuff getting the client and you have to be aware of but i the reason i want to point this out is just
[02:09:06]  that like think about the difference between single file components like in svelte and think about react this is the same kind of feeling when this is the case because if you can
[02:09:18]  just kind of go oh yeah you know what i i don't like i like yeah let's lazy load this component like you know you just do it in line you don
[02:09:28] 't like you you don't have like here we go lazy lazy load it you know like you you you can kind of go for something being lazy loaded to not lazy loaded by
[02:09:35]  just going oh i'm going to lazy load it like that kind of power it's not like now i need to go create another file find a new location for it do
[02:09:43]  this whole thing and it's and you and then you have to explain why why do i have to create another file for it where do i put that file right and if you
[02:09:51] 're using route based configuration stuff then there might be rules on where that file can go and what it can be named right right and there's actually way more constraint and rules involved
[02:10:02]  and having to understand implicitly the rules with with some of these file based systems rather than just saying oh you know what it's just code code can be smart you just
[02:10:13]  wrap it with something and you're done i love this i mean this is just another insane example but nikhil's like oh yeah so what if we just uh made a
[02:10:23]  to do mbc example with prisma with prisma yeah so here's here's a here's a to do mbc it's so cool he's like yeah
[02:10:31]  he's made it action i mean this is this server the server prisma to do find many right find yeah oh right and he's just plugging into the action mechanism that
[02:10:48] 's built in react router so this is actually just react routers actions react routers action but see inside of there he's got the server inside of the action so it's
[02:10:58]  going to create let's see one two three four so it's going to be create like four server-side rpcs yeah you know three of them for the load for
[02:11:05]  the loading and one of them for the action okay so like here you go so now actions we create the form data and then you do the server request but i mean i
[02:11:13] 'm not suggesting everyone writes this code this is like something more like library maintainer uh wet dream kind of speaking like in terms of like trying to like you know just like get
[02:11:22]  all these pieces together right like you could see you can see you know people wanting to kind of build around like more approachable but let's let's talk about the prag
[02:11:33] matism around this though the pragmatism around this is that when you start out a project you could start it this way you could build it this way right when you need
[02:11:42]  to expand out to multiple files you can just move this stuff out and just reference it and you don't have to change anything else like this kind of code refactors
[02:11:52]  really well yeah it's funny because he's actually using remix as form component too right or so react router's form code yeah like this is literally like he just recreated remix
[02:12:02]  in in one file like it's actually using the form actions and they're probably progressive enhanceable and like all of this and the only difference is that this is fully client rendered
[02:12:13]  and it needs to be right well he doesn't he doesn't have any island stuff in here anything like that right but not even islands like technically well well i think is
[02:12:23]  this a server rendered app originally he's he's starting right from the html tag this could be this is possibly a ssr dap as well it's not
[02:12:32]  it's not like server components but it's like like remix i'm pretty sure this is he started from the html tag so my gut is that this is a server
[02:12:38]  rendered go up to the html is he is he putting like scripts in in his html anywhere uh body body let's see let's go down to the
[02:12:49]  yeah so he is so he's using scripts but i mean what what i wonder is is if is the scripts necessary if he rips that out is it still going to work
[02:12:57]  i'm just curious right this talk talking about you know the library maintainer wet dreams is like the whole well you you don't need any javascript at all and it
[02:13:06] 'll just work it's like okay that's not yeah i mean but cool flex bro yeah yeah yeah yeah no but but it is yeah it is server rendered okay so cool
[02:13:19]  yeah that's very cool yeah so like yeah i mean this is this is an interesting model because if as you can see like sometimes patterns are too powerful and we need to rest
[02:13:33] rain them and decide what we give it out to users but the the raw potential here is huge because of you know like like this this just removes like what's really cool
[02:13:46]  about this we talked about is the fact that like you could start with a client-side app like we you could you don't need to start in one file let's say
[02:13:53]  you just like laid out your app and then you're like it's an api you know third thing and then you're like no i want to i want to do
[02:14:00]  more on the server and then you're like okay well let's like you can basically piecewise move more of the work to the server with this kind of approach yeah and i
[02:14:11]  think there's a lot of apps that will probably fall into that realm too where they they may not be like you know they may still be very client heavy but they still care
[02:14:21]  about ssr and they still care about um you know doing work on the server and making sure that there's at least a good server-side rendering story like these
[02:14:31]  these utilities and patterns would work great for that setup and i actually think that another powerful thing here is i look at some of the apps that i've built um and it
[02:14:43]  it doesn't seem like it would be too difficult to just swap the build system over to astro yeah and go into my files and just decorate where i need things to be
[02:14:56]  where i need boundaries to be and and be able to refactor you know and and gradually let's say gradual migration into kind of more server logic you know what i mean
[02:15:10]  instead of like a a whole lift it up and and shift it over and rewrite everything um right usually what happens like i can't imagine a lot of people moving from create react
[02:15:20]  app or v and react being able to just pop in whatever they have into next or or into remix it just won't work that way um right and it's and incrementally
[02:15:31]  changing it i know there's ways to do that but they're very uh like it's you know you're picking up and moving big pieces over right a lot of commitment
[02:15:41]  like this feels like something where you could really incrementally migrate an spa into a fully server rendered and possibly fully server component driven application just with time right right like all you have
[02:15:58]  to do is picture instead of those lazies we saw a minute ago what if it was just client dollar signer island dollars island their client right yeah so this this is
[02:16:08]  is it is an interesting thing i think there's rules to consider and work out there's a question here um what's the loading suspense story around server well i mean the beautiful
[02:16:17]  thing here is can i answer this one absolutely because tenor already answered this um server is just a dollar sign rpc which returns a promise so this it has nothing to
[02:16:29]  do with suspense except for that it's a promise and so any and guess what happens if you call server on the server it's it's there it's just a promise
[02:16:40]  right but it's just there for you right so the thing is the framework is nice and morphic but on the server yeah the thing is the the frameworks know how to handle
[02:16:52]  a promise right earlier i asked tanner if when he built use query if he was just if he was thinking any promise or just data fetching well it turns out any
[02:17:00]  promise is our case here you just go use query server dollar sign now it works with suspense or in solid to create resource this was this was the coolest thing like i don't
[02:17:09]  know if tan stack query insult in solid start and using server dollar sign like this literally feels as first party as anything that we could have built for solid start itself right because like
[02:17:20]  it's not like oh you have to use loader data or whatever like whatever the pattern is and then now you're in this enforced thing if you just like don't
[02:17:29]  use the stuff that we've written solid start and just sub in tan stack query and then put server dollar sign on it like it feels it works just as well like We
[02:17:39]  don't need to be opinionated on those loader export patterns. You can literally pull in any third-party library. And that's just another testament to the whole wrapping
[02:17:48]  function instead of the other things, right? Is that you just wrap it with the function and the types stay the same. The functionality stays exactly how you'd expect it to
[02:17:58] . And you can get in the middle there and have an abstraction layer. Yeah, I mean, to be fair, Tansac query does have these loading states.
[02:18:10]  But it also, I believe in the React implementation, you can turn on suspense and it'll just work with suspense. And in Solid's case, we assume suspense is always
[02:18:20]  turned on. So it just works. It really has very little to do with React. React query isn't your data fetcher. It's important to remember that, right
[02:18:29] ? Like the server dollar sign, that's just the implementation mechanism of going across the server boundary to get the stuff you need and come back. You could use that with
[02:18:41]  React query. You could use it with useEffect. You could use it with anything that you want because it's just an asynchronous function. And on the other side,
[02:18:48]  because it's just an asynchronous function, I've seen people use stuff with like TRPC. So actually using it as the transport layer for other patterns that you usually use on
[02:18:59]  the server. Well, and I know we talked to Alex a long time ago about this. And there were like mock-up ideas of a bling-powered TR
[02:19:13] PC that if this becomes a reality, we could definitely see something like that where like a large layer of TRPC can just completely move to the server. You've seen
[02:19:29]  this project, right, you've seen this project, right, PRPC? Oh yeah, I've seen PRPC. It's from the creator of CreateJD Dev
[02:19:34] , our app. This is for Solid Start, Next.js, and Bling. And it is TRPC-based dollar functions. Yep. So this might be like
[02:19:47]  a little bit too specific. Like I want to focus on the general thing, but this helps us understand use cases. But like this is TRPC with Bling,
[02:19:57]  essentially. Powered by Bling. Like this is an example of an abstraction that could be built on Bling that can harness the power of Bling and just even make
[02:20:07]  it easier to work with. Like that middleware and the query, this is so cool. Yeah. Yeah. I don't know if we need to walk through this
[02:20:19] . No, but you can see it. He mentions these ones, but because it's built on Bling and Solid Start will eventually evaporate in that. Like he
[02:20:27] 's mentioning Next.js and stuff, so like the integrations. But in theory, building on Bling, I mean Next.js has its own thing, means that
[02:20:35]  like all the Vite frameworks and stuff. Like I'm very excited. I want to, I don't know if Brandon's still in the chat. He was here earlier
[02:20:42]  from Analog on the Angular side. I want to, I got to reach out to him. I want to bring him in on our crew because like, you know
[02:20:49] . Brandon's very excited about this for good reason. Because we're talking about these patterns. Like the fact that these patterns would be available to like the Angular ecosystem. He
[02:20:59] 's so excited and with good reason. Like Angular's having a moment right now. We don't need to talk about it. But just, just everybody know that Angular's
[02:21:08]  having like a moment right now. That's actually a really cool, good moment. So. Right. But yeah, so this, this mechanism built around bundlers,
[02:21:16]  I mean, to be fair, we're using mostly Vite here, but like you can, you can see this, this is a very powerful pattern and obviously amazing work
[02:21:26]  by, yeah, or dev or jdev, JD app. Like this, this is, this has been awesome to see this kind of progress. And as I said,
[02:21:36]  this is just like, it's, we're starting to learn the patterns and figuring out how we can generalize it. But this is, this is going to be
[02:21:44]  a very powerful tool because it, it gives us basically bundlers need macros like this, where we're getting to. The problem is all the frameworks are like, they
[02:21:54] 're like, okay, we're the router. And now they're like, we're the bundler. And someone a while ago was like, it'd be great if
[02:22:01]  bundlers exposed us standards and like a set of primitives or whatever. And I can't, we're not, we're not waiting for the standards. It
[02:22:08] 's like, like the, the problem is like, sometimes you just got to go and make a pattern and see if it works. Right. Right. And we need,
[02:22:15]  I agree. I think it's a bad sign. I mean, it was a good sign that everybody's converging on the same ideas, but it's, it
[02:22:22] 's bad that everybody's duplicating and replicating their work. you know, like you want to come out with a new framework, you, you have to have all
[02:22:29]  these bundler considerations. Like I remember watching, you know, when remix was in beta, then going through all of the considerations of, of the deployment strategy. Right.
[02:22:40]  With, with all the adapters and then, and also going through all the considerations of a bundler. And they had to make really difficult decisions on ES build and how
[02:22:48]  they were going to do all of this stuff. when the, just across the pond, you know, next JS is already doing a lot of this stuff, just in
[02:22:55]  a different way. So like, it really has been begging the question of why maybe not standardized, but why have we not commoditized this? Like that's, that
[02:23:06] 's a word I like to use is like, I want all of this stuff to be commoditized because the faster it is, the more innovation we're going to see
[02:23:13] . Yeah. And I, in a sense, react is trying to do that with certain ones a bit with use client and use server, but it's, it's
[02:23:20]  very tailored to their specific use case. I mean, bundlers are going to standardize on react because it's such a big thing. But again, like, I feel
[02:23:28]  like there's more here. Like we might talk about this a little more in three weeks. Right. But, uh, at, uh, at reactathon, but I
[02:23:37] , I'm really, really, uh, on the side of like removing the react prefix from react server components. Like that, that's where I'm at. And
[02:23:48]  I know Theo might be in here somewhere. Theo was really sold on react server components over the last two months and I'm getting there as well, but not so much on
[02:23:59]  the react server components, just on server components in general. Yeah, I, I am very much in agreement. I've been working very hard to come up with helping
[02:24:06]  spec out how they can work in astro, been working on stuff in solid start. And the next place I'm going back to is the router. Cause I think I
[02:24:13] 've figured out how to get a universal router. a universal router, so you don't have to switch to app directory and like normal directory, but it could be part
[02:24:21]  of the same process. Right. And this has been a challenge we've been talking about off and on for the last few weeks, right? If we can like nail that
[02:24:29]  down. And I think I have ideas on that. It's, you know, we get your type script from the routing. we get that and then you get something
[02:24:36]  like bling. It's still those three pieces that we were talking about, except like what's, what's lovely about this bling pattern here is like if you were
[02:24:46] , as we talked before, if you were just had a client side app only and you use server dollar sign, it just fits in as nicely. Uh, and then like
[02:24:52] , you're just adding an extra dimension by adding that initial server layer around it. And I, I, like that kind of way of building the layers is super,
[02:25:04]  super, um, powerful, I think. And if we can solve the routing, which is the last like framework specific piece, then like, yeah, sure. We're
[02:25:15]  using Astro for our deployments, but there's half a dozen different solutions out there that might eventually get standardized. Oh yeah. Because it'd be easy enough to
[02:25:26]  just say anything using VEAT, you know, you just got to write that. You just have to integrate the plugin and, you know, make sure you're integrating
[02:25:34]  with the deployment strategy correctly. And then, and then you're done, right? You can, then it's not just running on Astro. It's running on whatever
[02:25:42]  you want. Right. I mean, we haven't written this, but this is an interesting question. Yeah. I, I, I think this is the area that bl
[02:25:50] ing needs to do, do work. We need to think about how far we can generalize, um, the, these kinds of patterns. Obviously this is a little
[02:25:59]  bit out of the initial scope, but like if, if we have this ability for the deployments, and then we have this mechanism of macros for the bundler for
[02:26:09]  these primitives. And then like, as I said, we're left to just like the framework worrying about routing. And if we can solve the routing, if we
[02:26:17]  can understand the server client divide, then like, like all the pieces are there. Yeah, I agree. Like it's the routing, the routing is going to be
[02:26:31]  one of the more interesting parts to solve. Um, and, and as I've been discussing with you over the last few days, it's one of the parts that the
[02:26:39]  most mysterious to me when it comes to react server components. Uh, like I've heard a lot about the constraints on how react server components work and what you are allowed
[02:26:49]  and not allowed to do. We've heard a lot conceptually about how they work and conceptually what happens. And we've seen a little bit of implementation on how
[02:26:58]  that actually works with like their chunking and streaming. Um, but then when it, when it comes down to the actual router, right. I feel like, I feel
[02:27:06]  like this is where the walled, the next walled garden is kind of like shading me a little bit from, uh, from how it actually should work or could work
[02:27:16]  or whatever, you know? Right. And it's tricky because there is a lot of details here, but you know, whenever you have those kinds of challenges, sometimes
[02:27:24]  you just need to spend some time with it to get there. Like I remember when I was working on benchmarking for solid early days, I spend a lot of time in
[02:27:32]  other frameworks, just trying them, using them, understand how they executed and the understanding of the performance characteristic. And that's how I came up with my stuff at solid.
[02:27:40]  If only we had someone on the bling team spending all their time on react server components and beat right now and, and figuring out how routing would work with react server components
[02:27:48] . Then we'd know exactly what to do. Um, which I'm, I'm, I'm kind of making a joke. Uh, Nikhil has been doing
[02:27:57]  that. He's going to be joining me on stream next week when he's going to talk about what, how, how he's made react server components work in beat,
[02:28:04]  including mutations and routing. Um, so that's what he's been up to. Some people were like, isn't he working on solid start? Isn't he working on
[02:28:12]  the bling stuff? What is he doing? Making a full, like, uh, react server components in, in beat kind of prototype framework. Well, um,
[02:28:18]  this is all part of learning more about the web and understanding how these things work. Uh, so very cool stuff. Yeah. Yeah. Like the, the, I
[02:28:28]  feel like, um, you know, bling, the implementation of bling, it's like, we could already make it work today as it is. Um, I
[02:28:38] , I've, I've, I've loved the chat. The chat's just like spamming us with like build web socket. Web socket, I think worker,
[02:28:44]  I I've, I've actually. Oh boy. See this, there's there, this is, this is why we have to think about how generic to make the mechanism
[02:28:54]  from a bundler standpoint, we have to actually step back a moment and look at the convention and make sure that like we can support this kind of stuff. Cause there's
[02:29:02]  a potential for an explosion here. And I do think that we have to think about what's core fundamentally. Like right now we're exploring the use cases and what is
[02:29:14]  for me comes back to like separation of environments, which is where a lot of these, that's what a lot of these macros are doing is that they're kind of
[02:29:22]  very environment and context focused. Yeah. And I think if you end up with two macros that are operating in the same environment scope, then there, that's kind of
[02:29:34]  a smell that they could just be the same primitive, you know? Um, like, like worker and server. Yeah. Would theoretically be very similar, but they're
[02:29:44] , but they're, they're isolating into separate contexts and environments, you know? Yeah. So, and then, and then like, another good example is like query from
[02:29:57]  PRPC, right? Like query that, that is an abstraction on top of something that is, that's like, you know? You know, so yeah, find
[02:30:07] , finding the right primitives is key. And we need to constantly be asking ourselves, okay, somebody is asking for a new primitive. Can we build it with an existing
[02:30:16]  one? And how difficult is it for, to do that? You know? Yeah. And this is, this is, this is the kind of exploration I actually love
[02:30:22] . I love focused on primitives. I think I'm not necessarily a standards person, but I'm definitely love playing with the boundaries of things to understand what the building blocks
[02:30:32]  are. Yeah. Composition sandboxing is some of the funnest work to do when you're like design. That's honestly my, one of my favorite parts
[02:30:40]  about building open source libraries is just like getting down to the primitive APIs and then finding out how composable they are together. And like finding the right balance of magic to primitive
[02:30:52]  that you can get, you know? Yeah. Yeah. Someone just asked in the chat, um, something. And I, I, I just, I just want
[02:31:02]  to throw this out here, just kind of drop this one. They're asking if they could help with moving solid start and to, with bling and astro. We
[02:31:12] 'll do the astro move first. I've actually been working on this a bunch the last few days. So the, the move of solid start to astro is already
[02:31:22]  in progress. You can check out the branch, um, here. Uh, there's, there's some bugs and stuff, but I got all the basic modes working
[02:31:30] , uh, in the first couple docs, sorry, this little tangent. I just wanted to point on, not the packages. I love how much small, the work you
[02:31:37] 're doing here is like fundamental to everything. I'm going to be, I'm going to be stealing. Right. So yeah, yeah, yeah. But yeah, yeah
[02:31:44] , definitely. I'm sorry. Where was I? Examples. I've got bear hacker news to do MVC. I'm just working on auth right now. All
[02:31:50]  working in client side only, um, islands mode, islands, router mode, normal SSR, all four modes work with these on beat both dev and build. So
[02:32:02]  I I'm very excited too. Cause we're going to introduce the ability to static generate for any adapter. Um, I've already implemented it. So, um, I
[02:32:13]  I'm like, so specific pages and stuff. So it's, it's, it's, it's in progress. Um, do I, yeah, I,
[02:32:20]  I, I still have the flash of unstyled content on the, uh, dev mode, which drives people crazy, but yeah, this is working. I think I
[02:32:29] 'm going to move to Astro first. That'll be the 0.30 release. And then we will kind of swing bling in after that, and then we'll
[02:32:37]  swing the router. And once those are the three steps, how much of, how much of this stuff that you're working on right now, it's like very solid
[02:32:44]  specific. Um, let me look here, but I think the key of it actually is if I go into the packages and this is a bit of a mess and I go
[02:32:53]  into start and I go into Astro start Astro, this whole section is actually, you're not going to see anything solid related. It's just like setting up
[02:33:03] . I've wondered how much of this could just be shared. You know, you're right. Like what's dev collect. Yeah, actually none of this stuff. Okay
[02:33:12] . The most complicated file in here is builder and okay. The only piece here that is solid specific is, um, the mechanism that we are using to do the SSR
[02:33:25] , but it's actually not solid specific. Now that I think about it, it's solid, it's solid SSR. But this package is literally just a way
[02:33:31]  of running a bunch of parallelized requests. Like it's not even solid specific. Right. Even though it could be pluggable though. Right. Is what kind of
[02:33:39]  what I'm getting at. There's actually nothing solid specific about this thing. I just needed a static rendered generator. So like we could just. Well, high on my
[02:33:47]  wishlist would be for this to be consumable by moi. Uh, so that we can just be working on the same like primitive for the start part of it.
[02:34:00]  You know what I mean? Yeah. I mean, there's a bunch of environment variables and stuff, but like there's no solid code in here. This is all just
[02:34:07]  build config. Yeah. I mean, this is all stuff that I'm going to either have to write or just take. So yeah, yeah, yeah. Yeah. So
[02:34:15]  yeah, right now, I'm not sure if this works outside of anything in node. But yeah. Yeah. Okay. I'll keep that in mind. Now that
[02:34:21]  I understand this, that's actually very interesting. Because what ends up happening when we move the router stuff is that. like a lot of us, a lot of the
[02:34:32]  framework specific stuff just comes into play when you actually render on the server and the scripts that you inject and hydrate into the client. Right. Right. And, and solid
[02:34:42]  does it all itself. It's only like this entry stuff or like the root that is solid specific. Right. Most, most of the data and the FS router,
[02:34:50]  the stuff can be extracted out to the router. API routes and stuff can, are like, again, generic. Astro is generic. Dev mode will be gone. This
[02:35:03]  is solid specific. It's a special error boundary for that router. Part router, part bling, maybe like the, the solid specific part of bling. Right.
[02:35:14]  No, this is general generic. This is, um, this is solid specific, solid start specific. This is bling. This is like the current bling,
[02:35:27]  like worth solids version of it session. This is generic. This is remixes session library, literally wholesale copied in here with the remix license. Um, virtual is probably is
[02:35:40]  the way we do our, like our export stuff. It's like, it's, it's V plugin. This is solids V plugin. And then this is the
[02:35:48]  web socket thing that, uh, Nikhil did, which is actually generic. So built on top of the server. Yeah. There's a lot of it. That's
[02:35:57]  generic. So yeah, when I moved the stuff out to, into the router, like back ports, the island stuff into the router, the stuff gets mostly, um,
[02:36:07]  generic. I think we should, you, I would, I would immediately use a solid JS slash start package. Yes. And that's the thing now that we don
[02:36:20] 't have the nested package needs, it will just, it will just be at solid JS slash start. I'll ultimately, I think we'll get rid of it
[02:36:27] . Right. Yeah. Because like what's left in this repo. An MDX package. Right. Start. And then our CLI. Yeah. Like so, so
[02:36:39]  much of it is shared. Like, it's so funny that once you pull out the shared stuff, it's like, okay, there's going to be this start package
[02:36:47] . Yeah. It just kind of works everywhere and you just kind of have to plug in your framework specific stuff. Yeah. Then you'll have bling that it just
[02:36:57]  kind of works everywhere and you plug in some framework specific stuff. And after that, then you just have to implement your, your framework rendering. Yeah. Yeah. Yeah.
[02:37:08]  So yeah. I mean, I think now that I've deleted a bunch of stuff, that's, this is one of those commits. Like if I, let me see
[02:37:16]  if I can get here. Do they show them plus minuses? Yeah. It's, it's, I, I had a lot of fun recently. I just
[02:37:23]  like deleted everything. Um, uh, I would love, I would love to see a solid import get surfaced in a, in tan stack start, which is 100%
[02:37:34]  react. That would be so funny. Yeah. Parasol, he's like adding solid dependency to react project. It's 10% bundle increase. That's funny.
[02:37:42]  But it, it, it, it's all just like server, right? Like all the start stuff is just like server and, and bundling and all that.
[02:37:48]  So yeah. Um, and I saw something else here. Somebody's like a pair of social always has pretty good comments. Stealing open source caught in real time. I
[02:37:58]  think there's something to say about that. There's something there, a good, like a nugget of, of insight is that like what, what we're doing
[02:38:06]  here, this like, it's, it's so easy to like mistake, um, sharing for stealing, you know? Uh, and, and there just needs to
[02:38:19]  be more collaboration in the ecosystem. Like, yeah. I mean, it would have been so easy for me to go and say, I'm building my own framework. I
[02:38:27] 'm going to do all of it on my own. I'm going to rewrite all this stuff. And, and, you know, but guess what was even easier. DM
[02:38:34] ing Ryan Carniato and Fred and saying, Hey guys, this is what I have in mind. And I don't want to do any of it myself. Can
[02:38:43]  we work on it together? And it like, what has come out of collaboration is just, it's amazing. So there needs to be more of that. Yeah. So
[02:38:55]  really quick question. How much will this change existing solid startups from zero to two? There will be changes coming in 0.4, uh, which is what I was trying
[02:39:04]  to mention before. But the move to Astro, this is my favorite, favorite part. Um, I, I mean, can I, can I show, can
[02:39:11]  I quickly show this? Sorry. I just wanted to, this is just cause I'm. Well, you need to ask permission to do anything, right? Uh, update
[02:39:21]  to do, uh, which one get different modes to work. I'm trying to think of which commit is the one that I want to, to, to show. It
[02:39:29] 's just like the examples. Yeah. Examples bear. Okay. Here we go. There, I added this Astro config. Okay. See integration start adapter node.
[02:39:44]  Okay. Astro config. Yep. I went into the package.json and swapped this stuff for Astro commands. Swap some solid packet, start packages for Ast
[02:39:55] ro, Astro node, remove, you know, solid start, you know, did, did, did a few little simple things. Deleted the V config Ast
[02:40:03] ro added this MDD. We're done. Let's look at hacker news. Example added this hacker news define Astro config. You, you installed Astro.
[02:40:13]  Yeah. And then change the package.json. And then I deleted some stuff that wasn't important. And then the example deleted some stuff added the same file.
[02:40:22]  Oh, and now what to do. Basically no code inside the, the sort. Basically the only thing I had to change was a package.json and changed the config
[02:40:29]  file and the existing solid start projects just work. Like no change of the source folder or anything. I literally just updated the package.json, the install Astro,
[02:40:37]  and then you have to use an Astro config instead of V config. People doing fancy stuff on the V config.json will have to port those into Astro
[02:40:43] . Astro has a property on their config. So you could be like where we have here, you just go V colon and then pass your custom V options through. If
[02:40:51]  you're doing really crazy stuff, there might be some things we have to work through bugs wise, but generally speaking, going from 0.2 to 0.3 is basically
[02:40:59]  invisible. Yeah. Somebody asked what moving to Astro brings to solid start. Like I would like easily say, look at, look at the relief on this man's face
[02:41:09] . That he won't have to maintain adapters anymore. I deleted like, I, there's three, there's three, there's three projects in the solid start in
[02:41:19]  this branch. See create solid MDX start. Okay. Let's go back to the main branch. I mean, it's not much, but all of these got deleted
[02:41:30] . But it's, it's enough to make you, to make you cry a little bit. And then they, these are not packages you set and forget. These
[02:41:37]  are moving targets, people. They're always moving targets. Yeah. No way. Yeah. So yeah. Anyways, that's, that's my plan. So it's
[02:41:51]  like, there's gonna be a 0.3, which moves us to Astro without breaking anything. It's like a tick tock and then, but it will break
[02:41:56]  some stuff for some people. Obviously there's always a chance for that. And then 0.4, we'll have some of the new small, uh, the API
[02:42:03]  changes, um, you know, things. So we'll, we'll, we'll, we'll focus on the Astro upgrade first, and then we'll focus on
[02:42:10]  like the, you know, router updates and library updates that are coming. Um, there will be changes before we get out of beta. I think we've learned a lot
[02:42:17] . I think everyone's learned a lot during this time period. I was hoping that we were completely finalized. I think the pieces are all there. We still have server
[02:42:23]  functions. We still have, you know, this route mechanism and all that, but I think like some of the, we have to change some stuff around the entry,
[02:42:30]  the support, support, uh, uh, server components better. There's going to be some small, mostly, mostly changes at the data, maybe a little change at the
[02:42:41]  data fetching level and changes at the entry of your app. I don't expect this to impact most of your application code. Cause again, the only solid start for specific
[02:42:49]  stuff you tend to use is actually in like the route data, right? Everything else is like, there's such a small scope on the library that all the code is
[02:42:59]  like, like if you go into your routes folder and you look in a couple of those special exports, it's probably like the only place that solid start cares about what you
[02:43:08]  do. You can do anything else you want anywhere else. So from that perspective, um, I, I don't expect very painful migration, um, with what's going
[02:43:18]  to be coming, but we'll move to Astro without causing any of that kind of concern. We'll still sort of spa. I thought Astro, it doesn
[02:43:26] 't matter what Astro does. Like it, it, and I've already got spa working on Astro. Like Astro, we're literally just using their build system
[02:43:34]  and their server and their depth. Basically we're using their dev environment. They're not anti-SPA they're, they're agnostic to it, right
[02:43:43] ? They they're saying Astro is basically whatever you do on the client is your business, right? So do whatever you want. That's the beauty of Astro.
[02:43:53]  Is there, they're the perfect framework that actually, I want to call them something. We've said this a few times before, but I want to call them.
[02:43:59]  They're the perfect meta bundler to build a meta framework on. Yeah. Yeah. I mean, they just, they, they just have a, and they have
[02:44:09]  a company and a community behind them, which is really exciting to me. Right. Yeah. So start is just going to become an Astro integration. Huge. I didn
[02:44:16] 't think it'd be wired up that way. Yeah. I'm yeah. It was just, they have the build cycle hooks. Yeah. It's, it works pretty
[02:44:22]  good. I just need to get the, there's a few warnings that I'm getting in the CLI that I need the silence. Because they're like, but
[02:44:29]  yeah, it, yeah, it works. Yeah. Yes. Theo may have had something to do with this, but I mean. Yeah. I, I, I mean
[02:44:45] , I think he did. He, he, he was telling us this for a while. It's funny. Sometimes he's so on point on understanding like the positioning like
[02:44:55]  that. but at the same time, and I'm going to give him a little ribs on this. He, he didn't see that react server components and Astro's
[02:45:03]  like the build patterns are exactly the same, like, like react server components on the async functions and the whole, like way that whole interaction works between them. You know
[02:45:12] , that he's really excited about right now is literally how people should have been building Astro apps this whole time. Yeah. They might've not been, but, but
[02:45:19]  that's like literally how they should have been. The way that Astro's packaged up kind of makes it like, you may not realize that at first though. Like
[02:45:26]  I can see that how it's kind of right in front of you the whole time, but you can't see it. Yeah. I saw it right away. I was
[02:45:32]  like good Astro apps are mostly dot Astro files. Yeah. So yeah. And dot Astro files are basically just. Server components. Yeah. With top level
[02:45:42]  async away. So. Right. Anyway. Yeah. I mean, they said they're building a, uh, a router. Or I was just, someone was asking
[02:45:55]  me, what about nitro? I mean, nitro was also an option, a completely different engine. I just, honestly, we're just closer with the Astro
[02:46:04]  guys. And we're already kind of like in communication. Just, it just made sense to me. And plus Astro has this, like Nuxt is, is
[02:46:11]  good. I love Daniel. And I like, I love the work they're doing there. It's just like Astro is also kind of this agnostic home right
[02:46:17]  now. They're kind of like Switzerland. And I, I, I, I kind of, they don't have the strong association with any framework. I kind of
[02:46:25]  like that positioning wise. I, if we all, I think everyone would be happy to work with Astro, whether they're a react library like tan stack here or whether
[02:46:34]  we're doing solid stuff or even, you know, I, I mean, I don't know. Brandon's up to these days. He might just want bling,
[02:46:41]  but you know, like, I think it would just be interesting. To kind of, uh, I can't wait to build Astro query. That's, that
[02:46:50] 's all I'm saying. I don't, I don't know if Astro query makes sense. I mean, it's the same as tan stack query, right?
[02:46:56]  It'd work in all the frameworks. I don't know. Maybe, maybe it's just like framework lists. I don't know. Yeah, no, there, there
[02:47:04]  is no technical. I'm just shouting obscenities, I guess, from the rooftops just to get a reaction. Yeah. There, there's, there's
[02:47:11] , there's no technical reason. Yeah. Yeah. The, the, yeah, I, the, the, yeah, I, I, the link. Yeah. This
[02:47:18] , this link is a, is a good link. I'll pull it up again. I'm pretty sure I know exactly what tweet you're posted because I've been bug
[02:47:24] ging the Astro team about this for ages and it's not fair. I just, I, I went into their chat, like after the react server component thing or like
[02:47:34] , and I was like, I was like, Hey guys, what do you, what do you, what do you think about putting, doing this? Like in the
[02:47:39] , and they're like, what do you mean? I'm like, no, no, no. It's like, what if dot Astro files were server components and
[02:47:44]  they're, and the, and no one in there knew what I was talking about. This is like a long time ago. This was like over like a year and a
[02:47:50]  half ago. And then like, they were doing some like kind of turbo links type experiments. But I'm like, no, no, no more like this. And I
[02:47:57]  was like trying to explain it, but no one understood what I was talking about. And then we used his library micromorph to do solids, like server component type solution
[02:48:06] . And I'm like, look, look like this. And then I think when we showed the demo, you know, people might've seen, I'll drop this
[02:48:13]  link too. Well, I'm at it. Um, two way binding is a two way street. No, not that one. Uh, client side writing about the JavaScript
[02:48:20] . I, I, yeah. Um, the, the Astro guys were like perked right up and they're like, okay, so this is for us.
[02:48:33]  And then I actually wrote a document that I, I, I don't think anyone can follow this document. This is just like my raw thoughts on, on, on like
[02:48:42]  how we can approach this. This is very, very, very raw. Um, Oh, a thousand people have looked at my raw thoughts. Well, there you go
[02:48:49] . Um, essentially explaining how you could generically implement server components in any framework at a really high level, talking about like the design decisions. Um, so I think the
[02:48:59]  combination of all these things and them getting goaded continuously by then like react and next team being like, Oh, if only Astro could just do this client side thing,
[02:49:08]  they're just like, screw it. We'll do it. Just like leave, leave us alone. Right. Cause like, you don't need client side routing for
[02:49:15]  a lot of experiences. Um, but it's just like, they keep like, there's this like, there's this like gentle nagging coming from the react side about
[02:49:23]  it, you know? So yeah, I'm, I'm very excited about this. Ooh, yeah, yeah, exactly. Analog start. There you go. Yeah
[02:49:31] , there you go. And on one more reason to make that start, that start project. Yeah. If, if we can, it's funny. I'm always
[02:49:40]  like skeptical on the agnostic stuff, but I think this is actually an ex, this is coming from the other side. This is like beat as agnostic.
[02:49:47]  Astro is agnostic. Start, start should definitely be agnostic. Cause it's, it's like the, it's like the framework. It's like
[02:49:57]  the meta framework starter kit, right? Yeah. Where it's like, Hey, pick your favorite framework and then hook it up to start. Hook up your framework stuff
[02:50:09]  and then add in a router that can support it. And you're done, right? You could create preact, start angular start. You could do an inferno start
[02:50:17] . Oh man. I, I just. The funniest thing about that is like the start part does. I don't, I don't know. Yeah, it's fine
[02:50:24] . It just does so much little, like on top of the Astro level. It's just like, let's gear it towards like a single page. Like you
[02:50:31] 're right. Astro might just absorb that piece if it, if it makes sense. If they do, that's great. But if they don't, it's good
[02:50:37]  that it's little, you, you know, you want, you're getting a lot of benefit from a little tiny bit of code. Because it's, it's
[02:50:43]  still suggesting that people bring their own router and build, bring their own everything. Yeah. Yeah. But if you combine that, that initial build wrapper over Astro and you
[02:50:55]  combined, um, bling, you, it's really, you can just basically take. This is the craziest part. You could basically just take like, it's
[02:51:04]  like Vite. You know, when you get started with Vite and you just go start my Vite project and you, you open Vite and then you just go
[02:51:11] , okay, I'm building an app for react. So I bring in react router and then I go and build my app and then I'm good to go. This is
[02:51:18]  the same level, right? Because you just, you'd go, I'm using Astro start or whatever. And then you go, I'm going to use react and
[02:51:26]  I'm going to bring in react router. And then at that level, you'll just have a fully isomorphic like server rendered experience. Like it's, it
[02:51:38] 's not a framework per se. Like this is literally just like all the tools you need to not use a framework. Right. Yeah. It's, it's D framework
[02:51:49]  occasion. Right. It's basically building up the, the Vite server layer. Right. And there's other projects that do that, like V plugin SSR.
[02:51:58]  Um, right. It's just, which is an awesome project. Yeah. I feel like it's, it's a, it's more of a, it's,
[02:52:05]  it's like opinionated and it wants to go higher. It's opinionated and you kind of have to take it all. Right. Yeah. So yeah. Move tool
[02:52:13]  start. Yeah. This, this is, this is why we did this. This is why we did. Right. It's just like jQuery bling. Like
[02:52:20]  the, the start stuff it's within reach to be agnostic really easily. It's not, it wouldn't be a stretch at all. Right. It's not
[02:52:27]  like you're, you'd be ripping apart a ton of solid stuff away from not like from agnostic stuff. Yeah. This is really interesting. If there is,
[02:52:36]  I don't know if this makes sense. I mean, the Astros might not even, but it is interesting if there was like a single, like not this,
[02:52:42]  these two things are at odds a bit. The Astros client side routing. I mean, it's fine. They're two different approaches. Astros client side routing approach
[02:52:50]  here is using dot Astro files to basically upgrade your content sites to have client routing. I think this is a really admirable, like good thing to have. And where
[02:53:00]  we're talking about is basically a starter for any single page app framework, to have automatic deploys to all the different platforms, have a mechanism to, to, you
[02:53:09]  know, do like, yeah, server functions and all that kind of stuff. Well, and again, not to, I don't want to preload it with single page
[02:53:17]  app. It's, it's just an app, right? If you want to, if you want to write it with, from the top down with islands, then,
[02:53:28]  then it's, you know, you can, you can stay like server component. If you want to go island out of the gate and go full client side, then
[02:53:36]  you can, you know, you have a jumping off platform for both, for, for both patterns. Right. The thing is that piece is so reliant on, well
[02:53:48] , it depends. Yeah. Starts or blings only is concerned up to the level of bundling. Whereas like the router is a very important piece of this puzzle.
[02:53:59]  So there's still a lot of details to figure out admittedly, you'd have to have a router that could do both. Right. Um, or at the very
[02:54:06]  least have be an SPA router and you can server into RPCs, you know, because there's at least a couple implementation considerations. I'm willing to approach this
[02:54:15]  in a more generic agnostic approach. My gut is that, we'll see, that's about as high up as we can possibly get. Like, um,
[02:54:25]  but it's very likely that at that point you almost, even then that might be a little bit too much and people might just stop at bling. But you know,
[02:54:34]  it's, it's an interesting idea. Yeah. I mean, I don't think it'd be worth going any higher than that personally. Like, I think,
[02:54:40]  I think that's a good, just a good middle ground to do that and then just stop. Everything else can be, you know, implemented, um, very like opinion
[02:54:49] ated in an opinionated layer. Right. Yeah. So I think we are getting towards the end of our conversation here, Tanner. Any other topics we wanted to touch
[02:55:03]  on? Um, yeah. Is it worth talking about some of these routing challenges? Yeah. I mean, I'm wondering how much we save for like the, for
[02:55:23]  the panel or not, you know, or we can just do it now and just test it out. Yeah. I'm, I'm more than happy to test it out
[02:55:30] . I mean, it's the interesting thing about this panel is that everyone who got invited to the panel was like, I don't know why I'm here. And I
[02:55:39]  was like, I'm like, I was like, well, I have an idea why I'm here. And I know why you're here, Fred. I actually
[02:55:45]  don't know why Tanner's here, but we can figure it out. Right. Because like server components until kind of being pushed into your mind space because of the routing question
[02:55:56] , weren't really something you were too worried about. Right. Yeah. I mean, Theo's not in here because he's already headlining the conference. So otherwise he
[02:56:04]  would probably be there, but. Keynote speaker. But, but like the thing, the thing for me is like, okay, I'm glad I'm here.
[02:56:13]  It's, it's forcing me to reconcile my opinions about react server components and, and form opinions about some things that I didn't want to have to at the moment.
[02:56:21]  Um, but at the same time, you know, if you, if you, if you also had a panel up here of massive cheerleaders for react server components
[02:56:31]  and all you're going to hear is about how wonderful they are and how, you know, the silver bullets and how the world is going to be a better place because of
[02:56:38]  them. And I'm all for how they're going to improve the things that we do. But I also want to come at them with an equal amount of like pragmat
[02:56:48] ism and skepticism, you know, and make sure that, that we're not overlooking certain things. And that's kind of how I've been approaching it,
[02:56:56]  you know, and maybe that's why I'm on the panel. Maybe, maybe they just invited me because they wanted to sell tickets. I don't know. And you
[02:57:03] 're such a nice guy to hang out with. Right. Like I'm, I'm stoked. This is going to be like part two of like Jamstack comp.
[02:57:11]  Hopefully we got me, you and Fred and Theo back. Yeah. Um, but yeah, it's interesting. Cause like, I've been talking about how we can
[02:57:20]  bring server components anywhere for like over a year now. I've been stoked on the concept. My, my work with Marco really saw, showed me the value of this almost
[02:57:28]  immediately when the Marco guys explained what they were doing, um, in 2020 to me. And I was like, wow, how does anyone do this? This is before that
[02:57:36]  first server component demo. Yeah. This was very early. This is very early for server components. Right. Like, so it hadn't even like, no, no one
[02:57:43]  even announced it at that point. So I was like, I was like, this is really cool. And then I saw server components. And it was another one of
[02:57:48]  those moments where it's like, man, they're doing it again. Like hooks. It's like, I just got into something cause I thought it was like a really
[02:57:54]  good idea. You know, like I'm in signals cases. I've been doing it for awhile and then react goes and does something that I never expect. But since then
[02:58:01]  I was like, okay, I see the value here. How does this work? So I've been working on that. So I can understand that. Fred's been working
[02:58:07]  on islands with Astro, which is a very similar concept. So I think it is, I do think there's some relevant conversation there, but the routing is,
[02:58:17]  is definitely the, the linchpin, like the centerpiece. Right. Of this all. You can't, you can't really do server components well, or
[02:58:30]  maybe not even at all without having like a router that is, that can understand how they work and, and be able to like, uh, orchestrate what needs to happen
[02:58:43] . Yeah. I mean, it depends on your implementation, like to a certain degree react is like, oh, it's, it's not about the router, but
[02:58:52]  I mean, the router, no, the router needs to know because the problem is like, like you, you have generally the pattern is you can't have the client call
[02:59:02]  server components. Right. You purposely set up the tree so that your server components are a consistent tree with client islands in it. And you can pass server components through those client
[02:59:12]  islands. But once you're in a client file, you can't be importing it. You can't be passing, you can't be calling it. So the router
[02:59:18]  is a special case where it's like, okay, we are going back to the server. It knows like the way server components work is like an MPA where it's
[02:59:27]  like, all actions are triggered by like typical things like actions or like routing. Like, like you, you don't need to use forms theoretically or anchor tags theoretically, but
[02:59:39]  like you treat it like a router navigation, like navigate to, or like, like, like do said action, like post this or whatever. And you, it's
[02:59:49]  not communication through props and not communication through traditional API. So like, like you treat it like a website that you navigate around and, you know, perform actions on.
[02:59:59]  And that, yeah, that makes it all about the router. And that makes it all about the server. Absolutely. Absolutely. I mean, the router is the thing
[03:00:07]  that's going to be either, it's going to be the thing orchestrating those, those SPA calls back to the server. it's going to be the thing
[03:00:17]  on the other end of the server that is deciding, okay, what am I, what am I rendering? What am I not? Like, where am I, where are
[03:00:25]  my holes? You know, what am I feeling where? And then streaming that back? Like, I don't see how you could do it without a router. I
[03:00:33]  don't know. Yeah. Yeah. Yeah. Yeah. And Nikhil will talk about more and that's why he went into there. Otherwise I feel like the react team
[03:00:40]  would have done it without involving next so much. Yes. Yeah. I, I think. Yeah. It's the timing was like exact. Seb went to go work with
[03:00:51]  the next team and, and like, it was around the time that I was like writing my articles about, you know, how this routing could work. And, and
[03:01:00]  like, basically he, he joined next to basically build this router. Right. Like, like that was the move that he started on the next router. Like he basically switched
[03:01:13]  left meta, went to Vercel and started working on that router almost right away. Like it was, it was within like the same, like month or so. I
[03:01:21]  remember that. And to me, that's like, obviously they're going to make it. So eventually there will be some spec or some, you know, way of
[03:01:31]  saying you don't have to use next. Here's the way to do it. You know, this is the way, but it's really difficult. I can see how
[03:01:38]  it'd be really difficult to do that without figuring out all the pad is exactly how to do it with a kind of a Guinea pig. And next JS is the Guinea pig
[03:01:46]  that they chose. it makes a lot of sense. Yeah. So I don't know. I, I still don't see how it would be possible without router intervention
[03:01:55]  though. And that's the part that I want to nail down. That's the biggest question mark for me about all this. I I'm sold on everything and I'm
[03:02:03]  super excited about bling about my, about my new router. I'm excited about start and astro. Like all of this makes so much sense to me. But
[03:02:14]  the big question mark for me is just like, what do server components mean for my router? Right. Right. Yeah. And the, on the bling comment, it
[03:02:26] 's possible with bling to even just use bling syntax to do instead of use client and use server and generate server components. Like that's, that's one of
[03:02:34]  my biggest interests right there is cause I, I personally am not a big fan of the directives. Um, because just for, for many reasons, but, um,
[03:02:46]  I want, I want to use bling because I feel like it's going to allow us to have a little bit more opinionated control over, you know, the experience
[03:02:57]  and, and how it's defined greenness of it. Personally, if we can figure out a way to make it work with the react server component output, which I
[03:03:06] 've seen a little bit of it now, it doesn't look that bad. Really the bundler is just kind of replacing, um, like element types and functions and imports
[03:03:16]  with this is lazy loading. Right. So I, and react then understands, you know, this new code and, and ships it to the client and the client dynamically imports
[03:03:27]  things. So I'm still understanding the really deep implementation details of it. Well, some of it is still over my head. A lot of it is, I think
[03:03:35] . Um, but that's kind of why it's full circle. Why I've paused on tan stack router a little bit is because these are big considerations to take into account
[03:03:46]  for me to make sure that we nail them down really good. Yeah, I have a good idea on how to make the API work. I think it's, it
[03:03:55]  just comes down to that the router has to control the whole app. Like it has to be the entry point of your app and it has to wrap both the HTML tag entry
[03:04:05]  of your app. And it has to know all the routes up ahead of time. Yeah. Um, I mean, Which is great because I, that's how I
[03:04:12]  built tan stack router to be, uh, from the get go. Right. Right. Right. Yeah. I mean, I'm almost like, I think I talked about
[03:04:19]  this future reactivity. If you're saying universal JSX routing, huh? I have a document for everything, don't I? Um, bridging the gap.
[03:04:28]  I think I covered this on stream in a previous stream, so I won't go too much in detail, but I, I also posted it on Twitter. I said,
[03:04:35]  it's that like, did I not do the diagram here? You need, you almost ignore the price. You almost need a router that gets the routes and wraps the whole
[03:04:44]  thing. And that way you both have the ability to inject the initial outlet for the layout that only renders the first time and you're able to have this router when
[03:04:55]  like subsequent hits, like able to, I mean, there's, there's different approaches. We'll have to see. I'm just trying to generalize. I think
[03:05:02]  the problem right now is like RSCs are too, too magical. Like they have a special route and stuff. And I, I, it's possible that reacts implementation
[03:05:12]  itself makes it more challenging for us to generalize because they do something very react specific. Yeah. Uh, but my, my gut on router APIs, is, is
[03:05:22]  along these sort of lines there. Someone in chat was mentioning that like Ben and Dan implemented RSCs, like on a very, very simple thing where they, they,
[03:05:32]  they were, they made a very simple router that just worked off search params on the same page. There's no URL path matching or anything. It's just literally like
[03:05:38]  updated on search. I think there's a repo for that, but I need to go back and watch the stream, I guess, to, to get that. Cause
[03:05:44]  that might clear some things up for me. Yeah. Find, to have fine-grained repatches. Okay. If the communication there is via query brands, is
[03:05:50]  there a way to have fine-grained repatches? Yeah. That part I'm less clear about because I don't think so because the server tree is continuous.
[03:05:59]  So it's not like it's isolated, right? So like essentially you re-render, like the route sections are isolated. You can say like, I only need
[03:06:06]  to update these route sections, but you don't, I don't think you get much, any more granular than that. Yeah. How would it know all sorts of
[03:06:14]  routes at a time? Well, that's the thing. I don't know. Like the mechanism that we use in, in, you're right. This is where the
[03:06:22] , this is the challenge. I don't understand this question. Like what, why would it not know about all the routes I've had ahead of time? Yeah. I
[03:06:31]  mean, there's two different things, right? There's the file. This is one of the challenge. We talked about this yesterday Tanner, right? Because if you have
[03:06:36]  a file system based routing, you can use that route manifest, both to generate the routes for the runtime router and to do smart stuff. From a pure, um,
[03:06:46]  standpoint, uh, you could, as long as you hoist it high enough up, you always hit the routes definitions right away. But I think there are cases here where
[03:06:57]  like file system routing definitely makes it easier from, uh, analysis standpoint, right? But one of our goals here has been trying to figure out how to make this all
[03:07:11]  work with a file based system routing, right? Like if, if, if, if have it be additive, um, which is an interesting challenge. And one that I
[03:07:21]  think a lot of meta frameworks aren't incentivized to solve, but if you can solve that, then the problem's generalizable, which is huge. Yeah. Well
[03:07:33] , I don't know. I feel like that's, that's going to be the, it's going to be a very valuable piece to solve, right? The difficult
[03:07:41]  problems are the ones that are worth solving. And this is one where like, I, I want to see server components and the routing experience for that get commoditized
[03:07:55] . Um, I, I don't think that the ecosystem of server components is going to flourish if like, if their implementation or usability is siloed inside of, you
[03:08:07]  know, these tools that can afford to implement advanced, these advanced patterns to, to achieve it. Right. It needs to be simple and possible to do it on your
[03:08:17]  own. And I want to be a part of that. I want to, I want to be one of the people trying to commoditize that. So yeah, that
[03:08:26] 's, that's super powerful thing. And I love that we get this benefit of having people like yourself working inside of react, like inside the react community, doing this in
[03:08:34]  parallel to efforts outside of the react community, the coming through solid and through Astro, basically somebody working in the react ecosystem that doesn't work for Vercel.
[03:08:44]  I mean, it seems more and more rare every day, but I know, I know. Um, it's, it's so I, I'm always kind of,
[03:08:54]  uh, this is off topic, but now that I brought up Vercel, I I'm always like really, really impressed with just how fast they can move and how
[03:09:04]  many cool things they can, they can bring to the table so quickly. And I'm kind of like, I'm really impressed and excited about it. And then at
[03:09:12]  the same time, I'm like, oh, but that's so many eggs in one basket. You know what I mean? Um, so like I, I, I
[03:09:21] , I, I'm happy when I see people in the react ecosystem that are pushing things forward and trying hard to do cool new things that maybe don't work for,
[03:09:30]  you know, one of the big co's. Yeah. People having a lot of fun with it. I, you know, Vercel is doing their thing quite well
[03:09:38] . Um, so yeah, it's like, you can see they're building something and they're getting garnering a lot of excitement around it and, um, we
[03:09:49] 're just gonna have to see how that all plays out for everyone. Yeah. Yeah. And I don't, I don't think there's really any chance that I'll
[03:09:56]  be working for Vercel. So you can totally write that off. I mean, unless Vercel wants to magically acquire nozzle, uh, which wouldn't really make
[03:10:05]  a whole lot of sense today. So, right. Yeah. Okay. We've got some questions. And actually this is a good time. Anyone got questions for Tanner
[03:10:13] ? Let's get questions before we kind of wind down. Yeah. So any, any question, any question we'll do. Yeah. So I got the first one here
[03:10:21] . Are you going to use server components and nozzle? Uh, that depends on, on how easy and seamless we can make it, you know? Like if it really is
[03:10:30]  going to be this easy to use server components, um, then, then we might use them. On some pages, uh, I can tell you that we'll most of
[03:10:39]  nozzle is already, you know, written from a very client heavy perspective. So it'll probably be new stuff that uses them and all the old stuff. I'm more excited
[03:10:49]  about utilizing like the, like the, the, the RPC call outs, like into server dollar sign and stuff that that's immediately more valuable and applicable to nozzle than,
[03:11:00]  than server components. Makes, makes sense. Yeah. But you can adopt it as you, as you want it, which is going to be great. Um, uh
[03:11:14] , all right. So we got a couple of questions here. Let's see what we got here really quick. Go dollar sign. I don't know. I feel like
[03:11:22]  if you're on the server already and you already know you're a hundred percent on this. I don't like, I don't even know what that means, but.
[03:11:29]  Yeah. Yeah. That's just like, okay. What? You run server dollar sign and then you just, then you make an API call to your Golang backend
[03:11:40]  API. Um, I think, yeah, I don't know if this is probably not a question for Tanner. Actually. This is probably a question for, um
[03:11:49] , uh, how do I pronounce the name? Orion? Orion. Orion. Yeah. Yeah, exactly. I'm not sure. Yeah. Yeah. Just had a
[03:11:59]  great stream with, uh, Dan, uh, last week about it. Um, they're working on the dev tools. They've been doing amazing work. I'm,
[03:12:06]  I'm very stoked about it's hand stack query. As I said, the resources were only ever meant to be like the low level primitive. So seeing it kind of flesh
[03:12:12] ed out in a full functioning data fetching pattern is really cool. But, um, I, I know they're working steadily on V5. Um, and the new
[03:12:19]  dev tools look amazing. Yeah, they do. I, I want to, I actually want to port the dev tools to an agnostic dev tool solution. Cause
[03:12:28]  they're, they're really nice. How do you balance working on task stuff in your day job and your personal life? So a lot of it is like alignment of incentives
[03:12:37] . Um, if something doesn't make sense to work on, that's going to both benefit like nozzle and hand stack and my family's time, then I don't do
[03:12:48]  it. So that's why I look for opportunities to work on things that will, that will have like a multi, like a multiplying effect, you know, um,
[03:12:57]  something, something that can help everybody by just doing it once. So that, that's kind of the first, the first thing that I do to manage my time after that
[03:13:07] , it's kind of just like the, the best, um, the, the best parable I've ever heard for it is, uh, it's basically like
[03:13:15]  the guys that spin those plates on the poles is you kind of just need to be spinning all the plates of your life. And when one of them starts to wobble,
[03:13:24]  you go over and spin it up some more. So that's, that's the best way to do it. And, and it just kind of fluctuates between,
[03:13:31]  you know, nozzle, tan stack, my family, hobbies. Right. Not so. Yeah. I like this, the spin plate, uh, imagery. It's very
[03:13:41]  accurate, right? Like you, you probably feel the same way. Bling merch. Yeah. Uh, we've been looking at it. David who created the cover for
[03:13:49]  the stream has definitely shared some ideas in solid core chat. I haven't forwarded them to Tanner yet, but lots of ideas coming there. Um, I like tan
[03:13:57]  stack query is why it's using production. Yeah. Tan stack query has been production good for years, right? Yeah. You could say tan stack query is very solid.
[03:14:09]  All right. Ryan asked us a couple of weeks ago, hard or soft shell tacos. Uh, I like both, but soft shell tacos. Cause then you, you
[03:14:22]  take a bite of a soft shell taco and you don't have to be worried if the rest of the taco is going to explode. Oh, yeah. Yeah. Oh,
[03:14:31]  just, sorry. This is, this is trash just rated us with the party 117. So we've got a ton of people just in for our Q and a session
[03:14:39] . Yeah. We were just going through Q and a answering all the real tough questions. Ask some more tough questions. Let's do it. Shell tacos. That's
[03:14:48]  a hard one, but it's not show. Um, but have you ever made, here's one, make your tacos, but instead of, instead of, uh,
[03:14:58]  doing just regular hard shell taco, just dump everything in a bag of Doritos. Mix it up. You'll thank me later. Okay. Uh, yeah. We
[03:15:10] , we talked about worker dollar sign is a proposal we have. I'm yeah. Yeah. Uh, do you think I haven't even read this yet? I'm just
[03:15:18]  putting questions up that as I see them, do you think that react team push for framing, Gnostic use client user are going to work if they do? Does it
[03:15:24]  make sense to continue with bling? Okay. That's a great question. Yeah, that's fair. Um, I'm sure they're going to work just because
[03:15:32]  it's react and what they say the ecosystem's going to do. So they will make it work no matter what. There are a few limitations to it. In my opinion
[03:15:43] . Um, we talked about some of them briefly on here and some of the reasons why we prefer function wrappers as opposed to the directives. And the thing is
[03:15:56] , yeah, I mean, react can do this and all react can do this, but then it's going to be a react thing. Our approach here with bling is
[03:16:03]  like, I've already seen examples with bling in Nuxt. I've seen it in, I think I saw an example with angular. I saw an example with j
[03:16:10] Query. Um, we're, we're like react is the biggest player. So it doesn't matter who else does this, but bling still has value outside of react
[03:16:18]  ecosystem. And I don't know, I'm still yet just undecided on whether reacts use client and use server are good enough pattern for universal. Yeah. That
[03:16:28] 's kind of where I'm, I'm putting my money. I I'm betting on the fact that server components will get bigger than react and that people will end up going
[03:16:37]  for something that's more agnostic. But any other new tan stack stuff outside of the start and bling stuff that we've been talking about. Yeah, tan
[03:16:46]  stack ranger is coming to fruition here. Robert Kolinsky is working on that. It's a fun little library. It's to create multi range sliders. Um,
[03:16:56]  I have some other stuff that I just need. I just need more time before it's going to come to light. But, um, there's probably going to be
[03:17:05]  a tan stack date range or date picker library headless, headless date picking library out maybe in the next year. Um, and, uh, I'm debating
[03:17:17]  whether I'm going to actually relaunch my form library or not, but I wouldn't count on that one too much. Um, there's a new version of react query
[03:17:26]  on the horizon, tan set query. That is, uh, it's gonna, it's gonna be really good. It's gonna get a lot cleaner. Um,
[03:17:34]  I there's chatter in my ear about a brand new course that's coming out to be paired with that. So, uh, it might be taught by somebody that you would
[03:17:44]  be surprised or not, but it's gonna be amazing. Um, and then no, most of the effort is just gonna be on router and table and just kind of
[03:17:56] , you know, ironing out the things that another interesting thing is if the, if the patterns continue the way that they are today, which I think, I think they
[03:18:05]  will, there'll be a place for them. There's two new libraries called the tan stack loaders and test act actions. And you could basically think of those as
[03:18:14]  microscopic versions of, of queries and mutations, uh, but designed to work with the router. Um, they're, they're very, very cool and very interesting, uh
[03:18:26] , little libraries. Very, very, just very much just basic tiny little microscopic versions of query of use query and use actions that have first class support for like route based fetch
[03:18:39] ing. Um, I I'm kind of excited about those. So that's, that's a fun one. All right. Oh, if you could change one thing
[03:18:47]  about react today, what would it, what would it be? Um, I really hate writing use callback and use memo for everything. So react, forget time. Yeah
[03:18:59] . I just think that, um, like I write libraries that handle like large amounts of data and big, big data life cycles and, and calculate a lot of things
[03:19:13]  like, like 10 sec table or query or whatever. And those libraries rely on a certain expectations around, um, change detection and reactivity, change detection. And react has
[03:19:29]  educated everybody in the ecosystem that, that, that is immutability. Right. And so my libraries rely on immutability to know when they need to do hard
[03:19:38]  work and a lot of it. And because of that, anybody using query or maybe not so much query because query, we do our own serialization of query keys. But
[03:19:48]  like with table, you have to make sure that you use memo and use callback things that are going into your table columns or your table data. We're going to
[03:19:57]  think that it's changing all the time. And so from there going up the chain, basically you have to use memo and use callback, everything going up to where it
[03:20:05]  originates. And it's the stupidest thing ever. I hate it. And so many problems would be eliminated if we didn't have to do that. I don't
[03:20:13]  have a solution for it, but I wish. Yeah. I don't know. It's an interesting one, right? I guess there's two. Hold on.
[03:20:19]  Let me re-answer this question. If I could change one thing about react today, it would be that it's solid. Yeah. I was going to ask you.
[03:20:26]  I mean, that's a good endorsement. I was like, is it react, forget or forget react? I think that it's, it's not forget react.
[03:20:37]  It's, you know, it's use solid. Remember, react. Okay. You know, we got to learn from our, learn from the past. Okay.
[03:20:46]  Uh, we can't probably answer every question, but I'm going to keep going for a little bit. Uh, uh, how do you, your docs are amazing.
[03:20:53]  How do you do that? How do like, I just write, I just write them. Um, I like to write them like, like a little story, like storytelling
[03:21:03]  to kind of like, I try and get laughs out of people, you know, uh, so I like, I don't know, writing documentation actually sucks, but
[03:21:10]  when you have to do it, you try and make it fun. GPT is going to make it a lot easier. So, um, yeah, let's see.
[03:21:17]  Kevin asks a question here. I've used react query for three years in product. Yes. Three years. That's not a question, but Kevin Vandy is the one
[03:21:24]  who maintains tan stack table. By the way, Kevin Vandy is a superstar react table, tan stack table guru. So, okay. He deserves your sponsorships.
[03:21:35]  Yeah. Yeah. It's a, is GitHub sponsors or. Yeah. GitHub. I don't know if Kevin has a setup, but if he doesn't, he like
[03:21:43] , should go do that right now. Um, pineapple on pizza. Definitely. Okay. Yep. Uh, sushi or Korean barbecue, Korean barbecue for sure. But if it
[03:21:56] 's smoked salmon sushi, I love it. Yeah, that's a tricky one. But for me, it's, it's Korean barbecue tonight. I, I wasn
[03:22:04] 't sure if it was for you, that question, or if they're asking what I'm having for dinner. And the answer is Korean barbecue. If you ever come to
[03:22:12]  Utah or maybe outside of Utah, a few places is cup bop. Is this Korean, Korean barbecue place. It's really good. Um, what's the next
[03:22:20]  question here? Yeah. I'm scrolling down a bit further. Uh, where am I here? Uh, bling, bling, bling. Tanstein RBG
[03:22:27]  values. There's, there's a question about, I mean, so much information coming from angular, switch to solid. Oh, gear thing. What, what,
[03:22:40]  what, what's this mic and camera using right now? Oh, um, this is a blue Yeti. I've had this one for a while. Right when
[03:22:51] , right when blue came out with the, with this Yeti mic, I got it. Cause it was like their very first USB powered THX certified mic. And I
[03:23:00]  used to do audio engineering stuff. So the thought of having to not have to do phantom power to get a high quality microphone was amazing. So the blue Yeti is
[03:23:11]  actually a really bulletproof microphone. Um, the camera I'm using came from Lumina and yeah, I can't show you the camera, but it's just called
[03:23:21]  the Lumina. Um, X I think is the camera that I have. So yeah, I'm on a Mac book pro 16 inch. It's one of the nicer
[03:23:31]  ones that I could find from Costco. Nice. Oh, what? Okay. Mic drop. Yeah. I think we might have hit the end of our questions here. Um
[03:23:45] , not a fan of Tanner. Is she, you know, both of them being, no, I do not believe. No, but if he was, I'm
[03:23:59]  sure it would be great. Yeah. Okay. I think that's everything today. We still have this week in JavaScript afterwards, but we're going to let Tanner go unless
[03:24:08]  you've, he wants to hang out anymore with me as we talk about Twitter. We've had them for three and a half hours. Really? You want to hang
[03:24:15]  out? Yeah, I got time. I, I'm giving you really special treatment. Usually I like half my streams, like an hour, hour and a half, but
[03:24:24]  I'm like, you know, it's, this is Ryan Carniato. This is, this is really important. Let's block out like five hours. All
[03:24:31]  right. Well, we might run another hour doing this, but okay. Let's, I'll go in. I'll go until my wife comes to pick me up from
[03:24:38]  my office and then I'll just kind of bail out. Okay. Okay. Well, give me two seconds. Well, I get this set up here, but I'm
[03:24:46]  actually think, um, I'm mostly good. I was doing it while we were doing Q and A earlier. So, um, where are we? We are.
[03:24:54]  Okay. Bookmarks. I'm going to, I'm going to do a bathroom break and I'll be back. Okay, cool. Cool. I'm just going to
[03:25:01]  set some stuff up here. All right. Everyone's still alive. Everyone's still with us. Oh, what is new? It's been two weeks. So it
[03:25:18] 's, it's, it's two weeks in JavaScript. And when I talk about JavaScript, I know there's some kind of rust thing that happened, but I don't
[03:25:23]  know anything about it. And I'm probably not going to read it live on stream. I know prime and Theo have covered it. I know not, I don't know
[03:25:31]  anything about rust. So I'll leave that to you guys. Okay. Okay, cool. Yeah. That's where we'll start. Okay. I'm good.
[03:25:48]  I'm good. I'm good. We are good to go here as soon as Tanner gets back. Let's get the banner ready. Get Tanner a moment. I'm
[03:26:01]  good. I'm surprised my headache actually has gone away. Uh, I, I, I was like, I wasn't sure I was going to be able to do the
[03:26:08]  stream. Honestly, I, I took some acetamofin or whatever, um, Tylenol and like at 11 in the morning and it like, wasn't
[03:26:16]  doing it and I drank water and then I like tried to lay down and then I took, um, what's the other one? Aspirin like 10 minutes before the
[03:26:25]  stream. And I was still pretty groggy when I, when I joined on, but I, I'm, I'm, I'm doing good now. Uh
[03:26:33] , oh, we doing chat. It's 12:30 AM for you. Don't do the rust drama. Yeah. I don't, I'm not a, I
[03:26:45] 'm not an expert. I don't even know what's going on. I'm, I, I, I managed to tune that out. There is enough drama without the
[03:26:51]  rust drama if I go back two weeks. There we go. Little plug for our buddy Kelvin. I've been on his podcast before, um, start streaming source diving with
[03:26:54]  Kelvin on Twitch and YouTube. So it's streamer now. Yeah. There you go. Kelvin does amazing learner content. Uh, I, I was on a stream
[03:27:16]  guys from quick been on the stream. Many others. Uh, I think Marco, we had Dylan one time, like great content, uh, asking the framework experts about how
[03:27:27]  these things work. So you can catch his, his streams now on Twitch and YouTube. All right. Yes. Yes. That, that, that, that, that
[03:27:39] , that was all I needed. I think we're going to talk about this, um, next week with Nikhil. Cause Nikhil is going to come on and he
[03:27:51] 's created his own react server components and Vite setup. Um, so I'm very excited to see what that looks like. Oh, wow. Okay. That's
[03:28:05]  dedication. Yeah. Yeah. That is, that is definitely dedication. Yeah. I'm pretty sure Nikhil's gone to bed by now. He, he's, he
[03:28:16] 'd be what? 4:00 AM? Uh. Yeah, no, I love Tashi's, uh, reactive libraries. Very cool stuff. 12:30 AM
[03:28:36]  here. Okay. 12:30 AM. Okay. So where are we now? That's nine hours ahead. So we're talking, where are you? Like France?
[03:28:45]  I'm, I'm glad that everyone is enjoying it. Sorry. We're, Tanner will be back soon here, but you guys are staying on. I guess people
[03:29:03]  like when I interact with chat, then you get this chance of seeing your messages show up on the screen. I mean, while we're at it, you know,
[03:29:09]  like, subscribe, you know, all the fun Twitter stuff that I, or sort of Twitch and YouTube stuff that I forget to do. If you're on YouTube right now
[03:29:16] , you know, and you haven't liked this, well, why not, you know? Yeah. Wow. Yeah. This, did I just, this is late for
[03:29:27]  most people, eh? Like this is, this is dedication. Yeah, I know it's crossed my mind, right? This is, this is just him securing his
[03:29:39]  lineup here for, uh, for getting his, for sell hire. I don't know if they have, if they have people working on India, India. Yeah. There
[03:29:54] 's no good time to stream. I've said this before. It is always really, really challenge, challenging. Um, yeah, Tanner just took, took, took a
[03:30:03]  few moments here. We've been going straight now for like three and a half hours. So. Is this bait? Sorry, Kelvin. I gotta, I gotta ask
[03:30:17] . Yeah, we're, we're gonna do, we're gonna do this week in JavaScript. We're just about, Tanner's gonna stay on for this week in JavaScript
[03:30:29] , which is gonna be really cool. Yeah. You, you know what? Let's add that to the list of bookmarks. I did see that. Let's
[03:30:40]  see if I can find that. I would. Damn it. I'm like not gonna find it now. I saw that. I just, I didn't bookmark
[03:31:01]  it. Okay, cool. Tanner. I was just engaging with chat. Uh, yeah, I'm not gonna find it. It's really cool. Someone made an
[03:31:13]  angular version, like took the solids render and just put angular signals in it. Following what I did with preact signals. Um, that's awesome. Which that is
[03:31:23]  awesome. I, I wish that I had bookmarked it. I'm, I'm like looking angular dom expressions, angular. Maybe if I do angular at Ryan Carn
[03:31:35] iato and then, and then I go latest, I will find it. Nope. Preact signals. I think they mentioned it. No, I'm just not
[03:31:57]  finding it. I'm, I am sorry. All right. It's fine. Oreos look good. Let's get back to business. These are a little too much
[03:32:08]  to be honest. Look at that. Oh, it's amazing stuff. It's honestly a little too much. All right. All right. All right. Let's
[03:32:19]  go here. And I have Tanner Lindsley joining me for a very special edition of this week in JavaScript, or actually this two weeks in JavaScript to be more accurate.
[03:32:30]  Cause I took last week off. So a few conversation topics that happened over the last couple of weeks, but it's, it did start with April fool's day. Basically
[03:32:43]  right after the Friday stream, the next day was April fool's day. There were a few good ones. Honestly, I don't usually partake in it. But
[03:32:53]  we, we definitely did get into it this year. Solid made its first April fool's day joke. I enjoy this one a lot. Big shout outs to Dan Jutan
[03:33:05]  for coming up with this one. We're excited to announce the marquee feature solid 2.0. The create hook inspired where you actually use hook. Create takes a string
[03:33:13]  and generates anything imaginable powered by GTP four. The funniest thing is the funniest thing is this was a completely a joke because you know, the difference of semantics
[03:33:22] , I guess, between like create and use, you know, like it's the, but the thing is we posted this as a joke. And like three days later,
[03:33:30]  Steve. Steve from builder.io actually basically made it. Um, I don't remember seeing his post. I didn't know it was spark and spawned from that
[03:33:40] . I, yeah, I, I, I also did, should have bookmarked that, uh, builder, uh, Steve. Yeah, man, Steve here
[03:33:50] . Uh, he, he, he probably tweets too much for me to find this stuff now. Um, generate figure of designs with AI just by typing a prompt.
[03:34:02]  He just made, he went crazy this week with like a whole bunch of like videos showing off this thing. As I said, we, we, we were kind of
[03:34:10] , um, joking a bit about it. Um, AI opened up new paradigms front end UX streaming quick dev support streaming. Yeah. A lot of people, I
[03:34:19]  mean, yeah, I mean, I have other comments about that. Yeah. Here it is. These five lines of code can crazy use them. Ask, um,
[03:34:30]  this isn't not quick specific anyways, but like he was just showing how, you know, you could, you know, include it in your app and he's been playing
[03:34:39]  with use cases this whole past week or so. So very cool, um, stuff from Steve, but it is funny to me that like, we were, we were kind
[03:34:48]  of just joking about this because, you know, like use or create is kind of like, like what's the thing supposed to do? But, um, April fools
[03:34:59]  is always fun. Um, while I'm here, before we get into the other news, a little bit solid news, um, Arian, uh, tan stack query
[03:35:10] , solid JS dev tools. I don't know if you saw this Tanner, pretty sweet stuff. Um, it's just showing like, yeah. He's even got the
[03:35:22]  new logo down there. Yeah. Yeah. Yeah. Geez. So, yeah, so very, very cool stuff. Hmm. I, I, I haven't played with
[03:35:36]  it, but just quick solid shout out before we get into other news. Um, solid docs, obviously Dan is back with a vengeance. You can see him going crazy
[03:35:49]  on live streams and working on the docs effort, um, and setting up the sponsorships and reminding people of it. We also had, um, finally examples of storybook
[03:36:00]  seven with solid. So I'm very stoked with that. Um, all right. Yeah. That's enough solid news. Let's, let's, let's get
[03:36:09]  into other stuff that, that, that went on. Okay. First, everybody should watch this video if they haven't watched it yet. This is one of the funniest
[03:36:21]  things that I, that I've seen for ever. Um, I'm just going to post this. This, this is just so good. I'm just going to post
[03:36:28]  this link in here because like, uh, they, they basically are doing a between two ferns thing. And honestly, I didn't even know what between two f
[03:36:38] erns was before this. Like I never even watched it or paid any attention to any of this stuff. I just watched this interview and I was just like the ton
[03:36:45] ing and the timing and everything was just amazing. Um, do, oh, I put an extra quote at the end of the link that killed it. And instead of pressing
[03:36:55]  enter, let me try that again. Anyway, um, this is a hilarious video. Um, basically Dax roasts, um, Fred, most of it.
[03:37:11]  And then Fred turns it back around on him at the end. Just check it out. You'll see what I'm talking about. It's hilarious. Um, I also
[03:37:17]  did a stream with Ben Lesh, um, and the angular, um, are talking about signals versus RxJS. I think we've been talking about angular here
[03:37:29]  a bit recently. They are really pushing the envelope on this reactive integration stuff. They're taking it very seriously. Obviously the community from far and wide is coming into these
[03:37:40]  discussions, talking about how signals and RxJS and stuff come in, as I said, not an angular user here. I'm aware of this work because I was
[03:37:50]  working, you know, close to the core team on their signals implementation. But yes, angular is definitely on the move, so to speak. Um, something to pay
[03:37:58]  attention to. I almost feel like it's like, we're tired of being pushed around, you know, it's like, we're going to take this stuff seriously.
[03:38:06]  And, you know, embracing signals. I was just like, I don't know. It's admirable and it's exciting, even though angular is a part of
[03:38:15]  my past. You know what I mean? Yeah, it's so interesting to me. Cause like there's, yeah, there, there's been some, some topics,
[03:38:26]  um, which speaking of angular, zone JS has gotten a lot of criticism, but because of the work on react server components, we're kind of trying to bring zone
[03:38:37]  JS into the browser and into the server environment with these async local storage and async context APIs. And the reason that, um, sorry, where am I? Yeah
[03:38:49] . I'm not quite caught up yet. Okay. Just, yeah. Okay. This, this stuff is all. Yeah. Okay. I was just seeing on the dates
[03:38:56] . The reason I want to bring this up is because as a framework author, it's really hard because you kind of want to support the latest and greatest features and react
[03:39:04]  is going really hard with next and stuff would be like, you know, I assumed it was off the table because this was only available in node, but you know, I
[03:39:13]  saw that cloudflare workers released a version of like node async local storage for cloudflare and because next is kind of strong arming it. And, um,
[03:39:24]  it's, it's kind of, it's kind of interesting to see. Cause like if every platform is going to support it, then I'm, I'm,
[03:39:32]  you know, I want to in, but it's not standards yet. So it's interesting. There's been this kind of dynamic where Vercel has been kind of
[03:39:38]  pushing stuff for next, even though it doesn't exist in the standards yet, essentially kind of like preemptively doing it and then releasing it and then breaking other people's
[03:39:47]  stuff. Um, which has been kind of a challenge here, right? Cause someone's asking, well, how'd they do it? Well, this thread has some
[03:39:53]  aftermath, but basically, um, this drama was from January, but it kind of, you know, came up again because there's, um, we're kind of getting
[03:40:03]  to a point where you gotta start answering, asking the question what these standards groups are doing. Um, cause what had happened was there was some kind of drama and, you
[03:40:13]  know, a bunch of people from different places like Luca from Dino and Matt Cain from Netlify were like, look, my issue isn't with them implementing
[03:40:20]  it. It's them putting it on global this, then making next DS fail on any edge runtime that doesn't have it. You know, they also made a big noise
[03:40:28]  that their edge runtime being standards compliant and working, right? I agree, but don't call your system standard. Like, so there is a little bit of heat, you
[03:40:36]  know, like, they're like, this is fine. Like, no, there's no specification, you know, everybody would implement it differently. And like, this just
[03:40:43]  goes deep and deep and deep. I remember when I, when I, when I saw this discussion and it was just like, Jared from bun and like, everyone was
[03:40:51]  just kind of like, this should be like, you know, where's the drama, you know, for fastify, you know, like this is, this is a
[03:41:00]  couple months old, but my point is whatever Vercel and react or next or whatever have been doing, it's kind of worked because now everybody's just implementing these
[03:41:13]  features. And me as another framework author was like, can I depend on them being here? And I, I went and I talked to Luca and Luca was like, yeah
[03:41:20] , it's coming in a couple of weeks. And I, apparently I talked to Jared and he's like, yeah, he was saying that, you know, maybe
[03:41:28]  winter CG is kind of like, he, he basically said that it's, it's tricky to get these standards to work. And I, I started kind of wondering,
[03:41:37]  you know, like, is this just going to be us implementing node libraries, like node stuff in the browser? Is that what it has come down to? It's like
[03:41:48]  a community of deciding like which node APIs they want. Cause it's like, it's, it is tricky. Cause like as a framework author, like a single local
[03:41:57]  storage or async context opens up a huge DX win. I don't know about the performance yet, but like, it's hard. Like if you want your framework to
[03:42:06]  work on every platform, it's hard to make that decision. Like certain frameworks might not care. They might be fine. Say only working on Vercel, but this
[03:42:15]  is a very awkward thing. And Theo almost subtweeted this, not me, but like this whole thing where he was saying like, let's see if I can
[03:42:22]  find it. It might be giving 10 seconds of what like the the local storage async actually is. Cause there's been a lot of confusion from people about what it actually
[03:42:36]  is. Yeah. Async local storage is the ability to have essentially context that travels over the, the, um, let's see if I can get back here to
[03:42:49]  it. Like the asynchronous calls. Yeah, exactly. So you can start like a request and they do no matter how many, uh, await, you know, async
[03:42:58]  awaits in the pattern, you can just restore and grab that context, which is really valuable on a server where you want to keep the request and not like cross the lanes,
[03:43:06]  so to speak. But like, um, yeah, I'm not going to find it now. I'm a, he posts too much as well. He, on
[03:43:12]  the, on the front end, like it could open up patterns, like being able to use, like, it's kind of like being able to, you could create hooks
[03:43:20] , kind of like a hook based system that works in async functions. If you will, like you'd be able to retain context in your stack based on like, regardless
[03:43:30]  if you're in an async function or not. Right. And it's really interesting even for stuff like reactivity, because you, you, you, with as
[03:43:36] ync await, there's no way to intercept it, like to restore something when the await comes back, you don't get to restore it. Like async await works kind
[03:43:43]  of like a, like a callback stack where like it goes down before it comes back up. So if you're at this stage and then you, you know, you
[03:43:50]  have the context and then you go down and you await, even though technically the code returns, you don't get to like, get into the async tree until it gets
[03:44:02]  back up to you, if that makes sense. Uh, so it makes it very difficult. Yeah, here we go. Here's Theo's. Good web technology works
[03:44:11]  on every info provider, man. I hate the sentiment so much. I don't want to live in a world where the best frameworks are limited by the most outdated providers.
[03:44:17]  I do not support technologies that actually execute implementation. This is not the same thing in provider, blah, blah, blah. I understand where he was getting at. It's
[03:44:24]  not even related, but my actual concern is that, that like everybody implementing something different makes it almost impossible to to have like, it's a moving target. Right
[03:44:36] ? Yeah. Like, like this, this is, this is a challenge from a standard. Like we want, like the first stage is understand the primitives. The next
[03:44:47]  thing is, is the standard. Like, I feel like we might understand the primitives enough now to talk about standardization, but yeah, this, this is,
[03:44:58]  this is kind of a challenging topic still here. Um, because like, like, I understand why, like, look here, they, they have a champion. It's
[03:45:09]  a stage one or stage two proposal now with TC 39. Um, this multi, the CTO from herself. So like, to be fair, like, you know
[03:45:18] , I'd say async cloak storage is always the most useful API with the worst possible name. Now async context is the most useful API and actually good name and has
[03:45:25] , or actually good API and has a great name. Yeah. So, I mean, this is, it is exciting stuff. It's just like, it's really hard
[03:45:33]  to someone trying to like target Dino and Cloudflare and AWS, you know, I mean, they find that those are node, but like, you know, all
[03:45:42]  the different environments and being able to go like, can I use this or not? Like, we need, can I use for edge run times? Yeah. For edge
[03:45:50]  environments. Right. So yeah, this, it seems though, like generally if react wants something bad enough, it will happen. So, you know, there, there,
[03:46:01]  there's a tweet also along this vein where, where Theo wrote something like never bet against react and people like, did you and Ryan have a fight? And it's like
[03:46:10]  that, this is what I meant by like, by that, like what, what, you know, my perception of that is react has such a community poll that like
[03:46:22]  when they added hooks, the Chrome team went and optimized, um, uh, array destructuring. Yeah. Like it was, it used to use an iterator,
[03:46:32]  iterator, like pull like a for loop and literally they announced hooks. And then a week later, Chrome went and optimized it. Right. They saw it and they
[03:46:38]  were like, Oh crap. So I mean, make that faster. So like, yeah, it's, it is definitely a tricky one here. Okay. Hey Austin,
[03:46:49]  how's it going? Hands up. Oh, another raid. Thank you. Yeah. It's, it's crazy how much, how, how much politics can actually
[03:47:01]  get into this kind of stuff. Like which features are going to get developed and, and when and how fast they move. I can't, I can't wait for us
[03:47:08]  backbrothership in the right round time. I mean, this has come up in conversations, you know, it's funny. So like, yeah, this is
[03:47:21]  definitely a challenge, um, you know, in how this kind of fits in, you know, with this moving piece. Uh, yeah. See, I'm almost,
[03:47:33]  that was the first week that I was away and I've almost caught up because on the bookmark side, I got some, a few other things that I thought were interesting
[03:47:41] . One of the first ones, was this, I think this was a joke, but like, I don't know. What do you feel like when you see this Tanner
[03:47:50] ? Like, I, I think that there's probably many of us who have like a top level component that looks like this. And I wouldn't say like, I have
[03:48:01]  one that looks like this. I don't have that many. I maybe have like a half to a three quarters of that. Right. Um, but I'm, I
[03:48:08] 'm not afraid of it. It's not like the people may make, might make the assumption that like, this is everywhere in your application. It's like, no
[03:48:17] , this is, this is like where you set up your providers. You know, yes, you gotta wrap them all up. If you want to build a piping function to
[03:48:24]  pipe them through, you know, like laterally than you can. Um, but people who are like hitting on it for, for like, Oh man, this is
[03:48:33]  so terrible. Um, I don't know. I think, I think we might be picking at some really specifics here. Yeah. It's funny. There's, there
[03:48:42] 's so many responses. I can't find it. I remember reading Danny. Yeah. I mean, this comes back to call back. Hell had this problem. But
[03:48:51]  if I remember correctly, um, Dan Abramoff responded and he was just like, what's the problem? Like he just looked at the picture and he was just like
[03:48:59] , I don't, I don't see what the problem is. Like, are you complaining about something? And it, it is kind of, kind of like that.
[03:49:05]  Cause it's like, yeah, this, this, this, this had a lot of, uh, responses. It's just like this, this ends up in one
[03:49:12]  file. Like who the hell cares? Right? Like, yeah, absolutely. And, and you know what, like if you were comparing this one to one with, with
[03:49:20]  some of the crazy stuff that happens in other files that is actually useful, this is super easy to understand. Like I saw that shirt one. That was funny. Um,
[03:49:29]  but, but like there, there's way more, there's way more weirdness with react in other places that may not visually look as funny because it's not this
[03:49:41]  like indented arrow, but there's, but it's just as much of a WTF moment. What is this? You know? Yeah. I mean, the funniest
[03:49:49]  thing is like this, this literally, maybe, maybe he quote tweeted like this literally took the, like this 232 quote trees. Like this is just such a ridiculous,
[03:50:01]  I hate this in react, but not sure it's a mistake. Yeah. For those who asked for reference. Yeah. There we go. We've come this for
[03:50:09]  a while. It's fine. Context providers were a mistake. No. Work of art. When I see posts like this, I feel a little bit that way.
[03:50:21]  I have a little bit of sentiment there. Yeah. Yeah. Like, uh, I was really sad that there wasn't a query provider in it. Yeah. Yeah.
[03:50:34]  Oh yeah. You like look, went through and you're like, where is it? And I'm like, where's the query provider? Dang it. I didn
[03:50:40] 't make the cut. No, it's SWR. No, it's SWR. Yeah. That's why it looks so bad. Oh. Some said j
[03:50:55] Query was a mistake. This was a good way to reject tech. We couldn't, we wouldn't be using TypeScript. So true. Oh man. The type,
[03:51:03]  visually getting used to TypeScript is a hurdle. I know that it is, but once you get used to it, you love it. I still have problems with like
[03:51:13]  object destructuring and TypeScript, uh, definitions. So that really bothers me. Literally everybody has an opinion on this one. So I guess this is, this
[03:51:23]  is, uh, man. Anyway, the things we talk about, uh, uh, three hours late, start over. No, this is the fun part where we just
[03:51:36]  talk about Twitter at the end of my stream on this week in JavaScript. Um, what else was fun? Okay. Okay. This was not fun picture, you know
[03:51:46] , checking your dashboard one day and finding you out that you have a $3,000 bill in just six hours from Vercel. Um, this, this, you
[03:51:57]  know, this, this, I remember this, uh, post happening right before I would've streamed. So we're catching up on the week, but this is just
[03:52:09]  huge. Um, what is very cool is that, I mean, it depends on how you feel about it, but once this got like, uh, when they worked
[03:52:17]  to support the Vercel team was like, look, we have downstream costs. Like we can't forgive you this because like, we don't like your costs are transported
[03:52:26]  straight to AWS. Like they use other cloud providers. They're on the hook for the bill. They, they have less power in being able to do stuff. So
[03:52:34]  he just put it out and well, um, I saw this. Yeah. Yeah. Guillermo and the team got right on it. So awesome on them. We coll
[03:52:45] ude our analysts. We're funding the overages. We identified the root cause. The root cause is that the app. So this was an Astro app on Verc
[03:52:53] el is the Astro bundle handled deployment processes monolithic. There is a top level of weight for RS point, which API with a fetch. The issue is, is
[03:53:04]  that these two, the rest of the app were bundled together. Therefore, anytime the function was invoked, the top level of weight was running for all end points.
[03:53:11]  It never yielded and it's fully autonomous, which means it ran in a circle. It's kind of, yeah, it's kind of Swiss cheese kind of failure required
[03:53:17]  top level of weight. The monolithic built bundle, RS function using fetch rather than importing. Most importantly, what we're doing is deploy fix that ensures it. Okay.
[03:53:25]  So for people who don't understand what's, what happened is in their bundle, they had, they, they were using like a top level of weight somewhere. And
[03:53:33]  that top level of weight called like the server function, like it's self, like, so they had this loop that whenever a new request came in and it spun itself up
[03:53:43] , it called itself, which spun in the, like, Speaker 1: And just sat there and waited, right? Because it never. Speaker 1: Well, no
[03:53:50] , no, my understanding is, it was that it, I thought it was just, he had a stupid number of requests, even though no one was hitting the API.
[03:53:57]  It was literally just cycling itself. It was requesting itself, which created a new instance that that fetched itself, that created a new instance that fetched itself. Speaker 1
[03:54:06] : Yeah. I wonder, did that exponentially get out of hand or was it just time? Speaker 1: I, I, I think it just was like, it was
[03:54:13]  like an infinite loop. And I think the, the problem here is they were saying it's because that fetch had nothing to do with the, the endpoint they hit.
[03:54:20]  Like it, instead, it wasn't like, it was something to set up some other endpoint, because it was part of all the same bundle. We ended up in this
[03:54:26]  kind of infinite loop. So the way they fetch the data and though like cause this loop of a failure, the, the interesting part to me is monolithic bundling.
[03:54:36]  It's super, super, super, super common in the space for serverless functions. They, they acted like Astro is doing something unusual here, but literally every
[03:54:45]  framework does monolithic bundling, except for maybe next on their infrastructure for, for cell. But it's, I don't feel like it's very out of place.
[03:54:53]  Speaker 1: Because, well, the reason is like Cloudflare, you, you had to make it all into a single bundle and then you do like the Dino
[03:55:00] 's fine. But like, basically most providers don't have like Netlify and for cell have these like file-based like build output styles where you can just put stuff
[03:55:08]  in the right place and it'll all work. And you can have these separate things, but most of the providers are like provide us a JS file, like essentially.
[03:55:15]  So it's like, it's not very uncommon to have these monolithic bundles. It's actually super common to have it. But Astro's topable weight is
[03:55:24]  a little bit unusual, like the way you can use in the components. And, but even then you're like, okay, but it's weird the way that you're
[03:55:30]  able to fetch themselves. So this is kind of the thing. Speaker 1: But what I did interestingly look at is if you dig a little further after a few,
[03:55:40]  a bit more conversation, Guillaume added, we, uh, what did he add? Let me see what he said. Um, let me see if I can find
[03:55:49]  what he said. More explanation. It was a perfect storm. The fetch also needed to have process M Vercel URL. Otherwise the full recursion wouldn't have
[03:55:58]  triggered. I can't blame Mike here. Very tricky to bug, even for the team recursion specials. Value lesson to make platform. So like basically there also was
[03:56:07]  no safeguard to like, which is hard because if you let the end user do what you like, basically the fetch had to be set up specifically in a way that was
[03:56:18]  like cyclic in order to, to do it. My understanding is that the fix from Vercel isn't to get Astro to bundle differently or whatever, it's
[03:56:27]  to make sure that like they could prevent like the cyclic refetch because like you basically never need to do that. Yeah. And, and, and if somebody does come
[03:56:37]  up with a use case to do it, add a flag in that says, let me do it, you know? But I mean, when, when you're a
[03:56:45]  cloud hosting provider, like you're one of your very first responsibilities is, is to make it sure that your users feel like they're in control of their spend, you know
[03:56:56] ? And I know it was the perfect storm, you know, like a very, it was kind of Swiss cheesy a little bit, but I don't think it's as
[03:57:04]  rare as he is making this sound like that it could happen, but I definitely wouldn't put this on Astro. Yeah. It was, it was interesting that there
[03:57:13] 's, there was a few customers who came out of the woodwork once this happened. Um, and kind of tell their story. I think there's always a chance of
[03:57:19]  this when you have this, you're in this situation where you're like re provisioning someone else's service. Like you're in the middle and your, your margins are
[03:57:28]  completely based off how much you like, and like you make on top of like AWS or Cloudflare or Dino or like whatever, Google Cloud or whatever. So
[03:57:37]  like, this is one of those tricky scenarios. Um, this got a lot of attention though. So people are like, could you just like put a money limit on it
[03:57:44] ? Like, I think there's a lot of solutions. The very first time I saw is I was like, you know, I mean, there's a lot of
[03:57:51] , unfortunately, I think there's a lot of like serverless auto scaling systems that don't allow you to put hard limits on stuff, but it wouldn't, it would
[03:57:59]  be really handy for something like Vercel to just be able to say, Hey, you know what, this isn't something that I want to spin up and handle a
[03:58:06]  bunch of stuff unless I'm expecting it. I only want to spend this much money, you know? And in fact, uh, I think there's a lot of
[03:58:16]  Google cloud services that don't let you use their, their products unless you have a limit set somewhere. Yeah. I might be wrong about that, but I, I swear
[03:58:29]  I've seen it in Google cloud. It's like, they just don't let you use certain things unless you set up a limit. Yeah. That's potential. I
[03:58:35]  haven't used Google cloud. Fred also got in and was like, Hey, appreciate the action of Vercel to refund the Astro developer. This is the first time
[03:58:42]  we've ever seen anything like this in an Astro project to recap. Astro builds apps in a single JS for easy deploys across different hosts, right? It's
[03:58:49]  exactly what I just said. Bundling code can introduce subtle differences in prod behavior, which is domino check thing on other hosts. This would have been annoying, but manageable
[03:58:57]  infinite recursion bug, but the combo of infinite serverless scalability, a good thing with zero limit to protect the basic uses is what turned this bizarre bug into 3000 nightmare
[03:59:05] . Yeah, there it is. That's, that's probably the best. explanation of it. Yeah. Um, we're looking at features on the Astro side
[03:59:13]  and you shouldn't have to do that, but I'm glad that Fred would, you know, that tweets are very promising, clever, blah, blah, blah. And
[03:59:20]  yeah, we can add a circuit breaker. Yeah. So that's that, that was the, the, the drama so to speak, but I'm, I'm glad
[03:59:28]  we got to a place where, um, where, you know, it wasn't crazy hostile pointing fingers thing. Um, right. And, and, and it's
[03:59:40]  interesting to think about situations like this. Yeah. Because like that Vercel basically just had to forgive that. Right. And if you're AWS forgiving, that is just
[03:59:51]  like, oh, darn it. The power bill margin went down a little bit, you know, but when you're, but when you're Vercel and you forgive
[03:59:58]  that, you're like, oh crap, that cuts right into our revenue, you know? Yeah. So yeah, it's, it's a different story for,
[04:00:07]  for kind of these services. Yeah. And, and like this, they really didn't have much of a choice at this point, right? Like once it went viral,
[04:00:14]  they had to kind of deal with it. Oh, absolutely. It's worth every penny to get it down as fast as possible. Yeah. Yeah. And that's
[04:00:22]  why they should, that's why he is saying, yeah, we're going to put stuff in place to avoid this because preventative measures are always going to be better to
[04:00:31]  avoid any more incidents like this. Right. So, yeah. Okay. Where are we? We're going up the bookmarks now. All right. Yeah. This
[04:00:43]  one was interesting. Do you see this? Rewrite everything in Rust, they said. They've been doing some incredible improvements to VEET and VEET startup
[04:00:52]  time. Yeah. I, I didn't look any, anything, I didn't look at anything beyond these pictures, but I've been waiting to talk to somebody who is
[04:01:02]  smarter than me about what the heck is going on. Well, what do we, like, I mean, the funny thing is to be comparable, they have to also
[04:01:10]  compare like the, not just like the ES build Rust thing, but also like the fancy stuff like SWC or, um, Babel. So what you're seeing here
[04:01:20]  is that the new version of VEET, the startup time is like four times faster in some cases on cold start. Basically the cold start and the warm start are almost
[04:01:29]  identical. They got the difference down to like 500 milliseconds. Right. So like, this is a huge thing. Um, HMR similar. It's even, yeah
[04:01:42] . VEET's always been good at leaf performance. Um, but not at root performance. So when the turbo pack did the comparison, I remember like on one metric
[04:01:52]  VEET was like basically the same or slightly better. And then, uh, turbo pack was like considerably better on the other one. So I think this improvement here
[04:02:01]  is the one like, uh, that is going to make the, is the big jump. Right. Um, uh, here's the other tools VEET. Yeah
[04:02:10] . See turbo pack. Babel. SWC. So RS pack. That's, that's pretty impressive. Farm. Those ones are new parcel rewritten in rust
[04:02:23] . I think this is where Evan's comment is coming from. Um, web pack with SWC. And with Babel web packs of the slowest, but yeah,
[04:02:33]  this move down for VEET was huge because now essentially they're just saying like, look, we don't need. Because turbo pack next, I believe is SW
[04:02:42] C like, yeah, I like the original, the original performance comparison. Maybe there's some go in there, isn't there? Um, yeah. I mean, S
[04:02:53]  S W C is written in go. If I'm right now, SWC bundler, sorry, bundler, bundler. Um, Rust based. Oh,
[04:03:15]  is it rust based? Okay. One of them was go based. I thought. Yeah. I thought so too. Maybe it was go and then he moved it to rest
[04:03:23] . Yeah. Okay. Everyone in the chat is telling me this thing that it's rust. Okay. Turbo repo was go based. Oh, ES builds the one that's
[04:03:33]  built on go. Yes. Yes. Bill is. Yeah. It's built on go. And so I I've been wondering about this to be honest, because you
[04:03:40]  know, the, the renaissance of like people moving away from, from big JavaScript to actually do all this compilation and whatnot. Like I I've been impressed with all
[04:03:49]  the speed gains that we've seen all these different tools, but I've always wondered, because it's kind of like a pendulum, right? It's like, Oh,
[04:03:56]  let's go see how far we can take this. And then maybe we realize that, you know, w w where's the balance, right? Yeah. It's
[04:04:04]  tricky. Cause the custom plugins written in JavaScript is a huge boon for Babel. It's why we haven't moved, but look, SWC is what like,
[04:04:13]  like the be fair V with Babel is still a tiny bit slower than turbo pack with next. Um, but SWC like does make us a considerable difference. Right
[04:04:25] . And these obviously pure rust frameworks are even, you know, or approaches are even faster, but in any ways, that's kind of what I'm asking this. Yeah
[04:04:35] . I think somebody in the comments on this actually started talking about, you know, like the unseen costs of ecosystem and like how accessible it is to developers who actually use
[04:04:48]  it. Right. I mean, I'm thinking about it even from our perspective, like we're writing V plugins that are, you know, that are using currently they're
[04:04:57]  using Babel to walk the AST and make changes to, to make bling work. Well, because it's, it's tricky to actually like, you have
[04:05:06]  to know rust. You have to write the rust plugin. I like for something like bling, I think we could probably do reasonably well to get into SWC. Like
[04:05:13]  I, I talked to Donnie a while back about like what I would need to do, but like for solid, like it's, it's tricky because like our,
[04:05:20]  our Babel plugin is complicated. Someone started it. I know someone, Milo started it. There is a solid SWC plugin for doing our JSX transform. But
[04:05:31]  like for me, tinkering and working on stuff and like, I can't picture moving it to rust at this point when I'm still like actively improving compilation mechanisms
[04:05:38] , you know what I mean? Like in figuring stuff out. It's like, it's moving the tooling out is, is definitely a cost if you're not going to
[04:05:46]  like, eventually maybe projects get to a point where you have like rust specialists or whatever. But I think it needs to be ripe. Like you need to have enough stability in
[04:05:57]  the ecosystem where it's like, okay, we're not really tinkering so much anymore. We know, we know kind of the plugins and the patterns that we
[04:06:03]  need to support. So we're going to optimize those, but then you optimize as bundling. And then eventually you'll have to unbundle again because you'll
[04:06:10]  need to tinker again. And so it feels like a bit of a pendulum. Right. But like what I got to say here is, and I know maybe turbo
[04:06:18]  pack has some hybrid stuff there too, where they're like, like if, if I can get babble plus V at 48 here, letting me writing all my stuff in
[04:06:28]  JavaScript. Like I think parcels, I forget if parcel has JavaScript plugins and have written rewritten rust, I don't like, I like, we're just seeing
[04:06:38]  the numbers move this way, regardless of like, like they are leveraging rust and go and stuff under the right. But like there, there is differences here on some of the
[04:06:47]  options that let you still get pretty good performance compared to like, yeah, web pack five with, with, with babble. Like, Oh, Yeah. Like if
[04:06:56]  everything's getting faster, at what point does, at what point does beating another one kind of just not really matter anymore? You know? Well, like it depends on what
[04:07:05]  the cost of this build is for you. It might be built time in your CI in terms of slowing down your deployments. But I wonder if that's an architectural problem
[04:07:13] . It might be build times on your own local machine when you're doing development. That could be costly. That could be in, you know, if, if, if
[04:07:19]  it is prohibitively expensive when you're trying to do development, that is very awkward as well because it affects developer time on the positive. If this, this doesn
[04:07:31] 't affect the end user. So I, I, I've been, you know, it depends on the thing, but I like, for me, I would take a
[04:07:38]  UX for the end user over this kind of DX up to about a thousand to one scale. Like I I'm willing to wait a thousand times longer for something to happen in
[04:07:48]  development than what I put on the end user. Yeah. Like, like, like a trade off, like a hundred mil, a hundred milliseconds to the end user,
[04:07:57]  um, is it could be more detrimental than, you know, what I, I, I, I was trying to remember when I did the math, but like, I
[04:08:04]  agree within, within reason, right. I have their threshold for everything. Um, but I, it's kind of goes back to that react thing. Like as,
[04:08:11]  as long as it's good enough, um, then I, I don't, I don't see the point in kind of like quiggling over, over, over a
[04:08:19]  couple of milliseconds here and there, you know? Yeah. People are asking if, if, if, if I do go, the funny thing is I really liked go when
[04:08:28]  I first looked at it like way back, but only tertiary. I just like the, I thought the whole, like, was a co-routine thing, you
[04:08:34]  know, when I was learning about that and generators and stuff, I thought it was really cool the way the communication patterns worked like just the go routines and stuff. But
[04:08:41]  like, I don't know, Greg with leptos, there's something about the way Russ just kept on airing all the time about every little thing that I don
[04:08:50] 't know, maybe, maybe, maybe I'm just looking. Yeah. I don't know. So we're, we're a Golang team at Nozzle. Oh
[04:08:57]  yeah. If you, if you really love go, we, we write a lot of go at Nozzle. All of our stuff in the backend is written in go.
[04:09:03]  So there you go. Really smart guys working on the backend. And girls, they work right over there, but yeah, we love go. And I've learned a
[04:09:13]  little bit of it as, as we've been building Nozzle and I'm, I'm really impressed with it. There, there's one really great thing I like about
[04:09:20]  go and it's the explicit error handling. That's everybody can take a page out of that book in my opinion. Yeah. Okay. Let's what else? Oh
[04:09:30]  yeah. Um, we'll go back to the bookmarks in a minute, but this one was big for me and big for the community. Uh, what's going on
[04:09:38] ? I see more people on Twitch all of a sudden, did I get rated again or is this just people naturally coming on? No. Yeah. Good. We're
[04:09:46]  having fun. Okay. Let's keep on going. Uh, AWS. I don't know if you saw the big thing about, but a week ago, Vercel
[04:09:58]  added streaming support, um, to their, to their, their serverless functions as well. Right now only the edge providers had it cause like Cloudflare and Dino
[04:10:08]  supported, but AWS Lambda not support streaming. So Vercel came up with this cool approach where they're like using Cloudflare workers to do this communication back and
[04:10:17]  forth and like proxying it and came up with like a way to make all your serverless functions work with streaming. And again, next JS, you know, future
[04:10:25]  react, we actually have components, all that kind of stuff. You know, they, they, they, they, they couldn't get the platforms to move fast enough.
[04:10:32]  Um, so they were like, okay, we're going to build it ourselves literally a week after they release. And I know Vercel has been working on this
[04:10:38]  stuff for, for, for, um, months, you know, uh, and the, they, they had released it in previous betas, but like last week is
[04:10:48]  when the solution went public and they did the article posting and all that. AWS releases it and they didn't release it right away. I, I, someone, uh,
[04:10:56]  Dax kind of shared this to me and he's like, he showed me this and I'm like, Oh, I looked at it and I'm like, wow,
[04:11:01]  this is it. Like it was a git commit. And then about an hour later, the official announcement came out and, um, yeah, this, this is,
[04:11:11]  this is big out of order streaming. Um, now supported a bunch of people like, Oh, what's the big deal with streaming? We've talked about it before.
[04:11:18]  This is like feature that front-end frameworks have been wanting for at least a couple of years now. And AWS was like the only platform not, and it's funny,
[04:11:26]  I talked to some people and they were like, Oh, what's the big deal? You can do web socks and all this stuff and they don't get it.
[04:11:30]  This is all about mainly that initial communication. Like after the fact, streaming is powerful too, but this is, this is basically, we want to stream HTML requests so that
[04:11:40]  we can like send back content as soon as possible and fill in those suspense boundaries on that first load. Like that's, that's what's important. It's on that
[04:11:48]  very first page. And right. Yeah. Like you saw them from my web socket stream, like with, uh, people who watch them with live view, there's
[04:11:55]  like a delay. Like you don't, if you care about like page load times, web sockets are like, they're not for your initial render. They're for
[04:12:01]  after the fact it's. And the thing with react server components approach is you end up getting that first page experience on like every subsequent navigation. So you're streaming in the
[04:12:11]  content like, cause you can go to the next server component page, render the static stuff and then stream in the suspense boundaries under there again. So this is something that
[04:12:21]  like Marcos is so funny. Like Marcos wanted this forever. Cause they've had streaming since like the inception 2013, 2014. Um, we added streaming in solid back
[04:12:33]  in, uh, 2020, I want to say yeah, 2020 and again, same scenario, uh, react added streaming in, uh, 2022. Um, you know
[04:12:46] , and then remix a little later in the year, like towards the end of 22 added it like everybody's been waiting on this. Um, so for me, this is
[04:12:55]  like the thing that I was waiting. It was funny in 2022. I was like, I was like 2022 is going to be the year of streaming. Right. Um
[04:13:03] , it, everyone implemented in an AWS still didn't support it. So finally, finally, finally, uh, we have it now. Yeah. Yeah. The kill came
[04:13:17]  on my stream a while ago and did like an example of server sent events. Yeah. Yeah. There's, there's lots of like different ways we can do, but
[04:13:23]  like the same fundamental mechanism mechanism we have to consider here about, um, getting that first initial content in. Yeah. What is SWC? Sorry. I am jumping
[04:13:35]  back. I'm sorry, because SWC is a bundler. They just called it SWC. I don't know what it stands for. It's just a rust
[04:13:43]  based bundler. All right. Okay. So, uh, what am I doing here? Yeah. Big props to Dan on his trip to doing a whole bunch of
[04:14:01]  stuff. He wrote a great article about his journey into open source and he was on Learn with Jason. Um, I want to quickly just highlight this article. Um, he
[04:14:12]  did for those, you don't know, Dan started his journey as a view, um, dev. Um, and, uh, he w he, it was his
[04:14:21]  interaction with Evan Yu directly, like onto GitHub issues that like got him into it. He like, he just, he brought up a bunch of concerns and Evan just straight up
[04:14:29]  just responded to them. Like, you know, cause I guess there's some perception there. Like maybe even from him, like, you know, Evans, like this guy
[04:14:36]  in charge of this huge project, like you don't go talk to the CEO, so to speak. Right. And Evan was just like straight up, you know,
[04:14:43]  yeah, I agree with you and talk to the points. And then Dan was like, yeah, I want to get into open source and do this stuff. So he tells
[04:14:49]  this whole story, how he ended up joining on the solid and Astro and where he's going now, uh, really, really great article. Um, just give Dan
[04:14:57]  a little more shout out. He's, he's been pushing really hard the last little bit here. Um, okay, sweet. Um, before we get to there
[04:15:08] , sorry, this is like a juggling thing. Well, I'm also looking at my bookmarks here. I do want to give a quick shout out. Also,
[04:15:16]  if people didn't catch it on, I quite enjoyed, um, your dev tools, FM, uh, interview Tanner, um, went to a lot of detail. Yeah
[04:15:26] . I mean, we did a lot of this similar stuff today, but, um, yeah. Oh, you know, the funny thing is I'm not going to
[04:15:34]  see the quote tweet now. Oh yeah. What's playing framework and also approach the server components. There you go. Let's see if I can find, let's
[04:15:42]  see two quotes. This, this, we talked about earlier, but for what it's worth, use client and use server aren't intended as react only features exactly why neutral
[04:15:53]  bundles like button parcel are exploring them. We believe they will empower the next generation frameworks, including outside of react. We recognize that we recognize value. And I did talk
[04:16:00]  to Dan about this. I think it's interesting. I could see like if, if we actually have the push that we could use these conventions, the tricky part is
[04:16:10]  we talked about before is like, there are benefits of not using this convention. So I think convention might be where we, we battle a little bit. So I'm,
[04:16:22]  which is hard because then the whole, how do you wrap it up as an NPM package gets fractured a little bit. Um, you, you know, my opinions
[04:16:30]  on that topic though, like, yeah, that I believe optimizing the ecosystem for that use case is my, I mean, might be a mistake. That's, that
[04:16:41] 's kind of where I sit a little bit. Yeah. And here we go. Jared was like, yeah, we, we made ours react, you know, bundler
[04:16:51]  lists. So people are working on it. It's just like, I don't know if the other frameworks are going to play ball here. Like it's not, it
[04:16:58]  doesn't really fit into their perspective. I think. Okay. What do we got here? I just don't buy into that whole important NPM component and just,
[04:17:10]  and then you render it and then it fetches, does things for you asynchronously on the server. I don't know. I could be wrong. Yeah. Yeah
[04:17:30] . Um, yeah. So continuing on with the, the, some of the react stuff, I thought this was interesting. Um, and it's kind of related to the
[04:17:39]  topics we talked about a bit today. Um, the, the, the, they are definitely on a bit of, there's a question about RSC patterns and quick
[04:17:48] . And the truth of the matter is quick does not have RSC patterns as of today. In fact, react is unique in that even with quicks ability to lazy load
[04:17:59] . And I just want to bring up this point a bit, like bring all the pieces in, it's like an optimized version of islands essentially. Like it's like
[04:18:07]  taking the astro idea and taking it to the next level that in itself doesn't fundamentally change the, the point of that. If you take something that, um, is
[04:18:18]  server and put something client in it, you know, like it doesn't change the fact that like, if you were to go to the next location and it's not
[04:18:28]  there, you have to go to the server to render it. Like, like basically you have two choices, load that code into the browser or do a full page reload until
[04:18:38]  you get to this, these new routing paradigms. So I think I only wanted to point this out is that for all the optimization that we're doing here, we
[04:18:47]  still have an architectural problem to solve on the routing side. I think there's solutions here. I just, I think, I don't know what Dan was trying to
[04:18:57]  think. He, he called them out to kind of talk about it. And I, if I remember I said, this comes down to routing, doesn't it? And
[04:19:04]  the Manus is something similar. I look route loader before rendering even in spa so we can run the markdown generator. Like we talked to the last check quickly,
[04:19:10]  it's essentially the first page load. So we remember using full page loads since there's no hydration cost and suffer this problem if you ran the code in the component. However
[04:19:17] , if we like the approach to RCs or spa, we're currently working on a new pattern. Okay. So the reason I like his comment here about route load
[04:19:23] er data, because one of the things people kind of forget about is like some things that could be expressed as server components can also just be expressed as an API. Like you
[04:19:31] , like, this is one of the comments I always thought was interesting about like remix or like I, people like, Oh remix, you know, puts more stuff on the
[04:19:38]  server. And then, you know, my makes my bundle smaller and stuff. I was like, I didn't buy that for a second because like literally anything saving you
[04:19:45]  can make on, from like using remix style patterns, you could just, you're just pushing more, like move the data formatting into your API route instead of into the client
[04:19:56] . Now, now you're not including moment.js. Like you, you always had the ability to push your markdown generator into an API request. Like there,
[04:20:03]  there's always a way of doing this without this abstraction, um, except for what I just was talking about, which is the, that ability to, I mean, even
[04:20:16]  then this abstraction is still basically an API request for markup. So like it is possible to have always done this, but it is the benefit of this is how simple
[04:20:26]  the abstraction is. I just kind of wanted to, I thought this was an interesting point of thing to look at here because I think there's still a lot of work to
[04:20:35]  be done by everyone in this zone. In that sense, react focusing on the architecture instead of work, focusing on the optimization has them in a certain place ahead. What's
[04:20:46]  interesting is when the others actually come up with the architecture to go with the optimization, we might be talking about a very different story because in a sense, most other solutions
[04:21:01]  are just so much more optimal in this, in this space, so to speak, like quick or, you know, the stuff with the islands. And I mean, the
[04:21:09]  island, even the stuff, the islands compared to the server components, like so much smaller, so much less overhead. Um, right. Well, I mean, we were
[04:21:18]  even talking the other day about kind of the trade-offs between like, what, what are you amortizing, you know, out of, out of the gate
[04:21:26]  and versus you're still shipping. Like you, you always have to ship across the first thing, right? Like the first bit of HTML. So you're, you're
[04:21:34] , you're always like doubling up with RSCs on the first request. You got to ship the HTML and you got to remember what we were talking about the other day
[04:21:42]  or something entirely different. No, no, it's similar. Cause I was saying like, what, what if you just, it's not sending server components viewed it
[04:21:49]  as lazy loaded client templates. Cause then the, the code you need for interactivity is scaled linearly. Cause it's not based on component size in a reactive library. Yeah
[04:21:58] . I, so I think that, I think there's some more options here because I think once you get to a point where you realize that it's fundamentally a diffing
[04:22:06]  problem, there's always a way to do something fundamentally better than diffing. So yeah. Yeah. And, and I was really intrigued by your little, your little
[04:22:16]  discussion comment about like the, the template, like lazy loaded template. So yeah, it kind of sparked my brain a little bit on, we, there are a lot of
[04:22:26]  use cases I think where that would amortize a lot better, um, than, you know, than doing kind of this other way around of just shipping markup
[04:22:35]  and diffing. Yeah, exactly. So I, I need to, I need to think of the implications of it. One thing that I do like about the server component
[04:22:41]  mentality is it's because it's the same thing that we've had with islands forever is that there is this clear server client, uh, division in a sense. So like
[04:22:52]  you, you can say like, this is, this stays on the server. Um, but it's possible that with a smart enough system of analysis, if you could
[04:23:01]  tell what is interactive and stateful, the framework could make that decision for you. You know, that's what Marco is doing and that's what, what Quicks premise
[04:23:09]  is as well. But even with that, you still have to handle the routing situation. Yeah. Um, like we've been talking about and just routing is key.
[04:23:20]  Yeah. What do we got here? Yeah. Uh, I saw that one. This was cute. I thought Ben, Ben just got higher follower count than Fred. So
[04:23:34]  again, this is the, for those who don't know, this is from the joke from that video that I showed earlier with, with Fred and Dax about the,
[04:23:42]  the between two ferns interview, do check it out. He made a joke some way along that the, you know, you should, you should make someone else
[04:23:50]  the CEO, you know, that guy with the whiteboard, everybody likes him. Um, so in any case, yeah, there's a question. Uh, Quicken
[04:24:06]  Astro required to use MPU Nation to be authorized. I don't make that decision to me. I don't really, I think that, I think it's
[04:24:14]  possible. Yeah. Maybe that is the right mentality split. I, I I've, I've, I've thought of it very much as MPA plus for react server
[04:24:24]  components. I don't really think of them as single page apps, but mechanically they have all the mechanics of single page apps, even if the authoring experience is almost
[04:24:33]  identical to multi-page apps. So I, I, yeah, it's just some very specialized API routes. So I, I can see this argument and that's
[04:24:42]  probably going to be the thing that eventually unlocks me from where I've been currently thinking about these things. And that's the thing, because Astro's client navigation proposal
[04:24:52] , which is, as I said, based on a lot of the similar thinking that I've been doing recently, um, is really approaching it from an MPA diff
[04:25:00] ing standpoint. So it, even though like, if you, I don't think they're doing nested routing, but if you did nested routing with that approach,
[04:25:07]  which is basically what solid starts islands demo is that we've already made, like the, our like islands plus or server opponent demo, then it is very much, um,
[04:25:19]  MPA plus rather than like, like being like a single page app all of a sudden, like I, I, it's very hard to really categorize them either
[04:25:30]  way. Um, at least from an authoring standpoint, it's why react teams have such a hard time explaining server components. And like, every time they do it,
[04:25:39]  Dan gets a little better, you know, at the explanation and it comes down to, it's way easier to explain them to people talking about it like an MPA and
[04:25:46]  then like, forget about the rest and people like, how does that work? Forget about it for a minute. Just pretend you are writing some server components that have islands
[04:25:56]  and then it just navigates like, like, from the really high, like, like that from the very high level, it's easier to talk about that than talk about
[04:26:05]  what they actually are doing. Um, which is an interesting place for us in this framework lens to get with, because that amount of complexity probably is a lot harder.
[04:26:16]  You know, you lose a bit of transparency there, which is, I'm hoping, I'm hoping we get to a point where we can make things explainable again.
[04:26:24]  I know, I know. Like, I'm crazy, aren't I? I mean, I need to, yeah. I can't even explain. I can't
[04:26:37]  even explain them to a lot of people who ask me about them. So that's why I'm like, trying to immerse myself in them. You know? Yeah.
[04:26:45]  And they're, they're very difficult to talk about because I think because there's such, there's such a blend of a lot of different things. So it's
[04:26:54]  almost like we kind of lack some of the, some of like the vocabulary right now. Right. It's about them. It's that, but also like, we needs
[04:27:05]  to be explainable from a first, like a, like a learner. There has to be like a learner's journey here. Yeah. And I, the problem is that
[04:27:16]  teaching starts from a completely different point than react does today. It starts from like, like a server first teaching, I think, but maybe, maybe that's the problem
[04:27:25] . Like, mate. Yeah. I mean, this is, this is no, I mean, the, the, the DX means that we have to think about it from
[04:27:36]  a server first perspective. So like it is definitely a departure. Yeah. Um, and I think it's interesting to talk about it too, over the entire life cycle of
[04:27:48]  the app, because in the bits and pieces of it, you know, on first load, it's like, okay, let me explain to you what server components mean
[04:27:54]  for the first load. And we talk about, you know, the holes that are created in the markup and the streaming and all that. But then you go beyond that
[04:28:02]  and you talk about, okay, here's what happens after that. And you, you navigate around and here's the diffing. There's so many moving pieces involved where
[04:28:10]  before it was, it was really easy to explain, in my opinion, it was easy to explain isomorphic SSR to a lot of people. Um, because
[04:28:17]  it was pretty uniform and I don't know, this just seems way more multifaceted. Uh, and I think that's why it's a little harder to explain
[04:28:25]  out of the gate. Aaron Alexander: Definitely, definitely, definitely. But with that, I think the last thing I want to shout out, obviously, um, I have
[04:28:36]  Tanner here is we are both speaking on a panel at reactathon. Um, coming up here on May the 2nd, I want to say. Um, so
[04:28:47]  this can be fun. We're gonna be talking about server components and a lot of the topics we talked about today. Um, uh, so yeah, I, let me
[04:28:57]  see. I'm going to pull up reactathon right here. And yeah, I mean, these conferences can definitely be expensive, but if you can get budget, there's
[04:29:10]  some great speakers here. Um, looks like we got David Corset, Theo Brown, uh, Jeff Escalante, who, he was the, he was
[04:29:22]  the engineering director at, uh, at Next, um, well, during the development of the server components. Um, yeah, there's, there's, you know,
[04:29:32]  if you're in the San Francisco area, this could be worth checking out. Oh, Westboss. I didn't even know. Very cool. Um, little
[04:29:41]  reactathon shout out. The last guy is cool too. Sorry. I was just going through it quick. Is TanStack ready for production? I think everyone who asked
[04:29:55]  this is asking about the router because most of TanStack is heavily used in production. If TanStack router is not ready for production. Yeah. But everything else is
[04:30:08] . Yeah. I mean, anything's ready for production. If you're willing to lock it into a specific release. That's true. That's true. Um,
[04:30:19]  Anything's ready for production. If you're willing to ship it. All right. All right. All right. I'm going to zoom back out here. I think
[04:30:29] , I don't know. I, I, I'm not going to cover the rust thing. I did not do it. I know Theo got DDoS pretty hard
[04:30:36] . Um, and he, he was like streaming his DDoS thing. Um, I remember early week, but he's going to cover it better than, than I
[04:30:45]  did. Theo and prime will cover the rust thing way better than we ever could. So yeah, I'm, I, we're, we're focusing on the JavaScript
[04:30:53] . Um, so I think we talked about a lot of that stuff. So that pretty much wraps up this week. Um, I'm good for four and a half hours
[04:31:00] . That was a great stream. You stayed with me the whole time. That's impressive. I think, I think Nikhil is the only other person who stayed on a
[04:31:08]  stream with me like this long. Oh, so I got the staying power for the stream. We can do it anytime. Yeah. Yeah. No, it was,
[04:31:15]  it was a lot, a lot of fun. Yeah. Cream barbecue. That is what I'm doing tonight. I am looking forward to that and we will definitely have Tanner
[04:31:21]  back again. We push more of these things forward, but for those wondering schedule next little week, little while is going to be a little bit chaotic. I'm actually going
[04:31:28]  to pull up a calendar right now so I can talk about it for just a second. I'm going to tell you what, what my plan is for the streams coming
[04:31:36]  up next week, 21st. We're going to have Nikhil come on and we're going to talk about react server components and Vite and talk about all the other
[04:31:43]  crazy stuff Nikhil is doing. Then on the 28th, I'm sorry guys, I am in London speaking at a conference. I will not be around. Then,
[04:31:52]  um, May 5th, um, we're going to have to see, uh, technically I'll be at reactathon and also doing a hackathon the day after I
[04:32:01]  will see if we can do stream on the 5th. Um, so 21st, 5th, then on the 12th, I'm in Belgium. Uh,
[04:32:10]  so I get at a conference. So unfortunately, I can't do it on the 19th. I'm back. It's basically every second week. And then on actually
[04:32:18] , I think I'll be around for the 26th as well. And then from there on the second, the ninth and the 16th, I will be at Amsterdam
[04:32:29] , Portugal, Finland, and then family vacation. So you got a busy, you got a busy time ahead. Yeah. So yeah, it's so funny because one
[04:32:43]  of the weeks I'm going to be back, but I'm literally going to be in Chicago. And then like the only, a lot of those weeks where I actually have
[04:32:50]  a stream of Friday is probably if I have time to prep, I'll be at a conference like the beginning of the week and then come back for the Friday stream. So
[04:32:56]  I'll see if there might, there might be some more, but basically I have a conference every week starting from the 28th, pretty much. Nice. Yeah.
[04:33:06]  A lot busier than I am. I've decided to not be busy this year. I think that's smart. Um, but yeah. Yeah. What's in
[04:33:15]  Portugal? Uh, J Nation. Um, uh, on, uh, it's in Oh, I got invited to that. Maybe I should go. Coimbra.
[04:33:26]  Yeah. Coimbra, I think. Yeah. So that's gonna, that's gonna be fun. Um, Amsterdam, I'm doing JS Nation again, and future
[04:33:38]  front ends in Finland. and then backtracking go to in Chicago. Um, and BJS in Belgium and then react to thoughts on in San Francisco and then IJ
[04:33:56] S in London. So nice. Yeah. Yeah. True. It's solid. Not I'm exhausted just thinking about it. Yeah. I know. I, I
[04:34:06] , I, I, I, I'm, I'm, I'm working so hard on getting this astro solid integration out right now so that like, I can kind
[04:34:12]  of like put it out there before I get busy. Like, it's fine. I'll have a lot of working hours while I'm out, but yeah, it's
[04:34:18] , it's, it's a lot. Um, Um, yeah, exactly. Dan has shown he can pick up the slack definitely. And Dan should be streaming right
[04:34:29]  now. Oh, he is streaming right now. He just started up. There you go. So I think we're going to call this one today. I don't
[04:34:37]  know. I don't think there's anything else here. And I think we can just do tanium. We will send everyone onto whatever content that Dan's streaming. Um
[04:34:49] , so thank you, Tanner for joining me. Um, thank you all for, um, joining us and asking key questions here. I, I, a lot of
[04:35:01]  fun and we'll definitely do this again. So yeah. This is obligatory because of the title of the, uh, of the stream. So yeah, definitely lots of
[04:35:11]  fun. Thank you everyone. See you guys. See ya.