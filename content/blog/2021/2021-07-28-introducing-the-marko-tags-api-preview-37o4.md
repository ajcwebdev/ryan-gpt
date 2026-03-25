---
title: "Introducing the Marko Tags API Preview"
description: "The Marko Tags API is a new set of Core Tags coming to Marko. They let you use state in your..."
slug: "introducing-the-marko-tags-api-preview-37o4"
url: "https://dev.to/ryansolid/introducing-the-marko-tags-api-preview-37o4"
publishDate: "2021-07-28"
tags:
  - "marko"
  - "javascript"
  - "webdev"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fi04gxapz1ehsqk95i80z.png"
socialImage: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fi04gxapz1ehsqk95i80z.png"
---

The [Marko Tags API](https://github.com/marko-js/tags-api-preview) is a new set of Core Tags coming to [Marko](https://markojs.com/). They let you use state in your templates without using classes.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ansj2ooshba3tt93lt9c.png)

[Try this example online](https://markojs.com/try-online/?gist=331e83886082d205f3dec04acd22b3ba)

---------

## No Breaking Changes

Before we continue, note that the Tags API are:

* **Completely opt-in.** You can try the Tags API in a few templates without rewriting any existing code. But you don’t have to learn or use them right now if you don’t want to.
* **100% backwards-compatible.** The Tags API doesn’t contain any breaking changes.
* **Preview available now.** Tags API is now available in preview for Marko 5.14.0+ by installing `@marko/tags-api-preview`.

**Class components will continue to be supported.**
However, templates that consume the Tags API cannot have classes.

-------

## Motivation

The [Tags API](https://github.com/marko-js/tags-api-preview) marks a shift from [Marko](https://markojs.com/) as a templating language with a bolted-on component API to a fully-fledged language that can describe state and updates.

### Powerful composition

The last couple of years have seen build-around primitive take over the front-end ecosystem from React Hooks to Vue's Composition API. They've drastically improved developer experience by letting state be grouped by behavior rather than lifecycle. This makes it easy to compose behavior and extract it into separate reusable modules.

The Tags API brings this capability to [Marko](https://markojs.com/). You can build your own `<let>` that syncs its value with `localStorage` or your own `<for>` that is paginated. The possibilities are endless.

### Flexible development

Having a language for state and updates means it can transcend the component model as we know it today. Other component libraries have introduced primitives, but still tie them to the concept of a component instance.

* React's [Hook Rules](https://reactjs.org/docs/hooks-rules.html)

* Vue's and Svelte's top-level `<script>` tags.

With the new Tags API, lifecycle and state management can be handled anywhere within your templates even when nested under `<if>` and `<for>`.

### Compiler optimizations

[Marko](https://markojs.com/) is already one of the best options for server-rendered applications, in part due to its automatic partial hydration: only components that have state or client-side logic are even sent to the browser.

But why should we even send down entire components?  What if we only send down the exact expressions that can are needed in the browser?  We call this _fine-grained hydration_ and it's made possible by the Tags API which makes it much easier to trace which values are dynamic, where they are used, and where they change. This means Marko can know exactly what code needs to run where whether on the server, in the client, or on both.

The preview version we are releasing today doesn't leverage these optimizations, but don't worry, the work on this is already well underway.

---------

## Installation

To get started using the Tags API Preview you can spin up a new project using:
```shell
> npm init marko --template tags-api
```

Alternatively you can also add it to existing projects by installing the module:
```shell
> npm install @marko/tags-api-preview
```

## New Syntax and Concepts

There are a couple of new language-level features you need to learn to get started with the Tags API.

### Default Attribute

We wanted to generalize Tag Arguments `( )`, used in some internal Marko tags, with a syntax any tag can use. So we are introducing the Default Attribute.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ybolmt1k015lttynuy6q.png)

This assignment happens with no explicit attribute and instead is passed to the child component as "default". It is just a shorthand but it removes a lot of verbosities when the tag conceptually has a main value that is passed to it. All existing tags that accept an argument will use this syntax instead.

### Attribute Method Shorthands

To keep with Marko's terse syntax we are adding a short form for declaring function attributes that shortcuts having to write the assignment. This is very useful for things like event handlers. But also we can apply it to the default attribute to reduce the syntax for things like our `<effect>` tag.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4d40xzmc94mkqzc8z5zs.png)

### Tag Variables

Tag Variables are a new way to get values out of tags.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zwket5wzl0wjh3qwol5m.png)

We use a preceding slash to denote a variable name that will be created in the current scope. Left-hand side of assignment syntax is also legal such as destructuring.

Given that Marko already has Tag Parameters `| |` as used in the `<for>` tag you might wonder why the new syntax. This is all about scope. Tag parameters are designed for nested scope purposes. For things like iteration where there can be multiple copies of the same variable.

With Tag Variables the value is exposed to the whole template*.  

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vhevqkgmlze4qszd0y2c.png)

> *A Tag Variable will error if read before it is initialized.

### Binding Events/Operators

The Tags API gives us very powerful and explicit control over state in our templates. However, it introduces a new consideration when we are passing values between tags. We are introducing a binding mechanism to handle those scenarios.

Any tag can define a matching attribute and `___Change` handler that serves as a callback whenever the tag would suggest a change to its parent. The parent can intercept that change and handle it accordingly.

However, in the common case where this is a direct mapping we introduce a binding operator `:=` that automatically writes the new value to the variable passed to the corresponding attribute.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/prxbgudbtcc5nifmt9l3.png)

We will cover more specific usage later in this article.

### Stateful Dependencies

Marko's Tags API embraces the conceptual model of [fine-grained reactivity](https://dev.to/ryansolid/a-hands-on-introduction-to-fine-grained-reactivity-3ndf). This means that when talking about stateful variables and expressions we refer to them as having dependencies.

A dependency is any stateful variable that is used to calculating an expression. Where some libraries require you to state dependencies explicitly, Marko's compiler automatically detects these variables to ensure that all templates stay up to date with the latest values and only perform work as needed.

-------

## Tags API at a Glance

### `<let>`

`<let>` is the tag that allows us to define state in our templates:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ansj2ooshba3tt93lt9c.png)

