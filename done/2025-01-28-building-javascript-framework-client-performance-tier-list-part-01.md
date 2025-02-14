---
showLink: "https://www.youtube.com/watch?v=E5amN0_1XyE"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Building JavaScript Framework Client Performance Tier List"
description: ""
publishDate: "2025-01-28"
coverImage: "https://i.ytimg.com/vi/E5amN0_1XyE/sddefault.jpg"
---

## Episode Description

A lively breakdown of JavaScript framework performance evolution, spanning from Knockout and Backbone to the latest signal-driven and compiled solutions.

## Episode Summary

In this discussion, the speaker explores how various JavaScript frameworks have approached rendering performance over time, focusing on how architectural decisions and optimizations affect speed in the browser. Beginning with early declarative libraries like Knockout and Backbone, the conversation moves through milestones such as React’s virtual DOM, Angular’s shift to a more modern structure, and Vue’s fine-grained reactivity under the hood. The speaker highlights the relevance of signals, dirty-checking systems, and compiler-driven methods, explaining why these techniques matter for granular updates and smoother user experiences. In addition to covering legacy and cutting-edge frameworks, the speaker also touches on Rust-based options like Leptos, demonstrating how language and compilation choices factor into performance gains. Each segment provides a snapshot of how the ecosystem has tackled the challenge of rendering complexity, revealing a broader story of incremental and sometimes surprising leaps toward more efficient client-side applications.

## Chapters

### 00:00 - 05:50 • Early Declarative Approaches

In this opening segment, the speaker sets the stage by clarifying that the focus is purely on client-side rendering and performance rather than server-side frameworks. The conversation starts with a nod to libraries like Knockout, Backbone, and AngularJS, pointing out how these early solutions approached template binding and DOM updates. While Knockout introduced a fine-grained reactivity system, it still suffered from slow initial rendering. The speaker references the “god tier” nostalgia of jQuery and vanilla JavaScript, but quickly shifts to the realities of how these older frameworks handle updates and reflows.

A historical perspective unfolds on the progression from purely manual DOM manipulation to increasingly declarative patterns. By situating React as a pivotal reference point, the speaker creates a baseline for comparing how each tool handles rerenders. This comparison includes a discussion of how smaller libraries tried to improve on performance, using techniques such as signals for pinpoint updates. Although these foundational frameworks often struggled with large-scale DOM manipulation, they remain significant for how they paved the way for what would come later.

### 05:50 - 11:00 • Setting React as the Baseline

Next, the speaker establishes React as the crucial “D-tier” benchmark against which other libraries are measured. Despite React’s widespread adoption and influence, it lands in a middling position on the performance scale. The virtual DOM concept is lauded as a major breakthrough in 2014, significantly outperforming the older, more clunky approaches. However, the speaker explains that React’s architecture inherently carries overhead in certain update scenarios, which becomes a recurring theme in the discussion.

During this period, the speaker also notes how frameworks like AngularJS, Ember, and other lesser-known libraries lined up against React, often lagging in raw speed. Ember’s continuous rewrites never fully addressed its performance shortcomings, and AngularJS’s dirty-checking logic proved costly. The conversation draws attention to the fact that many libraries attempted to solve similar problems but arrived at different trade-offs, creating a colorful mosaic of performance and developer experience approaches.

### 11:00 - 17:00 • Post-React Innovations

Entering the mid-2010s, the speaker looks at how frameworks such as Vue, Riot, and Mithril emerged to refine the virtual DOM approach. Vue, in particular, garnered praise for its signals-based underpinnings that nudged its performance beyond React, establishing it as a “C-tier” contender. Mithril also surfaces as an interesting case, employing a more direct functional style to deliver faster rendering than some of its peers.

The speaker describes this era as a cycle of incremental improvements and optimizations. Libraries aimed to reduce overhead, integrate single-file components, and refine data flow. Although these advancements nudged performance upward, they typically hovered one notch above React rather than leapfrogging into entirely new territory. The result was a crowded field of libraries fighting for incremental gains, each introducing slight variations in how they handled reactivity and templating.