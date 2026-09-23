---
showLink: "https://www.youtube.com/watch?v=jnZmG4hyNas"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "First look at DOM Expressions"
description: ""
publishDate: "2021-09-04"
coverImage: "https://i.ytimg.com/vi/jnZmG4hyNas/maxresdefault.jpg"
---

## Episode Description

A first look at Ryan Carniato’s DOM Expressions library, detailing its runtime generation, compiler integration, and implementations that power Solid’s reactive rendering.

## Episode Summary

In this video, Ryan Carniato introduces DOM Expressions, the core library that drives Solid’s fine-grained reactive rendering. He begins by demonstrating how DOM Expressions generates a fully tree-shakable runtime at compile time, initially using template-based code generation before transitioning to a Babel plugin that allows users to supply their own reactive core. The discussion then shifts to the library’s structure, covering client and server entry points, hydration logic, and dynamic insertion mechanisms. Carniato highlights the importance of efficient SSR escaping and benchmarks DOM Expressions against other frameworks. He further explores the Babel compiler’s AST transformations, comprehensive testing strategy, and optimizations such as grouping effects. Finally, he compares different implementation styles—JSX, Hyperscript, Lit templates, and tag template literals—demonstrating how each approach leverages the same runtime to achieve high performance and flexibility.

## Chapters

### 00:00:00 - Introduction to DOM Expressions and Runtime Generation

In the opening minutes, Carniato explains his motivation for creating DOM Expressions and demonstrates his testing environment. He sets the stage by announcing his intention to share code via streaming and clarifies that DOM Expressions underlies the entire Solid framework. He emphasizes that many developers looking at Solid’s codebase may be puzzled by its minimal surface area, but this simplicity is intentional: the library focuses on providing a fine-grained reactive system. Carniato recounts his experimentation with alternative reactive libraries—MobX, Knockout, SJS, RxJS—before settling on a design that decouples the reactive core from the runtime generation process.

He then describes how he originally used templating (similar to ERB in JavaScript) to build the runtime, but found that approach difficult to maintain. To ensure tree-shaking and avoid shipping unused helper functions, he pivoted to a Babel plugin-based solution. This plugin renames imports so that users can inject their own reactive core—whether from Solid, SJS, or another library—while the DOM Expressions runtime is generated at compile time. By building the runtime ahead of time, Carniato ensures the final bundle includes only the code actually used, laying the groundwork for the library’s performance and modularity.

### 00:04:00 - Runtime Structure and Client/Server Entry Points

Between four and eight minutes, Carniato delves into the structure of the DOM Expressions source code, starting with the expectation that consumers import source files directly and use a bundler to produce a final build. He highlights the comprehensive type definitions provided for JSX, and points out the separate client and server entry points. The client runtime depends on a user-supplied reactive core—such as SJS in his examples or Solid’s own core—while the server runtime emphasizes string-based rendering for SSR. By replacing a placeholder reactive core (RxCore) with whichever library is provided, the runtime exports precisely the functions used by the Babel compiler to translate JSX into efficient code.

Next, Carniato walks through key runtime functions that facilitate DOM operations, prop handling, and event delegation. He explains how the render function and its server equivalent—renderToString—are included in this package, ensuring both client-side and server-side rendering share the same underlying logic. The hydration helpers, present in the client runtime, prepare the DOM for reactivity when the page is rehydrated. Throughout this segment, Carniato emphasizes that while the codebase appears large, most of it exists to support the compiler’s output, and only the necessary functions are included when the runtime is generated for a specific application.

### 00:08:00 - Dynamic Insertion, SSR Rendering, and Performance

From the eight- to twelve-minute mark, Carniato focuses on the core of dynamic updates: the insert function, which reconciles variable input in the DOM. He outlines how insert checks whether a value is a function (indicating a reactive accessor) and either wraps it in an effect or inserts it directly. This reconciler handles primitive types such as strings, numbers, and booleans, as well as functions, arrays (by diffing lists), and existing DOM nodes. Attribute updates, by contrast, are simpler: most of them simply wrap a reactive getter around a call to set an attribute. Carniato notes special cases—spread attributes, classList updates, style objects, and SVG attributes—that require dedicated runtime helpers but can sometimes be optimized away by the compiler.

Switching to the server runtime, Carniato explains how all dynamic behavior is replaced with string concatenation. Every helper transforms into a string-building function, taking care to escape user input to prevent injection attacks. He emphasizes that escaping is one of the biggest bottlenecks in SSR performance but also credits a community-driven PR for dramatically improving Solid’s server-side speed. Citing benchmarks, Carniato compares this escape-based approach to React (around 4,000 ops/sec), Svelte (6,000–8,000 ops/sec), and Marko (25,000 ops/sec), noting that Solid’s SSR often hits upwards of 55,000 ops/sec. These performance wins are directly tied to the efficiency of the escape mechanism and the fine-grained runtime design.

