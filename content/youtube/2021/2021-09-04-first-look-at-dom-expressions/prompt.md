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

    A comprehensive introduction providing readers with the main themes and concepts explored throughout the chapter. The content highlights significant points discussed in detail and explores their broader implications and practical relevance. Connections are made between concepts, emphasizing interrelationships and potential impacts on various fields or current challenges. The chapter sets a clear foundation for understanding the subsequent discussions.


Video Title: First look at DOM Expressions
Video URL: https://www.youtube.com/watch?v=jnZmG4hyNas
Author: Ryan Carniato
Duration: 32:08


Transcript:
[00:00:00] Hello. If you're out there, you can see me. I just signed up to StreamYard to think streaming some content for Solid, maybe even Marco eventually, but just want to try and see if I can share some of the code that I've been working
[00:00:23] On. And just to kind of give this a test drive, I'm going to talk a little bit about my library DOM Expressions, which is the underlying code that actually drives everything in Solid. Some people look at Solid code base and they're like, what
[00:00:42] 's going on here? There's nothing in here, just a reactive system. And that's pretty accurate. I created DOM Expressions as an attempt to be independent on reactive systems in terms of providing this kind of fine-grained approach.
[00:00:59] I wasn't really sure what the best reactive system would look like. So I wanted to kind of experiment. And through it, I created variations of libraries, very similar to Solid using MobX, Knockout, SJS, RxJS, there's like someone made a library that made it
[00:01:25] Very MobX-like and a couple others. But essentially, it's really the core of what we've been doing here. All right, view, right? There's another one. Essentially, what it is, is it generates a run time and provides a Babel plugin to actually do the compilation
[00:01:56] , Solids compilation, the JSX compilation. And in order to, the reason I took this approach of kind of generating a run time is I wanted it to be completely tree shakable. So if you were running, if you exported, say, some helper functions, and
[00:02:11] Then, you know, built it up at run time, you'd need to include everything. And I wanted those exports to, you know, as I said, not have to be included unless you use them. And the only way to really achieve that was actually build
[00:02:28] The run time at compile time. So I kind of started with this idea of a run time generator. And the way I did this originally was using ERB, or I guess what's the JavaScript equivalent of those templates.
[00:02:43] And that was okay, but it was difficult to kind of maintain the code. It was very flexible. I could really like insert any JavaScript I wanted. Since then, I kind of switched to just using a Babel plugin, which is its rename import, and
[00:02:59] Then have the end user, you know, the would-be library creator provide their own kind of reactive core that gets used. And in this example here, for example, I'm using SJS, but it's very similar to solid, it just means a matter of like defining
[00:03:15] A few functions, like for the reactive root, the effect, the memo, creating a component, and forgetting the current context. There's a couple others too, as well, stuff they need for hydration, but don't worry about it too much.
[00:03:34] But generally, if you can provide that core, you can get the run time, and then that run time, as I said, powers the Babel plugin, it powers the tag template literal version and the Hyperscript version, that's the thing.
[00:03:47] This is completely a run time strategy. Sure, we leverage the compiler for JSX, but it's really at its core, like, the goal is just to generate the same code that you would handwrite if you're optimally doing this with reactive systems.
[00:04:06] So, it really is a run time system. And, okay, so, this project is basically split into those four packages, right, the JSX transform, DOM expressions itself, which is the run time generator, hyper DOM expressions, and lit DOM expressions, which are the lit and
[00:04:24] Hyperscript versions. And essentially, where should we start? I'm going to start with the run time bit here, because this part actually is not, it's really the core of this, and it's not too bad.
[00:04:44] And what I've done is this source folder is really the key here. What we've generated, and kind of the expectation of using this is actually that the project that would, you know, consume this would actually just import the source and then use a
[00:05:01] Bundle or it can build itself. So, we provide type definitions for JSX, which is pretty huge. And then, basically, client and server entry points. The other ones here actually get imported by other things in here.
[00:05:23] So, you don't have to worry about them that much. But, essentially, the client, basically, from your core, which it's important, you can see up here, the whole way this works is we just replace what RxCore is with what you provide.
[00:05:39] And then we export all of these functions, which are used by the compiler, more or less, to generate the view. And this includes code for hydration, which is all these methods down here, various DOM operations, prop handling, event delegation, and even the top
[00:06:07] Level render function. If you look at the server equivalent of this, a lot of the same functions, but you'll see all our, like, render to string, render to string async, pipe, node writable, pipe, writable.
[00:06:18] Basically, everything in Solid JS web, both the client and server versions, is present, other than, like, a few add-ons, like portals, or the dynamic tag, are all actually just part of this runtime. And that's why most of the code, the JSX types, and
[00:06:39] Most of the code that actually does all the, like, rendering and compilation is all here. What I'm going to do here. So, the reason there's a client in server runtime is because they actually are quite different.
[00:06:55] The client one, as I said, expects that reactive core, right? And it basically uses it that way. Like, a good example here might be, these are all, let's look at something that's potentially dynamic.
[00:07:13] Insert. This is the most common one. Like, when you have children in a DOM element, this is what gets called. And it basically, you know, checks if you're passing a function or not a function.
[00:07:23] And if you're passing a function, then it wraps it in the effect mechanism you provide with your reactive library. And accesses the accessor function, creating the subscription, and then every time it updates, it runs insert.
[00:07:37] If it's not a function, it just runs insert right away. And this insert expression is more or less the reconciler for us. Like, it's not the biggest reconciler, but it's basically where all the dynamic runtime code is.
[00:07:59] This is it. Everything else is pretty much compiler. But essentially, it goes through checks if it's like a basic stringer number, or if we're dealing with booleans, or maybe a function itself, which means you have to like wrap in its own effect.
[00:08:16] Arrays. This is where it calls reconcile array, which, you know, our diffs are. Or if it's a DOM node already, and how to handle it. More or less, these are handling variable input. Everything else, like attributes are a lot simpler, because we can
[00:08:35] Pretty much straight up output like an effect around, you know, setting the title or whatnot. The few exceptions are things like spreads, and what's another example, like class list, spread, style, class list. These are kind of special runtime ones.
[00:08:57] But even these can be avoided in some cases. The compiler can be smart enough to generate code that doesn't need these helpers at AdventListener. Attribute setting and SVG. That's the thing we have to be very careful and conscious of SVG, because it requires
[00:09:15] Different things. I'm not going to get too much into hydration right now. But essentially, you can see that these, when we look at the compiler, it's going to make more sense. But these basically leverage reactive values.
[00:09:30] Whereas on the server version, this is all just string rendering. All we do is grab create component from RxCore, and some shared config, and our mechanism for async wrapping, which is so that we know when we're done.
[00:09:47] In solid, we generate something for suspense, which basically goes like, you know, let's look where this is used, yeah. Basically, in render to string async, it basically calls this wrapper and goes, hey, it sets up a race so that we can handle timing
[00:10:06] Out, more or less, so that if it takes like 30 seconds, we can error. But other than that, it's just expecting strings. So what you're going to see here instead is like the same equivalent helpers getting past those, like class list and that
[00:10:29] Are all about appending strings. You'll see that here's our style equivalent, right? It's generating these strings and escaping. Escaping is actually one of the most important things on the SSR side. It's super important not to let unsafe expressions get through.
[00:10:47] And it's also the biggest bottleneck in terms of performance. This is our escape mechanism. I didn't even write this one. This was a result of a PR, which drastically improved solid service side speed.
[00:11:01] It's a big reason why it's so fast today. Last I checked, depending on the benchmark, like the Isomarker benchmark, I think we were like 55,000 on the search versus to like React's 4,000 or Svelte's 6,000 or so.
[00:11:28] Or Svelte's 8,000. And Marco's about 25,000. So pretty big improvements, mostly because of the escape function, honestly. But yeah, I mean, this is the stuff for generating the stuff you need for hydration. There's just a lot of helpers here.
[00:11:53] And this is actually how you build solid. It's probably worth looking at this if you're like really curious how things work because the main repo kind of is built on top of this. Let's look at the compiler now.
[00:12:10] Babel plugin. jsx DOM expressions is really sort of where I started. I did them kind of side by side, but the runtime pieces got more and more over time. And this has grown a bit too, but the interesting part of it is most of
[00:12:32] It is actually shared. And then there's like the DOM specific stuff and the SSR specific stuff. And this is why I feel like if we wanted to make a universal renderer, we just need to make the equivalent of this in here as well
[00:12:43] . Because things like components compile the same, whether you're server or client, because like they're just functions, right? Like so attribute wrapping, most of that stuff has a lot of the same rules. We don't need, sorry, what I mean by attribute or prop
[00:12:57] Wrapping is a lazy evaluation, like making the getters. But we don't need the reactivity on the server, but still the order of execution matters. You know, you still have to simulate stuff like context.
[00:13:09] So as I said, it's basically the same compilation and we get the incredible performance. And this is not that big of an overhead, fragments and whatnot. But yeah, I mean, the transforms here are complicated.
[00:13:26] You get into AST, you know, then you can kind of understand what this works, looks like. AST Explorer. net, it's a great website, kind of play with this stuff. I literally take the output of this sometimes, which is, I just string this down.
[00:13:44] The index TS here, top level after you build, basically has the full, you know, whatever, 2200 line transformation for client and server. And I just dump that right into AST Explorer. net and just play around and change stuff to see what it outputs.
[00:14:03] Because honestly, there's a lot of stuff with the AST parsers. And the challenges are that, like, even if it's semi-well documented, it's really helpful to have a resource where you can just, like, throw some HTML or, sorry, JSX or some JavaScript in and
[00:14:23] , like, see what you get out of it so you can reproduce stuff. So, to actually get it to work in AST Explorer actually requires a little bit of hacking because it doesn't have certain things.
[00:14:36] Like, we have to delete this line and we have to delete the auto-import injection because it uses a third-party library. And I have to do this little trick here because I globally use the types that I have to actually do something like types
[00:14:55] And aliasing the T and then set it to the global T to work. So, maybe I'll show you guys how to do that another time. But it's not exactly simple. You know, you have to do a couple things.
[00:15:06] But once you're in there, it's actually quite great. But the best part, kind of understanding how Solil works, I think, there on all these projects is actually the test, right? I didn't really show you the test on the runtime side, but I'll do
[00:15:25] That when we look at the specific implementations. But for the Babel compiler, we have five versions of most of the tests. We have the DOM fixtures, the hydratable DOM fixtures, the wrapperless fixtures. This is interesting.
[00:15:37] This is something that someone third-party actually asked for. And I don't use it for anything. But basically, they were like, I just want to generate DOM and I don't want anything reactive. So, we created a setup where we could just skip all the
[00:15:53] Memo and effect wrappers and just, you know, generate DOM. Now, server-rendered is probably a better case for this. But if you just want to make static, and maybe you'd like using JS DOM on the server or maybe, you know, just static client-rendered stuff
[00:16:16] , you could use this. So, it's interesting. Anyways, I keep maintaining it because it doesn't really require much effort on my part. And then, obviously, the SSR fixtures and hydratable fixtures. And you can see, like, we just play with some different settings here
[00:16:33] Just to kind of test it, right? But there's a lot more low-level, there's a few more low-level settings on the plugin than I, they're all exposed through Babel preset solo, but no one, like, would use them.
[00:16:45] Like, you have, like, the way that for and show and all the control flows can import it is actually that I use this idea of built-ins. And it uses the same module name that you set to import those.
[00:16:59] And this is the module name that it ends up importing everything that you use. So, in theory, you could even take Solid's runtime, like solid. js/web, and, like, create your own slightly modified version of it.
[00:17:15] And as long as you export the same things and, you know, hijack what you need to, you can just tell the plugin to do what you want. This is what Loom uses, our kind of web component 3D library from True Skater, if you
[00:17:29] See it on Discord or GitHub. He just swaps out the module name for his version when, you know, it's a slightly modified version for his purposes.
[00:17:40] But, yeah, so you have this kind of flexibility. You don't have to just start from scratch like I did with MobX, JSX, and Vue. JSX, you could also just kind of hijack Solid to kind of do this stuff.
[00:17:51] Generally speaking, let's see, let me just change it. I don't want to go too far in the plugin side here. I don't mind people doing preprocessors and stuff, but you can understand how this very quickly fragments things.
[00:18:10] If there's an expectation of having certain compiler stuff available. I feel like this really has to be done at the app level or, you know, you kind of make that choice depending on how you publish things.
[00:18:23] Because if you compile ahead of time when you build your libraries, then yeah, sure, do whatever you want. But if we want to support server-side rendering and we have different compiled outputs, it makes sense to ship the JSX as it is and let
[00:18:37] The app do the compilation. And in that sense, we kind of want the compilation to be the same for everything. That's the only way to guarantee. So, we'll see what we can continue to support with Dom Expressions.
[00:18:47] Mostly because I want to support different libraries and different frameworks that people can build on it. But generally speaking, like from Solid's perspective or any specific frameworks perspective, I think you kind of want them to be hard set.
[00:19:01] Unless like you're opting in for something that's like app-based, like some syntax add-on or whatnot. But this is all Babel. So, you can do that. You can do whatever you want. But I don't think we should author third-party libraries expecting something to be
[00:19:14] Present. It's going to fracture the ecosystem pretty early. But anyways, as I was saying, these tests are kind of great in the sense that you can see what's going on. They're just snapshot tests.
[00:19:24] And yeah, there's a lot of weird garbage stuff. But, you know, you can really get a feel for if you're destroying and choosing import. It actually doesn't stack them just the way the default helper is for doing the imports.
[00:19:37] I could probably write my own, but it's fine. Like Rollup or whoever you're using the bundle will compress this all up nice. But yeah, you can kind of get an idea of what's going on.
[00:19:48] You see all our templates at the top and then, you know, all our helpers and stuff being compiled in. I use this to try like all different versions. Like, you know, for example here, the class list here, when you inline an object for
[00:20:03] Class list, I can see and analyze it right away, right? So, we can just go class list, toggle selected, selected. Like, whereas next, that's this one right here, right? And if we go down a bit further though, where's the other one?
[00:20:26] Yeah, down here in this effect, you can see some other stuff going on. Class list toggles selected. And you're like, what's this? Well, V3 is V3 is selected. The reason this is we actually group effects.
[00:20:39] If we have a lot, it's really expensive to create computations one by one. So, it's better to, if they're like related, to kind of actually do a basic diff. And that's what you're seeing here is equality checks.
[00:20:53] So basically, access it, do the equality checks, and if so, set the properties. This is such a small diff, and compared to the cost of making three extra effects, or two extra effects, it's easily worth it.
[00:21:07] So, this kind of optimization, something that only comes with the JSX, it might be kind of unexpected, but we really want to try and optimize the best we can for creation speeds, because update speeds are already our forte, and any framework is relatively
[00:21:24] Fast on update speeds. So, optimizing for creation is actually really, really important. I can make sense of this code pretty easily. I don't know if everyone can. It's something you can play with. But the best thing is a playground, unless you kind of
[00:21:37] Play with this and see it yourself anyways. But when you see the output in the playground, these methods that it's referring to, you know, these kind of underscored, and you're just like, what are these?
[00:21:46] Well, more likely than not, they are coming from DOM expressions, and not, like, through solid JSWeb, and not, and the code is actually in this repo, not in solid JS's repo. So, yeah, let's look at some of the other ones.
[00:22:10] Yeah, I mean, this is where I get to test out all the little optimizations that I love doing. But I think you're seeing something like done with hyper DOM expressions might be the easiest, because it is the simplest thing from a code standpoint
[00:22:29] . Technically, the JSX version ships the least amount of code, because we don't need any more runtime than what I've shown you. And this requires, like, a hyperscript function, but there's no compiler or anything.
[00:22:39] So, in this sense, what you see is what you get. So, this is, like, a perfect example where, you know, I've said, we need these methods from the runtime, from a runtime in order to run the hyperscript version.
[00:22:54] And then this one is generated, because we don't care about tree shaking at this point. There's no compiler benefit here. This one, we do kind of expose or create a hyperscript function that returns the H, right?
[00:23:07] So, you pass in your runtime and get the H, and the runtime in our case would be the methods of solid JSWeb. But if you look at my tests, I'm using SJS because it's very small and very simple, kind of separate reactive library
[00:23:22] . And this just has a historical thing, because solid used to use S at its root, and I just never bothered changing it.
[00:23:30] So, this is all I needed to do, right? I just needed to create this core library, which is the, you know, create this memo function, effect function, create component, get owner, shared config, you know, create component.
[00:23:44] So, basically, you know, the stuff that I needed to actually handle the different scenarios, this one actually looks like it supports class components. It's interesting, right? But that's the whole point here. You could see it's calling render function on a new comp.
[00:24:04] You, we can edit our stuff here. That's why the create component exists, because realistically, it's just a function call in solid. But if someone wanted to do something more, you can, right? And this core file is what I was talking about.
[00:24:21] We set up the Babel to replace the Rx core that I was showing in the DOM expression library using this transform rename import with this core file. And then, more or less, you've wired it together, and now you have your custom dynamic runtime
[00:24:38] . But yeah, I mean, the hyperscript function itself is pretty small. It's your typical hyperscript function with, you know, a few differences. And all these r. spread or r. dynamic properties are just calling methods that are available from the runtime.
[00:24:56] That's what the r is. I mean, that's pretty much it. It's just a hyperscript function. You just, lit is actually pretty much the same setup, except it's a little bit more complicated. Mostly that we pull in this parser that I hacked together a
[00:25:20] Few years ago. It was actually for my knockout days when I was working on making, you can have free processors for knockouts. So I was like bringing nice, like, I call it nice, but like curly bracket syntax into knockout and getting rid of
[00:25:35] The data binds. So, you know, between that and our web components, it kind of looked like a modern framework. Anyway, they reused it here. But I'd, because I'd already done the work to expand it to accept web components, which is important to a
[00:25:49] Lot of my early work. And this one requires a lot more runtime, mostly because the hyperscript version just kind of calls our spread and is kind of lazy about it, doesn't care. It's like, yeah, just spread everything, which is kind of inefficient, but
[00:26:03] It's also like what you have. You have an object, you know, you can't analyze it ahead of time. Whereas with a tag template literal, you kind of can. And that's really cool because, you know, you can still look at the shape and there
[00:26:16] 's a lot more code here. Well, not a ton more. I think it's like, it's 400 lines. It's not a ton more, but this, this actually just in time compiles it. And it, which is an interesting challenge in its own, but it's actually
[00:26:30] In some ways more similar to the Babel plugin, or at least an older version of the Babel plugin, except, you know, it, it generates two things. It's runtime. It basically parses the template into like, like the tag template literal, like into a cl
[00:26:49] Onable template, like, like we use in solid, like basically something we can put in a template element. And let me see if I can find where that is. Um, probably, um, yeah, this create template function doesn't want to replacing of the wildcards, then
[00:27:07] Parses it. And at the end, we get HTML and code as I call it. The code is a string, um, you know, which is going to more or less be evaled. I mean, we don't use eval, we use function for it.
[00:27:21] Um, and HTML is a, um, is what I was saying like this, uh, HTML string that can be cloned, right? We pull out all the dynamic parts and then turn it into something that could just be, you know, see document, create template element
[00:27:40] . And then we create, you know, get all, do all the stuff we need to prep it. And then we actually attach it to the tag template literal itself. There's a really cool thing about tag template literals in that when you hit the
[00:27:53] Same one again, it's like cached. So you can actually do something kind of cool here. If you actually look at the, uh, HTML function we export, you can see this, but, um, like the, the array is like the same array or of the
[00:28:08] Static strings. So you can actually use that array to look up something, right? So here we go. First thing we go is cache, you know, get statics or create template, which is what I was showing you above.
[00:28:21] And then once we have the template that we created, um, we, we essentially just, um, call our create method, which clones it and executes our function more or less. Um, well, it executes our function, which clones it.
[00:28:39] The output, funny enough with these strings, it's very similar to the JSX compile output. The difference is we can't group effects because we, um, can't analyze the holes. We can only analyze the static parts, but this is probably within maybe 5% of what
[00:28:56] The JSX compiler is. So in terms of, uh, tag template literals, it's super impressive. I mean, it's not as fast as like, um, one more, you know, to kind of a dedicated top down approach from the creator who have Dom C and stage
[00:29:16] Zero, but, um, which is pretty recent. But until that, that came around, this was actually funny enough, the fastest type template literal, um, library, you know, faster than lit or UHTML or any of them.
[00:29:28] And, you know, it comes down to just, um, the architectural choice of using fine grained, right. Um, which is very different, um, in the top down renderers. Right. So, yeah. Um, I think that is most of it here, as I said, it uses
[00:29:54] The same thing where we pass in this runtime. So it has a, you know, uh, or is it a create HTML function that returns our HTML tag. Um, and then when we call our function at the end, uh, making our create call, um
[00:30:18] , you can see that it's, it actually passes. It expects that R to kind of come in as the variable. So you just call it with R with that runtime. And from there, um, it has access to that runtime inside your eval function
[00:30:37] More, more or less. Um, see all these R dot inserts or whatnot in the, in the strings we generate to generate the code. Um, it's an interesting approach. Let's say it was surprisingly fast.
[00:30:52] Um, so, you know, if you really, really hate compilation, you could use this. I feel though that I have this, not really for it to be usable, but more to kind of prove a point.
[00:31:10] Um, you know, people like to kind of sometimes crap on tools and stuff and be like, Oh, it's magic and all this. And it's like, no, this is, this is just like a pure runtime approach.
[00:31:24] You could be doing it, but why? Anyway, I think that's good enough for now. I think this pretty much covers what I wanted to do with this stream. Um, just to kind of talk about the code people have been asking forever.
[00:31:41] And next time I'll actually tell you guys about it. So you can come in and, you know, ask questions or whatnot. But I just wanted to test that streaming mechanism worked on my M1.
[00:31:50] And then it was, um, good enough, uh, to, you know, make some content and do some, some videos perhaps. But yeah, I think that'll be enough for today. enough for today. Thank you.