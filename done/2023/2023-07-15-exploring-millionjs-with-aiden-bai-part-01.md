---
showLink: "https://www.youtube.com/watch?v=JBRgUs9Kp64"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Exploring Million.js with Aiden Bai"
description: ""
publishDate: "2023-07-15"
coverImage: "https://i.ytimg.com/vi/JBRgUs9Kp64/maxresdefault.jpg"
---

## Episode Description

A lively chat about million.js, advanced reactivity, performance benchmarks, open source funding, and handling mental health challenges in the developer community.

## Episode Summary

This conversation begins by introducing the core topic of high-performance frontend frameworks, centering on an in-depth discussion of million.js and its origins. It includes insights into how library authors address optimization, the complexities of measuring performance, and the practical lessons learned in benchmark testing. The speaker also explores personal anecdotes about contributing to open source projects, delving into the importance of community support, financial sustainability, and collaboration with large organizations like Google Chrome. As the talk continues, it addresses the shifting priorities at Netlify, including staffing changes that reflect broader market pressures. Toward the end, the discussion shifts to the nuanced reality of mental health issues within the tech world, underscoring the challenges that arise when social media interactions, personal struggles, and open source responsibilities all converge. Throughout the session, recurring themes of empathy, resilience, and innovation underscore how technical expertise and community care can work together to shape the evolving landscape of modern web development.

## Chapters

### 00:00:00 - Introduction and Early Context

In this opening segment, the host sets the stage by greeting the audience and sharing how it feels to be back on stream after time away. Early remarks touch on the sense of continuity in the JavaScript community, where conversations about performance and emerging technologies remain ongoing. The host briefly mentions personal updates, referencing travels and the challenges of returning to a regular schedule. This initial portion also provides an overview of the day’s plan, promising a deeper look into new approaches in frontend performance.

The host then moves on to explain the purpose behind inviting a special guest, signaling a more technical focus on the horizon. With a relaxed tone, the speaker jokes about “killing time” while audience members trickle into the chat and pre-roll ads finish on some streaming platforms. This casual atmosphere lays the groundwork for a more substantive discussion still to come. Listeners are encouraged to say hello and prepare for a lively technical conversation, hinting at the breadth of topics—ranging from frameworks to community updates—that will soon unfold.

### 00:10:00 - Welcoming Aiden and Discussing Performance Curiosity

The dialogue shifts to introducing Aiden Bai, a young and passionate developer who has been exploring performance optimization for some time. The host expresses excitement about taking a deep look at million.js, describing how the search for faster DOM rendering solutions consistently attracts attention. Mentions of various performance benchmarks and how they demonstrate real-world gains set the tone, illustrating why incremental improvements in rendering can be so crucial to modern applications. The conversation also touches on the importance of being open to new ideas and “changing the math” of performance updates.

Aiden’s story surfaces here, highlighting his early start in programming and an unconventional path leading to deep involvement in frontend library development. The host teases out the background that sparked Aiden’s obsession with speed—initially tied to personal projects and playful experiments. As chat participants filter in, the two reflect on the persistent debate around how to measure rendering times, discussing both technical intricacies and the universal appeal of wanting things to load faster. This sets up a natural segue to more detailed explorations of million.js itself.

### 00:20:00 - Aiden’s Background and the Genesis of million.js

During this segment, Aiden describes his formative experiences with Chromebooks in elementary school, explaining how restricted online access drove him to create inventive workarounds. He recounts building basic applications like a school chat system, which fueled early lessons on DOM manipulation and performance bottlenecks. This candid story offers a personal glimpse into how necessity often inspires creativity in budding developers. The host draws parallels to earlier web development anecdotes, illustrating how a single constraint—like blocked sites—can jumpstart an enduring fascination with optimization.

The focus gradually shifts to the realization that standard frameworks can be both empowering and limiting, prompting Aiden to experiment with his own solutions. He references initial attempts at libraries that mimicked Alpine.js and other existing tools, revealing how trial and error guided him toward writing faster code. This period of experimentation eventually led to million.js, whose bold performance claims caught the host’s attention. By recounting these early prototypes and the curiosity that propelled them, both speakers set the stage for a deeper look at the unique architectural ideas behind million.js.

### 00:30:00 - Tracing the Evolution from Prototypes to Benchmarks

Here, the conversation covers Aiden’s iterative process from rudimentary virtual DOM libraries to the current, more polished version of million.js. He discusses facing skepticism over performance claims and learning to approach benchmarks with nuance. The host chimes in with personal experiences of verifying speed improvements and the pitfalls of flawed tests. This exchange highlights how measuring performance can be as tricky as optimizing it, emphasizing the necessity of accurate, transparent benchmarking to validate any purported gains in rendering or reactivity.

The two recall how fleeting or inaccurate metrics can derail meaningful progress, referencing previous run-ins with libraries that boasted dramatic stats but struggled in real-world scenarios. Aiden candidly admits to oversights in early million.js benchmarks, prompting further refinement. The host acknowledges the difficulty of balancing a library’s marketing with genuine performance data. This leads into reflections on community feedback, with a friendly nod to open-source figures like Marvin from Preact, who helped guide or critique the approach. The discussion reinforces the value of collaboration and transparency in the journey toward better benchmarks.

