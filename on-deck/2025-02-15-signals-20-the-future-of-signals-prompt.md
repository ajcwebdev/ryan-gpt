---
showLink: "https://www.youtube.com/watch?v=xnmvxWEK25I"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Signals 2.0: The Future of Signals"
description: ""
publishDate: "2025-02-15"
coverImage: "https://i.ytimg.com/vi/xnmvxWEK25I/maxresdefault.jpg"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one-sentence description of the transcript and a one-paragraph summary.
  - The one-sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one-paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).
- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include only starting timestamps in exact HH:MM:SS format, always using two digits each for hours, minutes, and seconds.
  - Chapters should each cover approximately 3-6 minutes of content.
  - Write a two-paragraph description (75+ words) for each chapter.
  - Ensure chapters cover the entire content, clearly noting the last timestamp (HH:MM:SS), indicating total duration.
  - Descriptions should flow naturally from the content, avoiding formulaic language.
Format the output like so:

    ## Episode Description

    One sentence description encapsulating the content within roughly 180 characters.

    ## Episode Summary

    A concise summary of the transcript, typically 600-1200 characters or about 100-200 words, highlighting main topics, significant points, methods, conclusions, and implications.
    ## Chapters

    ### 00:00:00 - Introduction and Overview

    A comprehensive introduction providing readers with the main themes and concepts explored throughout the chapter. The content highlights significant points discussed in detail and explores their broader implications and practical relevance.

    Connections are made between concepts, emphasizing interrelationships and potential impacts on various fields or current challenges. The chapter sets a clear foundation for understanding the subsequent discussions.

## Transcript

