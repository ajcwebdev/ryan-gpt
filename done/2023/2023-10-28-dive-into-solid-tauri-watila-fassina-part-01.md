---
showLink: "https://www.youtube.com/watch?v=yLjqh6dKdBc"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Dive into Solid + Tauri w/Atila Fassina"
description: ""
publishDate: "2023-10-28"
coverImage: "https://i.ytimg.com/vi/yLjqh6dKdBc/maxresdefault.jpg"
---

## Episode Description

A wide-ranging conversation touching on SolidJS, Tauri, Rust tooling, and broader JavaScript framework trends, spanning everything from performance insights to development workflows.

## Episode Summary

This transcript features an extensive multi-hour discussion that focuses on web development, desktop applications, and the interplay of emerging technologies. Early on, the speakers highlight Tauri’s ability to run efficiently without bundling an entire browser, describing how Rust powers the backend and the native system’s webview presents the frontend. As the conversation progresses, they address SolidJS’s signal-based reactivity, contrasting it with other approaches like virtual DOM and exploring its suitability for projects on different platforms. The participants also revisit the evolution of frameworks such as React and Next.js, examining server components, routing solutions, and performance benchmarks. In the later stages, they provide detailed commentary on various ecosystem releases—including Astro’s partial rendering and Next 14’s features—while reflecting on community discussions around micro frontends, web components, and framework adoption at large. Their extensive technical exploration underscores both the excitement and complexity of building modern apps, ultimately affirming the importance of flexible, efficient tools that empower developers to handle an ever-growing range of scenarios.

## Chapters

### 00:00:00 - Initial Greetings and Setup

In the opening minutes, the host greets viewers and briefly explains why there was a small delay in starting the session. They share enthusiasm for the topic ahead, mentioning a special guest who will talk about combining modern web development with native desktop capabilities. The host takes a moment to check chat comments and prepare everything for the conversation, ensuring that those watching on different streaming platforms are able to participate. This introduction establishes a warm, informal tone, encouraging viewer interaction and setting the stage for a deep technical dialogue.

They also reference experiences with prior streams, comparing them to what they plan to do today. The host addresses chat questions about the viability of various frameworks, giving a preliminary overview. By referencing the upcoming focus on Tauri, Rust, and SolidJS, they capture the audience’s curiosity. The presence of community members, recent developments in web technologies, and the potential synergy between them all sets the groundwork for a thorough exploration of these tools and ideas.

### 00:06:00 - Rust Installations and Early Banter

As the conversation picks up, the host mentions installing Rust for the first time in preparation for experimenting with Tauri locally. They recall experiences with other JavaScript-centric frameworks and how rust-based tooling can differ. The chat’s questions fuel lively commentary on topics like memory profiles, concurrency, and trade-offs in performance or developer experience. The host also jokes about next week’s focus on different native platforms, hinting that this two-part series will contrast Tauri with another approach.

Social media updates come up, including who is joining the live stream or following along. The host notes that Twitter, YouTube, and Twitch audiences might differ in how quickly they enter the discussion. This relaxed chatter about installation steps and social engagement underscores how technology goes hand in hand with community-driven learning. The host emphasizes that the session will not be an isolated deep dive but part of a broader ecosystem perspective.

### 00:12:00 - Introducing the Guest and Tauri Background

In this segment, the special guest joins the stream, briefly introducing themselves and their work. They reveal their background in web development, Rust, and Tauri, explaining how they got involved with Crab Nebula—a group focused on advancing Tauri’s ecosystem. The guest highlights a notable anecdote about a conference slide that humorously credits the host for pioneering signals in front-end frameworks, showcasing the camaraderie shared among the broader developer community.

The guest then outlines Tauri’s core concept: leveraging the native webview to run JavaScript-driven UIs without bundling an entire browser engine. This keeps desktop app bundles smaller and more efficient than an Electron-like approach. They compare Tauri’s overhead, memory usage, and integration capabilities with popular JavaScript frameworks, emphasizing that Tauri projects can be built with a variety of front-end solutions, including SolidJS. This portion lays the groundwork for the deeper technical exploration to follow.

### 00:18:00 - SolidJS Signals and Framework Evolutions