### 00:40:00 - Benchmarking Intricacies and Block VDOM Insights

As the conversation deepens, Aiden introduces the idea of a “block VDOM,” explaining how extracting static content can make the update process more efficient. The host compares this to other known optimizations like DOM cloning or single-pass diffing. They outline how million.js identifies “holes”—dynamic parts in an otherwise fixed structure—and how focusing on these areas can speed up typical UI updates. This chunk of the dialogue provides a conceptual bridge between purely reactive approaches and the more traditional virtual DOM flow.

The host reaffirms that while such techniques may sound abstract, they stem from the same performance-driven principles that have guided frameworks like Surplus, Dom C, or even parts of React’s optimization paths. By distinguishing between structural and purely data-centric changes, Aiden demonstrates that the block VDOM concept excels at minimizing overhead for stable UI sections. Listeners learn how early versions of million.js underperformed until these targeted optimizations were introduced, further illustrating the technical leaps required to compete in the high-performance realm of modern JavaScript libraries.

### 00:50:00 - Fine-Grained Updates vs. Diffing Approaches

Diving deeper into the specifics of how million.js updates its tree, the two examine the trade-offs between a reactive, fine-grained system and block-based diffing. The host references experiences with other libraries, noting that universal solutions often mix or compromise between these models. Aiden points out that focusing on structural integrity—keeping stable blocks intact—can yield near-reactive performance without requiring signals for every element. They also touch on scenarios like list rendering, highlighting how specialized helpers or “for” components can further reduce overhead.

This segment is peppered with anecdotes and small details about the complexities of building or maintaining new abstractions, especially when loops and conditionals come into play. The host acknowledges how even advanced libraries sometimes struggle with partial updates, referencing old Medium articles on performance tests from 2019. Meanwhile, Aiden underscores that real-world constraints like memory allocation or garbage collection are equally significant to raw CPU cycles. The conversation conveys that modern frontend optimization hinges not on a single technique but on a carefully orchestrated blend of them.

### 01:00:00 - Transitioning to React Integration and Practical Usage

Having laid out the core logic behind million.js, the host prompts Aiden to discuss the library’s relationship with React. Aiden clarifies that while million.js can function standalone, one of its primary draws is its ability to wrap React components and patch existing applications for performance gains. They address the impetus for such an approach: many teams hesitate to abandon React but still crave speed improvements. Thus, million.js becomes an add-on or bridging layer that sits on top of React’s ecosystem, giving rise to new optimization strategies.

They delve into what it looks like to incorporate million.js into a React project, describing block components, how server rendering might work, and the intricacies of adopting a partial “for” approach to lists. The host raises questions about stateful components, memoization, and concurrency. Aiden explains that million.js focuses on the rendering side, leaving advanced state considerations to React itself, while still reaping performance benefits through more streamlined diffing. This interplay hints at a broader conversation about layering advanced rendering engines onto established frameworks for minimal disruption.

### 01:10:00 - Demos, Benchmarks, and the Nature of Scheduling

In this segment, the host and Aiden experiment with a live demo illustrating side-by-side comparisons of React, React with concurrent rendering, and million.js. With a high number of DOM elements, million.js demonstrates tangible speed advantages, reinforcing the “less work is inherently faster” principle. They highlight how concurrent rendering’s scheduling can mask performance hiccups rather than eliminate them. The real win, Aiden argues, is doing fewer operations altogether, which is exactly what million.js aims for by skipping unnecessary re-renders and focusing on localized changes.

They reflect on how concurrency techniques can improve perceived performance without reducing total computation, while block-based approaches actually cut down the work. This clarifies that, although concurrency helps with user experience in certain cases, large datasets or frequent re-renders can still bog down an application if the underlying algorithms remain heavy. As a result, million.js and other block DOM strategies look attractive for data-intensive scenarios like stock tickers, massive tables, or real-time dashboards. The demo underscores how frameworks can take fundamentally different paths to handle similar UI demands.

### 01:20:00 - Challenges of Marketing Performance and Real-World Use

Here, the talk explores the difficulties of presenting performance numbers to engineers and decision-makers. The speakers recount how bold library claims often spark initial interest but can also provoke skepticism when real-life implementations fall short of microbenchmark hype. They debate the role of promotional statements like “70% faster than React,” acknowledging that marketing can attract attention but must be backed by reproducible, transparent tests. Aiden shares lessons learned from community pushback, illustrating how refining million.js demanded honesty and openness.

The conversation broadens to consider long-term viability, user adoption, and the tension between adopting brand-new libraries versus trusted mainstays like React or Vue. The host stresses that a developer community values not just speed but also stability, tooling, and active maintenance. Both speakers recognize that bridging the gap between new ideas and production readiness takes time and consistent effort. This underscores that performance alone won’t secure widespread adoption—public trust, comprehensive documentation, and proven examples are equally vital for any emerging library.

