---
showLink: "https://www.youtube.com/watch?v=O2kFXlNSdn0"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Netlify and Vercel and Cloudflare, Oh My!"
description: ""
publishDate: "2021-11-13"
coverImage: "https://i.ytimg.com/vi/O2kFXlNSdn0/hqdefault.jpg?v=618ea61c"
---

## Episode Description

Ryan Carniato surveys modern deployment platforms—Netlify, Vercel, and Cloudflare—sharing hands-on Solid Start demos, edge-function insights, and reflections on JavaScript framework trends.

## Episode Summary

In this nearly three-hour livestream, Ryan revisits his recent week in JavaScript, from React Router 6’s release and hooks debates with Sebastian, to Rich Harris’s “transitional apps” talk and the rise of islands/Multi-Page App frameworks like Astro, Quick, and Isle. He then traces his own deployment journey—from FTP through Heroku and AWS EC2 back to GitHub Pages—before demonstrating Solid Start on Netlify (both via “Deploy” button and CLI), Vercel’s new file-system API with edge adapters, and Cloudflare Workers. After summaries of platform specifics—build tees, adapter code, streaming vs non-streaming, and edge-function nuances—Ryan shifts gears into a deep conversation sparked by a Twitter thread on conditional hooks in React versus Solid and Svelte. He dives into reactivity philosophies, composition patterns, unidirectional data flow, and lessons from past frameworks (e.g., Flux in Facebook Chat). The stream closes with audience Q\&A on two-way binding, event handling, template syntax, and future topics, highlighting the trade-offs between ease-of-use and long-term maintainability in today’s ecosystem.

## Chapters

### 00:00:00 - 00:06:00: Introduction and This Week in JavaScript

In the first six minutes, Ryan opens with personal updates—returning after illness—and introduces the stream’s topic: deployment. He then segues into “This Week in JavaScript,” discussing his exchange with React core team member Sebastian over conditional hooks, conceding React’s hook rules have merit despite Solid’s flexibility. He touches on React Router 6’s release, noting its influence on Solid Router and similarity in API design, and shares experiences comparing Angular’s router, RxJS, and Solid’s approach.

The segment concludes with a nod to SvelteKit’s strides under Rich Harris’s leadership, previewing deeper dives. Throughout, he establishes context for why deployment matters now—both for Solid users and the wider jump from framework innovations to practical hosting considerations—setting the stage for a hands-on tour of Netlify, Vercel, and Cloudflare next.

### 00:06:00 - 00:12:00: Transitional Apps and Modern MPA Frameworks

Ryan unpacks Rich Harris’s “transitional apps” concept from Jamstack Conf, debating the umbrella of frameworks it covers and the critiques from classic MPA proponents. He reflects on the tension between Single-Page App (SPA) critics—who decry build steps and heavy JS—and the new generation of island-based, partial-hydration frameworks like Astro, Isle, Elder, and Slinkity, each aiming to minimize bundle size while preserving interactivity.

He discusses how SvelteKit, Next.js, and Solid Start fit into this landscape, applauding innovations yet cautioning against conflating disparate approaches. The chat lights up as Ryan contrasts marketing labels with underlying technical nuances, emphasizing that frameworks solving similar high-level goals may be fundamentally incompatible under the hood.

### 00:12:00 - 00:18:00: Personal Deployment History and GitHub Pages Woes

Turning personal, Ryan traces his early web days—from FTP and Perl guestbooks to his first professional role running QA on hardware—through the game-changer that was Heroku, praising its simplicity for spinning up dynos. He then spent nearly a decade on AWS, provisioning EC2 instances and experimenting with Lambda and edge functions.

Returning to front-end deployments, he recounts frustrations with GitHub Pages’ static-only model, longing for integrated build and function support. This narrative underlines why services like Netlify and Vercel, with one-click buttons and edge adapters, represent a pivotal evolution for modern JS developers seeking seamless CI/CD and global distribution.

### 00:18:00 - 00:24:00: Netlify Integration and the “Deploy to Netlify” Button