Building on the previous conversation, attention turns to the rise of signals in modern frameworks. The host recounts how reactivity emerged as a powerful alternative to virtual DOM approaches, referencing Angular’s migration to signals, Vue’s evolving rendering strategies, and how Svelte is reconsidering its compiler-based system. They note that SolidJS has used signals from the start, giving it certain efficiency and performance advantages.

The speaker addresses the nuanced differences among frameworks in adopting fine-grained reactivity. The guest chimes in with examples of advanced data handling in real-world contexts, such as streaming large datasets, praising Solid’s mental model for being straightforward while also preventing over-rendering. The host acknowledges that signals are widely discussed in the community now, pointing to other libraries like Leptos in Rust. Both participants see signals as a unifying concept gaining widespread acceptance across diverse ecosystems.

### 00:24:00 - Tauri’s Architecture and Rust Underpinnings

The discussion moves into the specifics of Tauri’s architectural decisions. The guest describes how Tauri bundles only a thin Rust wrapper (Tau) around a system’s native webview, avoiding the bulk of shipping a full browser engine. They contrast this with Electron, which brings along Chromium and Node.js, leading to far bigger installations even for simple apps. By using the machine’s existing webview, Tauri keeps final bundle sizes compact and memory usage lighter.

They also highlight Tauri’s modular design, which allows developers to integrate their preferred front-end approach, whether it’s SolidJS or plain HTML. The conversation underscores that Tauri’s logic resides largely in Rust, enabling advanced capabilities such as file system access, system notifications, or other platform-level integrations. This design fosters strong performance but requires bridging between JavaScript and Rust, a challenge that Tauri handles elegantly through carefully designed APIs.

### 00:30:00 - Reactivity in Non-Web Platforms

Here, they reflect on bridging reactivity from the browser to native-like platforms. The host points out experiences with React Native, remembering complexities in writing native Objective-C or Java wrappers for bridging. However, the guest explains that Tauri’s environment can run the same JavaScript or SolidJS logic inside a webview, while Rust code handles system functionality. This significantly lowers the barrier for web-focused developers looking to create desktop apps.

The conversation acknowledges that system calls like camera access, file dialogs, or biometric authentication still present platform-specific quirks, though Tauri strives for a unified approach. The pair also note that Tauri is moving toward mobile support in the forthcoming Tauri v2, extending the principle of reusing web technology across iOS and Android. In short, the talk posits that a single codebase for multiple targets is increasingly achievable, with reactivity fitting well in Tauri’s flexible design.

### 00:36:00 - Tauri’s Configuration and Security Allowlist

Next, they walk through Tauri’s JSON-based config system, demonstrating how to enable or disable platform APIs such as file system operations, dialogs, or notifications. This is referred to as an “allowlist,” enforcing the principle of least privilege so that an application requests only the system capabilities it needs. The host attempts to specify local directories accessible to the app, verifying that Tauri restricts file reads or writes to those designated paths.

Discussion touches on how this approach promotes strong security. Developers can define what resources the app needs to access, and Tauri automatically refuses other operations. The pair remark that Tauri’s explicit nature differs from Electron’s more open environment. They see this as an important step in protecting users, especially for sensitive tasks like removing directories or scanning node modules. Overall, the theme of minimal risk resonates throughout the entire Tauri ecosystem.

### 00:42:00 - Practical Example: Building a Tauri + Solid App

At this point, the host opens a sample repository that pairs SolidJS with Tauri’s dev commands. They show how to run `pnpm tori dev` so that Tauri both launches the Vite development server and compiles Rust code for the native layer. Hot reloading is showcased, revealing that changes to the Solid components refresh instantaneously in the desktop window. This synergy reaffirms how Tauri merges the reactivity of a web framework with system-level control.

They also explore the file structure, highlighting how Tauri-related code resides in its own directory (`src-tauri`) separate from typical frontend directories. The guest clarifies that commands bridging the JavaScript side to Rust are auto-generated with Tauri Specta macros, ensuring type safety. Observing how seamlessly the two languages interact impresses the host, who remarks that even deep operations like scanning directories or measuring node module sizes can be performed with minimal Rust boilerplate.

### 00:48:00 - Rust Code for File System Access

