---
showLink: "https://www.youtube.com/watch?v=jnZmG4hyNas"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "First look at DOM Expressions"
description: ""
publishDate: "2021-09-04"
coverImage: "https://i.ytimg.com/vi/jnZmG4hyNas/maxresdefault.jpg"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one sentence description of the transcript and a one paragraph summary.
  - The one sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include timestamps for when these chapters begin.
  - Chapters should be roughly 3-6 minutes long.
  - Write a two-paragraph description for each chapter (75+ words).
  - Ensure chapters cover the entire content (note the last timestamp, HH:MM:SS, which means the transcript is HH hours and MM minutes).
  - Let descriptions flow naturally from the content, avoiding formulaic templates.

Format the output like so:

    ## Episode Description

    One sentence description of the transcript that encapsulates the content contained in the file but does not exceed roughly 180 characters (or approximately 30 words).

    ## Episode Summary

    A concise summary of a chapter's content, typically ranging from 600 to 1200 characters or approximately 100 to 200 words. It begins by introducing the main topic or theme of the chapter, providing context for the reader. The summary then outlines key points or arguments presented in the chapter, touching on major concepts, theories, or findings discussed. It may briefly mention methodologies used or data analyzed, if applicable. The paragraph also highlights any significant conclusions or implications drawn from the chapter's content. Throughout, it maintains a balance between providing enough detail to give readers a clear understanding of the chapter's scope and keeping the information general enough to apply to various subjects. This summary style efficiently conveys the essence of the chapter's content, allowing readers to quickly grasp its main ideas and decide if they want to dig deeper into the full text.

    ## Chapters

    ### 00:00:00 - Introduction and Overview
      
    A comprehensive description of the content, serving as an overview for readers. It begins by introducing the main themes and concepts that will be explored throughout the chapter. The author outlines several key points, each of which is examined in detail. These points are discussed in terms of their significance and potential impact on various aspects of the subject matter. The text then explores how these core ideas are applied in practical contexts, highlighting their relevance to current issues and challenges. Throughout the chapter, connections are drawn between different concepts, demonstrating their interrelationships and broader implications within the field of study.


## Transcript