At roughly 18 minutes in, Ryan demos Netlify’s repo button: clicking “Deploy to Netlify” on a Solid starter repo. He praises how it scaffolds a project with a single click yet discovers a runtime error due to repo configuration, illustrating common pitfalls of relying solely on pre-built templates. The failure spurs him to dig into Netlify’s folder conventions and Environment settings.

He then introduces the Solid Netlify starter by Charlie Gerard—a community-maintained example adding the button to Solid’s `vite` template—and discusses why monorepo layouts complicate one-click integration. His impromptu troubleshooting captures the real-world experience of first-time deploys: excitement, confusion, and the need to understand underlying CI settings.

### 00:24:00 - 00:30:00: Manual Netlify CLI Deployment of Vite Starter

Shifting tactics, Ryan clones the standard Solid Vite template locally and uses the Netlify CLI to deploy: `netlify init`, `netlify deploy`, and setting `dist` as the publish directory. Within seconds, his demo preview is live—no button required. He contrasts this manual flow’s transparency with the opaque button experience, highlighting how direct CLI commands reveal build steps, redirects, and function wiring.

He points out Netlify’s Lambda-style function wrappers—mirroring AWS Lambda’s `event` and `context` model—and explains how Solid Start’s adapter generates a `netlify.toml` and functions folder. This clarity prepares viewers for later comparisons with Vercel and Cloudflare.

### 00:30:00 - 00:36:00: Deploying Solid Start Hacker News on Netlify

Now on-minute 30, Ryan showcases the Solid Start Hacker News example deployed via Netlify CLI. He walks through `npm install`, `npm run build`, and the adapter’s output: a `functions/` folder for SSR and a `dist/` folder for static assets. He demonstrates live previews, noting Netlify’s lack of streaming support (falling back to render-to-string) and discussing trade-offs: no early HTML injection but consistent server-rendered output.

This chapter emphasizes how Solid Start’s plugin abstracts SSR bundling, letting developers focus on code rather than deployment config, and underscores the adapter’s AWS-compatible footprint.

### 00:36:00 - 00:42:00: Vercel Templates and Framework Detection

At the 36-minute mark, Ryan explores Vercel’s example library: Solid and Solid Start demos listed alongside Next.js, Astro, and more. He shows how Vercel’s `frameworks.ts` auto-detects repos, pre-configures build commands, and provides “Deploy” buttons—mirroring Netlify but with Vercel’s UI polish. He links to his public `solid-start-hackernews` and `solid-vite` examples, praising how users can browse, fork, and deploy without leaving Vercel’s dashboard.

He admires the convenience for newcomers—no manual CLI needed—and hints at his pending pull request to include official Solid integrations in Vercel’s core detection.

### 00:42:00 - 00:48:00: Vercel File System API and Edge Adapter Demo

Ryan delves into Vercel’s beta file-system API: outputting a uniform directory structure—`static/`, `functions/`, `middleware/`—with special files driving routes, APIs, and edge functions. He explains how Solid Start’s Vercel adapter leverages this format to emit streaming or non-streaming edge bundles: a Vite build for static, Rollup-bundled middleware for SSR, and a manifest file guiding Vercel’s deployment engine.

He demonstrates toggling `preferStreaming` in `solid.config.ts`, rebuilding, and deploying, showing both loading-state streaming and full HTML responses. This reveals Vercel’s ability to host hybrid sites—static, serverless, and edge—under one framework.

### 00:48:00 - 00:54:00: Streaming vs. Non-Streaming Deploys on Vercel

In this chapter, Ryan compares live demos: with streaming enabled, the HTML shell renders immediately and data streams into suspense boundaries; with streaming off, the complete page arrives in one payload. He debates UX trade-offs—streaming avoids flicker but may complicate edge caches—while highlighting how Solid Start’s config flag abstracts these details.

He also notes his one minor typo in the adapter code (fixed on-the-fly), demonstrating the rapid iteration cycle on Vercel and encouraging viewers to await his official integration for a “zero-config” experience.