Diving further into the Rust portions, the guest walks through the logic for scanning directories, measuring file sizes in node_modules, and returning data back to the frontend. They show how Tauri’s macros generate TypeScript definitions from Rust functions, bridging these worlds cleanly. The conversation reflects on Rust’s potential complexity for web developers but notes that the Tauri approach lets them write only minimal system code if desired.

This part of the stream underscores the distinctive arrangement: Rust-based native functionality is packaged behind Tauri commands, while the SolidJS interface runs in the host’s normal single-page app style. Despite advanced concurrency or asynchronous calls, Tauri keeps the developer experience approachable. The guest highlights that many teams never need to write Rust manually unless they want deeper system control. This encourages experimentation without a steep language-learning barrier.

### 00:54:00 — Fine-Tuning Reactivity in SolidJS

Switching gears, they analyze how to integrate Tauri’s native calls with Solid’s signals and stores. The host sees a function that triggers an asynchronous Rust invocation, then sets a signal to display results in a table. They contrast different patterns for data fetching or mutation, noting that Solid’s granularity can reduce unnecessary re-renders. The guest cites examples of streaming data or large logs, praising how Solid’s approach simplifies mental overhead compared to conventional virtual DOM solutions.

The speaker clarifies that not every scenario requires createResource or a specific hooking system—sometimes plain async/await with signals suffices. They touch on how advanced frameworks often complicate straightforward patterns. Their demonstration suggests that bridging local state with Tauri calls is intuitive: define a function that awaits a Rust command, then update signals in a standard Solid way. This synergy reveals the power behind combining Tauri’s backend with fine-grained reactivity on the front.

### 1:00:00 — Deleting Node Modules and UI Transitions

The host demonstrates an action that allows the user to select a project directory, scan for node_modules, and then remove them via a Tauri command. They show how Solid transitions a row out of the results table after successful deletion. Observers see the immediate feedback in the UI, thanks to optimistic updates triggered by signals, while the real Rust-based removal runs in the background.

They review the coding pattern that ensures minimal disruption to the rest of the interface. Meanwhile, the transition group library in Solid smooths out row animations. The guest comments on how simple these animations can be with the right tooling, praising the library for enabling microinteractions without heavy overhead. Through this example, they emphasize that connecting Rust logic to user-friendly feedback is frictionless in Tauri, bridging system-level tasks with smooth front-end experiences.

### 1:06:00 — Reflecting on Solid’s Minimalist Primitives

In this portion, they take a brief detour to compare Solid’s resource system to more advanced query or mutation libraries. The host outlines how createResource was originally built for data fetching and suspense integration, but not necessarily for local optimistic mutations. The conversation then covers other possible primitives or libraries, referencing mutation APIs and how frameworks like React Query or Svelte manage data.

They highlight the benefits of Solid’s “do one thing well” approach. Because Solid is so unopinionated about data fetching or mutation flows, developers can easily integrate third-party libraries or craft specialized solutions. The host points out how an ecosystem has emerged around signals, transitions, and partial hydration concepts, enabling use cases from lightweight Tauri apps to large-scale corporate apps. The overall message is that minimal but powerful abstractions foster choice and adaptability.

### 1:12:00 — Revisiting Tauri’s Capabilities and Future

Attention returns to Tauri’s broad feature set, covering shell commands, notifications, and auto-updater modules. The guest notes that Tauri is undergoing active development toward version 2.0, which will introduce mobile platform support. Meanwhile, Rust’s built-in concurrency and performance remain a major draw for those building intense data workflows or dealing with security-critical tasks. The duo addresses advanced use cases: hooking into camera APIs, reading or writing OS-level certificates, and more.

They contrast Tauri’s inclusive plugin approach with typical Electron complexities, reflecting on how Tauri’s “allowlist first” design suits enterprise demands. The prospect of building cross-platform apps with a single JavaScript codebase is compelling, especially when performance or bundle size is a concern. Their conversation underscores how Tauri’s team invests in developer ergonomics, from simplified debugging to robust plugin tooling that extends deeper system capabilities.

### 1:18:00 — Security, Desktop Integration, and Memory Footprint

Here, they explore Tauri’s memory usage, referencing older experiences with Electron hogging hundreds of megabytes. The guest reiterates that Tauri uses the system’s native webview, so even a complex interface can start from as little as a few megabytes of overhead. They elaborate on how Tauri’s design also fosters better security, confining each app to specific file paths or permission sets.