In this example, we assign the value 0 to count. Then we increment it on each button click. This change is reflected in the `<p>` text.

You can add as many `<let>` tags as you want to your template and they can even be nested.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jiqygl7jpnbxl0nminvw.png)

Nested tags have their own lifecycles. If `showMessage` changes between `false` and `true` in this case the count would be reset. If you wished to preserve the count it could be lifted above the `<if>` tag in the tree.

### `<const>`

The `<const>` tag allows you to assign reactive expressions to a variable.  Unlike a`<let>` variable you cannot assign to it and its value is kept in sync with its dependencies.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/k04kr5pfkj0x9xvv732f.png)

### `<attrs>`

Marko has always had a way to interact with input passed into its templates. But now we wish to be more explicit using the `<attrs>` tag.

Picture a simple `name-tag` tag:
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2nakz1f37rye1k51s0pp.png)

Inside its template we might describe its attrs like this:
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2jzpjh9em4bfngamc5pl.png)

We have all the syntax of destructuring available to us like setting default values, aliasing, and rest parameters.

### `<effect>`

The `<effect>` tag adds the ability to perform side effects. It serves the same purpose as `onMount`, `onUpdate`, and `onDestroy` in Marko classes, but is unified into a single API.

For example, this template sets the document title after Marko updates the DOM:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4d40xzmc94mkqzc8z5zs.png)

The effect re-runs whenever any of its dependencies change. So every button click updates the document title.

The `<effect>` tag also lets us define a cleanup method by returning a function. This method run whenever the effect is re-run, or when it is finally released.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xwmmdaln95452s466tim.png)

### `<lifecycle>`

Sometimes it is easier to represent an external effect as lifecycles. For that reason, we are including the `<lifecycle>` tag.

The `onMount` callback is called once on the first mount and `onDestroy` when it is finally released. The `onUpdate` callback is not called on that initial mount, but whenever any of its dependencies of the `onUpdate` callback are updated.

