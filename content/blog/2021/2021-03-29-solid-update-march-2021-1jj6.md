---
title: "State of Solid - March 2021"
description: "It's been a while since I wrote a dedicated article on Solid. Mostly because the technology has been..."
slug: "solid-update-march-2021-1jj6"
url: "https://dev.to/ryansolid/solid-update-march-2021-1jj6"
publishDate: "2021-03-29"
tags:
  - "solidjs"
  - "javascript"
  - "webdev"
socialImage: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fw62rh0emviuqv3a9bdwh.png"
---

It's been a while since I wrote a dedicated article on Solid. Mostly because the technology has been stabilizing. However, that doesn't mean a lot hasn't been going on. In the name of visibility, I thought I'd draw your attention to the main ones.

# Hot Demo

https://hackernews.ryansolid.workers.dev/

{% twitter 1369238224233586691 %}

Showcasing all the technology I've been working on including SSR Suspense, Progressive (Streaming) rendering, Vite build (more on this later), all running from a Cloudflare worker.  

But the real deal is the showcase of this progressive rendering approach into seamless SPA navigation with parallel render-as-you-fetch. This Hackernews demo is probably the fastest isomorphic SPA version out there. 

{% twitter 1370428416944525313 %}

# Solid Playground now using Monaco

https://playground.solidjs.com/

Now uses the Monaco editor like other popular solutions out there. This means slicker editing and better styling. Big shoutout to @modderme123 and @amountonbrady for getting this out there.

# Vite Plugin Solid

https://github.com/amoutonbrady/vite-plugin-solid

{% twitter 1363117020250841092 %}

We've been working a lot on a new Solid starter to replace our current CRA fork. In the meanwhile, you can get started with this plugin thanks to the tireless work of @amountonbrady.

It has our latest approach to HMR a first in Solid dev. It does lose nested state but it maintains outer application, for super-quick updates in Vite.

# Solid Start

Speaking of Vite. Our new starter is in the works. It will support Solid's Progressive Rendering SSR out of the box, and automatic File-Based routing, with nested routes, automatic code-splitting, and parallelized fetch-as-you-render.

This is a true isomorphic experience with Suspense and concurrent rendering on both client/server.

We are also taking a page from SvelteKit with adaptors for different deployment environments.

We have a few more surprises in store before long including some features that will help getting started even easier including route-based API automation (for those looking for a return to the monolith). We will keep you posted as things progress.

# Testing and More

[Solid Jest](https://github.com/ryansolid/solid-jest)
[Solid Testing Library](https://github.com/ryansolid/solid-testing-library)
[Storybook Example](https://github.com/rturnq/solid-storybook-example/tree/storybook-solid)

There has been a desire to improve the testing story around Solid and now we have some options. Solid Jest expands capability for testing client and server versions of Solid. Solid Testing Library is the quintessential library for making testing easier.

Finally, @rturnq has put together an updated template of using Solid with Storybook.

# Community Growth

The last few months have seen a swell in adoptions. Last summer we hit 50k npm downloads since I first opened sourced the project in April 2018. Now we get that monthly. Solid has recently reached 5.5k stars on Github but most importantly is reaching a level of contributors similar to popular libraries:

{% twitter 1376133750896091141 %}

# Podcasts

I'm always writing articles but I've finally got the change to appear on some podcasts and youtube channels. If you missed it here is a great one on reactivity with InDepth:

{% twitter 1372153333352386561 %}

And another one I did recently with @Zaiste:

{% twitter 1374419381841661957 %}

Tomorrow I will be joining [Maksim Ivanov](https://www.youtube.com/channel/UC5hby9iDkwOTQM7PIjyjbgw/videos) to see what it takes to migrate a React app to Solid.

{% twitter 1376504483283402752 %}

# Solid 1.0

https://github.com/ryansolid/solid

It's coming. APIs are stabilizing. The website with docs and interactive tutorials is well in the works. Solid 1.0 Release Candidate is slated to go out early next month.

------------

I think that's all for now. With a bit of luck, these sorts of updates will be a more regular thing.
 