### 00:54:00 - 01:00:00: Edge Functions Deep Dive: Concepts and Use Cases

Approaching an hour in, Ryan steps back to define serverless versus edge functions. He explains cold starts, auto-scaling, and pricing on typical cloud VMs, then contrasts with edge functions: lightweight runtimes at CDN PoPs, reduced memory footprints, and near-user execution. He outlines use cases—A/B testing, auth at the edge, personalization—with code examples in Cloudflare Workers-like APIs.

This conceptual primer equips viewers to weigh provider limits (bundle size, memory) and data-source latency when choosing platforms for latency-sensitive SSR and global interactivity.

### 01:00:00 - 01:06:00: AWS Lambda vs. Edge Architecture

Continuing the deep dive, Ryan shares how AWS splits environments—EC2, Lambda, Lambda\@Edge—and how zones, VPCs, and global services like DynamoDB interplay. He recounts discovering Netlify’s functions use AWS under the hood and Vercel’s edge functions resemble Cloudflare’s API. He discusses network hops: edge PoP to origin data center, to DB, and back, illustrating why streaming at the edge preserves perceived performance even when back-end calls lag.

He closes by noting that while dedicated self-hosted Kubernetes may be cheaper at scale, serverless and edge abstractions vastly accelerate iteration for startups and hobby projects alike.

### 01:06:00 - 01:12:00: Cloudflare Adapter Setup and Comparison

At 1:06:00, Ryan revisits Cloudflare Workers integration. He highlights zero-boilerplate: a simple `wrangler.toml` pointing to `dist/entry.mjs`, no custom redirect files needed. He inspects the Workers wrapper—native Request/Response streaming—and compares it side-by-side with Vercel’s edge adapter. His Solid Start plugin for Cloudflare drops functions into `workers/` and static into `static/`, letting Wrangler handle the rest.

He closes by emphasizing the parity across adapters: identical build code reused for Netlify, Vercel, and Cloudflare, reducing maintenance overhead.

### 01:12:00 - 01:18:00: Leveraging Cloudflare KV and Static Sites

Diving deeper, Ryan touches on Cloudflare’s KV store for caching JSON or prerendered pages, and Cloudflare Pages for static hosting. He describes a hybrid pattern: serve a static shell from Pages CDN, then mount a Worker to hydrate or stream SSR in place, merging static and dynamic workflows without bouncing to origin.

He discusses real-world pitfalls—consistency of KV replication and cold-start times—and offers strategies for choosing between pure static, static+edge, and function-only deployments, depending on data-freshness and personalization needs.

### 01:18:00 - 01:24:00: Stream Conclusion and Upcoming Topics

As the deployment segment wraps at 1:18:00, Ryan reflects on emerging convergence: all platforms gravitating toward browser-native Request/Response APIs, file-system-based deployments, and edge streaming. He previews future streams: Solid’s router deep dives, guest appearances, and his upcoming React Finland talk on reactivity.

He invites feedback on topics, encouraging viewers to propose guests like Ryan Carniato, Alexis, or framework authors, and hints at a HolyJS livestream covering Solid Start integrations.

### 01:24:00 - 01:30:00: React Hooks Conditional Rendering Debate

At 1:24:00, the conversation shifts to a viral Twitter thread on conditional hooks. Ryan dissects the argument: React forbids conditional hooks to preserve call-order, while Solid/Svelte’s reactivity allows nested primitives. He demonstrates React’s serialized hooks versus Solid’s nested `createSignal` calls, showing how Solid easily scopes reactive computations to when and where they’re needed.

He critiques the misconception that Solid and Svelte share identical limitations, clarifying that Svelte’s compiler disallows nested `$:` labels whereas Solid’s fine-grained runtime handles dynamic signal usage gracefully.

### 01:30:00 - 01:36:00: Solid vs. Svelte Reactivity Misconceptions