[00:00:00]  Hello. If you're out there, you can see me. I just signed up to StreamYard. I think streaming some content for Solid, maybe even Marco eventually
[00:00:15] . I just want to try and see if I can share some of the code that I've been working on. And just to kind of give this a test drive,
[00:00:26]  I'm going to talk a little bit about my library DOM Expressions, which is the underlying code that actually drives everything in Solid. Some people look at Solid code base and
[00:00:41]  they're like, what's going on here? There's nothing in here, just a reactive system. And that's pretty accurate. I created DOM Expressions as an attempt
[00:00:51]  to be independent on reactive systems in terms of providing this kind of fine-grained approach. I wasn't really sure what the best reactive system would look like. So
[00:01:03]  I wanted to kind of experiment. And through it, I created variations of libraries, very similar to Solid using MobX, Knockout, SJS, RxJ
[00:01:21] S, someone made a library that made it very MobX-like, and a couple others. But essentially, it's really the core of what we've been doing
[00:01:41]  here. All right, view, right? There's another one. Essentially, what it is, is it generates a runtime runtime and provides a Babel plugin to actually
[00:01:54]  do the compilation, the Solids compilation, the JSX compilation. And in order to, the reason I took this approach of kind of generating a runtime is I wanted it
[00:02:05]  to be completely tree-shakable. So if you were running, if you exported, say, some helper functions and then, you know, built it up at
[00:02:13]  runtime, you'd need to include everything. And I wanted those exports to, you know, as I said, not have to be included unless you use them. And the
[00:02:26]  only way to really achieve that was actually build the runtime at compile time. So I kind of started with this idea of a runtime generator. And the way I did this
[00:02:35]  originally was using ERB, or I guess what's the JavaScript equivalent of those templates. And that was okay, but it was difficult kind of to maintain the code. It
[00:02:49]  was very flexible. I could really like insert any JavaScript I wanted. Since then, I kind of switched started using a Babel plugin, which is its rename import,
[00:02:59]  and then have the end user, you know, the would-be library creator provide their own kind of reactive core that gets used. And in this example here, for example
[00:03:10] , I'm using SJS, but it's very similar to solid. It just means a matter of like defining a few functions, like for the reactive root, the effect
[00:03:19] , the memo, creating a component, and forgetting the current context. There's a couple others too, as well, stuff that you need for hydration, but don't
[00:03:33]  worry about it too much. But generally, if you can provide that core, you can get the runtime. And then that runtime, as I said, powers the Babel
[00:03:41]  plugin. It powers the tag template literal version and the Hyperscript version. That's the thing. This is completely a runtime strategy. Sure, we leverage the compiler
[00:03:51]  for JSX, but it's really at its core, like the goal is just to generate the same code that you would handwrite if you're optimally doing this
[00:04:05]  with reactive systems. So, it really is a runtime system. So, this project's basically split into those four packages, right? The JSX transform, DOM expressions
[00:04:19]  itself, which is the runtime generator, hyper DOM expressions, and lit DOM expressions, which are the lit and Hyperscript versions. And essentially, where should we start?
[00:04:34]  I'm going to start with the runtime bit here, because this part actually, I'm going to the runtime bit here, because this part actually is not, it's
[00:04:42]  really the core of this, and it's not too bad. What I've done is this source folder is really the key here. What we generated and kind of the expectation
[00:04:52]  of using this is actually that the project that would consume this would actually just import the source and then use a bundler to build itself. build itself. We provide
[00:05:05]  type definitions for JSX. And pretty huge. And then, basically, client and server entry points. The other ones here actually get imported by other things in here. So
[00:05:24] , you don't have to worry about them that much. But essentially, the client, the client, basically from your core, which is imported, you can see up
[00:05:33]  here, the whole way this works is we just replace what RxCore is with what you provide, as a consumer of this or what solid, in the solid case
[00:05:43] , what solid provides. And then we export all of these functions, which are used by the compiler, more or less, to generate to generate to generate to generate to
[00:05:56]  generate to generate the view. And this includes code for hydration, which is all these methods down here, various DOM operations, prop handling, event delegation. And even the
[00:06:08]  top level, like render function, if you look at the server equivalent of this, a lot of the same functions, but you'll see all are like, render to string
[00:06:15] , render to string, the same pipe, node writable, pipe writable, basically, everything in solid JS web, both the client and server versions, is present.
[00:06:26]  So, other than like, other than like, other than like, other than like a few add ons, like portals, or the dynamic tag, are all actually
[00:06:33]  as part of this runtime. And that's why most of the code, the JSX types, and, and most of the code that actually does all the like, rendering
[00:06:42]  and compilation is all here. So, the reason there's a client in server runtime is because they actually are quite different. The client one, as I said, expects
[00:06:58]  that reactive core, right? And it, and it basically uses it that way, like a good example here might be, these are all, let's look at something that
[00:07:12] 's potentially dynamic, insert. So, this is the most common one, like when you have children in a DOM element, this is what gets called. And it basically
[00:07:19] , you know, checks if you're passing a function, or not a function. And if it's if you're passing a function, then it wraps it in the effect
[00:07:28]  mechanism you provide with your reactive library, and accesses the accessor function, creating the subscription, and then every time it updates, runs insert. If it's not a
[00:07:39]  function, it just runs insert right away. And this insert expression, it's not a function is more or less the reconciler for us. Like it's,
[00:07:52]  it's, it's not the biggest reconciler, but it's basically where all the dynamic runtime code is. This is it. Everything else is pretty much compiler.
[00:08:02]  there. But essentially, it goes through checks, if it's like a basic string or number, or if we're doing booleans, or maybe a function itself
[00:08:13] , which means you have to like, wrap in its own effect. arrays, this is where it calls reconcile array, which, you know, or diffs are,
[00:08:22]  or if it's a DOM node already, and how to handle it. More or less, these are handling variable input, everything else, like attributes are a lot simpler,
[00:08:34]  because we can pretty much straight up output, like, an effect around, you know, setting the title or whatnot. or whatnot. The few exceptions are things like spreads
[00:08:45] , and what's another example, like class list. spread, style, class list. These are these are kind of special runtime ones. But even these can be avoided
[00:08:59]  in some cases, the compiler can be smart enough to generate code that doesn't need these helpers at advent listener. attribute setting and SVG, that's the thing
[00:09:11]  we have to be very careful and conscious of SVG because it requires different things. I'm not going to get too much into hydration right now. But essentially, you can
[00:09:23]  see that these will when we look at the compiler, it's going to make more sense. But you these basically leverage reactive values. the server version, whereas on the
[00:09:32]  server version, this is all just string rendering, all we do is grab create component from our X core. and we're through and some shared config and our mechanism for
[00:09:45]  async wrapping, which is so that we know when we're done in solid, we generate something for suspense, which basically goes like, you know, let's see,
[00:09:53]  like, let's look where this is used. Yeah. basically, in render to string async, it basically calls this wrapper and goes, hey, it sets up
[00:10:04]  a race so that we can handle timing out more or less so that if it takes like 30 seconds, we can error. error. But other than that, it's
[00:10:13]  just expecting strings. So what you're going to see here instead, is like the same equivalent helpers. you're going to see past those like class list and that
[00:10:29]  are all about appending strings, you'll see that here's our style equivalent, right? it's generating these strings and escaping. Escaping is actually one of
[00:10:38]  the most important things on the SSR side. It's super important not to let unsafe expressions get through and it's also the biggest bottleneck in terms of performance.
[00:10:50]  this is our escape mechanism. I didn't even write this one. This was a result of a PR which drastically improved solid service side speed. It's a big reason why
[00:11:04]  it's so fast today. Last I checked, depending on the benchmark, I think we were like 55,000 on the search versus to like reacts 4,000 or
[00:11:26]  Svelte's 6,000 or so. Svelte's 8,000 and Marco is about 25. So like pretty, pretty, pretty big improvements, mostly because
[00:11:40]  of this escape. Svelte's 8,000, honestly. But yeah, I mean, this is the stuff for generating the stuff you need for hydration. There
[00:11:52] 's just a lot of helpers here and this is actually how you build solid. It's probably worth looking at this if you're like really curious how things work because the
[00:12:02]  main repo kind of is built on top of this. So let's look at the compiler now. Babel plugin.jsx DOM expressions is really sort of where I
[00:12:20]  started. I did them kind of side by side, but the runtime pieces got more and more over time. And this has grown a bit too. But the interesting part
[00:12:31]  of it is most of it is actually shared. And then there's like the DOM specific stuff and the SSR specific stuff. And this is why I feel like if we
[00:12:38]  wanted to make a universal renderer, we just need to make the equivalent of this in here as well. Because things like components compile the same, whether you're server
[00:12:46]  or client, because like they're just functions, right? Like so attribute wrapping, most of that stuff has a lot of the same rules. We don't need, sorry
[00:12:57] , what I mean by attribute or prop wrapping is a lazy evaluation, like making the getters. But we don't need the reactivity on the server, but still
[00:13:04]  the order of execution matters. You know, you still have to simulate stuff like context. So as I said, it's basically the same compilation and we get the incredible performance
[00:13:16] . So this is not that big of an overhead fragments and whatnot. But yeah, I mean, the transforms here are complicated. You get into AST, you know
[00:13:28] , then you can, you can kind of understand what this works looks like. AST explorer.net. It's a great website. Kind of play with this stuff.
[00:13:39]  I literally take the output of this sometimes, which is, I just string this down the index TS. Here, the top level after you build basically has the full,
[00:13:50]  you know, whatever 22, yeah, 2200 line transformation for client and server. And I just dumped that right into AST to explore it on that and just play around
[00:14:01]  and change stuff to see what it outputs. Because honestly, there's a lot of stuff with the AST parsers and the challenges are that. Like even if it
[00:14:15] 's semi well documented, it's really helpful to have a resource where you can just like throw some HTML or sorry JSX or some JavaScript in and like see what you get
[00:14:24]  out. And so you can reproduce stuff. I actually did the work in AST explorer actually requires a little bit of hacking because it doesn't have certain things like we have
[00:14:36]  to delete this line and we have to delete. The, the import auto import injection because it uses a third party library and I have to do this little trick here because
[00:14:50]  I globally use the types that I have to actually do something like types. You can always use the key and then set it to the global T to work. Maybe I
[00:15:01] 'll show you guys how to do that another time, but it's not exactly simple. You know, you have to do a couple of things, but once you're in
[00:15:07]  there, it's actually quite great. But the best part to kind of understanding how SOLID works, I think there on all these projects is actually the test, right
[00:15:18] ? I didn't really look, show you the test on the, on the runtime side, but I'll do that when we look at the specific implementations. But
[00:15:27]  for the Babel compiler, we have five versions of most of the tests with the DOM fixtures, the hydratable DOM fixtures, the wrapperless fixtures.
[00:15:36]  This is interesting. This is something that someone third party actually asked for, and I don't use it for anything, but basically they were like, I just want to generate
[00:15:46]  DOM and I don't want anything reactive. So we, we, we set, we created a setup where we could just skip all the memo, like the memo and
[00:15:53]  effect wrappers and just, you know, generate DOM. Now server rendered is probably a better case for that. for this but if you just want to make um static
[00:16:09]  and maybe you'd like using jsdoll on the server or maybe you know just static client rendered stuff you could use this so it's interesting anyways i keep maintaining it because
[00:16:21]  it doesn't really require much effort on my part um and then also the ssr fixtures and hydratable fixtures and you can see like we just play with
[00:16:30]  some different settings here um just to kind of test it right um there's a lot more low there's a few more low level settings on the plugin then i they're
[00:16:42]  all exposed through babel preset solo but no one like would use them like like you have the like the the way that for and show and all the control flows can import it
[00:16:51]  is actually that i use this idea built-ins and it uses the same module name that you set um to import those and this is the module name that it ends up
[00:17:02]  importing everything um that you use so in theory you could even take solids runtime like solidjs web and like create your own slightly modified version of it and as long as you export
[00:17:16]  the same things and you know hijack what you need to you can just tell the plugin to do what you want this is what loom uses um our kind of web
[00:17:24]  component uh 3d library um uh true skater if you see on a discord or github um he he just swaps out the module name for his version when it
[00:17:35]  you know it's slightly modified version for for his purposes um but um yeah so you have this kind of flexibility you don't have to just start from scratch like i did with
[00:17:46]  mob xjsx and view jsx you could also just kind of hijack solid to kind of do this stuff um generally speaking let's see just change it um i
[00:17:58]  don't want to go too far um in the plugin side here i don't mind people doing pre-processes and stuff but you cannot understand how this very quickly fragments things
[00:18:10]  if there's an expectation of having certain compiler stuff available i feel like this really has to be done at the app level or you know you kind of make that choice you
[00:18:21]  know depending on how you publish things because if you compile ahead of time when you build your libraries and yeah sure do whatever you want but if we want to support server-side
[00:18:31]  rendering and we have different compiled outputs it makes sense to ship the jsx as it is and let the app do the compilation and in that sense we kind of want the
[00:18:40]  compilation to be the same for everything um that's the only way to guarantee so we'll see what we can continue to support with dong expressions mostly because i want to support different
[00:18:49]  libraries and different frameworks that people can build on it but generally speaking like from sol's perspective or any specific frameworks perspective i think you kind of want them to be hard set unless
[00:19:02]  like you're opting in for something that's like app based like some syntax add-on or whatnot but this is all babble so you can do that you can
[00:19:09]  do whatever you want but i don't think we should author third-party libraries expecting something to be present it's in fracture the ecosystem pretty early but um anyways as i was
[00:19:20]  saying these tests are kind of great um in the sense that you can see what's going on they're just snapshot tests and yeah there's a lot of weird garbage stuff but
[00:19:28]  you know you can really get a feel for if you're showing it choosing import it actually doesn't stack them just the way the default helpers for doing the imports i
[00:19:37]  could probably write my own but it's fine like roll up or whoever you're using the bundle will compress this all up nice but yeah you can kind of get an idea what
[00:19:48] 's going on you see all our templates at the top and then you know all our helpers and stuff being compiled in i use this to try like all different versions like
[00:19:58]  you know for example here the class list here when you inline an object for class list i can see and analyze it right away right so we can just go classes toggle selected
[00:20:10]  selected like um whereas um next that's this one right here right and if we go down a bit further though um where's the other one yeah down here in this effect
[00:20:29]  you can see some other stuff going on classless toggles selected and you're like what's this well v3 is v3 is selected reason this is we actually group
[00:20:39]  effects if we have a lot it's really expensive to create computations one by one um so it's better to if they're like related to kind of actually do a basic
[00:20:51]  diff and that's what you're seeing here is equality checks so basically access it do the equality checks and if so set the properties this is such a small diff and compared to
[00:21:01]  the cost of making three extra effects or two extra effects it's it's easily worth it um this kind of optimization something only comes to the jsx that might be kind
[00:21:12]  of unexpected but we really want to try and optimize the best we can for creation speeds because update speeds are already our forte and any framework is relatively fast and update speed so optimizing
[00:21:27]  for creation is actually really really important i can make sense of this code pretty easily i don't know if everyone can it's something to play with but the best thing is
[00:21:36]  the playground lets you kind of play with this and see it yourself anyways but when you see the output in the playground that these methods that it's referring to you know these kind
[00:21:45]  of underscore linears like what are these well more likely than not they are coming from dom expressions and not like through solid jsweb and not and the code is actually in
[00:21:57]  this repo not in solid jss repo um yeah let's look at some of the other ones yeah i mean this is where i get to test out all the little optim
[00:22:16] izations that i love doing but i think you're seeing something like done with hyper dom expressions might be the easiest because it is the simplest thing from a code standpoint technically the
[00:22:30]  jsx version ships the least amount of code because we don't need any more runtime than what i've shown you and this requires like a hyperscript function but there's
[00:22:38]  no compiler or anything so in this sense what you see is what you get so um this is like a perfect example where you know i've said we need these methods from
[00:22:51]  the runtime perform any runtime in order to run the hyperscript version and then this this one is generated because we don't care about tree shaking at this point there's no
[00:23:01]  compiler benefit here um this one we do kind of expose a create hyperscript function that returns the h right so you pass in your runtime and get the h and the runtime
[00:23:11]  in our case would be the methods of solid jsweb but if you look my tests i'm using sjs because it's very small and very simple kind of separate
[00:23:21]  reactive library and this just has a historical thing because solid used to use s and its root and i just never bothered changing it um this is all i needed to do right i
[00:23:32]  just needed to create this core library which is the you know create this memo function effect function create component get owner shared config you know create component like basically um you know the
[00:23:46]  stuff that i needed to actually handle um the different scenarios um this this one actually looks like it supports class components it's interesting right but that's the whole point here you you
[00:24:00]  could um see it's calling render function on a new comp you we we can edit our stuff here um that's why the create component um exists because realistically it's just
[00:24:12]  a function call and solid but if someone wanted to do something more you can right and this core file is what i was talking about that we we set up the babel to
[00:24:24]  to replace the rx core that i was showing in the dom expression library using this transform rename import with this core file and then more or less you've you've wired
[00:24:35]  it together and now you have your custom dynamic runtime but yeah i mean the hyperscript function itself is pretty small it's your typical hyperscript function with you know
[00:24:48]  with you know a few differences and all these r dot spread or r dot dynamic properties are just calling methods that are available from the runtime that's what the r is um i
[00:24:59]  mean that's pretty much it it's just a hyperscript function you just lit is actually pretty much the same setup except it's a little bit more complicated um mostly
[00:25:15]  that we pull in this parser that i hacked together a few years ago it was actually for my knockout days when i was working on um making you can have free processors
[00:25:28]  for knockouts so i was like bringing nice like i call it nice but like curly bracket syntax into knockout and getting rid of the data binds so you know between that
[00:25:38]  and our web components it kind of looked like a modern framework um anyway they reused it here ex but i'd because i'd already done the work to expand it to accept
[00:25:47]  uh web components which is important to a lot of my early work and this one requires a lot more run time mostly because the hyperscript version just kind of calls our spread
[00:25:58]  and is kind of lazy about it doesn't care it's like yeah just spread everything which is kind of inefficient but it's also like what you have you have an object
[00:26:07]  you know you can't analyze it ahead of time whereas with the tag template literal you kind of can and that's really cool because you know you can still look at the shape
[00:26:15]  and there's a lot more code here well not a ton more i think it's like it's 400 lines it's not a ton more but this this actually just in time
[00:26:25]  compiles it and which is an interesting challenge in its own but it's actually in some ways more similar to the babel plugin or at least an older version of the
[00:26:33]  babel plugin except you know it it generates two things at runtime it basically parses the template into like um like the tag template literal like into um a clonable template
[00:26:51]  like like we use in solid like basically something we can put in a template element and let me see if i can find where that is um probably um yeah this create template
[00:27:03]  function does a bunch of replacing of the wild cards then it parses it and at the end we get html and code as i call it the code is a string
[00:27:12]  um you know which is going to more or less be evaled i mean we don't use eval we use function for it um and html is a um
[00:27:28]  is what i'm saying like this uh html string that can be cloned right we pull out all the dynamic parts and then turn into something that could just be you
[00:27:39]  know so you document create template element and then we create you know get all do all the stuff we need to prep it and then we actually attach it to the tag template
[00:27:49]  literal itself there's a really cool thing about tag template literals in that when you hit the same one again it's like cached so you can actually do something kind of
[00:27:58]  cool here if you actually look at the uh html function we export you can see this but um like the the array is like the same array or of the static strings
[00:28:10]  so you can actually use that array to look up something right so here we go first thing we go is cache you know get statics or create template which is what i
[00:28:21]  was showing you above and then once we have the template that we created um we we essentially just um call our create method which clones it and executes our function more or less
[00:28:37]  um well it executes our function which clones it it the output it funny enough with these strings it's very similar to the jsx compile output the difference is we can
[00:28:46] 't group effects because we um can't analyze the holes we can only analyze the static parts but this is probably within maybe five percent of what the the jsx compiler so
[00:29:00]  in terms of uh tag template literals it's super impressive i mean it's not a as fast as like um one more you know it's a kind of a dedicated top
[00:29:11] -down approach from the creator who have dom c and stage zero but um which is pretty recent but until that that came around this was actually funny enough the fastest type template
[00:29:23]  literal um library you know faster than lit or uhtml or any of them and you know it comes down to just um the architectural choice of using fine-grained right
[00:29:36]  which is very different um than the top-down renderers right so yeah um i think that is most of it here as i said it uses the same thing where we
[00:29:58]  pass in this runtime so it has a you know uh where is it a create html function that returns our html tag um and then when we call our
[00:30:11]  function at the end uh making our create call um you can see that it's it actually passes it expects that r to kind of come in as the variable so you just call
[00:30:28]  it with r with that runtime and from there um it has access to that runtime inside your eval function more more or less um see all these r dot inserts or whatnot
[00:30:45]  in the in the strings we generate to generate the code it's an interesting approach let's say it's surprisingly fast um so you know if you really really hate compilation you could
[00:31:02]  use this i feel though that i i have this not really for it to be usable but more to kind of prove a point um you know people like to kind of sometimes
[00:31:16]  crap on tools and stuff and be like oh just magic and all this and it's like no this is this is just like a pure runtime approach you could be doing it but
[00:31:26]  why anyway i think that's good enough for now i think this pretty much covers what i wanted to do with this stream um just to kind of talk about the code people
[00:31:40]  have been asking forever and next time i'll actually tell you guys about it so you can come in and you know ask questions or whatnot but i just wanted to test that streaming
[00:31:49]  mechanism worked on my m1 and that it was good enough to you know make some some content and do some some videos perhaps but yeah i think that'll be enough for
[00:32:02]  today thank you