They dive into examples: auto-update flows, macOS “Gatekeeper” compliance, and code signing concerns that matter for distributing production software. Tauri’s architecture can streamline the release process, allowing developers to wrap front-end code in a Rust-based environment that implements exactly the features required. This level of customization stands in stark contrast to bundling Node.js or other large runtimes. The topic highlights that Tauri’s main advantage is a minimal, locked-down environment built around speed and safety.

### 1:24:00 — Jumping Between JavaScript and Rust

Shifting focus, the host inquires about Tauri’s underlying communication layer. They note that bridging signals and front-end events to rust-based logic requires some form of inter-process communication (IPC). The guest explains that Tauri uses a channels-based mechanism, ensuring messages go from the webview to the Rust backend. Meanwhile, Tauri filters or rejects calls that aren’t allowed by the config’s allowlist.

They also talk about error handling across the boundary, ensuring the developer sees clear feedback. A failed rust command returns a promise rejection on the JavaScript side, which can be displayed in the UI. The host muses that Tauri’s approach feels more straightforward than building parallel modules in separate languages, as in older React Native bridging. Both emphasize that Tauri aims to unify these boundaries, letting developers focus on the user experience.

### 1:30:00 — Developer Experience and Solid Integration

Now, the guest spotlights the developer experience of mixing Tauri and Solid. They share how signals, transitions, and stores remain exactly the same as in standard Solid web apps. The only difference is that the asynchronous calls might invoke Tauri commands in place of typical REST endpoints. They praise how easy it is to stand up a Tauri dev environment, remarking that it feels like setting up a normal web project plus a single extra step for Rust.

The host recalls older times with React Native, where configuring iOS or Android simulators could be painful. Tauri’s cross-platform approach avoids separate code paths for different OSs, primarily dealing with Rust compilation details behind the scenes. Since Tauri teams handle the heavy lifting, developers keep a near-traditional web dev workflow. This fosters a sense of familiarity that extends from previewing UI changes to debugging any front-end state issues.

### 1:36:00 — Patterns, Testing, and Real-World Apps

They reference the prevalence of Tauri in actual production scenarios. The guest mentions their company’s use of SolidJS in a data-intensive desktop application, praising how Solid’s local reactivity scales to huge dataset handling with minimal CPU overhead. They also discuss testing strategies. On the Rust side, thorough compile-time checks reduce runtime surprises, while the JavaScript side remains testable through typical frameworks like Vitest or Jest.

They reflect on how Tauri’s structure encourages a modular mindset. Because each system API must be explicitly enabled, developers can methodically design tests around distinct features. They see Tauri as bridging the gap between full native frameworks and web-based solutions by exposing only the bits that are needed. This leads to simpler, more predictable code. Observers in the chat ask about debugging options, with the guest hinting at upcoming debugging tools from the Tauri ecosystem.

### 1:42:00 — Contrasting Tauri with Other Solutions

The conversation broadens to evaluate how Tauri compares to competitor technologies like Electron, Capacitor, or older Cordova-based solutions. The guest reiterates that Tauri’s minimal overhead is its biggest selling point, avoiding shipping a whole browser runtime. They stress that Tauri’s memory footprint remains low, and Rust’s performance is unmatched in some CPU-heavy tasks.

Meanwhile, for cross-platform concerns, Tauri 2.0’s upcoming addition of iOS and Android broadens the scope. The host remarks on how React Native’s bridging approach might clash with Rust, whereas Tauri’s architecture is more flexible. Chat questions highlight potential pitfalls in multi-platform solutions, but the duo suggests Tauri’s plugin system allows deeper integration when necessary. They see Tauri as a balanced compromise, avoiding the overhead of shipping a second environment yet giving full control.

### 1:48:00 — Potential Ecosystem Gaps and Ongoing Development

As they near the halfway mark, the speakers acknowledge that Tauri’s community-driven ecosystem is still growing. Some specialized APIs remain in progress, like advanced hardware integrations. The host recalls early challenges with advanced image processing or caching logic in other frameworks. The guest assures that Tauri’s plugin architecture can handle these tasks, referencing community contributions that fill in missing links.