[00:00:00]  all right okay how's everyone doing today welcome to my stream i'm uh pretty excited about this one because i'm gonna get the final show off some of the stuff i
[00:00:11] 've been working on for months i mean to be fair we've been covering in the stream um for if you've come in and watched pieces of the stream over the last uh
[00:00:20]  oh i i want to say especially since like october but like since you know we've been even talking about these theoretically like with my hack mds going back into the
[00:00:33]  summer right i'm trying to think of of course everything's not signed in right now for me but yeah um i don't know we'll give everyone a couple minutes to join
[00:00:47]  on probably also post on uh blue sky that we're live second we'll talk about this later sorry i just can't i don't want to tear into react too
[00:01:24]  much we have too much important stuff but maybe if we have some time at the end we can talk about it all right actually you know what i want to quote tweet the
[00:01:37]  other one should open should open that too sorry i just i wanted to i wanted to start this stream on time so much so that i actually like just jumped right in
[00:02:05]  practically not even ready just because um as i said very very excited about this um all right good all right all right cool cool cool how's everyone doing everybody saying hi in
[00:02:24]  the chat good good good good hello no no i have not started at all i think i just said like an okay all right kind of talking to myself that might have come in
[00:02:41]  before the stream talked i was also adjusting the volume on my mic so that might have been it um hello hey hey greg how's it going hi yeah i'm sorry
[00:02:53]  it's valentine's day evening too um if i was streaming at night i wouldn't be doing it tonight but unfortunately where some of you are it is evening so yeah
[00:03:02]  um i apologize for that but this one's gonna be a good one and if you're here god there's too many highs to keep track of um if if you're
[00:03:11]  here then um you can ask the right questions and see where this goes yeah deb is a happy person today he's been very helpful you know it's always good to get feedback
[00:03:26]  on stuff and he's been right there um testing out and finding bugs in my stuff almost immediately that's the hardest thing when you're working on new things you like you
[00:03:35]  like make things and you're like think it works a certain way and then you find that there's like a bug um and you don't intend it but the other person assumes
[00:03:47]  that it's intended and they're just like oh interesting works this way but when they can go off on that tangent and then you're like oh crap that wasn't the way
[00:03:53]  it's supposed to work anyways anyways we got what 200 plus people already in here so i think we can probably get started twitched a little bit weak today but uh you
[00:04:08]  know great place to watch on as well as youtube you know send those hearts those likes they'll help the video later as you know i don't always post videos i did post
[00:04:19]  my very first video last week when i clipped out a section um i was thinking of doing this as a video but and then i'm like oh man i'd have
[00:04:26]  to do so much prep and it won't yeah i i think some of the stuff i'll be showing today might be so crazy people won't understand what they're seeing at
[00:04:34]  first so i'd much rather have the chat help ask the right questions we're not at the like conference talk level you know raise the signal out of the component local state global
[00:04:46]  state point of this demo yet um all right all right all right so where should i start maybe i should just start here this is funny this example is the least interesting thing
[00:05:01]  we're probably going to do today this is like the easy part the part i did like five months ago but i but it's going to show something that i think will immediately
[00:05:08]  put us in a different world and then we're going to build up the solution from the beginning i want to talk about several topics today async's the most obvious one
[00:05:15]  but um i i do want to talk about the idea of how push pull can actually change your perception of how things execute like i feel like a lot of frameworks have what i
[00:05:30]  call granular pull or sorry coarse grained pull like react and then people are just getting used to now about the push aspect of signals where you're just like oh only this piece
[00:05:39]  updates but we can leverage the push pull uniquely and that's going to be a big part of the solutions and then i also want to talk about some new types of react
[00:05:47] ivity i i did a stream a while ago on mutable uh like derived stores like mutable um reactivity and it was based on article i wrote which was fine it showed
[00:06:00]  like a concept but the problem was it wasn't a very safe implementation it was kind of like uh you know hack it together and it kind of works well i figured out how
[00:06:08]  to make the safe implementation and make it performant um which is actually very ironic because there was just a bunch of conversation recently view vapor i think uh evan was showing
[00:06:16]  off some performance and he's like oh we don't use crate selector you know it seems like a specific kind of hack and the thing is we figured out how to general
[00:06:23] ize the crate selector problem so it's not a hack i agree the original one was kind of like very specific use case but i think it's actually a general problem in
[00:06:30]  reactivity and i found a performant and correct way of of doing it so i want to talk about how that works as well so we're going to see all the
[00:06:39]  aspects of it basically we're going to use solid experimental 2.0 as an example there's lots of bugs in it still but i've implemented all the client side features at
[00:06:51]  the core level other than transitions or transactions whatever you want to call them um the new version of that uh so we'll be able to use that directly when looking at error
[00:07:01]  handling and suspense and all that stuff just we haven't done transitions transitions are still part of the equation here i don't think we can get rid of them um but everything up
[00:07:11]  to that point is a whole nother world so i'm very excited about talking about this stuff today so you're saying it's ready for prod no i'm not and
[00:07:23]  i've actually released an announcement about the status all 2.0 which we can look at later in this week in javascript okay so yeah no what's really interesting about
[00:07:32]  this is the mechanisms that i'm going to use today are completely run time you don't need a special compiler you know i'm people will build compiler stuff based on these
[00:07:40]  mechanisms i'm sure um what's really cool is that what we're going to be looking at today is fundamental to a level that in theory any signals implementation could look at doing
[00:07:52]  it also highlights the importance of scheduling and why say something like crit effect isn't in the base implementation i've been doing a lot of work trying to still figure out the how
[00:08:05]  these primitives work but let's start with the results and roll back backwards right so um let's start i'm going to open up an example i shared on uh twitter
[00:08:16]  earlier today um and i think some people should be familiar with with this example um and this this is a very basic look at it but the idea here is i've created a
[00:08:31]  suspense component and for those who don't know what suspense is the idea is like once something below is not ready we're just going to show some fallback you can see
[00:08:43]  this when i press refresh there's a loading here for the two seconds that this is loading and then we're going to show the content now different frameworks have different ways of implementing
[00:08:53]  this right right and yes there's two places that i mean there's there are going to be a number of breaking changes but i think there's two and i'll go
[00:09:08]  over them today that i think will be very noticeable to the developers they're the ones that like that will catch them off guard so i want to talk i will talk about those
[00:09:18]  today and why we got there um but the key part you know it i'm hoping that i'll convince you that they're completely necessary and the that it worthwhile so we'll
[00:09:28]  get there but first we see this mechanism suspense a few components of the same component i just pass a name you can pretend it's like an id or something it's something
[00:09:37]  that defined a unique characteristic of the component and then what i've done here in this component this is just garbage for metrics is i've created async which is calling fetch delay
[00:09:46]  and the fetch delay is basically a promise it's you can pretend it's a fetch request and it sets a time out for the time you give it for two seconds and
[00:09:55]  then it just sends the date the current time stamp as a result and then i'm rendering the name of the component i'm rendering some count which is literally just like i could
[00:10:07]  put console log here but i wanted to visualize it it's just something it only gets incremented when the component body gets rendered um i i put it up i'm formatting
[00:10:18]  the timestamp so i'm removing this offset which is the time now so you can basically set time now zero instead of you know whatever the the current unix timestamp is
[00:10:28]  and i'm formatting both the time start that we get here and the time that we get resolved from a and as you can imagine what happens here is i'm going to
[00:10:43]  refresh it we're going to see loading while it's loading and then what we're going to see is that each of a b or c rendered once they started at time zero
[00:10:51]  or point zero zero there one you can see it's basically at zero seconds and they all took two seconds to fetch because they all take two seconds to set fetch basically they all
[00:11:00]  fetch in parallel right but before we move on i want to just point a couple interesting parts of this example so you can kind of start thinking about like hey there's already
[00:11:14]  something not quite normal going on here i'm hoping everyone can see the the the text in here clearly enough um so the the first thing that that that we're going to notice
[00:11:30]  that's kind of interesting is that format takes a time number and then it subtracts some time minus offset divide by a thousand returns returns it right and i mean just for
[00:11:44]  fun have you ever like what happens if you do undefined minus one you get not a number how about if you do undefined minus one divided by a thousand
[00:12:02]  it's still not a number so um at least it doesn't error i'll give you i'll give you that much um but i so the fact that there's an error
[00:12:14]  actually doesn't actually prove the point that i was thinking of showing here but the question you might have here is if we console log time will it ever not be a
[00:12:32]  number right let's let's let's refresh this there's no hot level uh hmr in this demo i'm literally just using roll up raw i haven't even got around
[00:12:47]  to making a v plugin work yet but let's see what happens no time oh yeah that's funny um tryer yeah it's because it there's there's six calls
[00:13:06]  there's the each component calls it twice so you saw the first three calls and then you saw the second three calls come in if you notice time is never undefined
[00:13:14]  in what happens is the first set of calls which happen you know synchronously when we call start time happen first and then the second time only these ones happen this gives you a
[00:13:25]  hint into the fact that the component only renders once so basically if we watch it one more time first time the components and this and we can we can actually get uh yeah
[00:13:37]  i don't want to change the api too much but i think i think you can under you can follow what's going on here essentially the first time format gets called
[00:13:46]  is when it gets called in the static time and then the second time it gets called is when this resolves so how does that even work well let's look at this new
[00:14:02]  primitive and to some of you it's not that new because we um we introduced this in um in solid uh uh router in 1.0 time period a very similar primitive
[00:14:18]  but this is now a core primitive coming directly from solid.js called create async and in this thing it ex if you look at the signature here it expects a its computation
[00:14:27]  sends in the previous value and then expects a promise of a number an async iterable of a number or a number back and what does it reserve return access server number
[00:14:39]  so if we look at a a is an access or a number for anyone who doesn't know what an accessor is in a solid it's just a function called it returns
[00:14:47]  a number this means that a never returns undefined which is why we never saw undefined in here that's why a will only ever return number so all those
[00:15:03]  like null checks like is it there is it ready you know in that kind of is it ready is still a fair question but the question of is it there like is no longer
[00:15:13]  question here a promises that when you access it it will give you the result async value oh it will throw then exactly see people people don't always get my subtwe
[00:15:30] ets what you're gonna see is this god this is like the second time i've done this you know like categorically is react having really good ideas yet being very very limited
[00:15:44]  by their component model like basically react has exceptionally good theoretical ideas in terms of being able to handle problems in a correct way it's just that the thing you can do
[00:15:57]  with react are so limited so yes we're throwing promises i know i know what does fetching have to do with signals well i you have to keep on watching this the signals
[00:16:17]  have been synchronous so far right and i'm gonna get back we'll get to the basics and see what the tie-in a is a signal right it is an as
[00:16:29] ync signal but it is still a signal if i turn this into just a signal it's the same api where i read it okay what do i have this what do
[00:16:51]  you have for me dev uh all right yeah we'll get there dev it's a little bit early for that i i get where you're where you're getting i'll
[00:17:05]  keep that one open in the background so okay it is an async signal and it's fetching in parallel because it doesn't throw where it fetches it throws where it
[00:17:27]  reads this throws right here when i access a it through and it doesn't throw up the whole tree i mean i wonder if i can show the compiled output here i probably
[00:17:44]  can't can't i you can see where it throws if i can just pull out the this is obviously easier in solids playground but if i can remember where they put it in
[00:17:55]  here in stacklets it's been a while it's got the weird name it's like github actually dist source dist main lovely okay but let's get down to
[00:18:09]  the bottom of the file and look at what our jsx compiled to do to do to do i mean you can see it inside our component we have four separate insert expressions
[00:18:27]  right so where does a read throw it just throws up to this insert effect essentially it's a this is an internal api it has a create effect render effect underneath but it
[00:18:40]  basically just throws up to here so everything parallel doesn't need to throw in fact it just sits there like normal and then when it's done we only need to rerun
[00:18:56]  just this one thing it's the exact same thing that we do when we show people how signals work in rendering in solid you know there's the one effect you know you add
[00:19:06]  all the components you add all the things and you update the signal and the press the button on the counter and just the one effect updates well why can't that be the
[00:19:14]  same for async right so we don't have to throw away our render tree just because we have something async right that would be silly no um what we want to
[00:19:35]  do is control where it and we can know when it throws when it catches you know hey this effect aired out you can't show the fallback until this effect succeeds and i
[00:19:51] 'm going to talk about the mechanics of this because it's very related to error boundaries and self-healing that we're going to cover in a bit um but mechanically
[00:19:58]  you can picture it you create something async it becomes a signal and then somewhere down somewhere else you read it and it's there that it throws um which means that everything
[00:20:08]  around it is perfectly safe to go which is why all of these parallel things um are actually perfectly fine because they are not related to each other right um because you get in here
[00:20:25]  you render this something in here throws and catches you render the next one something in there throws and catches in there something throws and catches and it doesn't take very it's
[00:20:35]  like not too hard to picture that nesting it doesn't change that behavior so yeah yeah the the event handlers are a consideration um but we'll talk about that because
[00:21:07]  i've also considered this a bit because there there there there's there's some stuff here two questions what about async await will the type b accessor promise number no
[00:21:25]  async await is still returning a promise so um if we go back into our parallel fetching example i mean you think you could get it right from the types like i mean
[00:21:37]  i'm not going i could do this i think this isn't going to change the type i don't think why is it being weird did i screw up a screw up
[00:21:54]  uh oh i put on the wrong spot here async but uh i mean fetch delay is still the same type it's time promise number so this is still access serve number so
[00:22:08]  you can make this async wait you could put it in here too if you really wanted to um for the same reason because if you look at it it's a promise
[00:22:19]  of a number and a sync iterable of a number or number this is important because this lets us support things like readable streams um and whatnot but i don't know if i
[00:22:31]  need the demo that right now i mean this implementation is completely at the reactive level so how much effort is for something like this installed i mean they could build the reactivity
[00:22:54]  rendering system in a similar way they could use their compiler to do some stuff i don't know like it's definitely doable that's why i'm talking about here in a general
[00:23:02]  sense maybe people won't like throwing you know i don't know okay uh async starts when created and we're gonna we're gonna talk about that in a little bit
[00:23:17]  i'm gonna get to that but the idea here is if you wait till read you can cause the diamond problem again um so generally i'm i'm i'm i'm
[00:23:29]  on the position of that it should fetch eagerly or scheduled and that it should um basically maximize parallelism without causing overfetching which we'll do some nice scale draws
[00:23:41]  in a bit to show what what i mean by that okay sorry there was two questions there right what about async await and the types yeah i think we covered that okay let
[00:23:51] 's continue um the async part isn't actually too complicated um it's the way that i've handled suspense and error boundaries that's interesting like they have to be concepts
[00:24:10]  at a reactive level i mean they're built from other permittives okay so let's just get rid of that all right okay let's go to our nested example
[00:24:27]  because our nested example is almost the same except we have suspense anchor or so not anchor it's funny i'm so used to capital a being anchor suspense component a and then
[00:24:36]  each of these components i kind of duplicated them are basically the same as the old component where we're still doing that count capture and then we're um and then
[00:24:51]  we're like putting b we're showing the same content and then we're showing b beside it and then we're showing the same content and showing c beside it so basically each
[00:25:01]  component fetches its own data and shows its own data nested so like as i said a calls b b calls c so they're not parallel anymore this one's doing
[00:25:19]  they're all fetching in their own component like a fetches for a b fetches for b and c fetches for c and they're all direct descendants of each other
[00:25:29]  so the interesting thing about this example as you guys have probably seen already from the results is it's loading for our two seconds and then it's the exact same as if
[00:25:43]  we parallel fetch them because from our perspective these are parallel fetched because as you know in solid components are an illusion right we don't again we're not restricted by a component
[00:25:57]  model so you know as long as you're not saying like render c if b like as long as you're not directly stacking the dependencies of them so like b depends on
[00:26:10]  c somehow or sorry c depends on b or b depends on a there's nothing to prevent these from all just going in parallel because well they are parallel this this is only needed
[00:26:24]  in this one effect and this is this is way over here it has nothing to do with that so now some people like oh well did we just do it did we solve
[00:26:36]  waterfalls yeah because cones do not throw now i said yeah yeah i mean i've been trying to emphasize this forever it's it's funny because react makes such a strong
[00:26:48]  thing about like you know with our smart compiler you know we can do all this automation and we don't need signals you know you know these underhood implementation details the problem is
[00:26:59]  they're limited semantically like the actual design of their language prevents them from doing some of the stuff i'm going to show you today it's not it's not like
[00:27:09]  we can fix this with a compiler it's just not how the model works even from a language level stuff um perspective so i mean some of these things they could probably kind of
[00:27:21]  do but as you watch through you we're going to get to a few examples where it's like you have to acknowledge that there's reactive variables that there are something like signals
[00:27:30]  that your data is reactive otherwise you you it's a re-render model makes no sense semantically and i it wasn't until i started getting to this async stuff
[00:27:40]  that i realized that there were potentially real cases you know it's been very exciting as you can tell because when i started working solid 2016 17 time period i was just like trying
[00:27:50]  to prove that we could do what reacted that this model could do everything that react can do this time around i'm excited because it's like we actually i get to focus
[00:27:59]  on like what can we do beyond what react can do right and i think i think we're going to see a lot of it today as i said this is probably the least
[00:28:07]  interesting example that i'm going to show um today a weight is pure overhead well i mean we'll talk about composition in a minute yeah why why would props like yeah perhaps
[00:28:25]  children like why would a prop yeah so like it's interesting what i wanted to get to before i kind of went on that tangent is we know we haven't completely solved
[00:28:39]  client-side waterfalls um in because obviously some waterfalls are unavoidable a and b client has a secondary mechanism that gets in our way here and that is code splitting
[00:28:53]  so it is quite possible that you do not want to load all the pages in your app um ahead of time so it would make a lot of sense uh to code split
[00:29:05]  and code split will require you to fetch in the main chunk because otherwise you have to wait for that code to load to do the fetching it's it's an inherent waterfall
[00:29:14]  when we split the code so that is beyond the scope of here this is why i'm still a big fan of routers level hoisting stuff that we do obviously in
[00:29:24]  solid router and the patterns that we've taken there and moved into tan stack router um like there there is a reason why those things exist still even in this model um mostly
[00:29:38]  for code splitting though from a pure like i am just like rendering components and component composition standpoint if you don't put an await in the middle of your component then you're not
[00:29:48]  you don't have to be blocking do you know i mean like this is the craziest thing when you like when i saw the server component design and they had async components with
[00:29:55]  the wait in the middle i'm just like this is literally the last thing i would ever want to do because you're like saying like a wait blank like what else you
[00:30:02] 're gonna do it's the same reason why react users use in the client because they they know that a wait in the middle of your component is a like a terrible thing when
[00:30:11]  you have different updates coming in from different places but obviously rscs are in a special zone because they don't have client-side updates and state updates so it's
[00:30:22]  it's safe enough in a sense you almost want generators on the server i'll get into that another time but like i i get why they went with that api but concept
[00:30:31] ually i think people should be realizing that async await is the last thing they want i know everyone's like oh but it makes my code all logical and synchronous well do you
[00:30:41]  know what logical imperative code like that is why just sorry i just said it's imperative you're basically we're using declarative frameworks places where we have declarative views declar
[00:30:51] ative data relationships async await sets up your code to be back to being imperative again it's it's it's like an anti-pattern so like you don't
[00:31:01]  want that in your framework code you can put it out here somewhere you have a logical order of operations but your your framework is declarative async await and components are not
[00:31:13]  friends okay make solid.js around um check out our native script and tori um streams that i did oh god it's been a while was it yeah i feel like it
[00:31:32]  was was it wasn't just last fall it was like a year ago fall wasn't it anyway there are native options i am obviously we don't have the i forget how
[00:31:43]  big the team is that meta that works on uh react native it's it's huge we don't have you know several dozen people working on this problem um but i think solutions
[00:31:54]  in open source area are getting a lot better okay yeah okay so this is like getting thrown in the deep end um i think we should step back a moment from from these
[00:32:12]  examples and uh and and kind of like get back to the the fundamentals so before i do that this is this is this is clear you understand how parallel and nested fetch
[00:32:30] ing is essentially the same thing so where do i put async fetch i i got something very nice for you it's right here it's in create async put your as
[00:32:47] ync fetch in here or call it in here this is your async fetch there's this beautiful thing called create async and unlike an effect which does this right thing it
[00:32:57] 's derived and non-nullable it will just if if if your async thing was i mean i don't know if i can force this but let's say of
[00:33:06]  type user you get a user right if you're sorry let's see if i can i'll do it at the promise level a promise of user means an accessor of
[00:33:20]  user um is is is what i'm i'm getting at okay yeah yeah yeah i mean i'm gonna have to mechanically show you that in a bit but the gist
[00:33:36]  of it is each of those effects are part of a queue that runs the the core scheduling here in in a reactive system yeah uh maybe it's a scale draw time a
[00:33:47]  little bit before i even get into this is there's there's three pieces of the system right there's signals which i will draw here like this and then we'll use
[00:34:03]  the diamonds which are computed or memos so let's do this so signal let's use a larger font signals signal i'm going to call it a memo it's a
[00:34:22]  terrible name i mean i did steal that from react it makes sense actually in a push-pull system more but and the way i'm going to talk about it lazily
[00:34:30]  is going to make sense and then we have a third piece which i'm going to call effects okay three shapes okay this is not like the squid game shapes but okay effect
[00:34:42]  all right three shapes now what happens in a general and reactive library is you interface with these only these have the ability to write you can like you can write all writing comes
[00:35:01]  in through the signals right don't worry we'll talk about errors as well so only writes coming through the signals and then when signals get updated they kind of i'm going
[00:35:20]  to use this as a dotted line here they kind of tell the memos and any effect that i might have subscribed to the the read i mean it could also be directly in
[00:35:30]  a single but they kind of notify down and then there's a smart heuristic of deciding what needs to rerun on the way up i have a whole stream about this
[00:35:40]  with milo you can check it out in the future but the idea is then the effects sorry where's the dotted line bring it back then the effects end up going oh
[00:35:53]  hey have you updated and it checks and it goes oh actually i don't know i need to check this one well in this case it knows the signal has updated you know it
[00:36:02]  doesn't actually have to go up because the signal can tell it when it does the initial right that it's changed um so but you can picture that it just kind of
[00:36:10]  goes up the chain that asks this question the point is this notifies and puts these in a queue and it puts them in like this uh stack that needs to know later to
[00:36:21]  go pull them all down so even though this notifies at first this goes in a list and this list you run through all the effects so if an effect fails while it
[00:36:31] 's running in that list we what i'm doing essentially using context more or less i'm basically saying like every effect under this suspense boundary um because we have this concept of ownership
[00:36:45]  in solid um where this idea of like context is this idea that any reactive um thing built under another reactive thing is owned by the parents so when the parent reruns it
[00:36:57]  disposes of the children um our trees are actually just like almost like effects and effects and effects and effects so what ends up happening here is we have this queue and it's
[00:37:10]  owned by somewhere above in context the suspense boundary if this fails we're just like okay keep note of that um we'll need to run it later and we just like tell
[00:37:21]  that thing like hey look more than one thing i literally keep it in a set it has failed switch the toggle signal on that control flow to show the fallback and then later
[00:37:33]  on when it resolves or you know and it's able to remove itself maybe it gets cleaned up for some reason um it's it's it it does the same thing and
[00:37:44]  it goes oh hey i removed myself there's nothing left flip that toggle that's that's the core mechanism the throwing is localized to the effect and then the queue on each
[00:37:56]  granular level can decide you know keep be kept track of from a suspense standpoint yes memo is the same as derived and spelled yes again errors you could try catch inside your your
[00:38:15]  your create async if you wanted to but generally errors are handled where they're read not where they're fetched because we we care about where in the ui we can
[00:38:28] 't get it and in theory non-async things can error as well you can have a memo error and again it's not it's not the memo's responsibility to
[00:38:37]  tell the error boundary it's the effect that reads it because that's the part of the ui that can't render because of the error we've inverted the whole thing around
[00:38:56]  okay so i'm hoping is it literally implement try catch yeah i mean we we i mean i can show this really quickly and i think anyone who i'm not going
[00:39:24]  to dwell on this but anyone who wants to see the implementation um uh of what i'm doing it's all on this main branch in the solid signals repo i'll drop
[00:39:36]  it here for for you for all the techie people out there but to answer your question in very simple way that other people will understand if i find the update function in here
[00:39:49]  what you're gonna see there's update track update you're gonna see this try dispose the previous cleanup run the thing if it succeeds write the new value otherwise if error instance
[00:40:04]  of not ready error write an unchanged value and set some flags on it otherwise if it's some other kind of error handle the error on the node this is the generic computation that
[00:40:14]  everything else derives from so at its very core it is just a try catch there's more to it but yes right yeah well let's i'm hoping yeah let's
[00:40:42]  uh yeah so where was i was in a scale draw okay so at the very base level our mechanism is about pushing everything down to effects that get scheduled essentially okay so what
[00:40:54]  i'm going to do here is i'm going to fork this parallel fetching one and i'm just going to call it like playground and we're going to build some basic
[00:41:01]  stuff here i forked the parallel one because it's simpler we can get rid of multiple components we can just have our one component and now we can play i'm going
[00:41:13]  to get rid of most of this extra garbage um count let's just put a in here let's work and there's our time stamp without any formatting um okay maybe we
[00:41:44] 'll set our fetch at one second okay cool so now now now we're now we're set up to play okay so yeah i mean i've i've kind of hint
[00:42:01] ed at this already and instead of time now because i want i did the whole time thing because i was trying to to like show the parallelness let's just do something
[00:42:14]  silly where we just whatever value we pass to this um so yeah let's do value um p i guess and then um we will resolve value this is just the most generic thing
[00:42:38]  i can think of doing and that way when we say something like hello in one second we should get low in one second and when we look at our types create async
[00:42:55]  we'll get a accessor number why does it think we get access to number because i told it it was a number um let's tell it it's a t okay
[00:43:05]  we get accessor string okay there we go tada yes the the package is right here you can you could technically use it today it's changing still fairly rapidly but it is
[00:43:22]  a separate package it's published on npm at at solid js signals all right so now now let's talk about some characteristics here of our async here because we'll
[00:43:40]  just um let's just leave there okay let's talk about some characteristics of our async so first of all we can derive from it so let's go upper you know
[00:44:00]  this is always my favorite create memo a dot to uppercase and we know this works um hopefully upper and we've got capital living and again if you think about it
[00:44:27]  this one i know for sure but if we went into the console and said undefined to uppercase we're gonna get a type error so this is this is
[00:44:41]  non-nullable suddenly which this is just a nice blessing you know how much everyone gets annoyed at signals and ternary stuff this reduces that narrowing problem significantly um
[00:44:53]  but yeah so here we go it derives but i think the part that might be more shocking to react developers is that which one of these suspense fallbacks will trigger here
[00:45:23]  right let's format let's save this format yeah which which one of these suspense fallbacks will trigger question for you for you all in the chat what would react it well
[00:45:39]  first of all react can't do this because in react you can't i mean you can technically fetch above the the suspense boundary but then you you're gonna have to use in
[00:45:54]  here so the suspense has to be in a separate component you can't just like go oh i'm gonna fetch some stuff and then suspend it down here good i i think
[00:46:02]  the chat knows what's up yeah it's because everything happens on read loading too yeah so we don't need loading one anymore okay solid one works like this too except for solid
[00:46:15]  one has this terrible terrible problem where upper actually triggers the up the bent boundary because this is actually owned by here and we memos participate in part of the the this kind
[00:46:27]  of boundary graph whereas in 2.0 memos do not participate only effects so it's just this one effect in the div and sure enough this becomes our loading state okay so
[00:46:40]  okay yeah yeah suspense while creating new components okay so well actually let's good question what happens if i don't put suspense in here i i'm i'm undecided
[00:46:58]  what i want to do to be fair but from a technical standpoint i don't need to do anything right i mean it just if there's no suspense to notify to do
[00:47:13]  the fallback for we can just not like yeah i mean it's tricky right because this is what i call unpredictable tearing i have a solve somewhat of a solve for unpredictable
[00:47:42]  tear tearing but the the problem with unpredictable tearing is the intersection of async stuff with non-async stuff right what i mean by that is if i had let's
[00:48:03]  pretend now that i have a signal okay const um it's it's funny what i'm gonna it's like backwards whatever name equals create actually i need the you know how
[00:48:18]  we do here name equals create signal joe whatever right and then if i was did i mean obviously i can just stick it out here right uh and then when i refresh
[00:48:39]  we're gonna see hopefully something work properly what am i am i missing an import haha create signal right you you see this this works kind of oddly but it works and but if
[00:49:00]  i do this now they're entwined so joe doesn't show up until until hello shows up it's intuitive but it's also like it's i don't
[00:49:21]  think i don't think it's good i'm gonna do this i don't think it's good that i mean this is initial showing but what what if name was one
[00:49:37]  or was one name and then we change it to another name are we going to end up in a scenario i mean i can do it right now i'll show you what i
[00:49:48] 'm talking about you do it right now we can add a button button on in on click set name john set name right oh sorry click watch watch what happens oh right
[00:50:26]  because i fixed this already huh all right never mind i can't show you because i already changed this you might be wondering how this would would work um i i got i got
[00:50:40]  ahead of myself here did you what i was expecting to happen what you should have expected to happen when i showed you so far is that hi hello joe would still show
[00:50:51]  when i clicked up and this would update to john and then this would update to john when when uh when um the async came in i was thinking that it would like
[00:51:04]  you would see joe in two different states wait so does a return or does it throw this is where things are going to get interesting in a minute because the answer is
[00:51:25]  a never returns undefined but sometimes a doesn't throw so yeah i see the difference here is you as i was trying to get at is you kind of want suspense
[00:51:51]  which is why i've been tempted to not allow this behavior but you kind of want suspense here so that you can uh so that you can handle you know the weird jumping
[00:52:07]  in and out now it's just loading and it's ready you know what i mean now the qu the the thing is i was already kind of getting into this we have multiple
[00:52:23]  options on how to handle things when they update and the way that we typically do this in suspense and the way i even first implemented this is that when i click this button
[00:52:34]  you expect this whole thing to unmount and and like render again and that's the right question for consistency but i've been working on something and if you remember some of my
[00:52:49]  hack mds here um my notes i've been work i've been working on something for ages god i can't even go back far enough the nature of async further
[00:53:00]  further no oh where is it no is it further than this no not further than that run once suspense um yeah eight months ago was the last time i changed this and this was
[00:53:21]  a running document it was this idea that is it possible that we don't always just go to fall back um when we update so i'm going to show you what happens
[00:53:38]  when we do this here look it's loading but then when i click on it it it it didn't unmount itself what happens if i console log in a component um
[00:53:55]  depends where you like what component it will read it and go up to the nearest suspense boundary that the components called in i don't recommend doing this as you know in solid console
[00:54:04]  logging top level is basically pointless no one does that like in fact if i go in here and look at our playground and i go oh i want to know what count is
[00:54:15]  i go console dot log count first of all eslin is going to be like don't do that second of all you see that one it's never going to update because the
[00:54:29]  component doesn't run again so technically yes it will throw but also technically you should never ever do this because it it literally does nothing do you know what i mean okay
[00:54:55]  yeah i don't know if i should be jumping into this run once thing just yet um because fundamentally um yeah no i understand but very quickly you will understand that it doesn't
[00:55:20]  also doesn't work so it's not so much a problem when the model doesn't literally doesn't work the thing is internally in the reactive system i just showed you how
[00:55:33]  this is often tearing and that that's weird i actually had to add this because internally in the reactive system we actually want for consistency's sake to always throw see here you
[00:55:47]  can tell the only reason that this is possible where joe can update independently of this of of of an like where is it uh i guess i have to technically i have
[00:56:03]  to technically i have to trigger this as well sorry the only way that this can trigger up like i'm trying to think of a better way to do this um plus maybe
[00:56:20]  plus name dot first i don't know name zero like just get the first letter i just need something to show that it's different after we do it right it's gonna be
[00:56:33]  hello j and then it's good and then it's gonna be i don't know the first letter is the same um set name ron okay okay see how it goes to
[00:56:50]  ron first before the the r goes to j the only way we're able to do that in the middle of this expression is if late this the when it updates the second
[00:56:59]  time it actually gets the previous value instead of the throwing right that's the only way that this is possible so like the the the problem is if this relationship i'm showing
[00:57:18]  you the exception case first when i should show you the base case right which is which is which is the problem you you let's um let's let's basically create i
[00:57:35] 'm trying to think of how we want to create this um i'm gonna i'm gonna create an effect now this is going to be probably the most controversial thing that i
[00:57:50]  do on stream for existing solid users because i'm going to do this and this is not a particularly happy thing for for people because i'm gonna show you because essentially
[00:58:25]  you're like why is there two functions right why is there two functions and when i refresh the page you're gonna see hello j and when i click it again you're
[00:58:45]  gonna see hello r when it when it finishes and it's because this effect separates the tracking part from the actual side effect in a sense this is like the dependency array yeah
[00:59:05]  the only reason i didn't do this is because it also passes the previous value in so it's going to console log multiple things i i told you that there was two breaking
[00:59:16]  changes that i foresee that would really get to people this is one of them react was right all along got it yeah yeah yeah yeah and i'm going to show you why in
[00:59:32]  a minute it looks a bit like view watch yeah and we had an on helper before it's just any v dom library already kind of knew this there's a very important
[00:59:44]  reason here well first of all i want to show you something interesting i don't know if you guys picked up on it but the first interesting thing is i'm going to
[01:00:07]  put this in here just because fallback equals loading top okay just so that people can see it when i refresh when i throw the page and it gets it the same as
[01:00:30] ync you don't really notice a difference but when i which loading symbol did we see we saw loading not loading top so the the first thing you're going to notice here that
[01:00:40] 's kind of interesting is that create effect is above the suspense boundary reading this this async value and it's not going to the parent suspense boundary why don't you do
[01:00:59]  the same because we we don't need to we we we literally don't need to react hasn't got rid of the dependencies on on effects to be fair uh jlark
[01:01:15] y i am i'm talking about adding the dependencies to only create effect only it and if you if you continue on you'll see with the the new design is not solid
[01:01:25]  you will never need to use create effect like very rarely first of all i mean i put it up to you what do you use create effect for in react the funny thing
[01:01:51]  is if felt wants to they have two choices here they cannot throw and use something very smart with the compiler to handle this stuff but they'll be dependent on the compiler for the
[01:02:06]  behavior or they will opt into something that i don't think is acceptable so my guess is they are going to use the compiler which they depend on anyways as i said this
[01:02:18]  is completely a runtime mechanism yeah but what do you use it for when you choose to do the right way yes but the the thing is we're going to make it easier
[01:02:43]  and easier to do the right way because i'm going to show you the second breaking thing after here but let me let me show you what the what the problem is here because
[01:02:49]  the first thing is effect the first another change that's kind of interesting here is that suspense boundaries and error boundaries generally only apply to rendering we have create render effect that triggers
[01:03:00]  it this doesn't need to be part of it um technically speaking effects can handle their stuff they can handle their own errors too um if you want to you can make them go
[01:03:08]  to an error boundary but default wise what i'm thinking is effects are like a mini app they're like their own thing so you can forget about suspense you can forget about
[01:03:18]  all of you know these different mechanisms and just play with signals memo and effect and they will do the what you expect create effect will wait for all the async to resolve and
[01:03:31]  then it'll run the effect as it's able to right the problem the problem with the classic effect design i i i'm going to show you it i don't know if
[01:03:40]  i want to do it as a live code example but i can show it i can show it to you as some dead code i mean i can show it to you live
[01:03:48]  as well let's let's see if i can pull it out but i think it's the thing if i actually go into um the next channel on the solid discord we will
[01:03:57]  see i actually literally came up with an example this morning where i asked everyone a question and i was like here we go here's my example to the audience what assuming that
[01:04:22]  this is async that you know returns an accessor of a an accessor b and c and these are async fetches what does this console log with the current
[01:04:42]  api right i basically fetch a returns a fetch b returns b fetch c return c does it does anyone know what this means console logs abc undefined nope maybe
[01:05:00]  the answer is i don't know it can return all of i think i think dev actually wrote all the possibilities in here a it can return it can return a a b
[01:05:19]  a b c it can return a b c it can return a b a b c you can return a a b b c it really depends on what order these things because if
[01:05:33]  a isn't ready it's gonna throw and then nothing else logs but if a finishes and b is ready then uh or isn't ready then it it's gonna throw and then
[01:05:42]  it's gonna rerun it again and then it's gonna run a and b again my point is i don't want my effects to be unpredictable like this yes because as
[01:05:57] ync throws we yes it can't be undefined yeah like i i don't know right it whereas if i went in here and wrote this which again isn't gonna
[01:06:21]  make me any friends but if i wrote this it will log a b c exactly once right like i i this is not i i don't think like here's the
[01:06:51]  thing you have to understand with async there's only ever three possible options with async okay teaching moment one you bail two you stay in the past three um what's
[01:07:12]  the third one i always always forget this one um fail stay in the past um tear there we go there's only there's only three options and every decision that you make around
[01:07:27]  async is going to follow these three options right approximate yeah approximate yeah but approximate is a version of stay in the past um bail means it's suspense you just throw away
[01:07:45]  everything you can't show it because it's inconsistent stay in the past in its ideal form is like transitions it's like you get to the source of the change and you're
[01:07:56]  like look nothing here from this point can can change and then tear is what we get in every single app that we build when we don't account for this stuff um it
[01:08:05] 's like it's like sometimes uh you've got the stuff the old stuff and sometimes you got the new stuff and you know good luck i say that negatively but a lot of
[01:08:15]  times what people are looking for is different behaviors on major parts of their application when you're routing you want generally for smoother transitions you want a combination of staying in the past for
[01:08:28]  that's what like paint holding does in the browser for as long as it makes sense to and then you want to bail out on the areas that are slower that you don
[01:08:35] 't care about in this give you know loading placeholders you don't want to tear generally on big moves but when you're on a page updating some micro stuff tearing is fine
[01:08:44]  staying in the past you have to be careful to make sure that it's responsive that you have correct performances that that's also fine um but you generally never want to fail and
[01:08:54]  because it's just like you're doing your thing and then just like the whole page yanks out of you anyone who's you use suspense in solid or react has experienced
[01:09:01]  this over and over again it's really weird you're just doing something that's like you know um and in the case of effects i don't think bailing is an option
[01:09:12]  i don't think tearing is is really what you want these these are things leaving the system you should never use effects to synchronize state so the best option you have is
[01:09:24]  basically stay in the past right which is is requires you to know the dependencies up front because otherwise i i mean i i don't want just random zalgo happening when stuff leaves
[01:09:39]  my system this is this is kind of terrible right and i'm going to convince you by the end of the stream to basically never use create effect so i mean i just
[01:09:52]  the number one reason people use use effect and react is fetch data you have create async so there there we've already solved the biggest one but we're going to have more
[01:10:01]  than that you could you could do that if you if you wanted these all to be wrappers we have this debate all the time with the signals the thing is we use
[01:10:16]  a lot of prop getters um and like props so there's a there's another reason you want this predictable and i think this is the most compelling this is what sold me
[01:10:26]  in the end do you want to know do you know why last shot at everyone what does this log i i i'm even at more of a loss with this one because
[01:10:44]  i don't even know what's async or not right in a world where no it doesn't need to necessarily as i said this isn't to do with rendering i there
[01:11:06] 's interesting implications going both ways but from my perspective it's rendering that we need to hold on for streaming say from ssr it's it's rendering that we need
[01:11:15]  that we care about in terms of whether we can move to the next page we can we can hold the paint like basically we can hold the transition the painting and then have other
[01:11:24]  stuff in the background like i think the problem is people are thinking like they're going to use create effect and they're really not i'm basically saying that they kind of
[01:11:39]  are like but this is also why that other syntax isn't good because i think it's better to do this than do this i think sorry well it runs at
[01:12:26]  the same time as it you shouldn't be doing your side effects in it but it it does get scheduled it does run after other stuff but the other stuff is mostly lazy so
[01:12:37]  anyway the thing is here is this is a this being a function is also a first indicator that it's different than react your dependencies can change just just throwing out there and
[01:13:07]  it doesn't have to an array it could be an object it could be whatever you want to tell the side effect to do can i return props yes exactly why not yeah
[01:13:20]  why are we even doing this this is even better bam see win no you can actually you can't do you know why you can't return props because there's no reactive
[01:13:35]  access here no um you but you could you could return props right you have to read you could return props pre-strapping prox is finally here oh man the funniest
[01:14:05]  thing is we're going to nitpick on this detail when it's like literally the thing that you're never going to use anyways i knew i knew this was going to
[01:14:14]  be the point of contention that people are doing but you you understand why this is just craziness yeah no we we can't do that because you need to actually read
[01:14:28]  the properties we don't know what's changed yep definitely thought about this there's lots of problems problems in terms of like like imitating an object like object existence i mean it
[01:14:44] 's not a huge thing but it still has to be a proxy even if you're not using getter setters especially in that case because props can change their shape you
[01:14:52]  can have different props to be defined because of spreads so like you have to be able to ask the question is a in props but in order for that to be true at some
[01:15:01]  point in the future you actually have to make it so that anytime you access any proper returns a function even if it exists or doesn't exist so in general it's just
[01:15:10]  not a good idea yeah i mean it's not even array it's literally an accessor you can return an array you can do things you literally just a tracking context and non
[01:15:23] -tracking it's not even a dependency where everyone just sees it and they're like oh it's the dependency array but the funniest thing is like there's why are you
[01:15:34]  using effects i don't know if dramatically better proxies are always a performance hit but they're also what makes it a lot more ergonomic to do deep reactive stuff
[01:15:48]  and there's some superpowers and proxies that i'll hopefully we'll get a chance to show later when we get into the mutable reactivity stuff but what
[01:15:58]  like what are you doing like like this is for synchronizing out of the system i think i think this is the interesting i think this is this is this is the key parts
[01:16:09]  people probably have some scenario where they're picturing like instead of just being like hey data's updated and doing that sort of picturing like because you're not doing anything granular
[01:16:22]  out of here once you the more dependencies you add to this thing the more convergence is happening right i mean to access the dom i mean to do what like basically to
[01:16:48]  be fair we use effects to access the dom internally but like i i'm like because i don't want to put my dom updates in the jsx there you go right how
[01:17:16]  do you do an action based on changing prop without an effect i don't see it well the question is what type of action if it involves writing to another signal that's you
[01:17:29]  shouldn't be doing that generally so or it should be avoidable so again if it's updating the dom specifically yes you have a good point you should probably create a um some
[01:17:40]  kind of render effect you know using refs yeah these are all things where you're basically you're basically getting a bunch of signals essentially and telling it to render like these
[01:18:01]  side effects of the system make a ton of sense don't get me wrong i'm just i'm just like i'm still very interested effectively like how big of a difference
[01:18:13]  this is yeah on mount is something we end up using a lot yeah yeah if you need to read from the dom are this is these are the situations it is all of those
[01:18:31]  edge cases um why not use a compiler okay the same reason that svelte 5 doesn't use a compiler the ways svelte will use a compiler here is
[01:18:46]  that they will have to introduce an explicit syntax because with a fine grain runtime signals library you no longer know that this is a signal like it could be a function it could be
[01:18:57]  anything right so you can't you can locally optimize but for like async you don't you don't know if stuff's going to be async the only way that i
[01:19:07]  can think about doing it is if you introduce the back the await keyword and not actually wait because in those kind of scenarios a weight has this beautiful thing from an async
[01:19:19]  stance that um that like the consumer has to wait so you know that it gets pushed all the way up to where you are you don't have to worry about the pull progression
[01:19:32]  so you can make assumptions off that but you need a definite syntax to make that that thing and i don't intend to use a compiler on your javascript compiling
[01:19:43]  jsx is fine we don't actually compile um the javascript this is a purely runtime mechanism if if the casualty the only casualty is creative fact requiring split execution
[01:19:57]  when it's literally the edge of the whole graph i'm i'm going to consider this like a huge win yeah yeah like there are all the there's a whole category
[01:20:17]  of things where you need to update the dom definitely and in those cases this does act like a dependency rate don't get me wrong but like from a mechanical standpoint outside of
[01:20:35]  this you don't you're not really concerned yourself don't get me wrong i'm sure to avoid this people will do horrendous stuff like hoist out data fetching at
[01:20:44]  the component level whenever they've seen a weight inside a crate effect or something like you know what i mean like but then you're you don't get that nested fetch
[01:20:52] ing thing i showed you earlier very easily unless then you start compiling the structure like looking at the structure of the components like it's kind of goes down this terrible rabbit hole
[01:21:01]  to solve something that is literally the least important part of the problem no no no it's literally only create effect and render effect under the hood we don't because everything until
[01:21:21]  you get to effect is on the pure side it's it's split it's lazy you know what i mean so the whole chain from signals to memo to the front half of
[01:21:33]  effect is all part of the same cycle and then and and it's pure it doesn't make side effects you can run it as many times you want you know the whole
[01:21:46]  kind of thing and then the only real all the real work happens on this side so there's no need for anything on this side to up to here to actually have that split
[01:21:56]  you want to return the value instead of access them again because if you access them again then they'll throw on the wrong side i mean technically they won't because they'll
[01:22:11]  be caught so you could get the latest but there is a benefit and this is a point of contention between me and some other people what you're guaranteed at the point of
[01:22:24]  of of getting here and getting these values out is something that is consistent from here if you start reading this again and people are writing to signals and effects it's possible to
[01:22:35]  get inconsistent state you'll get the most up to date but you'll get inconsistent state on the back half side whereas here you know if you're reading from here you get a
[01:22:43]  snapshot like the mental picture you should have for create effect is i am leaving the system this is for things that are not part of my rendering yeah it only needs it because
[01:23:04]  of what i've been talking about here nobody is able to answer me to what this console logs it is impossible to answer this question and it's scarier that it's
[01:23:15]  impossible to answer this question even more so like from a correctness standpoint i don't even know if this is debatable yeah no we no longer need create resource create resource is
[01:23:35]  a fancy version of create async it has a bunch of extra stuff but at a primitive level create async is just an create async memo it's it's the
[01:23:44]  it is the replacement for create resource i guess that is a big change but the thing is create create resource is like a high level primitive it's almost like tan stack query you
[01:23:53]  know with without the caching um we're just lowering the level of the primitive we'll be able to ship create async built on top of create async or sorry create
[01:24:01]  resource on top of create async you know it's like an in a salt primitives or like a legacy package or something without much effort but at the problem was create
[01:24:08]  resource was too opinionated that it was hard to extend you know things like returning the undefined in the or falsy in the first half and trying to get state set
[01:24:16] ters in and all this stuff we needed something simpler that was reactive tracking in order to do it and that's why we landed at create async the thing is and you
[01:24:31] 've seen this so far with tan stack tan stack just imitates the behavior of the base behavior in solid this is a beautiful thing they don't have to worry about all these
[01:24:39]  rules around async because we handle them function on effects have behave different or does only the next function run when there's not something yes the next function only runs when there
[01:24:59] 's not anything to await um now the as i said at its core we want this blocking async because um i'm going to show you a couple little quick graphs and you
[01:25:14]  can understand here what we're going to do is we're going to color things that are async red and things that aren't async um green and then you can
[01:25:22]  kind of get an idea here and um okay so everything starts with a signal right so this will be green and then i want you to consider this graph so this is going to
[01:25:41]  be an async derived value so it's going to be red and this is going to be an async derived value so it's going to be red and finally we
[01:25:52] 're going to have an effect which honestly it it doesn't really matter right it's downstream of async so maybe that that matters but generally what i'm what i'm
[01:26:11]  going to get at here is we have signal the that writes to two async derived values and this effect reads from both of them now this is called the diamond problem right
[01:26:27]  yellow for the traffic light yeah this is called the diamond problem and it's a classic problem in reactivity um because it's always possible when you're doing this pull push pull
[01:26:43]  that you resolve things in a weird order the problem with the diamond problem is in async if we this is the reason why we don't fetch if we're going to
[01:26:51]  throw we can't fetch on read because if we're reading these right and let's give each note a name a b c and d so we're in our effect d and
[01:27:11]  we're reading from b and c if b throws before we read c which is what's going to happen here probably then then we delay fetching c and this causes a
[01:27:22]  waterfall so async has to be eagerly scheduled when we know that a has changed we need to cue b and c so that when d reads it even if it throws early
[01:27:32]  it's still going to fetch b and c in parallel okay i mean you can do this if you want to a certain degree but i couldn't enforce that so if you do
[01:27:52]  that you could just put it here but like there's there's no way to enforce that people would do exactly this we could we could leave sorry going back to this conversation we
[01:28:03]  could say that i mean there is a way to make this predictable or solvable again right you just got to do this const a1 equals a b1 equals b c
[01:28:16] 1 equals c beautiful and then a1 a2 a3 problem solved right now we don't need to split it but i'm at the i'm what i'm getting
[01:28:32]  at is at the point that you have to do this basically anyways why don't you just do this do you know what i mean like this like yeah seems excessive to force
[01:28:55]  use effect to have an undepensity when it's exclusively for an instant where there are multiple effects inside create effect that depend on the factors right but okay if you don't
[01:29:07]  yeah so if there's it's it's like if you could ensure that it would only read once then you could like you if there's multiple different variables you'd have
[01:29:23]  to run it like this like like like i want you to think about this for a second and realize that you're not right like like like you either you either like you
[01:29:38]  could if it's a then the the cost is basically nothing and the second that it's more than one thing then you know what i mean like it it's not excessive like
[01:29:56]  like you're right it could be it's excessive if this is always a single console log no but like the i guess the argument is if this is always a single console
[01:30:09]  log then there then there isn't a problem there's actually a different problem which i haven't got into yet um there's the question of how you handle cleanup um yeah
[01:30:27]  i don't know if i want to go there right now create effect has always been bad i don't know why people have thought otherwise create effect is not good it's
[01:30:42]  it has a very specific purpose leaving the system yeah i mean it's the same problem with this this is smart returning the function internally but again you can't enforce this because people
[01:30:58]  might not return the function you know what i mean like they just like oh create effects same syntax as before i'm not going to do anything differently no it isn't and
[01:31:10]  if you look at the implementation that is exactly what it is the effect is the front half of the effect is basically it's extended from the computation class and then it adds an
[01:31:20]  extra function at the end so yes that is that is exactly what it is right but again you're looking at it backwards and i know this is so terrible because it's
[01:31:41]  what the reactive team said but like why are you accessing random functions in the side effect part this is going to yeah i mean this is a big um and yeah i don
[01:32:06] 't yeah returning a function is is definitely possible because like the you know the react style on cleanups i haven't really talked about that but um one impact of the split is
[01:32:18]  there's a difference between pure cleanups and um effectful cleanups which gets us in a zone where you want to do the react style uh return cleanup function on the
[01:32:27]  effect side because there's no tracking contents now obviously putting the tracking context together solves it but yeah i mean i've seen all these proposals and gone over them i i i it
[01:32:39] 's i don't know like i can show you what's on the screen here like it doesn't actually solve the problem unfortunately you either have to accept that things can just
[01:32:54]  go zolgo on you or you need to split it or you need to hoist it with like a compiler or something and i think out of those options splitting is the
[01:33:07]  only reasonable one it's so funny we get bogged down on this you haven't even seen the cool demos yet that i'm going to show so maybe i should just
[01:33:13]  move on they need to introduce syntax yeah i mean no one's no one's preventing you from doing a console log on the on the pure side to be fair okay um i
[01:33:32]  just wanted to show some important things related to to to to this because i've shown you the diamond problem so this is why fetching has to be eager but there's
[01:33:44]  a there's another similar problem that i want to that i want to show it show you and that's what i call the flag problem okay i want to see the flag problem
[01:33:53]  a this is this is the reason this looks oh it's green the reason this is called the the reason i call this the flag problem is because so we can make this
[01:34:14]  black doesn't really matter is because it's like a triangle it's a slightly different shape okay welcome to the flag problem the only reason that the flag problem is even
[01:34:57]  a piece of conversation here is because in this case this is an unavoidable waterfall but this is a very big argument for why you want to throw and not tear and
[01:35:15]  by tear is only except the the the the last value as long as it's resolved once right because like this with the diamond we can eagerly try and fetch both of
[01:35:27]  these this one will start fetching this one will try and read b and be like oh crap throw like it won't be able to even won't even be able to start
[01:35:36]  fetching that's expected um but the key is the question is like when you update it later if you took a model where you always got the latest value um that you
[01:35:48]  have you have this interesting case where when a updates b sees it and sees updates it so when this comes here it goes okay i need to refetch b when this comes here
[01:36:00]  it sees the old value of b and then tries to fetch c with the new value of a and the old value of b and then when it's done it will try
[01:36:10]  and refetch c again with the new value of b and the new value of a so you fetched two times instead of one time this is very very very not good from
[01:36:19]  a data fetching standpoint throwing protects us from this async consistency problem but if we were trying to read the the previous value um we would we would have some problems here
[01:36:32]  so our async system throws completely internally in the in these scenarios uh yeah sorry i'm just gonna follow the chat you guys are still talking about create effect i mean this
[01:37:08]  would the this is the i mean we could do that directly but i i i i i mean you've already seen it here in the stack blitz example um upper is also
[01:37:23]  accessor strength right it's not going to be aced i don't think it's going to be async accessor string so by the time we get down here
[01:37:32]  it's you know what i mean it's it's a async is transitive just like normal reactivity with this model um no not really i mean technically we pass
[01:37:51]  in the previous argument but because a signal accessor is not going to uh accept an argument anyways it doesn't really matter so most of the time now unless you start passing it
[01:38:06]  functions that often take arguments like the old the old like observable api from knockout one of the many reasons why that is not a good api um okay so
[01:38:16]  let's getting back to my my example you start understanding that you need this you need to solve both the flag and the diamond problem which leads you to basically eager fetching and
[01:38:29]  throwing but i mentioned earlier that it would be cool and we saw this in the in the demo here where see how it actually updated this expression with these two or both together
[01:38:49]  independently well i could go in admittedly and change this behavior in about one liner and i might actually do that just to be illustrative here i'm going to open node modules
[01:39:03]  at solid js slash signals hopefully oh no it's oh it's freaking pmpm nested optional uh this is this is might not be easier to get to node modules
[01:39:17]  dot pnpm slash uh at solid oh there it is signals ppm has a very interesting um format uh i think we're using dev here okay cool we have dev
[01:39:45]  js for solid signals if i go in here and find create render effect you're gonna see something uh sorry i'm gonna look at the effect class thing you're gonna see
[01:39:55]  something kind of funny in the initializer i'm like if this isn't a render effect wrap it in this latest call otherwise do it as normal so if i just kind
[01:40:06]  of comment out this line and then run our example again we're going to basically have classic no okay it's not in dev it must be it must be in prod um okay
[01:40:25]  we we can do this again uh it's like it's like code sandbox has a path limit it's like not showing me okay there it is let's try prod
[01:40:45]  effect which one's this effect render effect try commenting this one out hopefully that this is not a result of something cached yeah there we go there we go classic react behavior
[01:41:14]  so when we click here it goes back to to fallback so what what i've done here is i've made normal effects run in this graph exactly the same exactly the same
[01:41:32]  way that sorry where's my salad draw like that everything throws the way you would expect but one of these things we were thinking out to make the experience less jarring as i
[01:41:42]  said like i said is this opt-in tearing ability but the key is only the d has this latest wrapper latest is a helper that says hey it's okay like if
[01:41:54]  if there's no value throw suspend and and it's like dot latest on create resource but it applies to a whole expression you can literally just say like for this whole function access
[01:42:05]  like six things show me the latest value and what we can do here with latest is we can essentially actually um wrap the this so only the the closest things are impacted so
[01:42:21]  if you have you know if you're just reading c from here that's wrapped in latest it doesn't change the way that this throwing behavior behaves if you're just if you
[01:42:31] 're right wrapping b and c yeah the effect will run you know when b finishes for c finish and run again but it won't impact anything above it so you have this
[01:42:41]  ability to treat the graph consistently and just tear at the edges of rendering latest is a helper that essentially goes look i want to tear we haven't saw 0.1 but now
[01:42:52]  it is something that literally can wrap whole expressions right um and the reason i'm showing this is we've made it so that as i said render effects essentially are latest by
[01:43:03]  default which brings me to my next the next example i want to show you yeah well this is an interesting question and and some people pointed this out to me before but i
[01:43:20]  think i think the way this works is who's responsible for putting suspense in right who's responsible for putting suspense i'd argue the person who introduced the create async into
[01:43:40]  the flow should be like also mindful of where their loading boundaries are this is where the kind of question is right it's obviously the developer sorry but i mean like like there
[01:43:53] 's basically no way to know if something is async but it also um the the where the source comes in is where the key to this is so like okay let me let
[01:44:09]  me let me pull up the next because this is all building towards this next example this is um step blitzed because the the the loading indicators are going to be layout
[01:44:26]  it's it's a the suspense is a layout consideration and i think this whole run once will actually make it scale better with teams because you don't have to worry about
[01:44:38]  the thing ripping ripping out under you because the problem with suspense right now with the ripping out is someone adds something async and then suddenly it's just like you know what i
[01:44:47]  mean like so yeah let me see here solid two experiments this is the one i want to open this example was originally created by dev for his stream and i'm going to i
[01:45:01] 'm going to comment this out and i'm going to rerun this okay okay so this example is a little bit more complicated but it's going to show you a bunch
[01:45:13]  of stuff in play okay and we're going to get into error boundaries here in a second okay so first first of all let's look at what this example does this example has
[01:45:23]  an effect that logs the phrase kind of like what we're doing before but the idea is there is two async calls one to like load some initial data and one to
[01:45:34]  update some kind of message that we get on every frame based on a button count and then again we're using create memo i'm using this again just to demonstrate the same stuff
[01:45:44]  i was showing before now your app itself is wrapped in a giant error boundary that just the catch-all we're never going to really hit this unless we tell the top level
[01:45:53]  to fail dev has included some random failure logic for this test but the main component itself fetches some data has a suspense boundary renders the top level data kind of like
[01:46:09]  we did in our nested example then has an error boundary and another suspense boundary where it outputs this message um essentially which is just some styling on this message here you see
[01:46:27]  it here now this is a pretty powerful example because why is it being weird because it shows a couple things that obviously um are not easy to do with a framework like react
[01:46:45]  right first thing obviously is like if you fetch up top right and pass it down you're going to be passing promises down right like so you actually have to change your api
[01:47:00]  to message if this is a signal or this is if you look your message doesn't actually you know generally doesn't need to care too much um there's this thing that
[01:47:10]  i was playing with um but generally speaking message props do not need to change in in in this scenario just because you fetched at a different location the the other thing that we
[01:47:27]  we need to account for here is obviously we're nesting the suspenses and um yeah i think those are actually the main two things we'll get to the air behavior
[01:47:40]  in a minute um but this has what i call tearing where when you load first suspense boundary second suspense boundary that follows the normal pattern right because we have nested suspense it takes
[01:47:53]  slightly longer to load the phrase when we click a button here though instead of upheaving the whole phrase we gray it out by by by basically giving a different importance and
[01:48:05]  the way we did that in this example is i use this is stale helper which is interesting because is stale is kind of like the opposite of latest you can ask any
[01:48:15]  reactive phrase here you know am i stale it could be upper phrase it could be upper phrase or user it doesn't really matter you at any point in you in your u
[01:48:26] i you can go like hey is this thing out of date and if so show an uh an indicator right this is this is kind of the the the controversial part right because
[01:48:37]  if you always do fallback style you might not need other affordances but it's quite jarring right instead of you know i could turn off the render effect again like i
[01:48:48]  did a moment ago but you would suddenly see like stuff getting ripped out of your page where this is a much more subtle thing as we said that suspense was kind of optional
[01:48:57]  right um we can remove this suspense if we wanted to and still have this behavior because we don't fall back to it suspense is only in this case maybe it's the wrong
[01:49:05]  word for it but it's only an initial consideration in terms of loading opacity is how you show stale in your old school right so yeah so this is this is kind
[01:49:21]  of like fairly straightforward okay there's 10 messages loading loading and as i said you you could get rid of this suspense boundary if you wanted to and then sure enough now the whole
[01:49:35]  thing had to wait but it still actually has the same behavior this is what i was talking about the scaling up concern because suddenly you're not in a zone where like guy
[01:49:43]  adds thing and suddenly whole page gets ripped yes exactly use deferred value in react is the same as it's very similar to our latest essentially so and they use it for comparisons
[01:49:58]  to do loading states so the difference here though is as i said it's transitive i'm asking is stale of upper phrase it's not even actually even hello or
[01:50:10]  sorry phrase it's not even the create async it i'm actually asking it about the derived value in fact here just for an example i added it's stale to the
[01:50:21]  props dot text and i actually asked that the question and it knew the the answer right right so just like the async itself itself the question of staleness is understood transit
[01:50:36] ively to the graph and and it's interesting because i was playing around with an example um this doesn't actually trigger suspense um it's actually safeguarded so like if you
[01:50:52]  pretended that this wasn't like it's the reason why when we do this loading initially um you can see that you can see both states because technically speaking you saw loading and you
[01:51:06]  saw loading it's because this does suspend on this read but is stale actually can ask the question without uh suspending itself um so this is kind of like a a
[01:51:16]  tool to be able to do these kind of updates it is interesting obviously but i started kind of like getting into this zone it's like if you didn't have suspense you would
[01:51:25]  have is stale or is loading kind of question anyways right so is this a model that could do streaming ssr without suspense and i think the answer is actually yes
[01:51:36]  because while you couldn't stream html you wouldn't have the boundaries you could only stream the synchronous parts you could stream the data because what what suspense does is say like
[01:51:46]  here this is a boundary of html and then we could you know ship it but what if you didn't use suspense what you could do is if you didn't do
[01:51:55]  any like things that would suspend you could just send the synchronous um html and then stream over the data that we know because we do create async eagerly we
[01:52:06]  could basically stream over that data and then the client could get that data and client render the holes i'm not suggesting this is a good pattern i'm just pointing out that you
[01:52:14]  could have a mixture of html and data only streaming because of the fact that only rendering lends to the actual html rendering like sorry it's kind of
[01:52:26]  self-evident but you can you you can stream data independent to the to the rendering right um is stale plus show yes essentially i'm there's downsides of that
[01:52:39]  in that it actually doesn't render because here there is something interesting here if if we look at the console logs are um uh what do you call it you'll see that
[01:52:52]  there is a rendering freight phrase counter and there's a rendering message um a message rendering message and what you're going to see here is when i look at the console logs and
[01:53:02]  clear everything out when we load the page we're going to see both rendering phrase rendering message and this is the console of phrase when we click this you're never going to see
[01:53:12]  um rendering either of them again now obviously you can see that there because it doesn't disappear right but like when we had suspense like ripping it out some people were kind of
[01:53:21]  surprised by that behavior um it's understanding that there's basically um these kind of live nodes um in the background that can partially update even and handle the the staleness right
[01:53:36]  and i guess the thing was is stale show is you're actually unmounting it you need to also like an off-screen component something that i'm i'm thinking
[01:53:45]  about you know how to implement it's a similar mechanism to suspense but if you want to have that same idea of things off the screen and keeping them around in the same way
[01:53:52]  where they only render once well that's the thing like again it's if you have to follow the the data flow do you know what i mean like you're right the
[01:54:13]  the child here is probably not going to do this right let's let's face it the child does not know it's probably not going to do this but it's probably more
[01:54:24]  likely that you set some kind of class around the whole section or you do something you know you know what i mean but like who's also the one who's going to
[01:54:33]  be triggering the update or defining the async both of those things are actually happening above and that's probably where you're going to do most of the work right the one of
[01:54:41]  the cool things i said about this whole scenario is essentially message didn't need to change when we created went from a signal to to create async it actually did not change need
[01:54:54]  to change how message worked it actually renders the same way and it doesn't matter right like yeah exactly you can also just be like look if this thing has the ability
[01:55:06]  to show staleness you needed today to like if you needed to handle loading states with this component today this would actually have an api surface for it so you like anything in
[01:55:17]  in solid you know props don't the props render where you can render where they're used so if this was stale is stale whatever you know it's it's
[01:55:34]  still gonna it's still yeah sorry let me keep this around so i can use this you know for example we can props dot is still you know and hopefully if i want
[01:56:00]  to save properly oh sorry props dot stale what did i not have typescript on this whatever my point is where is this this should maybe we've hit a bug but
[01:56:28]  yeah okay maybe we've hit a bug okay but this like you can conceptually see that this should do that right you if if your component had the ability to show a
[01:56:38]  loading state or stale state it had that anyways do you know what i mean like this is something that you would have to do regardless oh yeah sorry i'm being dumb
[01:56:50]  thank you yeah there we go yeah it works um yeah yeah yeah it's crazy that maybe it's my build setup where typescript is not complaining at me like i probably
[01:57:05]  have it set up that's stripping the types rather than checking the types you'd think that this editor would be like don't do that this is expecting a function not a
[01:57:15]  you know because when you call it as a function this is now a string string so then this should yeah something's not working correctly for the typescript for me right now but
[01:57:24]  you anyways yeah so yes but what i'm what i'm trying to get at is you wouldn't this would be something that either this component is dumb and has no idea
[01:57:37]  of async in which case you wouldn't do anything for it anyways or um you're going to be handling the loading state right and already in a different way yeah yeah my
[01:57:47]  ts config is probably yeah okay so kind of getting the gist of the the mechanism here like as i said it'd be it's a top it's a commenting out a
[01:57:58]  line of code that could switch us back to reacts behavior but i think this is something worth exploring right so let's add error handling let's let's start adding error handling
[01:58:10]  so now when we do the phrase it's going to 50 of the time error on us right and this is going to propagate it down so when we load we're going to
[01:58:18]  load the page and that one worked but let's click okay error message random async error so let's let's look at this code here okay now there's a ret
[01:58:29] ry button because we added a retry button to our error boundary that resets it what do you think happens when i click this retry button hopefully you're still
[01:58:43]  with me chat sorry it's taking a while to get here anybody anybody any guesses time to like and subscribe yeah good time to like and subscribe it follows the chain to the
[01:59:10]  latest async that failed right it pulls back down right we said right so let's do it wait what's going on yes what if memos derived values and async values
[01:59:30]  that fail outside of the current clock cycle said okay i'm in a failed state i'm allowed to retry myself and try and you know get my resolved thing you don
[01:59:42] 't want to cause an infinite loop but yeah so basically we have an error boundary down here that's reading from some derived value yeah i mean it takes a while to get
[02:00:02]  to get it right um but what i'm trying to show here is in this scenario here it actually causes the thing that failed don't get me wrong if there was two as
[02:00:12] ync values and one succeeded and one failed and that caused the error boundary it's not going to refetch the other one it knows because of the chain of errors exactly what has
[02:00:22]  failed so in this scenario here when we click when we get an error and we retry it can actually retry all the way up to the data fetching without doing
[02:00:36]  anything special even though the error boundary is down here and the data fetching is up here it's because we know the data dependencies and we know the traceback we're
[02:00:52]  just going okay let's try and pull these again if they're errored we'll try and reevaluate them we don't need to rerun the components if you look
[02:00:59]  here you're not going to see rendering phrase counter again you're not going to see rendering message even again right because it doesn't need to re-render any components it
[02:01:09] 's literally this little effect down here pulling back on the data right do you know what's even crazier than this i thought this was crazy i was like man this is so
[02:01:22]  cool right this impact right but no it's even crazier what do you you think happens when i click the button to increment again give you give you all a chance to
[02:01:37]  look at this yeah man manually healing the yes because what happens is i told you before we collected the the effects that errored so if that effect would become unaired or
[02:01:58]  disposed of for some reason then there's nothing to keep the error boundary there and it can just remove itself right so we have non-nullable waterfall waterfall uh
[02:02:20]  waterfallless um safely consistent async that's self-healing you guys still complaining about creative fact you you you get the demo right it's funny because like earlier when we
[02:02:45]  were looking at this stuff we were thinking about oh how can we do this with react right how like how can we it's so funny like and i understand like going back
[02:02:56]  to creative fact for people you know like or with the like dependency arrays maybe is is pretty pretty brutal um you know like i get it it's it's a big shift but
[02:03:07]  it's like react's already there so like react's already there so like but this how do you even express this concept with react and its compiler that you could technically have
[02:03:24]  something you know this isn't the same component but this error boundary could be down in this component you have something down here retry and be able to refetch along the reactive
[02:03:33]  graph or be able to clear itself based on some out something else don't get me wrong in react technically speaking it could clear itself based on the click happening because what you
[02:03:44]  would do if you were react is re-render the whole component um and if you re-rendered the whole component um yeah then it's going to reset itself like
[02:03:55]  this right what's cool here is that it's not actually re-rendering the whole component it's literally just doing a fine-grained update you know i mean i
[02:04:04]  have to get to an aired state yeah it's literally just doing a fine-grained update now you'll notice that the original suspense holder came in this is there's
[02:04:11]  a couple places where i didn't like the the impact of staleness like if you error out i think you should reset back to suspense because otherwise the second you clear the error
[02:04:20]  it's going to show the previous success case before the new case loads in which i think is very jarring to have like the old one come in and the new one come
[02:04:28]  in so in cases of error i've opted that the the run once the suspense resets itself again that's why you've noticed when we retry or click again we
[02:04:38] 're back to the original the original loading screen there's a couple other scenarios any new suspense boundary that's created in the process of a reactive update will also run even if it
[02:04:49] 's an old async it will also run the loading state so we we avoid any situations in which we flicker old data for a second before we pull in new data right
[02:05:01]  so there's that but yeah i mean the the key part here is like regardless of if you like this tearing or if we should always fall back to suspense what we have
[02:05:13]  is is a mechanism here that's as i said self-healed and it's that same method error boundaries of suspense are almost identical they just collect the nodes that fail and
[02:05:24]  then based based on how many they've collected they decide what they're showing so yeah yeah i've set the heels up blows my brain yeah sorry maybe i should have led
[02:05:43]  with this one this this demo i thought like i got so excited when i when i managed to get this working yesterday that i like just stopped what i was doing and did
[02:05:51]  a discord stream for people to give me feedback on how to explain this yeah so yeah errors and async are all kind of handled very nicely with this model and if this is
[02:06:09]  the final nail in the coffin for create effect you guys are probably going what's going on well guess what there's a success and there's an error here um i didn
[02:06:19] 't show you this earlier because i figured you guys would get really angry at me but there's not only the tracking context there's the like if it succeeds or if it errors
[02:06:28]  async doesn't isn't considered an error here but if it randomly errors because async aired we can control this because then we don't need an error boundary because what
[02:06:37]  was happening before we did this with me and dev is that suddenly this error boundary out here shot and we're just like what the hell is going on our whole app just unm
[02:06:47] ounted itself for an error boundary for something that's a side effect right so again render effects don't have this error handler because they're handled part of rendering right so
[02:07:00]  effects are like a micro app they're like your own separate renderer you can do whatever the hell you want you have the control over the inputs async you have the control
[02:07:08]  over your side effect and your control over errors and actually right now i might change this both the success case and the error case return a cleanup function so it's possible to to
[02:07:18]  like do something during the error state that you can clean up as well and part of the reason for the split also helps with things like transitions where the front half might run
[02:07:28]  multiple times before you ever run the back half like suspense the thing i haven't showed here is suspense still holds effects we aren't going to run this back half if this component
[02:07:41]  has has suspended this is not going to cause suspense to happen but if this component were to suspend we're not going to like fire this stuff when it's not mounted so it
[02:07:53]  does participate in suspense it just isn't the cause of it so you don't have to you you don't have to worry about that right these still fire on mount so
[02:08:06]  to speak um but the front half can fire ahead of time so i i again i don't know why you you would do this and because our async speaker doesn't matter
[02:08:16]  but you this work gets done immediately this work is what gets delayed if the whole component gets suspended right so like there's there's all these compounding decision points but the
[02:08:35]  end result is something that i think makes a lot of sense and is all right yeah i don't know what use it because we don't we don't really have these
[02:08:52]  kind of concepts right um but yes maybe maybe this is thing we because our effect is our exit out of the system yeah yeah sure i will share this example stacklets um
[02:09:06]  was there anything here that that i changed you know maybe i'll keep the is stale i think that's more realistic yeah let's i'll share this yeah sure let's
[02:09:19]  pop this in maybe maybe maybe i should go on twitter and share this too uh maybe i'll do that well it's okay do you want to i'll explain this
[02:09:52]  a little bit before the reason i did it a separate one is because where do you think the error is happening in in in this case where is it this one no this one
[02:10:02]  where's the error happening in this case the i'll remove my name from this example where's the error happening the error is actually happening here see i think people are used
[02:10:15]  to try catching in their effect thing um and actually right now if this part errors out we actually do go to the error boundary because we assume it's like some user error or
[02:10:26]  something but there's a whole difference when the error is because of like async or because it's like something coming into the system it's very weird to have to try catch
[02:10:34]  the front half of your expression this is the that's why and it's because we if you try catch you will catch the async as well and we didn't want
[02:10:45]  you to worry about that there is a catch error handler helper in solid which will let errors go through but we'll like basically it will it will it'll let async go
[02:10:57]  through and then if it catches any other kind of error it will return it to you but like try catch technically works and there's places where you can do this but i
[02:11:07]  think this is why it makes sense to be split because i don't i don't think people are going to try catch their dependency arrays specifically um yeah so yeah should i
[02:11:34]  post this yeah uh let's do this healing boundaries plus async what would you rename create effect to what's a good name for that creating a side effect what's
[02:12:33]  what's a good name for it watch create react effect yeah we actually have a concept of reaction there's there's already a create reaction which is one that detaches the
[02:13:14]  tracking from the side effect which is funny what this does but it does in a different way the track is a return function we actually don't know we're going to have
[02:13:23]  to do this but we actually have create render effect already too we actually have create render effect already too which is also split create render effect actually has to be split because otherwise um
[02:13:33]  you can't do stuff like uh like transitions you can't like not update the dom you know you you have to be able to hold all the side effects for this async
[02:13:43]  stuff Well, I think this perfectly, I mean, once you get this wrap around your heads around the fact that like React actually doesn't even have the semantics to
[02:13:56]  pull this off because it literally is not the mental model there. They can't pull on threads like this whole, this is push and pull, right? Like in a sense
[02:14:08] , like React is this model where like, you know, I hate to reuse these shapes again, but they're all I have. React's this model where it's
[02:14:19]  like, you know, I've got, you know, my component here and then, you know, I have some UI down here and then I do something from here and
[02:14:28]  it cause it, you know, I kind of send it off and then my component reruns here. And while you go in this kind of cycle and react, you know
[02:14:39] , you have my data out here, cvvv, you have a bunch of these like data points out here maybe. And it's a pull based system because
[02:14:49]  as it re-renders, it pulls, it goes, get me that. Get me that. Get me that. You know? Right? This is like a
[02:15:01]  very poor diagram of how I think about React, right? And then when people think about push-based systems, it's more of like, it's, so what do
[02:15:16]  we call this three-year-old, three-year-old drawing of React? Yeah, I mean, it depends on what you optimize for, right?
[02:15:32]  Yeah, I mean, it depends on what you optimize for, right? I agree with you, but then I also agree that there's value in picking the right name.
[02:15:40]  And I think this is one of those things. It's where I, like, HTMX released a blog a while ago about how they're never going to change and
[02:15:45]  they're solid for the web or whatever. And I was just like, that's crazy. It's because, like, my perspective is, like, we should be
[02:15:54]  trying to do the best thing. As I said, this, the create effect is one of the super painful migration ones. There's one other that I'm going to show
[02:16:07]  in a second, but it ironically is also a way to get rid of create effect and it will be less painful for you, but will be painful for random libraries and
[02:16:16]  solid ecosystem, like solid refresh and whatnot. They're not painful. It's like a quick fix, but it's easy to miss them. I think the biggest difference,
[02:16:33]  just on a side note, I know it's a thing, between a lot of game loops and stuff is games are generally responsible for the thing that, like the,
[02:16:51]  what they're building or building out to. And a lot of the whole industry has worked towards, uh, immediate mode almost, um, where like, you know, FPS
[02:17:00]  constant, all that. The thing is on the website, we have the DOM, the DOM is retained mode. You putting immediate mode on top of the DOM doesn't make
[02:17:10]  the DOM faster. Like there's, there's basically there's in a sense using these signal observer patterns, actually, because the underlying thing is retained, give us the
[02:17:22]  ability to have greater performance because we align more with the underlying system. Whereas building a whole retain mode, like our immediate mode, like a virtual DOM or something on top is
[02:17:30]  just kind of overhead, uh, as Rich Harris put it. So it's like, this is a, makes it a fundamentally different thing. Um, yeah.
[02:17:43]  So whereas like when people think about push, it's kind of more like this. They're like, I have this, this, this, you know, all our things
[02:17:55]  randomly here. And then they're like, haha, yeah, I should have colored this arrow differently. Cause this is the one, this was the instigator there,
[02:18:08]  you know. Um, when people think of push, um, they are, they're thinking like, there's like, maybe there's still our UI here. Right
[02:18:24] . But our UI triggers this and then the update and this triggers something here. Like this is kind of like the fine grained difference, right? People aren't thinking
[02:18:41]  about the pulling part of it because you're only really pulling the piece that you updated. Right. But it gets interesting. And you can see why this is like way less
[02:18:54]  work, three year old drawing of push. Right. But, but like, what if you could control which threads you pull that. Right. It's almost the same
[02:19:19]  as this diagram. Right. But like, what if like, based on certain changes, you could basically pull it only specific threads. It's yeah. I don't know
[02:19:29] . This diagram maybe is not doing it for me, but it becomes a whole different sort of thing. And that's the way I've like come to think about it.
[02:19:37]  Because when I was working on solid one, even though we were push pull, we were very eager based and I'd never hit these kinds of problems. The whole change around
[02:19:44]  making only the effects register with the boundaries and having everything pull through the system completely changes the game. And honestly, yeah, I'm surprised someone like, why hasn't anyone
[02:19:54]  else done this? Well, I think the reason is no one else has a fine grained renderer. Technically, this technology is capable in the reactive systems, but
[02:20:01]  only as of like last two months ago, maybe last month, like Svelte got it view is coding about vapor right now. I don't know if anyone's had
[02:20:13]  the chance to kind of relook at it. Solid had an older reactive system. So we weren't in this boat. And most of the others updated the reactive system
[02:20:23]  in the last couple of years. But solid also, you know, we've been doing this kind of rendering now for like eight or nine, eight years now. God,
[02:20:33]  it feels like forever. So like, this is brand new. So I don't think people have realized like, you know, for viewers felt communities, for example,
[02:20:41]  this is something they're just discovering for the first time. Whereas like, we've already built these patterns and been using them for the last almost decade. So I think maybe
[02:20:52]  like, it's just one of those things where both pieces haven't aligned for long enough that others haven't really come here yet, but they will just like server functions,
[02:21:00]  just like signals, fine-grained rendering. Most of the stuff's all it does. Everyone will be here very, very, very soon. We could, we
[02:21:21]  could, we could do it from a, we definitely from TypeScript, but we could, I actually, yeah, I think it actually does throw right now. Yeah.
[02:21:28]  So we'll, yeah. Right. It just, this is, this is like, this model is like, if you took react and like reacted, it's funny
[02:21:43]  because they split them up into these fibers that they manage. This is like, if you took react itself as a fiber, right. That chain from the front half of the
[02:21:52]  effect through your memos and your signals is like a react render tree. And then the side effect is like the react patch. We get that whole world in the bubble
[02:22:02]  of two primitives, right? Like, uh, like when we have that very simple playground example, um, here that we're playing around with, you know, this
[02:22:12]  is like this, this whole thing, this, this whole thing here is like react. Like it's the whole cycle, right? This is the patch. This is
[02:22:22]  the pole that pulls the thing. But instead of having one tree, we have hundreds of them all woven around each other, independently updating independent of a, of UI. Yet
[02:22:36]  being able to be authored in a way that's consistent with the same kind of modularity you find with a component model anyway. Honestly, like I think it's
[02:23:00] , this is a hard code mod to do because it's hard to pull out the, the dependencies. Do you know what I mean? Like it's hard to know this
[02:23:06] , um, flagging it's easy, but it's hard one. Okay. While we're playing here in our playground, I guess there's one other example.
[02:23:17]  What else do you guys use create effect for? Maybe I'll make another playground. Let's fork another playground. Okay. Playground two. This, this, this,
[02:23:30]  this one's going to be shorter. I'm pretty sure. Cause it doesn't involve async. I don't think let's, let's just make playground two.
[02:23:38]  Playground two is not going to have async in it. It's just going to have a div. And in this div. It's going to have a
[02:23:55]  component. Actually, you know, it's, it's not even going to have a component. It's going to have another component. It's going to have a child
[02:24:05]  component. And the child component is also going to take name. Next, let's make this a, um, a fragment. And we're going to have an
[02:24:30]  input. On input equals bent something like name, set name, e dot target dot value. Okay. Actually, maybe we'll put the child below it. And then
[02:24:57]  we're going to make function. We're going to make child. I wonder if people can tell where I'm heading with this props. Prop types are going to be name
[02:25:09] , which is a string. Actually. We probably should also value bind it. Doesn't really matter for this example. And then in our child component, we are
[02:25:31]  going to return. Fragment. And in our fragment. We're going to say each one child just so that we can see where the hell we are. And then
[02:25:50]  we're going to show. So for now, let's do props dot name. And see if this builds. What am I doing? Oh. What have I done
[02:26:14]  wrong here? I haven't actually tested this demo. What I'm trying right now. It is odd to me, though, that I'm what I'm what am
[02:26:30]  I not seeing right now. How if I put a D in here. Oh, okay. This is a compiler error. Okay. That's fine. The stuff
[02:27:02] , the stuff's still very new. The stuff's still very new. What's happening here is we have an effect. Well, we have an effect that's returning something
[02:27:16]  other than a function as a cleanup function. Right. Which is unfortunate, because as I said, this is this is still very, very new. What I wanted to
[02:27:27]  show you was that if we added another input here. It's fine. We can do this without. Let's do this without input. So let's do this with input
[02:27:35]  would have been better. But we can do this with buttons. Okay. Just it will. I can still demonstrate this with buttons. It's just a bug that I
[02:27:43]  haven't addressed in the compiler yet. Clearly. Okay. So let's set name. To. Jake. All right. Call this outer. We'll actually make it
[02:28:09]  cleaner what we're doing. Okay. Okay. Okay. Yeah. Sorry, the stuff is still raw. The, the, the split effect compiler stuff is still not
[02:28:22]  100% perfect. Okay. And then what I'm going to do here. Is. Make another button. And on click. Well, what am I going to do on
[02:28:37]  click? Well, it's that. Name. To. Joe. Okay. Okay. Okay. So what are we doing in here? Now you'd be like,
[02:28:52]  well, there's no set name here. Now. How many. Of you have had. This scenario. Before. Create. Signal. You want something that you can edit
[02:29:04]  locally, but you also kind of want to. Initialize it from the props. Right. Right. So we already know outer works. Inner isn't working though,
[02:29:17]  because we are using props.name. Let's change this to name. Okay. Sweet. But the, the problem here is. Sure. Inner is going to work now
[02:29:29] . But outer. No longer works. Right. Outer. Outer is dead. Right. So. How. Do we make it so that when the props change
[02:29:40]  from above. We can reset our state. And. That when we can still update it locally. You know, maybe, maybe there's like an on save thing on our
[02:29:51]  child that like when it's done committing, it'll update the parent with an updated data. Right. So. What. We already said async was one of the
[02:30:03]  reasons you use effects. Like the real subtitle of this stream should be like all the ways you don't have to use effects. I already showed basically got rid of a
[02:30:12]  lot of effects for async. Right. But it's got to be writable as well. Right. I think Svelte gets to steal my thunder here because I
[02:30:24]  proposed this primitive like two and a half years ago, but only implemented it like six months ago. So I think they, I think Svelte's actually already implemented
[02:30:34]  the, the primitive that I wanted to, to, to make. Right. Because the problem with the, well, here, let's, let's try a derived.
[02:30:44]  Drive, drive name. The problem with drive name is we can't write to it. Right. If I go create memo here, which is the same as derived and S
[02:30:55] velte. I, now I have to do like a weird switch where like I have to decide whether to show this or to show this. It's like if.
[02:31:05]  Right. The answer. The, the, the, the, now we've all seen this, which I don't know if I need to explain why this is bad
[02:31:26] . Because if, if we could do this set name props dot name. Right. So this will work. Sort of. Sort of. I guess it only sets it
[02:31:42]  once because it's the same state again. If it was input, this would be easier to show. So this works. But the problem with this is. There's going
[02:31:52]  to be. A time. It's not such a big problem with us. But if, if we put. Props dot. Name here as well. There's
[02:32:05]  going to be a time. Where. I mean. It's so quick. But there's going to be a time where you're going to see two different values.
[02:32:19]  You're going to see name is Joe and Jake. Next to each other. Because the prop will have updated. But then we do a render. And then we update
[02:32:29] . And then we do the render again. Again. It's not that important. Because we're only updating the one thing. But there's going to be tearing. With
[02:32:34]  this. This is why. We do derive stuff in the first place. So that we can. So that we can funnel it through. Right. And this is why.
[02:32:44]  React doesn't want you to do this. The answer in react. Of how to solve this. Is actually really quite cool. Sort of. They tell you the key.
[02:32:52]  The component by name. That's one way. They go key. Name. That's one way. The other way they do it. Is. That you basically.
[02:33:01]  Can check something. You can be like. If. Basically the answer is. Is do this. Set. Name. Props dot name. They actually don't want you
[02:33:13]  to use an effect. If you look at the docs. They essentially want you to do that. Do this. Which. What it will do in react. Well it'll
[02:33:20]  cause it. To render the front half of the component. Realize the state has changed. And then re-render the front half of the component. But it will do
[02:33:27]  that. Before it runs the actual. Like. Don't get me wrong. It runs the whole JSX. But it won't do any DOM stuff. It actually interrupt
[02:33:33] s it. Before it actually does the heavy lifting. Like the back half of the effect. So to speak. So it just knows that it has to run it twice
[02:33:38] . This is like create computed in solid. In solid. If you do create computed. You won't see the tearing. But. That part of the graph. Will run
[02:33:48]  twice. This is why we had. Create computed in solid. The whole reason. But it's eager. And I wanted to get rid of it. But the idea
[02:33:56]  was. This way. This will. Update. Before the rendering happens. And in react. Inline will do it. The one thing you don't want to do.
[02:34:03]  Is do an effect though. Because it causes the whole render cycle twice. So. This was bugging me so much in solid. That I came up with a really simple
[02:34:09]  solution. For this problem. What if we just went like this. Do it again in the original context. That one order. That order. That one. Basically.
[02:34:38]  If we. In solid. If you store a signal. Or a function in a signal. You actually have this unfortunate. Downside. That you actually have to.
[02:34:47]  Call the setter. With the function form. Because we can't tell the difference. Between the function form. The setter. If you know in solid. We have
[02:34:52]  like. Set. X. X. Plus one. You know. So we can't tell the difference. So if you have a function. That you're storing. You
[02:35:01]  actually have to use the setter version. You basically have to do this. You can't just go. Set function. Because it'll think it's a setter function
[02:35:08] . You can't just. Do set function. So this technically. Is a pretty breaking change. That if you want to store a function. In. After this change
[02:35:17] . You actually have to do set function. But. We are smart enough. That if there's no reactivity found. Inside this expression. We recycle the memo. That
[02:35:29]  would have been created. And throw it out. Internally. Someone's already suggested this in chat. A few times. What we're actually doing. Is creating a
[02:35:36]  signal inside of a memo. Which from a correctness standpoint. Means that when you read name. You're actually reading from both the memo. And the signal. And this
[02:35:44] . Keeps order correctness properly. Which means that it's. It's right. It's not the same as writing in a computer. I get this question every week
[02:35:53] . And it. Even from. People who are advanced. Kind of reactivity. People saw that. And they're literally asking. Why can't you write state in
[02:36:00]  effects. And it's like. It's not. A good. Idea. You lose the graph. It splits. You get. This weird tearing. Even in a synchronous
[02:36:08]  state. So. You want everything to be derived. This is why we're doing derived async. As you move more things to being derived. Suddenly the need for
[02:36:16]  effects. Starts decreasing considerably. Sorry. Paulo. I think. Do you guys have. Do you guys have these? I think Angular is calling them length signals.
[02:36:39]  Or something. I originally called this. Create writable. But then at some. Certain point. I was just like. Why don't we just. Accept. You know
[02:36:46] . This. So. There we go. You don't need effects for async. And you don't need effects for. For state synchronization. I mean. Yeah
[02:37:04] . I mean. You could do that. In this case. Definitely. And then. But like. Yeah. I mean. This is just showing. A declarative
[02:37:13] . Loop here. I mean. The. The difference. Between. This. And what solid actually does. Like in this case. Is actually. Very diff. Very minimal
[02:37:24] . Solid basically compiles. To almost that. Like it's on click. Yeah. I mean. There is a signal. In the middle. So controlled. It
[02:37:36] 's true. Especially with things. Like actions. These days. And stuff. We've moved away. From a lot of the controlled inputs. But again. Let's not
[02:37:43]  make an excuse. Right. Other systems. Other systems. Other systems. And web sockets. Well. That's. It depends on how you want to get it
[02:37:55]  in. Right. That's. That's. Being at the edge of the graph. Effects are fine. I said that they're the way out of the graph.
[02:38:02]  Well actually no. This isn't an effect. How about subscriptions? You just write the signals. Right. Like. If you. It's very hard to leave and enter
[02:38:09]  the system. Within the same synchronous cycle. Right. Technically. If you have web sockets. They can write to signals. They're allowed to be. At. The
[02:38:20]  end of the chain. Trying to synchronously. Feed out. To the other system. And have it feed back again. And be consistent. Is difficult. So.
[02:38:32]  You know. Closing the loop. But generally speaking. Web sockets. Are going to be. Where. On this side. Web sockets. Events. Right to
[02:38:42]  signals. Does this also work with stores? All right. Thanks for setting me up. For the next topic here. Because. There's. I identified. That there was
[02:38:54]  basically. Three reasons. Why. We wanted. To. Why people would want to use effects. And those three reasons. Are. Async. I mean. Un
[02:39:07] necessary reasons. There's reasons like. Interfacing the doms. Reading from the dom. Doing animations. The right to state. There are cases. Where you need
[02:39:13]  effects. Don't get me wrong. But it's like. Generally speaking. It's. Async. It's. State synchronization. Which. Both of those
[02:39:23] . Are just the same problem. They should be solved by deriving. If you actually look at the internals. Of create async. It's actually almost identical.
[02:39:29]  To this. This memoized signal. Implementation. It's. It's the same. Higher order signal. Wrapper. Mentality. We didn't
[02:39:37]  have to do it. For creating sync. Because it's at the edge. The one thing. That's interesting is. If something is happening. On a different cycle.
[02:39:43]  Like outside. Side of the system. You can. You're pretty safe. To write the signals. You don't have to worry. About it. But. Now
[02:39:50]  the problem comes in is. I think one of the most common. Places people do. Do state synchronization. Is with stores. Now. Stores. For those
[02:40:01]  who aren't familiar. Are. These crazy proxy objects. That are super. Nested. Reactive. Every property. Can be reactive. They can. Fine green update
[02:40:10] . The power of stores. I haven't built a 2dmvc. With this. Version of solid. And I don't want to. Waste your time
[02:40:16] . Doing that. You can watch. My friend. And master's course. When I do that. But I did. Build the JS framework benchmark. Which I.
[02:40:23]  I don't. Have a version of. With a new one right here. But it's almost identical. In code to the old one. If I go to the JS
[02:40:30]  framework benchmark. And we look. At. This. The API. I have. Changed slightly for stores. So I guess that's another. Breaking change. Although.
[02:40:43]  This one will at least be an easier. Migration. Is. To do solid. Solid, solid, solid, solid store. Okay. The reason I'm showing
[02:40:54]  the JS framework benchmark. Is because. Essentially. A store. Can have. You know. Data and objects. And all these things in. And you can do stuff.
[02:41:04]  Like. All this crazy stuff to it. Which sets it deeply. But. I won't. I guess. In order for us to show. What we want to show
[02:41:11]  today. We probably do have to do. A little bit of store. Manipulation. So let's. Let's start. Let's start again. With a
[02:41:18]  store here. Actually. You know what. Let's keep this. Because I think. This. This is. Good example. And we'll make. We'll fork another
[02:41:28]  playground. Playground three. Okay. Maybe it should be renamed. Dangerously create. Effect. I mean. It's always been. That intention. From react standpoint
[02:41:52] . The problem is react. Didn't provide the tools. They did not solve async. And they did not solve. State synchronization. You had. Basically no choice
[02:41:59] . I can't blame the developer. For that. I saw this immediately. When I. Created. Create resource. We're doing first solid. Back in like
[02:42:07]  2019. But I mean. The react ecosystem. Saw it at the same time. Why do you think. Tan stack query is so loved. I mean. The remix guys
[02:42:13]  go on their thing. Well. Never need you state. Blah blah blah. That's the thing. But. But the truth of the matter is. That started much
[02:42:20]  earlier. When. Basically when Tanner. Introduced tan stack. You know. I mean. Even graph QL. To a certain degree. You saw this. Where.
[02:42:29]  The whole state solution. Could be inside. Like Apollo. Or whatever. And. And have nothing to do. With. Like. The typical react use state. So
[02:42:41]  much of our state. Is driven from the server. Which means. So much of our state. Is kind of derived. Which means. That. This. We can significantly
[02:42:51] . Reduce the surface area. Of writes. And if you do that. The predictability. Of your system. Goes up. Incredibly. Because then. There's
[02:42:58]  only a few places. That can actually. Cause mutation. Now. This is all like. Theoretical. Whatever. Garbage. Ivory tower. Whatever.
[02:43:05]  But. There. There. There is some. Strong principles in this. Not poker. Well. You need it. Escape hatches. Have to exist. Right. Like
[02:43:21] . It's. It's the. It's just. We should make it. Harder. We should make it harder. To do bad stuff with them. One
[02:43:30]  way. Is make the. API so. Unergonomic. That. No one wants to use it. I'm not suggesting. That's intentional. But. Like
[02:43:38] . Like. But yeah. Okay. Let's. Let's. Let's. Let's. Let's. Let's. Let's move on here. We might
[02:43:58]  make a child component again. But. Let's. Let's. Um. I mean. I can almost port. You know what? Maybe I can port an existing
[02:44:06]  to do MVC example. Right. Like. We have one. Don't we. To do. Like. If I go. GitHub. Not GitHub. If I just
[02:44:17]  go like. Solid. JS. Dot com. I don't want the whole. To do's. If I go to the tutorial. I made a to do someone.
[02:44:23]  Like. Years and years ago. Right. I just go here. There's like a to do somewhere. To do. Create store. Mute. Uh. M
[02:44:35] utation. It's mutation. Is this it? Then if I solve it. Big props. Oh yeah. Oh god. These guys are so ahead of me. They're
[02:44:48] . They're already using. Someone updated these examples. To use produce as the default. That's. That's. That's lovely. I didn't even realize that had
[02:44:56]  happened. Um. That's. That's. That's. That's beautiful. That'll make my life so much easier here. Thanks to whoever did that. Anyways
[02:45:06] . Okay. Yeah. Sorry. It's like the whole app. Um. Let's. Let's just. Go here. We make that app. And then. We
[02:45:21]  don't need. This one. We need. Don't need this one. Because these are all now just from solid JS. I don't separate them. And then
[02:45:31]  we can just delete. Produce. And then we can just. Oh. That is actually kind of convenient. Using a hybrid of the class stuff. But. It
[02:45:51] 's fine. Um. Actually. This is just wasteful. Right. Think about it. If you have to do's. Oh no. But you have to find it
[02:46:03] . Yeah. It's fine. Whatever. Fine. Right. You have to go. To. Equals. To. Do's. Dot. Find. T.
[02:46:21]  Where. T dot. ID. Equals. ID. So. Yeah. Props on. And then. To. Do. Dot. Completed. Equals
[02:46:37] . Not. To. Do. Completed. All right. Leave all of this stuff. Hopefully this still works. All right. Oh. Do you know. Do you
[02:47:02]  know what's going to happen? Can't use to do MVC because of that other. That other bug. Oh. Is there two render calls at the bottom?
[02:47:11]  There is. But. I can't. I. I bet you the input. Bug. That I haven't solved yet. Is going to get in the way here.
[02:47:23]  Yeah. Damn it. I'm a little bit ahead of my time on. On showing this. Okay. That's fine. Fine. That's fine. We'll
[02:47:34]  do something a little bit different. Yeah. Okay. That's. That is too bad. This is why you got to build the examples before you actually do it. Produ
[02:47:51] ce was an API that we used to do mutable. It was really kind of a fun ironic. Internally we're mutable inside stores, but we do an
[02:47:59]  immutable surface area because we believe in read-write segregation, but produce, let us mutate directly again. And one of the biggest changes that, uh, making
[02:48:09]  the stores in solid 2.0 is that the mutable version is the default version. I don't care about mutability versus immutability. I care about read
[02:48:17] -write segregation. I don't want the portability, you know, there. One of the most interesting things about Svelte's compiled stuff was I was like,
[02:48:25]  oh my God, did you guys make it so stores can't leave the file they're in? Like deep nested reactivity permeating through the tree with random mutations is
[02:48:33]  one of the most dangerous things imaginable. Almost every framework has some kind of guards against it because it's implicit two-way binding. It means it's just like
[02:48:40] , oh, butterfly effect. Someone mutates something here that they didn't realize was part of this there. And it's like, bang, this is the whole reason why
[02:48:48]  react one that like, so, so like it is very, very important from my perspective to be very careful about what you write to. But yeah, unfortunately for my examples
[02:49:03]  here, it looks like that I still have some holes. on my, this, it's funny because I, a few months back actually made a stream where I created
[02:49:15]  to do MVC without the JSX compiler completely by hand using DOM updates in the new reacted system, just because I could, I don't feel like putting you guys through
[02:49:22]  that right now. Like I could definitely build this from scratch, basically just writing the compiled output, but that would take me a while. Yeah, exactly. It's
[02:49:36] , it's, it's not about the mutation as about being explicit on who has the, the option to write. It's the same reason when I was showing this graph
[02:49:46]  earlier here that I was like, the less effects and people writing effects mean like the, the last, less points that this entry happens into your, into your stuff. Okay
[02:49:56] . So we're a little bit early for to do MVC, unfortunately. So what am I going to do here? Um, we're going to just do something
[02:50:04]  a lot simpler. Um, let's get rid of, I mean, the checkbox should be fine. Well, it's weird on change. What I'm trying to
[02:50:16] , it's, it's weird to try and guess what it's funny. Cause this input seems to render fine. It's the second that we add something that things
[02:50:24]  get messy, which means that there's something in the row. Oh, I know what's wrong. I wonder if this is what it is. I completely forgot about
[02:50:41]  this. Sorry. Oh man, TypeScript should be doing more help for me. Got it. Beautiful. Okay. You guys might be going, what the hell did four
[02:50:52]  is doing a function? Now this is just me being fricking hyper optimizing. It, it doesn't, you probably shouldn't do this. I'm not going to stress
[02:51:05]  over it right now. Essentially, why does four take a function? Well, the reason four takes a function is cause I got rid of the need for four and index
[02:51:14]  and keyed. They're all the exact same control flow, um, here in solid, uh, 2.0. So the way I had to do this is even
[02:51:21]  though this function call is completely unnecessary and it never moves, if I can give it the same API and then you're just like, okay, I, if I actually want
[02:51:29]  it, um, you know, behave as index, I just go keyed false. Okay. Now, now it behaves the same as index does. And if I wanted
[02:51:37]  to key to buy a specific key, well then, you know, I can pass a specific key here, but the idea here is solid generally doesn't use keyed
[02:51:46] , but there was no performance overhead and basically no extra code, like a couple of like small little sections here to combine all the control flows. So now there is no,
[02:51:54]  there's four different ways to do control flow. Um, essentially that are optimized for different cases. There is, there is basically keyed for, which is optimized for shallow
[02:52:07]  diffing. It's what react and every other framework does. Um, we don't need it. Um, especially when you have deep nested reactivity, it
[02:52:15] 's kind of a waste. There is, and that's why it's solid. It doesn't have keys generally. Um, there is index, which is optimized for shallow
[02:52:24] , um, um, non keyed stuff. And the reason for that again is both of those essentially create signals per row. So your data doesn't, so your
[02:52:34]  data can just be a single signal and you can just be like, here is list here is, um, uh, you know, yeah. In both cases, here's
[02:52:42]  the list. And then the control flow creates signals that update specifically by doing a diff inside. Now, if you have a store, this is actually the case where four
[02:52:53]  is, is optimized because essentially if you update the to do, you never, this, this is see this creating text here. It's showing, it's showing you
[02:53:03]  here this because for this reason, because when I check this box, yeah, there's some bugs here, but when I check this box, it's never going to console
[02:53:13]  log. Creating text again, because it doesn't need to, if I add something else, see, creating it. So essentially we own it's the whole run once memo
[02:53:24] ized, whatever thing, even sorting the list, you're not going to create this again, which means that when we update the toggle, we don't actually run the
[02:53:33]  for logic anymore. We literally just go, oh, there's a to do here, update that one check box. Like everything is granular and we don't need to rer
[02:53:40] un the list. This is something that react can't do. And compilers, this is almost why I think everyone moved to runtime reactivity because compilers have
[02:53:49]  a really hard time doing nested reactivity. Marco team, we were working on this and we were like, we ended up going runtime, you know, as well
[02:53:55] , it's very difficult with a compiler. So this is the second thing that we did. I'm not going to say that it's impossible, but this is another place
[02:54:03]  that it's very hard. And basically you get the auto, this is better than the auto memoizing compiler or something where like react. Cause again, if you do the
[02:54:10]  state update up here, they need to, even if they can decide, Oh, I don't need to check this. I just need to rerun this component and then
[02:54:15]  check which rows change and all this. We skip the whole, like rerun the list, rerun the component. We literally just go straight to the point, right
[02:54:23] ? That's why stores are powerful because when we change this to do, to do not completed, like just this one switch, we don't need to re-render anything
[02:54:31] . We just go dom one effect. Now this is great. If you insert an element, does it insert a new signal in the middle and doesn't update the others
[02:54:46]  or updates every one? No, it doesn't. If you use an, if you use a key, like a non keyed, it would impact down the row.
[02:54:53]  But when you're keyed, which is our default here, um, it does not, it just updates the one place in the middle. It does not impact any of
[02:55:00]  the other rows. It only impacts. Now I said, there's four cases. The fourth case is there's actually a new control flow and solid for it called repeat.
[02:55:07]  Um, and repeat is also, I don't have to do much work here because they already made it in solid primitives. I first wrote repeat four years ago.
[02:55:15]  Um, when I was like doing some code sandbox demo, like I can't even, is this going to make me sign in with GitHub? Probably. Yeah. True.
[02:55:24]  Okay. 3d no cubes, cubes. I was trying, there was this crazy concurrent react. Um, maybe it's boxes. Yeah. Two year anniversary. This
[02:55:46]  version doesn't use it. Sorry. Yeah. This version doesn't use it. Um, sorry. Um, the very first time I made this control flow was quite a
[02:55:59]  long time ago. it was the, this one. And I realized that this was a non keyed example, right now you guys might remember this example. Um,
[02:56:12]  you know, you, this, and you just do like this and every framework made a version solids was obviously way faster than everyone else's. But, um, the,
[02:56:23]  the key to this was that as you scaled up, we didn't want to recreate the ones that were already created. Um, and we didn't really care that.
[02:56:30]  So I created this repeat control flow essentially. And it, the, the way repeat works is repeat, repeats and count. So it does a number of times. So if
[02:56:41]  any new rows are added, it will do it. But otherwise the trick, trick with repeat, and it doesn't matter as much here because boxes is like a signal and
[02:56:50]  not like a, a store, but it'd be more in a store is it doesn't, it only needs to change when the, you never pass the list to it
[02:56:57] . It only needs to change when the, the length changes, which means everything's fixed by index. And then when you do one fine grained change, it just
[02:57:05]  updates. So it's like the non keyed version of, of, uh, four. And honestly, if keying is not a problem, this is, it has
[02:57:14]  to be by far the most optimal version of iteration, because essentially nothing causes, um, the, this to rerun, except for adding a row. You can never
[02:57:27]  update a row. There's no additional single. This I is a constant. There's no accessor. Like basically if you update the data, like switch the row,
[02:57:36]  it's just those two rows will have their data changed. So any properties that listen to the specific data, like you could have the same value on two different fields on
[02:57:44]  the two rows that switch. And that specific thing won't be triggered because it's the same value. Um, again, I think keying is very important. There's
[02:57:51]  a whole thing on that, but I realized that this one is not the same as the others. So technically we're still going to have two control flows. We're going
[02:58:00]  to have four and repeat, but keyed and index are no longer needed as they're the same as four. Um, so our baseline defaults to better for people doing
[02:58:09]  nested reactivity. It doesn't have these stores. You can do like signals and signals or whatever, which is what I think I actually did here, but because
[02:58:15]  it's even more performant, slightly less proxy overhead, but stores are a billion times easier to deal with. Why is it okay to destruct to do? Well,
[02:58:25]  it's because to do this, if you want to know, this is why I said this is bad code. The reason it's okay to destruct to do is because
[02:58:32]  it's keyed. Right. If you look at the, if you looked at this example here, it's keyed, this function will never run again. Will
[02:58:41]  the idea of this to do ever change? No. Will the text of this to do never change? Cause we don't give you the way to edit it. So this
[02:58:47]  is like, this, this is basically like back when I wrote solid in 2017, 18, I did this kind of stuff a ton because I was just like, because if
[02:58:56]  I pass a value in, I, I knew from a compiler standpoint that this will not see a function, which means that it will skip creating an effect, which will
[02:59:06]  be more performant. So like I was edging out micro stuff. And that's why I saying it's, it just doesn't even matter. It's dumb,
[02:59:13]  but you will see this. The reason this doesn't matter is because I know consecutively that this will never change. This key is. Yeah. I mean, the
[02:59:30]  interesting thing is I'm wondering if we'll get to a point with, and I'm going to have Tanner on maybe very soon, and maybe we'll, we'll have
[02:59:38]  to like completely rethink of how, you know, we do these things. Those libraries are built for react. He's had come up with his own granular update system. I
[02:59:45] 'm wondering how these things kind of jive together. Cause one of the things that I'm kind of going to get to here, which is, is we need,
[02:59:56]  I'm trying to think of the right demo. This one's harder for me to demo here. This, this, there's two, and I've actually demoed it
[03:00:05]  before, which means that I, I should have an example here, but I don't it's that. What if we want to drive stores, um, and I
[03:00:16] 'm trying to think of the best example I can show here. The JS framework is the best example, but I, I didn't, I should have pushed it up beforehand
[03:00:30]  because the idea with a drive store is very similar. I noticed that a memo is just the setter function for a signal, right. You get the previous value in
[03:00:41]  shape. So I noticed that a drive store is just the setter function from a store. So we, we call the new primitive is called create projection, which is like
[03:00:52] , um, projected to dues. I mean, let's look, we could, we could probably play this game. Let's, I don't know if I would do
[03:01:02]  it this way. Uh, it's an awesome array here. So we'll take the, the, uh, the S we'll call it the S for now. And
[03:01:12]  then what we will do here is what if we did something, and I, again, this, it doesn't make a ton of sense. Cause it's, it's
[03:01:20]  almost like a diffing tool. This is kind of impractical, but we could do something like along the lines of like, for let I equals zero, I
[03:01:32]  smaller than to dues dot length, I plus plus. And then we could do something like S dot S I dot text equals, um, to dues, I dot text
[03:01:54]  to uppercase. You know, how I always like to do uppercase. Everything is a text. I can't even, these examples weren't originally,
[03:02:07]  and then theoretically here, then I should be able to put projected to dues in here. And if everything goes properly. What? Oh, did I forget to import it
[03:02:22] ? Create projection, create store. What did I do wrong this time? Oh, is it? Yeah. Okay, lovely. This is why. I probably let
[03:02:52] 's see if it gets in here. I'll, I'll try and debug this for a second. Console dot log. To dues. This is the problem with using mostly
[03:03:11]  broken stuff. It's there. It's there. Links signal is the same as what I was showing earlier, where I was showing that you could just pass a function
[03:03:29]  to a signal. Line 10. No, it's, it's a, the store doesn't have a, isn't a, isn't a function call. Um,
[03:03:40]  this is just, this is just not, am I missing a, like a closing bracket or something? Like why are these all red? Oh, I mean, this
[03:04:05]  is just TypeScript issue. Cause it's like, it's technically like a array of, of ID. Number. Text string. Was it done or completed? Yeah
[03:04:29] . Okay. So that's not my bug. Okay. Lovely. Um, I mean, you can at least hopefully see it from an API standpoint, what it can do
[03:04:40] . This is, this is kind of excessive though. What you would usually use projections for is diffing. I use it for create selector in the JS framework benchmark
[03:04:50] . Um, where, what this can do is have a selected value and then only notify the rows where the selected shin has changed. So instead of like, if you've
[03:05:02]  ever had a scenario where you have like a thousand rows, like in this thing and you know, uh, you know, I, you know, I know this example
[03:05:19]  works cause I've been benchmarking it. So why don't I just pull this into the browser? Like there's no real reason not to, right? Sorry. Okay
[03:05:30] . Should go to raw. This is, this is, this is, this is, this code isn't updated, but like someone really hyper optimized this looking at
[03:05:44]  this. This wasn't me. Like this is as compact as I've ever seen it. I've actually never done the store version of this to be fair. So
[03:06:00]  maybe that will be fun. Let's do this. Uh, so it's root. Okay. Root. All right. So we got to do a couple of
[03:06:19]  changes here. Crop ID this, yeah, this, this, this, this, whoever did this is just like hyper optimizing stuff. We need create projection from solid JS
[03:06:40] . And then this is at solid JS web. Um, okay. They're spreading arrays into props, man. I said I was about hyper optimization. Okay. Okay
[03:06:59] . This is crazy. Okay. Uh, one thing we're going to have to do first is that four is now a function. So we need to update every location that
[03:07:14]  row is specifically. Okay. Create selector doesn't exist. Good, good, good, good. Okay. Perfect. Okay. Let's, let's go here
[03:07:34] . Okay. So usually what you would do is you go if row ID equals. Selected. Set the class. Okay. Let's, let's do this.
[03:07:47]  Okay. So we don't have all the styles here, but let's create a thousand rows. Hopefully I'm going to crash this place. Uh, this is so
[03:08:00]  fun because like I, I didn't realize just how much, Oh, it's because this is using the freaking, I've never done the store update. So this
[03:08:13] , let's do the signals version. I don't, I don't, there'll be less stuff to change. um, do the signals version. That
[03:08:42] 's still firing away in the background. Um, all right, let's try this. So it's root. Four. Okay. This is solid JS web. Sure
[03:09:06] . Uh, let's get rid of batch. Don't need that. Let's get rid of, um, create single. Let's put create projection in here. So
[03:09:17]  we will need that. And then. What else do we want? We want. Or to be a function to do. There's one other place for it. All
[03:09:32]  right. Create selector does not exist, right? We were copying that selected. And then we will go here selected. equals row ID. Bang. Okay. Create
[03:09:59]  a thousand rows. Will I be able to see the selection state? Not because we don't have the classes. Okay. Um, I mean, I can obviously inspect here
[03:10:12] . And if I look and I click one of these, you're going to see a danger float around here between this one and yeah, I mean, you can see
[03:10:24]  it danger. You can't visibly see it. Cause I don't have the classes. Um, for this right now, but you can see the selection state move on
[03:10:34]  the TRs. Okay. Okay. So the way this would work in, in most frameworks is it. will basically on selected change, go through all a thousand rows
[03:10:50]  and do this check. In react, it will re-render the whole thing a thousand times. In modern frameworks like solid, um, you know, uh, you
[03:11:03]  know, uh, Svelte 5 view. The default is it's going to just trigger this one like effect on all thousand rows. Right. Yeah. I mean,
[03:11:14]  yeah, yeah, sure. You're right. It's this, it's the same concept, right? We can use a style but binding. And then we can
[03:11:24]  say style. I don't know. Background. Maybe something like background. Color. It's selected. It will be red like that. Lovely. Haha. All right
[03:11:49] . Good enough for, for our purposes, right? Okay. Now. The, the, the, I created this, this problem was pretty common because there's, there
[03:11:59] 's basically different ways you can solve this, right? One way is you could put on the data. You can make like an is selected on every row and then you iterate
[03:12:07]  and switch it yourself. But that's kind of cheating the point of this benchmark. The idea is the data is coming from the outside. You're not going to like
[03:12:12]  change the shape and now add it selected. It's very common that this is an ephemeral state on top of like a database state. You have database state, which
[03:12:18]  actually has, you know, um, it doesn't have a selected field. That's something that where this is different. And now we could pull this into a separate component
[03:12:28] . And technically if we create local state and switch it, it's the same difference. Like if we set a prop and synchronized it, you know, you kind of
[03:12:35]  get the idea. Like it's going to be driven off this on a per row basis. So I was like, what if we didn't? So I created this
[03:12:42]  thing called create selector, which is really, really special case for, for, for this, um, case. But what I realized is that it is a part of
[03:12:50]  a general problem because what you really want is you have a projection, right? And this projection, someone was asking where the S comes from. It's just an initialized
[03:12:59]  empty object for store. So we're going to give it like that. And then what we're going to do here is we're going to say that, um,
[03:13:08]  const select s equals selected. So it's going to listen to selected. And then if, um, and actually we're going to add one more thing here. We
[03:13:19] 're going to add a let previous selection. We'll, we'll need this later. Um, but, but essentially what we're going to do say is if previous,
[03:13:33]  then we can do, uh, s delete s, um, oh, sorry. I'm reusing this thing. Let's call this a row or what are we
[03:13:48]  going to call this? This is, uh, what are these? They're, I guess they're just rows. Okay. Rows. It's not even rows.
[03:13:55]  This is like, I don't know. We're going to call it P for now. I don't have a good name for it, but essentially P we're
[03:14:03]  going to delete because this is basically the ID. So we're making an, uh, a ha, uh, object map essentially. And then we're going to say,
[03:14:11]  um, P dot s equals true. And then simply previous equals s essentially. We could probably make this more optimal than that. But what you. The tricky part is
[03:14:40]  the previous. Isn't the re isn't. I, like I was debating having return value of something, but it's like an arbitrary thing. Um, you could also
[03:14:51]  start on it itself. It's just the previous isn't, is actually of s, not of projection. Do you know what I mean? So, okay. So
[03:15:03]  now this is a selected and then we can go in here and we go. Now it's an array. Okay. So we can go is selected row ID. And
[03:15:13]  if this still works, this should still work. Okay. Not quite. So what didn't we do. So what didn't we do, right? There we go
[03:15:29] . Okay. Thank you. Delete previous. Yeah. Sorry. My bad. Okay. So this is, this is the gist of the idea of when you might
[03:15:38]  be going, what's the difference from this? Well, this is a sparse object. So it basically only has the keys of what selected, but it means that
[03:15:45]  whenever this runs, it has the ability of, of essentially. Deleting up to one field and setting one field. So instead of triggering a thousand rows, it's
[03:16:01]  going to only trigger the one row or two rows that changed because this that it's projecting onto is a store it, this is a store object. So each property is reactive
[03:16:13] , right? So instead of running a thousand rows and actually did the JS framework benchmark is slower than create selector. But if you've actually been like watching, like Evan
[03:16:22] , you did like, uh, uh, uh, like posted view vapor results and, and, and felt, and they were like, you know, everyone was like
[03:16:32] , uh, open in browser, you know, what's going on here. Right. Um, because they both view vapor and felt were slower here. Well, yeah.
[03:16:40]  So solid is create selectors hacks slow, but create projection is actually decent. It's actually faster than this vanilla implementation here. So it's basically the same kind of thing
[03:16:50] , but this is now a generalizable tool. So you might be wondering how to make this work. Yeah. Well, it's mutable. I have a whole
[03:17:02]  article on this. It's a, it's mutable derivation, which is mental, but I can't, the problem is if you return something, there's only
[03:17:11]  one thing that you, you're forced to diff. You have to do the diffing afterwards because you're, you're returning the one thing. And if you put
[03:17:20]  everything in a single function, like, like a memo, like there's a reason they have that API. It returns something. You can't say, I want the specific
[03:17:26]  thing to update. And I, I, I'm, I'm not, I did a whole stream on this and I did like several streams until I arrived at this API
[03:17:34]  where I realized that this was like the reflection of the setter was the key, right? A setter for a signal returns the next value, but a setter
[03:17:43]  for a store mutates the current value. Dear deriving. It has to work the same sort of way. But as I said, this is super powerful because we
[03:17:53]  get the fork for the first time. Everything that we do in reactivity converges, like, you know what I mean? Like memos, multiple reactive signals, and
[03:18:02]  they kind of get drive down. You can have different things converge together, but this is the first time that we can take a single signal and converge it out. Actually,
[03:18:09]  it's not the first time. If you think about it, not the way we use for, but the index and keyed for in a reactive system are a projection
[03:18:19]  of, of, of like the index is a projection. Like you're, you're basically saying I have like a single signal coming in, in those versions. And then
[03:18:27]  I'm going to push them out to multiple things that update independently. I realized that I'm calling projection. Maybe that's the wrong term. Some correct me, but there
[03:18:37] 's a whole category of reactive problems that we're already trying to solve today that are actually this create selector for four loops in control flows. Um, uh, a
[03:18:48]  lot of dipping problems from like server data. They all actually use this thing. If you have a create async and you want to diff it, this is the perfect place
[03:18:58]  to do the diff because you can get fresh async data and then you can project it out into. So just the fields that change, you might've seen create async
[03:19:05]  store and solid router. It's basically create async fed into, fed into this, um, so to speak. This is, there's a whole category of mut
[03:19:15] able reactivity that people are sleeping on. They're up. They, they basically have signals. Um, uh, dev two, um, do, do, do.
[03:19:24]  I think the best, I'm not going to spend too much more time on this. Cause I, as I said, I did a whole article on this, but
[03:19:33]  it looks, it looks like this signals, stores, memos, right? Like it's, it's this kind of, uh, kind of thing. It's
[03:19:46]  like, what the hell goes down here? I I'm not sure. This is not for aggregates. It's the off the aggregates. You haven't, it
[03:19:58] 's hard to do aggregates. And I did a whole stream about this topic because it could depend on order. It could be on this, and you're still converging
[03:20:05]  values. You're reducing. Memos are good at reducing, you know, computations. This is the opposite of aggregation. It's going from, it's
[03:20:16] , it's, I, that's what I call it projecting. It's going the, it's not aggregating. It's, it's going the other way.
[03:20:20]  Right. But basically what I said is look from the source size on the mutable side, you have signals and memos. That's why like in react, this is
[03:20:32]  the only thing that exists stores on the mutable side. You have stores on the source, but no one's conquered this area. Well, I think we have,
[03:20:39]  and I'm going to show you how this is possible. Cause there's, there's some problems, but I've actually solved them now. Uh, okay. So from
[03:20:48]  an API standpoint, I think I'm hoping you guys get it. It's basically like, it's almost like a diff in a can. Like this is a great place
[03:20:56]  to put solid reconcile function. And in fact, in solid 2.0 reconcile and our store implementations actually. Um, they actually do under the hood object swaps
[03:21:07]  of proxies, which means you can do immutable diffs. You can pull in something like redux and just dip it. And you won't mutate the
[03:21:13]  original objects underneath. Um, sure. If you go and do this, like mutate, it will mutate. But the, but we have immutable diffs on
[03:21:20]  mutable stores. Um, which is going to be a huge boon for a lot of libraries because this way stores don't actually modify the underlying. And as I
[03:21:29]  said, interfacing with stuff like X datum and that will just work like this. Um, I did this, I don't know where you want to do it
[03:21:49] , but yes, you can create a store and pass a function as the first argument and then the value, and it does the exact same thing. So you have writ
[03:21:56] able projections as well. Um, the implementation of that is kind of funny. Cause you're literally just writing to the underlying projected value anyway. So like, but yes
[03:22:10] , so yeah, everything's symmetrical. So yes, we have create stores that we have writable projections. Just like we have write, write, uh, sorry. We
[03:22:20]  have derived, we have derived stores, just like we have derived, um, signals. Yeah. Well, what this is, is this is an object or yeah, this
[03:22:37]  is an object. As far as map. So when you set something to true or delete it, you're just changing two keys on a store. You're changing, you
[03:22:47] 're saying S one delete. Or sorry, P P one delete and set P two to true. So like here it's four. So I'm going to delete four and
[03:23:00]  set two to true. It just toggles two separate signals. Each property on this is a signal, uh, like a proxy. Every nested property is a potential
[03:23:10]  signal or proxy. Um, I don't know if it matters that. I mean, stores are always good on made for like tree like data. So I, I'm
[03:23:30]  not, I'm not sure it actually changes anything. I mean, I, the biggest trick people have a tree like data is the fact that we keep this. We
[03:23:39] , we, we control the mutations from the set function side. I think the way that we now use setters in the same form will help it, but I don't
[03:23:47]  think it changes much. I, I, I did do a bunch of diffing. There's a UI bench. Um, I did a whole bunch of performance testing
[03:23:53]  with the new swapping, which is really cool. Cause stuff that's never listened to never gets signals created for. And this includes the, that means also when we
[03:24:05]  do diffs with this immutable diffing things that aren't listened to, we don't actually have to diff. Um, we just swap. So it makes like
[03:24:13] , it makes our store diffing way faster. Um, so it's like, it's something like, like double the speed of what it is in solid 1.0
[03:24:25] . Um, I'm not, I'll go more into the store details, I guess on that in a, in a minute or maybe nah, I'm not gonna bother
[03:24:35]  today because the, the, the dipping is cool and it's one of the superpowers, which lets us interface with the immutable world. But I really want to
[03:24:41]  focus on projections because the problem with projections are if, if anyone saw my initial implementation, it was literally like create effect right to store. You know, the thing I told
[03:24:50]  you not to do or create computed, like it was slightly better, but we didn't have create computed in, in, um, in solid 2.0. So it
[03:24:58]  was actually like create render effect right to store. So it was like happening before the other effects, but it was like, it was not good. It was like using like
[03:25:07]  that. Yeah, it was just, it wasn't good. Um, because you have this tearing problem because the here, here's the here. Right. Now this
[03:25:18]  is where the question is, how do we make this work? Yes. Stores are recursive. And that's why if you've ever seen any solid start demos
[03:25:29]  around server actions and stuff like to do or notes app, it's incredible because you literally are doing tan stack style revalidation writing with single flight mutation with optimistic updates
[03:25:40] . And we're actually the, one of the, I haven't talked about this projections are amazing for optimistic updates because you're, you can take, um, an existing
[03:25:48]  server state. You can take a future optimistic state and you can merge them in the projection. And then when the server state updates and like goes, yeah, it's
[03:25:58]  committed. You can diff against the projected state rather than diffing against the reconstructing this, like the state again, which means that. the diff can actually only change
[03:26:12]  the things that changed between the updated state and the projected state, which means if the optimistic updates were correct, no work happens, no components rerun. So essentially you,
[03:26:24]  you get these like optimistic with a combination of a couple other things we're doing with projections where we're doing, um, kind of like collecting the mutations from the optimistic updates
[03:26:34]  and applying them one at a time onto the projection this way, instead of resetting the whole thing, we're just applying them one at a time. We didn't
[03:26:40]  need to reconstruct the straight end state and, uh, copy it and clone it over and over again where it was like fine grained, like, oh, update the text
[03:26:46]  on this thing optimistically. Well, we're just updating this one state thing, update the one place updates to one place in the DOM. But then when the server re
[03:26:55] validated and sent the data through, because the diffs matched, we also did no work. It was basically the same overhead of having purely client side rendering in a
[03:27:03] , in an auto invalidating system. Um, so yeah, I mean, that demo is crazy and we basically were faking projections. Projections were the, were
[03:27:13]  the primitive that we wanted for that strello demo. If you haven't seen it, it's, it's absolutely nuts. Um, no framework has, um, solid
[03:27:25] , no, no framework has version comes close. I'm kind of sad. Ryan Florence didn't even look at it because it's, I mean, I don't know
[03:27:32]  what he'd say. It's, it's probably, yeah, like nothing can touch the, has touched this. See, a lot of things I've been working
[03:27:50]  on here are, and why I want to share this stuff so that more people benefit from it. It's, these are general things that I think can apply and help the
[03:27:58]  whole community in terms of reactivity. So, okay, let's, let's get, how do we solve the fact that these are create computers? Let's,
[03:28:04]  let's get into that. Oh, one thing we still need transitions because you still need the ability to hold in the past accessible for routers. Um, uh, I
[03:28:11]  haven't implemented it yet, but the transitions are almost identical. I mean, I want to work on concurrent transitions so that we can have multiple at the same time, but
[03:28:20]  essentially conceptually they, they haven't changed. I think what this means is that end users like developers, like you don't need transitions. Routing libraries will use
[03:28:29]  them. Maybe a couple other things, but 99% of the time, the end user just doesn't bother with that. Basically it's not a, I know this is
[03:28:38]  like such a react cop out. It's not a feature for you. Um, but like the, the reason that we would go for this, like run once approach is
[03:28:46]  so that people just wouldn't have to worry about it. Cause right now a lot of people use transitions because they just like don't, or they have to use defer
[03:28:52] red value and stuff because they just don't want things to like slam up on them and get like yank out. Um, I think transition is still important, but now
[03:29:00]  you just won't need them. So, okay. How do we make this work? Well, I try, obviously a computed writing or obviously a reaction writing to a store
[03:29:13]  is super performant. In fact, it's more performant than we have today, but there's problems because if someone before I render, you know, maybe an
[03:29:21]  event or something asks, like is selected or something, it's going to get the old value in the reactivity tree. Um, when we're like processing the effects by
[03:29:32]  that point, we can cue these on first. They're pure cue. We can like run them before we run, you know, some of the other things in the pure
[03:29:40]  cue. We can make sure that they run before say the effects and stuff. But if someone wanted to like set state and read it right, you know, right afterwards
[03:29:47] , um, it doesn't work now with memos, it does. Right. If you, if you go, it's, it's like my old diagram where I
[03:29:57]  show that like the three time timings of signal memo effect, right to the Dom and how there's like different consistency. solid has followed where view is. Um,
[03:30:07]  and it's felt as well as well, where. Basically pure reactivity is in sync and effects are delayed, right? Solid. Could force effects to be in sync,
[03:30:18]  but I think this is one of the other changes, you know, that probably won't affect most people, but it is something to be aware of. But the problem here
[03:30:27]  is projections. If they're scheduled, like they're basically effects. You can't see past them and that you're breaking the graph. It's like the create effect
[03:30:34] , right? The signal. So, and then you, so one way that I thought of solving this, as I said before, is ordering because you, you, you
[03:30:44] , you can get to this problem. Um, let me pull up a scale drop, but you can get to this problem where, um, projections can depend on other projections
[03:30:54] . So, uh, what are they projections are derived? So let's use these, right? So, and actually, you know what, I might not even have
[03:31:04]  to draw it. It's a lot like the, the, this problem where depending on the order of which one updates first, you might see the old value. It's
[03:31:14] , it's, it's actually the flag problem. Again, this is. Yeah. See, I, I don't know what the technical term is for here.
[03:31:23]  Yeah. Maybe, maybe some mathematician can tell me what's up. It's funny. The react team, sorry, just, I saw this now reacting basically themselves that they
[03:31:35]  didn't really want to do transitions, but I mean, I think they're great. If you can use them, they're just have this unergonomic aspect that
[03:31:42]  you have to control the right point. So maybe everyone will use them and it'll be happy days. I don't know. But, um, what I'm saying
[03:31:50]  is the problem with projections can kind of come into this thing where if you, if these happen out of order, then they'll see stale values and have to reeval
[03:31:59] uate. It's kind of really awkward. So one solution I came up with that I thought of was what if I ordered. these, but so like basically like made
[03:32:11]  an ID and based on creation ensured that B always ran before C, right? That could be a solution, but it doesn't help with that. It means that when
[03:32:22]  we process the graph, you know, pull from D it'll always be right, but it doesn't help the person just randomly getting it, getting the value, you know
[03:32:29] , then they're like, Hey, what's the value of this projection? You know, after the set state, it doesn't work like a memo essentially. So
[03:32:36]  I was like, okay, let's, let's go back to the drawing board a bit. So first thing I tried was what if we just notified everything, right?
[03:32:45]  Like pretend this is our scenario. What if when the projection updated, we just basically notified everything. So, and this is kind of close to where I got to the ideas
[03:32:57]  inside the projection, it's a proxy. So we could take the actual memo, right? Um, let me pull up the code again. You see how there's
[03:33:08]  like, this thing is like a memo in a sense, like this is a reactive computation. There's, there's something reactive running here. This is a tracking state.
[03:33:16]  What if we took this, the memo and we returned it inside of the store. So every time you accessed a property on the store, every single property read from,
[03:33:28]  from this, this signal, like this memo that we're using here. And if we did that, then whenever any, since they're all subscribed to that signal,
[03:33:40]  whenever we update anything here, every single thing that listens to it would be notified. And then if someone asked for that value, it would be able, even if it's
[03:33:49]  not part of the graph and not scheduled, they'd be able to pull the latest value because it'll be like, oh yeah, I might be dirty. Check me
[03:33:55]  out. But the problem with that is I did that and it was slower than just not using projections in the first place, because it's still cute. All the thousand rows
[03:34:04]  tried to run a thousand rows, but now you had this like extra proxy you were dealing with. So I was like, okay, I have a really performance solution. That
[03:34:13] 's incorrect. And this correct solution that is, um, really under unperformant, right? Because like the whole point is you don't want to do all the
[03:34:24]  work, right? Otherwise you wouldn't be doing it, but like there was a good thing about this point part, because this part didn't actually need to run all the
[03:34:37]  effects. Because if you look at this function, it returns undefined, right? Even though it mutates this thing, it returns undefined. That means
[03:34:48]  every single element that, you know, listens to this or property on this gets notified and saying, Hey, I could have changed. But when they go and check, they
[03:34:55] 're going to be like, oh yeah, I didn't change. Unless someone actually changed the property that they were listening to. Like they're going to just see, oh
[03:35:05] , this projection is still null. It's null. Then it's null. So it never actually updated. So even though it could have updated, they're going to see
[03:35:13]  that it doesn't update. So this row won't run over and over again. Like this expression won't run over and over again, but it will have to queue
[03:35:23]  and check if it should run over. So you still queue all a thousand. You still do a thousand checks, which is kind of sucks, but at least, um,
[03:35:32]  it doesn't run. So my solution actually, um, is kind of interesting. Um, what I ended up doing is kind of go somewhere in the middle.
[03:35:54]  What if we notified everyone, but we don't queue anything. We basically say, Hey, you guys, you all could be dirty, but we're not going to queue
[03:36:07]  queue you. Which is kind of an interesting thing, because if you don't queue them, then, um, how are they going to do any work? Well,
[03:36:18]  they're, they're not, but everyone knows that they could be dirty. So the, the benefit of knowing that you could be dirty is if someone specifically asks, Hey
[03:36:30] , am I dirty? Like get me the release value. They'll go like, Oh, you might be. And they'll check all the way up and then we'll
[03:36:35]  get to the memo. And then the memo will be like, Oh yeah, I have to rerun again. It won't change. So it won't, you
[03:36:40]  know, tell, tell everybody to run, but at least you can ask the question lazily. We don't even have to run the projection immediately because if someone asks for
[03:36:53]  it, they'll get the value. But what's interesting about this is we still schedule it. So it still runs and if it runs. It basically, it will
[03:37:12]  see that it was notified with a flag. That's like, Hey, this was notified on a no queue run. So it'll go, okay, well I'm not
[03:37:18] ifying it for real this time. It will bypass that. So anything that's actually changed will then, you know, it'll run. It'll go, Oh, actually
[03:37:28]  delete, you know, delete this thing, update this thing. The things related to those two will then queue themselves on for real and actually run. But essentially we kind
[03:37:39]  of created, I don't know what to call it, like a firewall where essentially, yes, there are more things out there that think they could have updated. But since
[03:37:47]  those things won't get queued again, unless someone else says, Hey, you probably updated. It doesn't really matter. So we save, we only actually in the
[03:37:56]  end, while we tell all the thousand things that they could have updated, we don't actually end up queuing anything or checking anything. And as soon as either it
[03:38:06]  runs on schedule or someone asks for it, it's able to actually push out only the two updates that matter. So we both protect the graph because any, like this scenario
[03:38:17] , like this fetch before this, or someone randomly grabs it, we'll say, Oh yeah, I need to check that. And they'll see it and then they
[03:38:23] 'll write and cause themselves to be like, Oh yeah, I've changed. So we, we kind of basically create this barrier between everything downstream in this. We can hold
[03:38:33]  the execution to either when it's asked or when it's scheduled. So in a sense it's scheduled, but it's also lazy. Um, and obviously we don
[03:38:44] 't care about, unless someone asks for it, we won't care about it until they actually try and pull it. So from the outside perspective, it's the same as
[03:38:53]  a memo. It's completely lazy, only used as needed, but internally it's actually masking the fact that it does these rights. Okay. I don't know if
[03:39:03]  that makes sense to you all, but it's basically it notifies, but doesn't cue the work and only choose itself. And then at the future, it can,
[03:39:16]  when it figures it out, it can, it can choose to only cue the correct work. So we get both correctness and performance, which is what I was showing here
[03:39:25] . Not only is this a general solution to a problem. It is also, sorry, where is this? It's also a performance solution to handling this whole category of
[03:39:37]  problem. Um, yeah. No, I mean, generally speaking, I, I don't think. Yeah. Yeah. A mutation based reducer. Yeah. I
[03:40:05]  guess so. Except the problem, the thing is you're, you end up actually. Spread because of the granularity of the store of the underlying mutator, you're
[03:40:15]  actually get the ability to fork from like one signal back out to multiple signals. It's, it's super powerful. Um, I, I, I, I get,
[03:40:24]  I get why we, this probably would cause us to lose a couple of people on the stream, so to speak, but I, I hope you can kind of see
[03:40:31]  the power here because this simple little primitive is ensuring that only these two rows run in a way more performant way. And it's, it has plenty, tons of users
[03:40:41] . This is not like you're a super common one, like to the same degree as like create memo is. Um, most people don't think in terms of projections
[03:40:50] , but for places where you have a singular source and you want to get back to fine grained, this is the key, you know, a bunch of data from the
[03:40:59]  server that you need to diff. And then you, you know, you don't want to bother like updating, re-rendering the whole thing just because you got
[03:41:06]  like all fresh data from the server. That's different. If you have a single selected state and you want to project it onto the rows, it's basically the mechanism behind
[03:41:14]  of for control flow. If you want to project dynamic indexes onto something like basically this is, this is just, there's a whole category. It might not be a
[03:41:25]  common category, but there is a whole category of stuff here. Um, it's funny that, oh, it's cause I haven't, I haven't done update every
[03:41:33]  10th row. I'm like, it's funny, the batch is here. We don't need batch anymore. Data every 10th row. They refresh it,
[03:41:46]  I think. There we go. Okay. Yeah. Yeah. I mean, and the, the fun part about this is we can recreate, create selector for the
[03:42:04] , for, for, for this scenario. Right? Like that's, that's kind of fun. The fact that, that, you know, maybe people, maybe someone
[03:42:13]  won't actually do this. And instead, what will happen is someone will use this to create another primitive. Like what if they wanted a selector, um, honestly,
[03:42:22]  unless you're performance oriented, maybe this particular scenario doesn't matter. I, the funny thing is I hit this scenario before I ever did, um, JS framework benchmark
[03:42:35] . I was working on a media app and we had, you know, an admin section that had tables and tables. And we also did photo grids, which were
[03:42:42]  tables and tables essentially. Um, and like this kind of selection kind of mechanism, the way of projecting out this data was a problem that I had to deal with all the
[03:42:54]  time. It, it bugged me that like everything would kind of rerun. Um, so I, I wanted to solve this problem forever. I, I don
[03:43:02] 't think this is purely academic. Just my experience lends to that just because I did so much work on dashboards and like photo grid stuff and social media. That
[03:43:11] 's, that's my background. So, um, yeah, I, I think this is, this is good. Memo to one picture in the menu. Yeah.
[03:43:22]  Yeah. I think with stuff like this repeat, like, I think there's a lot of really powerful permanents. The other place that I'm really excited about this is
[03:43:31]  a local first. I think that this kind of mentality of using stores or projections, because I was looking at stuff like Signia and all that stuff where they, they
[03:43:39] 're, they're passing diffs along. There might be cases where you want to pass the diffs along, but there's also going to be cases where the overhead of
[03:43:47]  dipping at every single step and passing the diffs and transferring that is more than just forking it out again. So I'm, I'm very excited. I think this
[03:43:54]  is a direction that others should look into in the future. Um, but it's, it's, it's, it's one of the superpowers that we're looking
[03:44:02]  at it with solid 2.0. I mean, you, you definitely do because react can only handle component. But the thing is like the problem with react, the
[03:44:15]  same problem with async, you need use, you know, like use Jyotai atom people. This is why there's no comparison between external storage plus react and
[03:44:25]  something like solid. Like it just, it's just not, it doesn't make any sense from the model. Like that, like that, that self healing pulled the
[03:44:33]  thing down. Like you can't do that in react. Like it just doesn't make sense. You absorb the state where it enters the component tree and then everything below it
[03:44:43]  is impacted. Um, whereas here we push everything right down to the, the last possible place, the closest we can get to the Dom, the closest we can get to
[03:44:53]  the user. And then we pinpoint push where things could update and we pull through. So it's like, yeah. I mean, it's just, there's,
[03:45:05]  there's basically no equivalent. Make maps are the accepting case before. Yeah. Yeah. Okay. Cool, cool, cool. So we did the JS framework benchmark,
[03:45:19]  um, projections, healing, async. I think that's the core of what I wanted to do on this part of the stream. I don't know if it's
[03:45:31]  time. It was probably time we should switch modes. Maybe talk this week in JavaScript. I don't know. Does anyone have any questions that people enjoy those demos?
[03:45:42]  I mean, there's, there's more stuff in here, but you know, like I didn't show it, but, um, class list becoming just class helper,
[03:45:52]  generically handling, um, CLX, X type stuff. There's, there's like, there's so many little improvements that we're looking at here. Um,
[03:45:59]  and, um, yeah, I'm going to talk about solid 2.0 more generally after this, when I get into this week in JavaScript, but in terms of the
[03:46:07]  three topics today, I think we're good. What about on mount? Um, I still have it right now. It's it's on mount is fun because technically
[03:46:16]  it still works, but it's only the back half of effects. So use it. But if you put something async and you read it in there and it throws on
[03:46:25]  you because it's not read in any other, um, reactive thing that would cause it to suspend. Well, uh, it is what it is. You know,
[03:46:34]  maybe we can give you a good error. Like if, if, if, if, if maybe if we get a not ready error in the back half an effect or an
[03:46:39]  amount, we're like, Hey, you probably need to add this. You, you, you probably need to use an effect or you need to add it. You know
[03:46:45] , like that react, like you need to add to the dependency array kind of thing. Like, um, I kept on mount because people love on mount, um,
[03:46:53]  so much. Uh, one of the interesting things, uh, that I haven't really shown here. and it's only take a second. Um, let me go
[03:47:02]  back to my other examples. Um, maybe playground two. Is this the one I want? It doesn't really matter. The one where I was really looking at effects.
[03:47:17]  No, this one is the nested, um, maybe playground. Um, no, I guess the one I was really looking at the effects was the, uh,
[03:47:35]  was the dev demo or whatever, but what I wanted to kind of call out is that, um, effects here have. It's the uncle cleanup thing basically. Because they
[03:47:51] 're split in half, right? Cause cause create effect as. Tracking. And non-tracking context, right? You have two things. Technically speaking on mount
[03:48:08] . Sorry. On cleanup. Works here because the component part is part of the pure side. Now you might be going, that's crazy. You're creating DOM elements.
[03:48:15]  How that's pure. It's not the creation that's impure. It's the insertion. That's impure. So technically components run on the pure side.
[03:48:24]  They run on the left hand side. And all reactive ownership and stuff happens on the left hand side. Basically when we're rendering, we're putting stuff in stuff and
[03:48:32]  stuff and layering. It happens all here. You might create effect inside an effect, but it's on this side. It's not on this side. Creating more reactive narratives
[03:48:39]  is all on the left hand side. Which means on cleanup works fine here. It means that on cleanup works fine here. I don't know how many times you're going
[03:48:48]  to do this though. Cause conceptually speaking. I use on cleanup internally for like keeping a reactive reference counters, right? But you probably not going to need it for
[03:49:02]  that. I know there's like classic hello world example for people where they see solid set that timer top level with on cleanup. And then everyone's like, wow, you
[03:49:10]  don't need an effect to just do it. The problem is if you do that and it's off screen, it's going to start your timer before everything mounts.
[03:49:19]  So you should be using on mount or an effect. Otherwise with async stuff, you're going to basically start doing work when you're not even attached. So this
[03:49:27]  is true about solid today too. People did those demos, but those demos were never really correct. It's easy to be illustrated. But the other problem is people would do
[03:49:39]  stuff like on mount on cleanup right next to each other, which is not, this is not a parallel. These on cleanup registers with the parent on mount is here.
[03:49:55]  Now it's never going to update, so it's not a big deal, but technically like if you're doing SSR, this is weird because on mount is an effect
[03:50:02] . So it doesn't run and on cleanup will run because it's part of the peer. So technically what you should have done is this. You should have put the on
[03:50:09]  cleanup in the amount and it makes a lot of sense because if you create something in here like const t equals, you know, set timeout or whatever, or set interval
[03:50:17] , then guess what? You have the t here to clean up here. Whereas before we did not have the t here. Like you'd have to hoist it out
[03:50:29] . It actually makes sense to put the cleanup inside the context of the thing that you're building. Right? So this is all fine, but I just want to kind of
[03:50:41]  point this out. So realizing that I bit the bullet and said that this could now be the cleanup function like other things, right? Clean up, clear, interval,
[03:50:52]  t, right? We, we, we, so this is a better, this is a better approach than doing top level with on mount and on, or on cleanup
[03:51:03]  and without on mount, because this will run when it's attached rather than, you know, when it's off suspended or in our transition or something. But it also means
[03:51:14]  from this perspective, this is also true because without the reactive context, like there's a difference between these two, this can run multiple times and you should clean up each
[03:51:27]  time here for that, but you don't want this side cleanup to clean when this cleans up because there's this separation because like, again, transitions could run or suspense could
[03:51:38]  run the front half more than the back half. So technically speaking with the split, it doesn't make sense to move this here because it's not tracking. It can
[03:51:50] 't look it up and it's not the same thing. It's a different cleanup from this cleanup, which means that speaking, I mean, we could try and like,
[03:51:59]  look it up and do something smart. Like, oh, we're in effect mode, add it here instead. But the gist of it is how often do you actually
[03:52:07]  need to do a cleanup here? Or up here? And the answer is probably almost never. So one of the other effect changes I did was having on mount and create
[03:52:23]  effect actually return the cleanup function like React does. Now, again, this might not be a popular thing, but what it means is that on cleanup is also going to be
[03:52:31]  another, it's just another surface area. It's going to be something else that almost never gets used. So if you notice this pattern, you know, adding derive
[03:52:44]  things to signals, um, deleting create selector for create projection, which is more, more general. Um, create async. I actually have a list here that I
[03:52:53]  think I'm okay sharing with everyone today for my HackMD, which I call my inventory of reactive primitives. I think it's, I've changed this almost
[03:53:05]  weekly, so I, I, it's probably a little bit out of date. But I'm going to share this now for the first time. I think what you
[03:53:26] 're going to find here is that where's the copy share link is that the total surface area of helpers and solid is actually significantly shrunken. What if I use
[03:53:45]  it like a camera streaming want to use it on cleanup? Yeah. I'm you use it in an effect or, um, on Mount is what I'm saying.
[03:54:00]  No, what do you mean? You can't do an effect again in the race. No, you, you, the effect is on the right side. Sorry. Maybe
[03:54:07]  this isn't, isn't clear. This is where the effect is like do effect. It's on this side. This side is like track. These track these do
[03:54:26]  effect return cleanup. So this grouping makes sense too. You don't, you, you don't want, you probably aren't going to do cleaning up like the cleanup here
[03:54:36] . It runs, it has a potential with scheduling to run more often than the back half. So your camera stuff, what are things like a camera stream? I want to
[03:54:48]  close the stream might just be like this example here, which is like set up camera, return the cleanup for the camera. Like it, it's this. On Mount create
[03:55:02]  async. Why? And no, this won't work because you're trying to create a reactive print on the right hand side. You should create it on the left hand
[03:55:18]  side. Because on Mount, this function is this function. It's the right hand side. Oh yeah. Well, it's because the, the, the,
[03:55:44]  oh, I'm talking about nesting. Like in solid, you can nest reactivity inside reactivity and react side reactivity, but it's under the, the kind
[03:55:55]  of presumed ownership context, which is basically the way. I don't know if this helps people at all, but this memo, this front half of the effect,
[03:56:06]  even this component, which is getting rendered that this is in are all the same. The things that are not the same are the back half of the effect, the function in
[03:56:15]  the on Mount. And this click handler, those three things are same. There's two different zones. There's, there's basically the zones that are what I call
[03:56:26]  the pure side, which are basically every single thing. Top level in the component, everything in a function in the memo and everything in the left side of the effect.
[03:56:36]  effect. So that's one zone. And then there's a second zone, which is the right hand side of the effect, the function in the on Mount and the click
[03:56:45]  handler, which is the non zone. So there's like, I don't know, like there's two separate contexts that we're dealing with. There's the, in
[03:56:55]  the system outside of the system. I haven't had to change anything. I think one thing that's sneaking in is a bunch of people. All the code seems to
[03:57:20]  have like optional chaining. People like writing it so much in solid. I was very careful not to do optional chaining. You'll see a lot of ands.
[03:57:27]  So maybe it's possible that we will need. I haven't made a final call on this like transpile. Like I'd rather solid not transpile. Like I
[03:57:37]  might just remove all the optional chaining. A lot of our newer libraries have it too. People just really like using the newer syntax. But yeah. Otherwise, like we
[03:57:47] 're yes. 16. 16. Two contexts. Yeah. I spent like 40 minutes on this earlier in the stream. I can't really get into the detail too much
[03:58:08] . Let's see if I have the playground still open. I might spend like a second here, but I might not have it. We spent a very long time on
[03:58:15]  this. Oh, no, I do sell the playground open. Yeah. Let me just zoom back a second. It's because with async, we have no, if
[03:58:26]  you ignore everything after line 10 here, We have no, if we put in a single context with async, we have no idea what this logs. Even if this
[03:58:35]  returns an A string, B string, C string, based on timing with this throwing, It's completely unpredictable what the single context can do because it'll interrupt at different
[03:58:46]  points at different parts of the process. Yeah. I mean, almost everyone supports this stuff, but you have to understand when you're building for something like solid, you
[03:59:04]  have to consider like people who use skypack or no build or like, there's so many criteria, you know? I mean, there's even people who use web components
[03:59:14] . So like, I, it's, it's just like you, there's a lot of craziness out there and I have to kind of account that not everyone will
[03:59:25]  just be using the, the tools that I prescribe. I, that it's, it's part of the choice and part of the power of having a solution like we do
[03:59:32] . I, I, I, I, I, I call them story utils, technically they work on any reactive object. So I might, we, maybe merge
[03:59:44]  props makes it clearer, but this is merge props. Um, split is omit. I, we'll, we'll talk a little bit more about that, but we
[03:59:52] 'll, we'll talk a little bit more about that, but we'll, we'll, we'll talk a little bit more about that, we'll talk a little bit
[03:59:56]  more about that, but we'll talk a little bit more about that. Um, split is omit. I, we'll, we'll talk about this. It
[04:00:05] 'll be RFC to right now. I'm sitting on this because the problem is the first argument that you get back from split props or the front half of it probably is
[04:00:13]  unnecessary. And it's an extra proxy wrapper. You should just use the source objects through rather than that, because it, it causes unnecessary like layers. So this is
[04:00:26]  an example. I talked to the guys all building like the component libraries, like Cobalt and whatever, to get their feedback on this. And this is an example of
[04:00:34]  where we can change the API to encourage better performance patterns. Um, so omit is basically split and merges merge props. We could call it omit props or merge
[04:00:43]  props, but really it, it, it works on props, but it also works on stores and projections. So I, I, I thought that the name was too specific
[04:00:52] . I, I mean, I can go over this list really quickly. So you understand that it's the source state, which is create signal, create store. Makes
[04:00:59]  sense. These can also have derived forms of them. There's derived, create memo, create projection, create async, which we've shown today. There's effects like
[04:01:09]  create effect, create render effect, which I haven't shown, but it's almost the same as create effect and create reaction. This is useful for some weird third party stuff
[04:01:16]  where you return a tracking function. So instead of it running together, you can basically pass around the trackability for it. And then as soon as whatever's in it
[04:01:25]  updates, it runs once. Um, so every time you call track, it can react up to once. This is really useful for, for integrating with things like react.
[04:01:33]  Like I made react solid state this way. Um, it's not useful outside of that ownership. We have create root classic on cleanup, run with owner, get owner,
[04:01:41]  get observer, create context, use context, create error boundary. Um, utilities on track flatten is like the parent is like children. It's the core of children.
[04:01:52]  We're still going to have the children helper in solid. It's just use this flatten. So it's just, this is more core talking about like what's in the
[04:01:59]  signals implementation. Flush sync, which is, um, replacement for batch resolve, which is, it's this idea. It's kind of, it's, it awaits
[04:02:10]  an expression. So it's kind of like, you know how stuff could be async. The idea is whatever expression you put into resolve. If you await it, you
[04:02:17] 'll get the, you'll get the value. So you could, you could pick something async. Like you'd be like resolve user, an array users and posts
[04:02:25] . And it's like promise all it will basically, when those signals resolve, you will get, you'll get the value of users and posts. It's basically a promise
[04:02:35]  all on signals. Um, latest, which we showed is a way of opt into tearing. We'll try and get the latest value. If it's available is st
[04:02:44] ale. We saw catch error. I talked about earlier, which is this ability to base. It's just a try catch that lets async through. Has updated is a
[04:02:54] , we haven't talked about this one today, but I've talked in other streams. It's this idea that inside of any reactive computation, you can go, Hey,
[04:03:01]  has this updated since the last time the parent ran? So you can tell which signals triggered the computation, the rerun. Um, it's useful for stuff like in
[04:03:10]  projections for diffing states. Like you can go like, am I running this because we've added a new optimistic update? Or am I running this because the data from the
[04:03:19]  server updated? And that can change the flow. You can go like, I'm going to diff in this case. Otherwise I'm going to partially update, um, create
[04:03:25]  suspense. This is the core behind the suspense boundary. There's also a create flush boundary that's more primitive. I haven't decided if I'm going to put that
[04:03:33]  out, but they're probably something like off screen here, run transaction. This is use transaction or start transaction. Um, I haven't developed that out yet. So it
[04:03:43] 's still there. Reconcile is how you diff, um, stores. Unwrap is how you pull out the core object out of stores without all the prox
[04:03:51] ies. Omit is like pull out, basically give me the props without these things. So it's like the back half of the split props. Merge is the
[04:03:59]  merge and then map array and repeat, which are to operate, uh, operate. This maps over an array and this is our repeat control flow as a basic function helper.
[04:04:09]  All of these are part of the solids, uh, are the signals, solid signals library. Um, these are all core. This is why it's kind of funny because
[04:04:24]  people are like, oh, standalone signals library. Well, these concepts have to be core. Um, this has nothing to do with JSX or whatever, but solid
[04:04:32]  signals is all of these, all of this functionality. It, this has, while there's some render type concepts in here, they are so core to it that, yeah
[04:04:42] , I don't see. It's funny. Everyone wants to pull it out, but it's like, there is no real pulling out. I can just pull everything out
[04:04:48] . Now the core solid is actually really small. It's just like client export this plus control flow and then server re-implement a different version of this that is
[04:04:58]  pull based instead of push pull. So, you know, for SSR or what, whatnot. So it's more performant, but basically the solid package is purpose.
[04:05:08]  Now is aliasing, um, between different server and client builds where this is a purest, always reactive version of all the core helpers we need. They could
[04:05:20]  be, but like anything, the specific solution is more performant than the general solution. So for things like the mapping control flow, um, I'm going to,
[04:05:32]  you know, avoid the proxies. It's also important because not everyone can use proxies. Um, there's a whole mode and solid that if you follow
[04:05:40]  certain steps and I've talked to people who work on things like television, it's all very popular on like TV apps and stuff because of the low memory and high performance that
[04:05:47]  we actually, if you don't use proxies and you don't do like a certain couple of patterns with spreads, we will not create any proxies,
[04:05:54]  which means that solid can work back to, um, like Chrome 39 or something. See like stuff like op, uh, optional, you know, like null, null checks
[04:06:05]  and all that and coalescing operator and stuff, um, optional chaining, those don't matter because a language compiler can do that very easily, but certain other things
[04:06:13]  like proxies are like impossible to, uh, polyfill. So it's, it's important that I, we do try and support really, really old devices
[04:06:23] . Um, so for the most part, store stuff is kept to, uh, its own lane. Oh, native browser signals. Yeah. I don't know. I
[04:06:36]  just wanted to show what's possible now that I've done it. Let's see what we can do in native. Solid start need its own platform like for itself to
[04:06:48]  next. But no, I mean, I'm going to talk a bit about solid started in this week in JavaScript. I'll give you an update very soon. I mean
[04:06:55] , it's, it's hard to say. I, I, there's a lot of commonality on the core part until you get to the effects. The,
[04:07:03]  the current proposal, if it was super performant building the browser, I think I could build this on top of it. So I'm, I'm fine with it.
[04:07:10]  It's just anyone who's like, oh, let's just hook signals into the DOM directly. You know, uh, I'm sorry, guys, that's not a
[04:07:19]  great idea. I think I like signals as a TC 39 spec, not as a what, what gig, whatever spec. I know RxJS has had to circle
[04:07:28]  the whole pot trying to figure it out. None of this is going to stop me either way. I, I, I just like the amount of understanding that's come
[04:07:38]  through these new exploration has just been immense. Yeah. Chrome, Chrome 53. That's pretty good. I think 49 is like an awkward spot. Um, but yeah,
[04:07:49]  I, I, I, the people lightning TV is a big one guys, Comcast and, you know, Peacock and all that kind of stuff that you solid
[04:07:56] . Um, I've also talked a bunch with the Netflix people. I don't know where that project landed. I think it probably, I would have heard more if
[04:08:04]  it actually completed, but it's definitely something that I have in mind. Um, could be profitable. Yeah. I mean, sure. I, I don't, I
[04:08:15] , I don't know about businesses. I just make cool shit. Yes, definitely. On cleanup still exists. And it's in this list. I'm just saying
[04:08:26]  that I, again, this is an example where I think the, the average developer who uses solid litter like will probably like, it's going to be easier and easier
[04:08:37]  to literally just use these and not use it and pretend most of these other ones don't exist. I mean, there's a few of them is stale might be useful
[04:08:44]  on tracks, obviously useful. Flush sync. Reconcile. These are wrapped. Yeah. I, I just like, even though this list has about 30 things
[04:08:59]  on it, I think a lot less, I think we've streamlined it a lot to be fair. I, and this is no slap at Tanner. Cause he,
[04:09:14]  and honestly, he's going to come talk about it. The area that Tanner works in. I don't, I don't care very as much about like I'm a
[04:09:23]  mechanics guy. So when me and Tanner talk about something, we'll be like, okay, we can do this. And he's like, oh yeah, that's really
[04:09:28]  good for this. And then do this. And then we'll like bounce off each other very rapidly, which is really good for us working together. But like, I
[04:09:34]  have to admit, he's shown me the stuff. Most of my feedback has been, this is really good. I hope someone builds a library for that, but I don
[04:09:42] 't want a core. If that makes sense. Like, um, PRPC in the solid ecosystem does a lot of the stuff that Tanner's built wrappers over server function
[04:09:51] , a lot of that stuff. And I think it's very important. I think the type safety is very important, but I think quite often we get into this zone
[04:09:56]  where like, um, I haven't actually, like the, the part where I get focused in on are the parts that I feel that we actually did nail with solid start
[04:10:07] . And the, the parts that tan stack start is actually borrowed from us. I, I think in the future Tanner's sense of how, what developers actually want is
[04:10:17]  going to be the core. And it's why I'm not the guy to lead solid start. I've said this multiple times, someone else will do it and they will
[04:10:24]  do well. And maybe Tanner part in this is very core. Maybe these just become the same projects. What I care about is like single flight mutations, like the whole
[04:10:35]  data flow, isomorphic loaders, all those things. Those are all things we had in solid start that 10 stack, um, and ended up borrowing. That's
[04:10:42]  the, that's the level that I'm thinking at. So, um, I'm very stoked because Tanner is doing like a second pass. He's improved on like what
[04:10:49]  we've done with Vinci. So we'll be able to replace and improve pieces because of that work. Um, but I, I have to admit, you've
[04:10:57]  seen everything I've been showing here. I have not looked at the start projects for like four months. Um, okay, let's, let's switch modes two seconds.
[04:11:10]  I'm going to full screen and then we're gonna go this week in JavaScript. Um, which I think is gonna be pretty fun because we got some hot react action coming
[04:11:19]  up. Um, actually it's, it's been like three weeks, so I need to pull some together. Yeah. Yeah. Uh, did I kick the horn
[04:11:35] et's nest enough? Yeah. Okay. Yeah. I have so many notifications because of what I said earlier. Let me just try and sort out my, my, my
[04:11:46]  profiles and stuff. And then we'll kind of go from there. Um, this is a good time to like subscribe, you know, all the stuff that I'm
[04:11:54]  supposed to tell you on the videos that help to get playback later. Very much appreciated. If you do do that, um, go to my profile and then duplicate.
[04:12:10]  And then we can go to bookmarks or I'm just trying to get everything organized here for two seconds. All right. When was the last time I streamed? I
[04:12:24]  think that's the first question. I think it was January 24th. Did you guys watch the angular, uh, the angular documentary? It's all started to 15
[04:12:42] 2. Yes. Tanner's moving on. Yeah. Yeah. This was a, this was a coordinated effort. Um, so yeah, I mean, I'm going to
[04:12:52] , I'm going to talk about, about it. Solid start is still on Vinchy. Tan stack is still on Vinchy. Um, we, we
[04:12:59] , we had a meeting in the January when I was just like, we were kind of like, enough is enough. And I got all the people working on solid start to
[04:13:08]  kind of officially make a solid start team. They were already doing the work, but just make sure they could automate it. And I wasn't the blocker Tanner sitting there
[04:13:16]  in the meeting. And we just basically just laid out a plan long-term where we continue to merge or converge the projects. Um, right. We'd already kind
[04:13:27]  of decided that Vinchy wasn't able to be sustained by one person. And it basically enabled what was possible before. Like we wouldn't have been able to release solid
[04:13:39]  start back when we did without Vinchy. It would have been impossible, but now it is possible. Tools are catching up. We just, there's still work
[04:13:48]  to do. Um, so yeah. How do you find other future signals? I've, I've got some really cool demos, but I, I've literally spent four
[04:14:01]  hours on them. So I, I can't go back there, Dax. But I, all I can say is I've got like self-healing, as
[04:14:10] ync, granular. Well, it's really cool stuff. Um, yeah, there's like a bit of a law in the minute where everyone complains about create effect
[04:14:22] , but if you get past that, there's a, there's a, there's a really good demo in the middle. Um, it'll have timestamps eventually,
[04:14:29]  but yeah. But, but okay. So January 24th. So let's scroll back the time to January 24th and talk about, Oh, that's so suitable
[04:14:47] . That's so hilarious. All right. Yeah. I'm going to talk about solid start as well, obviously. And then finally my own channels, January 24th
[04:14:58] . All right. I remember the last stream now. All right. Let's, let's, let's kick this off and get started on this week in JavaScript.
[04:15:18]  Okay. Let's do it. All right. Not like that more like this. Okay. So yeah, I, I, that tier list, I think went over
[04:15:32]  pretty well. I'm, I'm glad there's some, uh, some awakening for some people to understand the scenario. I'm not going to focus too much on
[04:15:39]  that, but the actual very first post is so thing. Uh, yeah. I mean, I put on my own profile, January 27th. What do we got here
[04:15:49] ? Yeah. 10 stacks are solid, never bet against Vite. And for anyone, this is, we're going to go into this topic in a few minutes, but
[04:15:59]  this is completely a sub tweet about the react team and the create react app situation. I wasn't sure how they're going to resolve it. Cause let's face it
[04:16:06] , this has been like three weeks, but I saw the conversation and I'm like, you guys are crazy. Um, that, that simple, like. Vite is
[04:16:16]  a force that you can't just kind of like push under a rug. It's the most positive force in the JS ecosystem, probably in like. In years, like react
[04:16:26]  was like that at one point, but Vite has been consistently the thing that people are most happy with for years and years in a row. Yeah. So. Yeah
[04:16:41] . I mean, we're going to keep that in mind as we continue through the rest of, uh, of this week in JavaScript. But I, I saw, I
[04:16:49]  didn't know the CRA thing was still going on because the truth of the matter is Theo brought up that issue like two years ago or something, or like three years ago.
[04:16:58]  And they were like, yeah, we're going to do this, blah, blah, blah. And they did the recommendations. I had no clue that it was still
[04:17:02]  like this big dragging issue. It's like, like most people are like, couldn't they just switched to create Vite already? You know? And the answer to
[04:17:12]  that is complicated and we can talk about that in a bit. But what I'm getting at is whatever answer they chose clearly was not to choose Vite. And I,
[04:17:24]  I, I think it's, it's an interesting decision. That's Vite says the, the, the, this, uh, no bundle, no bundler
[04:17:34]  joke. Oh man, Astro is king. Astro is awesome. But yeah, I mean, you, we'll, we'll, we'll look at the new
[04:17:46]  react intro stuff and see if Astro is mentioned in there. Hashtag no build. Yeah. Yeah. Yeah. Only the only thing more detached than web components.
[04:18:01]  Although this, this not betting on Vite thing from a react perspective might even be more crazy, but, but let's, let's kind of go into it. Um
[04:18:10] , in a, in a minute. Okay. If you guys didn't check it out. I got the chance to be in my second honeypot documentary, um, which
[04:18:19]  the angular documentary cool story. Um, I don't know enough about the internals of angular. I honestly didn't pay attention to it until Pavel reached out to
[04:18:30]  me about signals. So I can't really speak too much to it. Um, people were trying to teach me stuff like back when I was like a writer on an angular
[04:18:38]  blog site, writing about solid. I mean, the communities are always been great, but, um, I don't, some people complain that this was like a little bit
[04:18:45]  one-sided, but I think the important part isn't where angular was, but where angular has been heading there was a switch that happened 2018, 19, 20 kind
[04:18:55]  of time period. And it's been paying off the last couple of years. And I think that part of the story is really interesting, really compelling. Um, so yeah
[04:19:03] . Um, if you haven't seen it, it's worth checking out. Um, yeah, okay. Yeah. That's a react topic. I want to see
[04:19:19]  if there's anything else that I can talk about before react. What's the biggest turning point for solid. I think I talked about when they, when Dan Abramoff
[04:19:26]  announced hooks, it's kind of funny how sometimes something that's like a necessary solution for you, like direction for you to take through your tool for it to work can be
[04:19:36]  done better by others. Um, and it's like, it's, it's like one of those tensions where do you keep things the same to hold onto your grip
[04:19:44]  or do you try and progress to move to the, the where things need to go react in my opinion, always took the right choice generally to kind of move with the future
[04:19:53] . Um, at least historically, but you know, it is an interesting thing because it was them moving to hooks, which made people finally actually pay attention to stuff like solid
[04:20:03] . It was what made Svelte 3 happen. It's what made view composition, you know, API and view 3 happen completely because of react books. So for
[04:20:17]  me as a huge turning point, the ironic part is it didn't actually make solid.js happen. We already had that, but it, it, it, no one
[04:20:24]  would have been paying any attention because we weren't the only ones back there that had that. There were other libraries doing this kind of thing. Just no one cared.
[04:20:31]  Um, okay. Let's jump over to here. Yeah. This news. I'm gonna do some solid news here for a bit. Um, God, Tanner has
[04:20:50]  been just making lovely jabs the last little while that I think is just hilarious. Pretty think that solid scan be the most boring dev tool ever. Yeah. Cause nothing re
[04:20:57] -renders. And I think we just showed that nothing even re-renders when it's async and off the page. So, you know, good stuff
[04:21:04] . But, um, a lot of this stuff has been about setting conventions for solid 2.0. I, I started fishing to kind of get an idea of how we
[04:21:12]  could standardize stuff. Um, you know, do people look at classes? This was trying to determine if we could use class list type, um, functionality for normal classes
[04:21:24] . Cause it's really awkward if someone goes props.class and it's like an array or an object or a string. Well, apparently even if 13% of people
[04:21:31]  claim that they introspect, not a single one of them commented to explain the situation where they do do that. I was like, if yes, please comment. Like,
[04:21:42]  I don't care about that. This is the only portion portion that I actually care about. And this, yeah, one person, Ryan Schall, you're, you
[04:21:54] 're my, my hero. The first actual example, it happens until when you did them user passing BG color, if not add a default. It doesn't happen
[04:22:04] . And most people probably use a library, like teamwork, couldn't string and sales automatically. Exactly. But like out of. Everyone who in the poll, not a single
[04:22:12]  person who said yes, actually gave me an example of it. So I think it's fairly safe. Anyway, the other one, obviously I was asking about this.
[04:22:23]  It seems like most people are fine with taking HTML type stuff and not copying react. It is, it is a very, it's not even copying react cause we can't
[04:22:31]  copy react. I'm not going to like do a bunch of weird transformations, like make area into camel case when it's not. It's more of like, do we
[04:22:37]  just make things convenient? Like look nicer. And the general answer I'm getting here. It's not so much. It's not that important. So yeah. Oh
[04:22:46]  yeah. The birthdays. Should we talk about that for a minute? Do you know how many people have birthdays in the same few day span, um, in this community
[04:23:00] ? First of all, you guys might know, may or may not know me and Tanner, uh, have our birthday on the same day, which it's interesting. We
[04:23:07] 're both Aquariuses. Um, but we're not alone. Two days before our birthday is Rich Harris's birthday. And two days before that is Dom, Dominic
[04:23:16]  Ganaway's birthday. Um, so two, two main people, uh, from Svelte community as well. Um, David, who's our community manager
[04:23:28] , he's the day after my birthday. So it was, it was definitely, uh, it's definitely interesting. Every year it sneaks up on me and I'm
[04:23:36]  like surprised, but there you go. It's like a rule that if you have X number of people in the room, two people have the same birthday, but this
[04:23:47]  is like kind of crazy. Um, so yeah, it's just, it was funny. We came up because me and Dominic, like we chat. Um, I
[04:24:00]  should have give us some more reference here. Um, it's not out yet. We'll see the Svelte community is working on similar async stuff in the same
[04:24:09]  zone, especially the run one stuff. Um, they have their own kind of version of run once. Um, so like we're fairly aligned. So we've been
[04:24:18]  talking a lot and it was actually Dominic who got me to like, I told you, it's just a one line change in our solid implementation, but he's the
[04:24:24]  one who got me to say, okay, I'm going to turn that one liner on and see how, see how it works. Um, and he was just saying
[04:24:31] , we were just, you know, shooting the shit and he, you know, he was just saying tricky thing with Aquarius is, is like, we, we build
[04:24:38]  our mental model. Um, that's like how we work. We, our whole world is our like projection of like how, how our, our mental model, it's
[04:24:46]  kind of like a common trait. And he's like, I, I, you know, generally I don't think much about astronomy, but after seeing, you know
[04:24:53] , myself, yourself, Rich, you know, working in this zone and like how our opinions work and maybe, you know, butt heads on a few decisions, you know
[04:25:02] , about consistency of our mental model. He's like, I definitely think there's something here. Uh, so yeah, it's, you know, it's strong opinion
[04:25:11]  and analytical kind of thing. Anyway, crazy. Yeah. Yeah. I NTPs and INTJs probably a little bit too. Yeah. A lot of ins
[04:25:29]  though in general. Um, so yeah. Um, okay. Yeah, let me switch back here. Talk about that. Okay. Let's talk about solid start for
[04:25:49]  a minute. 1.0, 1.10. So the first minor release in like seven months, I want to say. Um, and this happened with me, given
[04:25:59]  the keys away, the, the, there's a whole process in place now. So that maintainers managed the release of this V plug and solid. I'm finally
[04:26:09]  like, I always, there's always been maintainers in the repos and get hub in solid, you know, doing stuff, but before anything ever got shipped to N
[04:26:16] PM, I was like sitting there as the guard dog being like testing everything and being crazy about it. Um, that that's not sustainable. So now we have independently
[04:26:25]  working teams, not just people contributing and managing PRs and stuff, but people actually doing releases and working around the clock. I should have done this ages ago, but now
[04:26:35]  solid start is working completely as a separate entity from the work that I'm doing, which is great. Cause they're merging in Tanner's new stuff and they're getting
[04:26:43]  stuff going. Um, I, this is, I call the gear five obviously after one piece, but it is really ramped up. This is the, we've been
[04:26:52]  working very closely with TAN stack team. We've been in their discord. We're working on the plugin. We're building that shared base. Vinci was a good
[04:26:58]  start, but now we're taking it to the next level. And I'm very excited where this is heading, especially because I don't, um, I don't need
[04:27:04]  to actually, I, I, it freed me up to work on this stuff that I've been showing you today. So this is, this is very promising news,
[04:27:12]  big thanks to people, what I call the start team, especially Burke Burke is if you have someone to thank for moving the stuff forward, Burke has always been the main contributor
[04:27:24] . Who's helped the most, you know, whenever a new version of V comes up, make sure the plugins, make sure everything works. Burke has always been amazing.
[04:27:31]  Um, and still is working now, basically leading this effort, uh, along with Attila here. And then obviously, um, the others here have also made big
[04:27:45] , uh, impact on this. So like, uh, yeah, as I said, I'm far enough away from it now that I, I can't even speak to
[04:27:52]  too much of that, even though I didn't write this, you can already see from the change log. Um, things are finally getting kind of, um, ironed
[04:28:00]  out higher them all. Yeah, no, the, the, this team is great. Right. And, um, I know Alexis got in on some issues, helping
[04:28:08]  make decisions and Nikhil's still around when we need him, but this has grown beyond us. So I'm, I'm, I'm, I'm very stoked
[04:28:16] . Um, so yeah, very awesome news on solid start stuff. They've had a couple of releases over the couple last couple of days. So very, very cool
[04:28:25]  to see, um, job posting, just getting that in there. Okay. We already talked about all the stuff. Okay. Uh, I'm going to share this
[04:28:38]  out here. The examples I showed you today are published to MPM essentially on the branch. So there is, I showed a lot of these features off, but there is
[04:28:50]  the beginning of a plan in place to get solid 2.0 on, on going forward. Um, right now we are at the experimental stage. I still need to iron
[04:29:00]  out the approach to SSR and hydration. Once we have a full story, you know, as the client's mostly like done from a prototypical standpoint, but once
[04:29:09]  we have the full story, then we can like, start talking about, Hey, are these the right APIs? I'm going to start writing up RFCs. We
[04:29:16] 're going to get community feedback. Um, you know, we're going to talk about migration, talk about what that looks like right now. This is just capability. You
[04:29:26]  know, we wouldn't have self healing async and error boundaries if, if, you know, hadn't tried it and, uh, some of the stuff I'm
[04:29:33]  thinking about for SSR and hydration is equally crazy. Um, right now solids, uh, server render is a lot like react actually like re-renders from suspense boundaries
[04:29:42] . I'm looking at a completely pull based system using the same techniques that I, that I, I, I basically employed in the client to do, um, suspense and
[04:29:50]  error boundaries. I think it's possible to make it render once without having reactivity without having it being expensive. We can pull instead of push. Um, I've
[04:29:59]  got crazy ideas of how to get rid of hydration IDs for hide for hydration, which would be huge for solid. Cause as people probably know, might already know solid has the
[04:30:08]  fastest SSR renderer, but it's slowed down by those hydration IDs to kind of knock it back down to the same range as everyone else. If we didn't have
[04:30:16]  those hydration IDs that use approach, we did. We were by far the fastest SSR solution. So it's like, it was fine because I knew that with the
[04:30:27]  trade-off, but I think there's, uh, uh, an approach here that will make the solid approach clearly heads above the other. So I'm, I'm
[04:30:35]  very stoked to be able to try that. And as I said, these might have API impacts on consideration. So I'm, we need to at least get to that level
[04:30:43]  before we can start talking about how we can bring this into your libraries and even talk about what the shape of the API is are too much. Um, finally, you
[04:30:52]  know, when we get to beta, we're going to be looking a lot about documentation. We don't be looking a lot about code mods and migration efforts, um,
[04:31:01]  and trying out Cobalt and, you know, our chat CN, you know, libraries and make sure, you know, 10 stack stuff works with it. Um, and
[04:31:10]  so that there's no timeline yet. Uh, but this is the process has been started, it's kickstarted, you can go to the branches, you can
[04:31:18]  see the commits, you can participate, um, where as, as we roll up this out, I'll be having more updates, you know, in the future, but
[04:31:26] , um, I'm content to now enough with the stuff I was showing today, the conceptually, I think directionally, I can see all the pieces kind of come
[04:31:35]  together, like the, with this new base and yeah, there are some breaking changes. Um, that's going to be part of this, which is why, you
[04:31:45]  know, I delayed doing this until I was sure which ones are key. Like, obviously some of the stuff doesn't matter that much, but like obviously create effect is a
[04:31:53]  very noticeable one because it's a core primitive. The other core primitives, um, aren't different or most of them are easy to migrate them, um, via like
[04:32:02] , uh, legacy imports. And I think for create effect, we might even have to do that. We'll have like create legacy effect and people will just deal with
[04:32:11]  it. I guess if they, if they can't figure out how to split it, we'll talk about those kind of strategies as we get to it. And like actually
[04:32:18]  consolidate, we'll, there'll be an RFC on the effects, splitting and stuff like that before we get to that point. So we get actual feedback, but
[04:32:24] , um, right now it's just like looking at what's possible. Um, that that's, that's generally how we always approach these things. Right. You
[04:32:34]  know, it's not about like build it quick. What was it built, build it, make it, make it work, make it, make it correct, make it
[04:32:52]  fast or something. We kind of do stuff in the opposite order. Um, so right now we're mostly interested in, in like pure mechanically, is this performance?
[04:33:00]  Is this the approach that makes sense from like the opposite perspective? So that takes a lot more tinkering around before we can actually decide on these things because they can
[04:33:10]  be impacted on capability. Solid start. I'm working on solid, um, solid start. I am not doing much work on. Um, and my, my ultimate goal
[04:33:24] , like, I don't know. I'm if people really liked hamstack start, there is completely a future where it's just the same thing. Like,
[04:33:31]  it's just like CLI start. And then it's like choose solid or choose react. That's not out of the thing because Tanner has, as I said, been
[04:33:40]  very receptive on a mechanical level about the stuff I care about. Um, and it's just a matter of like, does he know how to create the type of experiences that
[04:33:50]  developers want to use? I think so. So I'm, I'm cool with that. As long as it checks off the boxes to be super performant and like mechan
[04:33:58] ically doing the right things. Yeah. Yeah. Just start like it's, it's hard. Like, can you picture like it felt as different where, but look
[04:34:11] , look, it happened to both me and rich. Like felt got put on hold for Svelte kits. Solid got put on hold for solid start. I could have
[04:34:17]  done this. This is the crazy thing about this. And I, you've seen my hack in these, the stuff I showed you today. I basically in 2022 was
[04:34:23]  like, look, this is how it should be. I just haven't. It took me like almost three years to get to it. I already had this idea, like
[04:34:31]  these ideas. I've already written about them at length. I just couldn't get around to actually doing it. Um, Rich Harris got, had a symbol, similar block
[04:34:39]  with Svelte kit. It's very different when you have like Daniel Rowe, who's amazing. And then Evan doesn't have to worry about that. Or
[04:34:45]  the, the, the next team from react, like they've completely separate. Well, they used to be, but who knows? Maybe that's why they're getting kind
[04:34:54]  of jammed up now. I mean, they're big enough. They have meta and they have Vercel and they're completely different. Right. Right. So
[04:35:03]  yeah, I, this lets me focus on solid, um, a lot more, which needed to it. It's, it's, it's crazy. Oh, this
[04:35:13]  is a perfect lead in. It's, it's crazy how long it's been since I got the focus on solid. Um, I noticed on my birthday that it had
[04:35:22]  been too, I did like a Google thing. And I asked Google to do the math for me. I was like, how long between this and this, I noticed
[04:35:29]  that the release, the difference between the release date of initial release of react, uh, 0.13 or whatever, like the initial public release of react and jQuery was
[04:35:38]  2,400 and I think 2,844 days or something. And the difference between, or was it 2,448 days or something like that. But on my
[04:35:50]  birthday, the difference between when solid was open sourced and today, that day was one day after it was 2,849 versus 48 or something, which was nuts
[04:36:03]  to me because that's around the last, like I did a little bit that first year into like, into 2019, like the 2018 to 2019. I did a bit of
[04:36:14]  kind of core shaking a little bit there, but that's like the last time I got, I was that first year was that I actually did. It made a big
[04:36:22]  change to the core of solid in terms of reactivity and stuff. Like I, I focused on SSR. It wasn't just solid start. I spent like six years
[04:36:29] . between solid SSR streaming, all that stuff. When I saw important, it was working on the Marco stuff, that we did a good solution to work on solid
[04:36:37]  start. I spent so many years not touching. Everyone's like, why is solid signals not lazy? It's like, cause I literally haven't touched them in six or
[04:36:44]  seven years. What, you know, but on the same token, it's, it's a testament to how, like when people pull out the JS framework benchmark and
[04:36:53]  they're like, oh, you know, view vapor now bubble or salt five ruins now I've edged it in front. It was like, oh, that's,
[04:37:00]  that's good. I mean, it's been seven years, right? Like I, I also haven't touched the benchmarks, the performance. Like if someone went and picked
[04:37:09]  up solid in 2018 or whatever, they would have had the performance that you get out of modern Svelte or view, um, you know, as of this month.
[04:37:18]  So like, I don't know, it's, it's crazy when you think of the whole life cycle where people, you know, like, oh, I don
[04:37:24] 't want the latest, greatest thing, shiny, new two tools, JS fatigue, you know, what, whatever. And then it's like, like literally you could have
[04:37:34]  in the whole life cycle of an app, like in the past, like where picture how everyone wrote, rewrote stuff in jQuery, and then they rewrote
[04:37:41]  stuff in react in that same cycle, you could have been using solid the whole time. I'm not, I'm not suggesting that it's popular, the right solution
[04:37:47] , but like, it's crazy. And I guess it's only crazy now because other solutions like Vue or Svelte have kind of come around to using the same
[04:37:58]  kind of solution, but it's, it's hard because so much changed between when jQuery and React came out. Like we had knockout backbone, we had so many
[04:38:06]  cycles of this stuff. It felt like an eternity to, to, to believe that that same eternity had happened since I first opened source solid is, is crazy. Right
[04:38:15] . It's, it, it, it speaks tons to the, the, where the JavaScript ecosystem is because you know, all those guys are like, oh, you know
[04:38:25] , new framework every week, you know, like PHP and all this stuff. It's like, no, like it literally took seven years for the JavaScript ecosystem to,
[04:38:36]  to, you know, adopt this kind of thing. And it wasn't because it wasn't maybe the right thing to do. It was because people choose solutions based on
[04:38:45]  maturity, popularity, job market. These are signs of maturity. Not everyone just flicking off to do their weekend projects. Otherwise I think solid probably would have been a lot
[04:38:55]  more popular. Things have drastically changed so much more that other solutions have had enough time to catch up rather than people choose new solutions. That, that is a testimony to maturity
[04:39:10] . more than anything. Right. Like, so what have I been doing the last seven or eight years? Well, working on SSR and figuring out exactly how I
[04:39:22]  would fix things. And that's what I was showing you today. I've had a very, very, very long time to figure out where things should go. So
[04:39:40]  like, yeah, what do I say here? People are concerned that JavaScript front end hasn't matured. I think this is a testimony to the maturity more than anything else
[04:39:45] . We have chosen stability maturity over cutting edge innovation. And that is a sign of our growth. Like it generally, it's something that needed to happen. So it's
[04:39:53]  a good thing. Um, but yeah, I mean, it's, it's mind boggling. The JS fatigue group is mind boggling to me now.
[04:40:06]  Right. Like. Okay. All right. Let's go some. So we've looked honeypot. Okay. I, I'm kind of going to agree with Tanner
[04:40:23]  here. Maybe I'm just not pushing it hard enough. I still doing this week in JavaScript on Twitter, because honestly, Twitter is doing better for me than blue sky.
[04:40:31]  I, I feel like blue sky, there's just something odd about the type of conversations I get in. It's very, you know how I, I wasn't sub
[04:40:38]  tweeting blue sky when I was talking. I did another tweet about people convincing people that react good, but it's like, it's this weird intersection of like no build web
[04:40:48]  component people. And then like react diehards. Um, maybe cause Dan was over there doing work, whatever. And there's like very little in between that.
[04:40:58]  It's just such an two sides pass talking past each other kind of scenario that I don't even, I'm, I'm just like, you, you, you all
[04:41:07]  are crazy. You know what I mean? So like, it's like, it's yeah, it's just, I don't know. It's just. There
[04:41:20] 's like, there's a couple of different zones, you know, like, I don't know how to put it. Like there's a weird alignment between like web components
[04:41:29] , no build rails. Like, like this kind of perspective, maybe it's just like old school perspective. And then like, there's also like this hard. Yeah
[04:41:39] . I don't know. It's definitely two sides kind of trying to form and both sides are, I don't know. Yeah. I thought that at first, but
[04:41:51]  I think people legit gave it a try and I'm still giving it a try. I'm still tweeting and stuff. It's just like, it's, there's,
[04:42:00]  there's a different aspect on Twitter that I don't think you find there. Like, I think Dev Twitter did a pretty good job of lifting and moving, but I
[04:42:07]  think that like, there's like VC Twitter or like, like, I don't know, like there's like a different group of people that I also tune into. And
[04:42:17]  their blue sky presence, they're not getting what they want out of it. So they're not being as effective, which means that they stay on Twitter. So,
[04:42:41]  all right, so I guess we should talk about Vite, right? I mean, first, yeah, this is what I was talking about earlier, where Evan was showing
[04:42:50]  view vapor. And if you look at it, Solid has this problem right now in 1.0. This is really slow, but our selection is really fast, right
[04:43:00] ? And then for this reason, we have this kind of split. Now, this is locally on his computer. I think it'd be a little tighter on the other ones
[04:43:09] . I imagine that these are all fairly close, but generally speaking, this has been the trade off. If you look on there right now, Solid's slightly ahead of S
[04:43:16] velte, but last release Svelte was ahead. And view vapor is kind of edging out them both on this run, probably because it's on his machine
[04:43:22] . But if you look at the actual tests, unless he did, in fact, get faster create rows, which is possible, maybe the creation is faster. These should be
[04:43:34]  kind of, you know, the split makes sense to me. It should be kind of close. If you looked at actually what I put up earlier with Solid Next, you
[04:43:42]  see the same slowness here and this, except now this is fast. They're faster slightly than Svelte on cleanup. And I've confirmed that multiple and
[04:43:50]  locally, at least proportionally. I can't speak against Vanilla. And then this is faster. So I would not be surprised, even though I was not trying to
[04:43:57]  improve performance of Solid, I think it might actually edge ahead of the others in the JS Framework Benchmark because of the selection speed. It basically solved both problems.
[04:44:07]  It's just an interesting thing. But obviously it has to do with create selector. And Evan actually made something. There's no need for create selector or VM
[04:44:18] MO. Yeah, it's only that. So it's artificially slow, blah, blah, blah, not worth optimizing. Do normal code. And my only point is
[04:44:25]  I actually do think the whole selection mechanism via projections isn't a real problem from a reactive standpoint. So I'm actually very excited that this is a general solution that ships with
[04:44:34]  Solid. But unless they follow, I agree. Just making a specific create selector seems kind of, you know, like we're doing Solid kind of an interesting hack
[04:44:45] . I was trying to show... I told you this problem has always bugged me, but it still bugged me how specific the solution was. I'm happy that it
[04:44:54] 's a general solution now. But yes, Vue Vapor is getting much closer. Which as I said, a couple of streams back, you know, Vue
[04:45:04] 's kind of catching up on the stream svelte a couple of years ago. That big gap we had, you know, corner of the market on the kind of react
[04:45:12] ivity has kind of shrunk, which is amazing because Preact, Angular, Quick, everybody's using signals and getting more fine grained, which means this is a complete
[04:45:21]  shift from where things have been with React. And I'm very excited to be able to showcase off stuff like today because we're not even... We're just... We
[04:45:30] 're still mentally catching up to React with this capability, but we can do more than React, which is crazy. Right. Yeah. I think the category we're going to
[04:45:42]  solve is a general solution. We're going to create a select attribute replacement with something else. I think the problem is that we're solving even the smallest highlight in the benchmark
[04:45:47] . Okay. Okay. Let's... Is it time to talk about a couple of the React topics? Maybe. Okay. First one that I'm going to talk about
[04:46:08]  is a little bit easier. There's been a lot of discussion. I think people are starting to realize that Next.js and RSCs aren't what they thought they
[04:46:16]  were. I mean, it took me a while to mechanically explain it, but... Theo, the big Next.js guy, decided that he was going to actually
[04:46:35]  use React router instead of Next.js to build his app. And then he was like, "Oh, I wonder how long it'll take the new T3 chat
[04:46:43]  from Next to Hono." And Fred, who we all talk with very often, was like, "All the big stack frameworks the last 10 years have made the exact same
[04:46:51]  bet on coupling server client into a single isomorphic architecture. Now client-side spas make it come back and they can't adapt. I expect to see more of
[04:46:56]  this." I disagree. I disagree, actually, relatively hard here. In principle. It's not... He's right, but the reasoning isn't quite on. And
[04:47:11]  I can't speak for Nuxt. Nuxt always surprises me. Because... I think Nuxt probably had a spa mode before anyone else did. But the thing is
[04:47:24] , the isomorphic aspect isn't what the trap is. The trap is assuming that... Because you have the server, the old classic Rails model is where you want to
[04:47:40]  be. Like the Remix loaders or the... Or RSCs. Don't get me wrong. RSCs are good. But they're not good for what
[04:47:48]  Theo is trying to do here. RSCs are if you want to make Astro as a React app. Like, they fit in that similar zone, you know
[04:48:00] ? It's like, maybe this will be enough to make React good enough for e-commerce. Like, that's the zone where this sits. When... And this is
[04:48:12]  why I had to kind of call this one out a bit. Because... I created SolidStart specifically because I didn't want to lose the ecosystem. So that every single
[04:48:22]  page app pattern would still apply. You'd build apps the way you build single page apps. And then you would essentially just augment server features in a way that was... Basically
[04:48:31]  did not change the mechanical things. Like, if you have loaders in SolidWriter, they run on both sides. There's no, like, server loader
[04:48:39] . A server function is just an RPC call to replace an API call in the exact same location in the code. This kind of mentality meant that the server additions didn
[04:48:49] 't have to change the way stuff worked. Um... And even to the point of understanding that the... Like, the separation between the route and the routers, um...
[04:48:58]  And bundling. I linked my talk, Shape of Frameworks.com. If you haven't watched it, um... It's... I'm hoping it's pretty good
[04:49:06] . I basically go from the history of Create React App. I start with a solid demo that's basically Create React App. I add every single feature, you know,
[04:49:13]  optimistic updates, single-flight mutations, the whole server functions. I go through, like, local state. I even, at one point, although I didn't do it
[04:49:23]  in the talk, I cut it out. I added, like, Redux. Like, I went through the whole history of web development all in SolidStart using Solid.
[04:49:30]  And I conveniently forgot to turn SSR on. So, at the end, you're looking at an app that looks completely modern with the actions and doing server stuff,
[04:49:41]  like server actions or server functions and doing the whole thing. And then it looks like, you know, kind of, like, we got there. And then I go
[04:49:51]  to test progressive enhancement. And then I go... It shows a blank page. And I asked the audience, like, "Oh, why is it blank?" And it was
[04:49:59]  like, "Oh, we didn't actually turn on SSR. That's why it doesn't work without JavaScript." And the turn on SSR was like this.
[04:50:06]  So, we went from SPA to SSR with a flick. And everything was the same throughout. It's the exact opposite demo that Rich Harris and Ryan Florence did when
[04:50:15]  they introduced their respective frameworks. Within two days of them, Ryan Florence did this trick where he was building a React app. And he had JavaScript off the whole thing. So
[04:50:26] , he was doing server updates with forms and actions and everything the whole time. But no one noticed. And then at the end, he was like, like, towards the
[04:50:34]  end, he was like, "Oh, actually, there's no JavaScript turned on." And then he's like, "Turned on JavaScript." And no one realized
[04:50:40]  that he had this React app working the whole time with no client-side JavaScript. Whereas I did the opposite. And I think the fact that both of those realities exist suggests
[04:50:51]  that the statement by Fred is not true. However, RSCs aren't going to be the right solution for everything. And if SPAs are making a comeback, no
[04:51:02] , you're not doing RSCs. But there is a world in which the server to SPA break is not a big jump. Yeah, deep local first.
[04:51:23]  Yeah. So, good time for him to come around and look at solid again, I think. Because I think we're going to be very good for local first.
[04:51:30]  But yes, I think there's an interesting tension there. So, yeah, it's interesting. I think what people are realizing is that RSCs and Next, like
[04:51:45] , even Guillermo posted stuff himself. He's like, he's comparing themselves to WordPress. And I think that's actually right. Like, when I think about Spotify and
[04:51:54]  I'm going to build an e-commerce site, I want RSCs. I mean, I know Remix is there, but like, conceptually that's
[04:52:00]  the kind of solution. I want idealized RSCs. I want those kinds of things. But if I'm building, you know, some local first thing, if
[04:52:08]  I'm even building social media site, I'm not sure I want that. I mean, there's parts of it that I could probably string together. But yeah,
[04:52:16]  it's, it's an interesting, like, like, if it was a media heavy site, like a, like, like the Google photos or stuff. I don't
[04:52:24]  know. I want RSCs. We're so, um, yeah, it's interesting. I just wanted to kind of call this out. Because I think that
[04:52:37]  next and RSCs are in this interesting spot where people are starting to realize that there are clear tradeoffs, which they should have always, always get. But like,
[04:52:46]  it took a while. And I think this week, there was a lot of that kind of pushback feedback. Um, okay. What else? Oh, yeah. On
[04:52:56]  a similar note. You want, well, I don't know. RSCs aren't not easy. People, people have called RSCs a lot of stuff
[04:53:09] . Conceptually, as a model, they are straightforward. They're hard to implement technically. But as a model, I think they are actually make a lot of sense.
[04:53:18]  It's like when I pick up Astro and I'm like, okay, you know, I've got my client components and I do this and I have a page and
[04:53:25]  I render it and there's a few islands and blah, you know, like it's RSCs are fine. The problem is people are trying to, it's
[04:53:32]  like saying, okay, I have Astro and I'm not going to use the features from my client side framework, go build an app. That's a bit of like
[04:53:38]  what the experience is like, because it's like, you know, that you can go in and use React state and like React query inside the client components and the things,
[04:53:47]  but you're kind of like, don't do that. So you're, you're, it's basically like use Astro, but basically none of the advanced features
[04:53:55]  in the client components and build something super interactive. I mean, good luck with that. Right. Like there's this weird, disparaging world where you find yourself getting
[04:54:11]  pulled out of that zone and feeling the tension. It's not, it's not necessarily that RSCs can't make a good solution. You know? the idea
[04:54:35]  that I like RSCs is that I could send a spot bridge. Yeah. I mean, Astro does have a view page transition, which makes that feel better.
[04:54:49]  But like RSCs are where people hit challenges that they have a harder time being an actual app because the mutation model is broken. like you, if you're building
[04:55:01]  static pages, basically like if you're building stuff that you'd use for Astro for it, you'll have a great time with RSCs, but then you also
[04:55:07]  could be using Astro and be having a great time with Astro. Um, so it's like, yeah, you know, that's where the tension is.
[04:55:23]  But back onto that whole thing, I saw Ryan Florence basically ask you guys, okay, if we do RSCs, do you guys want to use them? Or do
[04:55:29]  you want to use our loaders? Or do you want to just keep doing SPA stuff? And he posted this up and I opened the thing and there's only like
[04:55:35]  10 minutes in, and there's only like 20 people who'd, who'd, who'd answered. And I'd answered, uh, SPA stuff. Cause as you
[04:55:42]  know, for me, that isomorphic, like that look at the SPA stuff works, you know, like, that's what we do with the starts.
[04:55:48]  We basically have query and then we feed server functions into it. Right. And so I voted that. And I, but I was surprised it was like split evenly, like
[04:55:56]  30, 30, 30. And I'm like, oh, that's interesting. Do you think this will continue? Right. And it did that, uh, you're
[04:56:06]  ugly gain some more popularity towards the end. But spas came out ahead. At some point, RCs are ahead. At the beginning, loaders are slightly ahead.
[04:56:14]  But this is a very even split. And there's a few ways you can look at this. You can look at this and say, look, that means that 70
[04:56:22] % of, or I guess not, it's 58% or 60, let's say 60% of the, of this group of people don't plan to use RCs
[04:56:35] . Right. Um, or actually, sorry, the 11 too. So 70% of this group doesn't plan to use RCs. That's one way of looking
[04:56:43]  at it. But the other way is like, this is remix. So this is, these guys are going to be the highest loader to action thing. And categorically
[04:56:52] , these are three distinct patterns. Right. And they don't just only exist in remix. Like get server side props is right here. This is get server side props too
[04:57:02] . Right. This is like what we do with solid start and tan stack start. Um, this is what next, uh, so yeah, next page directory and remix
[04:57:16]  next app directory. And so, uh, solid, solid start. I guess this is technically SvelteKit as well over here. I think Nuxt is here
[04:57:26]  because they use like dollar sign fetch, but they keep like spa, like isomorphic patterns. So there, there is a bit of a split, but they're general
[04:57:34]  enough that you can apply to cross frameworks in terms of another thing, but the fact in react, it, maybe it's fine that there are three different options because even
[04:57:41]  cross frameworks who can't decide on it, but it's, it's, it's interesting that these live in distinct worlds. Um, from my perspective, like.
[04:57:51]  What did I write here? The interest to see the poll. If there means that I speak to how these are distinct worlds, the problem. Yeah. Like they don't
[04:57:57]  really meld together. It's like an either or, and it's a decision you have to make now before you do anything. It's the first decision you make.
[04:58:06]  You're like, I'm making a new react app. And you go there and the react team's like, go choose a framework. Choose. Good luck. And
[04:58:19]  my favorite response is here is Sunil Pai, former react core team member, um, creator, party kit, web stock stuff. He's like, I was hoping
[04:58:26]  you'd tell us. And Ryan says, I'm too old. It's up to the next generation to decide our fate. We are simply enabling it all. My response
[04:58:33] . I think everyone is, how is anyone supposed to choose? This is the current state of react. Like seriously. The, the funny, the, the, it's
[04:58:41] , it's very interesting when the first move you do as a framework is tell people to choose to make a decision that will impact the whole rest of what their experience is
[04:58:50]  or what they're going to do in such a profound way. When like, as a newcomer, you can't possibly make that decision. Um, it's also
[04:59:09]  crazy that already three people are RCs. That being said, I think when you have the full push of the react core team backing them, you, you do kind
[04:59:18]  of get here faster than you would otherwise. Right. How do you choose between rails and Laravel? Well, isn't there an easy thing there? You choose based on
[04:59:35]  the language, but how do you choose the language? Right? Like backends in a funny place where they JavaScript, one language. So the UI framework, like react
[04:59:45]  views felt is essentially the language. And then once you choose that, you usually don't have that many choices. You choose view. You're like, you get Nuxt
[04:59:54] , you choose PHP, you get Laravel, you choose Ruby, you get rails. Do you know what I mean? React a little bit wider. So there's more
[05:00:02]  choice, but I feel like people should get into that mindset instead of comparing because JavaScript is the only possible language. So the fact that there's different UI rendering frameworks is
[05:00:12]  like saying why you guys are crazy on the back end. Why do you have one more than one language? Why don't you guys all just, what was that? Fort
[05:00:20] ran or COBOL? Yeah. Why don't you guys just stop there? Right? Like that's when people talk to me about like JS frameworks and stuff from that perspective
[05:00:34] , that's how ridiculous they sound to me. What do you get if you choose Node? I think the biggest thing you get if you choose Node or JavaScript is that
[05:00:48]  you get the ability to run your code isomorphically, which means that a huge unload on the client side in terms of UX is being able to manage that network gap
[05:00:59] . Now, obviously, um, being able to do so with like, uh, you know, you can set a protocol that works on both sides, some kind of R
[05:01:07] PC or whatever, but I'm talking about just like purely we can use the information that when we render on the server, on the web app, we can use that information
[05:01:14]  to reduce the load on like the RSCs, you don't get to do that, um, in that sort of way outside of JavaScript. Right? You don
[05:01:29] 't get the single authoring experience. A better example is quick. It's funny because there's something quick at Google and they actually use Java in the conversion, but the
[05:01:39]  average developer doesn't have a crazy compiler that converts between Java and whatever. Like there's a reason, like I said, Marco, eBay bet on JavaScript from the backend
[05:01:48] , not for everything, the Java servers and all that stuff, but just for the web UI layer, because there's such a benefit to what you can do on the client
[05:01:57]  side by doing that. And unfortunately we're stuck with JavaScript as the only language that's viable, at least from a load perspective on the client. So anything on the e
[05:02:05] -commerce side, I think you're mental not to use JavaScript on your, on your backend web server. If it's has a certain degree of interactivity. Obviously you
[05:02:16]  could also write your stuff in jQuery, but if you're at a scale where you actually want to continue to develop and build stuff, you're kind of mental. Big
[05:02:22] gest downside limit, the implementation in theory, I think you could do better RSCs. So anything that would apply to an MPA type architecture applies to RSC
[05:02:44] s basically in terms of mutation, require of heavy clients, server-side caching. If you could, the only thing is a client side navigation, but you can solve
[05:02:53]  those in MPAs with a view transition. So generally speaking, if you're building websites that have pages, RSCs are fine. If you're building interactive
[05:03:02]  app experiences, they are not so great. Oh yeah. I mean, yeah. PHP is big enough. So they have WordPress and Drupal. Yeah, sure.
[05:03:12]  React's got remix and thing. I, I didn't consider, I should have said WordPress. Like I didn't consider WordPress is like a whole other thing. You
[05:03:22] 're right. I, I didn't really think. But yeah, I mean, it's not really an apples to oranges comparison. Yeah. I mean, sorry,
[05:03:53]  there, there's more frameworks. It's funny though, that like they, they're so well established and have their zone that like everyone just kind of sits there and acts
[05:04:00]  like nothing changes. And if JavaScript had done that, like we'd be in such a sad state of things. But the JavaScript has started doing that. React has become the
[05:04:11]  thing. So it's taking forever for anybody to displace it. So I don't know what those people are complaining about. It's because React itself has changed.
[05:04:21]  If React hadn't changed, I think we would have seen stuff change much earlier. So yeah, this is early on, like at a hundred votes being very even.
[05:04:48]  Okay. So let's, let's, let's yeah. Maybe react to being that split. Like let's, let's probably go to the next topic. done
[05:04:55] , done, done, done, done, done, done, done, done, done. I think. Are we on? Is it time to talk about VEAT
[05:05:03] ? Oh, no, I'm writing about this one first. Yeah. Sorry. I, I missed this. Yeah, there we go. Okay. No,
[05:05:21]  I'm writing about this one first. Yeah. Sorry. I, I missed this. Yeah, there we go. Okay. So we're on this one. It's
[05:05:30]  funny. Cause okay. I'm trying to decide what's more tedious. Dealing with someone who can't acknowledge react was wrong 20% of the time, or someone
[05:05:38]  who can't acknowledge react was right 20, 80% of the time. Oh man. This is a obnoxious comment, but it was just that, like, I
[05:05:46]  feel like this way every time I talk to someone who likes web components. Um, and I think that's probably what triggered this. It just, there's so much absolut
[05:06:00] ism and it's fine. It's just, you know, it's important that people are passionate about what they care about, but it's just like, it's
[05:06:08] , it's very interesting when you talk design decisions and it's been coming up a bunch and solid and, you know, people are like, do you follow reacts lead or
[05:06:19]  you do something different? And sometimes it's not a matter of following reacts lead. You just do something that seems good or nice. And it happens to be the same thing
[05:06:29]  that reacts has done. And then it's like, it seems like when I'm ever doing these discussions on the other side of the thing, I'm like, we could
[05:06:38]  also do this. It's something to do with web components. I, I, it's like, it's like, I can do something. I could like live in
[05:06:45]  a world where everything's really nice and everything looks nice and it's aesthetic and it's clean. And then it's like, or we can do the solution that's
[05:06:52]  best for web components. And it's funny cause I don't even mention web components here, but it's, it's that same group of people that are, that can
[05:07:01] 't acknowledge reactors right 80% of the time. Um, I, I saw some conversation with hypermedia. Uh, let me see if I got the stuff in
[05:07:10]  the book, in the, in the bookmarks. Um, uh, Yeah. Yeah. Oh, where is it? Let's pull this one out. Oh,
[05:07:34]  I don't even have the full thread. This went on forever. You don't need Omnist UI when you can use hypermedia correctly, people. I
[05:07:40]  would, I would like to see. Yeah. I'm it's, it's, it's interesting. I, I, they should make the Strello demo with this
[05:07:52]  stuff, but this conversation got really derailed on the difference between server side rendering and, uh, and, and, um, server rendering. Uh, I don't care
[05:08:01]  that much. I would say there's a difference between classical PHP rendering and like stuff that's designed to run isomorphically. So I I'm, I'm okay
[05:08:09]  with people splitting this as different things. Um, the, there's some conversation about react inventing the term and then other people like, oh, these other frameworks have it
[05:08:20] . But the thing is, if you go back, people were thinking about this stuff before. Um, anyways, so like, Uh, Jordan walk. Oh, no
[05:08:34]  facts. Yeah, it's not Xerox. My bad. When was this built? 14 years ago, maybe even longer. So I don't even, this is
[05:08:44]  like 2010. It's an old experiment project. React is much better. So before he built react, seamless client, server rendering, right? Once render anywhere, client or
[05:08:54]  server reactive user, only update on state changes. He doesn't use the term server side rendering, but this shows that even before Jordan created react, he thought of creating
[05:09:04]  a server rendering hydration. Thing react popularized the term. But if you want to talk about being ahead of its time. I think. If you want to understand the beauty
[05:09:15]  of react a little bit. Is understand that Jordan recognized. That he could use the same model of templating. And componentization to build client side apps. This is
[05:09:30] , this is the, this is the start of it. Like it's pre JSX, but you, you can kind of see the core of it right here.
[05:09:38]  So this is before react and it's. It's just blissfully space. We set up on, he doesn't call it server side rendering, but server side rendering.
[05:09:45]  Like people were thinking about this stuff. So like, I, I don't know. I don't know where, where this, you know. The importance of this
[05:10:18] , but I think the, what's interesting here is. Somewhere down in this discussion. I'll see if I can find it. It's probably gonna be tricky here.
[05:10:25]  I, I called it DB Mon, which I thought was kind of cool because. This is doing only 10 rows, but you can see that. Like, can you
[05:10:37] , you can crank up the mutations. That it can update and it can do the cover on effect. I think where's the hover effect. There should be. Yeah.
[05:10:47]  They're there. They're there. They are. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. So like
[05:10:50]  you, you can use these different models to do different things. The, the hardest part about this is how do you compare. Um, something that like clearly uses the
[05:11:00]  network versus something doesn't. The problem is these benchmarks that we made kind of, um, kind of suck because like we built them like, this is just running as fast
[05:11:12]  as the framework can handle it. Like this one's doing way more rows and is like, you know what I mean? Like it, what are we testing here?
[05:11:28]  No one in their right mind should actually do this. Right. Like, like it's funny because stream can't keep up with it on my computer. You can see like
[05:11:37]  one is like a hundred times faster. Um, but it's because like, these aren't comparing like things. Right. And I think, I think what, what
[05:11:54]  we're kind of, where we're kind of getting to here is that like one of the challenges here is like, you can go, maybe this is an Excalib
[05:12:05] ur moment. Right. Cause it's like, I know Theo has done his chart before, but like there, there's like, I almost want to reiterate on
[05:12:23]  this silly chart here. Cause there's like a zone where. Traditionally. You have like really client centric, heavy stuff, and then you have server centric stuff
[05:12:35] . And like over the years, this side has been getting kind of like aggressive and pushing back into here. so much so that people in this zone are getting really,
[05:12:49]  really confused when they probably should have to stay black. And. What the main things even more confusing is that you have. RSEs now, which actually probably should exist
[05:13:03] . Only. Here. And. And it's just, it's just like really. Interesting tension here because. I see people on this side basically claim that you don
[05:13:28] 't need blue, which is. Absolutely bonkers because it's the same reason we can't make a comparison on DB Mon. But then also. Like. There's this
[05:13:37]  kind of zone where it's like. What. If you re it's kind of like, if you really want to stay blue and go farther, you can go this way
[05:13:47] . So it's like. I don't know. This is kind of been the. The tension here. You need both. Why I need. Why I did a
[05:13:56]  data store. Exactly. Yeah. Yeah. Yeah. So like, yeah, I wasn't. It was. It's just funny because this. This thread went off on
[05:14:04]  so many different ways. I think there. There was this part of this conversation with Georgie that I've said. My thesis is AG grid is the wrong way to
[05:14:12]  build apps. You can change the same behavior with many orders, multiple less JSD than being sent to the front end. And hypermedia is not about spot versus moment
[05:14:18] . I think that. No, that is not very. I'm not going to rebuild age on the server just because the technology is wrong. Okay. Yeah. I
[05:14:26]  think I misunderstood what this was saying. I was actually suggesting that. that. Yeah. I'm actually, I'm actually suggesting that you need. You need a decent
[05:14:39]  amount of the, for highly interactive stuff. You need a decent amount of the JavaScript in the front end, unless you have stateful servers, which completely changes the thing.
[05:14:46]  So. Yeah. I, I think I misunderstood this. Because like, I, one of my like tensions here is that. When I, and I think as you
[05:15:02]  said, data star does both because. You, you get in this scenario. Where's Mike Scala draw where it's like. People sitting here going like. Pretending
[05:15:13]  like this doesn't exist. And then. Technically. While this is the optimal range. You can bring this blue or green all the way down to the end. So
[05:15:30]  like, this is kind of the tension of this whole thing. You, you can, you can bring this all the way down, but this can't go the other way
[05:15:36] . That like. Um. Yeah. It's, it's just this like very. Weird dis like conversation to be had that I've been. Having here. I,
[05:15:47]  I only flagged this because as I said, it was just. People got into the definitions of. Like SSR and stuff. And I was just like, whoa,
[05:15:55]  what, what's, what's going on here? Uh, where is it? Like, what's this? Yeah. It's crazy that this spun such a thing
[05:16:09]  out. The truth of the matter is. I haven't. It's funny because original post only. Like, it doesn't have as much engagement as like literally the
[05:16:19]  amount of comments and. Threads off this. It's crazy. I, I still want to see Estrello demo. I've seen someone make Estrello
[05:16:26]  demo with like purely HTMX. And I was like, yeah, that's cool. But like. You're not convincing me that this is. Easier or better
[05:16:34]  way of. Doing this compared to like, say the remix version. Like, it's just like, it's so much harder to make it jump through these hoops
[05:16:43] . So, yeah. Maybe, maybe I'll, maybe I'll. Maybe, maybe we can talk. Maybe we can talk this sometime coming up. I didn't
[05:17:06]  struggle with them. That's what you're going to get. Well, I. Yeah. Which is just. Yeah, it's interesting. I'm. Unifying the
[05:17:15]  model is like the trickiest part, which is why I'm very interested to see how this kind of goes. Beat has overtaken web pack. I forgot I even flag
[05:17:24] ged this, but good on you. Okay. Yeah. Or Trellix. Yeah. That's the remix. The, the remix demo. Yeah. Sorry.
[05:17:42]  It's Trello is a solid version. It's Trello with. Yeah. Uh, what's this? Since. I only. Sorry. Before I do my last
[05:17:54]  topic. The only reason I flagged this was. Adam is making some joke about hydration. But this is. I never thought about the solution. This suspense boundary received an
[05:18:03]  update before it finished hydrating. This caused a boundary to switch to client rendering. The usual way to fix this is to wrap the original. Update and start transition.
[05:18:09]  I don't know why I never thought of this in solid. We do the same thing. You, you, if you update state when you're in the middle of streaming
[05:18:16] , there's like nothing we can do. Like we're kind of screwed, but. Like, because we can't hydrate, like not up to state. Like the
[05:18:24]  whole thing breaks apart. So in solid, we bail out into client render and we probably don't even tell you. But. And some people notice like some kind of
[05:18:33]  weird double fetching or whatever going on, but. Start transition. Or the like is a way of actually solving this and saying, do this after hydration has completely done.
[05:18:47]  I mean, it's, it's kind of. Awkward because hydration and streaming happens in steps. It's like pushing it to the very end. Actually, it
[05:18:57]  only needs to push it as far as the suspense boundary highlighting. Yeah. No, I like this. I know this is just completely random, but this is just another example
[05:19:07]  of react doing something smart. Yeah. But the fact that they got this specific in error is big props on them. Yeah. Like it's big. Like it's
[05:19:26]  probably fairly easy to detect because it's actually very hard. It's kind of hard to detect these states. So once you come up with the right heuristic to
[05:19:35]  go like, this is what's happening. We need to bail. It's very easy to tell the user that I just never thought of telling them that. But yes,
[05:19:43]  we have like very similar heuristics in solid. Okay. React core team when they see a V project. Nope. There's only trash. A lot of people
[05:19:59] , uh, sub tweeting on this stuff. And you might be going like, what the hell is going on? I don't need to give you the full history on this
[05:20:06] , but let's, let's just kind of, uh, let's, let's talk about this. This comment is a little bit aggressive. Today we're dep
[05:20:21] recating create reactive for new apps and encouraging existing apps to migrate to a framework. We're also providing docs from the framework isn't a good fit for your products. You
[05:20:27]  prefer to start, or you prefer to start by building a framework. I don't think it's my time to share. I read Mark Erickson's writeup.
[05:20:41]  I don't know if he's going to release it. He talked to core team. The ironic thing was I showed this on stream before. I didn't actually show
[05:20:48]  it though. Um, my falling out with react. I wrote it 21 days ago before I knew which way this was going to fall. It's very similar, but shorter
[05:20:58]  and not as detailed as what Mark Erickson wrote. We are surprising the line. In fact, I feel like a lot of the react ecosystem is aligned. Yeah
[05:21:13] , like it's, it's, there's a lot of anger here. And it's somewhat, it's justified from the perspective that react is changing. And even this
[05:21:30]  message suggests the thing, because they're talking about, you know, deprecating create react app, which is something that needed to happen. It needed to happen a couple
[05:21:37]  of years ago when Theo originally opened up the issue. And they're just like replace it with beat because it's the same swap in. And the react team's been
[05:21:44]  very persistent on not doing that. And I, you know why it's because they never want to be here again where people are just doing random crap and they can't
[05:22:00]  account for it. The problem is it broke and it's still two years later. like it's still the thing and they finally managed to like move it forward and come
[05:22:18]  up with this stuff. But the problem is because when your framework is based react, you actually have to kind of like go like there has to be a path from A to
[05:22:23]  B. I commented on this section. I already mentioned like the don't vote against, you know, don't bet against Vite thing. It's just it's
[05:22:42]  every framework uses Vite and they're, they're playing off that here a bit. But here, let's read this out loud. Do you, do you recommend
[05:22:49]  Vite? We provide several Vite based recommendations. React Router V7 is a Vite based framework, which allows you to use Vite's fast development servers and
[05:22:57]  build tools framework that provides routing and data fetching. Just like other frameworks, we recommend you build a spa with React Router V7. We also recommend using Vite
[05:23:05]  when adding it to an existing project or building a framework. Just like Svelte has SvelteKit, Vue has Nuxt, Solid has Solid started.
[05:23:10]  React from actually using a framework that built the tools Vite for a new project. Now, I, quick call out. I don't know. This is probably the first
[05:23:19]  time Solid's been mentioned by anything official from the React core team. This is a huge, like, I love that we managed to get on this list. It's,
[05:23:32]  I honestly, like, I think we were once mentioned in like, when they released server actions, but that was like a Vercel kind of thing. Solid start
[05:23:41]  was mentioned as an inspiration for that. But I, this has never happened. So, um, that's pretty cool. But, uh, when I read this, my
[05:23:55]  answer, what I hear, and maybe I'm wrong, is I hear no. Do you hear no still? Does this still sound like no? Well, I mean
[05:24:11] , this is, this is, this is kind of one, one of the interesting things here is because after they did this, they were like people like, oh, what
[05:24:18]  about Handstack? What about Waku? What about this? And it's like, they have to go down that path because there's no single answer here.
[05:24:28]  And you can't just take the baseline. Red, yeah, Fred says it reads a no. Well, I mean, that's, that is why I wrote what I
[05:24:37]  did. Do we recommend Veed? There, there, there, there, there is like a missing wall on the end of there. Um, it's forcefully avoiding
[05:24:48]  yes, which has always been the answer. And, okay. Okay, so. This decision is justified. It's hard to build all these pieces out. If,
[05:25:01]  if, if, if you, you know, especially picture like Webpack, no one wanted to build a Webpack configs. So setting people a path where they're
[05:25:08]  just like building these, you know, spas like brainlessly without knowing and saying that's the React experience is not what they want. Especially when they think RSCs
[05:25:17]  are probably the preferred React experience. They want to get the latest updates. They want someone responsible, like the, I'm sorry, the VT templates. There's
[05:25:24]  no one really responsible other than, you know, the VT team. They do a good job. They keep them up to date. You know, people contribute, but
[05:25:29]  it's not like someone has something on the line like you have with Remix or whatnot. Right. But know what the problem is? This is like the most force
[05:25:47] ful acknowledgement that React is not the React React used to be, which is fine. React can evolve. But it is so many degrees from just a render library or UI,
[05:26:01]  a render, a library for building UIs that we can't in good unconscious basically say, oh yeah, just use what you want, go for it. That's
[05:26:12]  what changed because they talk here about all these ones, but go to Svelte's homepage. There's SvelteKit. Yes. But they immediately are like,
[05:26:20]  here's the Svelte templates. Solid. They're all VT templates. And then they're like, oh, you can also use Solid Start. Vue I
[05:26:26]  know has that split because Nuxt and Vue have actually classically been farther separate. So in fact, all the other frameworks actually recommend VEAT and sometimes even
[05:26:38]  VEAT first over their meta framework. like, it's fine that React isn't because React does not wish to be standalone anymore. But this is like, I
[05:26:57]  think I mentioned this to people before, the moment, I've always been kind of a pretty big React supporter given my position, but the moment that I was just irate
[05:27:13]  with React wasn't because of like some incapacity with the ecosystem. I understand when you have developers in the ecosystem, there's friction there and they want things a certain
[05:27:20]  way. And you've got to look at the direction of the project. I get that. And it wasn't about like, oh, RSCs or for cells owning
[05:27:27]  next or any of that. It was when Andrew Clark was like, next blank is the real React 18 release. And I know he was partially joking, but that,
[05:27:39]  and I've said this before, I think that's when the line was crossed. It was a quiet line cross. Maybe some people saw it, but that's like,
[05:27:46]  you know, that's, that's when it crossed. And I know I did the, I think I mentioned the last stream, you know, when I wrote that article
[05:27:53] , you know, I compared it to the happy days jumping the shark reference. And the fact that we still can't recommend VEAT is just how far we've
[05:28:04]  come. Like every single aspect out there, people are like, you know, oh yeah, sure. You could use VEAT, you know, blah, blah,
[05:28:14]  blah. I think I saw something from David. Do we recommend VEAT? Yes. Unequivalently. It's the best alternative. React query as
[05:28:22]  a framework is a silly concept. Yes. It's RSCs. React is not RSCs. It's a beautiful touch with the customers. What's another one
[05:28:30] ? Someone wrote something here that they're like, yes, we do. React training. Not real and spas didn't exist in the first place. It's just
[05:28:53]  Matt, uh, Matt Carroll replied, like posted this. I saw this before I posted to be clear. This, this was me actually responding to this. I wanted to
[05:29:03]  draw everyone's attention to this. And yeah, there's more conversation. I haven't seen this yet. So we'll see. I'm sorry. This probably just squ
[05:29:09] irreled people, but I'm reading this paragraph. It's the most indicative thing that I've seen react. It's completely lost touch. It's justifiable
[05:29:14] . Sure. But it isn't react. React's selling point, complete selling point, was the fact that it was this like lightweight kind of thing. The fact that they
[05:29:33]  suggested that it needs handholding is crazy. It's part of maybe refined process moving to next, next stage, getting the WordPress crew, you know, RC is
[05:29:42]  a great for that. So part of me, I, I, the reason I haven't shared the article is because I don't need to be overly hostile here. It
[05:29:52]  sounds like reacts already packing bags and leaving, you know, like I don't have to do anything like where they're going. I could care less to follow, you
[05:30:04]  know? So if they're just leaving space here, others can take on the mantle, you know? So I don't need to, I don't really need to pick
[05:30:11]  this apart much. It saddens me because this is not the same react as before. I think it saddens people in the ecosystem. There's a reason why Tanner or
[05:30:19]  Mark have that anger things. Some of it is much deeper than what, you know, I'm going off here, but there's been a whole shift in mentality where react
[05:30:30]  needs to be to get to that next stage. And it's, it's fine. I, I said something to Mark. He never responded to me, but it
[05:30:36] 's like, sometimes I feel like the, the current ecosystem is just the pillars that are needed to, to support the, the pivot to the next direction. And when it
[05:30:52] , when the time has come, the, those will just be ripped out and you know, they just won't exist anymore. And it's hard when you're one
[05:30:59]  of those pillars, like Redux and Mark Erickson's contributions have been foundational, but it's not the foundation of react to the future. I haven't talked
[05:31:13]  to Michelle Westray, uh, you know, uh, about this mob X, you know, like state libraries, data fetching this whole portion of the ecosystem that don
[05:31:25] 't fit, you know, even react router is getting kind of pulled, yanked into this stuff, you know? They're still afraid of Alex Russell. I
[05:31:44]  mean, that's fair. Are we Alex Russell's in that like web component crowd where you're just like, it's tricky. Sometimes if you want a library, use
[05:31:55]  preact or solid or something else. So let's see, let's see what the, some people saying this has to do with the result. It doesn't have
[05:32:10]  to do with the result. Let's see what they say. React doesn't need a framework. Router is a routing library. Veed is a tool we should recommend
[05:32:15] . It's been up simple. Sorry. I agree with Ryan here. Thanks, David. I don't understand this. Veed has the same exact limitations to create react
[05:32:25]  up, which powers post covers in detail. Why would they recommend using it without a framework like react? Router are describing all that use Router anyways. It's
[05:32:35]  because it's not just react. It's react and stuff. This is, I mean, I get it. Parcel is a competitor to Veed. So saying choosing
[05:32:49]  one bundler would equally not be good, but suggesting that the baseline of coming in, because I, I mean, I already showed this earlier when I was talking about
[05:33:00]  the remix and the RSC stuff, you're so much, it's not react anymore. It's like, it's like when people are like, I'm not a
[05:33:06]  react developer. I'm a next developer. We're kind of getting there, which means they're telling no one. If like, that's the mentality. They're telling
[05:33:15]  no one to use react, which means I guess reacts dead. Right? There we go. React's dead. Because like essentially by denying Veed, they're denying
[05:33:28]  react. It's saying something like we recommend Veed, if you're building a single page app, really that hard. I'm trying to answer your point, but I
[05:33:39]  haven't tried, but what's the issue with the courage to use frameworks? It's still without it, but it's challenging to get it right. I'm not arguing
[05:33:43] . So it's where it's challenging to get it right. Why does it have to be challenging to get it right? Don't understand the right. Yeah. No
[05:33:55] , it's not that. It's just, this has been a very long thing where I get it. It's, it, it's not about whether this is just
[05:34:03] ifiable. I think it is. It just means that react is vacating a certain space that they previously occupied. They're lightweight at a time they're competing with angular and
[05:34:13]  jQuery. The thing is what makes react so special is a combination of best practices, but not enforced rules. Otherwise, angular, angular was a framework. Angular had
[05:34:25]  services and all these pieces. I avoided angular like the plague. This is why I still don't know anything about angular. You know, I I've learned it over time
[05:34:33] . I've good friends on the team now, but like. It's not what I'm, you know, what I was looking for in a framework or a tool
[05:34:42] , which is fine. React was. React is no longer that. Right. Right. Right. So react library stores, but the docs are probably a different audience.
[05:35:00]  That's. Fair. But I, I, I'm going to hold by it that. If, if beat can't be recommendation, react is effectively dead. Maybe that
[05:35:12] 's what they're trying to do. Maybe they're trying to kill react. Like, like, and I don't mean like that people that won't use it, but
[05:35:18]  actually like. Essentially say like react is not a thing next to remixes. Like if you get, if you successful, make that transference from this to that next
[05:35:30]  level, they've immortalized themselves in a sort of sort of way without people actually using, you know, using react. They are using react, but like, it's
[05:35:37]  that kind of thing. Okay. I'm just catching up with chat here. Sorry. Beat with no plugins is not right for the audience that talks, but beat with react
[05:36:04]  router is. Yeah. I mean, it's because of the work that they did with react router to kind of get it to where it is that it's, it's
[05:36:00]  kind of like been passable, I guess. It's just like. I, I, it has to come down to that, the ownership thing, but it, I
[05:36:22]  think this is very indicative and it's, it's, it's a reflection at the fact that this took two or three years. I know there's other important things to
[05:36:34]  address, but it, it very much reflects on this kind of change of identity. I, I, as I said, I was, I wasn't sure what they
[05:36:49] 're going to do this. When I saw this, I kind of predicted that this was going to happen. This is just, oh man, it's, I don't
[05:36:57]  actually have to say anymore. React is just quietly packing up bags. And as I said, those people who get this, you're welcome to come over here. Like
[05:37:11] , thank you, react. Hmm. Like, we can totally replace old Rails.web.com, but I'm resistant to Vita as a replacement. I
[05:37:49]  think the local dev before NPM build is okay. Vita is great. Everyone in every other ecosystem knows Vita is great. The only people who are arguing with me
[05:37:56]  are probably react developers who, who, who don't like, you haven't used it or don't like, like, or don't like, maybe they're used
[05:38:04]  to their frameworks. So like, they, they've already experienced like this greater level of things and they don't want to like lower level, but like Vita consistently is
[05:38:13]  the place where developers don't have complaints. It has higher satisfaction than any project. Yeah. I don't know. We, we have not been the target audience for years
[05:38:25]  now, but this is like saying like, like, this is the, this is the final shove off the cliff. Right. Yeah. None of these things happen in
[05:38:38]  a vacuum space. This is another common thing. Like, once you realize something, once you put the vision and thing, everything else will follow those decisions. It's
[05:38:47]  it's yeah. They're almost from going to stance. I could start beta over the stable standard writer and VU combo. Pretty much like that. That's where it
[05:38:59] 's, it's, it's kind of nuts to me, but it's just like, I probably shouldn't dig any more into this because they're just kind of
[05:39:10]  shooting themselves in the foot against this audience. It's fine. Like they, there's a different target out there and they're getting there, but like good for you
[05:39:22] . I mean, I, I guess that's a, do we recommend it? Like it's almost funny. The react to beat was almost like the jump. From j
[05:39:36] Query. There you go. Yeah. Like from web pack a little bit. Yeah. This is the biggest pro beat statement from the react team up to date. So
[05:39:47]  they're definitely listening. It's just like, you can tell how begrudgingly it is in the tone. Like it just, you can hear, you can hear
[05:39:58]  it. They're trying to be like level about it, but it's like, it's like, it's like when there's like a spectrum and they're like,
[05:40:07]  they're, they're sitting like way over here. And they're like, they've moved like outside of their spectrum to over here towards the middle. And they're
[05:40:14]  like, okay, I think that sounds pretty level. And everyone else is like way over here. And they're just like, wow, you're like off the defense.
[05:40:20]  Like. Yeah, which, but it's like this difficult, delicate balance to reach. So like, I get it, but it's also like. It's not
[05:40:44]  a decision people will understand, which is hard. Like, like, it's not like, it's, it's just not a decision that people understand. You know
[05:41:02] , I mean, part of it is just. Uh, people thinking things the way they, they've always been. Right. Like David Kramer says here, react doesn
[05:41:10] 't need for a render. It's a library, blah, blah, blah, blah, blah. Right. Like he's also posted about. If he's going to
[05:41:21]  build a site completely with HTML or rails back in and not use react or whatever. So like some people like having that split. React is trying to build this unified future
[05:41:33] , but it comes at a cost. There's trade-offs. And as I said, I, the kind of people who get alienated from this are some of the
[05:41:46]  longest time supporters. But let's be fair. I think the cards are pretty much on the table. This has been a very long progression. They're not really hiding
[05:41:56]  anything. That was my one comment to, um, Mark. I was like, I was like, I, I, I think it's admirable that you try and
[05:42:05]  lay this out as a communication thing. Um, you know, benefit the doubt and all this, but some, there have been communication issues, but a lot of this
[05:42:13]  is kind of intentional. They're like, look, we are moving this way. We are doing this thing. Here's how you come with us. And, and,
[05:42:20]  and the community's like, no. And they're like, okay, well, okay, well, how about like, we do kind of like this. And then you
[05:42:27]  see, this is how you fit in and come with us. The community's still like, no. And they're like, okay, well, we're still walking.
[05:42:34]  They're like, no, and they're like, we're almost there. We're, we're touching it. We're leaning against it. There's a kid
[05:42:41] 's book Pandora. And then they're probably like, you know, they're like there and they're like, we're opening the door. You know, we're
[05:42:49]  walking out the door. Like this is, this is a long time coming. This is not a surprise to anyone. Um, yeah, I mean, I wish you
[05:43:05]  luck on your next journey react. I think there's new. It's kind of like watching someone go off into the horizon and over the, the, the hill, because
[05:43:15]  there's mountains on the other side that they have to go conquer. And you're just like. Good luck. I mean, there's, there's been, it
[05:43:35]  depends. See, maybe this is the weird thing. Their comms have been kind of awful to most people, but I understand what they're saying. Generally speaking. I
[05:43:43]  haven't found their comms that difficult to understand. There's been like gaps, but I, it's pretty, I feel like I understand what they're saying.
[05:43:50]  So, you know, like when they did the whole, like fully react thing and didn't recommend Astro, it's, it's, it's, it's pretty
[05:43:58]  clear the progression. I, it's like, it's like, it's probably the same reason why I'm reading so much into this, because I feel like I've
[05:44:07]  understood what they've been saying this whole time. Maybe the people who've been saying that the comms have been bad. are also the people who don't get
[05:44:15]  this. Yeah. I don't know. Dan had a, if you go through the official docs with the beat stuff, Dan also had a, there's the same tone
[05:44:32] . You can feel it. It's so funny because the doc writers are always very sensitive to tone. And, and like, I've, I've been, I
[05:44:39] 've been corrected multiple times for using too like brainy of a tone, talking down a little bit, you know, like. And I, for docs, it's really
[05:44:52]  important not to do that. Even if you're like trying to say like, look, it's, it's just this, it's only this. Don't worry about
[05:44:58]  anything else. Just focus on this. You can't say like basically or simply, or like, even if you're trying to emphasize that you don't do that.
[05:45:05]  It's it, it assumes that the, even though you're trying to like make it clearer and simpler and remove the noise, it's assuming that what you're expressing is
[05:45:14]  an easy idea and not everyone will necessarily find it easy. So there, there is that whole thing. So it's, yeah, it's, it's interesting.
[05:45:27]  The horizon is full of AI generating hell of a little bit. Yes. Exactly. That's, that's, that's the, the, probably, probably the future of
[05:45:37]  react. And it's, it's, it's, it's not a future that I care to participate in or care even remotely about. So let's do it.
[05:45:50]  And then being less than ideal is the factor, but it's more the vision mainly diverging the community needs or wants nomadic. We can fully reconcile that.
[05:46:07]  Anyway, as I said, so that's why I'm not going to publish what I wrote because it just sounds damning in a certain way. And it's similar to
[05:46:18]  what Mark wrote, maybe less anger edited out. And Mark did so much better version that if he ever publishes that, you know, I strongly recommend reading at least
[05:46:32]  the first part. The second part is very lengthy, but like he covers the stuff. And I think it's good, especially at least to serve as a history.
[05:46:42]  But if anything from the stream you should get is why are we even talking about this? The shit that we showed earlier in the stream, it's just so much cooler than
[05:46:53]  this. So like, who, who cares? Why are we talking about CRA that's been dead for six years anyways, or why are we worrying about beat? It's
[05:47:06]  obviously the choice. We don't have to debate about it. And why do we care if the React team does everything possible not to recommend it? Everyone's going to
[05:47:16]  use it anyway. You know, it, this, this, this doesn't matter. So I think I'm going to leave it on that note. All right. So
[05:47:28]  you all have a great weekend and, uh, happy Valentine's day. And, uh, hopefully I'll get Tanner maybe next week or the week after. So,
[05:47:41]  yeah, you all have a good one.