The real power unlocked here is that you can use `this` to store references and manage your side effects as needed.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6jdib3uke8nxy7l1e2y3.png)

While the `<lifecycle>` tag looks a bit like a class component, it isn't intended to be used as a replacement. You can have multiple in a template and, like other tags, serves as a way to independently manage your application state.

### `<return>`

One of the best parts of the Tags API is we can use it to create our own custom tags. The `<return>` tag is used to return values from your tags.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ihvngn0lpcp5n2ltlzsg.png)

This is a simple example where we have just encapsulated an expression. However, we can return anything from our templates so we can use `<return>` to build many different types of composed Tag behaviors.

### `<set>` and `<get>`

These two form the pair for Marko's Context API, that lets us share data from parent templates without having to pass them through attributes directly.

The way this works in Marko is that the provider or `<set>` is keyed to the template it is in. And the `<get>` traces up the tree until it finds the nearest parent matching the requested tag name.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ic4vxxfmygj0hq4x6vkq.png)

### `<id>`

It is often very useful to have a unique identifier in your templates. It is even more useful to have the guarantee it will be the same when rendered on both client and server. The `<id>` tag is a simple way to achieve that.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wz2e6eq85x356klv3iuz.png)

---------

## Using the Tags API

The Tags API represents more than just a syntax change and some new features. It opens up new ways to develop with Marko.

### It's all Tags

We are embracing tags with Marko. Where you would have used a `$` (scriptlet) in the past you can use `<let>`, `<const>`, or `<effect>`. We are now treating the inline style tag similar to the style block.

Most things other than `import` can now be done with just tags.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vqvyxs1e33b6ulysjlzw.png)

### Keyless

With new explicit syntax we have removed most use cases for the `key` attribute. We now can access our DOM references directly as variables.

The one place where the need remains is in loop iteration. For that reason, in Tags API the `<for>` tag has a `by` attribute.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7c71yd5ese2oftz78b4s.png)

This allows us to set a key from the data passed in without marking a key on the child tags.

### Co-location

The real power the Tags API opens up is composability and refactorability. Using template scope we can now have nested State without necessarily breaking out different components.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jubatz3161p91o5nrnym.png)

This state only lives for as long as that loop iteration is rendered. If we wanted to extract this into a separate template we could just cut and paste it.

### Controllable Tags

When dealing with forms and tag wrappers there are a few different options on how to manage your state. Either the child controls the state(uncontrolled) or the parent does(controlled).

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pqeme7nn8qtnv8oha6ou.png)

It is often difficult to define both behaviors without ending up with inconsistency. In the uncontrolled, form the parent can only set the initial value and any further updates to the props don't reflect. In controlled form, if the change handler is omitted the parent gets out of sync. 

Marko's binding enables authoring the tag in a way where the parent can decide which mode it prefers simply by opting in.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vc2svgsd90dgd8q801vg.png)

Binding to the `<let>` allows the use of local state when the parent isn't bound or to connect directly to the parent's state when it is available. With a simple modification of our uncontrolled example now the parent can simply opt-in by choosing to bind or not.

### Binding `<return>` and `<set>`

We can also use binding with `<return>` and `<set>` to expose the ability to assign new values. Consider creating a new `<let>`-like tag that stores in local storage.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0u3p8tnon17gvamru0jn.png)

This leverages our new binding operator by binding the `<return>`. This counter works like our previous examples, incrementing on button click. But whenever you reload the page the count will be loaded from `localStorage` and continue from where it left off.

-------

## Available Today

The [Marko Tags API Preview](https://github.com/marko-js/tags-api-preview) is available today and works simply by including it in your projects. Files that use the new syntax will be opted in automatically.

Keep in mind this is just a preview and may change before the final version gets brought into Marko 5 and Marko 6. We believe the best way to refine the new patterns this brings is to put them in developers' hands. Your hands, to see what this means for how you author templates and think about how you approach your applications.

We are really excited about what this means for Marko. We are looking for your feedback. We are sure there will be a few kinks to work through and wrinkles to iron out. But your contribution could shape the future of [Marko](https://markojs.com/).

----------
**Cover illustration by @tigt**
