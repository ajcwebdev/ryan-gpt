---
title: "JSX is not HyperScript"
description: "When Facebook first introduced JSX there was a lot of confusion around it. What was this new syntax...."
slug: "jsx-is-not-hyperscript-61i"
url: "https://dev.to/ryansolid/jsx-is-not-hyperscript-61i"
publishDate: "2020-05-02"
tags:
  - "webdev"
  - "javascript"
  - "react"
  - "solid"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fbqc1gncxdhau0zfuxqmp.png"
socialImage: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fbqc1gncxdhau0zfuxqmp.png"
---

When Facebook first introduced JSX there was a lot of confusion around it. What was this new syntax. You want me to put my XML where? What about the separation of concerns? I feel like we have come a long way since then. So color me very surprised when I came across some really well respected and knowledgable people familiar with JSX who didn't seem to know what it is. Especially when Facebooks own documentation actually states it very clearly.

From [Draft: JSX Specification](https://facebook.github.io/jsx/):
>JSX is an XML-like syntax extension to ECMAScript without any defined semantics. 

From [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html):
> This funny tag syntax is neither a string nor HTML. It is called JSX, and it is a syntax extension to JavaScript.

I mean this is the very first line. JSX is a syntax extension to JavaScript. No more, no less. Stated very clearly with no room for interpretation. So what does that mean? Well, let's look at what JSX is not.

## 1. A Runtime

I have heard people mistakenly claim this as if the JSX was something that is executed. No JSX is a syntax that is compiled away. To what? It depends. Maybe it's compiled to `React.createElement`. Maybe to a HyperScript `h`. Maybe to an object tree structure. Maybe to `document.createElement`. It can be lots of things for different libraries. It is even slightly different for similar libraries. Preact's HyperScript can handle children arguments differently than `React.createElement`. And if you ever need to sort of double-check this fact yourself, find yourself a "JSX library" that doesn't work without JSX. They all work without JSX unless they do something around compilation. Basically there are no JSX libraries only HyperScript or React libraries.

## 2. A Language

JSX carries no defined semantics, it is just a syntax. It becomes no clearer when you consider the difference between different libraries that support JSX. There is a reason React Compat exists. React Compat is layer for similar libraries like Preact or Inferno to retain compatibility with how React works. This often touches on specifics around JSX binding. While using JSX to represent an HTML-like structure does carry some expectations of semantics that's really the extent that one can take it. The implementation can differ from library to library. JSX does not equal implementation details. `dangerouslySetInnerHTML` or the fact you use `htmlFor` to set labels in React is not part of the specification.

## 3. A Virtual DOM

This one is not too far to see if you have been following so far. HTML and the DOM are not the same things. As JSX and the thing it represents are not. JSX is most commonly used to make a Virtual DOM but nothing stops it from being used to make actual DOM nodes. SolidJS(https://github.com/ryansolid/solid) is such a library that uses JSX compilation and reactivity to create UIs without a Virtual DOM. JSX is a great DSL in that it has TypeScript, Babel, Code Highlighting, Prettier, support right out of the box. Why learn a new syntax and use different tools when you have the whole ecosystem behind you? Why build out a new syntax?

## So what is JSX?

A syntax extension for JavaScript that can generate code for compatible runtimes to create a language you can use to build your Virtual DOM. Or not. It just happens to do that most of the time. JSX is not any of those things but it enables all of them. And that's why it's so powerful.