### 00:12:00 - Babel Compiler and AST Exploration

Between twelve and seventeen minutes, the conversation shifts to the Babel plugin (jsx-dom-expressions) that powers DOM Expressions’ compilation. Carniato explains that the plugin’s code is largely shared between DOM-specific transforms and SSR-specific transforms; components, attribute wrapping, and reactive bindings compile in similar ways regardless of target environment. He stresses that preserving execution order—such as honoring context lookup for nested components—is as critical on the server as it is in the browser. By generating the same code for both environments, the compiler helps maintain performance parity and predictable behavior across client and server.

Carniato then dives into his workflow for understanding and debugging these transformations. He recommends using ASTExplorer.net to paste in JSX or JavaScript and inspect the generated abstract syntax tree. Although certain hacks (like removing import injections) are necessary to get the plugin working in AST Explorer, the site remains invaluable for teasing apart complex AST manipulations. He remarks that after the build process, the plugin produces roughly 2,200 lines of transformation logic for both client and server. To illustrate the compiler’s correctness, he points to a suite of snapshot tests: DOM fixtures, hydratable DOM fixtures, wrapperless fixtures for static DOM output, and SSR fixtures with hydration data. These tests serve as both documentation and verification that the compiler handles myriad edge cases.

### 00:17:00 - Compiler Optimizations and Hyperscript Foundations

From seventeen to twenty-two minutes, Carniato walks through compiler-driven optimizations visible in the test outputs. He highlights how classList updates, when inlined as an object literal, get compiled into a single effect that performs equality checks before mutating the DOM. Rather than creating three separate effects—one for each class property—the compiler groups them into a single computation with minimal runtime overhead. This technique, he explains, offers substantial performance benefits during initial render, since creation speed is often the bottleneck even if update speed is already fast.

Next, Carniato introduces Hyper DOM Expressions, the hyperscript-based version of the library that does not require a compiler. He notes that while this version ships a small bundle and avoids tree-shaking concerns (because there is no compile-time elimination), it relies on a runtime-provided hyperscript function (h) and the user’s reactive core. Using SJS for testing, he demonstrates how the hyperscript function is generated by the compiler to accept the runtime methods (e.g., createEffect, createMemo, createComponent). This minimal hyperscript function then delegates most logic to DOM Expressions’ runtime helpers, revealing the core building blocks that enable the Reactivity API to drive DOM updates without JSX.

### 00:22:00 - Hyperscript and Lit DOM Expressions Implementation

Between twenty-two and twenty-seven minutes, Carniato explores the Hyperscript implementation in greater depth and contrasts it with the Lit DOM Expressions approach. He begins by showing the “core” file that the Babel plugin renames to hijack RxCore. This core file supplies the basic reactive primitives—createEffect, createMemo, createComponent, getOwner, and sharedConfig—so that downstream code can invoke them uniformly. Carniato points out that the hyperscript function itself is essentially a straightforward “h” function that takes a selector, props, and children, then calls runtime methods (r.insert, r.spread, r.dynamic) for each dynamic part. Because there is no compile-time analysis, this version is less tree-shakable but requires minimal code.

Moving on to Lit DOM Expressions, Carniato explains how he reuses a parser originally written for Knockout to enable curly-brace syntax in web components. He notes that Lit’s implementation is more complex because it must parse template literals at runtime and generate clonable HTML templates. This requires replacing wildcards with placeholders, parsing the resulting HTML string into a DocumentFragment, extracting dynamic indices, and constructing a function that, when called with a runtime, clones and binds the template. Although this approach demands more intricate runtime logic—about 400 lines of code—it still achieves impressive performance by leveraging fine-grained reactivity rather than top-down rendering.

### 00:27:00 - Tagged Template Literals, Caching, and Wrap-Up

From twenty-seven to thirty-two minutes, Carniato unpacks the tagged template literal version of DOM Expressions. He shows how the “html” tag function uses a cache keyed by the array of static string segments. Upon the first invocation, it calls createTemplate, which replaces placeholders in the HTML string, parses it into a <template> element, and records where dynamic markers should be placed. On subsequent calls, the tag function reuses the cached template rather than reparsing the static markup. When an instance is needed, the function clones the template and then runs the generated patch function to bind dynamic values. This approach yields performance within five percent of the compiled JSX output, making it competitive with libraries like lit-html and uhtml.

Carniato highlights that by coupling cached template cloning with fine-grained reactive updates (r.insert, r.spread, r.dynamic), the tag template version sidesteps many of the limitations of top-down renderers. He acknowledges that this implementation cannot group multiple reactive holes into a single effect—since the holes are only known at runtime—but remains fast enough to outperform most alternatives until newer projects like DOM c-stage-zero appear. He concludes by inviting viewers to ask questions in future streams, expressing satisfaction that his M1 setup performed smoothly, and indicating he plans additional deep dives into how these pieces interconnect further down the line.