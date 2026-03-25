---
title: "A First Look at MarkoJS"
description: "As some of you may know I recently joined the Marko team, but I've been working on a future version..."
slug: "a-first-look-at-markojs-3h78"
url: "https://dev.to/ryansolid/a-first-look-at-markojs-3h78"
publishDate: "2020-11-03"
tags:
  - "javascript"
  - "webdev"
  - "tutorial"
  - "marko"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fru0u025s4lscqovj5mg6.png"
socialImage: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fru0u025s4lscqovj5mg6.png"
---

> As some of you may know I recently joined the Marko team, but I've been working on a future version and haven't actually got to dig into the current. So join me as I learn about how Marko works.

Today we are going to look at building a simple application using [MarkoJS](https://markojs.com/). What is [MarkoJS](https://markojs.com/) you ask? It's JavaScript UI Framework developed at eBay in 2013 with a keen focus on server side rendering. More than being built at eBay, the majority of eBay is built on it.

If you haven't heard of it before you are in shared company. Even though built by a larger tech company, Marko has never had the exposure or carried the same clout as libraries like React or Angular.

Marko has its unique heritage and has very obviously inspired libraries like Vue or Svelte. But most amazingly is the things it has done best since the beginning it is still the best at half a decade later. Things like [automatic partial hydration](https://medium.com/@mlrawlings/maybe-you-dont-need-that-spa-f2c659bc7fec), [streaming while you load/render](https://tech.ebayinc.com/engineering/async-fragments-rediscovering-progressive-html-rendering-with-marko/), and having the [fastest JS Framework server rendering](https://github.com/marko-js/isomorphic-ui-benchmarks).
 

# Getting Started

Going to the website at https://markojs.com/ I can see right away Marko uses Single File Components similar to Vue and Svelte*. The second thing I notice is the syntax is a bit unusual.

```html
<div.count>
  ${state.count}
</div>
<button.example-button on-click("increment")>
  Click me!
</button>
```
It looks like HTML but it has additional special syntax on the tags. Marko views itself as markup-based language. A superset of HTML. This is like the antithesis of "It's just JavaScript". 

It makes sense since Marko has its roots in server side template languages like Jade, Handlebars, or EJS. And that has influenced its design immensely, and also served as a high bar to reach in terms of SSR rendering performance.

> *Note: Marko does support splitting a component across multiple files if desired: https://markojs.com/docs/class-components/#multi-file-components

# Trying My First Sample App

So let's take the Marko CLI for a test run. You can get started with Marko with:

```
npx @marko/create
```
There is a short interactive cli asking for project name and what template I'd like to use. Let's choose the default template.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/7v8zqxlj5gr8azx67fmx.png)

This creates a template with a basic folder structure already built. It looks like a pretty standard setup with a `src` directory with `components` and `pages` directories. Firing it up in VSCode it looks like:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/htphl42jpqzgzwlbouy0.png)

# Exploring the Project

The first thing I guess to notice is there is no `index.js`. No entry point. It appears that Marko is built with Multi-Page Apps in mind. You just make a page in the `Pages` directory and that is your route.

There is an `index.marko` which serves as the landing page:
```html
<app-layout title="Welcome to Marko">
  <mouse-mask.container>
    <header>
      <img.logo src="./logo.svg" alt="Marko"/>
    </header>
    <main>
      <p>Edit <code>./pages/index.marko</code> and save to reload.</p>
      <a href="https://markojs.com/docs/">
        Learn Marko
      </a>
    </main>
  </mouse-mask>
</app-layout>

style {
  .container {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size:2em; 
    color: #fff;
    background: #111;
    height:100%;
    width:100%;
  }
  img.logo {
    width:400px;
  }
}
```
This page has a markup block and a style block. The markup starts with layout components that wrap the content of the page which seems to be a logo and docs site link.

Looking at the app-layout component we do in fact see our top level HTML structure:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="A basic Marko app.">
  <title>${input.title}</title>
</head>
<body>
  <${input.renderBody}/>
</body>
</html>

