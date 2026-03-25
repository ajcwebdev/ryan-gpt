---
title: "Server Rendering in JavaScript: Optimizing Performance"
description: "If you read Server Rendering in JavaScript: Optimizing for Size you might be wondering what else is..."
slug: "server-rendering-in-javascript-optimizing-performance-1jnk"
url: "https://dev.to/ryansolid/server-rendering-in-javascript-optimizing-performance-1jnk"
publishDate: "2021-02-25"
tags:
  - "javascript"
  - "webdev"
  - "webperf"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ff2zlwofk3yhr7z14utlq.jpeg"
socialImage: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ff2zlwofk3yhr7z14utlq.jpeg"
---

If you read [Server Rendering in JavaScript: Optimizing for Size](https://dev.to/ryansolid/server-rendering-in-javascript-optimizing-for-size-3518) you might be wondering what else is left. After all, size is a big part of performance, and partial hydration actually reduces execution.

There are a couple more things that can be done. The key to good performance on load is reducing the wait time due to communication. Obviously caching can go miles, but there are always cases where we can't cache. So what else can we do?

# Fetch as You Render

Now, like code-splitting, this technique is not limited to server rendering. This is by far the most important thing any app can do to reduce waterfalls and also the thing that over time has become less common. 

The idea is simple. When navigating to a new route, fire off any async data loading upfront as you start rendering your components. Simple enough. However, component architectures have moved us to co-locate data requests with the domain components that need them. This modularity keeps things clean and maintainable.

And I don't mean just nested requests. It could be events dispatched to a global store. It could be representing your data requirements as fragments for GraphQL. Basically who better to know the data requirements of a portion of your UI than the components that use them.

![Waterfalls!!](https://dev-to-uploads.s3.amazonaws.com/i/tqaalnzbp5vuppaig5a1.png)

However, then we added code splitting to the equation and now those requests aren't being triggered until after the code for that section loads. In [Server Rendering in JavaScript: Why SSR?](https://dev.to/ryansolid/server-rendering-in-javascript-why-ssr-3i94) I explained how preloading the resources on the page can remove that cascade, but that doesn't help us on the next navigation. Well, preload that too... Maybe.

There is an alternative here. Separate the data loading from the view component. Make this wrapping Component trigger the data loading and lazy load the view component and render as it comes back. React Suspense is a great example of how to handle this, but there are many ways to achieve something similar.

```js
// ProfilePage.js
const ProfileDetails = lazy(() => import("./ProfileDetails.js"));

function ProfilePage() {
  // This is not a Promise. It's a special object
  // from a Suspense integration.
  const resource = fetchProfileData();
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <ProfileDetails user={resource.user} />
    </Suspense>
  );
}

// ProfileDetails.js
function ProfileDetails(props) {
  // Try to read user info, although it might not have loaded yet
  const user = props.user.read();
  return <h1>{user.name}</h1>;
}
```
> Above is an example is based on React's [experimental data-fetching docs](https://reactjs.org/docs/concurrent-mode-suspense.html). But you can see we can fire both the lazy component and the data fetch at the same time and it will resolve itself no matter what order these come in.

The benefit of this is it can work universally, client-only or server-rendered. Unlike route preloading, it works on future navigations too. It comes at the cost of a tiny bit additional size in the main bundle for the wrapping Page Component(HOC). 

The trickier part might be that taken to the extreme, each component defining their data requirements, requires a special type of API to be able to avoid cascading calls. In the example above, I'm just loading data at the page level. If that user had posts that I wanted to display from a different API endpoint I'd either have to bring them up to the parent page or find a way have the children register their requirements.

[GraphQL Fragments](https://www.apollographql.com/docs/react/v2/data/fragments/) comes to mind. Although it isn't the only solution, this does put big requirements on the API client service. [Facebook's Relay](https://github.com/facebook/relay) is a prime example of trying to make this easy for the end-user but it isn't without adoption consideration. It was enough of a concern for React to consider coming up with an API-less solution with [React Server Components](https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html).

The key thing to understand though is this is not a React-only approach. I make heavy use of this pattern in my [Solid](https://github.com/ryansolid/solid) projects as it makes a really nice isomorphic solution and works really well with the next topic...

# Streaming (Progressive Rendering)

There is one more topic I want to cover. Not WebSockets or anything fancy, just good old chunked transfer encoding. This one doesn't get enough attention. Instead of sending your response back to the browser in a single burst, we can stream the HTML string as we are able.

While you may have heard this thrown around for a while, almost no the JavaScript Frameworks support streaming in a meaningful way. They may have their `renderToNodeStreams` but without the ability to do real async rendering on the server it is not as impactful. They might send the document head early to get assets loading faster, but the rest of the benefits are lost.

The benefits are considerable. First of all, we aren't waiting to send content to the user. Early visual feedback can make the website seem much more responsive. Also, the browser can start loading assets sooner because it can start parsing the HTML sooner. This includes images on the page.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/strm6tlc0vcjc5xzwcbu.gif)

## How it works

What makes this whole thing possible is browsers will eagerly render even drawing elements that they haven't yet received their closing tags and execute scripts inline as you send them on the page. I will describe how this works in [Marko](https://markojs.com/).

We start by rendering the synchronous content and rendering placeholders on async boundaries. Many libraries already have methods to do this with `Suspense` or `Await` tags. Then, when the data returns from the async request, you render the content on the server and send it along to the page after the previous content in a `<div>` with `display: none`. We then write a `<script>` tag to insert the new nodes where the placeholder is and to bootstrap the serialized data for hydration. When all async data is complete we send the end of the page and close the stream.

[This 2014 article](https://tech.ebayinc.com/engineering/async-fragments-rediscovering-progressive-html-rendering-with-marko/) from the author of Marko goes into much more detail on how this works. When combined with partial hydration the page can often become interactive immediately without waiting for more JavaScript to load. Beyond the performance benefits, even though it is a dynamic experience it still works with SEO when no JavaScript is executed on the page(content is there just out of order).

## Streaming Performance

So just how performant can this be? I used [Solid](https://github.com/ryansolid/solid) to render the same simple application in multiple different techniques. Compare what waiting for resources looks like as you find in your common frameworks like Nextjs, Nuxt, SvelteKit:

[![Async](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/80u6dovdz5orfrlvv03j.png)](https://i.postimg.cc/DZfnp6mk/Async.png)

To the same page loading with streaming:
[![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3zl7mb5e251yvt4ujnp6.png)](https://i.postimg.cc/nVPpTvJg/Streaming.png)

Not only are getting much faster first paints coming in at the 180ms mark instead of 450ms. The overall loading profile shrinks because the JavaScript used for hydration is already loaded. The streaming example is basically all done at 260ms where the one where we wait takes up to 500ms to complete its execution.

This often is why people mistakenly assume client-side rendering can have better performance than SSR. The same page loaded with client-only rendering can decimate the typical wait for data SSR solution. And if you render the synchronous app shell first well it looks about the same timeline as streaming.

[![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bkae651ez4pa2s1i92zg.png)](https://i.postimg.cc/hv6njqsc/Client.png)

Now you might be thinking. Well, I don't need streaming then, I can just lazy render the shell and fetch data from the client. I mean this example even has cascading data requests from the browser. It doesn't get worse than that for the client.

Yeah, about that... These tests so far have been on fast networks. On slower networks, it's a different story for the client. The difference between the server methods become proportionally less important but the client is left in the dust as we can see comparing streaming on "Fast 3G":

[![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xafyeu0nyoa84z2bbl4h.png)](https://i.postimg.cc/prpxRdDs/Streaming-Fast-3-G.png)

To our client rendered version:

[![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wy262rlhdl9oydcnfpmf.png)](https://i.postimg.cc/SsZqB9zX/Client-Fast-3-G.png)

Things have gotten a lot worse here. Our streaming example now takes 1320ms to load everything (except that favicon that is taking its sweet time to come in). But our previously equally performant client fetcher is in a different league. It won't be done loading and executing all that JavaScript until 2600ms. Yes over a second slower on a fairly trivial page. That is a tangible difference and it isn't even the slowest network.

Only streaming grants the best performance across the board for fresh dynamic content. As of writing this to my knowledge only [Marko](https://markojs.com/) and [Solid](https://github.com/ryansolid/solid) this feature.

But expect to see this coming to other libraries. Starting with [React Server Components](https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html). I'm positive others will follow.

# Conclusion

The past year for me has been a crazy journey learning the ins and outs of server rendering. I knew almost nothing to begin with and in the course of experimentation, studying other libraries, and writing my own implementation I've learned a ton.

My biggest takeaway is that JavaScript server rendering solutions have considerable work to do. Streaming, partial hydration, subcomponent hydration, server components, isomorphic async patterns. We are going to see some amazing things in the next year or so.

So while this brings my exploration to an end, it should be clear this is really only just the beginning.