They also speculate on future expansions beyond the current allowlist approach, hinting at collaborative features or new modules that might come in Tauri 2.x. They mention certain concurrency patterns in Rust that Tauri could expose, but caution that not every developer needs such advanced capabilities. In sum, Tauri is evolving quickly, thanks to a dedicated community and increasingly robust set of official plugins, making it a solid choice for many cross-platform desktop applications.

### 1:54:00 — Guest’s Broader Web Development Experience

In these minutes, the guest shares more about their personal background. They describe moving from purely web-based roles to a Rust-heavy environment, discovering the benefits of strongly typed systems. They also mention building side projects that integrated Solid and Tauri, which ultimately led them to collaborate on Crab Nebula’s official offerings. The host teases further details about the synergy between native and web, praising the guest’s unique vantage point.

They circle back to the conference circuit, referencing shared experiences at events and how they connected over signals. This conversation highlights the social nature of open-source communities, where jokes about wearing funny sunglasses or making cameo slides foster a sense of camaraderie. The host encourages the audience to follow the guest’s work to see real examples of Tauri-based projects in production.

### 2:00:00 — A Quick Review of Tauri’s Vision

Here, the host recaps some key Tauri concepts: shipping minimal bundles, leveraging Rust for performance, employing an allowlist for security, and letting JavaScript handle the UI. They note that Tauri can function as a stepping stone for Rust adoption among web developers or simply remain an invisible backend if one prefers not to write Rust. The guest remarks that Tauri’s focus on isolation helps avoid the pitfalls of shipping node or other engines by default.

They also highlight Tauri’s advanced pipeline for building cross-platform executables, which remains fairly automated despite deep OS-level tasks like signing apps. This robust infrastructure spares developers from wrestling with many edge cases, a boon for those transitioning from purely web-based skill sets. The conversation underscores that Tauri’s sweet spot lies in bridging the best of both worlds—efficient Rust backends and flexible JavaScript frontends.

### 2:06:00 — Showcasing Live Coding and Template Usage

The host proceeds with a live coding session, spinning up a Tauri + Solid project from the guest’s template repository. As they open the codebase, they note how straightforward the structure is—there’s a standard Solid app plus a `src-tauri` folder for Rust specifics. They highlight minimal changes needed to integrate Tauri’s dev script, praising how comfortable it feels to any seasoned front-end developer.

Shortly after, they run the dev command, demonstrating that the application emerges as a proper desktop window. The synergy of Rust compilation and Vite-based hot reloading intrigues them, remarking that this dev loop is reminiscent of standard web development. The conversation touches on details like environment variables, cross-platform portability, and platform-specific quirks. This quick demonstration reveals that Tauri lowers friction for multi-platform builds.

### 2:12:00 — Diving into the Tauri Configuration JSON

They open the `tauri.conf.json` file, walking through each section. The pair detail how `beforeDevCommand` and `beforeBuildCommand` instruct Tauri to spin up the relevant bundler or build scripts. They emphasize that the `devPath` points to the local server, bridging local dev with the final native window. The host sets a consistent port in the Vite config to align everything seamlessly.

When they reach the `allowlist` portion, they revisit the notion of precisely specifying which system features the app can use—dialog boxes, file reads, or other. The guest explains that Tauri can also scope file system access to specific directories, preventing accidental or malicious usage outside known folders. This mechanism fosters explicit permissions reminiscent of mobile OS paradigms. They close by noting it’s an excellent approach for containing potential risks.

### 2:18:00 — Interacting with the File System in Solid

Next, the host highlights how a user can select a folder path from a Tauri dialog prompt, storing it in a Solid signal. They show how scanning that folder for node modules is just a matter of calling a Tauri command, which then returns data to the Solid app. The conversation addresses how easy it is to orchestrate these calls, pointing out that the only unique difference from a pure web setup is that the underlying code leads to Rust logic.

They perform a live test, scanning a directory containing multiple JavaScript projects. The Tauri callback returns file size metrics, which get displayed in a Solid table. The host jokes about verifying that no hidden system directories are accidentally included. The example exemplifies Tauri’s high-level synergy: user triggers a file open dialog, Rust does the scanning, and Solid handles dynamic rendering in real-time.