style {
  html, body {
    font-family: system-ui;
    padding: 0;
    margin: 0;
  }
  code {
    color: #fc0;
  }
  a {
    color: #09c;
  }
}
```
So the pattern seems to be an entry point for each page and we can share components between them to create common layouts and controls.

`input` is the equivalent to `props` in some libraries. And `input.renderBody` looks to be the replacement for `props.children`. There is a subtle difference in that you can think of `renderBody`'s as function calls. The children aren't created until that part of the template is executed.

The last component mouse-mask does some manipulation of the mouse input to create an interesting visual effect over our logo. Not going to focus on that for the moment though. Let's just run the example.

# Running the Example

We can startup Marko's Dev server by running:
```
npm run dev
```

This automatically starts it building in watch mode and serving our files over port 3000. Loading it in the browser, we can see as we move our mouse over the page we can see the visual effect.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/71zh2wpqg6ineu6cgdgu.png)

We can also try the production build with `npm run build`
And then view it using `npm start`. A quick view in the chrome inspector shows this simple example weighs in at 15.2kb. Looking at the chunks it is fair to say Marko weighs in around 13kb.

Not the smallest library but that is comparable to Inferno, or Mithril and comes in under any of the most popular libraries.

# Making it my Own

That's all fine. But I want to make my own site out of this. So I deleted everything except the `app-layout` component and emptied the Marko template.

I'm no CSS expert but I figured I could throw together a quick directory for a personal blog inspired by the design of a popular developer's blog:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/jgizg0ubyzlf15kcybeb.png)

For this exercise I just threw some data at the top of the `index.marko` file. I also included a function to properly format the dates.

```js
static const POSTS = [
  {
    title: "Making Sense of the JS Framework Benchmark",
    caption: "A closer look at the best benchmark for JS Frameworks",
    link: "https://dev.to/ryansolid/making-sense-of-the-js-framework-benchmark-25hl",
    date: "10/29/2020",
    duration: 9
  },
  {
    title: "Why I'm not a fan of Single File Components",
    caption: "Articial boundaries create artificial overhead",
    link: "https://dev.to/ryansolid/why-i-m-not-a-fan-of-single-file-components-3bfl",
    date: "09/20/2020",
    duration: 6
  },
  {
    title: "Where UI Libraries are Heading",
    caption: "Client? Server? The future is hybrid",
    link: "https://dev.to/ryansolid/where-web-ui-libraries-are-heading-4pcm",
    date: "05/20/2020",
    duration: 8
  },
  {
    title: "Maybe Web Components are not the Future",
    caption: "Sometimes a DOM element is just a DOM element",
    link: "https://dev.to/ryansolid/maybe-web-components-are-not-the-future-hfh",
    date: "03/26/2020",
    duration: 4
  },
]

static function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
```
Notice the use of the word `static` as this tells Marko's compiler to run this once on loading the file and it exists outside of the template instance.

From there I added some markup to render this data. It's mostly HTML. Interestingly enough Marko doesn't need any sort of delimiter for attribute assignment. There are no `{ }` or the like.

```html
<app-layout title="Solidarity.io">
  <main class="container">
    <h1>Solidarity</h1>
    <aside class="intro-header">
      <img class="avatar" alt="avatar" src="https://pbs.twimg.com/profile_images/1200928608295849984/1A6owPq-_400x400.jpg">
      A personal blog by
      <a href="https://twitter.com/RyanCarniato" target="_blank">Ryan Carniato</a>
    </aside>
    <ul class="blog-list">
      <for|post| of=POSTS>
        <li class="blog-list-item">
          <h3>
            <a href=post.link target="_blank">${post.title}</a>
          </h3>
          <small>
            ${formatDate(post.date)} •
            <for|coffee| from=0 to=(post.duration/5)>
              ☕️
            </for> 
            ${post.duration} minute read
          </small>
          <p>${post.caption}</p>
        </li>
      </for>
    </ul>
  </main>
</app-layout>

style {
  .container {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: #333;
    height:100%;
    width:100%;
    min-height: 100vh;
  }
  .avatar {
    width: 50px;
    border-radius: 50%;
  }
  .blog-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .blog-list-item h3 {
    font-size: 1rem;
    margin-top: 3.5rem;
    margin-bottom: 0.5rem;
  }
  .blog-list-item a {
    color: light-blue;
    text-decoration: none;
    font-size: 2em;
    font-weight: 800
  }
}
```
The key to this example is using the `<for>` component. I use it both to iterate over the list of posts and to iterate over the range to show my cups of coffee (one per 5 mins of reading time).

This is definitely the biggest syntax difference:
```html
<for|post| of=POSTS>
  <a href=post.link>${post.title}</a>
</for>
```
What is this even doing? Well the pipes are something Marko calls [Tag Parameters](https://markojs.com/docs/syntax/#parameters). It is basically a way to do the equivalent of render props. If this were a React Component we'd write:
```jsx
<For of={POSTS}>{
  (post) => <a href={post.link}>{post.title}</a>
}</For>
```
And that's it. The end result is we have our simple blog landing page. Just to see how it looks I made the production build and ran it. Everything looks good. But I think the most noticeable thing is the JS bundle size.

**There is None**

Right, we didn't do anything that required JavaScript in the client so we didn't need to ship the Marko runtime or any bundled JS to the client. Marko is optimized out of the gate with no manual interference to only ship the JavaScript you need.

# Conclusion

Well this wasn't meant to be deep. Just a first look into running [MarkoJS](https://markojs.com/). 

I will say it definitely has a syntax to get used to. I think it is interesting that for a Tag based UI Language it has a lot of the same features you'd find in just JavaScript libraries. Patterns like HoCs(Higher Order Components) and Render Props seem to be perfectly applicable here.

The experience was so similar to developing in other modern JavaScript frameworks I forgot for a second it was server oriented that defaults to shipping minimal JavaScript to the browser. In our case since this was completely static there as no JavaScript sent.

I'm a client-side oriented at heart so this was definitely a departure for me. No JavaScript by default is a new world of possibilities for a whole category of sites.

I hope you will join me next time when I continue to explore [MarkoJS](https://markojs.com/) and unveil all its powerful features. 
