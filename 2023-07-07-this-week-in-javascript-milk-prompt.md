---
showLink: "https://www.youtube.com/watch?v=ZI-BfelG6z4"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "This Week in J̶a̶v̶a̶S̶c̶r̶i̶p̶t̶ ...Milk?"
description: ""
publishDate: "2023-07-07"
coverImage: "https://i.ytimg.com/vi/ZI-BfelG6z4/maxresdefault.jpg"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one sentence description of the transcript and a one paragraph summary.
  - The one sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include timestamps for when these chapters begin.
  - Chapters should be roughly 7-10 minutes long.
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

[00:00:00]  all right and we're live hi everyone it's been quite a while yeah i mean when was my last stream in may i think it was mid-may and before that
[00:00:15]  it was even like three weeks before that so um i'm very happy to be back we'll give everybody a couple minutes to join up here it's been a while so i
[00:00:29]  don't know if uh people kind of lost that routine of coming out here friday afternoon well i guess pacific time or evening east coast or i don't even want
[00:00:39]  to think about europe hi yeah come say hi in the chat hey gelvin yeah yeah yeah no it's it's it's it's good to be back although it was
[00:01:02]  interesting sometimes like when you're away from something long enough you can like find a new sort of appreciation i don't i i think that's the way i'm gonna put
[00:01:10]  it or maybe lack of appreciation of certain things um and i feel like nothing could be more apparent to me on that side is because like i completely like i would as you mostly
[00:01:22]  knew i was doing conferences for a while so i was pretty busy i was like you know poking in and out of stuff but when i went on vacation afterwards i went to
[00:01:31]  utah i went to zion went to bryce canyon went to antelope canyon did a whole bunch of hiking all that stuff i just like it was a road
[00:01:39]  trip like i went with my family my wife and my two kids and i just like was not anything i did not look at discord i did not look at twitter i did
[00:01:52]  not look at um actually for me that's the main two i didn't look at github really i i like i i did not look at pretty much anything during that
[00:02:03]  time period and um it was about two weeks i guess and yeah i don't know if it felt like longer because i feel like like maybe even a bit longer than that
[00:02:18]  basically after you know a few weeks of like barely being present and then you know with you know all the traveling and then and then like two weeks of like nothing i came back
[00:02:28]  and i was like wow this isn't like how i remembered it um especially on twitter um just watching some of the discussions around rscs and all this stuff and i
[00:02:40]  was just like i remember this used to like really get to me but like looking at this i'm just like huh but we'll talk about we'll talk about more about that
[00:02:51]  um um you know through the course of this today's not gonna be a long stream um and by not long you know probably longer than most people stream but still not i there
[00:03:02] 's no five hours today is this lemonade okay no this is um i think it's called suji it's like a it is lem it is lemon but it's got
[00:03:13]  like cayenne and uh yeah it's it's a spicy drink ginger yeah it's it's good yeah i i think i think that that's what it felt like i
[00:03:35] 'm like everybody needs a little break you know everybody needs like a little bit of time um you know like there's a whole bunch of talk about burnout and stuff right and i
[00:03:49]  was like it's so funny i was like like i came back just as everyone was talking about how burnt out they were and i was just like hmm but yeah talk about
[00:04:01]  that a little bit too probably but yeah i i think what's happened is for the first time in a while like the react team has really pushed they're like look we got
[00:04:10]  something new cool and they really pushed on it and you know sometimes when you push on new technology ideas it's kind of thankless people don't give you any respect we
[00:04:19] 've been there right and you know people complain especially if you already have customers who no one wants anything to ever change so it's like it's it's really hard and it
[00:04:29] 's like after a while i'm just like why the hell am i doing this but yeah we'll talk about that a bit too um did i do angels landing in zion
[00:04:37]  uh no did not um i have very young kids and we weren't going to just like leave them at the base there uh but uh actually i should just second i should
[00:04:46]  say and we are live um what's my twitch again twitch just just one sec i'm gonna what are we twitch twitch tv ryan solid yeah twitch tv ryan solid
[00:05:04]  let's let's tweet this um okay um the reason uh let me see here this is actually um at scout's lookout it's literally right before angels landing if we if
[00:05:29]  if you followed the camera off you know this way it it starts to steep climb basically along a ridge which is you know and it drops off on either side but um it just
[00:05:42]  keeps on going off off the side here so to speak um about another i don't know 200 feet um 300 feet um but this is the viewpoint right right before that we
[00:05:57]  came up uh my daughter actually took this shot um uh she's seven but um we we came up right before like the sun had gone high it was like behind the mountains so
[00:06:11]  it's kind of it's really cool walking up uh the kind of switchbacks anyways it's a good hike um little four-year-old did it um mateo
[00:06:21]  which is amazing um i mean he's done probably i'm trying to remember if he's actually done the higher elevation hikes i think i yeah i think this one's actually
[00:06:33]  only about 1200 feet but anyway it um elevation gain but in any case um it was definitely a cool trip and definitely very cool uh um to do all this hiking can
[00:06:52]  nikil joy too we could talk a bit about what nikil's been up to maybe if we find some time he'll he'll come back i'm positive to tell us
[00:07:06]  what he's been working on pretty pretty soon uh he's he's got a he's got another new project i mean surprise surprise um so we we can see who he's
[00:07:15]  up to hey damien yeah no my my vacation was very nice yeah i honestly don't know what this is all about me i was hoping at the milk thing i actually
[00:07:28]  just put in the cover as bait to hope to get people to actually tell me what the hell is going on with it um i have no clue like seriously i i i come
[00:07:35]  back and everyone's like taking pictures of themselves with milk jugs and i was like what what are you guys doing uh yeah but yeah generally i'm i'm doing pretty
[00:07:53]  good i feel pretty rested and energized it was really it was really good i mean i i had some really good news happen in terms of the solid and solid start project right before
[00:08:03]  i went on vacation i haven't shared it with you guys the big announcements coming out either next probably next week maybe the week after but um but we got some uh uh
[00:08:12]  so we got some good news on it and i don't mean like solid start is suddenly out of beta i mean um we we've managed to uh find some more supporters um
[00:08:26]  in it and uh we're gonna we're gonna lay out the plan for solid start in the coming weeks um so i'm i'm very excited about that uh i don
[00:08:34] 't understand the milk thing okay so no one actually knows right is is this the thing because like i i mean i turned over where i saw it first right um i was i
[00:08:46]  didn't actually bookmark any the milk tweets because i was just like what what's going on i think i think for i think i saw adam yeah adam i saw adam
[00:08:54]  post a bunch of milk tweets and i was just like okay what's going on and then next thing i know people are start talking about uh racism or something yeah yeah he was
[00:09:08]  like this like picture being gone for like a like almost a month and being i think like what the hell is like this this okay it's trash trash and milk he started
[00:09:22]  okay well there you go so i'm sorry which prime video oh okay okay okay yeah because i remember theo mentioning somewhere maybe some chat about how it was done um the milk
[00:09:55]  the milk and then um i swear okay see this it's a lot of clarity like i was trying to make a thumbnail and i was like i was like what like it
[00:10:17]  was pretty much like the coming back to twitter was just like what what what's going on i was all these like comments of people burning out and like people like fighting over
[00:10:28]  rscs and then there's milk and i was just like what what what what is going on but yeah so okay so this is all about vitamin d well that's
[00:10:48]  good to know i these things are always silly like that i imagine it's by the time that other people find out about it it's over so i'm gathering that's that
[00:11:00] 's the end of that i mean honestly um yeah i'm just gonna scan back for a moment here because like around the time before i went on vacation yeah let's let
[00:11:16] 's just i guess i actually have a few things to talk about you know beforehand but the video okay yeah let me see if i can grab the video what is this oh
[00:11:45]  okay what the right this is this is july 1st though right the this stuff started at the end of june i feel like like june 26th time period
[00:12:05]  but yeah oh man oh man this is i'm prime had a lot of fun with this so i can tell anyway uh good times why am i looking at tears of the
[00:12:28]  kingdom sorry um uh yeah it's all it's all good i don't think everything is supposed to make sense oh man oh man no thanks thanks everyone for coming and joining
[00:12:46]  me here as i said uh it it's it's very interesting to kind of be really into something like being you know spending a lot of time every day you know and then
[00:13:00]  being away from it for a while and then coming back and kind of seeing things a little differently um because yeah i mean if we go back the conferences um i think last
[00:13:12]  time i i we did a stream it was right before i went to chicago and then i went to amsterdam portugal and finland and um those those all of
[00:13:29]  those conferences are really really cool um chicago i've always wanted to do a go-to um the keynotes at a go-to conference are next level um i
[00:13:39]  mean sometimes they're not even about like directly about development there was a story about a guy who sailed around the world essentially like one man sailing they have a competition apparently and i
[00:13:52]  guess because like there's an event that happened back in the 60s they're like rehashing him he couldn't use any modern equipment and it's a solo sale around
[00:14:00]  the world and he got caught in a storm and it was like crazy story um but um then obviously uh went to amsterdam uh i gotta give it to michko hevery
[00:14:17]  every time i went to a place he had a meet up at that location where he was speaking at and that's that's the way to do it that's that's
[00:14:25]  bloody genius i i i it's obvious but it's like something that that i have not taken advantage advantage of at all yeah bjs was right before i uh i did
[00:14:44]  the last stream i thought um actually you know what let's look it up when was the last stream i thought it was right i thought it was what do we got here
[00:14:58]  what what was the date on this one month ago that's not very helpful may 19th yeah yeah yeah bjs was over um yeah this was right before chicago cool
[00:15:11]  everyone bling was hot yeah i mean it's interesting we can talk about that a bit too if you want um but bling i i i think it's tricky because there
[00:15:36] 's a bundler consideration and it's it's about the permutation of ideas like uh like how how many ways like yeah i'll talk about bling in a minute
[00:15:47]  i i want to i'm gonna keep on the conference thing um for a moment before moving on just because it like helped me kind of get my bearings because like this was actually
[00:15:58]  kind of a cool meetup um the one the quick amsterdam meetup both me and mishko talked at it and um there was like over i'd say like
[00:16:09]  over 100 maybe 120 people at this meetup um and it was yeah it was actually a really good meetup but it actually showed me something that was that was interesting um because
[00:16:21]  i've been i've been giving this talk for a while now of the world beyond components talk and i keep on using this like taste movies app right and you you've you
[00:16:32] 've all seen this taste movies demo right the solid version being that experimental technology that everyone sees and they're like oh i want to use that with solid star and i'm
[00:16:41]  like no no no it's experimental okay actually someone someone shared the actual first milk tweet i need to i need to look at this this helps me a bit this is the
[00:17:00]  same lie big outside has been pushing for years something about eating vitamin if she might want to take a gallon of milk okay okay i see yeah so it was june 26
[00:17:22] th yeah it happened very very fast i think actually you know i thought i saw something that was kind of cool it was from richie or henlon rich why can't
[00:17:33]  i never get his the guy from react what's why rick yeah ricky sorry not richie ricky he actually oh where was it now i gotta like go back in
[00:17:51]  time uh yeah here we go javascript frameworks says milk right jquery angular react view i'm pretty sure solid's not on this list but still very cool to
[00:18:14]  see oh no there we are fair life oh wow so there we are all the javascript frameworks says milk i i this is what i missed when i'm when i
[00:18:29] 'm traveling whole milk low fat milk okay fat free fat free yeah is there some kind of subtext on how much fat the milk has no chocolate milk i don't even know
[00:18:54]  what this is that's a pretty scary looking milk jug that's a pretty scary looking milk jug it's like the darth vader of milk jugs anyway very yeah
[00:19:16]  there's there's there's just too many milk references oh man everyone's just posting their milk memes now here we go thank you anthony what do we got here milk
[00:19:31]  really depends on personal preference see i knew as soon as i talked about something else people would bring it back to milk again right there we go yeah i mean this is something
[00:19:53]  we we consider in our household as well i i i do drink cow's milk generally speaking but my my my youngest has a lactose allergy so um we are very because
[00:20:08]  we you know obviously we have alternative milk products as well for the most part the answer is oat milk okay anyway i don't oh hype train nice and thanks dev for the
[00:20:32]  shout so i could actually like pay attention to it this is always my problem i have to go my way it's the stream yard curse right solid milk should just be cheese
[00:20:45]  yeah there we go all right some people are just intolerant yeah all right all right all right all right but yeah so and yeah i i yeah should we just like start
[00:21:09]  talking the rsc thing i mean i i was just like i don't think there's actually much i want to actually add on the conference i mean there's some cool moments
[00:21:19]  i don't have everything posted like in portugal they did like a fake street fighter battle where they had like even someone in the background like pitching fake fireballs across and
[00:21:29]  um in uh amsterdam yeah this is hilarious but there was a question session afterwards and it like took me if you go around the corner like again off the screen a little bit
[00:21:45]  and up the stairwells the speaker room it like took me two hours to walk from here to like around the corner because of just like the amount of people who are
[00:21:55]  interested and want to talk about solid solid start it was it was really cool there's like over a thousand people at js nation i think there's 15 people 15 000 or 1500
[00:22:04]  um at uh react summit the next day like it was just packed full of people at that conference and um there's so many cool conversations um there's a future frameworks conversation
[00:22:19]  where i was sitting at a table with um you know a bunch of people including mishko and malte and uh oh man i i don't i i don't think
[00:22:28]  it got like i think it got up to the discord like i don't think it got recorded properly but it was it was amusing because it was like there was a bit of
[00:22:36]  a back forth going on between resumability and rscs um and it was like yeah i i to be fair um yeah i i would actually love to have like
[00:22:50]  a twitter space with that again i mean maybe it was just silly in the sense that like both sides are talking about how they're making you know improvements to the way we develop
[00:23:00]  apps and handle things like hydration but both sides acting like the other side isn't solving the problem yeah i don't think it's gonna happen or not at least in a
[00:23:22]  civil way it's i mean i i have to admit i've been in spaces talking rscs with dan and i've also obviously talked tons reasonably with mishko and
[00:23:34]  and even myself who i consider on that scale sort of in the middle neutral i i have a hard time in conversations with either of them you know like it's so far
[00:23:47]  down that path and you're just like you know but yeah i i if you want to hear two people talk past each other um i think that's the space you want anth
[00:23:58] ony i i think you're gonna have a hard time having a conversation where they're actually talking the same language again no no yeah a little bit see i i haven't
[00:24:10]  yes and no no auto rsc is marco old marco but you're right there is and the thing is auto makes like oh it's just auto but like it actually
[00:24:22]  has bigger implement implement uh implications i've actually been thinking recently i like started writing on another one of my like hack md docs where i'm like what if marco was
[00:24:30]  right all along and you guys are like obviously he's gonna write that but no no i'm serious but um maybe more of that and later yeah i mean yeah they it
[00:24:48] 's not that there's too super yeah i mean there are different things in that well i didn't i read an article about this you know i mean this is the ultimate
[00:24:59]  cop-out right but like wait you didn't see that um uh i may have spoiled something there hmm um no one saw anything right uh do do do do where was i
[00:25:16]  looking at javascript framework setting like checking chat to see if anyone actually said saw what i put there no good okay no it's not that one damn it it's
[00:25:30]  the other one it's the patterns if you if the the best way i can put it on it is i don't even put rscs and um like i broke
[00:25:50]  everything into three categories right i said like there's there's routing there's rendering and there's uh like hydration or whatever i don't even put like rscs aren
[00:26:05] 't in the same categories resumability to even compare them that's the why they're not like they don't just solve each other right rscs are primarily a routing
[00:26:14]  concern i know people will tell you otherwise but if you boil it down it's a routing concern it's why resumability like purely resumability or whatever quick does
[00:26:27]  does not solve what rcs do and similarly rcs don't do resumability that's why they're not the same thing because like they literally don't solve the same
[00:26:35]  problem like they one eliminates the hydration that you have like or one like reduces the amount of like hydratable space so to speak speak in the sense like it reduces the
[00:26:47]  amount of like it says this is always server so like it's an absolute cutout of the size of your application and then the other one is like what if the stuff that
[00:27:00]  you do have doesn't hydrate so it's like it's it's it's like it's like different pieces like one is concerned with isolating the code that runs on the
[00:27:11]  in the browser and the other one's concerned with having that code not run at hydration time you could actually put them together but they don't solve each other's problem so
[00:27:25]  i'm there as a moderator yeah well it's i mean yeah i guess you do i was in some dan uh it was like me dan and theo and like yeah do
[00:27:41]  you know what the hardest part is dan is brilliant and when he speaks he likes to get back to first principles because for him it's all a like deriving equation it's
[00:27:51]  all like okay if i have these inputs i get these outputs but in order to establish this i need to actually show you the inputs uh then show you all my work and
[00:28:02]  then go look this is this then this and then this and then at the end you you're like okay and this is the conclusion the problem is and this is a very challenging
[00:28:11]  task for any moderators like how do you cut him off like if you need to like keep the conversation rolling because like if you don't he will go for like
[00:28:19]  10 15 minutes straight um and and the question was like something that seemed very you know basic so uh yeah i think that's the challenge of the space format for this because
[00:28:36]  even when i was trying to like devil's advocate a little bit because like i'm a huge fan of what rcs do and they approach like conceptually it was like still
[00:28:44]  like get your point and then wait like 20 minutes um it's fine i mean my responses were probably pretty long too but you start getting yourself in a place where everyone's like
[00:28:53]  okay i'm gonna speak for 10 minutes now i'll speak for 10 minutes you know um it's i think it was almost impossible it was like valuable for me but almost
[00:29:01]  impossible for the audience to follow anyways um sorry i'm jumping back i need to catch up with chat is there theoretical middle ground where pre-rendering rc enhanced resum
[00:29:13] ably as well yeah i mean certainly the thing is react's perspective on the resumable stuff was like we didn't think it was worth like prioritizing i i have to
[00:29:23]  kind of agree with them from my perspective the routing problems more like in your face whereas like hydration is something but like you can also like if you have a way of eliminating
[00:29:34]  a lot of hydration then like you've already like solved a good chunk of your problem maybe like let's pick up a number 60 okay you know let's say you just reduce
[00:29:44]  cost by 60 70 whatever and then it's like and you get to keep all the things you like resumability itself doesn't make client-side routing work i i think
[00:29:53]  i talked about this before is like there's a reason when i wrote the article about the uh um um what do you call it the uh um client-side routing solid
[00:30:06]  thing uh that i didn't include quick on the comparison right uh what's it called client-side routing without the javascript or something yeah um i didn't include i
[00:30:20]  originally included quick but i didn't include quick on this comparison not because i was like concerned with their numbers which is actually zero um uh for this little app um same ast
[00:30:33] ro should technically be zero too i think um it's because they did it as an mpa um they didn't do it as as a client-side routed app
[00:30:43]  because in quick today to do a client-side routed app you um you you have to pull all the code in the next page you navigate to and the original version of
[00:30:55]  the quick demo did actually do that so when i put them in the table they were like 60 kilobytes or something because um like the even though there's that initial
[00:31:04]  page benefit the second you went to the next page like they had no call like the page gets client rendered so you suddenly need all the javascript code right and because quick
[00:31:15]  has that isomorphic mentality um all the code would chip right there's like we're with rcs or islands you're like this is server only it means it is
[00:31:27]  always on the server uh with the resumability thing it's like yeah whenever you need it whenever you need or at least with quick resumability doesn't have to lend
[00:31:34]  to that but with quick whatever its combination of features is called um because i don't like just calling that resumability resumability is simply the ability to not hydrate
[00:31:43]  it isn't has it's nothing to do with the lazy loading or all the other stuff quick does um and so like you couldn't actually do like when when uh dan
[00:31:53]  had his list of like do you pass the rc test resume like or so quick does not pass the rsc test so from like a prioritization standpoint i could see why
[00:32:07]  i would go that way and i've actually taken the same direction generally with solid but from the like this this is why it's hard to compare these things directly because it
[00:32:18] 's like they're going to just talk past each other i'm just catching up in chat sorry give me a second yeah i mean i didn't have to say it
[00:32:53]  this is this is generally how it goes he'll he'll try and sell you on it and miss go try and sell you on resumability i'm yeah i mean
[00:33:05]  it is yeah and and the thing is though if it was just a deep yeah i mean i've got so much to say about this stuff i think the challenges and i we
[00:33:20] 're looking at the numbers here see i was i this actually gives this full circle to where i was here remember when i'm i was looking at this and i was looking
[00:33:29]  at the the the the quick um thing and the reason this came to mind is i when i was in amsterdam i and it might have maybe was it or maybe it was
[00:33:43]  in portugal i can't remember i i was giving uh uh i i did this talk and i was in the middle of doing the talk where i show you know the
[00:33:50]  demo and show this information and i i went back right at where was it uh sorry was it taste movies and i i realized i was like oh my god i'm looking next
[00:34:01]  but look at this next 13 they've added the rsc demo to the taste movies app someone's made the the rsc demo and i'm like oh man i gotta
[00:34:15]  see the quick ones right here i've got to be quiet now because like like i can't talk about like i made this some you know like i need to update this right
[00:34:23]  because i felt really conscious i was in the middle of the talk and i'm like oh like i was like oh this is next 12 if there's next you know uh 13
[00:34:31]  or whatever it'd probably be better or something or let's let's you know you know and then i looked i'm like oh there's next 13 there so like do
[00:34:40]  i have to throw away everything that i've talked about because right now you know obviously the solid version looks really impressive in this landscape so i was like oh so i was doing
[00:34:49]  the demo again for i think it was for company uh uh i was doing the this they were just interested in solid so i was giving the same talk and it's like you
[00:34:57]  know what screw this let's just open the the the next uh rsc demo and and and just do it live and see what's going on right and obviously you can
[00:35:12] 't actually this is this is unfair because i'm not in a let's let's open incognito window right and i was like okay let's let's do this where
[00:35:19]  was it uh sorry i should have grabbed the link first this is this is this is a good probably indicator that this was not built by versell which i think is kind
[00:35:31]  of the problem here i think i think this chrome demo needs to needs to uh oh what's come on is it like not going to load now it's so funny this this
[00:35:44]  was working okay okay yeah now now the site's broken yeah so there you go yeah maybe maybe they changed something i i i i i i i i did it i did
[00:35:55]  it live and it was all perfectly working and i was just like okay what is going on here because the demo was larger than the next 12 version and i was just like
[00:36:08]  like i was just like i think this is the reason i'm getting to this i think this is kind of first of all it meant that i had nothing to change on my
[00:36:18]  talk but i think this is what's confusing people a lot about the server component stuff is it's very hard to find examples where it doesn't just look strictly worse than what
[00:36:29]  was there before and i jack herrington did a bunch of videos on it and it's like i know conceptually and i've tested hydrogen and stuff like that we
[00:36:39]  should be seeing some benefits but like people are not and like all the examples don't make it look good and it's really hard because you're like trying to push something a
[00:36:50]  technology that people think have to do with performance so like the interesting thing that i've noticed is when i came back and i started like watching you know like the in defense
[00:37:02]  of rscs kind of stuff was people started not pointing at the performance angle like i think which was really interesting to me yeah so i'm catching up people like yeah
[00:37:23]  yeah okay you're talking about going offline first yeah yeah it is old news right that was the thing i'm getting there even though i'm talking a ton about rscs
[00:37:36]  like i have to admit i was kind of tempted not to talk about the rsc stuff and you guys are probably tired of it because you guys are around and i wasn
[00:37:44] 't around for this when this conversation was happening right right rcs htmx now htmx is it's fine i don't i don't have to say
[00:38:04]  much about htmx uh people should go and use htmxer a bit and then i'll welcome them back when they're done um um but what
[00:38:18]  i like what i'm getting at is like the it's tricky when like it's it's funny when you have a new architecture like a new technology it's usually the
[00:38:34]  early adopters that kind of jump on it first and those people care about the stuff like the numbers and like the the potential of it so when you're like when you
[00:38:43] 're attacking this from an angle that's almost like um almost like you know like the incumbent it's very hard to try to sell it the same way like like i've had
[00:38:52]  conversations before theo and he's talking about you know sol and he's like no one cares about the performance numbers anymore and we're talking about quick and like different i'm like
[00:38:58]  yeah no you're right you know it's about usability it's about that stuff but it's a whole different game there's a difference between optimizing something that's already there
[00:39:09]  and trying to introduce a new paradigm and if you introduce a new paradigm it does matter like like like when someone's like okay well let's compare a to b and it
[00:39:17] 's like it's worse like like like like you can't just like like this is why it was funny yeah i think someone maybe it was in one of theo's videos
[00:39:29]  someone was like along the lines was like hey um uh what was it uh maybe i can go to sorry not that's not what i want uh god why am i here book
[00:39:44] marks not that one i think it was was it this one the scary side quote tweets here it is yeah dan shaper said it react didn't make it possible to do
[00:39:57]  things they're impossible before is in a site most statement um by teether in this video what rc is is true every js framework only happens to the platform blah blah blah
[00:40:05]  yeah okay so so on one hand you can say that what you're capable of javascript or like the bottom language because you can always escape into that and that's
[00:40:17]  what you can actually do with any kind of technology like it doesn't matter you don't need rscs but like when you're trying to pitch something like rscs
[00:40:24]  you don't go oh it's just the same thing we're not introducing any new capability it's just you know a different way of doing no no no no if if that
[00:40:31] 's where we've gotten to where we're not trying to pitch this as a complete architectural thing like we're in trouble because it is and if you're trying to treat
[00:40:41]  it like it's not like we're we're like we've kind of gone off like a very different range because like yes technically speaking someone could have done something that kind of
[00:40:52]  acts kind of like rcs by hand and hacked it together and react teams made it easier but that's that's i'm not counting that that's like going in the js
[00:40:59]  framework benchmark and like writing a bunch of vanilla js and not using the framework like that's not the thing if we are getting to a zone where we're trying to say
[00:41:07]  you know rscs aren't letting new things be possible then like no wonder no one like if you have both numbers that aren't things like like numerically that aren't
[00:41:19]  showing improvement and this isn't enabling anything newly possible like why should anyone care i mean like it's kind of like it's kind of like conflicting message right so this
[00:41:35]  is where it kind of crunched down to right the dx story but i mean the dx story better be freaking amazing and the thing is if if the dx story is like
[00:41:48]  we just want async components well that could have done without rcs too it's literally i mean don't get me wrong async in client-side framework stuff is difficult
[00:41:57]  like you need to reconsider the patterns a little bit maybe use a compiler to make the async like use the async await i don't think it's the right pattern
[00:42:07]  in general like like even if i can mechanically make it possible it seems wrong to me in every level because it's just it's basically waterfall inducing like there is no
[00:42:18]  way to escape that that's why as part of the reason why i did that suspense talk i don't know um i don't think it's up anywhere yet but like
[00:42:29]  uh the how do i put it at the the last two conferences i did or at um i did uh yeah i did a talk about suspense showing that how suspense and solid does
[00:42:44]  every single like data loading consistency thing from uh not the js nation version but the version i did in finland and i hope they posted it up um pretty soon uh it
[00:42:55]  might take a while i i use suspense to re-implement both optimistic updates like remix i use suspense i basically use suspense to show how you can basically do everything with the
[00:43:06]  right async primitives you can do the data fetching streaming you can do the whole thing you don't need rcs you just need a good primitive around data loading for
[00:43:15]  suspense that's all you need um so that yeah as i said the talk went pretty well in both locations it was a little bit more technical than i'd like but
[00:43:24]  that that is more core um mechanically but the problem is like yeah i see i maybe this is my short side notes i just want to see a clean solution here that everyone
[00:43:39] 's hoping for i guess like the problem is when you get to a certain point you're just like yeah well if i if i've hit my main objective i'll just kind
[00:43:39]  of like say the rest is good enough right and just kind of go with it um it's it's it's it's it's it's it's it's it
[00:43:58] 's that kind of scenario um um but yeah i i i worry about backtracking and saying things like it doesn't enable something we weren't able to do before because
[00:44:09]  that i don't know it just makes me think of like it kind of cheapens it like i don't know do any of you guys uh watch the witcher uh like
[00:44:21]  the netflix they they uh recently did like a funny ish campaign thing where they're like you know henry cavill's still gerald for season three you know
[00:44:32]  because i guess they're you know people are saying that the season hasn't had as good ratings and it's kind of like what does that say about your choice of hiring the
[00:44:44]  person for season four or five uh liam hemsworth or whatever like i i kind of that's the kind of feeling i get when when when when we start doubling
[00:44:53]  back on the rsc message like what's been happening so i find all the server rendering stuff just about between different approaches or something that many reactives don't need
[00:45:24]  yes that's the other thing right i mean i think this is why i keep on going back to astro right because like astro just picked its thing and does the thing
[00:45:39]  and it doesn't really care you know um just here we go astro breakthrough of the year um it it this this is cool for them solid one last year i think
[00:45:57]  beat one the year before and svelte won the year before that so it's a good they're in good company but um yeah i don't know it's we heard
[00:46:08]  this repeatedly when we were in amsterdam um especially like when i was in that thing the half the table was just like i don't care about ssr i don
[00:46:18] 't want to hear about ssr anymore and i i don't blame people from that but it's kind of like i guess from the framework author's perspectives like is there
[00:46:25]  something we're missing on the client side that like like you can't do today that you're expecting like a huge improvement to but i i mean i guess there is if
[00:46:34]  you were picturing a different future um maybe one that's pitched before i when i was at bjs the first opening keynote um by kyle simpson was about offline first
[00:46:44]  he did a whole talk about a future where everything was like offline first essentially where you weren't communicating with databases everything was distributed you know like it was kind of like and
[00:46:56]  i was like i asked him like how does this work is it eventual consistency he's like no no the assumption is that it's impossible for things to ever be consistent so you
[00:47:06]  know you just try and keep your own best local scope but it was it's a very different look at it um because he was he was he was thinking like you know
[00:47:16]  all the stuff of hydration sort of quotes he just walked by it it was very interesting obviously because um myself and michiko were there as well and you know stuff and the opening
[00:47:27]  talk basically saying like yeah all this stuff just doesn't matter um i don't know i agree with the conclusion but there are a lot of people who really just don't have
[00:47:40]  need for this uh you know server rendered stuff or they do it's very limited scope so they they might grab an astro site and then you know somewhere in their ast
[00:47:49] ro site be like oh here's all my content marketing now i need an app piece here i'm just gonna go client only and put an astro tag on there and then
[00:47:57]  you know that's that's good done and that's interesting like this kind of split there right um between you know people like there's all those people are still on cra
[00:48:10]  they have no migration path right like how do you get from react clients thing to now react is only true thing when you're using next yeah i don't know in this whole
[00:48:24]  server component thing is is is is kind of i think you guys in chat are already kind of sick of hearing about it right i'm getting that that thing here yeah i
[00:48:45]  mean let me i'm just catching chat here yeah what what time we yeah so i'm six minutes behind okay from people who actually i mean do you know what the problem
[00:49:03]  is of course it's not a big problem now it's it's like everything right ask someone before a few years before remix if waterfalls and react components was a problem like
[00:49:15]  almost like react router 4 wouldn't have happened they would have kept the old api if they were worried about waterfalls but they're just like oh you know collocation good
[00:49:27]  enough blah blah you know i don't trust people that have that early thing the problem with the waterfall stuff isn't that like someone who's developing their app is going to
[00:49:36]  just like make out water it's when you start going oh i'm going to use rscs as like components that i install an npm that's when stuff starts hitting
[00:49:44]  the fan like really badly because then you start getting these dependencies that you're not even less maybe not necessarily aware of condition when you're driving the conditional logic of your app
[00:49:55]  to determine when things fat like yeah there is there is some serious issues here and yeah yes i mean there's there's huge irony here because yes islands and rcs are basically
[00:50:11]  the same thing um except the client side routing fundamentally changes what you can do with them we've never had been able to apply mpa optimizations to a client-r
[00:50:27] outed app before and it has huge implications because the state preservation is a game changer but it also changes all the rules yeah we can talk about that i guess you know
[00:50:53]  like i i i watched those like two theo videos and i was just like it's it's it's challenging because like obviously there's like good points there like about like
[00:51:08]  the the they're they're yeah let's maybe we should just look at one of them yeah there's a lot of really good comments in chat that's what i'm
[00:51:24]  doing yeah see this this this is the implementation thing is the is the is the is the problem i'm glad you focused on this um because like if the numbers or something positive
[00:51:38]  was coming out of even a tiny bit like 10 just something beneficial in any way people would be like oh yeah okay i can see where you're going worth it but the
[00:51:50]  the problem is like when it incumbents did have a history of not improving uh performance over time it's more likely the new thing improves performance and then they it slips over time
[00:52:04]  like and the problem is like even hooks actually improved performance when hooks came out performance of react apps improved benchmarks improved hooks were actually important this has this actually should reduce hydration costs which
[00:52:16]  i believe it does i think you will see lighthouse speed things but it's very hard to tangibly see the same kind of improvement this has been this is very it's
[00:52:24]  not the thing that's easy for people to validate themselves which is the problem even if there are gains here this is this has been the problem because people do the stupid test they
[00:52:33]  do like how fast can i update a text node like it's that kind of thing it's like it's the same reason why a concurrent mode is so hard to think because
[00:52:41]  concurrent mode isn't a performance thing this one however should be do rscs give us on this else expensive stream we do not yes yes they give you partial hydration with
[00:52:54]  client-side routing we have a experimental version of this but yes solid by itself cannot do what rscs do we do streaming and we do and like a whole bunch
[00:53:03]  like there's a bunch of stuff you could that you don't need rscs to do like a whole bunch of stuff you know and reacts tied it to rscs
[00:53:12]  which you know for better or for worse but the thing is like remix is gonna untie those things the problem is like yeah you know what let's just grab a theo
[00:53:22] 's video for a moment here let's let's let's look at theo's latest video for just a couple minutes and then we can we can we can yeah yeah sorry i
[00:53:32] 'm i know it's not the notifications i want it's the bookmarks sorry this one right okay let's let's let's play this for a moment if you know
[00:53:44]  anything about the channel you know we love bleeding do you can you hear it like in edge technologies but do we what does bleeding edge even mean and what makes a technology more bloody
[00:53:57]  than another what does it mean for technology to be bleeding edge and risky and how do we make considerations around the bleeding edges of different technologies to make the best decisions for our teams
[00:54:07]  our code bases and our businesses i want to talk a bit about this both the definition of bleeding edge and how we can learn from that to build better things with the tools
[00:54:15]  that we have let's talk about bleeding edge is often the term people use to describe the stuff that's one step past what they're comfortable adopting which means to everyone it means
[00:54:24]  something kind of different i'm going to propose a very specific definition here bleeding edge is technologies that we are not sure will have meaningful adoption in the future the reason i think it
[00:54:33] 's important to make a distinction like this is i think there's a huge difference between tools like react server components and next versus tools like spelt kit or solid start i
[00:54:43]  there is a huge difference one is an architectural uh change that hasn't been proven and the other one isn't the other ones are smaller versions of optimized things of things that
[00:54:59]  already exist right it's kind of like choosing preact instead of react let's continue i'd even argue there's a granular spectrum here where certain technologies are significantly more likely to
[00:55:16]  grow and maintain massive adoption and while i understand hesitation in trying new things like server components i think there is a massive difference between somebody adopting the new server component patterns versus somebody
[00:55:26]  adopting speltkit or solid start the difference yes okay yes so far i'm agreeing with him but i don't think the conclusion that he's going to make is that
[00:55:35]  i actually think i might be agreeing with him in the the complete opposite way being that these new patterns are part of something that's already the incumbent it's already the winner okay
[00:55:44]  ah i see yeah see but it doesn't really work like that see if i mean if remix and gatsby and others pick it up then i can see an argument
[00:55:57]  but there is a future where no one picks up server components and they just die out or at least this version doesn't succeed and we go v2 and we do it again
[00:56:05]  i i think assuming even within next itself assume that everyone just is going to pick up rscs using next i think is a pretty big assumption here and i think it's
[00:56:16]  a riskier one because it's architectural because it's not just the buying the next but the buying of the ecosystem okay so far yeah like like don't get me wrong
[00:56:27]  like salt start it says beta on it like obviously but like picking svelte see i know here's the thing i i know theo he he would pick svelte here
[00:56:39]  and he put salt on the thumbnail very clearly because he knows this will get a reaction you know people will talk about it um but like that's why i use preact
[00:56:49]  as an example here again like it's picking something like svelte kit which is basically just another version it's like remix or like another version of for the most part something
[00:56:59]  that we already have an existing architecture that we understand that people use uh you know that's a fairly safe bet it's it's like it's like picking ember in 2012
[00:57:09] . like don't get me wrong you might be looking in 2023 and be like god ember i'd be it'd be horrendous if i was on ember right
[00:57:16]  now but if you picked ember in 2012 or 2011 or whatever and you were using it you'd be like okay pretty cool you know um first couple years good alternative hot like
[00:57:27]  it would have been very good for a while and it's only you know i i actually think comparing to ember in 2012 was probably like the worst case scenario i think
[00:57:38]  svelte's already in a better position than that but like essentially at the worst case scenario eight years later or so you might be like yeah i i probably want to move
[00:57:48]  to a different technology that's a little bit more modern or whatever like you know not everyone not every choice ends up being a react so to speak but like that's the worst
[00:57:58]  case scenario here whereas if you pick an architecture that no one else adopts like like like like marco like you can end up in a place that like like there's
[00:58:11]  just you know it's it's like it's like a forked reality okay let's let's continue yeah ember looked good in 2012 that that is my point right
[00:58:24]  like like i'm saying svelte looks pretty good in in 2023 it looks pretty good in 2020 and 2019 like svelte's been around for like what salt four has
[00:58:33]  been around now or three's been around for four years but svelte's been around for seven but let's ignore that let's say 2019 on svelte's been
[00:58:39]  a pretty good choice four years later i think it's pretty like don't get me wrong job market's a different deal what availability i'm not telling you what to learn
[00:58:49]  for this but when you're talking about any argu arguments saying that svelte kit isn't a good choice is i know i'd be skeptical at best like i if if
[00:59:06]  we're not yeah and let's let's let's let's continue the growing solution the big solution and it's not going anywhere even the new pieces that you're betting
[00:59:25]  on aren't necessarily going to be the exact shape things end up in you're still betting on stuff that has a backing to put it frank those bets are much more responsible and
[00:59:33]  when you're betting on bleeding edge stuff you have to be careful about what you do and don't adopt and you have to be really considerate about why you're making these
[00:59:40]  bets when you bet on react and the stuff that's going on in the react community you're not making a really risky bet and that's okay if anything it's probably
[00:59:47]  a good thing and it's incredibly frustrating to get in a conversation with somebody that is treating a brand new framework someone made for fun as the same tier as server components because oh
[00:59:57]  i don't like trying all that risky new stuff the risk isn't in the thing might be broke yeah okay yeah i don't even know if i need to listen to
[01:00:07]  the rest of this uh yeah i mean i can understand why it's frustrating and honestly i think i'd love people to try rscs like i think it's i think
[01:00:18]  there's like i i'm encouraging new technology i just think that the fact that we've gotten here and this is the dialogue that happens means like something is not going right
[01:00:28]  or you know like man i make theo should make more videos like this uh i don't know is there anything else in this video okay when you adopt it and now your shit
[01:00:43]  falls apart the risk is where is that thing going to be next year realistically the react ecosystem will be here next year and it will be here in 10 years and it'll be
[01:00:50]  here in 20 years the same way we can't get rid of php or jquery there is no guarantee that spelt kit or solid start will get to the
[01:00:57]  point where they are the next jquery as long as you bet on things that reasonably can't go anywhere those bets aren't that risky right yeah i mean all in all
[01:01:05]  seriousness obviously react is a safe bet in general like it's just like at a certain point you know like when everyone was when solid was getting a little hype and people were releasing
[01:01:17]  those articles that were like um you know the next thing has to be 10x better you know like and and and i was just like when when people feel like they have
[01:01:25]  to remind you of that you know you've already won like that or that they they're already flailing like things are already not where they should be um there's just no
[01:01:37]  need um so like i think i i yeah i think this is clearly going to be a difficult few months coming up ahead if we're at a point where we have to like
[01:01:48]  kind of put this out there on the table um i know i'm excited because i said i there's a lot of good stuff coming up uh with solid but like as
[01:01:57]  i said like svelte kit is a pretty you know sorry the pun solid choice you know um so i don't know i i think i'm probably done with this video
[01:02:08]  i it's just yeah oh how's chat doing i think rc is not that no i mean probably not but it's one of those things with like okay picture reality
[01:02:30]  where like gatsby and remix and everyone just kind of like drag their feet here just because they're like look we we're not into this we we like because of
[01:02:41]  next js and the desire there but like what i there's no alternative but like if there was any alternative that shun the light in a different way like i i think anything
[01:02:53]  associated with react is not is a fairly safe bet but like calling out say um like as being any less safe is i don't know i i have a very hard time
[01:03:09]  with that like i i feel like i'm relatively realistic with this stuff and that's why i'm i'm always so like careful on when i release stuff and when i say
[01:03:18]  it's 1.0 or all that kind of stuff but like the when you think of the world that react was born into and i know this isn't that world anymore
[01:03:29]  people trusted software projects on things that were way less mature so i i don't know this whole maturity thing both working to and against rscs is all just overblown
[01:03:39]  as far as i as i'm concerned i i don't think i i don't think rscs are necessarily unsafe but i also don't think that like going the other
[01:03:48]  way and calling other stuff unsafe makes any sense either like it's like we're at a point now where you can just not choose react and be perfectly fine and we're
[01:03:56]  at a point where you know you can choose rscs and also be perfectly fine yeah what do we got going on yeah yeah i mean i mean that's a
[01:04:43]  i mean there's a difference between versell and next and versell and svelte a little bit but yeah generally speaking svelte's getting good support it's it
[01:04:54]  needs support well that's the challenging thing when your framework like this is it's important you need support otherwise you're just like there's like there's just work has to
[01:05:03]  go in right and it people use it so now you're like you have to support those people who use it so like it just yeah i mean i don't know maybe
[01:05:19]  i'm just like too much of if there's a will there's a way also about svelte uh let me see what that says sorry svelte i could
[01:05:46]  put any new experience there but yours is the coolest dog yeah yeah yeah don't don't don't don't get me wrong i i if i sound like i'm a
[01:05:55]  theo's video is also you notice how he said svelte kit and solid start repeatedly in that video and not other frameworks that he could have chosen like this is very much
[01:06:09]  a uh he he you don't he he he he understands the weight of his of his words so like what it's not just to he he's he's he's
[01:06:21]  by choosing svelte he's showing svelte actually an amount of respect here because he he's he's actually highlighting it and drawing a bunch of attention this is meant
[01:06:31]  to be a little bit spicy so um by doing so he's also drawing attention to svelte and he's included solid as well like don't he could have not
[01:06:41]  included solid here so like i'm very like i'm not like they don't think the stuff that he's like looks like he's being more critical of he doesn't choose
[01:06:51]  selectively as well like this is this is you know what i mean like it's it's not a bad thing to be in the video so to speak i was more
[01:06:59]  saying that like i i think the whole argument is kind of like we're getting past like i don't go wrong salt start is completely beta so i can't like say otherwise
[01:07:10]  but i'm just saying like we're getting past like in general like how many years of svelte do you need before svelte is you know a real framework you
[01:07:21]  know like we're getting past this i'm i which is why for the most part i'm just like uh come on like it's it's more interesting that we get
[01:07:30]  here because like i always look for indicators when people on the kind of react camp decide that they're going to like defend react like in this sort of manner because it's it
[01:07:40] 's always a good sign for us right this is this is a like it's either you can either view it as like a symptom so it's like a good indicator or
[01:07:49]  it's or you can view it as like uh something that actually has a causal effect of like actually accelerating or amplifying that so yeah but it's also like why i was
[01:08:03]  tempted like like this video has a bunch of stuff in it too um and i'm you know like we don't need really to go into it anymore i you know yeah
[01:08:21]  he didn't say hd max and quick yes he did not what's my opinion view i use that with their own body gradient no view view is gonna view is in
[01:08:45]  an interesting spot right now because i feel like view is like picking up a lot of the slack and nux and stuff i think while people are frustrated with react it's like
[01:08:53]  the most obvious choice because i think what people are doing right now here's my gut and you guys can tell me if i'm like completely off people are getting frustrated with
[01:09:01]  react they're going to try the really new hot stuff like solid maybe svelte maybe even quick and then they're like yeah i'm understanding how immature these ecosystems are and
[01:09:14]  then they go back to view i think that we we went through this like a little cycle here um i know that because i i we do keep a lot of the new people
[01:09:22]  people doing stuff that's not terribly ambitious or they have a real reason like performance matters to them those people stay with us but we've had a few people kind of kind
[01:09:31]  of dip in and then end up back at view and i i think this is the pattern more less people probably on our side than maybe on the svelte side because view
[01:09:38]  and svelte are more like you know kind of philosophically aligned but i'm getting the impression that view's probably having a little a nuxt or probably having a
[01:09:48]  nice little burst right now well but i i feel i feel like a lot of the people like it's a good opportunity for everyone right now but i also feel like it's
[01:09:58]  kind of unfair because like view is going to release vapor which is going to shake stuff up again people aren't really understanding that view and say nuxt are maybe not as
[01:10:10]  tight as like react and nexus maybe that's a good thing um uh like i think all these changes that are coming are actually really good for everyone i'm just saying like
[01:10:22]  i think like even people moving to solid right now you know and they're like look it's because solid so good blah blah blah and none of this rsc garbage it's
[01:10:28]  like well i mean we are looking at stuff like rscs like this is definitely of interest i mean one of the things that i feel like right now when i'm like
[01:10:35]  looking at like ssr ssr in general like as we know it like the isomorphic stuff that we do is kind of one of the most brittle things
[01:10:42]  in the world the hydration and all that is really quite brittle so in a sense when we work on these partial hydration solutions in theory i we're actually reducing the surface area
[01:10:53]  of the really brittle like flaky stuff so yeah i mean it's interesting saying other names would be punching down yeah no exactly so i mean that means that um saying uh solid
[01:11:11]  or svelte aren't punching down which means so i mean that that's that's legit thanks theo this is this is what i'm getting at anyway um yeah this
[01:11:31]  this rsc stuff's been um been i can understand like why like we haven't talked about too much about the hostility there but like i don't know like this is
[01:11:42]  this is this is this is uh you know i saw this right and i was like wow this like this is a lot like maybe two videos or a few months back yeah
[01:12:02]  i mean that's an interesting one because i i've been asking myself the other question like yeah i wonder if theo would have made that video though just because he he's made
[01:12:30]  the bleeding edge responsibly video before right like yeah i don't know i i think rcs are one place where me and him don't see eye to eye so i can
[01:12:42] 't actually speak to that like we both have to think very positively of them or at least of certain components in general but it's the perspective of where things are at i
[01:12:52]  think we aren't quite on the same page um are you involved in christian blink yes um bling was actually just solid start like it was actually just our compiler level
[01:13:05]  and then uh nikhil wanted to extract it and tanner wanted because tanner wanted to use it too and then they kind of did it but like basically um i'd built
[01:13:15]  a proxy version of a lot of this stuff and nikhil was like i was like why can't we just do this and he kills like well the compiler we could and
[01:13:23]  then he built it basically it was based off a conversation where i was like pitching something about like our rpc uh stuff right so the yeah uh it ended up like it
[01:13:35]  started a couple years ago in a sense but then we finally decided to pull it out and then i bling actually was my bad naming i actually came up with the name
[01:13:44]  because i they weren't sure what the call and i'm like i started to i said code name bling you know because all the dollar signs um but yes uh we're
[01:13:54]  still kind of figuring out exactly what to do with that um my my whole idea around marco maybe was always right it kind of relates into that but i don't know
[01:14:05]  if i'm going to get into that today yeah that's an interesting idea the thing is our primitive were roughly based off what uh was already found in the react ecosystem but yeah
[01:14:22]  they chose to not do the data fetching for suspense until they figured out rcs because they want to avoid waterfalls on the client the funniest thing is if you as
[01:14:30]  i said if you ultimately want to avoid waterfalls you have to fetch higher that's just math you know i don't know or physics or whatever reality yeah that's an interesting
[01:14:45]  one um so to speak but like i don't feel like i'm biased by that and i'm personally i felt there was a shift in messaging around january i can
[01:15:00]  almost pinpoint it to a week so i don't know um yeah that's interesting yeah everyone seems super angry lately yeah i mean this is this is what i came back to
[01:15:32]  and this is what i was talking about with people being burnt out like i still have program i'm burned down on programming discourse at least good energy playful version of what it should
[01:15:39]  look like i think this is is this why danny remoff's on blue sky now or like change the thing same i'm feeling burnt out everybody's burnt out uh
[01:15:48]  it's funny because svelte 4 came out like also during this time period which is absolutely you know you know actually this this got really undershadowed for me i don
[01:16:01] 't know why was there anything new on svelte 4 yeah they improved their hydration code yeah but i was already aware of them doing this did they do template cloning
[01:16:18]  finally svelte 5 is what dominic's working on actually did this ever get you know it's just i'm just curious did if they did template cloning it
[01:16:30]  would show up here did anyone actually has no one updated svelte 4 yet add fable solid elmish what what is this i almost want to see what this
[01:16:47]  is sorry this it's just completely out of left field what what is app fs oh this is this is this is that fable solid thing oh man okay i'm
[01:17:10]  gonna have to see how that goes but i guess more seriously svelte 4 hasn't been updated has it i haven't actually looked in a while svelte i
[01:17:24]  probably could just looked oh no it is yeah okay so svelte 4 had yeah basically no performance implication on js framework benchmark so it's not a client-side consideration it
[01:17:37] 's a high hydration not a render consideration which means i doubt very much they did template cloning but actually you know what there's probably comparison one thing i love about this
[01:17:46]  framework is the um benchmark is um uh he always does a comparison so you can actually see svelte 3 versus svelte 4 right next to each other um doom doom
[01:18:04]  yeah okay create many yeah it's it's the same yeah yeah i don't think they didn't they didn't do template cloning yeah so yeah performance the client side
[01:18:19]  not really all right yeah so it's some hydration stuff yeah they it makes sense i mean this is all about getting i think this is all about updating the build tooling actually it
[01:18:33] 's kind of like a marco 5 where it was just like getting ready so that you can actually do the next big thing svelte 5 sounds like it's going to
[01:18:39]  be pretty sweet from what Dominic's been tweeting. There's bleeding edge and then there's just like leading edge and I feel like Svelte Kid is
[01:19:00]  no longer in the bleeding edge area. You know, like I think we're, yeah, half is still the only pressure we're playing. Yeah. Make yourself, okay
[01:19:10] . We, there is a need for the, this kind of compiler based augmentation of, from the bundler level. What that looks like is still a matter of debate
[01:19:27] . The biggest challenge we've had with bling in general is how hard do we fight against the RSC syntax? Right. Cause I mean, there's different ways
[01:19:36]  to go. Like technically think speaking, um, after we showed that you could use the stuff though, certain way, um, quick went and did almost the same stuff.
[01:19:44]  Like quick had already done the modular extraction, but they're using it in the opposite direction. And we had been working on RPCs and stuff with bling and we
[01:19:52] 'd go on the other way. So like on that side, we both kind of are aligned a thing. But like the, the tricky part is like, when you
[01:20:00]  have like use server and use client, uh, stuff like that. The challenge is that like bundlers now like bun or, or like right now, it's just web
[01:20:11]  pack. Uh, uh, uh, Nikhil went and made the VEAT one. Of course he did. Right. Um, I think along with fatigue,
[01:20:18]  uh, from, um, uh, uh, V plugin SSR or, uh, Rackus or whatever. Um, they, they like bundlers are going to
[01:20:26]  have the capability to understand those directives and you, you have to decide how much you want to fight that. That then again, you know, again, if people aren
[01:20:38] 't adopting RSCs, who cares? So like we could do what we want. I think, I'm never, I'm, I'm not going to be
[01:20:45]  swayed just on popularity. If there's a better, like if there's the, if there is a compelling reason, but like when me and Nikhil have these conversations
[01:20:56] , we were just like, Oh, we just support both syntaxes. Do you know what I mean? Like it's, it's not the biggest thing is the
[01:21:03]  way bling works has to change a little bit compared to where it does today. Right now it's doing a lot of localized compilation to kind of pull extract stuff out.
[01:21:12]  We need a way to actually make the graph continuous and actually pull stuff out without it running at runtime in the same way. We act like right now, if you have a
[01:21:21]  lazy component and you put a this server function in it, it won't load until that lazy component loads on the server. So like there's like these kinds of awkward
[01:21:30]  things where we actually need to do graph better graph analysis and change basically how bling works. At which point, as I said, like the difference between saying using server dollar
[01:21:40]  sign and use server is basically a syntax thing that we could just make it configurable or something. So yes, the work on bling is still happening because we need
[01:21:50]  this piece. It's just like, this is, this has all been kind of like, it's, it's taking a bit to kind of generalize all the
[01:22:00]  pieces we want for the purpose that we need. There's pieces of story that are missing. And the big one is like, how do I get here from my client
[01:22:23]  side app? Right? Like the thing is most people making client side rendered react apps were never thinking, Oh, I, or they might've been like thinking, Oh,
[01:22:35]  maybe should I do this SSR? Maybe, maybe not. And then you kind of like dropped it, but now reacts like, no, you need to do it.
[01:22:40]  And then like, Oh, okay. Well, how do I do that? And then like, no, no, don't do that. Do RSCs.
[01:22:43]  And it's like, Oh, like, I think that's the gap. I think there's also some gap maybe around the caching story. There's like, there
[01:22:50] 's a few pieces, smooth pieces, but I mean, that's okay to have when you have this experimental thing. And I mean, it takes someone going first. It
[01:22:57] 's just interesting. I don't, I said this before, I don't know if you get to lead the way this way in such a radical push, like new directory
[01:23:07] , like, like A's over here, B's over there. I don't think you have to make like that kind of level of like breaking change. I know
[01:23:13]  it's not breaking because it supports all components, but like, like you need a new architecture as the incumbent without like really handholding everyone. That's when Angular 1
[01:23:23] , Angular 2 happens like that. It's those kinds of situations where like, it's not like you can get away with it when you're small. You don't get
[01:23:32]  away with it when you're the biggest, you know, most popular solution. That's the funniest thing as I was, I was talking to someone the other day and
[01:23:41]  I was like, I, this is, this is what I was getting at. If solid released, you know, something like server components and, um, and you,
[01:23:51]  you know, use a slightly different syntax or something, or, you know, maybe, maybe there was some kind of small win somewhere, but like for DX, like
[01:23:58]  really small win somewhere, uh, you know, like maybe like we could auto detect which components are stateful, kind of like Marco style. And then you wouldn't have
[01:24:07]  to use, use client anywhere. It just work. Um, like people would probably be hailing that as the second coming, even if it was like identical to what react
[01:24:15]  is doing, you know, like it's, there's a perception here of just being react actually makes it way harder for them in, in enacting this kind of
[01:24:22]  change. It's unfortunate, but it's also the reality. Hey, well, yeah, I wasn't sure you'd be around. You haven't been around recently.
[01:24:40]  I haven't been around recently. So, but I'm, I'm also catching up chat. 10 minutes late is blazer on this. Yes. Go back to
[01:24:57]  the JS framework benchmark. If you go all the way to the right, you'll find some blazer. Yeah. I mean, it's just macros, right
[01:25:11] ? It's compiler macros. Yeah. There's a desire. There's a want here. We just need to, there's stuff to do. Right. I
[01:25:31]  didn't like rap in this class. And now he just waits for the hooks for generancy. That's one way of looking at it. I mean, I'm actively
[01:25:44]  thinking through this space. I appreciate the confidence. Yeah, I know. Uh, it's been a while, hasn't it? You're on YouTube too, which
[01:26:04]  is unusual. Uh, or maybe that's just another thing that's changed while I've been away. Oh, ah, and now you're on Twitch, haha.
[01:26:23]  Uh, but yeah, I, I, I, I, this is all part of, yeah, I mean, we're talking about small here, but this is
[01:26:34]  all part of change that, that is happening and it's good that we're seeing this change move forward. I, I'm, I'm glad to hear Theo that you
[01:26:42] 're excited about, um, you know, this technology and is keeping you pumped because I'm, I, I, when I, my perception, when I was coming back
[01:26:51]  into, into here between like, you know, the types of discussions and just, yeah, it's not funny. The atmosphere is getting hostile. I took a break and
[01:26:59]  I'm glad I did because it's so much obvious now. The effort is, yeah, no, it is obvious. It is actually very hostile. I don't
[01:27:05]  need this energy in my life. Yeah. Like, I, I agree, you know, this is, this is what I felt like when I, when I, of
[01:27:16]  course, you're here. Oh man. Um, but yeah, I mean, maybe, you know, we're past jokes. I don't know. It's
[01:27:30] , it's, it's, it's, it's, it's, it's, it's tricky. I mean, obviously there's some fuel in the fire kind
[01:27:36]  of situations here. Like, yeah, I don't know. It's just too easy now because it's, I think there's some legitimate frustrations like on the
[01:27:51] , you know, working out the kinks on how React is doing these innovative changes. Um, which is, which is fair. Um, but the problem is the
[01:28:02]  reception of this kind of stuff now is just kind of getting to this point where, yeah, I don't know. It's, I, I, I kind of
[01:28:11] , I, I, I'm not gonna lie. I've been, I've been back now from vacation for almost two weeks and I just haven't been on Twitter cause
[01:28:21]  I was just like, I'm just going to kind of avoid all of this stuff. I obviously I need to kind of talk about some of this content on stream today because
[01:28:29]  I, you know, I, I, I did kind of get caught up on, on, you know, a bit of what's been going on, but it
[01:28:35] 's like, you know, it's, it's, it's a lot of stuff, you know, like you kind of go like, do we all need to argue
[01:28:45]  about this anymore? I, I'm, I'm kind of of the mind that I got a lot of work to do and, uh, and I just got to
[01:28:53]  do it. I don't know if that, if that, if that makes sense. Yeah. The Twitter space about the, you, the Fred and your, yeah
[01:29:20] . Current goal five viral positivity posts a week. I like that. Yeah. I mean, I think this is a good thing cause I feel like stuff was feeling kind
[01:29:47]  of hot for awhile. I don't know. It just, that the, I miss most of it. So when I came back and I saw the reactions, I was
[01:29:56]  just like, you know, like, sorry, I'm just laughing cause while I'm talking about that, it's like, what was I busy doing? You know,
[01:30:07]  this is, yeah, I think everyone saw all that stuff. Anyway, I'm sorry. Yeah. My theory. Okay. Okay. Let's go. It's
[01:30:35]  like hooks without having it. When they dropped. Yeah. Yeah, no, I, yeah, I can, I can see that. The, the interesting thing for
[01:30:45]  me is like, like, you know where I was, right? I didn't care if hooks actually succeeded or were any good. I just like, the second I saw
[01:30:55]  them, I'm like, okay, game on. Right. And, and that's really what I got to get back to again. It's, it's,
[01:31:01]  it's, it's, it's, it's game on. Right. So, um, you know, sorry, I'm, it's my age again. That
[01:31:06] 's a Wayne's world reference. Um, but yeah, I, I, I think, I think the fact that it is harder to adopt or not harder, but
[01:31:21]  like they're not in the position to adopt does make all the difference, right? Like it, it does make it a very different thing. So yeah. I think
[01:31:31]  the challenge is like, when you're, I've said this before, when you're in reacts position or next position, you got, you, you have to almost
[01:31:56]  do more and it's unfair, but you almost have to help the people along. Like in the back of the day, when react came out there, they were able to
[01:32:05]  just be like, look, you guys are doing it wrong, you know? And we're like, no, oh, but now it's kind of like, you
[01:32:14] , you, they can't do that. They have to be like, like really hold your hand. Um, and yeah, it just doesn't work the same way.
[01:32:26]  So yeah, I mean, it's fine. I, I, I think that I think, I think, I think we're, we're in for like, I
[01:32:37]  remember like, it's okay if this is kind of like a slow gain. I don't, I think part of it is that like, people want there to be
[01:32:45]  this kind of discourse happening or this kind of thing. Otherwise, like, you know, it's okay. People just adopt them slowly. Like, why are we, like
[01:32:53] , why are we still worrying about that? Like, yeah. Yeah. Yes. Yeah, yeah, yeah, exactly. I mean, that was, that was my
[01:33:08] , that was my big point at react-a-thon, uh, panel. And I'm, I'm glad I've seen that now, uh, being expressed again
[01:33:15]  through stuff that, uh, Dan has written as well. Like it's, it's an important, um, it's an important distinction to understand. And we've seen
[01:33:22]  this before in other, I mean, it's the same thing that quick is asking of you in a sense of, in a sense. And it's, it's
[01:33:29] , it's the same reason why when, uh, we, we had the conversation about putting, you know, solid and react together, we looked at how to put solid
[01:33:38]  in react rather than vice versa, because, um, trying to get people to replace the root is, uh, it's pretty hard. Yeah. Yeah. Yeah.
[01:33:56]  Yeah. Yeah. I mean, but I mean, JSX could have been, yeah, I guess it's not quite what you mean, right? Cause like JSX
[01:34:14]  could have been done at the leaves. It's, it's more of like the, when we had MVC, the model connected the model to connect the model,
[01:34:22]  the view, connect the view, the view and the view model, the view model, the view model, right. Or MVVM, which is basically the predecessor components
[01:34:29] . The big change of react was that, um, those things actually like ignore the model models sitting somewhere else in global state land, but like the view model and the view
[01:34:41]  were now packaged together. So in a way that like the, you put those in those, so you actually migrating that was actually a little bit tricky cause you have
[01:34:52]  to unwind stuff a certain way to wind it back in again. And that would require a change from the root, so to speak. Okay. I might, I'm
[01:35:01]  probably like trying too hard. I'm talking about like something that happened back in 2012 that no one actually cares about, um, yeah, or 2013. Uh, anyway
[01:35:13] , sorry. Oh man. We, I mean, I knew this is where we, we, we'd get to on the, on this whole side. I mean,
[01:35:24]  funniest thing, as I said, is I don't have a ton more to say about server components. I've been, I mean, other than I've been like
[01:35:32]  pouring my head through, you know, trying to understand implications of different APIs, cause it still comes down to this fundamental question. And I think this is why people have an
[01:35:42]  adoption tricky trick to this whole thing is like, do people want to acknowledge like a server first mentality or not? Right. People like the single page app thing made people very
[01:35:53]  comfortable, you know, especially people, users have said like react or solid or stout or any of these frameworks very comfortable with the client centric model. So in
[01:36:00]  a sense, when you look at stuff that automates it like quick, you're kind of like, Oh, look, I don't have to think about that. I
[01:36:06] , for the most part, I just write my code as one app as I always have, and it'll just do the right things. And server components are like, no
[01:36:13] , no, no, you have this server component range. Right. And this leads to different kind of problem solve, because like obviously if quick doesn't want waterfalls,
[01:36:21]  you have to hoist it like remix or solid or whatever. Right. And I think like, I think that like, that's where this kind of split is,
[01:36:30]  right? Because like, this is what I was talking about. What if Mark was always right, kind of mental experiment? Like, what if you didn't need use client
[01:36:41] ? What if we could determine use client automatically? What if that was your world? Because I mean, I was thinking about it, I mean, how hard would it be
[01:36:48] ? Solid already knows roughly what reactive statements are. So if you assume that props, you don't have to worry about, but you assume that any component, which defined
[01:36:58]  a local, uh, local state or local something, and it gets used as a function call inside JSX, or, you know, uses, you know, like an
[01:37:11]  effect or whatever, if you could, you could base, I mean, react has the use prefix, you like, let's pretend we're in a world now where we
[01:37:16] 're just like, okay, everything with use is a client component. Like if you could know that, what would the repercussions be? Like, because right off the
[01:37:27]  bat, you wouldn't have to go write use client into a bunch of different, um, components, right? Like you wouldn't have to go update all the existing ecosystem
[01:37:36]  would, would just basically work as client components they do today. And you wouldn't have to do a single thing. What would be the downside of doing that? And how
[01:37:44]  would that change implications? Well, I mean, I kind of walked through that mental thing for a bit. And the, the downside would be that, uh, before
[01:38:02]  the downside, let's say the positive, the positive side is you could continue using stuff. And even if react was slightly less optimal in some places, or like I said
[01:38:11]  react or whatever framework worked this way was slightly optimal, like included stuff that wouldn't need to include, you would never be aware of it. Right. Um, I
[01:38:20]  mean, the one downside is you wouldn't be able to like, you know, async component in the middle of the component, so to speak, right? Like you
[01:38:28]  wouldn't be able to fetch, but let's assume you're me and you think that's a terrible idea already. And you were already hoisting, like what
[01:38:34] , what is the downside of, of, of this automation? Well, the downside is the props going into the client components need to be serializable. And you wouldn't
[01:38:46]  necessarily know that. Right. Like you, if you, you might run across a component that stateful, um, component that you determined and you try and run it
[01:39:00]  and it'll go, Oh, sorry, you can't serialize it. That's probably the biggest downside. You'd be like, why do I have to serialize
[01:39:06]  this? Right. There's no use client to indicate that you're just like, Oh, it's a stateful component. Right. That's probably the biggest downside.
[01:39:14]  Because it wouldn't be clear. The other downside is like, maybe it wouldn't be as optimal, right. Because like, maybe you couldn't be as precise with
[01:39:22]  your intention, but in this world, right, people would not be thinking, Oh, server component, client component. Right. Well, how do you do data fetching
[01:39:34] ? Right. Well, what if you had something, what if you still had used server, um, or server dollar sign, but the difference is it's not something you
[01:39:44]  pass the client. It basically on the server just execute as a normal function. And then on the client, it was an RPC call. Like what if you could
[01:39:50]  just abstract that away like that, it would basically be the identical mental model of the, uh, of the single page app you have today. Like you knew that you could
[01:39:59]  fetch directly from the database in the server, in the use server context. You knew you were safe to do that there, but the rest of it, you really had
[01:40:07]  no guarantee whether it ran on the client or the server. Um, as time, except that there's one difference, there's no dollar signs everywhere. You're not like
[01:40:16]  breaking the serialization, you're not doing resume, but you're not doing that. You're just, it's, it's just, um, a best effort where
[01:40:23]  it's a heuristic on statefulness. So the, it basically, it'll make your code a bit smaller. Maybe as I said, RSCs haven
[01:40:30] 't shown us that it makes code significantly smaller anyway. So like loosen this heuristic a bit, like who cares? Right. Um, like, but I'm,
[01:40:38]  I'm, I'm just, I'm just throwing this out here in this sort of world. Like what I'm trying to point out, it's not necessarily that
[01:40:48]  this is better or worse. I'm saying like some people would have preferred this to be the reality, but there's a reason why react did not go this way. I
[01:40:58] 'm just, I'm just trying to like paint this picture where there could be a world where the exact same code could like, we're basically what RSCs do is
[01:41:09]  an optimization that you could turn on invisibly. Isn't that remix? No, remix is not optimal like this at all. Like they don't do this kind of
[01:41:20]  optimization. They can't react. Won't let them do this kind of optimization. I'm talking about actual partial hydration. Like remix is just next 11 or whatever. Like
[01:41:29]  it's, it doesn't actually do anything optimal here, but yeah, the, for the average person reception would have been really incredibly much better. But I think like there
[01:41:42] 's, I think there's like trade-offs here and I think there's a mentality question. Like, and the reason I'm bringing this up is like, I
[01:41:48]  think on one side, you have like, if you had like a spectrum or something, right. You're like on one side over here, you have like Astro,
[01:41:54]  right. And Astro is like, and I've talked about this before. I talked this about this in my stream where I was talking about, um, you know,
[01:42:04]  the, uh, I think it was the new year's stream. And on the other side, you have, I'm gonna say Marco Marco Marco's intention is to
[01:42:14]  like, basically never tell you and everything automatic. And the compiler does everything at this point is sub component. But even Marco today is basically like, um, islands, like
[01:42:25] , you know, RSCs, except you don't have to ever say, use client, use server. It just, it just automatically does it. Yeah.
[01:42:38]  Sorry. I'm, I'm, I'm, I'm, yeah, I have to remember the chat delay and the fact that I'm, uh, kind of like
[01:42:44] , yeah, what I'm getting at is like on this spectrum of things, like in terms of explicitness, it's like quick is here. Cause you, they
[01:42:58] 're, they're, they're, they make you put dollar sign, like literally everywhere. And then RSCs are here. Right. And, and, and part
[01:43:12]  of me kind of starts, starts wondering this, right. Cause you, you start thinking, you go, well, along the spectrum, like sometimes being in the middle
[01:43:21]  is the worst place to be. And like, in a sense, Astro has a huge benefit. It's like, it's so freaking clear, like dot Astro
[01:43:32] , like, you're like, this is not, this is server, this is client. There's no confusion. There's no run. You, you like,
[01:43:38]  you know, that RSCs with use client and use server have that similar kind of split. And it's very on purpose. Quick doesn't differentiate for you, but
[01:43:48]  makes you put a dollar sign every possible place that could split it just so that, you know, that it could happen, but it may not, or could, or whatnot
[01:43:57] . And then Marco's like, we're so smart. We know everything, but like both this side of the, of the, of the, of the, of
[01:44:06]  this like line here are, are under the opinion that, you know, think one app thinking. Whereas like this side is like server, server versus client. Now,
[01:44:36]  don't get me wrong. You always have to do that. But another way might be thinking of like, it's so funny because I wouldn't call Marco client first,
[01:44:45]  but like in a sense, I don't want you to, to really worry about that as much. The funny thing is it's a lot harder to pull this off
[01:44:59]  with a, well, no, one's done it yet with client side routing to be on this side with client side routing. Like, but I'm just like,
[01:45:13]  I think this is a funny place where actually Astro and RSCs are more, um, in, in common philosophically than where quick and Marco are. I don
[01:45:24] 't know if I'm hoping this makes sense. I'm familiar with all these frameworks. You may not be as familiar, but like in Marco, it does partial hydration,
[01:45:33]  like RSCs, like islands type thing, but you don't actually put a used client or anything anywhere. Yeah. Is that the spectrum is going to ship?
[01:45:44]  Yeah. I mean, the, the, the, the funniest, the funny thing about this though, is technically when I'm talking about Marco, I, over here,
[01:45:57]  even though Marco six is over here, I I'd, I'd say Marco four is over here as well. Like, which is already shipped, like, you know,
[01:46:03]  seven years ago or whatever. So like, uh, to be fair, Marco already has automated this and is completely doable. Yeah. Client side routing is important.
[01:46:23]  And I think it's more important than people are giving credit to, but I mean, on the other hand, it depends on what you're doing. Astro is going
[01:46:28]  to continue focusing on the content sites and those kinds of things, and they don't really need it and they will do very well and they're just not even get into
[01:46:35]  this game. So good, good on them. Yeah, it doesn't. Yeah. Well, because doing a spawn quick would, would be a waste. You have to
[01:46:46]  do client side routing the way RSCs do it. As I said, RSCs is, yeah, it's more of a routing concern. Abstracting
[01:46:53]  is great as long as you can't see the seams. Right. Which is a, which is an interesting one because it's, it feels like, like, this
[01:47:07]  is where being in the middle is the really awkward place to be. Right. Because like when you're Astro side, just like, look, we're not trying to
[01:47:14]  like abstract this way. Like it's freaking server client. Like we can't make this any clearer. When you're on the, uh, the Marco side, they're
[01:47:23]  like, look, we're not, we're going to build into the language. Like you can't, we can't even let you, there be scenes. We
[01:47:28] 're just going to assume that the compiler can do it. And if there's a shortcoming, we deal with it. And that's where, but when you're in
[01:47:34]  the middle, when your RSC isn't quick, you start, that's where you start kind of like being like, like in that middle ground. Okay. Have
[01:47:55]  I seen this thing? I was trying to even start a bit of my react ends and next starts. I, I, I know, uh, sorry. I know that
[01:48:03]  Theo's tried to do something like this before on, on stream. Uh, what am I looking at? Okay. Okay. Oh yeah. Is this leveraging the
[01:48:50] , well, actually, what are you doing here? Okay. So that is just an async function. So you are just using as an async component. No,
[01:49:01]  I have, I have not seen this till now, but yeah, I mean, a lot of this stuff is built corn to react and people aren't like the intentions
[01:49:13] . You don't like use it directly, but interesting. Yeah. Yeah. Yeah. Sorry. I, I'm looking at it. No one else can see what I
[01:49:26] 'm talking about. And actually, I, if I really want to be good here, I should do this. This works in Vee and Astro, but not
[01:49:40] , but doesn't work in next. Well, is this, yeah. Is this based on the Waku, like the work Daishi did or Nikhil did one of
[01:49:48]  those Vee things? Async components don't work in next. Yeah. Okay. They already defer any async client. Well, async client components are a bad
[01:49:59]  idea if you can't use a compiler there because they're blocking and it doesn't make sense the way state propagates. just react. I see. So it's
[01:50:05]  like under, yeah. Yeah. I mean, they need you using them as is can kind of work, but it's also like less than ideal in some cases, like
[01:50:18]  your async component doesn't have state in it. I think things get a lot more fun when you try and put state in an async component. Um, I feel
[01:50:25]  like I've tended a little bit, which is okay. That's what we're here for. Um, um, but yeah, it's interesting. Um,
[01:50:57]  yeah, I don't know. I think there's different ways we can, you know, look at, look at this kind of, uh, I don't know.
[01:51:04]  I'm just, maybe I'm just not obsessed with async components. It's like not my, my, my favorite thing. Like lazy components are a reason to make
[01:51:16]  something async. It's kind of like, you know, it's also kind of like the desire for people to resume tracking after an await in, in like some
[01:51:27]  kind of a reactive flow. It's like the same kind of thing where it's like, it doesn't quite fit right. Like you could do it, but then you
[01:51:35] 're like, any re trigger will cause the whole thing to run again. You know what I mean? Like it's just, it's, it's not quite the
[01:51:47]  right impedance match, right? Like I, I came up with an idea of how I could do async components and solid, but again, after doing that and coming up
[01:51:58] , I'm just like, who would use them and why. And I was having a hard time finding use cases where it wouldn't have just been better to hoist
[01:52:07]  it and like not use that syntax. It's just, it's like really convenient for someone who wants to do something really quick and simple. Obviously it's something that server
[01:52:16]  rendered where there's no state, you know, it can be useful, but then it's like, okay, you could also make it work in the client, but
[01:52:24]  then like, yeah, I don't know. I'm having a hard time with the async component thing. I always have though. But yeah, anyway, um,
[01:52:38]  what I was getting at before, just as I was saying is I think there is a divide right now philosophically. Um, and it's interesting to me because I
[01:52:52]  like at the extreme on this side, we could basically continue to, to author things the way we do today and think of partial hydration and things like server components as an individual
[01:53:07]  optimization. Then on this side, there's kind of almost the argument that, you know, uh, we can leverage these platforms best if we go like, yes,
[01:53:22]  this is a server. But I mean, I guess the thing a lot of people thinking about on their app is like, how much do they actually, like, why do
[01:53:28]  you want stuff on the server? Why do you want to explicitly say this is on the server? Part of it is because you don't want that JavaScript to come, or
[01:53:34]  you don't want to ship that component, but let's pretend like you don't care about that. Like, you're just building an app. You don't actually care
[01:53:40]  that that stuff's on the server or the client. Like, let's pretend like we assume that it goes the right place optimally. I know that's a big
[01:53:47]  ask, especially from a performance crowd, but let's pretend we don't care about that. When you're building an app, like, what do you actually, actually
[01:53:58]  need on the server? Like 100%, you need to make sure that people know is on the server. I'm actually curious, honestly, because like, there's a very
[01:54:09]  obvious answer. And I'm wondering what the other non-obvious answers are. It's usually data fetching, right? like, you got to access the database
[01:54:19] . So you need some kind of data source. That is a reason to be in the server, right? Like 100%. Everything else is about optimizing execution or bandwidth. Now
[01:54:33] , you could say that like, because of waterfalls and stuff, data fetching, like, it's funny, because I know this is full circle, because like
[01:54:44] , before the land on server components React was working on something like that, basically stitched a whole bunch of client side requests together into a single request, and they could do the
[01:54:53]  whole thing in a single flight. I think it was called flight. So like, I get that there's different models here. I'm just, I'm just kind
[01:55:01]  of like pointing out that, like, are certain wondering out loud. I've been struggling back and forth between these two things. I've gone very extreme. At some points
[01:55:13] , I'm like, the only right way to do this is astro style. Like, we should just keep things separate so we can optimize it. But then, you
[01:55:20]  know, I've also spent time over here to where I can like see the benefit of people just not like thinking about it. And that almost all the criticism that comes
[01:55:28]  to React about RCs is the fact that they're over here, not over here. The React audience was expecting RCs to be over here is, is, is what
[01:55:37]  I've kind of come to realize. Secrets. Yeah. That's another place. Right. So, but again, in the same way you can just be like
[01:55:53] , this is server function. It's a database. If you want secret dollar sign, you know, I'm, I'm just throwing out there. Okay. Secrets
[01:56:03] . Another good one. Okay. That's perfect. That's what I'm looking for. Anything else? There was just an attempt to build Relay into React.
[01:56:16]  Yeah. Pretty much. Which is extremely complicated. I'm just, I'm just, I'm just like, kind of think though, is there anything else that you,
[01:56:24]  where you're like, I'm building an app and you're like, I want to make sure that this is not making its way to the browser. No one uses Rel
[01:56:36] ay. Uh, I, this is like, because I, I mean, what I'm doing here is I'm, I'm taking that mental ex thought experiment where
[01:56:49]  let's assume, you know, where I've, you know, an hour ago, I was kind of like along the lines. I'm like, no, no,
[01:56:54]  I don't. If, if, if RSCs don't enable something new, we're looking at them wrong, but I'm like, okay, you know,
[01:57:00]  at the other extreme, if you, if it was an invisible optimization, let's say, and we, we, we're still viewing these as single page apps, essentially
[01:57:08] , you know, and if I, for example, if I was sitting in Astro's seat over here, I might actually say everyone over here is a single page
[01:57:13]  app. Um, you know, or, I mean, Marco isn't, but I'm talking about like that future where client side routing was involved. Um, like
[01:57:28]  yeah, it's, it's, it's, it's, it's an interesting. Cause it is all about the, the flexibility of scale, right? I've
[01:57:42]  talked about how you can make islands really small or you can make them the whole route section. And that's the difference between a JSON API and not, but that could
[01:57:50]  be automated in theory. User sessions. Okay. It's interesting. Cause a lot of SSR apps today don't really address, like, obviously like you have session stuff
[01:58:05] , like from remix, but like, it's interesting, like classically with next, I wasn't sure how, like, how, how, like when you're
[01:58:12]  using next 12 or 11 or whatever, how would you get the session information into your components? Was it through get, uh, get service side data or props? Like,
[01:58:22]  was it through the data fetching? Like how, how did the session stuff, like, cause you wouldn't have access to it in the client or you'd have to
[01:58:28]  have like some kind of superficial representation of it. I, I'm actually not sure markdown parser. That could be automated though. I think, I think we
[01:58:45]  could be smart enough to know that a markdown parser doesn't need to go to the client. Analytics. Okay. Like it. Yeah, yeah, yeah,
[01:59:14]  yeah. I mean, I just don't believe that it actually works. Like over, it works, but I don't believe it actually scales. That's my concern.
[01:59:23]  Like, I don't think the co-location, I don't think the stalls co-location. I think it actually just hides it. And then it
[01:59:34]  will be, it'll be the problem we worry about in two years. I, uh, like, I like co-location, but unless you actually pull it out
[01:59:41]  of the component and, and, and stuff like re like you basically don't actually achieve it. It's like, it's like, it's kind of like micro front
[01:59:54]  ends. Like if you really need it, cause your company is so big, then you'll be okay with this, but you'll always be able to optimize the stuff
[02:00:01]  by getting rid of the co-location, which means it's like almost always better not to do the co-location. like, uh, it's tricky
[02:00:12] . It's like, uh, sorry, um, this one, I was like, um, basically the link points based on actual usage. Yeah. That's an
[02:00:35]  interesting one. Uh, cause I mean, it's lazy. I mean, with analytics or something, one of the biggest challenges, obviously, is that like, you don
[02:00:46] 't actually like some components, some things that are heavy, you, you want to defer loading of them, but other things, you, basically, even if you could
[02:00:57]  lazy load them, you would eagerly load them. So it's like, huh? Yeah. And one thing is like, at least today, I mean, I haven
[02:01:12] 't seen anyone do this yet. And Mitch Gill likes bringing it up in his talks is people don't have lazy, hydratable things. Um, but lazy,
[02:01:20]  making something lazy, hydratable is completely doable. Um, but, uh, no, no one's made a primitive for that. Have you got through? Yeah
[02:01:46] . Yeah. Yeah. I mean, yeah, I, I, I, I, I follow that. It's more like, I'm trying to get why, I
[02:01:52]  mean, that, that that's investing in the perspective, almost like Astro, as I said, where you're like, it's very clear that you have the server
[02:02:01]  thing. And then you just have this, like the client stuff is a smaller piece, right? You basically shrunken, but you do it by being very explicit versus
[02:02:13]  the other side, which is basically like, what if this is an optimization? It's not perfect for everyone, but it's good enough for everyone. Yeah. Because it
[02:02:23] 's almost like a new basis of the web. Like it's, it's like, it's, it's like a new type of MPA. Like you can,
[02:02:27]  well, I like, like, think about like an MPA, you can build anything with on top of MPA thing. Like you take Astro and then you go
[02:02:35] , okay, I'm going to put a single page app on it. And in a sense, that's what RC, uh, architecture is because you get to basically
[02:02:42]  start again from basically, I just got pages. And then again, you can basically just put a client side rendered app on it. Like it's, it's so from
[02:02:52]  a web foundation fundamentals position, um, that makes obviously a lot of sense. It's, I'm just, it's kind of like with remix. I'm not,
[02:03:01]  I'm not always convinced that the existing, um, abstractions are actually the best abstractions. Like, like just cause the web works a certain way, like who
[02:03:11]  cares? Like there's usually a value to a certain point, but it's always, I always like, like questioning that a little bit. And I feel like my gut
[02:03:22]  was always with on the RSC side that like, yeah, that's, that's good. Like we just need that new foundation, but resistance has made me at
[02:03:32]  least think about what the other possibilities look like. And that's sort of why I'm asking this question on, on the, on the zone. I should actually been keeping
[02:03:40]  a list here actually, just for my own things. We, when we were talking here, we were saying server, we, we said we wanted data fetching,
[02:03:48]  uh, let me change that. See, I'll make that blue and then add a new one here and then make that way. So data fetching secrets and analytics
[02:04:09] , um, uh, uh, uh, sessions. Yeah. Internationalization files. I missed this earlier, but yeah, there's sometimes some stuff that is absolutely huge
[02:04:34] . Um, uh, I kind of put that on the data fetching side, but let's just say server only assets, translations. So yeah. Yeah. That's
[02:04:49]  actually an interesting one, isn't it? Cause yeah, this is something where slipping up would actually be costly, especially depending on how the translations are set up because well
[02:05:03] , if it's granular enough, it'd be fine. But you know what I mean? Like it, the difference between it, like it, you know, being optimized
[02:05:11]  and not being optimized could pull in a whole bunch of extra crap, but yeah, I, I, I've been focusing on this split because I think this is going to
[02:05:21]  be the argument. Like, even if you ignore the technology for, for time to come, there's going to be a split between people, um, on this side.
[02:05:29]  And part of me thinks that Svelte is naturally on this side of the fence and they, they might not get into the RSC thing or not, but they
[02:05:41]  like, they might just like, they're looking for something over here. I think I've, I've been having a very, as I said, this has been the
[02:05:54]  debate and the thing that I've been going through a lot back and forth for like almost a year now because it's there's something that is so pleasing over here,
[02:06:08]  but I don't know, I don't know if you can get away with it. Yeah. Anyway. All right. Yeah. Yeah. I know they're not
[02:06:23]  doing RSCs, but the reason I'm saying that they went to RSCs is because naturally they would want to be on this side. Maybe, maybe not.
[02:06:30]  They, they, they have dot server dot client files. So yeah, maybe they would be on this side. I've read the argument that the dollar sign is not
[02:06:44]  very usable in hooks and decomposition. Yeah. I mean, yeah, I mean, Svelte has its own considerations because generally speaking, the language is very contained. This
[02:06:56]  is the hardest part with compilers because you like, you have to decide how wide the scope of the compilation analysis. And if Svelte's local, then
[02:07:05]  they can't retain reactivity across files. And then stuff like dollar sign is not composable. It, for me, that's like a non-starter. Um,
[02:07:12]  but like, it's a hard problem to solve. I mean, I feel like something like Dominic Ganaway would try and solve that. That's what Marco has
[02:07:19]  been working on. Svelte is what I just, yeah, I, I don't, I don't know much about Svelte kit. It's like
[02:07:38]  perception on people, you know, like, cause when I see Svelte kit, I just think remix or whatever. Like, do people use Svelte kit,
[02:07:43]  would they feel at home in remix? I feel like they're almost like the same framework. You just used react instead of Svelte. And I guess there's probably
[02:07:50]  like little differences and I'm not, yeah, yeah, definitely. And what I'm saying is like this whole thing about multiple services and all that, like that,
[02:08:01]  that's in the data fetching story to me. Like basically you, there's a reason why you want to be able to kind of like pull all this stuff together before
[02:08:09]  you respond. Well, the, the, the thing is I am, this is not, this is, I was saying philosophically, I feel Svelte was
[02:08:19]  over here, but what I was getting at is like, this is technology that ships today that does partial hydration type solutions and where their mentality philosophy is. Solid start today
[02:08:31]  is, is like the experimental stuff. Like normal solid start is nowhere, but solid start today is like here. It's basically like RS, RSCs where you have
[02:08:48]  to be very explicit, but we kind of like let you put all the stateful stuff in. Like we don't have nearly as many rules. It's not quite as
[02:08:57]  it's, it's, it's, it's, it's, it's, it's on this side of the line, but it's, it's,
[02:09:03]  it's, it's, it's very close to the middle. Um, that's where like starts experimental stuff is, um, which is being smack in the middle usually
[02:09:17]  doesn't help anyone. Um, it's very easy to be there. That's like where view always lives. And I, you know, this is why I'm
[02:09:27]  very much, um, what I, which maybe I just call them SSCs solid server components or start server components. Um, that, yeah, they're, they're
[02:09:41] , they're here. So yeah, it's, it's tricky. I don't, I don't know. Yeah. Yeah. Svelte might actually,
[02:09:58]  because of, as you said, like they, they, they, they, they are probably, they really want that separation to be clear. They might, if they ever
[02:10:07]  did a solution, they might actually end up almost sitting on top of Astro, like, like as far over as you could get. When I looked at Nux
[02:10:19] 's server component solution earlier, they looked like they weren't actually islands, but lakes. And, um, yeah, I don't have much to say about that. I
[02:10:32]  think that's like a short term kind of thing. And it's not really the ultimate solution. I don't like being in the middle. I hate being in the
[02:10:42]  middle. Yeah. It's, it's, it's just interesting when you talk to the people on both sides, they have like different arguments for it. Like,
[02:11:04]  like this side definitely feels like they have to be explicit and that's how you can optimize for it. You know what, what you know, it's much simpler in a
[02:11:15]  sense. But if you talk to the guys on this side, it feels like, especially like when I talked to the marker, I've been at it forever. They're
[02:11:21]  just like, you think they almost don't trust the developer to be able to make that decision. Like they just like, they're like, look, this is too
[02:11:29]  much. They, everyone has to be an expert. Like it's easier just to tell people to do stuff one way and give them the best results out both quick and Marco
[02:11:38]  are very much in alignment on that. Um, but it's also like, cause they have, they have a very, like, it's their expectation of the, maybe
[02:11:47]  the types of apps you're building with it. But like, like they, they, they basically think that when you give people that choice, like I've talked to
[02:11:56] , yeah, you know, like the, you know, you just keep on bringing that use client further up the hierarchy. It keeps on slipping. And to be fair,
[02:12:06]  Marco four does that kind of islands level, um, you know, use client level kind of thing. It's automated, but they've seen that slip happen themselves. Right
[02:12:15] . So like, this is why they're so big on subcomponent hydration and things like resumability. They just, they're like, we, if you
[02:12:22] , if you leave this to the developer, they will eventually get to a point where they'll mess it up. And then like, like that's essentially the thinking it
[02:12:34] 's, it's very odd, but the argument that I get on this side sounds like someone who's already been here for a long time and decides that this is better,
[02:12:43]  not the, the person who's like coming from, I mean, quick has a bit of like, Oh, you like react keeps using it like today. Forget about R
[02:12:50] SCs. But when you talk to me, the Marco, it's like, yeah, we've been here and done that. This is not a good idea.
[02:12:55]  Like we, we like people, you know, people, you know, people at eBay mess this up all the time, you know, you know, the, that that
[02:13:06] 's kind of like where the mentality is, you know, coming from. So it's, it's hard to ignore that level of experience on this specific zone of problem.
[02:13:21]  But again, we don't have, you know, who's your customer? Yeah, yeah, exactly. Right. It's very enterprisey. Right. Yeah
[02:13:49] , I could see that. The funny thing is that I think that the biggest, the funny thing for me here is like SSR is kind of brittle, even before you
[02:14:03]  add all the partial hydration stuff. I think that's the, almost the biggest strike against this side is that like being explicit to be able to like shrink the size of the
[02:14:15]  apps is already such a big win. But yeah, this, this, this, this debate goes on for ages. Anyway, I've, I don't know how
[02:14:26]  much I can beat that dead horse, so to speak. I did want to put it out there because it's something that I obviously still think about a lot. Yeah
[02:14:36] , I know exactly. And the problem is when you start making this, I mean, this is actually, you know, what, this is a great example. I'm
[02:14:48]  thinking about it here, right? Because when you make use memo or use callback or sorry, react.memo rather, or like you make these safeguards
[02:15:00]  to prevent over execution that you actually explicitly need to like wrap things to opt out like rather than to opt in, like you end up just using it everywhere anyway, if you
[02:15:13]  think you care about it, and even where you shouldn't necessarily. Like that's, that's the danger of APIs designed like this, like stuff like use callback
[02:15:21]  and the need for something to use callback. Like I can't understand why react wants to forget or, you know, create, forget or whatever. It's because like
[02:15:27] , once you introduce something like that, but people are just like, Oh, when do I use this? Well, I guess I'll just use it everywhere. You know
[02:15:33]  what I mean? Like it's, it's, it's, it's actually the real awkwardness of, of, of this sort of having to like opt out
[02:15:45]  for performance. I like, I don't like, because like, you're just going to like, you introduce an API like that. You're just basically signing up for
[02:15:52]  everyone to use that API everywhere. It's, it's, it's difficult. Um, let's say the least. So like, it's funny because the framework
[02:16:07]  design actually lends to that, right? Like people don't think defaults matter. Defaults matter for that reason. Yeah, exactly. Right. And I
[02:16:20]  have to admit, like solids, um, choice of when to memoize computed is a similar kind of idea of where you're trying to like opt in for performance. I
[02:16:32]  it's, it is one place we have that. Um, it's because it's a trade-off because the more computed you add the, it affects creation. It
[02:16:41] 's a creation versus update, um, calculation. So it's not like we're immune to it. It's just very obvious in React. Um, right. Um
[02:16:51] , but yeah. Yeah. I'm sorry. I'm just like looking back at so much happened in this last, uh, before I actually went on vacation. We,
[02:17:12]  I, I'm trying to think because I'm going to, I told everyone I was going to have a shorter stream today. We've, we've probably pinged
[02:17:19]  RSCs to death. We talked about milk. Um, I, I'm just kind of looking at it. There's any other topics before, um, we get
[02:17:27]  around to wrapping up today because like, um, next week I'm going to actually have a real guest on. I'm going to have Aiden from a million JS and
[02:17:36]  we're going to talk about block virtual doms and talk about how, um, they impact, uh, you know, performance in virtual dom in a way that we
[02:17:44]  haven't seen a jump, you know, for, since Inferno really, it's funny. I'm looking at Dom Dominic Gannaway tweet, but,
[02:17:53]  um, the biggest jump we've seen in virtual dom technology since Inferno has happened in the last couple of years. Million is actually not the first one to do it
[02:18:00] , but they've, um, Aiden's done a great job of, uh, putting his framework out there. So people know about it, but, um,
[02:18:08]  that, that, you know, so we'll be back in more regular form next week, but I thought it was important to have a stream, uh, this week just
[02:18:17]  to say hi and see how things are going, you know, so to speak. I'm not bringing the milk back, it's over. Right? Um, I
[02:18:30] , I, I did want to mention a couple of the tweets, things I highlighted while it, you know, when I came back, I love this one here. I
[02:18:36]  really like the idea of signals being an implementation detail of the framework. If a core philosophy enable reactivity for UI, then the implemented details aren't really that important for their
[02:18:44]  allows to change to those details or breaking changes. That's an argument for Svelte's approach or even forget. But I, I, you know, the,
[02:18:51]  the underlying thing is I think we're going to see these kind of component independent, uh, reactive primitives permeate into many JavaScript frameworks. This, this suggests that S
[02:19:04] velte might be getting signals, which is pretty cool. Um, you know, yeah. And what, what's this one? Oh yeah. I don't know
[02:19:17] . Just a little news. I don't know if anyone caught this. I, I wasn't aware of this until literally it was announced because I was away. Apparently they
[02:19:23] 're in our discord, like chatting, but, uh, we finally got added to official Vee template. Um, as, as well as quick did what had happened before
[02:19:32]  for a while, I'd been bugging them. You know, we'd be bugging them like, Hey, can we have official Vee template? We, we
[02:19:38] 're actually in, we've been in the discord for Vee officially for support. Like, you know, like we're one of the listed frameworks for like over a
[02:19:47]  year. Um, but we, we never got an official template and they said, well, the criteria is you need to have 1 million downloads, um, a month,
[02:19:57]  I think to get that criteria. And as you know, we do not have 1 million. I think we have like 300,000 or 400,000. And I guess
[02:20:05]  they finally decided to change that. I don't know what changed it actually. I haven't, I haven't looked at NPM trends for a while. Uh,
[02:20:13]  is it NPM trends? Solid JS. Yeah. We had a little peak there during signal week, but yeah, so we're about 80,000 downloads a week
[02:20:27] , which is yeah, 3,200. Yeah. So 320, 330, whatever. Um, up to between 320 and 350, uh, downloads a month. Actually,
[02:20:36]  I haven't, I haven't actually checked out quick for a while. I'm like, did they, did they, did they push the, uh, was it
[02:20:43]  at builder IO quick? Did they push the, uh, the, the envelope here? Is it just not showing up? Okay. Let's try that again. Delete
[02:21:11]  solid. Always. Is it? Yeah. Maybe that's not the package. Maybe that's the, that's like the, that's like the, uh, what do
[02:21:29]  you call it? That's like the, actually no. I'm going NPM. Oh, it's, there's like a period in the builder IO.
[02:22:02]  Okay. Okay. Okay. All right. Okay. Okay. Yeah. Okay. So the, no, I, I guess VEET has just decided to be very
[02:22:14]  generous with us now. Cause like, I think the next one is lit. No, lit has surprisingly more downloads than you, you'd expect. So you look lit lit
[02:22:26]  or let's, let's do felt. All right. The stupid spikes. But do you see that other than the stupid spikes lit actually has more downloads than spelt
[02:22:40] , which is kind of crazy. Um, how preact was preact fit in here? I'm just curious. Okay. So preacts above. Yeah. So
[02:22:51]  I guess Svelte was like the, the, the bottom bar before they added us. Of course you can't look at Svelte anything now because of the,
[02:23:03]  the, the, the freaking spikes, where were they here? Yeah. So Svelte was doing about, yeah. Svelte does about 500,000 per week
[02:23:13] . So about 2 million downloads a month. Okay. Okay. That makes sense. Yeah. See, I should just look to chat. Then I would have found the
[02:23:28]  missing period there. Yeah. I mean, it's, it's really sad what happened there. Um, you, you as well, right? Like who, who
[02:23:45]  does this? Someone having fun. Right. Cause like like it just, it just, it just, it just screws up our ability. Like react is obviously the monster
[02:24:04]  here, so to speak. And with this felt, yeah, like it's just, and view spikes. It's just, it's just not even worth looking at these
[02:24:21]  anymore. It's very sad. See. Oh man. Anyway. Someone with a CI or something. I don't know. Yeah. It w it was just a
[02:24:47]  random thing. I remember when the Svelte one first happened. I think I, I mean, I, I think I was at Theo's apartment and actually when we
[02:24:54]  first noticed it, we were talking about something and we're like trying to, you know, well, how popular is Svelte. And we opened it up and
[02:25:01]  it's just like, what the hell? But yeah, I, I think that like, I don't know. Someone, I, I think it was pretty intentional
[02:25:13] . Like the timing of when those things happened. Why is lit so high is a more interesting question. Um, because like, you wouldn't necessarily expect it from any other
[02:25:26]  kind of metric. Right. So I, I, I, I have wondered that had angular core. Yeah. Yeah. You know, I missed this, but let
[02:25:39] 's, let's go back here. Cause I'm pretty sure historically angular core, I want to just do this for, and, and, and, uh, angular
[02:25:47]  and view have been almost neck and neck. Yeah. Yeah. Check it out. They've always been like almost identical except for that stupid spike, um, over the years
[02:26:03] . Like it's just, it's actually, this is one year, let's go five years. Like it's, it's, it's uncanny. It
[02:26:11] 's like the, it's like the packages depend on each other. Like how exact their curve is on top of each other. Like, if you don't believe me,
[02:26:20]  like let's, let's, let's add react. Like add some other frame. What was the other preact was the, the next one on the smaller side.
[02:26:31]  It's just, yeah. blazer. Don't make me look up blazer. Uh, yeah, I, I've, I've all, it's,
[02:26:59]  it's, it's always been, I mean, it's, it's a little bit bigger gap now, but classically, not even classically. I mean
[02:27:05] , five years, is that enough all time? Yeah. It's MPM reacts just dwarfed everyone else and angular and view of have basically been like the same other than
[02:27:20]  the stupid spike. it's interesting though. Preact has been making really good gains the last couple of years. And the reason I say it's interesting is because they
[02:27:30] 're, they're, their downloads have gone from roughly say 500,000 to, you know, 2 million or a week, maybe two and a half almost. But
[02:27:43]  in the same period of time, if we were to do like star history, like on GitHub. Preact. Was it preact, JS preact? Yeah,
[02:28:20]  I mean, this looks like steady climb, but I, I need to put something else on that's grown faster during that time period. Um, let's put Svel
[02:28:29] te on. It's easier. All right. Was it Svelte? Let's do solid.JS.S.S.S.S.S.
[02:28:56] S.L.D. Yeah, it's, it's, it's, it's just kind of interesting, but like, um, the, the, the
[02:29:18] , the reception on the GitHub stars versus the downloads is in a, like, like even let's try lit. I don't even know what they're lit. GitHub.
[02:29:37]  What's the repo? It's lit lit. Okay. There you go. Lit lit. I ran it off for you. Okay. Nevermind. Fun is over.
[02:29:49]  View is AngularJS2 at one point. Yeah. It's all right. Remix. Yeah. Comparing meta framework isn't quite the same thing. Um
[02:30:11] , but yeah, anyway, enough fun with charts. I know everyone loves charts. Um, but I mean, I don't, what it, I don't really
[02:30:29]  know what the core remix library is. Is it serve? You'd think it'd be react, but like, Yeah, I got, I got to remove some of
[02:30:53]  these guys. Okay. So they're about 150. Thousand. That's pretty good. I prefer hitting it tools to see how many new projects are being started.
[02:31:19]  Interesting. Right. So like, look at like the actual, I mean, you would too, because like, that's the only way you can measure something like T3
[02:31:26] . Right. Um, and for the meta frameworks, that's, that's more fair than like looking at like, we, the download, like this is a comparing remix
[02:31:35]  to these. It's not really if the same apples to apples thing. Right. Yeah. Yeah. That's, that's, that's, that's, that
[02:31:43] 's, that's, that's what I mean. Like if you're going to go to the meta frameworks, it's a different comparison than say to lit. Fresh.
[02:31:51]  I forgot about fresh. Although I, I, there, there was some big news around fresh. Wasn't there? I, I knew there was big news. I just
[02:31:57]  didn't see it actually announced. Um, fresh. This is not going to give me what I'm looking for. Um, I mean, I found Luca, which
[02:32:18]  is cool, but I, I, I like, I knew there was big news coming for fresh, but I haven't, I haven't actually, I'm going to
[02:32:30]  check off screen. Let's make sure that it's actually announced before I do anything. It's probably like old news and you guys all know what I'm talking about
[02:33:02] , but like, I don't know that it was actually thing. Yeah. It's so that just do, do, do, do, do, do. Sorry
[02:33:17] . I'm like looking off screen. It's like, how long do I look at old Twitter posts? Sorry. I just was, I mean, it's pretty
[02:33:42]  obvious. Yeah. I think this is old news. Um, Marvin Hagmaster has been working on fresh, um, recently. I think, I think everyone knows that though
[02:33:52]  from preact. Yeah. Yeah. You you knew exactly what I was, what I was looking for. Yeah. That was old news. Wasn't it? Yeah
[02:34:01] . I, I, I was given this information before it actually happened, but then I was a way to, to actually, um, see that it did actually happen.
[02:34:15]  yeah. Yeah. Yeah. June 15th. Yeah. Which is very cool for the project. It means that's now there's actually, uh, you know,
[02:34:31]  more, uh, effort being put into the project. It's not just dropping off anyway. All good. All good. All good. yes. I, I
[02:34:49] , I, it is a VDOM in a sense. And we're going to have the creator million, uh, JS on next Friday. Anyway, um,
[02:35:04]  yeah, I think that's mostly what I want to do today. Well, it depends on the core of the build system. Like obviously, yeah, I mean, if
[02:35:28] , if, if Astro works a hundred percent on Dino, then, you know, there's definitely potential there. Um, I know it took a while to
[02:35:36]  get beat and then now with Astro. So yeah, if the core of the build system can be run completely on Dino, that's definitely interesting. Sure. I
[02:35:45] 'll, I'll pop this one up too. I don't, is, is it because they now support, uh, node APIs? Cause like, I'm pretty
[02:36:16]  sure I use a bunch of node APIs in our build processes. So if they support build API or node APIs in Dino, then yeah, I guess it's definitely
[02:36:26]  a possibility. I have not been keeping up, but I'm glad to know that there's been movement in this area. Uh, very, very cool. Okay.
[02:36:53]  I think I'm done for today. I'm just, I'm just enjoying the chat here, but I, I do not have any more content and we will have more
[02:37:02]  stuff coming with announcements, I think next week. Um, and with Aiden joining us to talk about millions. So I'm very excited for that and excited. Next
[02:37:13]  week you guys. Uh, yeah. So let's just call the stream early. Like I told you I would and everyone, uh, have a great weekend. All right
[02:37:24] . See ya.