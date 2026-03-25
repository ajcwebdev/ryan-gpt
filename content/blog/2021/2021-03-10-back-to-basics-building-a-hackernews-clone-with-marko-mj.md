---
title: "Back to Basics: Building a HackerNews Clone with Marko"
description: "I've used a lot of frontend frameworks over the years for demos and benchmarks. But they all had one..."
slug: "back-to-basics-building-a-hackernews-clone-with-marko-mj"
url: "https://dev.to/ryansolid/back-to-basics-building-a-hackernews-clone-with-marko-mj"
publishDate: "2021-03-10"
tags:
  - "javascript"
  - "webdev"
  - "tutorial"
  - "marko"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fcr082xilzdghaclz1mez.png"
socialImage: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fcr082xilzdghaclz1mez.png"
---

I've used a lot of frontend frameworks over the years for demos and benchmarks. But they all had one thing in common. They were made primarily for Single Page Apps (SPA). 

Since I joined the [Marko](https://markojs.com) team I noticed we lacked a lot of the common examples you find in other frontend frameworks. And I figured implementing them could teach more about how current Marko works (while I'm occupied working on the next version).

I wanted to do a demo that was a bit more substantial than a TodoMVC. Something that had routing and API requests. But not something that was going to be too involved like Realworld Demo. So Hackernews (https://hnpwa.com/) seemed like the perfect fit.

This article aims to provide you the context to get a feel for authoring in Marko. I will share my thoughts at the end at how this experience changed my perspective on web development.

# Getting Started

The easiest way to get started with Marko is to use the CLI. I ran `npx @marko/create` and selected the basic template. I immediately emptied the page and component folders and I was good to go.

> Interested to learn more about getting started with Marko CLI? Read [A First Look at MarkoJS](https://dev.to/ryansolid/a-first-look-at-markojs-3h78)

First thing I set up was an app layout component in my `components` folder. This was the first indicator things were going to be very different:
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="description" content="Marko Hackernews"/>
    <title>Marko - Hacker News</title>
  </head>
  <body>
    <header class="header">
      <nav class="inner">
        <a href="/">
          <strong>HN</strong>
        </a>
        <a href="/new">
          <strong>New</strong>
        </a>
        <a href="/show">
          <strong>Show</strong>
        </a>
        <a href="/ask">
          <strong>Ask</strong>
        </a>
        <a href="/job">
          <strong>Jobs</strong>
        </a>
        <a class="github" href="http://github.com/marko-js/marko" target="_blank" rel="noreferrer">
          Built with Marko
        </a>
      </nav>
    </header>
    <${input.renderBody}/>
  </body>
</html>
```
I was using the React and Solid implementations for reference and the very first thing I realized was that there is no client-side routing needed. No `<Link>` or `<NavLink>` component. I literally just wrote some `<a>` tags. I mean I haven't done this for so long it felt weird. It was literally like writing an index.html file back in the day except I indicated where I wanted my content inserted by `<${input.renderBody}/>`

I appended my global styles to the bottom of the file as these demos tend to use global CSS to make it approachable (in our case we are theming it the same as the [Vue HN example](https://github.com/vuejs/vue-hackernews-2.0)). 

The other thing I knew was I'd need to tap into API. I made a small helper file in a `lib` folder to create my requests against the node-hnapi. I chose this one as it reduces the number of individual requests. It doesn't support the "users" api so I used the original firebase one for that.

This was pretty much copy and paste from my other implementations:
```js
import fetch from "node-fetch";

const mapStories = {
  top: "news",
  new: "newest",
  show: "show",
  ask: "ask",
  job: "jobs",
};

const get = (path) =>
  fetch(path, {
    headers: { "User-Agent": "chrome" },
  }).then((r) => r.json());

export function getStory(id) {
  return get(`https://node-hnapi.herokuapp.com/item/${id}`);
}
export function getUser(id) {
  return get(`https://hacker-news.firebaseio.com/v0/user/${id}.json`);
}
export function getStories(type, page) {
  const l = mapStories[type];
  if (!l) return [];
  return get(`https://node-hnapi.herokuapp.com/${l}?page=${page}`);
}
```
There are is some weirdness here around user agent as these APIs reject fetches from the server unless you fake it. A lot of things I've hit before in these demos but really nothing out of the ordinary with Marko.

I have a lookup to map the page URLs to the API endpoint and I decided to use `node-fetch` for my server-side fetching.

And that was it for my layout and API. Now to make the first page.

# Building the Stories Page

The majority of this demo are pages that list all the stories for a given topic. So I started there. Marko's CLI with its automatic route detection let me name my page `:stories` which serves as a catchall and passes anything that matches `/:stories` to my page.

```html
import { getStories } from "../../lib/api"

static function getPage(query) {
  if (!query || !query.includes("page")) return 1;
  return +query.split("=")[1];
}

$ const page = getPage(input.query);
<app-layout>
  <div class="news-view">
    <await(getStories(input.params.stories || "top", page)) client-reorder>
      <@then|stories|>
        <div class="news-list-nav">
          <if(page > 1)>
            <a
              class="page-link"
              href=`${input.pathname}?page=${page - 1}`
              aria-label="Previous Page">
              < prev
            </a>
          </if>
          <else>
            <span class="page-link disabled" aria-hidden="true">< prev</span>
          </else>
          <span>page ${page}</span>
          <if(stories.length === 30)>
            <a
              class="page-link"
              href=`${input.pathname}?page=${page + 1}`
              aria-label="Next Page">
              more >
            </a>
          </if>
          <else>
            <span class="page-link" aria-hidden="true">more ></span>
          </else>
        </div>
        <main class="news-list">
          <ul>
            <for|story| of=stories>
              <story story=story/>
            </for>
          </ul>
        </main>
      </@then>
      <@placeholder>
        <div class="news-list-nav">Loading...</div>
      </@placeholder>
    </await>
  </div>
</app-layout>
```

The template on this page starts by using our layout. And from there uses an  `<await>` tag to fetch our data and handle placeholders. This is similar to Svelte's `await` or React's Suspense. 

Marko uses this idea of tag attributes `<@__>` similar to render props in React so it was really easy to pass dynamic markup into our components and pass arguments to them. So `<@then|stories|>` basically works like a function call. In JSX it would be the same as:
```jsx
<Await
  promise={getStories(input.params.stories || "top", page)}
  then={(stories) => <main>...</main>}
  placeholder={<div class="news-list-nav">Loading...</div>}
/>
```

I included a couple of helpers to inspect the `input` parameters coming in from the URL so that I could get the page number off the query. This way we can handle pagination. You will see 2 new syntaxes here. Firstly `static` is used to indicate that the function is part of the component declaration and is only created once for all instances. The second is `$` which allows us to insert JavaScript expressions anywhere in the template.

So far this page doesn't feel very different than other libraries. I was mostly able to just copy and paste this into the `<await>` tag and change the conditionals and loop to use Marko's `<if>` and `<for>`. 

As for the stories themselves I made a re-usable `story` component and within a couple mins had converted the JSX from my other implementations into this:
```html
<li class="news-item">
  <span class="score">${input.story.points}</span>
  <span class="title">
    <if(input.story.url)
    >
      <a href=input.story.url target="_blank" rel="noreferrer">
        ${input.story.title}
      </a>
      <span class="host"> (${input.story.domain})</span>
    </if>
    <else>
      <a href=`item/${input.story.id}`>${input.story.title}</a>
    </else>
  </span>
  <br />
  <span class="meta">
    <if(input.story.type !== "job")
    >
      by <a href=`users/${input.story.user}`>${input.story.user}</a> 
      ${input.story.time_ago} | 
      <a href=`stories/${input.story.id}`>
        ${input.story.comments_count ? `${input.story.comments_count} comments` : "discuss"}
      </a>
    </if>
    <else>
      <a href=`stories/${input.story.id}`>${input.story.time_ago}</a>
    </else>
  </span>
  <if(input.story.type !== "link")>
    <span class="label"> ${input.story.type}</span>
  </if>
</li>
```
Rename `props` to `input` here and replace a ternary with `<if>` and `<else>` there, replace `<Link>`s with simple `<a>` tags and we are set.

At this point, the app actually mostly works. The page loads up and you can see the loading state and then the content fills in. Can't click into a story, or view the user yet, but navigation and pagination are done. Really simply from file-based routing system and just reading the query off the `input`.

# The Other Pages

Other pages mostly follow the same pattern. The story page also requires a dynamic route. So under the pages directory, I made `stories/:id`. Similar exercise again but a bit simpler as there are no URL query parameters.

```html
import { getStory } from "../../../lib/api";

<app-layout>
  <await(getStory(input.params.id)) client-reorder>
    <@then|story|>
      <div class="item-view">
        <div class="item-view-header">
          <a href=story.url target="_blank">
            <h1>${story.title}</h1>
          </a>
          <p class="meta">
            ${story.points} points | by 
            <a href=`users/${story.user}`>${story.user}</a> 
            ${story.time_ago} ago
          </p>
        </div>
        <div class="item-view-comments">
          <p class="item-view-comments-header">
            ${story.comments_count
              ? story.comments_count + " comments"
              : "No comments yet."}
          </p>
          <ul class="comment-children">
            <for|comment| of=story.comments>
              <comment comment=comment />
            </for>
          </ul>
        </div>
      </div>
    </@then>
  </await>
</app-layout>
```
Again we have a nested component for the comments very similar to how we had for the stories that the compiler automatically detects and imports.

So far this has been mostly an exercise in templating and I've been able to cut and paste basically HTML. The comment component is the first one where we see some local state.
```html
static function pluralize(n) {
  return n + (n === 1 ? " reply" : " replies");
}

class {
  onCreate() {
    this.state = {open: true};
  }
  toggleOpen() {
    this.state.open = !this.state.open;
  }
}

<li class="comment">
  <div class="by">
    <a href=`users/${input.comment.user}`>${input.comment.user}</a> 
    ${input.comment.time_ago} ago
  </div>
  <div class="text">$!{input.comment.content}</div>
  <if(input.comment.comments.length)>
    <div class=`toggle ${state.open ? "open" : ""}`>
      <a onclick("toggleOpen")>
        ${state.open
        ? "[-]"
        : "[+] " + pluralize(input.comment.comments.length) + " collapsed"}
      </a>
    </div>
    <if(state.open)>
      <ul class="comment-children">
        <for|comment| of=input.comment.comments>
          <comment comment=comment/>
        </for>
      </ul>
    </if>
  </if>
</li>
```
We define a class with `onCreate` and a `toggleOpen` event handler. We add our event handler to an anchor on our comment to toggle its visibility when clicked. It's a simple example but gives the page a little interactivity and convenience.

Adding the users page is the same thing. And in the end, our demo is 7 files. 3 pages, 3 components, and 1 service library. You can view the full source here, https://github.com/ryansolid/marko-hackernews.

# Thoughts

I took this repo and deployed it to Heroku in a matter of minutes and the final demo can be found: https://marko-hackernews.herokuapp.com/

This was the easiest HackerNews port I've ever done. I'd never used most of these Marko features before and I had this all done in about an hour. It might not be a SPA so I do occasionally notice a bit of a content flicker on navigation but the pages load fast even as I simulate the slowest networks. Dropping the client-side routing for simple `<a>` tags and having the power of `<await>` made things so easy.

Possibly the coolest thing about this was, save for adding `node-fetch` for the server, I wasn't really thinking of client vs server. I just wrote my app. And what Marko did with it is kinda cool.

I encourage you to look at the network tab in your browser debugger. You can see the pages load fast and the content stream in as it finishes, but there is no JavaScript sent to the page. I have all the non-blocking async loading characteristics I'm used to fetching on the client with something like Suspense, but *0kb of JavaScript*.

Technically, there is some JavaScript inlined as it renders to swap in the content but this not something the end user needs to wait on. In fact, except for the hiding of comments on the story page, the Marko runtime isn't even sent to the browser. Pages progressively streamed in as soon as content was available with no need for any Hydration on most pages.

The crazy part was I wasn't even thinking about this during development. I just wrote my app the way I approach any client-side app and this was automatically handled for me. I wasn't thinking this is client-side, how do I make this work in SSR. I wasn't thinking this is server-side how I could incorporate a JS library like Stimulus or Alpine on my server-rendered code. I just wrote markup.

I had to sit for a moment to have this sink in. I've never experienced anything like this. It wasn't only absurdly easy to develop it felt completely natural that I forgot the browser and the server were different things and was only awoken to that fact when I realized there was no JavaScript being sent to the browser on most pages.

# Conclusion

Marko is a marvel. Honestly, this experience changed my perspective greatly. I understood personally this sort of thing hasn't been my target as I've been making highly interactive apps, social media, etc.. If I was making eCommerce, blogs, or content sites this is a no-brainer. The experience is so simple, and the page-render performance is unparalleled.

SPAs definitely have their benefits but there are a class of sites that don't need them. Compared to most tools that slant either to the browser and the server, Marko is the first I've used where it wasn't only natural but I wasn't preoccupied with it.

The fact that it uses performance techniques for server rendering that outshine anything else on the JavaScript framework side of things was just a bonus. Although it became clear how that is the key to why Marko works here where others would have failed.

We will see more of this in other frameworks soon. Of that I'm sure. It's too good to be overlooked any longer (even if we've been sleeping on it since 2013).