Building on the hooks debate, Ryan compares Solid’s primitive model to Svelte’s component-based reactivity. He explains how Solid’s signals, memos, and effects form an explicit dependency graph that automatically tracks only “used” data, avoiding over-reruns. In contrast, Svelte’s compile-time magic unrolls reactivity into component lifecycle, limiting dynamic restructures.

He demonstrates a Solid component that conditionally invokes a fetch hook inside a `Show` block, a pattern impossible in React and unsupported in Svelte’s `$:` template syntax—highlighting Solid’s unique flexibility.

### 01:36:00 - 01:42:00: Fine-Grained Reactivity Advantages

In this chapter, Ryan extols fine-grained reactivity’s power: minimal re-rendering, predictable updates, and direct DOM binding. He recounts debugging re-execution in hooks versus pinpointing stale subscriptions in Solid via devtools. He argues that Solid’s explicit reactive primitives let users compose and nest logic without hidden abstraction leaks—unlike Redux or contexts where state changes cascade unpredictably.

He also acknowledges trade-offs—must avoid inadvertent subscriptions outside intended boundaries—but shows how utilities like `createComputed` and `untrack` guard against accidental signal reads, preserving performance.

### 01:42:00 - 01:48:00: Composition Patterns and Framework Philosophy

Turning philosophical, Ryan surveys composition as the “king” principle in modern frameworks. He contrasts monolithic DSLs (e.g., Angular’s decorators) with hook-style apis—small, orthogonal, composable building blocks. Drawing analogies to Redux’s middleware and Elm’s messages, he argues that minimal, predictable primitives undergird scalable apps more effectively than catch-all magic.

He forecasts Svelte’s future: will it embrace composition more deeply or remain single-file-component-centric? And he assesses Solid’s “JSX + reactivity” sweet spot as a midpoint between React’s explicitness and Svelte’s ergonomic syntax.

### 01:48:00 - 01:54:00: React’s Core Principles and Design Insights

Reflecting on Dan Abramov’s early essay “You’re Missing the Point of React,” Ryan revisits React’s understated strengths: pure functions, explicit mutation, static mental models, and unidirectional flow. He reminds viewers that React’s virtual DOM was an implementation detail; its true gifts are composability and predictable UI updates.

He underscores how Solid inherits React’s philosophy—JSX, explicit state updates, Suspense concurrency—while swapping the virtual DOM for signal-based rendering. This genealogy explains Solid’s familiar developer ergonomics paired with high performance.

### 01:54:00 - 02:00:00: Unidirectional Data Flow and Flux History

At 1:54:00, Ryan narrates Flux’s origin story at Facebook, illustrating tangled bidirectional MVC code that caused Chat bugs. He diagrams how actions, a central dispatcher, and stores replace messy arrow-ridden models. By moving derived data (unseen count) into explicit state (list of unseen threads), he shows how unidirectional flow eliminates race conditions and stale UI.

This historical perspective reinforces why modern frameworks emphasize single-direction updates and server-state mutation APIs like React Query or SWR.

### 02:00:00 - 02:06:00: Facebook Chat Example: State Consistency

Continuing the Flux deep dive, Ryan walks through the Chat tab, Messages jewel, and larger messages view—each once handling new messages imperatively in a monolithic handler. He explains how refactoring to discrete stores (threads, unseenThreads) and view-triggered actions yields resilient, maintainable code.

He emphasizes the principle: explicit data > derived data. Deriving unseen count from unseenThreads ensures consistency even when users switch views, demonstrating core architecture lessons still relevant in Solid’s approach to route-based data fetching.

### 02:06:00 - 02:12:00: Lessons from Past Frameworks and Language Analogy

At two-hours-six-minutes, Ryan zooms out, comparing frameworks to programming languages: a balance between expressiveness and safety. He recalls Knockout’s two-way binding allure and subsequent performance pitfalls in large apps, and how React’s one-way binding restored sanity. He cautions that too much compile-magic (e.g., macros in CS) can obscure critical behavior, while too little (raw JS) burdens developers.

He urges framework authors to choose opinionated constraints that guide best practices without sacrificing composability—the sweet spot that fueled React’s dominance.

