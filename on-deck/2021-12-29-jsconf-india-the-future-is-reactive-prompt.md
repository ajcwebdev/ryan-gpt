---
showLink: "https://www.youtube.com/watch?v=vHy7GRpTpm8"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "JSConf India - The Future is Reactive"
description: ""
publishDate: "2021-12-29"
coverImage: "https://i.ytimg.com/vi/vHy7GRpTpm8/maxresdefault.jpg"
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

[00:00:00]  today i'm going to talk about the topic of reactivity this topic serves as the foundation of so many things you do in javascript uis it is so fundamental i
[00:00:09] 'd argue that it's developed into language of ui frameworks so let's start with a joke i hope you can all see this this talk has a pretty bold title and what
[00:00:20]  do i even mean by that what is reactive programming if there's ever been a more overloaded or hype term in front-end dev it has to be reactivity people
[00:00:31]  use it to refer to a number of things and it often gets into this zone of esoteric explanations like things like functional programming but don't be the guy in this comic
[00:00:41]  it's actually a bit tricky to nail down and this is coming from someone who's been trying to explain this to people for years the way i think about this is like
[00:00:51]  a system of live equations see a normal assignment represents a moment in time it means that on the completion you know a variable a reflects the current sum of b and c but if
[00:01:03]  either b or c change you need to do this assignment again the relationship does not hold reactive programming is a programming paradigm around modeling your system based on rules that hold through time
[00:01:15]  the code describes a lasting relationship between the values in the system and that without any intervention they continue to be held as they evolve you've seen this before in everyday applications you know
[00:01:27]  spreadsheets it was probably one of the earliest forms of reactive programming you put a sum in a cell over a range of rows and you change that data and it updates immediately in
[00:01:36]  a sense reactive programming is just a another declarative programming model you know like sql queries or html that have this kind of awareness of time so why react
[00:01:47] ivity what's attractive about this first of all it's declarative which i just mentioned relationships are set once and then executed and you get to describe the behavior rather than the implementation
[00:02:00]  this is really powerful in user interfaces because there's a lot of different pieces you know moving parts ways people can interact with the screen this way you can keep the view updated
[00:02:10]  and synchronized regardless of all the different things are going on it's a lot more easier to kind of visualize and work out what's happening than if you have a bunch of
[00:02:19]  declarative or sorry imperative instructions running in sequence this is the same reason we like declarative views like why not the data and it's composable right it's easy to wrap
[00:02:29]  up behaviors easy to modularize make them reusable you know this is a different unit than say components which we use to you know chunk up our view code we can have reusable
[00:02:41]  behaviors um abstracted from their output so to speak as a reactive programming it's existed for a while outside of javascript even but in javascript it really has grown
[00:02:52]  into two main approaches and both owe their existence to work done in microsoft in the mid-2000s this first what i kind of dub as fine-grained signals are
[00:03:00]  simple event emitters that hold a value and represent that value over time um basically the primitive is the data that's the kind of mentality behind it the second are reactive streams
[00:03:13]  or rx which are a series of collections or data events that are emitted over time uh this is very popular beyond javascript as well like in rx java and
[00:03:23]  whatnot today i'm gonna focus primarily on the first type as while reactive streams are very common fine-grained reactivity has made it much closer to the hearts of the
[00:03:35]  frameworks and it's what powers solidjs among others so why fine-grained reactivity well basically with reactive streams everything is this kind of functional chaining and makes it
[00:03:48]  a little bit harder to wire up dynamic behavior it's very explicit but when you're dealing with view code what you're worried about more is synchronization you know with reactive streams
[00:04:00]  you get a bunch of operators it's a bit like lodash um ramda and with fine-grained you just write simple expressions you know you can control their evaluations with
[00:04:11]  things like if statements almost kind of imperative logic but in small pieces and this works really well for templating languages because sometimes you just have an attribute or some children you want
[00:04:23]  to insert in your template and you know it makes it a very natural fit for you know things like jsx or templating dsls but really i think the biggest win
[00:04:32]  is that we only have to deal with three things it's not like two dozen operators or six dozen operators whatever rx has these days it's it's it's it's
[00:04:43]  just these three things right and basically there is the signal or the reactive atom and then a couple types of computations first derivations which are our computed values and effects or
[00:04:56]  reactions which are our side effects if you understand these three concepts you have all you need to use fine-grained reactivity at this point you're probably thinking some of this
[00:05:09]  looks pretty familiar and that's because it is i'm going to show a few examples of what i'm talking about it's okay if you're not familiar with all these
[00:05:17]  frameworks i just want to emphasize how widespread these ideas are fine-grained reactivity has had basically the same form right from the beginning this is one of the earliest examples is
[00:05:31]  back in 2010 knockout js came out and besides having some very lovely es5 code that has to be very aware of this is um it's really similar to what came
[00:05:42]  later our ko observable here are just our signal or reactive atom and then we have a pure computed which we use to derive a full name from that first name and last name
[00:05:52]  fast forward you know five years and we see mob x with react again slightly different interface this time we're using decorators on class components but what you will see again is
[00:06:04]  that there's an observable for seconds past here and basically they wrap the whole component in an observer and that observer is our reaction or side effect that's what does the rendering
[00:06:15]  so we still have the same pieces present here let's jump a few more years how about svelte svelte was actually pretty similar to knockout before version three
[00:06:26]  and at which point it decided to bring reactivity into its language but here all the let variables just the normal variables you have in your template get turned into signals essentially the
[00:06:38]  reactive atoms and then the dollar sign operator um like the doubling here in quadruple are actually derivations or um computed values from there you just use them in your template as
[00:06:50]  normal there's a lot of similarities here and view composition api came out in 2020 same thing again brefs are the reactive atoms okay i got one more example for you
[00:07:03]  yeah this is a good question people love asking this is react reactive give you a second to think about that there's been some discussion and even acknowledgement from the core team that react
[00:07:19]  isn't purely reactive but this is a much more nuanced discussion and in my opinion react has as much right to claim being reactive as svelte both when their data changes
[00:07:32]  from the primitives trigger a state invalidation event that schedules the component to be re-rendered some people might get hung up on the fact that assignments automatically trigger without calling
[00:07:41]  a setter but that's just the compiler you know all reactivity calls a setter and most in plain sight and here's the thing same three primitives use state use
[00:07:54]  memo use effect signal derivation side effect react is not a fine-grained reactive system as i've described to be perfectly clear the execution is actually completely different but these are
[00:08:09]  very powerful primitives for their brand of reactivity and still undeniably the apis are converging so now that we kind of have a basic idea of what react
[00:08:23] ivity is i'm going to show you how it works by showing you how we can create a basic reactive system in about 50 lines of code and i'll start with our observ
[00:08:31] able state here our signals what are signals well they're just a basic getter setter and a value you know in different frameworks they go by different names they're sometimes
[00:08:45]  known as observable or ref or atom or behavior but on the surface by themselves they are not much different than that in in this example here i'm using create signal and
[00:08:58]  it returns a tuple kind of similar to react hooks i'm using solid syntax to kind of keep things clear but because solid syntax is very explicit but essentially we get a count
[00:09:08]  getter and a set count setter so we can read that value by calling it as a function in this case we initialized it's zero console log you get a
[00:09:16]  zero you can update that count to five console get a five i mean not much to it and this as i said can come in different forms like views ref right here you read
[00:09:28]  it by going count dot value or you set it by assigning count dot value but if just for the translation for you check out this very simple ref implementation if i were to use
[00:09:38]  solids primitive underneath basically we get our getter and we get our setter and then we wrap it in an object with getters get value call the function set the value
[00:09:48]  or send the value call the setter and as i mentioned svelts compiler same deal again right in this case when you assign count equals five the compiler actually compiles in
[00:10:00]  the setter function like here dollar sign invalidate zero which is the index of the reactive variable in their in their compilation and then it sets the count to five and passes
[00:10:11]  it into their invalidate function so how would we go about creating a signal ourself well this seems like a good place to start it's just a get and a set as
[00:10:23]  i mentioned um more explicitly here i'm actually using a closure over kind of a factory function but essentially this value is forever tied to these two functions we call the function get
[00:10:38]  the value we write to the value but you know some stuff's clearly missing well what's missing is we need to manage subscriptions this is how updates automatically happen yeah this adds a
[00:10:56]  nice chunk of code let me do my best to explain what's happening here first of all when we create a signal now we create a set of subscribers and now when we
[00:11:07]  read the first thing we do is go is anyone listening is there a current observer if there isn't we just return the value but if there is we actually take that listener and
[00:11:19]  add it to our subscription list this is important for later when we actually update the value during write again we just assign the value but now we have to notify our subscribers so
[00:11:31]  in this example i'm just iterating through the subscribers and calling an execute function on them this will make more sense when i show the other side of the equation we need comput
[00:11:41] ations as i call them or basically our derived values or effects to actually complete the picture but this is basically all there is to signals i'm going to focus on effects first
[00:11:54]  and jump over um computed values or derived depending on how you want to call them mostly in that side effects are the more primary piece as long as you have a signal and a
[00:12:04]  side effect you have a system that works um derivations are probably the most complicated part of the reactive system so we're going to save them for last so effects as the
[00:12:17]  name implies create side effects um they're also known as reactions or in libraries like mob x auto run view watches knockout computeds these are pretty common names for them and basically
[00:12:31]  all they do is they listen to signals while they are executing and then whenever those signals that they listen to update they rerun their function again so in this example we've
[00:12:46]  now we still got our count signal but now we've created an effect that console logs our count to the terminal so initially it just runs and it goes to count to zero uns
[00:12:58] urprising but then when we set the count to five it actually triggers that effect again and and you get the count as five and similarly when we set it to ten whenever
[00:13:08]  count changes the effect runs again how does it do that so this is the other half of our equation now i'm going to show you how we actually impen implemented get current
[00:13:22]  observer first of all notice that there's this context um array that's declared globally here basically we have a stack and the whole trick is when we get the current observer we
[00:13:36] 're just looking at what's on top of the stack that's what gets subscribed to the signals and that way when we run our effect which i have this execute function here it
[00:13:45]  follows this routine on every execution basically first it cleans up any previous subscriptions related to it on the first run there are none so it's basically a no-op but after the
[00:13:57]  fact it needs to ensure that it's starting from a clean slate this will be important later next it pushes itself on to the stack that way when it goes to run the
[00:14:08]  function any signal that gets accessed underneath its execution can listen for it and know that it's there and subscribe finally it pops itself off the stack to get this whole thing started
[00:14:24]  though as i showed previously the effect has to run once it has to get its initial um dependencies so at the bottom of our create effect function we just run it honestly at this
[00:14:35]  point you've seen everything you need for a basic reactive system and some simple systems have more or less just that they stop here but we have one more primitive and it's it
[00:14:45] 's a really important one actually derivations they're kind of both an observer like rfx and a signal and the key part is they only recalculate when
[00:14:58]  the value of their dependencies change they're also sometimes known as computed or pure computers or memos here we have a first name and a last name john and smith and now
[00:15:14]  we have a full name which we use create memo to calculate in this sense the full name is its own signal that you can listen to it only updates its its value when
[00:15:27]  first or last changes otherwise it just returns the last calculated value in this example nothing too unexpected happens even if you didn't have the memo it would act pretty much the same
[00:15:43]  right first it consul logs my name is john smith and then when you set the first name to will it's will smith this is unsurprising why even bother
[00:15:51]  with it then well it can be used in more than one place right sometimes work from derivations can be expensive you know makes me think of uh you know subtotal calculations
[00:16:07]  on tax and tips or um you know working in spreadsheets and you know being used in more than one place happens a lot in view code like say you have someone's name
[00:16:18]  you might show their name in the title but you might also show an avatar and if they don't have an image maybe you just show the first letter of their name having these
[00:16:28]  different derivations you don't necessarily want to do the underlying work multiple times obviously a name or a string is not that expensive but just kind of illustrates the the point and
[00:16:40]  also sometimes you can multiple dependencies feeding into the same computation uh you know like in our first our full name example we have first name and last name being fed in the convergence of
[00:16:53]  different signals and memos happens all the time in templating and sometimes just because one part of the branch updates you don't want to rerun the code on the other
[00:17:02]  side basically what can be derived should be derived this removes the potential of getting out of sync but it typically requires some bookkeeping but luckily for us react the system actually handles this
[00:17:14]  for us automatically without wasted work so now for that example i've got a couple here first i want to show you what happens when we take the example we just talked about
[00:17:26]  and don't put it in a derivation basically our full name here is just a function that gets called it's a function because we still need to access it under our effect
[00:17:39]  we still need to read first name and last name underneath our effects that we were doing if we just assigned a value it would never update because we only are aware of the
[00:17:49]  runtime stack so let's go through this example first we create our signals then we log that then we create our reactions what happens is when the first reaction or effect runs it it
[00:18:04]  goes to start logging it and it hits full name and it calls that function and evaluates it so as you can see when we create reactions we go create updating full name
[00:18:13]  and then we log my full name is john smith when we hit the second effect it's the same thing creator updating full name your name is not john smith now when
[00:18:22]  we set the new value to jacob it's the same thing again creating updating full name my name is jacob smith creating updating for a full name your name
[00:18:31]  is not jacob smith i mean this is not expensive work but it is a little bit wasteful let's see what happens when we add a derivation we
[00:18:41]  take the same example with a derivation around full name and timing changes a little bit and it's a little bit more efficient we create our signals the same but now we create
[00:18:53]  a derivation and we see that immediately runs creating or updating the full name but when we get to our reactions we only see the log for the reactions that is because even though
[00:19:04]  it runs full name it doesn't need to recalculate it this is why i call it create memo this is sometimes confusing to people because they're like oh it
[00:19:13] 's a it's a reactive computation but in practice there's an an it's analogous between top-down renders and reactive renders the role of um pure computations
[00:19:25]  or derivations and memo functions they serve as a way to prevent recalculation of expensive calculations so same thing happens when we update the value now when we update it
[00:19:42]  to jacob it does trigger our our memo again so we see creating update full name but then it runs both effects and sequence. We don't have to recal
[00:19:49] culate it multiple times. That's basically it. I mean, I haven't shown you how to implement CreateMemo, and the naive way would just be using effect
[00:20:00]  to write to a signal like this. That basically gets us our 50 lines of code to write our reactive system. In reality, most reactive systems' derivation implementation is
[00:20:12]  much more complicated, mostly that there's a few things that they want to guarantee that just writing to a signal doesn't do. Because writing to a signal is like starting over
[00:20:23]  again. It's setting a new value and propagating the change outward. But with memos or derivations, we can know both what it depends on and who depends on
[00:20:35]  it. And this can allow us to make things even more optimal, which I'll get to in a few minutes. So, now that you're all experts on fine
[00:20:45] -grained React TV, I'm going to show you how we can leverage it to make, you know, what I consider at least an optimal JavaScript framework. Reactive
[00:20:54]  libraries like we built so far were actually fairly popular in JavaScript in the early 2010s, but died out almost immediately with the dawn of React. So, this is not
[00:21:03]  a new idea. One of the reasons was these early frameworks lacked predictable execution. You might be able to kind of picture how we could make a number of dependencies quite innocently
[00:21:15]  and have them almost ping-ponging around a system. Values, setting other values that set other values and maybe set the initial value again and infinite loops. Honestly
[00:21:24] , when this was paired with two-way binding, it was a disaster. React sort of came in as a white knight to save us from it. But what if
[00:21:34]  we could ensure synchronous and predictable execution? Well, that changes everything, right? Because if our updates happen synchronously, you know, they can be glitch-free.
[00:21:46]  They can never be possible to observe an inconsistent state. And as long as we ensure no computation runs more than once on a given update, we can ensure predictability. The
[00:21:59]  other important thing to note is that reactive systems we've built here are using dependencies completely dynamically. It isn't just the fact that, you know, we're missing the
[00:22:12]  dependency arrays. They actually change on every execution, right? This is why that cleanup that I showed earlier was so important. Consider the memo on display name. Here, I
[00:22:22] 've introduced a new signal, which is show full name. And basically, depending on whether it's true or false, the display name will either just be the first name or
[00:22:31]  it will be the first name or the last name. This is actually very powerful and something that I want to show in an example. Here, we have our first name
[00:22:45] , our last name, and our show full name signals. We've created a memo for our display name like I've just described. And we create an effect that logs the
[00:22:58]  display name. So as you can see from our initial state, we log create and then we log my name is John Smith. Now, if we set show full name
[00:23:08]  to false, unsurprisingly, this goes back into our memo, realizes it's false, and only returns the first name. And so when our factory runs, it just
[00:23:20]  logs my name is John. But look what happens when we change the last name. Nothing. And the reason for that is we are no longer listening to last name.
[00:23:33]  So we don't need to rerun anything, really. The signal still gets updated, but we don't need to do any of the downstream work. This is one of
[00:23:42]  the powerful things that happens when you do reactivity at runtime. And just to, you know, make sure, you know, everything is still well in the world. I
[00:23:51] 'm going to set full name back to true. And when we do that, well, it does recalculate our memo again and shows the first name and last
[00:23:58]  name, and you can see the updated value. So nothing is lost. We just don't do unnecessary work. This is one of the superpowers of fine-gra
[00:24:07] ined reactivity. So armed with this tool, there's a lot we can do. Frameworks like reactivity since it makes things automatic and can simplify the mental model.
[00:24:20]  You know? But popular libraries use virtual DOMs or other render-specific models, right? Vue combines this kind of fine-grained reactivity with the V DOM
[00:24:31] . Even Svelte compiles things down to components that don't behave really that differently from React. So what if we brought this fine-grained reactivity right
[00:24:42]  into our renderer? What if everything was just effects? Rich Harris, the creator of Scott, once said, frameworks aren't there to organize your code, but to organize
[00:24:50]  your mind. And honestly, I feel the same way about components. I think components being a mechanical thing is not the best way to leverage them. It puts too much
[00:25:02]  pressure on how you write your code. So taking this granular react approach and maybe a little compiler magic, we don't need our application behavior to be tied to the way we
[00:25:13]  structure our code. So I pose a question. What if we used create effect calls to update the DOM? I have some solid code here. Here we go. Act
[00:25:25] ual solid code with some JSX. Kind of looks similar to React, but you can see that we have a signal and we're using that signal inside our header here.
[00:25:35]  What if our JSX produced real DOM nodes? As you can see, this isn't really that different than the console log examples we've been doing so far. We
[00:25:48]  just create an element, our H2 element, and then we just run an effect that sets the text content on that element whenever count changes. It's just the same thing
[00:25:58] . Right? When count changes, we only just run this one function. There's no component execution, no diffing, no reconciling, just some new text
[00:26:09]  content. What we have here is basically just a state library. But let's take this even further. What if all rendering was an effect? This image has been known to
[00:26:22]  give some React developers headaches. Hook rules have sort of preconditioned our minds to reject this sort of nesting. But this onion of nested effects is the key
[00:26:31]  to how we can use a reactive system to create a hierarchy independent of any components. It isn't unlike a component tree, just it isn't defined by how the developer
[00:26:40]  breaks up the code, but how the application is structured. The key is that only the effect nearest to where the value is read reruns when the value changes. We do
[00:26:49]  this using functions, like I've shown, but we can also be getters or proxies, basically just to lazily evaluate things. So let's pretend our
[00:26:57]  signal here, one of them, like D, changes. What needs to rerun? Just these two effects. However, if we changed A, which tracks kind of right
[00:27:12]  at the top level of the second effect here, then, you know, more needs to rerun. This might be hard to visualize. But a structure like I'm showing
[00:27:23]  here could be generated by code that looks like this. Notice that we have kind of a conditional rendering going on in our app component where, depending on A, we decide
[00:27:34]  whether to render the child. That's kind of analogous with the inner create effect there. And then the rest of the effects are just user effects and things in the
[00:27:47]  child templates JSX. The takeaway is there's not much in the way of a rendering system here. The whole thing is built using the same reactive primitives that really any
[00:27:59]  solid developer would use. So let's look some more at some actual solid code. This is a simple counter. But as everyone knows, I like this example because it
[00:28:10] 's nothing simple for a library like React. And it kind of shows a fundamental difference here in approach. So I'm going to pull up some live code here and actually look
[00:28:22]  at this example in more detail. And let's refresh and start over again. Here is our counter. In a lot of aspects, this looks a lot like React.
[00:28:34]  Other than you might be noticing, like, you're just setting the interval on top. There's no creative factor or anything. And the first thing I'm going to demonstrate
[00:28:42]  to you is that this is because in solid components only run once. See, console.log.hi once and our counter is still updating. This is, pardon the
[00:28:55]  pun, a side effect of us using a reactive system here. We just create it and we set everything once and then the system just kind of runs itself. And as I
[00:29:04] 've already mentioned before, our JSX is just com elements. Here's our H2 with that initial state of zero. This also only runs once. But if we
[00:29:28]  wanted to run it more, we could always wrap an effect around it. It's not only running once. Well, that's because there's nothing dynamic being tracked in
[00:29:47]  this effect. Let's now track the count with the element. And we can see that we see the updated element and the count at the same time as it updates. But
[00:29:57]  I want to dig in a little bit more than this. This is great to kind of show that we're dealing with DOM elements. But let's actually see what this comp
[00:30:12] iles to for a second. I showed you simple create element. Solid does something a little different. We actually clone templates. So I kind of cheated it. But essentially
[00:30:22] , the first thing you should notice is that we do not change your end user code. The signal, the set interval, the cleanup, the high, this is all exactly
[00:30:31]  the same code. We only transform the JSX. And that JSX transformation here is actually taking a template, cloning it, cloning it, using DOM nodes
[00:30:43] . This is real DOM template. And then just inserting our count. Insert is not very clear here. It's because JSX is very dynamic. You could insert anything there
[00:30:52] , really. So let me just make this a little bit more clear for the sake of this demonstration, because we know that this is just going to be some text.
[00:31:04]  And just to prove it, yes, our counter is still working. But now our compiled output is a little bit different. We have a template. And it's actually smart
[00:31:17]  enough and sold to actually add an empty text node here, an empty node. And then all we do is we clone our template. We walk to the first child, which
[00:31:25]  is that text node. And we create an effect. This is the internal wrapper around crit effect. But it's basically identical. And we just set the data on the
[00:31:35]  text node whenever count changes. This is the only thing that changes when our count updates. And the truth of matter is this even continues to be true if we wanted to
[00:31:50]  say, extract this out into another component. Let's make a header component. And that header component can return some stuff. I'm actually just going to go back to
[00:32:15]  the more simplistic looking insert. And what do we have? We have crops children. And we will also just change this to header count. All right. Our working counter
[00:32:48] . And actually, to prove my point further, let's console log header here. We come to no one's surprise that both high and header only log once. But
[00:33:00]  our count is still updating. And the secret to that is actually really not that more complicated than anything we've seen so far. It's because there's only one effect being
[00:33:12]  actually created in this whole example. It's around inserting the text content here like we saw previously. And our component? Well, our component's just a function call.
[00:33:24]  We are returning a Cray component here. But for solid, this is mostly so that we generalize the compile output for things like dev mode or debuggers. You
[00:33:37]  can just think of this as basically this header function being called with this props object. We actually compile the props right in. And all we've done here is wrap the count
[00:33:48]  in a getter via children. Basically, if solid can tell that the expression could be reactive, we just make it a getter. Everything's lazily evaluated.
[00:33:57]  And so when count updates, it's actually props.children here that's calling this getter that actually tracks. It's still just this that updates as our count updates
[00:34:16] . Not two components, no diffing, nothing fancy, just this one effect. And honestly, this just keeps going and going and going. I got one more example here
[00:34:26]  to kind of show you. What if we use context? Everyone's kind of seen context from React, I think. As you can see, I still have I mean
[00:34:35] , this kind of burying the lead, not burying the lead, but kind of ruining the surprise. But it shouldn't be a surprise. We've still only logging
[00:34:43]  twice while this counter is going. Essentially, I made a context provider that has the exact same code we've been using the whole time. And then, you know, passes
[00:34:53]  that count through and props children. Then our whole app is wrapped in our counter. And our counter uses the context and passes it to our same header. Basically, the
[00:35:08]  way I split up the components had no effect on what was being run and doesn't affect the performance at all. And to recap, that's what I'm calling the
[00:35:22]  reactive advantage. Components run once, right? There's no hook rules or stale closures to worry about. You're not like looking at dependency arrays. It's
[00:35:35]  just this reactive system. And the templates can pile down to real DOM nodes. This is a super low abstraction. I was able to just like assign JSX to a variable
[00:35:47] . it's actually surprisingly consistent. And finally, state is independent of components. You know, there's no the component boundaries are for your sake, how you want to
[00:36:02]  organize your code. It's not about performance or figuring out like the you know, how the frameworks component model updates. As I mentioned, performance is good regardless. You just
[00:36:14]  get to write the code the way you want to write your code. So here we are. So here we are. Well, not so much the future. The future
[00:36:20]  is already here. Well, not so much the future. The future is already here. And this goes beyond developer experience or raw performance. Really reactivity is the universal language
[00:36:30]  of UI. And this isn't a stretch by any means. I showed earlier that beyond implementation, we see our three kind of concept or primitives form this sort of
[00:36:43]  micro language that transcends any framework. In fact, we've seen projects of all different technologies and approaches use this. There's even projects that compile between frameworks. Mit
[00:36:55] osis from Builder.io started its life as a tool to basically convert solid like JSX into any framework. View, Svelte, you name it. React
[00:37:03] . Jason Miller has been working on a compiler that generates React components from Svelte. It's actually much harder to go the other way. Reactivity gives us a much
[00:37:16]  easier language to analyze and to be able to transform to, right? If the other way was easy, we would have already seen React. We would have seen React without
[00:37:26]  a VDOM. It's just not. And, yeah, we've all seen Svelte. But, like, another cool application, and this is, you
[00:37:35]  know, really big here and I've been talking about compilation, is Marco from eBay has been working on using their reactive language to actually determine precisely what JavaScript needs to be sent
[00:37:45]  to the browser. Basically, being able to extract the static parts out of the component bundle, like, you know, basically out of this at a sub-component
[00:37:58]  level. We don't even have, you don't even have to ship full components to the browser, right? Take fine-grained reactivity, take something compiled like
[00:38:05]  Svelte, and apply analysis to it. Obviously, this is a mouthful to say, but a reactive graph lets us analyze the relationship between stateful data. We
[00:38:15]  can trace it back to a source. We can know how it's derived. We can know how it ever updates. And that's built right into this language of react
[00:38:21] ivity. You know, reactivity is just a way of expressing a system of behavior. It's not a specific implementation. You could create a whole VDOM implementation inside
[00:38:32]  a single effect if you wanted. But treating rendering as a side effect means we aren't tied to a platform. We can render WebGL or mobile as easily as the DOM
[00:38:40]  or not render anything at all. You know, just keep some state in sync. In Solid 1.2, we've actually added support for custom renderers. And
[00:38:47]  I'm really excited to see what people build with that. And, you know, combined with a scheduler, Solid is actually able to mention features like time slicing or concurrent
[00:38:57]  rendering you find in suspense. In Solid 1.1, we actually added support for interruptible, prioritized, concurrent transitions. Again, these terms are pretty heavy to
[00:39:08]  say, but it just means that with reactivity, you can basically model whatever you want. Honestly, I'm yet to find anything I couldn't model with reactivity.
[00:39:19]  So that's it. Reactivity is everywhere. It's already here. Hopefully, through this talk, you have a bit better of an idea, you know, an
[00:39:32]  understanding of what it can do for you.