### 01:30:00 - Funding, Community Support, and Pathways for Growth

Discussion pivots to how open source projects like million.js can secure ongoing development. The host shares experiences with frameworks that found success once a supportive community and financial backing aligned. Aiden notes the intangible yet crucial contributions of mentors, community advocates, and sponsors. They emphasize that performance libraries often require specialized skills, from compiler optimizations to intimate knowledge of browser internals, making consistent funding indispensable for sustained evolution.

The host acknowledges how the complexities of DOM manipulation and advanced performance techniques limit the pool of potential contributors. Nonetheless, the conversation affirms that the open source world has plenty of eager enthusiasts who are willing to pitch in, test, and refine. Tools like GitHub Sponsors and corporate partnerships can lighten the financial burden, reducing the likelihood of burnout. The duo reflects on times they received critical feedback or code contributions that catapulted a project forward, demonstrating the profound impact community-driven collaboration can have on a library’s trajectory.

### 01:40:00 - Zooming in on Implementation Details and Block Patterns

Returning to the technical core, Aiden expounds on block patterns inside million.js, explaining how the library identifies static nodes and replaces or updates only the essential parts. The host likens this to partial hydration techniques, illustrating parallels to approaches used in other frameworks or compiler-driven strategies. They describe the up-front analysis that extracts placeholders for dynamic content, offering a nuanced glimpse into how real-world code transforms at runtime. This step-by-step process shows how stable structures remain untouched unless data or layout truly changes.

They also highlight the importance of specialized list helpers in achieving near-reactive performance, revealing that advanced libraries inevitably implement a range of targeted optimizations. The host describes personal benchmarks where small changes in DOM traversal or sibling referencing can dramatically alter speeds, giving listeners a behind-the-scenes look at low-level performance wizardry. Aiden’s anecdotes show that such fine-tuning can be the deciding factor in surpassing other frameworks in standardized tests. Overall, the talk drives home the idea that successful performance strategies often hinge on countless subtle improvements.

### 01:50:00 - Integrating with React: Blocks, Compiler Steps, and Gotchas

At this juncture, the conversation delves into the practicalities of running million.js seamlessly within a React environment. Aiden explains the “block” function, which wraps React components and identifies areas for optimized diffing. The host acknowledges that adapting an existing app to incorporate block-based rendering involves minimal code changes but can significantly alter how updates propagate. They discuss the necessity of small constraints on components—like restricting certain dynamic patterns—to unlock these optimizations. Tools like Babel plugins or macros simplify the integration by rewriting or marking relevant code sections.

They also examine potential trade-offs, such as how blocks might bypass certain React lifecycle hooks or advanced concurrency features. Listeners learn about the impetus behind these design decisions: it’s all about cutting down extraneous work. The duo reiterates that million.js aims primarily to accelerate DOM rendering while leaving React’s state management intact. By focusing on typical bottlenecks, the library simplifies user adoption. The segment highlights how small but meaningful changes, like using a “for” component or restricting nested dynamic structures, can produce substantial speed gains even in large, complex React applications.

### 02:00:00 - Demo Comparisons and Observations on Rerender Patterns

The speakers shift gears to live on-stream demos once more, this time exploring scenarios with tens of thousands of rows. They pay particular attention to how concurrency scheduling in React keeps the UI responsive but ultimately still must perform the same volume of calculations. Meanwhile, million.js proves that reducing computations altogether offers a more definitive improvement. Observers note how each approach affects user experience—some prioritize fluidity of interactions, while others focus on raw throughput.

As they crank up the row counts, the demonstration highlights the contrasting philosophies behind scheduling and actual workload reduction. The host underscores that advanced scheduling can appear magical but doesn’t truly lessen the final sum of operations needed. Aiden remarks that in extreme data scenarios, the advantage of block-based approaches becomes indisputable. This hands-on testing approach underscores the central difference: concurrency might reduce perceived lag, but skipping unnecessary re-renders yields fundamental performance gains. The conversation sets the stage for broader reflections on applying these lessons in production environments.

### 02:10:00 - Community Reaction, Adapting Strategies, and Real-World Tables

Turning toward real-world use cases, the host inquires about using million.js in table-heavy applications, such as financial dashboards or admin interfaces. Aiden confirms that many of the library’s design choices target precisely these high-volume data scenarios. The chat addresses the broader developer ecosystem, where solutions like AG Grid or TanStack Table also focus on performance for complex UI components. They reason that an optimized block diffing approach is particularly compelling when massive updates occur across thousands of DOM nodes in rapid succession.

The host touches on user interface frameworks that combine advanced rendering with robust data layering, underscoring how synergy between a stable data solution and an efficient DOM mechanism yields best results. They mention how libraries like React Query or Voby can integrate with million.js, though exact patterns vary. Listeners gain insight into the delicate balance required for advanced tables, where features like sorting, filtering, and pagination can easily balloon into costly re-renders if not handled with care. This segment reveals that community efforts can tailor specialized components for maximum leverage of million.js optimizations.