### 02:12:00 - 02:18:00: Two-Way Binding Pros and Cons

Focusing on two-way binding, Ryan debates its ergonomic charm—typing fewer props and event handlers—against long-term maintainability challenges. He acknowledges that for simple forms it’s a win, but warns of complexity when passing down setters through nested components. He shares how Solid’s `createSignal` patterns make explicit binding trivial while avoiding hidden pitfalls of automatic two-way flows.

He concludes that controlled/uncontrolled patterns (à la React Forms or Marco’s “control” feature) often provide a cleaner mental model at scale.

### 02:18:00 - 02:24:00: Event Handling and HTML Syntax Debates

In this Q\&A segment, Ryan riffs on React’s controversial commandeering of `onChange` (firing on blur, not per keystroke) versus the native `onInput` event, recounting countless newcomers perplexed by disappearing input values. He also discusses HTML attribute quoting conventions, shorthand directives in Vue/Angular/Svelte, and trade-offs between terseness and predictability in template languages.

His take: prefer explicit, standards-aligned events and minimal custom syntax to reduce cognitive overhead.

### 02:24:00 - 02:30:00: Mixed-Mode Framework Strategies

Building on syntax debates, Ryan explores “mixed-mode” frameworks—those offering both JSX and template shorthands—as seen in Marco’s Terser mode or Solid’s optional macros. He explains why he pruned Marco’s syntax down to a core set of indispensable features, avoiding proliferation of syntactic sugar that ultimately hurts onboarding and ecosystem coherence.

He advocates for minimalism: ship only what solves common, hard problems, and let third-party libraries fill niche needs.

### 02:30:00 - 02:36:00: The Role of Polyfills and Browser APIs

At 2:30:00, Ryan recounts the early days of cross-browser quirks—click handling, event normalization, and polyfills that jQuery first introduced. He explains why React opted for a synthetic event system to abstract away inconsistencies, despite the extra bundle size, and how modern frameworks can now lean more on standardized browser APIs thanks to evergreen browsers.

He encourages leveraging platform features where stable, but wrapping them only when necessary to maintain small, maintainable code.

### 02:36:00 - 02:42:00: Final Q\&A and Audience Questions

As the end nears, Ryan fields viewer questions: best practices for parameterized templates, debugging reactive graphs in Solid, and recommended logging strategies in edge environments. He shares quick tips: use console groups for streaming chunks, employ Cloudflare’s Wrangler logs, and set verbose environment flags locally before deploying to production.

He also solicits feedback on upcoming livestream topics, including deeper dives into Solid Router, internationalization integrations, and community-led plugin architectures.

### 02:42:00 - 02:48:00: Farewells and Next Week Preview

In this penultimate chapter, Ryan thanks attendees for their time and constructive challenges throughout the stream. He previews next Friday’s session—possibly a router tutorial with guest Ryan Carniato from Solid’s core team—and invites contributions to Solid’s docs, adapter plugins, and feature roadmaps.

He highlights his upcoming React Finland talk on advanced reactivity patterns, promising concise treatises on fine-grained tracking and dependency visualization.

### 02:48:00 - 02:54:00: Closing Remarks and Stream End

In the final minutes, Ryan shares informal stream metrics—peak concurrent viewers, viewer questions logged in the chat, and GitHub Stars garnered for Solid adapters this week. He reiterates open-source gratitude, reminding viewers to star the `solid-start` monorepo, and plugs the Solid Discord for deeper discussions.

He signs off with an invitation to catch the VOD on YouTube, promising timestamps and resources in the description, and wishes everyone a great weekend of coding.

### 02:54:00 - 02:58:23: Post-Stream Off-Mic Banter

After formal wrap-up, Ryan stays live off-mic briefly to chat with moderators about future community events, upcoming podcast interviews, and potential partnerships. Though not part of the official show, this candid exchange underscores the organic community energy fueling Solid’s growth.

He thanks the moderators by name before finally ending the stream at 02:58:23, leaving viewers eager for the next deep-dive session.