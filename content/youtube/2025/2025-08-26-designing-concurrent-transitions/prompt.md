---
title: "eZAcJc_eR1M"
slug: "eZAcJc_eR1M"
duration: "5:32:06"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/eZAcJc_eR1M.m4a"
---

This is a transcript with timestamps. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one-sentence description of the transcript.
  - The one-sentence description shouldn't exceed 180 characters (roughly 30 words).

- Write a one-paragraph summary.
  - The one-paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include only starting timestamps in exact HH:MM:SS format, always using two digits each for hours, minutes, and seconds.
  - Chapters should each cover approximately 3-6 minutes of content.
  - Write a two-paragraph description (75+ words) for each chapter.
  - Ensure chapters cover the entire content, clearly noting the last timestamp (HH:MM:SS), indicating total duration.
  - Descriptions should flow naturally from the content, avoiding formulaic language.

Example JSON output:

{
  "shortSummary": {
    "episodeDescription": "A concise one-sentence description of the transcript in 180 characters or fewer."
  },
  "longSummary": {
    "episodeSummary": "A single-paragraph summary of the transcript that explains the central topic, the main arguments or developments, the evidence or examples used to support them, and the broader takeaway for the audience. It should read as one cohesive paragraph rather than a list, staying informative without becoming exhaustive. The summary should mention the most important themes, clarify what changed or was learned over the course of the discussion, and note any conclusions, recommendations, or implications that would help someone understand the full conversation without reading the entire transcript. It should also preserve the flow of the discussion so the reader can follow how the ideas developed from beginning to end."
  },
  "longChapters": {
    "chapters": [
      {
        "timestamp": "00:00:00",
        "title": "Introduction and Overview",
        "description": "Introduces the episode's central themes, outlines the main questions guiding the discussion, and explains why the topic matters in practical terms. The chapter gives the audience enough context to follow the conversation, surfaces the core tension or opportunity, and establishes the language that will be revisited in later sections.\n\nIt also signals how the discussion will unfold, connecting the opening ideas to the examples, methods, or case studies that follow. By the end of the chapter, the listener understands the scope of the conversation and the stakes behind the next set of arguments."
      },
      {
        "timestamp": "00:04:30",
        "title": "Core Ideas and Implications",
        "description": "Introduces the episode's central themes, outlines the main questions guiding the discussion, and explains why the topic matters in practical terms. The chapter gives the audience enough context to follow the conversation, surfaces the core tension or opportunity, and establishes the language that will be revisited in later sections.\n\nIt also signals how the discussion will unfold, connecting the opening ideas to the examples, methods, or case studies that follow. By the end of the chapter, the listener understands the scope of the conversation and the stakes behind the next set of arguments."
      }
    ]
  }
}

Transcript:
[00:00:02] Thank you.
[00:00:04] Thank you.
[00:00:05] Thank you.
[00:00:06] Thank you.
[00:00:08] Okay.
[00:00:10] Thank you.
[00:00:11] Thank you.
[00:00:12] I hit start stream before, uh,
[00:00:16] I even had my mic plugged in.
[00:00:18] Hope you guys can hear me.
[00:00:19] How are you all doing?
[00:00:21] My bad.
[00:00:25] Thank you.
[00:00:26] Yeah.
[00:00:27] All right.
[00:00:28] Thank you.
[00:00:30] Let me know if the mic's actually working here.
[00:00:35] Hopefully it is.
[00:00:38] OK, cool, cool.  Yeah, sometimes I do that.  I get so eager to start the stream,  I haven't even plugged in the mic.  OK.
[00:00:44] So today we are doing a kind of impromptu stream.  Yeah, I'm not streaming on Friday.  And I wanted to talk about some of this stuff,  because it's been coming up in conversations.  And I've been slowly by slowly making progress the last few weeks.  This is why I haven't done a stream.  I've got like eight HackMDs since the last stream, where I've been working  through design thought issues.
[00:01:09] Not all of them are related to concurrency and transitions,  but I thought maybe it'd take some time today  to talk about the ones that are and kind of go and look at this topic again  with refreshed eyes now that I have the original context that I built this under.  Actually, I guess the original context is the one I saw from React.  The context that I built this under originally was solid 1.0 or before 1.0.  I think the first version, I was just looking at this the other day,
[00:01:36] and
[00:01:38] uh,
[00:01:39] Yeah, let me see here.  Sorry, let me share my screen.
[00:01:44] The first version of Solid that had transitions was version 0.15.0 that came on December 16, 2019.
[00:01:55] So, uh,
[00:01:58] Yeah, been looking at this for a long time.  And then obviously we did updates around the time of the 1.0 release.  And then...
[00:02:06] I haven't touched it since 1.2, I think.
[00:02:11] like very early on.  And,
[00:02:14] I've been redesigning it again for
[00:02:16] 2.0, but I mean, I shouldn't say I haven't touched it.  We hit some interesting new use cases as we went into.  Route router actions and queries like that whole area.  So.
[00:02:29] Yeah.
[00:02:30] there's been a lot of thought, but not a lot of update on the core mechanism.  So 2.0, I get to start over again.  But I think before we even get into all of that context,  we should really start with like, what is a transition?  Why is it called a transition? You know,
[00:02:46] all that kind of stuff might be a refresher for some of you, but I'm also banking on a lot of people haven't actually used these features in React, don't really understand why they exist. There's a lot of confusion. I mean,
[00:03:00] It's funny, people talk about confusion around RSCs, like React server components.  Before that, there was confusion about the concurrent model.  And it's a really powerful thing.
[00:03:11] And what it automates, it removes a whole bunch of
[00:03:14] concerns that you'd otherwise have to deal with.
[00:03:17] But you have to also kind of respect the model.  Otherwise, you'll be fighting against it the whole time.  So I think we probably should start there.
[00:03:28] Thank you.
[00:03:29] All right. Anyways, yes. Hello, everyone. As I said,
[00:03:35] I decided to do this.
[00:03:37] stream um today um mostly for my sake because i just needed to kind of like talk through and like
[00:03:46] get some sanity around this stuff.  You work on something too long, you know, in a specific space,  and then you're just like...
[00:03:53] you almost like develop your own micro language or your own like,
[00:03:58] the world and it's kind of isolated from the real world.
[00:04:04] Yeah, sorry, Fuzzy.
[00:04:08] Yeah.
[00:04:09] So,
[00:04:10] First of all,
[00:04:13] um
[00:04:14] Why transition?
[00:04:16] I honestly don't know why React initially went with that title.  I have no insight into that.
[00:04:23] I picked it up originally because it was their call, what they called it.  So I was trying to imitate this concept.  I didn't know what else to call it. It's unique.
[00:04:34] And, you know,
[00:04:36] I...
[00:04:37] started going over different names, different titles, especially when I came in to solid 2.0, but then I kind of just went back to transition. See, the problem with transition is it conflicts with like view transitions or transition group or like animation type stuff. And
[00:04:54] while this feature can be related it isn't
[00:04:58] that. We're going to be doing some Excalibur today, most definitely, I think. Let me open that up.
[00:05:09] because transitions are,
[00:05:13] are
[00:05:14] you
[00:05:14] for people who are not familiar with them,
[00:05:17] most similar
[00:05:19] to transactions.
[00:05:21] Right. Most things that you do in reactive frameworks, I don't just mean with signals, I mean with react with whatever.
[00:05:30] Uh,
[00:05:32] You set some piece of state.
[00:05:35] and the guarantee.
[00:05:37] is that
[00:05:38] everywhere by the time you look at that state has reflected that change so like you want to make  sure it's consistent you don't want someone to see you know let's say you have two different  data points that change or whatever you don't want to see to see
[00:05:49] data A in its
[00:05:51] original state.
[00:05:53] and be in its updated state um that would be called tearing where you have like intermediate states
[00:05:59] there can be side effects, impacts of this, you know, while it balance stabilizes, while it like settles down, like if you if you said,
[00:06:09] had to hit an endpoint or an API call based on two different pieces of state.
[00:06:14] and one updates and tells its update, and then the other one updates and tells the update. Well,  you did two fetches when you could have just done one.
[00:06:21] right like if both changes are happening at the same time you shouldn't
[00:06:25] ever create these diamonds or these fetching problems.  And we've talked about that a ton on stream.
[00:06:30] Um,
[00:06:31] But the challenge is these guarantees can only really be made synchronously. Like when you, you know, like once something goes async, you no longer can know because it's not like you're going to have that first fetch wait indefinitely. It doesn't know that it needs to wait.
[00:06:47] Um,
[00:06:48] So
[00:06:51] For that reason,
[00:06:54] we enter a zone where there's what I call the three different modes of what you can do when you hit
[00:07:02] Um,
[00:07:03] you know async in general and when i talk about this is
[00:07:07] With signals, we talk about this, but it's funny, reacts,
[00:07:12] use hook has similar semantics in that it's read based rather than
[00:07:18] write based.
[00:07:20] And what I mean by that is,
[00:07:22] It isn't the fact that you're fetching data that causes your component.  Like it is why your component suspends or throws or whatever, but it's not the point  at which you do the fetching that matters.  It's the point at which you consume it that matters.
[00:07:37] because that's the point where you can't render the UI.  That's the point where you can't show the piece that you need to show.
[00:07:43] you know, if something errors with your async data, yes, you can handle it.
[00:07:50] where you do the fetching and you could if you should if you doing retry logic but
[00:07:55] If you fetch something and no one is listening for it or using it,
[00:08:00] then the UI can render perfectly fine.
[00:08:03] So that is kind of
[00:08:06] Um,
[00:08:07] Thank you.
[00:08:09] the kind of mentality that we've been looking at a lot with async, which is actually turning it into a graph, essentially a dependency graph, just like
[00:08:17] just like in typical reactivity.
[00:08:20] So let me take a look here.  And it's funny because I probably made this list before on stream.
[00:08:30] But we'll do it again. When you have async,
[00:08:34] Thank you.
[00:08:35] Thank you.
[00:08:36] there's three things you can do when you hit something that can't render.
[00:08:40] You can...
[00:08:42] pair.
[00:08:43] which is usually the default in most systems. What I mean by that is
[00:08:48] Pretend you have a user ID and whenever it changes you fetch a user.
[00:08:52] you can show
[00:08:54] when you when you and the first thing you do when you want to fetch the next user, you're going to the next tab, you're cycling through the users in a modal or photos or whatever is show the updated ID because you need to update the ID to go fetch the user, but you're still going to be looking at the old user for a moment. So this is called
[00:09:11] tearing. So this is
[00:09:14] Okay.
[00:09:14] updated sync state,
[00:09:19] stale async state.
[00:09:23] Can you all see this? Maybe I should make this a little bit bigger. Let me change my text size here.
[00:09:29] Should be extra large.
[00:09:34] Yeah, whatever. I'll make the whole thing extra large. I don't really care.
[00:09:38] Um.
[00:09:42] Let's move this.
[00:09:43] farther up okay.
[00:09:44] Thank you.
[00:09:46] Next. So we've all seen this.
[00:09:51] From a framework standpoint,
[00:09:53] This is generally undesirable, but there are cases
[00:09:57] where
[00:09:59] This is...
[00:10:03] you know,
[00:10:04] acceptable you know like what if you're doing like a autocomplete search on the page like  you're okay if you can like type ahead and like do stuff and have things work in the background you  don't need it all to stay perfectly in sync the input field does not need to reflect the results  that you currently see on the page you're allowed to type extra characters and be searching and stuff  so tearing is fine for a lot of stuff and it's what we're accustomed to because one of the  cool things that tearing has that i'm going to add a little sub note here is is
[00:10:33] affordances or
[00:10:37] Uh...
[00:10:39] staleness are sort of built in what i mean by that is i said sort of
[00:10:46] But they're built in because
[00:10:49] When you see...
[00:10:52] the updated sync state,
[00:10:54] Like, yeah.
[00:10:55] It's a...
[00:10:58] you you it's not that the affordances are built insurance that's not quite the right wording it's  more that like you're
[00:11:05] Um,
[00:11:07] immediate
[00:11:10] Feedback is the best way to put it.  There's immediate feedback, because the second you click the tab or change the ID, you'll see the updated ID or the see the updated tab.  So the user knows that the button click worked.  The problem is you're showing them like some kind of half and half state, which, again, for the UI lowers confidence.  And I mean, for background processes can be detrimental. Right.
[00:11:32] Um,
[00:11:33] But there's immediate feedback.  Person doesn't think your app's hung.
[00:11:37] Um,
[00:11:38] The second state of the universe,
[00:11:41] is
[00:11:42] Uh,
[00:11:44] what we see a lot with suspense, which I call is bailout.
[00:11:49] which is
[00:11:53] basically show nothing or something else.
[00:11:58] Right.
[00:11:59] The idea here is like...
[00:12:02] stuff like suspense is an example of this.
[00:12:05] await components in Svelte or whatever.  Like, I mean, at least classically, I know they have a new ASNIC model.  We could probably talk a little bit about that as it comes up.  But my point is,
[00:12:17] Thank you.
[00:12:18] Thank you.
[00:12:19] Thank you.
[00:12:19] Yeah, I I'll talk a little bit about DaVinci a bit later and the updates on start, but.  Yeah, so what I'm talking about here is.
[00:12:29] like show a fallback. But it's important to understand that what's beautiful about this is
[00:12:34] It's...
[00:12:36] Thank you.
[00:12:36] Actually, we can add some more notes here while we're in here.
[00:12:39] because this one has immediate feedback,
[00:12:43] but inconsistent.
[00:12:45] Thank you.
[00:12:45] Thank you.
[00:12:47] This one,
[00:12:49] also has immediate feedback because
[00:12:55] Thank you.
[00:12:55] And it is consistent.
[00:12:57] Thank you.
[00:13:00] because it doesn't show anything. So like the second something goes loading, you suddenly see a fallback, right?
[00:13:05] But I will say,
[00:13:07] incredibly
[00:13:10] jarring when
[00:13:13] you already have data.
[00:13:16] Thank you.
[00:13:17] Right.
[00:13:18] Um,
[00:13:20] Thank you.
[00:13:22] So what I mean by that, I mean,
[00:13:26] I think I I think everyone's seen this. I'm just going to do so.  Just the calm. I'm sorry for people already know all this stuff to start with the basics.  I just want people to understand the language that I'm using when I talk about this stuff.  But if I go into the transition example, but don't do it with transitions.
[00:13:44] Every time I switch.
[00:13:47] You see some kind of loading indicator, right?
[00:13:51] This is fine, but picture if you're on a page and you're doing like a type ahead.  As I said, there's different types of scenarios you can think about.  Would it be very brutal if the whole thing just kept on  like every time you type a character, it would like unmounted and then showed loading.
[00:14:06] And this is really easy to do with suspense.  This is the kind of thing that makes people go kind of nuts with it.
[00:14:17] Thank you.
[00:14:18] Right, right. Which I'll get to.
[00:14:22] in a minute.
[00:14:24] Thank you.
[00:14:25] So, doo-doo-doo-doo-doo.
[00:14:29] Um...
[00:14:31] Sorry, where's my scale draw? Yeah.
[00:14:34] So turn on the drawing when you already have the data. Yeah.
[00:14:37] So,
[00:14:39] Yeah, and you get these like intermediate states.  Suspense is good at bundling them together.  So instead of having like 20 spinners, you have one.  You know what I mean?  But this is, don't get me wrong.  All these patterns are...
[00:14:52] They're not bad, they fit different kinds of use cases, right?
[00:14:58] Let's go down to number three,  which was just suggested in chat,  which is hold in the past.
[00:15:05] um
[00:15:06] Show the current.
[00:15:09] until the new is ready.
[00:15:13] Thank you.
[00:15:14] this one the challenge here with this one is because you're like okay well this should be  the default but check it out you said it yourself i'd rather if something goes fast i thought the  bother showing empty safe just keep going if it loads fast enough is the key because this
[00:15:30] No.
[00:15:32] immediate feedback automatically. Like these ones are automatic because the thing just unmounts. This thing
[00:15:41] The sync state will update so you'll see it.
[00:15:44] Um,
[00:15:45] but this one has no immediate feedback which makes it very awkward  to have as like a default because if something is not fast
[00:15:53] Then, well...
[00:15:55] uh,
[00:15:57] you have no affordances. People think your app hangs. And this is something that we've hidden solid router.
[00:16:03] Right.
[00:16:03] Um,
[00:16:04] Because if people don't use is routing,
[00:16:08] signal, like the thing to say that, hey, I'm pending.
[00:16:11] then they don't get any affordance, right?  Like I'll go back in this transition example and I'll solve it.
[00:16:16] And see, in this example,
[00:16:19] I've added like this nice little fade out with a delay on CSS.  So if it happens fast enough like that, you don't even see a change.  But if it takes longer, I mean, I could probably adjust this example to take.  Is there a way I can make the promise take longer?
[00:16:33] Yeah, let's make it like --
[00:16:37] 1,000, yeah.
[00:16:42] See that? Like...
[00:16:44] how it grays out.
[00:16:47] But now, picture if I didn't
[00:16:51] Add this, what is it called? Where is it? Classless selected tab.
[00:16:55] Where is it? Pending. Yeah, if I didn't use the pending scene here, we have used transition pending.  If I didn't put this pending state in here and I just said pending false all the time.
[00:17:06] What's going to happen is when I switch, I'm going to click and be like, what's happening?  The router is really, really slow.  I click on it.
[00:17:13] You know, and there's this delay click.
[00:17:15] Okay, that one's fast, but click.
[00:17:19] And suddenly you write an issue on GitHub that solid router is really slow.
[00:17:24] It's waiting for the data.
[00:17:25] but you have no affordance.
[00:17:27] There's no immediate feedback here.
[00:17:30] Um.
[00:17:32] I think this is...
[00:17:36] Sorry, this is the one that actually...
[00:17:38] makes it longer. I made the other one variable.
[00:17:42] It should have been like this.
[00:17:47] Yeah, there we go. Now it will. You're like sitting there waiting for the page, the load and then.
[00:17:54] Right.
[00:18:00] Right. I mean, my preference is the old state, but make it obviously the old state is showing and.
[00:18:06] If it loads fast time, if it's still slow enough for me to see the loading state for a bit, keep pretending it's loading for just a bit more.
[00:18:11] Yeah.
[00:18:12] I think the thing is,
[00:18:14] People,
[00:18:16] This is a great comment because you're actually asking for the page to load longer here.
[00:18:22] But the irony is, and this is why, you know, one of the reasons that I was really into transitions, because this is what we're showing here is transition behavior holding the past.  And I'll explain why I need transitions in a minute, but is.
[00:18:34] Most people,
[00:18:36] And then when you add, I mean, let's go back to our original example with the transitions.  I remember I took this into my office workplace and I first showed them this, right?
[00:18:46] All right, sorry, no, no, let's reset it.  I first showed them this.
[00:18:50] I showed them this experience.
[00:18:54] Thank you.
[00:18:56] Right.
[00:18:57] And then I showed them this experience.
[00:19:04] And most people told me that they thought the second
[00:19:07] the second experience here was what was faster.
[00:19:12] right um like i could be a little less aggressive on the fade out delay on this timeout like if i
[00:19:18] delay it
[00:19:21] Let's say point.
[00:19:23] Two.
[00:19:26] Thank you.
[00:19:27] Yeah, exactly.
[00:19:29] There, I deleted it long enough that
[00:19:31] Like I did this one shorter so you could be more visual, but most people said this looked faster.
[00:19:37] They thought it was faster.
[00:19:41] Right? So,
[00:19:43] Like,
[00:19:44] You can, in theory, even make it take longer to load.
[00:19:47] as long as you do it in a certain way, people will feel that the loading is faster.  I'm not suggesting necessarily make your page loader, but in general,  delaying the pending state on transitions is kind of a is often a good thing.  Just a little bit because people have a certain threshold,  I think between 200 and 400 milliseconds where they're like,
[00:20:04] okay for it taking a while so if you don't show the loading state during that time period you're actually okay.
[00:20:11] Yeah.
[00:20:13] Right, exactly. So,
[00:20:15] There are proven UX reasons why people want this sort of behavior, right?
[00:20:24] and this is why this is hard to do or why this transition we'll talk about in a minute but
[00:20:28] There is actually a fourth option we don't talk about very often.
[00:20:32] which is...
[00:20:34] you know, a pretty powerful option, predict the future.
[00:20:39] Um,
[00:20:41] So if you know what's...
[00:20:44] - Oh.
[00:20:45] The good old reason why people add mirrors to elevators. Interesting.
[00:20:53] Thank you.
[00:20:54] Yeah, so what I mean by predict the future?
[00:21:00] Well, I...
[00:21:04] Thank you.
[00:21:04] If you know what's going to happen, you can kind of fake it.  So this is stuff like...
[00:21:11] Temporary temporarily.
[00:21:15] Add next state. This is things like optimistic updates.
[00:21:19] Thank you.
[00:21:20] What's nice about this is immediate feedback.
[00:21:24] Thank you.
[00:21:26] Thank you.
[00:21:27] Consistent.
[00:21:32] can't always do this because you don't know  what the impact is of what you're gonna do.  Do you know what I mean?  Like, sure, like if you're doing a mutation,  you know what data you're saving,  you could pretend that data is already in this dataset.  But if you're just like saying,  I need to refresh the data on my page,
[00:21:47] or get the next user, you don't know what that user looks like always.  I think from a pure UI standpoint, an example of this is when people like stub out
[00:21:58] um but like there's a lot of similarities
[00:22:02] Like, when does this become...
[00:22:05] this.
[00:22:06] bailout, right? Because if you could just make more realistic looking...
[00:22:12] Uh...
[00:22:14] placeholders essentially right because in a sense
[00:22:17] Predict the future is putting in a placeholder. So,
[00:22:22] Arguably, maybe this is like
[00:22:25] not an actual it's like just a version of two
[00:22:29] Because look at the characteristics.
[00:22:31] immediate feedback, consistent.
[00:22:36] instead of being incredibly jarring, this one can't always do this. Do you see what I'm saying? Like,
[00:22:41] They're basically...
[00:22:43] the opposites of each other like they're they basically if you bail out it's jarring if you  can predict the future it's less jarring
[00:22:51] right but they actually have the exact same characteristics between four and two
[00:22:55] Uhm?
[00:22:57] So,
[00:22:58] I don't know if four is actually, if we should just categorize it under two.  But for me, when dealing with async,
[00:23:06] There are really...
[00:23:08] these four options pretty much.
[00:23:12] OK.
[00:23:15] Everyone in chat still with me, right?
[00:23:19] you
[00:23:21] you
[00:23:23] Thank you.
[00:23:23] One is easy to do.
[00:23:25] um
[00:23:28] Right.
[00:23:29] If.
[00:23:31] The funny thing is it's like even easier to do with something like signals than like a top down VDOM render because literally you can just be like,
[00:23:40] render something,
[00:23:42] and do a conditional.  And then when the signal triggers, it doesn't rerun the components.  It just literally goes from where--
[00:23:49] the control flow is and continues on.
[00:23:53] but you can still do this in React or any framework. It's very easy  because it's once you have like an ID or something in place,
[00:24:00] Like, I think people, we've all written probably, I mean, I'm going to play ground right now, but we've all written,
[00:24:07] this code before, right? Where
[00:24:11] where you have something that's like
[00:24:14] I mean, I'm going to use solid as an example, but you have something where it's like show when.
[00:24:21] Uh...
[00:24:23] Um.
[00:24:24] data or let's say user,
[00:24:27] Everyone's seen this, right? Show one user.
[00:24:33] Okay.
[00:24:34] Thank you.
[00:24:35] Thank you.
[00:24:36] You all who aren't familiar with solid,  I think you can still figure out what this component does.
[00:24:42] Um,
[00:24:44] And then like,
[00:24:45] inside you can be something along the lines of like
[00:24:48] I don't know, you're showing something with the user information, right? You're like div
[00:24:53] Thank you.
[00:24:54] Don't get me on my CSS here, but you're like div.
[00:24:57] user dot
[00:24:59] name or something, right?
[00:25:04] Once this is true,
[00:25:07] and like then this is this is always going to be true like even if you have like
[00:25:13] some lovely code up here that's like const
[00:25:16] ID,
[00:25:18] set ID, I mean, it could be from our props, but I'm just doing this for fun here. We can just go like ID equals one and then be like,
[00:25:26] I mean, let's do this the old fashioned way, create effect,
[00:25:31] Um...
[00:25:34] I don't even need to use credit fact, actually.  It's solid.  Oh, actually, I do because I want to react to--
[00:25:40] to the thing. OK, so if we did something like this where we're like,
[00:25:44] Mm-hmm.
[00:25:45] So I could use an async function and add cancellation.  Ignore race conditions and cancellation for a second.
[00:25:52] But if we did something like fetch user,
[00:25:57] ID then
[00:26:00] set ID,
[00:26:04] uh
[00:26:05] or actually, sorry, then
[00:26:09] user
[00:26:11] that I set user.
[00:26:14] either right this is like the most
[00:26:17] Thank you.
[00:26:22] kind of dumb way of doing async.
[00:26:26] So,
[00:26:28] What my point is, you can see this directly from this code,  hopefully, is,
[00:26:33] Initially, user is undefined.
[00:26:37] So when it goes show user, it's false.
[00:26:40] And then, which means it doesn't do this.  And then,
[00:26:43] but it runs the effect on the ID, fetched it,  and once it sets the user,  it continues from here and then does a username.  But when you set the next ID, when you increment it to ID2,
[00:26:53] what ends up happening is
[00:26:55] Show user is still true because you have user 1 already here.
[00:26:59] So then it fetches.
[00:27:01] and then it shows. But if we had somewhere also in the UI something like
[00:27:08] Thank you.
[00:27:09] like this where we're like div
[00:27:12] Now, if you're smart here,
[00:27:15] You would just go user, you just use,
[00:27:18] user.id and people would know that it's the same user and like it would update with it. But you don't always get to do that. Like, let's say it's tied to something, a different component somewhere else, you know, being used. If you if you used ID here,
[00:27:34] what you would see
[00:27:36] I mean,
[00:27:37] We could just do this right now just for the sake of showing off this demo. I mean,
[00:27:42] Let's just implement our function, function, fetch,
[00:27:46] User.
[00:27:49] ID.
[00:27:50] Thank you.
[00:27:52] Um...
[00:27:54] Thank you.
[00:27:54] Return new promise.
[00:27:58] Thank you.
[00:27:58] It's all...
[00:28:03] Thank you.
[00:28:05] Set timeout.
[00:28:08] Thank you.
[00:28:09] Uh...
[00:28:10] res, then we'll have to make something up, which is like ID,
[00:28:18] Name.
[00:28:22] Whatever I don't really care.
[00:28:24] and give it one second timeout.
[00:28:27] Um,
[00:28:29] Import crit effect as well. Create effect.
[00:28:34] ID is a number, hopefully.
[00:28:40] on let's import.
[00:28:43] um
[00:28:46] Is it show?
[00:28:52] Then all we need to do here
[00:28:56] is
[00:28:58] add a button,
[00:29:01] I'll put the button in here too.  It doesn't have to be, obviously.
[00:29:06] In other situations, the button would be problematic if it was in here.
[00:29:10] But for the...
[00:29:14] Let's implement it and then on click.
[00:29:21] Thank you.
[00:29:23] set ID, ID plus one, okay, right.
[00:29:31] See, Karen.
[00:29:32] Right.
[00:29:34] ID updates.
[00:29:35] I mean, I think it's more clear.
[00:29:37] Thank you.
[00:29:38] Okay.
[00:29:42] Right.
[00:29:44] This is kind of like the default.  You know what I mean?
[00:29:48] Thank you.
[00:29:50] All right.
[00:29:53] you know it's you can click like five times and then this is because these are set times but if  if we wanted to make real case
[00:30:00] I would make this last number random.
[00:30:02] And then you would see all sorts of problems and race conditions here.  So I mean, right off the bat,
[00:30:09] I mean,
[00:30:10] we see problems with the naive solution.
[00:30:14] But...
[00:30:15] there's ways to fix this naive solution. One of the ways is, um,
[00:30:21] using dedicated data fetching permitters, stuff like React Query, stuff like Solids Resources or Create Async.  These will deal with weird race conditions, right?
[00:30:33] So that, and
[00:30:35] Mm-hmm.
[00:30:35] But in general,
[00:30:39] Thank you.
[00:30:41] I,
[00:30:42] There are cases where this is not desirable is all I'm trying to get at. Right.
[00:30:47] Let's go back here.
[00:30:49] right immediate feedback though right i i click this thing
[00:30:53] The second I click it, that updates.  I know something's happened.
[00:30:57] So,
[00:30:59] That's easy to do.
[00:31:01] This is also easy to do.
[00:31:04] the bailout.
[00:31:05] Right. I mean,
[00:31:06] Forget about nesting and suspense and all the cool stuff.
[00:31:08] All you have to do
[00:31:11] is essentially
[00:31:15] Add.
[00:31:16] some kind of loading state conception because
[00:31:20] If we add another signal here and go const,
[00:31:25] is loading.
[00:31:29] Thank you.
[00:31:29] Thank you.
[00:31:32] step loading.
[00:31:36] Thank you.
[00:31:40] Thank you.
[00:31:41] Right.
[00:31:42] And we can say initially loading is false.  It doesn't really matter.  It's going to load right away anyways.  So then we go here.
[00:31:49] Set loading.
[00:31:51] - True.
[00:31:52] And again, we're not handling race conditions. We're not handling.
[00:31:59] Thank you.
[00:32:00] all the other fun stuff that comes from this.
[00:32:03] Um,
[00:32:05] I know I'm glazing over this stuff.
[00:32:07] But,
[00:32:08] That part,
[00:32:09] is actually handled pretty well by most frameworks these days,  as long as you're not using use effect, as long as you're using,  I guess react doesn't ship with it exactly.  I mean, they have certain months that handle this, but, but like,  it's so I haven't used use effect, the data fetch for, for,
[00:32:24] ever because we introduced basically something like a very basic version of  query um in solid back in 2019-18 like right right at the beginning i was just like this this is
[00:32:35] so many places to screw up. But
[00:32:38] All we have to do here is we wrap the loading state and then you go,
[00:32:42] When?
[00:32:44] Thank you.
[00:32:45] Not is loading.
[00:32:49] And there's a user.
[00:32:50] then we'll show this. And then obviously now we need to fall back.
[00:32:55] so that we can actually see that it's loading.
[00:32:59] so that when we click it,
[00:33:01] There we go.
[00:33:03] loading.
[00:33:04] I mean, this isn't suspense.  This is way simpler than suspense, but you get the idea.
[00:33:09] Right.
[00:33:10] what i was this is where i was talking about where the button might actually
[00:33:13] being on the inside might be
[00:33:14] might get on it.
[00:33:17] Let's do a fragment here.
[00:33:19] Thank you.
[00:33:20] Um...
[00:33:23] Okay.
[00:33:25] Thank you.
[00:33:27] Now what we can do is we can keep the button here
[00:33:32] My CSS is just terrible.
[00:33:34] I'm so, I'm like...
[00:33:36] Just to be lazy, I'm just going to do this just so I don't have to deal with it.
[00:33:40] Just changing the inline
[00:33:44] There we go.
[00:33:46] Oh, okay. So my point is I can hit it like five times. Oh, look,
[00:33:51] this actually screwed up because of it does this doesn't handle race conditions it's not keeping  a counter this is this is why i want to show again just how many places naive data fetching
[00:34:03] falls apart.
[00:34:05] because
[00:34:07] If you have multiple concurrent ones, this loading can't be true.  It actually has to be a counter.  So then you have to change this to
[00:34:15] 0,
[00:34:19] and then change this to C, C minus one.  And even this won't handle stuff coming out of order.  This will just make,
[00:34:27] this
[00:34:30] Thank you.
[00:34:31] this particularly perfectly symmetrical time example.
[00:34:36] probably work when I click it like five times.
[00:34:40] Yeah.
[00:34:41] Thank you.
[00:34:43] But,
[00:34:46] It's kind of crazy that when you use frameworks,  you have to manage this stuff.  As I said, I'm not even using random return times, right?  Because otherwise, that would throw a freaking wrench  in everything.
[00:34:58] But,
[00:35:00] The reason I want to show it this way instead of using suspense or like transitions and type stuff is that these are general concepts. This is like physics. This is like truth of the universe of how you can handle these situations. There's not like...
[00:35:13] This is not framework specific.  This is just reality, right?  Suspense is an example of this,  but you can do it manually like I just showed.  Suspense is powerful because it does a,  what do you call it?  Like a,
[00:35:27] I
[00:35:28] The thing I can't forget, I forget the programming term for it when you
[00:35:32] um,
[00:35:33] inversion of control.
[00:35:35] Yeah, inversion of control.  Suspense basically lets the children decide the situation.
[00:35:40] Okay.
[00:35:42] So,
[00:35:44] Thank you.
[00:35:47] Let's continue.
[00:35:50] Yes.
[00:35:51] Let's talk about holding the past.  We can hold in the past is so hard.
[00:35:56] is...
[00:35:59] So
[00:36:00] is this situation now
[00:36:02] I'm going to get rid of the loading for a second, because now we're back to like not.
[00:36:07] doing the loading.
[00:36:08] Right.
[00:36:09] So,
[00:36:12] I mean, we might still need to know about loading,  but it's not going to be dictating whether we show stuff.  So I'm going to leave the loading.
[00:36:18] for now and see if we need it for something in a minute.  But if we wanted to hold in the past,
[00:36:24] Our problem here,
[00:36:26] Now, obviously I can use user.id, but that's not a fair testimony of holding in the past, right? The way you hold in the past is
[00:36:35] Um,
[00:36:37] Yeah, I probably don't.
[00:36:40] need loading for this example.  The way you hold in the past in the naive way,
[00:36:46] would be to
[00:36:48] Thank you.
[00:36:49] Go const.
[00:36:51] Next.
[00:36:52] ID set next ID equals create signal.  We'll start at one here as well.
[00:37:03] Thank you.
[00:37:04] And then
[00:37:06] The problem is...
[00:37:08] you can't,
[00:37:09] Yeah.
[00:37:11] You need to update the thing here in order to fetch the data, but then you don't want it to  update here. So what you have to do is essentially just conceptually,  if you make it next ID here, and then when you click, you set next ID,
[00:37:24] Thank you.
[00:37:25] And then when you finish the fetch, you go that--
[00:37:29] ID to
[00:37:32] you know,
[00:37:33] Bye, Dee.
[00:37:35] Thank you.
[00:37:36] or actually a better way to do this
[00:37:39] would be more correct way would be const,
[00:37:43] id equals next id so grab you want to grab the one that you fetched with you don't want to like  read it at that point
[00:37:52] and then set it like this.
[00:37:58] There we go.
[00:38:00] There we go.
[00:38:02] And if I click it five times,
[00:38:04] huh.
[00:38:05] uh,
[00:38:07] that's fine because it makes sense. We're not
[00:38:11] But you understand that this actually has the race condition problem.  When you see stuff like that, you know that potentially these took variable different timings.  So if you could solve the race condition problem,  you know,
[00:38:22] like with your base principles, like don't use create effective data fetch, use, you know,
[00:38:27] of data fetching primitive, then
[00:38:30] This would, you know, basically when you click it five times,
[00:38:33] it would recognize that and then it would jump from 10 to 14. right but my point is
[00:38:38] This is how you do it.
[00:38:40] And.
[00:38:41] It's not hard to do.
[00:38:43] Thank you.
[00:38:43] What we did is we took...
[00:38:45] the state,
[00:38:47] And then we
[00:38:49] forked it we created a different version of that state and said look we're going to  use that different version to fetch so we're going to set it ahead
[00:39:00] and then we're going to do our thing, and then we're going to update the synchronous graph at the end so everything is consistent at the end.
[00:39:06] and kind of like shift it
[00:39:08] through.
[00:39:10] Now, if other things derived
[00:39:14] from
[00:39:16] from you know id or next id then you need to pull them out and fork them as well because basically every
[00:39:24] part of the chain that happens before the data fetching,
[00:39:27] needs,
[00:39:29] to not...
[00:39:31] apply until the data fetching is done.
[00:39:35] Right. This is very important because this is like an on write consideration.  It's not on read.  We were talking about on read because we're worrying about like, can we show the UI?  But what this means is.
[00:39:46] up until the point of async, right?
[00:39:49] data propagation can't be committed until the async is done.
[00:39:52] if you want to have this consistency. Otherwise, something's going to leak. Something else that depends on it's going to show up in the UI or show up somewhere else. So
[00:40:00] It's not as simple.  I mean, it's fine.  If you control everything, let's say you own the router, right?
[00:40:06] Conceptually, if this ID is your location,
[00:40:11] and then this is your next location.
[00:40:14] You know everything that you need for the next location, the data fetching, all that.  So if you control that all within inside your system, you could build a whole system out.
[00:40:24] that reads off NextID based on your internals,  and then at the end, exposed to the user,
[00:40:29] maybe this ID stuff.  Well, I mean, it's a little trickier that, right?  What if the user has to use your location  somewhere deep in their component tree?
[00:40:36] They need the updated location when it's rendering the next page.  But then at some point, you're going to switch it back on them, like,
[00:40:45] Do you re-render the page again?
[00:40:47] like from react standpoint or like,  like how do I swap it?
[00:40:51] from listening to
[00:40:53] Next ID to normal ID, like from a reactive standpoint, like let's say I build the next page all using next ID, right? And then
[00:41:02] At some point, it has to become the ID so that
[00:41:06] when the next page comes,
[00:41:08] it doesn't immediately change because it's the next ID.  Like this is very easy to understand from a reactive graph standpoint,  because you literally made the dependencies against
[00:41:16] this signal, not this signal,
[00:41:18] which means that
[00:41:20] the following one, it's still going against this signal.  You want to almost swap the signals that go back from next ID to the generic ID so that the next page can render off screen and you can keep this one fine where it is.
[00:41:32] Um,
[00:41:33] But let's pretend we're not using SQL.  Let's pretend we're using React.  Well, if we're using React...
[00:41:38] It's almost like we have to render the page again because
[00:41:41] the, like...
[00:41:43] Yeah.
[00:41:43] there's this kind of
[00:41:45] Weird.
[00:41:46] awkwardness here.
[00:41:53] Split context, so the fork has the next location, that's the URL bar, and the previous view has the label location. Yes, but then at the end, you have to...
[00:42:02] Reconcile that so that the next becomes the current.
[00:42:06] so that it doesn't get changed when the next next happens.
[00:42:13] and you'll still want it loading affordance.  This was the problem here, right?
[00:42:18] no immediate feedback automatically. You're right.  I took out the loading affordance, but realistically,
[00:42:25] um
[00:42:26] You're right, sorry, let's add it back in.  Is loading.
[00:42:30] that loading because it actually didn't remove the need for the loading affordance.
[00:42:35] really because now
[00:42:37] What we actually want to do
[00:42:40] Cheers.
[00:42:42] Yeah.
[00:42:43] Thank you.
[00:42:45] We want to do it in a different way. We have to go set loading true.
[00:42:54] really matter set loading balls.
[00:42:58] And then,
[00:43:01] we don't want it to yank it out because that defeats the whole point of keeping the pass  but we might do something like um
[00:43:07] So we don't have this fallback loading, but we might do something like
[00:43:19] Whatever, I'll just do a div, you know what I mean, div soup.
[00:43:27] Something like.
[00:43:29] is loading--
[00:43:31] Thank you.
[00:43:32] Thank you.
[00:43:34] Thank you.
[00:43:35] Loading.
[00:43:37] Thank you.
[00:43:40] Exactly, yes.
[00:43:42] Do this.
[00:43:46] I think.
[00:43:48] All right.
[00:43:50] It's because there's no initial.  You see there's actually two different loading states.  I got rid of it.
[00:43:56] If I put the fallback here, fallback.
[00:43:59] Thank you.
[00:44:00] loading. It's a different loading. This is like the initial loading.
[00:44:06] thing, and then this is like the
[00:44:08] Thank you.
[00:44:12] like this.
[00:44:15] Yeah.
[00:44:16] race conditions again but you get the idea
[00:44:19] Right. Because this way you can hold in the past while giving the indicator.  This is the like graying it out thing where the fallback is like the suspense.  Right. So
[00:44:28] we're actually talking about multiple affordances this this is why
[00:44:34] This is one of the reasons why you can't just default to number two.
[00:44:39] very easily like where does this come from like some people
[00:44:44] or sorry as the people but some frameworks kind of been working on approaches where they can do  something sort of default to number three here some some uh
[00:44:52] Some frameworks have been working about injecting this kind of loading state
[00:44:56] through components.
[00:44:58] so that like it kind of holds and then doing that but the problem is and you can see this here is
[00:45:06] You could do this at a component level, but it's very, very restrictive, right?  Because this is a, transitions are actually global, right?  They're above the suspense.  It's everything before the async that matters that you have to fork.  So the second you make the transition about the components and try and localize it,
[00:45:23] you can immediately break that by making a change higher up. So like,
[00:45:29] It's not the right
[00:45:31] mechanism for for holding to just say like oh i hold that component level it does it actually  doesn't make sense because it's this is on a right
[00:45:39] It's where the right matters components are about the read.
[00:45:41] So,
[00:45:43] um
[00:45:44] And
[00:45:46] Like,
[00:45:47] I
[00:45:48] This is a hard problem.
[00:45:51] There's like, I'm hoping you're starting to understand why frameworks are built in async primitives.
[00:45:57] I mean,
[00:45:57] react
[00:45:58] doesn't really, but I mean, use is
[00:46:01] verging on it.
[00:46:03] And,
[00:46:06] i mean it's why they push server components because it handles this stuff because like streaming in  this can also be handled if you have the primitives and you can actually inform  stuff like ssr and stuff but it's also why
[00:46:16] transitions,
[00:46:18] are not simple to bypass.
[00:46:27] sorry, the same context key, but the fork has this next value.  So when it swaps in, there's nothing to update. So like,
[00:46:36] Yeah, yeah, I see what you're saying.  Like you keep the signal references the same.
[00:46:40] But then like you swap things.
[00:46:43] you just keep on creating the next thing.  And you swap the pointer to what is next, essentially.  So you build the next tree with the graph.
[00:46:53] And then...
[00:46:55] the code that will build the next tree will create new signals and they become the next tree  and so on. So you just switch the pointer basically to the section of the graph so it  doesn't have to actually update.
[00:47:08] It stays fixed on the same thing, yeah.
[00:47:11] Thank you.
[00:47:12] Thank you.
[00:47:14] Bye.
[00:47:16] That being said, that only really works, as I was saying,  is in a situation where you know you can control the fork state.  So like if you control the router,
[00:47:25] And you can be like, look,
[00:47:27] the router has this capability specifically.  It's not a generic mechanism.  You know what I mean?  Like you can be like, I know everything  that is going to drive off it.  And I'm the one who's actually supplying that  to my downstream.
[00:47:40] to my downstream things.
[00:47:42] Um,
[00:47:44] In that scenario, you can build a very, like,
[00:47:48] you can contain the solution.
[00:47:52] specifically.
[00:47:54] Thank you.
[00:48:00] Thank you.
[00:48:02] Yep. I mean, yeah, actually, I like this. You're right. You're right.
[00:48:08] And this will...
[00:48:10] This will actually help a bit with our...
[00:48:14] our state synchronization problem here.
[00:48:18] Let's see, where do I put it is loading?
[00:48:22] And for people who've used React,
[00:48:26] Um,
[00:48:28] - This is actually beautiful.
[00:48:32] because
[00:48:37] Thank you.
[00:48:37] Yeah, React is useless without-- yeah, yeah, that's true.  It can't be used on its own.  Yeah, that's a good point.
[00:48:43] Yeah.
[00:48:43] Because use memo isn't guaranteed not to rerun again.  Yeah, no, for sure.
[00:48:47] the reason i like the solution is this this is uh what is it use deferred value
[00:48:53] essentially, like,
[00:48:55] Now when I do this,
[00:48:58] And I click it five times.
[00:49:00] It's it's it's it's.
[00:49:02] it doesn't solve all the race conditions but the loading state actually is is proper right this is
[00:49:06] This is like a really...
[00:49:09] simple version of use deferred value, right? Because you have,
[00:49:12] the ID and the next ID, the forked versions of the IDs.
[00:49:19] So,
[00:49:21] Um,
[00:49:23] Yeah.
[00:49:24] This is--
[00:49:26] This is kind of
[00:49:29] where a lot of complexity comes in, right?  Because either you manually fork it,
[00:49:36] and maintain the swaps of context, right?
[00:49:39] in a container scope.
[00:49:42] or you do a general solution, right?
[00:49:44] The general solution is complicated, so I can understand why someone would want to step back from it. But I'm just saying like,
[00:49:55] we like there's things there's problems we have to solve here right there's
[00:50:00] Um,
[00:50:02] There's race conditions in terms of the fetch.
[00:50:05] There's...
[00:50:08] If we want to be able to do this kind of holding ability, we need the ability to we need to know exactly what's forked and contain that and handle the context switching.
[00:50:16] Um,
[00:50:19] even with these simple examples that I'm showing here,  they're not foolproof. You actually have to do
[00:50:25] more, more work.
[00:50:27] So
[00:50:28] which,
[00:50:29] Okay.
[00:50:30] I'm hoping I've at least
[00:50:33] shown the general concept here and made a case for why these solutions exist, right?
[00:50:39] I'm not talking about it's funny because when people talk about concurrent rendering and react, they talk about, you know, time slicing and all that stuff.
[00:50:45] I don't care about time slicing demos.
[00:50:49] Um,
[00:50:50] Honestly, I'm not.
[00:50:52] I shared a clip up on Twitter a little while ago,  but Aiden from Million and me had the very best time.
[00:51:00] comparing million to React fiber time slicing.
[00:51:04] it it was such a great example or demo of things um because
[00:51:11] I wish I actually had the demo still in front of me.  I mean, I could pull up a clip from Aiden's stream.
[00:51:18] But like, I mean, let me see if I can find it.  YouTube.
[00:51:28] Thank you.
[00:51:33] Um...
[00:51:37] What let's go was it live?
[00:51:42] When I want to kind of...
[00:51:44] Let's see, Aiden, Aiden, Aiden.
[00:51:48] million.js, there should be like a
[00:51:51] Block VDOM, yeah.
[00:51:55] Yeah, I'm going to play this clip for a minute just to refresh people on this topic because I
[00:52:01] I can't emphasize this fact enough.  I'm going to change how I present.  I'm going to remove this for a second.
[00:52:10] Present.
[00:52:14] Thank you.
[00:52:16] Chrome tab, yeah, here we go. Let's do this.
[00:52:23] Thank you.
[00:52:25] Thank you.
[00:52:27] This little clip is just great.
[00:52:29] Thank you.
[00:52:31] Like an example like this seemed even smoother. So when you say reactor it's a fiber, is this 15 versus 16 or something else special?
[00:52:42] It's using the same version, but Fiber used start transition.
[00:52:46] Okay, good, so we'll see concurrent rendering.
[00:52:49] All right. Is this the idea that I'm...
[00:52:52] I'm supposed to do this like really, really fast.
[00:52:54] You might need to put up a note count so there's some more effects.
[00:52:58] Okay.
[00:52:59] Yeah. All right. I can add a zero. I can go like this.
[00:53:04] Mm-hmm.
[00:53:05] Yes.
[00:53:07] I love this. I'm getting ads on my own channel. That's hilarious. Um,
[00:53:15] it's before you leave can you turn that document into a pdf for me thanks
[00:53:20] Yeah.
[00:53:24] I did it.
[00:53:31] I killed it.  Okay, fine.  Let's meet in the middle.  5,000?
[00:53:36] Yeah.
[00:53:40] There we go.
[00:53:41] I first want to say this. These examples are all for concurrency are always so dumb because in order to actually do anything with them, you have to actually like.
[00:53:49] pump the number of nodes out to some stupid amount that it's like pushing the cpu and so it's kind of like
[00:53:56] Anyways, let's just
[00:54:03] - Yeah. - Paint it red, okay.
[00:54:07] Yeah.
[00:54:09] Thank you.
[00:54:11] I don't know if people notice this, but every time I press the button on the stream, I actually lift my hand to try and show like the delay, but my hands even has a bit of delay on it, right?
[00:54:20] It's better.
[00:54:24] This is the example I wanted, thank you.  This is exactly, you can see start transition
[00:54:30] already kind of making it
[00:54:32] The big thing about StartTransition is,
[00:54:34] I love this example 'cause it shows it.
[00:54:37] Look.
[00:54:38] When I click this on React, there's going to be a delay.
[00:54:43] When I go to Fiverr,
[00:54:46] or concurrent rendering, there's still going to be a delay.
[00:54:49] Because even if it can schedule the stuff so it's non-blocking and keeps on spinning,
[00:54:54] It can't make the work happen any faster.
[00:54:57] Right?
[00:54:58] - It's for a million.
[00:55:00] I really hope this works.
[00:55:05] - It does.  - Okay. Yeah. - And there's less,  but here's the difference.  There's less delay.
[00:55:12] This is the fundamental difference. Right? Like I'm not talking about the the latency here on this spinner thing. I'm talking about between me clicking the button and seeing an update on the screen.
[00:55:24] I click the button,
[00:55:26] concurrent react,
[00:55:28] made it so that the spinner doesn't die, like the animation doesn't die.
[00:55:33] but there's a delay between me clicking the button and seeing the 15.
[00:55:36] or the 16 or the next number million.
[00:55:40] the spinner might chug a little bit,  but there's no delay on the,  there's almost no delay on my response here.  And the original React is just,
[00:55:49] Bye.
[00:55:51] delay and
[00:55:53] chugs the, like, kills the animation.  Do you see?  There's less delay here.
[00:55:59] Okay.
[00:55:59] I'm trying to raise my hand so people can see the delay.  Even if I go to Fiverr, which has the same looking graph,
[00:56:06] to be fair, like it doesn't delay it that much.
[00:56:09] Like he doesn't like
[00:56:11] trail that much.
[00:56:12] There's a delay.
[00:56:16] Which is the whole thing is that concurrent rendering  doesn't improve performance.
[00:56:21] Right.
[00:56:21] Like,
[00:56:22] This is why...
[00:56:24] um
[00:56:26] it like you it still has to do the same amount of work it just does the work off screen
[00:56:31] and lower prioritizes it so it doesn't affect what's on screen.  So like there's benefits to it, but it doesn't actually
[00:56:38] make.
[00:56:39] it faster.
[00:56:41] Right. I mean, the idea here is that you're supposed to assume that this thing that you're  incrementing is less important, which makes these demos terrible because usually the thing you're interacting with
[00:56:50] is the important thing.
[00:56:52] thing right so um these demos are always
[00:56:57] or like sometimes backwards.  I think that's why the Saspirsky's triangle example  was used a lot because they tried to prioritize
[00:57:05] the animation and the clicking and hover over the...
[00:57:11] numbers updating inside, which is actually more like an animation.
[00:57:15] facet so it like there's a conflict here right like
[00:57:18] which is kind of funny. It's like,
[00:57:19] The thing you're interacting with, you probably actually want the speedy response on.
[00:57:23] not all like the background updates and animations but when you but the background updates and  animation to the things that make your app appear sluggish like noticeably right so fiber  and concurrency from performance standpoint is great in that it makes the app not
[00:57:38] appear
[00:57:39] as sluggish because the animations are smooth,
[00:57:42] I remember doing this in React Native, not like currency,  but the fact that you did a lot of work to try and make it seem smooth,  even if the total output was slower.  We talked about this earlier.
[00:57:52] Um,
[00:57:53] It's the...
[00:57:56] It's the optical illusion of performance that matters to transitions, right?  Because the things that you end up smoothing out,
[00:58:04] are
[00:58:05] it's usually like the opposite, like it's like the background, like the thing you're actually
[00:58:13] interacting with is the thing you actually end up slowing down
[00:58:17] from like a total time spirit, but you make the whole app feel like it's smoother.
[00:58:22] So in a sense,
[00:58:24] it has a positive UX gain.
[00:58:27] but it doesn't have a performance gain.
[00:58:35] Okay, so...
[00:58:38] I'm hoping
[00:58:41] I've made that part of this at least somewhat clear.
[00:58:46] Thank you.
[00:58:56] okay so
[00:59:04] I think what transits a Git branch is to create a new branch, you need to fork one commits for both. But I mean, my stream cover today was Git. I whenever I talk about concurrent transitions, I use Git as as like my image for it because.
[00:59:16] Um,
[00:59:17] especially when doing concurrency and reactive libraries,  like things with signals, it is way more like,
[00:59:22] Get um.
[00:59:24] But let's get there.
[00:59:29] Hello.
[00:59:32] Anyway.
[00:59:33] I
[00:59:34] I think I think I'm hope I'm hoping that I've established.
[00:59:38] what transitions are, why they're important, and what they're not.
[00:59:42] Um,
[00:59:43] when you when can you be looking at these async problems so
[00:59:47] um let's see where to go to next there's been some good discussion on twitter um
[00:59:56] Thank you.
[00:59:58] LLM framework stuff.
[01:00:00] - All right, Florence, I'll worry about that later.
[01:00:02] Um,
[01:00:03] Because I do have some...
[01:00:06] So,
[01:00:06] Oh, yeah, we can talk about actions.  Do I want to talk about actions yet?
[01:00:11] Um...
[01:00:16] Thank you.
[01:00:18] Yeah, it's one of the big topics here. I think actions we should talk about. But before that,
[01:00:26] All right, because actions, I'm just trying to think of the order here.  Let me just pull up my HackMD right now because
[01:00:32] I...
[01:00:41] Oh, it's been that long.
[01:00:52] you
[01:00:53] Thank you.
[01:00:55] Give me a second.
[01:00:59] This is what happens when I don't stream in three weeks.  You can tell that I don't do most of my work on this computer.
[01:01:07] Thank you.
[01:01:15] um
[01:01:20] Thank you.
[01:01:22] Okay.
[01:01:23] Thank you.
[01:01:28] all right we're in
[01:01:35] I
[01:01:36] Yeah, so since last stream, I've written one, two, three, four, five, six, seven, eight, eight hack MDs.
[01:01:47] But most of them...
[01:01:51] I did a couple about...
[01:01:55] Firewalls and drive state. I don't think I'm going to get into today.  It's a safe to write your single and drive computation.  Vdom is a proxy non-reactive effects dynamic optimized.  Yeah. So half of these are actually about
[01:02:06] other
[01:02:08] design considerations.
[01:02:12] Thank you.
[01:02:18] I'm going to, let's see if this is a good place to start.
[01:02:25] Thank you.
[01:02:27] Yeah, so let's just get into how one would design
[01:02:33] transitions,
[01:02:34] And I will publish this one out here.
[01:02:39] publish.
[01:02:43] Copy link, I'll put it in here in the chat.
[01:02:47] Thank you.
[01:02:51] All right.
[01:02:52] Thank you.
[01:02:54] So,
[01:02:56] I've kind of shown how we could mechanically do it manually,  but how would we approach actually designing a solution like this?  The way React works generally on this is they literally just
[01:03:07] fork the component tree from
[01:03:09] that
[01:03:10] location like from that state change so state change tied to components in react so you know  what whatever you call set um like with inside the transition api whatever you state change you call  it's going to basically go okay from these components down they're going to be part of a transition then it
[01:03:29] basically renders them off screen.
[01:03:32] collects all the async, you know, all the used places.
[01:03:36] There might be places where it has to stop and re-render, you know,
[01:03:40] because it throws, you know, components up.  But generally it just kind of works its way down  through that tree, re-rendering everything top down,
[01:03:48] as it hits stuff and moves through and then when it's done  it will say look this is the new vdom tree diff it against
[01:03:55] what's there and um
[01:03:58] you know, show the ability.
[01:04:00] a UI. That's how I would summarize transitions.
[01:04:05] you know, in React. And I mean, I could write that down if that helps.
[01:04:09] people visualize it, right?
[01:04:13] I didn't want to move that. I wanted to move me.
[01:04:17] Yeah, let's move me.
[01:04:21] Yeah, let's do this.  I mean, this is a grand oversimplification here.  But generally, transitions in React is like--
[01:04:30] capture
[01:04:32] state i.e. components that update,
[01:04:36] Inside transition.
[01:04:39] Thank you.
[01:04:40] Thank you.
[01:04:43] Um,
[01:04:47] deferred
[01:04:51] until they defer to later, basically.
[01:04:54] a render of
[01:04:58] these components off screen.
[01:05:09] Yeah, and actually, I want to take a moment to stop here because some people think that they solve transitions differently.
[01:05:17] almost the way that we solve
[01:05:19] some stuff in animations it's that like
[01:05:24] it's possible to cull values in the past sometimes by just
[01:05:30] keeping reference to the DOM nodes and unhooking them from the reactivity system.
[01:05:34] Right.
[01:05:35] Um,
[01:05:37] Thank you.
[01:05:38] And so like if you basically said, okay, I'm going to...
[01:05:44] They freeze what I have there.
[01:05:46] And then...
[01:05:47] Um,
[01:05:48] Do...
[01:05:49] update these states so now the the ui is not updating you know fetch the thing in the on the next you know
[01:05:56] and then swap it in.
[01:05:59] That...
[01:06:00] kind of visually might give you something that looks a bit like transitions.
[01:06:04] Um,
[01:06:05] But it is...
[01:06:08] Not quite the goal here because you don't know how long that async is.  You don't necessarily want to freeze everything.
[01:06:16] everything right and i told you it's about right it's global right it's not you can't just you can  try and compartmentalize it but then the second you have to go higher you have to re you have to  reformat that boundary so to speak it doesn't make sense to make transitions local
[01:06:31] it's a write mechanism, not a read mechanism.
[01:06:35] So like
[01:06:37] Because of that,
[01:06:41] Most...
[01:06:42] proofs that transitions work.
[01:06:45] involved,
[01:06:46] having a counter on the page or a spinner on the page or something that's constantly updating the
[01:06:53] while under the transition, because you have to show that both the future state exists
[01:06:59] and the past state is still updating at the same time.
[01:07:04] Thank you.
[01:07:06] Yeah.
[01:07:07] It moves in React, which is not great because you just sometimes change your mind when navigating. Yeah, for example, example. Yeah, that's a great example of navigating. You click and then you go to click again and no, sorry, we've detached the thing now.
[01:07:19] If it's an anchor tag, the browser might try and do its own kind of navigation.  You know what I mean?  Like do a full page navigation.  But let's pretend we're using buttons or something.  Like basically any action, you're allowed to like...
[01:07:33] The page needs, you need to be able to keep this stuff interactive.  Otherwise, you know,
[01:07:37] it doesn't really work properly and i i want to
[01:07:40] This is why it's important to understand it's not simple enough to just
[01:07:45] you know go okay well this is the new branch uh keep on showing the old one but kill it like  that that doesn't actually solve the problem
[01:07:55] So,
[01:07:57] Yeah.
[01:07:58] I...
[01:08:00] So when you -- the state -- so capture state components update inside transition, which also involves
[01:08:08] like,
[01:08:09] some sort of forking. I don't know how React does it or when exactly they do it, but you have to understand that
[01:08:14] The state that you write
[01:08:16] Like see React always writes state in such a way that on the,  when it takes that state, you look at next line,  you don't see the state update.
[01:08:22] So transitions don't seem actually that jarring from that perspective.
[01:08:25] Um,
[01:08:26] and it's kind of like you don't know when that state applies. So React has some kind of
[01:08:31] Like, I don't know if they have to do forking at this point or how they manage that, but basically
[01:08:36] like
[01:08:38] Keep the pending, don't apply the pending state.
[01:08:42] Thank you.
[01:08:43] Thank you.
[01:08:46] Right?  Capture the state that changes update string,  but don't apply the pending state.
[01:08:49] And in React, it's pretty straightforward because, again, there's no expectation of you seeing it during the synchronous execution anyways.
[01:08:57] But...
[01:08:58] they have to know like don't apply it until defer a render of these components off screen right so
[01:09:04] Collect.
[01:09:06] Collect.
[01:09:08] Promises.
[01:09:09] you know, via use or whatever.
[01:09:13] Thank you.
[01:09:17] Yeah.
[01:09:18] Thank you.
[01:09:20] Thank you.
[01:09:20] Thank you.
[01:09:22] Were you...
[01:09:24] rerun
[01:09:26] Render as promises complete.
[01:09:31] Thank you.
[01:09:35] Oh.
[01:09:38] So this is like,
[01:09:39] Thank you.
[01:09:41] Thank you.
[01:09:41] Go to two.
[01:09:44] You know what I mean?
[01:09:46] Like basically you do this loop while it's collecting promises, render profit.  This is why caching or like it's awkward because use memo isn't always enough.  Like you need a way to make sure that like if you're fetching in the tree, you're
[01:09:56] you're not refetching and restarting this infinite loop over and over again
[01:10:06] And then finally, when no more promises,
[01:10:13] Thank you.
[01:10:16] diff
[01:10:17] and patch tree, right?
[01:10:24] If patch lively, okay.
[01:10:27] Yeah.
[01:10:28] main tree whatever i let's say main tree now a couple details uh that are important here is
[01:10:35] It's funny because React, when they first came out, they wanted to do multi transitions.
[01:10:39] But they-- but--
[01:10:41] Technically, I told you Solid released in December.  We actually released our transition feature before we reacted.
[01:10:46] I was so sold when I saw those original demos.
[01:10:49] I didn't care about time slicing because people were like, oh yeah, this will solve React's performance.  I mean, by now, at the time, people didn't know, but by now, people know that when React is going to solve the performance problem,  they're not talking about the performance problem you think they're talking about.  They're talking about the performance problem of having a thousand developers working on a project and doing really dumb stuff.  They're not talking about making the framework at all faster.
[01:11:13] Um,
[01:11:14] But,
[01:11:15] you know,
[01:11:16] everyone was like really stoked on that aspect of it that was the least  important part about this as you know we showed the performance is not even really
[01:11:24] something I'd be considering too much for most people, right?
[01:11:29] But...
[01:11:31] the ux automation aspects of this to remove the tearing it's actually quite quite nice um so
[01:11:40] for that reason what i did i was having some trouble when i was working through  this and and making it work right i made a decision i was like
[01:11:47] How many futures do we need? So I decided to make one future.
[01:11:51] in that December 19th, 2019 release.  I was like, let's do one feature.  And React is advertising how they have all these multiple features.  They have these really cool experimental docs  that are used as a baseline to understand the behavior.  They're not up anymore, but they basically showed suspense,  transition, all the stuff.  They're kind of like the blueprint.  Even back then, I was talking to Ricky the other day  from React core team, and he was like,  suspense always did this.  And I'm like, no, no, not in your original docs.  There was actually a version of suspense
[01:12:21] transitions.
[01:12:22] Um,
[01:12:23] held even with new suspense boundaries under it and stuff. They actually shifted and changed the stuff during the experimental page, which is fine. They made some really smart decisions there. But
[01:12:34] The point is,
[01:12:36] About...
[01:12:38] I guess six months later, React Corp, or when was it? Was it in 2020, I guess? Like I remember around the time that the React released the transition stuff under the hood, maybe it was a year and a half later, I can't remember, they actually came out and like, we are doing single feature too.  What does single feature mean? That means that there's only really one transition in the app at the same time. So like, it only creates one transition.
[01:13:01] Um,
[01:13:03] Yeah, back in the day when Suspense had a built-in timeout.  Yeah, exactly.  Yeah, that was the old version.  Because the original thinking was like,
[01:13:14] or there's like a global suspicion timeout.  Like the original thinking was that like maybe,
[01:13:21] it would be okay
[01:13:23] If or that transition should bail out after a while and fall back to suspense if they take too long.
[01:13:28] Right. Because again, there's no affordances for holding in the past.
[01:13:32] Right. And it's hard to say, like, this is our default API when you have an affordance to hold in the past.
[01:13:38] you could if you said if you set out like a default timeout that says look after three  seconds we're going back to fallback if it's not ready or whatever then like you're going to be
[01:13:47] People couldn't shoot themselves in the foot too badly.  Like,
[01:13:50] you still probably want a pending indicator but if you if you said like you know after  after a certain period of time like sorry it's going to go back to fallback anyways
[01:13:59] you're basically adding back affordances for loading without people having to be forced to  add loading performance affordances. As I was saying here, you get to an interesting place when you have both
[01:14:11] say suspense.
[01:14:13] and
[01:14:15] loading affordances for transitions.
[01:14:18] right where you essentially have
[01:14:22] two different loading affordances.  And I've struggled with this from design perspective over time because there really are two different things.
[01:14:32] Right.
[01:14:34] So this, like sometimes...
[01:14:39] like there's the stuff that's local to what you're doing right which you know suspense  connect is a version of it or maybe you know like your typical loading indicator like you  know while you're doing something but like
[01:14:52] when you're navigating to the next page,
[01:14:55] it's not localized you're actually saying you're showing a loading indicator  indicating that you're going to the next place
[01:15:01] But the thing that's loading isn't the thing that's in front of you.  It's the thing that's off screen.
[01:15:06] which means that the mechanism for
[01:15:08] loading indicators for things around transitions,
[01:15:11] isn't
[01:15:12] localized generally just and it makes sense because again transitions aren't localized  right like they don't have to apply
[01:15:19] That's it.
[01:15:19] Like, where they affect the UI might not be everywhere, but conceptually, they're global.
[01:15:25] So,
[01:15:26] like it makes sense again that
[01:15:29] you can basically, they'd have a different loading indicator than asking if a specific resource is loading.
[01:15:43] Thank you.
[01:15:44] Say transitions haven't been solved. You're talking about the browser, right? I mean,
[01:15:49] Thank you.
[01:15:50] I'm talking about
[01:15:52] in the scope of what I'm talking about UI frameworks in terms of like,  and I'm not saying solve, I'm saying like,  because we have been working on solutions on,  I'm just mean like what we're calling transitions here,  which are kind of transactional.  They're not quite transactional though, because...
[01:16:07] There's different...
[01:16:08] between transactions a little bit, at least the way the stuff is working right now, which is actually we're actually almost at that point in the conversation here.  Right. When I'm looking at at this in react, because
[01:16:21] If you have a single future, you can kind of cancel transitions, but once you
[01:16:28] layer them on top of each other, they become entangled. That's the term that we use, right?  Because if you basically, if you're doing a transition,
[01:16:35] And then you add another transition.
[01:16:38] and there's only one future.
[01:16:40] you know, conceptually or one transition, then they all become the same.
[01:16:45] transition and it finishes when the last one finishes so to speak
[01:16:49] Um,
[01:16:55] So like,
[01:16:57] Essentially,
[01:17:02] Oh yeah, okay, well locally.  Like say if you update root state  inside a local transistor project.  Yes, yes.  What I'm saying is it has...
[01:17:09] And this is more obvious from like, because React has components. So when you update the state, it belongs to the component. So you can say that it's localized to that. I just mean that the mechanism.
[01:17:18] is derived from where you from not where you do the writing but from where the source of the right is from
[01:17:25] So it could be root state.  It could be global state.  It could be, it could literally be like,
[01:17:34] it's not as tidy because like,  it,
[01:17:39] The classic problem, right?  If you want to put something impact multiple places  of the UI or be accessible by multiple places of the UI,  you have to hoist it up.
[01:17:48] or hoist it out.
[01:17:50] right so like
[01:17:52] what i'm trying to say here it's like spence is very clearly for example a boundary where you're  like look if i can't render my stuff locally bailout or show fallback or whatever like it's  there's no question there what the scope is it doesn't care if you load this data over  here under here over there you know it's going to be like okay can i render yes no
[01:18:14] transitions are kind of like,
[01:18:16] they exist in space, like outside of the like...
[01:18:22] that you could...
[01:18:24] write anything.
[01:18:27] That's what I mean by they're global.  Like they don't, their application isn't necessarily global in the end,  but their potential scope is anywhere.  It's not like you can't, you're not just like,
[01:18:38] Okay.
[01:18:39] It's not like a
[01:18:41] UI zone region concept.
[01:18:45] unless you force it to be, as I said, there are ways you can like say, I'm going to fork only within this context, like in a router or something, but your router in that case probably has to be higher level because it's the one responsible for doing all the transforms and handling all the forking for you. So then
[01:18:58] and routers usually are top level, but I'm just trying to say like,
[01:19:02] Thank you.
[01:19:04] Yeah.
[01:19:06] This isn't...
[01:19:08] UI can change.  UI can shift.  Where you need to show something can change.  And
[01:19:16] something like suspense is very clearly like these elements this matters
[01:19:20] here.
[01:19:21] transitions.
[01:19:23] It matters where the state is defined.
[01:19:31] Thank you.
[01:19:33] Thank you.
[01:19:34] Um...
[01:19:37] Okay, so where was I?
[01:19:40] Um...
[01:19:42] What was I? Sorry.
[01:19:46] Lost my train of thought here for a second.
[01:19:49] you
[01:19:52] me.
[01:19:54] Thank you.
[01:19:56] Was I looking at Twitter?
[01:20:00] No, not quite yet.
[01:20:02] Thank you.
[01:20:06] Yeah, it's talking about the different loading affordances and how that's a consideration. Okay.
[01:20:12] Thank you.
[01:20:13] Thank you.
[01:20:14] Yeah, sorry, no stream this Friday.  Friday came early this week.
[01:20:21] Still.
[01:20:22] This is a fairly straightforward approach for React because
[01:20:28] this
[01:20:29] loop that they get in from two to four.  While it has some new use considerations and stuff,
[01:20:36] Once you get to five, you're back to business as usual.
[01:20:41] So when designing...
[01:20:43] concurrency in a signal system, it was a little bit trickier. And I don't necessarily want to get too much into I'll talk about what I did in 1.0 a little bit, it'll come up but I don't want to focus on I want to focus on like what the solution
[01:20:56] Should be.
[01:21:00] now that we can have like a high level understanding of like,
[01:21:03] kind of what React does.
[01:21:06] And like, but when I'm talking about
[01:21:09] transitions being kind of a global thing, what I mean by that.
[01:21:13] Okay.
[01:21:15] I'm going to write out the algorithm at least to plan for it  to make sure it's sound well, sound enough.
[01:21:19] pretty much my thought off the top of my head, so my perspective might adjust as I go on.  And it probably has because I've actually implemented stuff now.
[01:21:25] Start transition sets transition to be created on the next micro task,  create a global reference including the transition queue and run provided function,
[01:21:32] For those of you who aren't familiar,
[01:21:38] uh
[01:21:42] We'll talk about actions in a minute, but
[01:21:45] Transition API generally involves passing a function that scopes some kind of
[01:21:52] some kind of right now this is acting optimistic state right so that's not a good example but  I mean I can show it in solids tutorials right now right we also have a start transition this is solid's API today
[01:22:04] Um,
[01:22:06] I'm a little bit proud of this one because even though React
[01:22:09] had used transition, their original version,  had start first and pending second.
[01:22:13] And I actually was like, that's weird.  It should be read then write.  So I swapped them.  And then React ended up swapping them when they released it.
[01:22:22] But originally, they actually had them in the opposite order.
[01:22:26] But the API, from an API standpoint, the way that
[01:22:31] we've been doing transitions and basically are,  there's some kind of start transition function,
[01:22:36] that you wrap some kind of state update.
[01:22:39] around.
[01:22:40] That's the gist of it, basic.  And that way you can write state outside.  That's not part of the transition.  And you can write state inside.  That is part of the transition.  And again, this is important.  I did a whole stream like a year ago about like why we can't just
[01:22:54] There's the affordances I've talked about why we can't just like make this the default, but sometimes like you don't want all the things to change together, right? You have to understand like there is context here in turn that we can't just infer, right? You, so you.
[01:23:09] as much as everyone in the world hates this API, this voice felt didn't do this. They were like,
[01:23:14] it's weird to have transition and deferred value and all this kind of stuff.  You know, we just want like a base model that makes a lot of sense.  And I agree with them.
[01:23:23] I,
[01:23:24] I have to go back.
[01:23:26] to hear and be like,
[01:23:27] Well, how do you handle all the different situations?  And the answer for Svelte's async model
[01:23:35] is generally, yeah, you tear if you don't use their async stuff.
[01:23:38] Okay, that's fine.
[01:23:40] They bail out initially.
[01:23:44] similar to suspense. And then after the fact,
[01:23:49] they do a sort of
[01:23:52] localized holding.
[01:23:56] So it's not quite the same as transitions.
[01:23:59] Um,
[01:24:00] But they make it so that like none of the components or everything basically kind of locks up until they like when you set state change until the async kind of comes through and they look at the.
[01:24:12] Um,
[01:24:14] the compiled reactive graph to a certain degree to make some decisions there in terms of what to hold or not to hold. But like when the graph overlaps, it's a you're rendering the same section of pages, you think it will definitely hold up everything in that zone. So it's not quite
[01:24:28] um
[01:24:29] The same as transitions, because doing that example that I talk about where you show the counter while you're transitioning,
[01:24:35] can't be done within the same local scope in Svelte. They don't have a way of
[01:24:40] Like,
[01:24:41] It's almost they didn't kill the reactivity, but it almost feels like they killed the reactivity.  Luckily, they give you an affordance by passing the pending into the block where you do the async.  So you do get the ability to get the affordance locally this way.  Right. That's one of the challenges.
[01:25:00] um
[01:25:01] But...
[01:25:02] they basically have a kind of pseudo localized transition that's not quite as powerful but probably
[01:25:11] maybe good enough.
[01:25:13] Um,
[01:25:14] Bye.
[01:25:18] So,
[01:25:20] As I said, you can always come back to this matrix when trying to talk about async, right?
[01:25:26] because this is really the only choices you have.  It's a matter of coming up with reasonable defaults.  And the first thing we all have to realize is  if you do nothing in a framework, one is always the default.
[01:25:38] um so
[01:25:40] If you've watched my previous streams in solid,
[01:25:43] what I've actually done now is make
[01:25:46] One, the default always.
[01:25:48] when you're not using the async features.
[01:25:50] Bail out initially.
[01:25:52] but then go back to one,
[01:25:55] once the data is loaded.
[01:25:57] because
[01:25:58] Um,
[01:26:00] I had an interesting conversation, I guess, a couple of years ago with Dan Abramoff. And I was like, why aren't people using transitions everywhere? And he's like, actually, we think use deferred value is actually better for most like on page mutation cases. And I was like, oh, that's really interesting.
[01:26:12] He's like design systems, routers, yeah, transitions,  but for most on screen.
[01:26:16] And yet,
[01:26:17] Use deferred value takes some thinking.  Most people when they're using these features,
[01:26:22] don't and then just have suspense yank out on them over and over and over again and then they have to learn this new concept so I was like
[01:26:28] If you've seen the solid demos that I did a little while ago,
[01:26:33] we made tearing.
[01:26:35] actually the default again, because that's what people are used to and what they expect.
[01:26:39] Um,
[01:26:40] which again, it's not consistent and it's bad,  but yet it's the default when you add async to sync.  So it seems like the most sane thing to actually do.
[01:26:49] bail out when we can't render it.
[01:26:51] And then,
[01:26:52] How do we solve transitions? Well, it's still a thing for the specific cases that need it,  like routers and maybe design systems. But the average developer,
[01:27:02] actually doesn't
[01:27:05] really need them for most things. So, um,
[01:27:09] Because
[01:27:11] So yeah, I still think it's important, but it's like, again, I'm using this as my kind of matrix to make these two kind of decisions.
[01:27:20] So let's get back into here.
[01:27:24] So where was I?
[01:27:26] Okay.
[01:27:28] Start transition sets transition next to microtask, create global reference, including a transition queue, and run the provided function, which is that transition function I was trying to show here, like this function, transition function.
[01:27:39] Um...
[01:27:41] Ponwrite clones signals in all downstream dependencies.
[01:27:45] I said maybe during notification. I decided to clone it first, then notify.
[01:27:48] queue all these into a separate transition queue,
[01:27:52] which is separate from the main reactivity queue.
[01:27:55] which substitutes, collect promises if the transition function is async, we'll talk about that in a minute, run the pure
[01:28:01] queue of the transition queue, which this is
[01:28:05] the, um,
[01:28:08] This is why we split effects.
[01:28:10] Basically,
[01:28:11] run the front half of effects, all the memos, all the what we call the pure stuff,
[01:28:18] before the side effects.
[01:28:21] basically all the calculations.
[01:28:23] Any newly created nodes are not part of the transition and can be queued into child queues as necessary. That probably doesn't make any sense to you. But my point is, you only need to clone the nodes that get notified. Any new nodes are just normal nodes and can just participate in the graph as normal.
[01:28:41] Collect the promises from any reads that are async.  In Solid, we have create async calls.
[01:28:49] Thank you.
[01:28:51] I'm actually not collecting the promises. This is one of my original thinking. What I ended up doing is if you watch my I had a previous stream where I showed off a cool stack blitz example and solid stack blitz. Sorry.
[01:29:08] Bye.
[01:29:10] not i'm just gonna i probably won't be signed into here either it's been so long but
[01:29:17] and won't have to sign into GitHub again.
[01:29:21] uh
[01:29:23] Thank you.
[01:29:24] This one?
[01:29:25] Hopefully.
[01:29:30] - The dev example, yeah.
[01:29:34] Thank you.
[01:29:36] Thank you.
[01:29:41] Transition plus optimistic state doesn't mimic the tear approach.
[01:29:45] Um,
[01:29:46] No, well, it's...
[01:29:49] I was talking about this before,  because transition plus optimistic state,
[01:29:55] Um,
[01:29:57] is
[01:29:58] like what I call kind of predict the future
[01:30:00] Sure.
[01:30:00] in a sense you're not holding completely in the past it
[01:30:04] It's.
[01:30:06] Because you have the...
[01:30:09] the future state, presumably, or something that looks like it.
[01:30:12] Um,
[01:30:14] it's kind of like this golden area, right? Because,
[01:30:17] It doesn't tear because you have the future.
[01:30:20] So like I wouldn't consider that tearing because user ID does equal user, you know what I mean?
[01:30:27] So it's
[01:30:29] It has the...
[01:30:31] it's just if number four is real that is what number four is right like it's basically this idea that
[01:30:38] You just have...
[01:30:39] things the way that they're going to be.
[01:30:43] you have immediate feedback.
[01:30:45] It gets more like bailing out, actually.  It's more like...
[01:30:48] this, but you have immediate feedback, it's consistent, but you can't always do it. Right.
[01:30:53] Um,
[01:30:54] I'd say tearing is more like where you...
[01:31:00] like transitions always hold.
[01:31:02] except in the case of adding future stuff that could be there.
[01:31:06] which means that they can kind of close between holding and adding optimistic updates.  You can close the gap between being in the past and being in the present without being inconsistent.
[01:31:17] and without being jarring.
[01:31:19] So yeah, I mean, this is the goal here ultimately.
[01:31:27] But yeah, I wouldn't consider this mimicking  tearing because...
[01:31:31] it
[01:31:33] you should apply the optimistic updates consistently.
[01:31:39] I guess there's a chance that you don't.
[01:31:41] But
[01:31:42] That's kind of within your control.
[01:31:48] Sorry, where was I?  Yeah, it's example.
[01:31:51] The dev example, right?
[01:31:57] Yeah.
[01:31:59] Thank you.
[01:32:02] I use this example because, oh yeah, I'm going to change.
[01:32:05] Did I already change the-- I already changed the--
[01:32:09] API on this.
[01:32:11] Oh, well, whatever.
[01:32:14] The reason I wanted to show this example for a moment here,
[01:32:18] is because
[01:32:19] It can, like...
[01:32:21] without transitions,
[01:32:24] Thank you.
[01:32:26] Mm-hmm.
[01:32:27] this is tearing, right?
[01:32:29] You can see it. I'm showing a pending state.
[01:32:32] Yeah, it's sent to automatically randomly error, but it's showing a pending state based on the loading state of these async resources. So when you see when I click.
[01:32:43] Once it actually loads properly. Yeah, here we go. I click.
[01:32:46] It grays it out, but look three updates immediately before, this will be four before this becomes  four.  Look, four updates.
[01:32:53] for, right?  So this is tearing.  This is the default. There's no transitions.
[01:32:58] I'm just going, "Hey, is this pending?"
[01:33:02] this one resource loading state. So this is how you do, I'd argue, this is how you do
[01:33:06] tearing right.
[01:33:08] Whereas if this was a transition,
[01:33:10] these two would be locked together. But for most for a lot of people,
[01:33:15] All they care to do is go like, okay, I got, you know, an ID.  I'm going to create async.  I'm going to fetch something.  And then I'm like, show me a loading indicator and I'm done.  And then I'll wrap the whole thing in suspense just so that when I load the page,
[01:33:27] you know,
[01:33:28] It can load stuff.
[01:33:30] Right?
[01:33:31] you know there's a bit of a cascading waterfall for streaming but then after the fact
[01:33:35] I'm not falling back to the suspense.  If this was React,
[01:33:38] In this example, we'd be yanking out to suspense every time we click the button, right?
[01:33:44] Um,
[01:33:45] Thank you.
[01:33:46] So this is what it looks like to have tearing
[01:33:49] by default.
[01:33:55] Thank you.
[01:33:55] from both with suspense with a UX thing.  So I'm pretty happy with this, but I do recognize that while this is good for 95% of what developers do,
[01:34:06] Things like routers, you want to handle more holistically, right?  You want to have transitions.  I understand that you don't need, like, this is pretty good, Mike.
[01:34:14] Thank you.
[01:34:15] one stop airing.
[01:34:17] It's like the random error thing. I got that from Ryan Florence from Remix.  They always feed errors into the demos, which I think is absolutely genius,  because you should show race conditions and error stuff.
[01:34:28] Yes, this demo is still useful, Dev.
[01:34:33] Thank you.
[01:34:34] Anyway.
[01:34:34] Thank you.
[01:34:36] So,
[01:34:37] But my point is,
[01:34:39] Inside our rendering,
[01:34:43] like we have like these compile into effects essentially that have a front side.
[01:34:49] and have a backside that does the actual DOM updates.  What we can do here when we're designing our transitions
[01:34:54] The reason I show this example is actually the error boundary. Sorry, now I remember.
[01:34:59] I realized that
[01:35:01] are suspense or error boundaries.
[01:35:04] like,
[01:35:04] And this works the same way with error boundaries as well.  Error boundaries actually make a really good example for this.  See how this is aired.
[01:35:11] All right.
[01:35:14] The error boundary is down here.
[01:35:15] Right?
[01:35:16] The data fetching is up here.
[01:35:19] How is it that when I press this retry button here,
[01:35:25] it's actually able to try and trigger suspense and load the data again.
[01:35:30] Data fetching up here, error boundary down here.
[01:35:33] Right, on click reset, what does reset do here?
[01:35:36] It's actually just something being passed in from the error boundary.  So how the hell is it doing this?  Well, it's because the way the error boundary works is it actually collects the error out effects nodes.
[01:35:47] the pure parts essentially and then when you click retry it goes okay these are the error defects that  can't render
[01:35:53] It just.
[01:35:54] reruns those nodes and pulls all the data again, which triggers the async to fetch again,  if it's aired all the way up the tree, if it stopped somewhere else, or there's
[01:36:03] you know, somewhere else, it's not going to get up there, but it literally pulls down the specific  reactive graph to be able to rerun it. And suspense actually kind of works similarly. We don't collect the promises, we collect
[01:36:15] the effects that are
[01:36:18] not ready, essentially, and go, OK,
[01:36:21] Um,
[01:36:22] let me know when they are ready.  You know what I mean?  So like,
[01:36:26] you know as they complete as they they're able like their async dependencies update they schedule  they clear and they go yeah i'm good they remove themselves from the suspense and the  suspense boundary goes oh i'm good i can show myself
[01:36:38] Right. So like this error boundary has this kind of similar dynamic here because either you click  retry, which pulls like I mentioned, or you
[01:36:47] when you're navigating to the next page, remember this is solid.  We're not actually recreating all these components here.  They're actually like swapping under under us, right?  Like the the here there's no show.  We're actually keeping the same elements as we as we're going to the the the next one.  Obviously, like
[01:37:06] When we show the fallback, we lose...
[01:37:09] this right but but what i'm trying to show is when we click
[01:37:14] the next button.
[01:37:16] Here?
[01:37:18] It also...
[01:37:19] ends up causing those effects to rerun, which also remove those nodes from the error boundary. So  both the retry and the move forward next work without rerunning or re-rendering any components.  And I thought this demo was
[01:37:32] crazy to show the power of this. But this same node collection technique applies to transitions as well.
[01:37:46] Thank you.
[01:37:47] If you tear an async file, you're stuck in an error UI,
[01:37:54] Yeah, I...
[01:37:56] you could see i i'm i'm
[01:38:00] I'm...
[01:38:01] I'm not actually sure how much rollbacking is actually happening.  That's why I see a big difference between transitions and transactions.
[01:38:08] Yeah.
[01:38:11] Let me explain a bit.
[01:38:12] When you have a single feature like I'm talking about here,
[01:38:18] like react has and solid 1.0 has and whatnot
[01:38:23] As soon as things become entangled,
[01:38:25] you can't really roll them back.  You have to roll back the whole thing.  But what if the first thing passed  and the second thing failed?  Now you can't do it.
[01:38:34] I think the whole hope of rollbacking transitions is a pipe dream.
[01:38:40] Honestly.
[01:38:41] I think this is more of like a...
[01:38:42] good way to handle
[01:38:45] Um,
[01:38:46] scheduling of async tasks and less of a like a transactional model. I think that's why I was  working on solid transitions and I called them transactions and I'm like, no, these are not  transactions.
[01:38:58] I think it's important to understand that.  I mean, React talks about them like their transactions,
[01:39:05] It's just...
[01:39:06] It's.
[01:39:07] and maybe React's approach to multiple that they're working for is kind of  working on transactions, but there's like,
[01:39:13] it's very, very difficult
[01:39:16] to un-entangle something.
[01:39:18] And if you don't entangle in the first place, you have to almost enforce order, which means that like, are we going to are we going to be sequential now?
[01:39:27] If you're,
[01:39:28] a database or something and you're like, you're close to where the right point is like, and you can do that. You can go like, I'm walking, I'm walking this, you know, like trends, like classic transactional model. But when you put a network in between you and this operation,
[01:39:42] Thank you.
[01:39:45] Thank you.
[01:39:46] Yes, in theory, but I'm saying I don't think you can even do that.  I think you just have to go with it.
[01:39:52] You know, like we already have things like error boundaries and suspense to handle the odd cases out and whatnot.
[01:39:58] I just...
[01:40:00] Thank you.
[01:40:01] I.
[01:40:02] I think it's an odd scenario to be in to say that like,
[01:40:08] you know for sure that like you didn't want any of this to happen. Like what if,
[01:40:14] what if you like updated the database and then did this?  Like if something errors,  you are in a screwed up state regardless.  And I think,
[01:40:21] the UI probably should reflect that.
[01:40:23] um
[01:40:25] Okay.
[01:40:28] Okay.
[01:40:29] So like...
[01:40:33] Yeah, I...
[01:40:36] We're going to get there.
[01:40:41] the implications of it in a second.  Collect promises, transition async, bubble every reason.  If promises are not all resolved by this point,  do not run the effectual side of effects.  When promises resolve, restore transition at each point  and start from three again.  So this is the loop.
[01:40:55] On the React example, I had it two to four.  Here's nine to three, but it's the same loop.  Eventually, all the async resolves.
[01:41:01] And we are at the end of the pure queue,  merge back the clone nodes and run effects.
[01:41:04] So it's kind of the same thing.
[01:41:07] right? Like you can see that there's differences here. In React, the rendering,
[01:41:13] like their whole render tree is the pure Q. And in solid, the, you know, I did a great diagram a while ago. I don't think I have an Excalibur anymore. I mean, I can try zooming way the hell out and see if I actually have it on here.
[01:41:26] But I don't think I do.
[01:41:29] No, it was on my old computer.
[01:41:32] um
[01:41:34] where
[01:41:35] Um,
[01:41:38] Essentially, I was comparing the timing of split effects with the timing of, you know,
[01:41:43] of like reactive life cycles, you can view the whole,
[01:41:50] signal graph.
[01:41:51] up to the front side of effects as basically the same as the React Render Tree.
[01:41:56] Um,
[01:41:57] and then the back side of the effects basically the equivalent to the different patch so by doing  scheduling this way you can basically do a granular more like granular
[01:42:08] non-component based version of basically the same thing, right?  You follow the data instead of the UI tree, but it's essentially the same thing.
[01:42:15] Benefit of this decoupling is you don't have to re-render components to do stuff.
[01:42:21] Thank you.
[01:42:23] Thank you.
[01:42:26] - Yeah, yeah, yeah, yeah, get not post. And to be fair,
[01:42:30] Host is a big pain that we're going to talk about in a second.  Because the beautiful thing about get is we haven't showed this in our simple playground example so far, but you can see it.
[01:42:39] here with create async and stuff is,
[01:42:44] You can we can see the trail.
[01:42:48] Like, if git phrase here...
[01:42:50] is based on count.
[01:42:53] We know at the point that you call set count here,
[01:42:56] Like this is where you'd wrap the transition in this example, right?  When you click the button, you update the count, you go transition set count here.  When...
[01:43:04] um,
[01:43:05] When you set this count on the get side, we know that this depends on count.
[01:43:12] Thank you.
[01:43:13] So this depends on count.
[01:43:16] So where else is phrase or this depends on count?
[01:43:21] This depends on count.
[01:43:24] This depends on count.
[01:43:26] This depends on count.
[01:43:28] which means this depends on count,
[01:43:31] which means this depends on count.
[01:43:34] We actually built out our whole dependency graph
[01:43:38] Um,
[01:43:41] But
[01:43:41] And we know it.
[01:43:43] right from the point of doing that,  either from setting it here,
[01:43:48] or from setting it in a transition.  We can actually see the whole dependency graph  of everything that would be impacted.
[01:43:55] Right?
[01:43:57] And this again, this is a superpower of signals.
[01:44:01] So,
[01:44:03] Good boy, are we here?
[01:44:06] Thank you.
[01:44:08] Yeah, what did I say here? A lot of details. Start transition. Start transition. Start transition. Start transition. We do this to finish the current execution, drain the current queue before starting. Even chained queues should run synchronously after you're running the queue. So except for district transition should fire at the right time. Okay. What I mean by this is I realized something while I was working on these things that it's kind of awkward. You want to drain the queue because it's a lot of things.
[01:44:27] If you're going to clone the nodes and they're already in a notified state, then you have to be responsible for running them on the transition branch.  You actually want the queues to be completely drained at the time that you create a transition.
[01:44:38] Um.
[01:44:41] To create a global reference, including transition queue and run the provide function, we need both an active transition and for all current transitions.  OK, so I'm already suggesting at this. There's nothing about this solution here that that doesn't allow for.
[01:44:56] multiple transitions, right? There's nothing really about
[01:45:01] this that doesn't allow for multiple transitions at the same time.
[01:45:05] The challenge with multiple transitions is managing entanglement.
[01:45:10] How do you know if these things are like should rely on each other related? Right.
[01:45:18] You don't want to like
[01:45:20] finish out a transition,
[01:45:23] And,
[01:45:24] have
[01:45:25] you know,
[01:45:26] something else working on the same data at the same time or kind of pull the same time and having them kind of like do a weird like you could end up with tearing again right so
[01:45:36] How do we like...
[01:45:38] If you fetch something,
[01:45:42] based on
[01:45:43] two signals and one updates in a transition and then another one updates in another transition
[01:45:49] you know, like the...
[01:45:51] you don't want to be in that intermediate state you want you're like okay fine i'm gonna have to wait  till
[01:45:56] the final fetch. In that case, you end up fetching twice because they're two  distinct events that triggered those two transitions. But you should know that like
[01:46:06] it's the like you want the one at the end that has both state changes to be the one  that reflected because if you kept them separate again you
[01:46:13] and we'll talk about this more when we get to actions, it's possible that
[01:46:18] given async timing,
[01:46:20] to get
[01:46:21] unexpected results like the second thing to apply before the first thing or you know what i mean like it's
[01:46:26] you show like in this example where there's the two different things you actually like  show it in one half state where it's tearing all over again essentially even though it's a it's  even though it's like done during async time it just you don't need those intermediate states in  the ui
[01:46:42] Um,
[01:46:44] So,
[01:46:46] uh,
[01:46:47] Yeah.
[01:46:53] Yeah, I have some details here that's probably not too important.  Pardon, right?  Clone signals and all of the stream-dependent cloning.  Let's talk about cloning.  We want to clone them back to basically initial state.  We don't clone cleanup or children.  We need to backlink dependencies and observers,  so since it's possible with the main thread to cause an update that trigger these.  So any new clone is going to clone this.
[01:47:09] observers, but it needs to
[01:47:11] at any cloned of those observers as well.
[01:47:13] So,
[01:47:14] Yeah, this is kind of a fun little graph I was playing around with, kind of trying to understand how to.
[01:47:20] how how to do this because when i when i started cloning i was like okay i'll just  clone all the links between these things but you know
[01:47:27] If you've ever seen a signal system,
[01:47:30] They dynamically manage their sources.
[01:47:33] So you can't give a parent...
[01:47:37] uh you know multiple versions of the like
[01:47:40] different sources because
[01:47:43] depending on if the main branch or the transition branch reruns, you'll delete the other half.
[01:47:50] It's kind of a funny problem, right?
[01:47:54] like if you try and clone everything,  um,
[01:47:59] Not everything gets cloned.  I'm only cloning things that are direct dependencies.  I'm not cloning...
[01:48:05] Like it's possible to have a source that's outside of the transition like here.
[01:48:09] That one's not going to get cloned.
[01:48:10] even though this is the thing that you edit during the transition, this part of the graph.
[01:48:15] then you have to clone on the downstream.  But downstream can rely on things that aren't part of the transition.
[01:48:20] And those things can still change while the transition is going on.  So it's important to understand that, like,
[01:48:26] Um,
[01:48:28] It's a little bit tricky here because every time this reruns,
[01:48:33] Maybe these arrows are the wrong way because I'm basically showing...
[01:48:37] Thank you.
[01:48:38] this is a source of this. So it's more like that way. The it's the source,
[01:48:44] The observer array needs to include
[01:48:47] both versions, but the source array needs to only include the original and then backlink through the transition version. This took me a while to figure out, admittedly.
[01:48:57] But the end result turned out good.  The other thing that I realized and I mentioned here is that
[01:49:02] we don't clone cleanups or children because the child is running
[01:49:07] on
[01:49:07] the transition branch, you don't want to clean up the currently visible branch. Right. So when you clone it, you can't you you treat it almost like it's new again. So it can run. And then when the final thing merging goes, OK, I have the new version of this node and the old version of node. At that point, you call the cleanup on the ones that are there on the main thread.
[01:49:28] when you merge them back together. But the funny thing is in the middle, those things could update.
[01:49:32] Right? So they could run their own cleanup functions. You know what I mean? And inside the transition could also run its cleanup functions. It's not just the original state. These things are live nodes. But it's important that when you start the clone, the clone doesn't contain
[01:49:46] either the children or the cleanups because you don't want to
[01:49:50] clean up the original.
[01:49:53] Merging on clone.
[01:49:56] right other position here is if a right would cause the transition to become entangled yeah so
[01:50:01] You start one transition, you start another transition.
[01:50:04] How do you decide...
[01:50:06] if these are independent transitions or these are the same transitions.  Now, I'm taking a single feature approach still here.  I think I realized as I kind of are walking through this, right?
[01:50:15] A single future doesn't mean you can't have independent
[01:50:18] It just means that you know,
[01:50:22] Yeah.
[01:50:23] uh,
[01:50:24] you if things overlap then they have to be entangled and
[01:50:28] the benefit of single future is there's no complicated merging problems you don't have to worry about uh
[01:50:35] um what do you call it uh
[01:50:37] like
[01:50:39] Sequence.
[01:50:40] you know, the individual resources have to worry about race conditions, you know, like the async parts, but the whole graph,
[01:50:47] doesn't have to worry about the sequence because async it's hard to decide what the sequence is right because you it's like
[01:50:52] Who wins?
[01:50:53] Like, because...
[01:50:56] There's the thing that started first.
[01:50:59] There's the thing that ends first.  And those are not always the same thing.
[01:51:02] is it do you apply them in the order of
[01:51:05] what started first.
[01:51:08] you know like you have priority you have a lock until you're finished well then you're completely  sequential and that really sucks
[01:51:13] do you do you um you know for a lot of things it's hard to make that a default
[01:51:17] Do you
[01:51:19] just does last one win?
[01:51:21] you know,
[01:51:22] uh,
[01:51:24] Kind of, but...
[01:51:26] Yeah.
[01:51:28] Thank you.
[01:51:29] What if something cancels in the middle?  There's a lot of complexity there.  So what I realized as I worked through this was I'm actually talking about single future, but...
[01:51:38] there can be isolated parts of that single feature that can update.
[01:51:45] Yeah, maybe we do it ends last.  Yeah, right.  That's probably the most sane thing to do.  But as I said, it's like,
[01:51:52] it's interesting because that's the easiest way to kind of clobber kind of like come in and
[01:51:58] He.
[01:51:59] I think you have to. So the trick with single future is if the things overlap,
[01:52:04] You just assume that anything coming in will become part of the same thing and then
[01:52:10] it,
[01:52:10] it gets incorporated because if you have two different things going on and they overlap,
[01:52:15] They're not going to see each other.
[01:52:18] This includes...
[01:52:20] Thank you.
[01:52:21] this sort of scenario. What if someone updates this in a different transition now, like this outside one?
[01:52:26] it's not going to, if you don't entangle them, it's not going to see...
[01:52:30] this change. It's not going to know that this one's changed. It thinks it's initial state. So it's working off here one tree and it's working off another tree. Now, maybe in React, they don't mind like having all these predictive futures and then
[01:52:42] like,
[01:52:43] merging them at the end when this one finishes and then this one and then figuring that out and like apply like
[01:52:49] I don't see how that doesn't cause three different fetches.  Right? Like if this is an async thing here that fetches,
[01:52:55] you know so
[01:52:57] Initial state, good. Transition on this comes in.
[01:53:01] this value new value b old value a
[01:53:05] Fetch one.
[01:53:07] comes in, transition, doesn't see the other transition.
[01:53:11] New value A, old value B, fetch two.
[01:53:15] Three.
[01:53:16] Um,
[01:53:18] one of the transitions finishes and he goes, okay, like whenever it goes to merge,  it's going to eventually have to do new value A and new value B.
[01:53:32] If you want to control how the merging happens, there are other ways of
[01:53:37] doing this too, right?
[01:53:40] like i'm not too worried about like the api aspect of it like you're saying like give people the  control whether to name it as the same transition or not the same transition or whatnot but like
[01:53:49] I'm just...
[01:53:50] Like they have to be
[01:53:52] cognizant of the shape of their graph and
[01:53:55] then you're like, okay, well, just let them kind of go with it, I guess.
[01:54:01] Right, like...
[01:54:03] You could do that.
[01:54:06] and give them all this control.
[01:54:08] But like,
[01:54:09] what-- like, I think you have to really question whether you  want-- like, this is already a very complicated advanced  API to use.
[01:54:18] I...
[01:54:19] I think it is...
[01:54:21] potentially very
[01:54:24] error prone.
[01:54:26] Um,
[01:54:27] Whereas,
[01:54:29] just kind of going like, okay,
[01:54:31] we know what overlaps is a very straightforward way of just saying like,
[01:54:35] Because the worst case scenario is the way that transitions work in frameworks today. The best case scenario
[01:54:40] is that
[01:54:41] the things that are isolated don't like are able to,
[01:54:45] run out early. I don't actually think the current state of single feature is actually that terrible.
[01:54:51] for most things, we'll get to where the issue is in a moment.
[01:54:57] It is worth pointing out that if you entangle them or when you hit the state,
[01:55:03] then it does fetch a second time because basically this transition becomes based on the top of this  transition.
[01:55:09] Because if you kept them separate,
[01:55:12] Right.
[01:55:13] then they could...
[01:55:15] and this one canceled, then you're also in a weird three-state, three-fetch state, where this one will fetch twice.
[01:55:21] you will originally have all day newbie
[01:55:24] And then when this updates, it will have new A, new B.
[01:55:28] Because you've entangled them.
[01:55:30] And
[01:55:31] i think that's fine the thing is you won't get a result until
[01:55:36] you get the new a new b result you're not going to get the result on the first part of the graph
[01:55:40] But...
[01:55:42] That's
[01:55:43] I think fine.
[01:55:46] Thank you.
[01:55:49] You know transitions are to conflict when replants are having trouble with them and he's the guy
[01:55:54] In fact,
[01:55:56] - Yeah.
[01:55:58] Yeah, I mean, this is a tricky topic. If I think there is a potential future react does go to looking at them like transactions, I'm just
[01:56:08] I,
[01:56:09] As someone who only cares about the UX aspect of it mostly,
[01:56:13] I don't
[01:56:14] No.
[01:56:16] Let's see. I can't make conclusions until we get to the end of this.  The other consideration is the right cost transition to go entangled,  then the same transitions to sync ones.  If you were to write any of the same sources,  it definitely would, but I say things have to read the same computations.  I think I just answered that. Yes.
[01:56:30] I do talk about this.
[01:56:33] The approach we're talking about has no explicit cancellation, only merging. You can only move forward, not backwards. This is a way the React system typically operates and should continue to. In the case of these pseudo cancellations, the transition might linger longer than it needs to, but it will essentially die on the final merge. Yeah. Cue all of these to transition cue.
[01:56:49] Yeah, collect promises, transitions, and async function.
[01:56:52] Right?
[01:56:54] This way we can catch promises, actions, reads.  If we want something to happen to set transition, we wait.  We need something.  I started talking about this API.
[01:57:03] It's not my favorite, but...
[01:57:04] we can't re-inject our context
[01:57:09] after an await without passing the function through.
[01:57:11] And this makes the same transition, again, using names or some other
[01:57:16] mechanism could accomplish this. But the idea here is you can go set some kind of optimistic state or something await saving the database resume.
[01:57:26] set some different optimistic state maybe,  and then await something else, you know,  do a sequence of things.  We don't have to worry about change awaits  because the transitional await  to get the whole promise back, yeah.
[01:57:37] There's some thought whether the resume function should have its own resume, etc. But I think we can make it if you call resume with an already complete transition errors. Okay, fine. Run pure queue of the transition queue and any newly created nodes are not part of the transition can be queued as queues.
[01:57:50] I haven't figured this part out. This is when we get to suspense, we'll probably talk about this. So I'm not too worried about this yet. Collect promises. I already mentioned how I'm going to use nodes, collect the nodes, not ready nodes. So I guess it isn't promises as much as not ready back to nodes. Your promises are not all resolved by this point. Do not run the side effects. It's a simple check. When promises resolve, restore transition at each start point. This is interesting since only collecting initial promises from transition resumes. So we need to be able to handle the checks as well as able to drain anything to schedule the transition. So it's a bit too pronged.
[01:58:19] Yeah, basically what I did is I have...
[01:58:22] create async when the promise comes back,  if it was created, if the create async function, you know,  like here,
[01:58:30] Like,
[01:58:31] if this function here runs during a transition,
[01:58:34] when the promise comes back, I just call resume on that transition.
[01:58:38] And that basically
[01:58:41] allows it to go. It basically does a second round of cloning from that point.
[01:58:46] if it needs to but they should already be cloned from the initial notification but
[01:58:51] It just basically lets the rest of the graph continue on.
[01:58:59] It could be controlled over generators.
[01:59:02] I looked at that API.
[01:59:06] The only problem with generators is TypeScript.
[01:59:09] Right. Let's go back here for a second.
[01:59:12] Because if you yield a promise,
[01:59:15] and you actually need the return results for it, TypeScript is a pain in the ass for this.
[01:59:21] But yeah, people would have to get used to yielding promises or values.
[01:59:25] But yeah, people have to get used to yielding promises.  And this is what MobX does in the flow component.  I did definitely look at the MobX flow component  for inspiration, but it was like,
[01:59:35] The thing that people are secretly hoping for is that when we get async local storage in the browser or async concepts in the browser, we won't need the resume function anymore. We'll just be able to assume that we can inject the state again after the await.
[01:59:50] the yield syntax
[01:59:54] I don't remember where I was concluding on that because I definitely...
[01:59:58] You know what? Let's open hack.
[02:00:00] I think I actually had a whole HackMD just about
[02:00:03] this specific API shape, where is it?
[02:00:09] Thank you.
[02:00:11] Yeah, I have a whole hack on MD on how to...
[02:00:16] Okay.
[02:00:18] Yeah, let's talk about that right after this one.
[02:00:20] Um,
[02:00:23] But yeah, it is possible.  I identified, I think, three different APIs.  I finally designed it that this was the lesser evil of them.
[02:00:35] So,
[02:00:37] Again, TypeScript is just miserable when you're trying to design systems.
[02:00:50] Run pure queue transition queue, any newly created nodes  are not part of the transition, that's fine.  Where did I get to?
[02:00:56] um when all prompts are resolved
[02:00:59] merge back and run effects.  It's at least more straightforward.  We get to the point existing nodes can be merged, takeaways.  Okay. We only need to clone nodes that are notified  during the transition since we discourage rights  and computations.
[02:01:09] which I've actually added a warning to in solid 2.0 right now.  This should mainly be in transition or resume functions,  firewalls or firewalls when draining the pure queue.  Everything else can be created as normal.  When cloning, we don't need to clone children or cleanups.  These will be created when it runs  and don't want to clean up the original.  Since this is a variation on single future,  even if it can be discrete parts,  we only need one transition specific node  cloned for an existing node.  We have to be conscious of keeping independent graphs  while still being able to notify  from the main branch of the transition branch.  This might take a little bit of fiddling  with how we do the linking and lookup.
[02:01:39] I actually solved all that and I'll show them the code in a few minutes, but
[02:01:44] This is the core idea of how you can do transitions.
[02:01:50] in a signals based library it was funny when i first did concurrent in solid 1.0 people i remember  people like very influential people in the react community basically saying it wasn't possible to  do with signals and i'm like no i've already did it i did it like a year ago and they're like no  blah blah it's not like literally just kept on repeating the same thing like paul henschel from 3js
[02:02:10] specifically and it was like no i remade your concurrent demo it literally works but
[02:02:15] I showed it to you multiple times.
[02:02:19] People really had a heart disbelief that you could do this stuff without the VDOM.  We already did a 1.0, but I think this is going to be better with this ability to isolate based on the reactive graph.  We use the same technology, as I said, to figure out error boundaries and suspense.  So why not use it?
[02:02:35] here on transitions.
[02:02:39] Thank you.
[02:02:39] Yeah, if you add an additional wrapper function,
[02:02:43] I don't know.  MobX hasn't solved this to this day.  I actually, it's a very, very long thread.  And I just was like,  if nobody in the MobX community  have solved float functions,  I am not going to be the one that's figured out.
[02:02:59] Right, like you can type generators, but can you type it so that it knows that anytime you yield a promise,
[02:03:06] you actually get the value.
[02:03:08] The reason is you do something, it's kind of weird what you do, because basically what you're saying is,
[02:03:16] I want...
[02:03:17] because you don't want to go yield away, I don't think.  That's a little bit too clunky.
[02:03:22] You want to go yield.
[02:03:24] this. But it might be like
[02:03:27] the code you might end up with,
[02:03:29] might be like
[02:03:31] Thank you.
[02:03:33] Um.
[02:03:34] drop it down here for a second.  The code you end up with might be something like this.
[02:03:40] you
[02:03:42] Once.
[02:03:44] Uh.
[02:03:46] To...
[02:03:49] Yes, it is.
[02:03:53] Thank you.
[02:03:55] Thank you.
[02:03:56] Thank you.
[02:03:57] Thank you.
[02:03:59] Thank you.
[02:04:04] Thank you.
[02:04:13] Right. It was getting this...
[02:04:16] to be
[02:04:18] not promise of
[02:04:20] this value, but the actual value of it.
[02:04:27] Yeah, no arrows for generators is annoying as hell too.
[02:04:32] Thank you.
[02:04:33] Oh, it's Yieldstar.
[02:04:34] Thank you.
[02:04:35] What's yield star?
[02:04:37] Okay.
[02:04:39] Oh, it's the old star, my bad.
[02:04:42] Whatever, you get.
[02:04:47] Thank you.
[02:04:51] Thank you.
[02:04:52] But yeah, getting this to be...
[02:04:57] Where is if you do this,
[02:05:01] Like you...
[02:05:03] you will
[02:05:04] get the proper type, assuming that this is this. Anyways, that MobX has like literally a three year old, like four year ongoing thread without like hundreds of responses in it that no one's actually solved this problem adequately over the last five years.
[02:05:26] I think there was a trick because Mob actually uses classes that they can build it into like the class types or something.  But like from the pure function standpoint, there wasn't there.  It all involved like.
[02:05:35] adding functions just for the sake of TypeScript, which
[02:05:38] Hurts me deeply.
[02:05:42] As I said, I also am hurt deeply that TypeScript impacts the shape of API design.  TypeScript is, as I said, very, very annoying for designing APIs.
[02:05:53] Bye.
[02:05:54] So
[02:05:58] Yeah, exactly. You pass into a function to get the types. It's doable.
[02:06:06] Again,
[02:06:08] If someone says you need to wrap something in a function  for it to work with TypeScript,
[02:06:12] then yeah i'm like seriously because then now it's like oh is this a function that we also have to  send out as a part of our library for type so that people can do this it's just like
[02:06:23] I know people are used to doing this in TypeScript,
[02:06:26] And maybe I should be like, take that stance that TypeScript users are crazy.  It's just...
[02:06:31] really dumb when you hit issues like that.
[02:06:39] Thank you.
[02:06:42] Thank you.
[02:06:47] Anyway, I'm going to go back to the next question.
[02:06:50] Right. Let's talk about
[02:06:54] So I introduced a moment ago that, you know, what if...
[02:06:58] um,
[02:07:02] how do you how do you deal with showing pending state for transitions right that that's kind of  like the next topic here um
[02:07:09] It's very relevant for optimistic updates, like for like,
[02:07:13] actions which react calls the actions like an async function passed to a transition solid we had a special action wrapper and i think
[02:07:21] Svelte kit ended up using the same approach  Solid did with the Action Wrapper.
[02:07:28] Remix has those exported functions,  or sorry, React Writer 7 version, whatever,  has the exported 7 functions.  But like...
[02:07:39] Generally speaking, conceptually, there's a mutation part of this transition async.
[02:07:44] part of the story. Both of these problems actually are kind of similar and React actually might have come up with a really elegant solution to it. My instructor Ricky and again, he he convinced me. So
[02:07:58] Let's
[02:08:01] Let's talk a bit about this.  Because when I first went into transitions, what I kind of wanted to do...
[02:08:06] was like basically await transition and go like set pending await transition set pending false  like as a way of handling it and then i was like oh the awaits too late after the fact so then i was
[02:08:19] when transition function and then when transition done callback function, then we can call it synchronously.
[02:08:25] like before the transition ends.
[02:08:27] right because there's there's this time period between when you've done all the  pure calculations and you haven't applied the effects yet it'd be really nice to be able to like
[02:08:35] do a few more updates in there, and then apply the effects.
[02:08:38] If you do an await, it's going to be after the render.
[02:08:41] So it's too late.
[02:08:43] Um,
[02:08:46] Right, so here set pending true transition set tab B thing. That's my thinking.
[02:08:54] Right.
[02:08:55] And I think I was also really interested in Vue transition API.
[02:09:00] I don't know if people are familiar with the view transition API from the browser.
[02:09:07] Start.
[02:09:08] view transition.
[02:09:11] Thank you.
[02:09:12] Again, a different type of transition.
[02:09:14] But the idea here is you can do animations and then...
[02:09:20] um,
[02:09:20] you call start view transition,
[02:09:23] it,
[02:09:24] it basically starts doing a snapshot of the current UI.  This is a lot like the freeze the UI non-updating thing.
[02:09:32] And then...
[02:09:33] when it
[02:09:35] when it's done making a snapshot it calls your update function where you can apply your changes
[02:09:40] And then...
[02:09:41] when your changes are done,
[02:09:43] it will transition the UI from A to B.
[02:09:48] great API shape on the surface. You're like, oh, this is great.
[02:09:51] But...
[02:09:52] kind of awkward.
[02:09:55] Because I was like, okay, wouldn't it be cool if we could just make transitions work into this automatically, right?
[02:10:01] Because...
[02:10:03] Thank you.
[02:10:03] First of all, start view transition is not synchronous. It's async.
[02:10:07] So if...
[02:10:09] Like,
[02:10:10] Here's a problem, and this people will do it today.  They'll start you transition quickly.
[02:10:15] here somewhere like out here when they do the action when they press the button when they go to click save
[02:10:20] And then,
[02:10:21] They will await the transition stuff.
[02:10:26] inside the callback function.
[02:10:28] so it'll snapshot and then it'll and it'll start the transition call the callback function realize  the asynchronicity of our transition and then when it's finished it will do the transfer which works  but it means that between
[02:10:42] you first clicking the button,
[02:10:45] and this
[02:10:47] finishing.
[02:10:49] And there is a bit of delay because it won't call
[02:10:52] this start transition...
[02:10:55] right away, like because it's async.
[02:10:58] It freezes the browser.
[02:11:00] So the whole time it takes for you to fetch your data to get to the next page, like we're on the,  like the update, it froze the browser, the thing we didn't want it to do. You don't want this  function to really be async or if it's async, it should be like immediate micro queue. You don't want
[02:11:15] this to be waiting because once it's done at snapshot and it calls this it expects to be like
[02:11:21] to animate. The time between
[02:11:24] the initial call finishing and basically the whole time it takes for this to finish, including the async time here, if your update callback freezes the browser. So do not
[02:11:35] you shouldn't be using view transitions that way but it means that it's freaking awkward timing because
[02:11:40] The ideal time to do this is
[02:11:43] To call start view transition,
[02:11:46] right when you're done the pure queue, but before you run the effects and then run the effects in here, except this is async. So you actually
[02:11:52] Mm-hmm.
[02:11:53] are in the middle of the framework's render process,
[02:11:56] And then they're like, oh, yeah, we're going to...
[02:11:58] We're going async now.
[02:12:00] And you're like, no, no, but I have to apply my stuff synchronously.
[02:12:04] Thank you.
[02:12:06] so you maybe like oh maybe it's an i call you kind of situation where you you give them the ability to call your
[02:12:12] a backgrounder.
[02:12:14] you know whenever they finish their snapshot it's weird now there's ways around this you can like
[02:12:19] maybe provide an API where you could
[02:12:22] passing like
[02:12:23] a promise that you can
[02:12:25] basically pass into here.
[02:12:29] So like,
[02:12:31] you do your render synchronously immediately.
[02:12:33] But...
[02:12:35] When you're,
[02:12:36] like,
[02:12:38] when your render
[02:12:40] Yeah, I mean, it's tricky timing-wise because this is async.  You have to kind of await things.
[02:12:45] them taking the snapshot before
[02:12:48] Hmm.
[02:12:49] Let me think here.
[02:12:51] Do you have to wait for them to take the snapshot? No, they can take the snapshot immediately.
[02:12:55] But...
[02:12:57] You have to make sure that you don't render
[02:13:00] your effects before they finish taking their snapshot.
[02:13:03] So yeah, you do have to kind of wait them taking the snapshot, right?  So even if you could
[02:13:07] say like, look,
[02:13:08] you don't have to call my render function.  I'll just call a promise that I pass into you  when I'm done rendering.  This still can happen too late.
[02:13:17] So like,
[02:13:21] I, I, I,
[02:13:23] And Ricky pointed out too, when I talked to him that sometimes there are things like suspense,  like fallbacks, you want to use view transition, which have nothing to do with transitions. So  like this wasn't the right fit, but I definitely was looking into this because part in my head,  I was like, Oh, wouldn't it be cool if you could just call start view transition right  here in the second function in between.
[02:13:40] when the
[02:13:42] like pure part and all the async resolves.  So you're not holding the page while the async resolves.  And then right before you actually merge in the transition,
[02:13:50] effects do the view transition. It seems ideal. The problem again is because it's all async. It
[02:13:57] it basically won't play nice with us.  So we have to kind of come up with our own solutions there.  But yeah.
[02:14:02] I realized that we can't just merge these things together.  There's places you want to use Vue transitions  that have nothing to do with transitions, like with Suspense.
[02:14:11] And,
[02:14:13] The fact that the start view transition is async
[02:14:16] is
[02:14:17] is very...
[02:14:19] painful for frameworks. They need the special case, which means you probably can't just hand this out to the end user to use the native APIs. You have to wrap it yourself, maybe, you know, like a view transition component.
[02:14:29] um
[02:14:31] I know, a little tangent, but it's kind of what I want to
[02:14:33] put that out there that like these are the kind of considerations that go into designing these  api shapes and stuff
[02:14:39] And I was really hoping for like, oh, look, we just use the native stuff the way it's
[02:14:44] we wanted to. Unfortunately, the native stuff is designed in such a way that is very awkward for UI frameworks.
[02:14:50] as usual, but
[02:14:52] Again.
[02:14:53] It's a very difficult...
[02:14:56] a very difficult place to be to kind of figure this stuff out ahead of time because someone has  to propose it and then be very involved with trying it to kind of figure this out um
[02:15:06] And it makes sense why this would be...
[02:15:11] async because taking a snapshot probably does take some amount of time maybe not a huge amount  of time but it takes some amount of time
[02:15:19] But can we guarantee...
[02:15:22] Like the snapshot happens before we render the DOM on the same synchronous task.
[02:15:28] Anna, I...
[02:15:31] Maybe it does, like maybe the starting is enough.
[02:15:35] and the waiting is just when it finishes.  Maybe this is worth like looking further into the spec.  That being said, as I said, it doesn't apply for suspense.  So I'm not going to worry too much about it.  It doesn't belong as part of this API.
[02:15:45] Um,
[02:15:46] You know, we could look at having a specific like maybe like.
[02:15:50] on you know how we have on mount?
[02:15:52] in solid like that it runs right at the uh well the effects uh
[02:15:57] are running on the
[02:15:59] like after the render effects,  maybe there's like an on before render kind of,
[02:16:04] cycle and if this does work in a
[02:16:08] reasonable way, then we could just hook in to that lifecycle and then
[02:16:13] kind of use it use our same scheduling queuing mechanism so that like
[02:16:17] you can call this function,
[02:16:19] when it's off screen and then
[02:16:22] when it goes to like
[02:16:24] merge and suspense or transition.
[02:16:26] um that's when it actually runs because it's scheduled to run at that point in the life cycle  when it actually
[02:16:32] mounts, so to speak, or renders on screen for the first time.
[02:16:35] So, yeah, I think there's...
[02:16:38] I think there is like
[02:16:40] potential here, but this, I can,
[02:16:43] It doesn't make sense to bake it right into transition API.
[02:16:47] So,
[02:16:49] It's worth noting that React has something called use optimistic, which is like a femoral state that handles all pending states around transitions, converting into an equivalent solid with something like this.
[02:16:57] Create optimistic false true.  The way the React version works is,
[02:17:01] you just set some pending state and then at the end of the transition it gets reset to their initial value.
[02:17:06] Right? So,
[02:17:07] Instead of having, you know,
[02:17:09] this before and after thing, you literally just go before, you know, and then when the transition's done, it's over.
[02:17:15] It automatically resets the base value of the intension.  You can also make the base value derived  into immutable overrides.  So yeah, in React, they have this thing  where you can actually,
[02:17:24] base it on a list,
[02:17:26] and then like merge the stuff in.  And this is actually kind of interesting  because I was thinking, I'm like, what if you made this,
[02:17:33] a reactive list,
[02:17:35] and then pass that list in and then apply the stuff in.
[02:17:39] But,
[02:17:40] Since
[02:17:42] Thank you.
[02:17:43] It's reactive.
[02:17:45] But what if it's immutable though, right?  Every time you get a new to-do, you're...
[02:17:50] cloning everything right
[02:17:52] What if we just made that mutable?
[02:17:55] right what if secretly under the hood only when you add this function like here's a signal here's  here's the signal version it just swaps the value right step pending
[02:18:05] Except...
[02:18:06] false, right? This is like a signal, right? It's very clearly setting value. But when you add the  second function here that does the diff, what if you just made it
[02:18:14] up.
[02:18:15] a projection.
[02:18:16] What if this is derived mutable
[02:18:20] reactivity like we've been working on the last couple months.
[02:18:24] Then this gets interesting because you can apply these once, do the fine grained updates as you mutate it.  And then when the transition ends, just diff back automatically.  This is the Strelow demo in a really, really clean API because you could just like go, OK,
[02:18:39] if
[02:18:40] This add to do doesn't have to be add to do.
[02:18:44] any number of actions you can be like
[02:18:46] add to do, new item, do this.  This is the mutations that come in and then
[02:18:52] you write the merge function right here and then you don't have to call reconcile yourself it just  basically all works and cleans up itself when the transition's done so you just  literally have like a switch statement of like
[02:19:02] on
[02:19:03] the different actions that happen.  The cool thing here is instead of,
[02:19:06] on every new one you clone and stuff, you just do the one fine grained update.
[02:19:11] And we'll only call it with each message once.
[02:19:14] and then apply each fine-grained update.  And then if the optimist update matches the final return value,  then hopefully when it diffs back out, it will match and do no further work and not re-render any more components or whatnot.  So this kind of gives you back fine-grained updates with Optimistic.  There's no cloning or kind of weird merging.  And it makes use of the projection technology that we've been using under the hood.
[02:19:46] What if transition returned a promise for when it finishes and attaches,  so you could do something start view transition?
[02:19:51] Yeah, the problem is...
[02:19:54] And this is how people are doing this all today, but you understand the problem here is this awaits for the whole
[02:20:00] thing.
[02:20:00] Like what if there's async happening in the transition?
[02:20:05] The second you call start view transition, the outer view one from the document, it freezes the API.
[02:20:11] which means that the whole time you're doing async, it actually freezes the UI.  Like it's not interactive anymore.
[02:20:17] Um,
[02:20:18] You want the time inside the callback to be as short as possible.  So you basically want to do the transition,
[02:20:24] resolve all the async stuff, then call start view transition right before you actually do the rendering. But because this is async,
[02:20:31] the start view transition, there's like,
[02:20:33] awkward timing where you like you don't want to render too soon
[02:20:38] Thank you.
[02:20:40] What if the transition fails at some point?
[02:20:43] I think I already went through this.
[02:20:46] Yeah, I mean,
[02:20:48] If it fails, you mean the optimistic state? If it finishes, failure or success, it will revert.
[02:20:54] it will revert the optimistic state regardless.
[02:20:58] um
[02:21:00] Optimistic State is just, it's like pending here. It's like it was pending now it's no longer pending.
[02:21:06] um,
[02:21:07] So,
[02:21:08] Yes, optimistic state only lasts the life cycle, the transition.
[02:21:13] success or failure. Basically what I'm arguing is transitions can't fail.
[02:21:17] The operations inside them can fail.  The way you render everything can fail.  But transitions themselves don't fail.  They just-- they don't error.  They basically happen.
[02:21:28] and they complete successfully or error, but they don't fail. They're just a scheduling
[02:21:35] mechanism going point A to B if you move the transition,
[02:21:38] It's the same thing, A to B. They're not transactions.
[02:21:44] Um,
[02:21:48] But yes, it will revert the state on transition end.
[02:21:54] Because this is using projection, which means that it is--
[02:22:01] uh what do you call it it's it's derived so it doesn't
[02:22:05] If you can see my recent streams, it doesn't actually mutate the source data.
[02:22:08] it actually creates
[02:22:09] kind of
[02:22:11] reactive
[02:22:12] um wrapper around the source data in a super fine-grained way um so
[02:22:20] uh yeah my last not my last stream but the stream before i actually showcased how we could do derived  fine-grained reactivity and that's this is like a perfect use case for that because it basically doesn't
[02:22:31] Um,
[02:22:32] impact
[02:22:33] the, uh,
[02:22:35] Thank you.
[02:22:37] Yeah, it doesn't impact the underlying list.
[02:22:40] So you can always just get back to it.
[02:22:45] I see two benefits of this API.  It separates the two halves in a way  that makes the logic seem simpler.  It hides implicit diffing.  Secondly, it turns objects to updates back into events.  It doesn't assume you want
[02:22:55] the form data you decide. It also doesn't care the shape. You can merge it with the actual list or keep it a list of optimistic things. You can have one handler for multiple messages or one type of handler. The biggest question, as always, is there a more basic primitive here to just handle optimism without the projections? If the reality is solid, you'd almost never want the immutable form for anything with any depth.
[02:23:12] Basically, if you...
[02:23:13] you far enough to have a function, you want projection.  So maybe that's the stance.  No incremental function without,
[02:23:20] without it using a projection.  But that's not true.  I actually figured out a solution to this.  We could have the setter function,
[02:23:28] pass in the previous state.  So if you want to do immutable diffs,  it's like solid signals.  You could have the,
[02:23:35] I think actually I have this in a different...
[02:23:38] HackMD.
[02:23:40] Sorry.
[02:23:42] Um...
[02:23:44] I should actually publish this one, sorry.
[02:23:47] the one I'm on right now.
[02:23:49] publish.
[02:23:52] Sorry.
[02:23:55] I should have copied this into the notes already.
[02:24:00] Thank you.
[02:24:01] Thank you.
[02:24:01] But the other HackMD that I'm working on right here,
[02:24:16] Yeah.
[02:24:17] I realized that we could also have the setter
[02:24:19] in the simple non-diff function version, like basically on the signal version.
[02:24:24] you could still we could pass the previous value in so you could merge it yourself
[02:24:29] which is slightly different than passing the diff function version in.
[02:24:33] which
[02:24:34] uses the projection in the middle.
[02:24:37] right you guys can see the the difference here this one you just like pass in the item  that would be the new item you do the merge in the projection which is a
[02:24:45] um,
[02:24:47] mutable and then setter function with the previous value this is it's it's like a single  signal setter function essentially so then you could you could do here with the simple version um
[02:25:01] The difference is this merges it with some actual derived state,
[02:25:04] you know,
[02:25:05] And then like you would use this if you were just collecting the messages.
[02:25:09] Like,
[02:25:10] In Remix,
[02:25:12] the
[02:25:14] to do a demo, and this is the same as Alt-Star.  We don't...
[02:25:18] our optin like our use uh what's it called use action or use submission sorry use submission  pulls out optimistic data almost in this form where it basically pulls out um
[02:25:30] uh
[02:25:32] the list of messages like the things that you save like each entry you submitted on the form it doesn't
[02:25:38] It doesn't...
[02:25:40] it doesn't merge them.  And then you use this ephemeral state to merge them in the UI, essentially.  Like you go, okay, well, if I have a to-do list and I want to have, I have an add to-do action, you basically, as it's going, you add
[02:25:55] the to-dos on this
[02:25:57] the state and then you have a second for underneath looping or map function looping over the new to do's. So the riddle to do's are untouched and the new to do's are added on the end and this only contains the new to do's and then when it finishes it clears it right. Whereas this version.
[02:26:14] you would actually pass the original to-do list in here and do the merge in here.
[02:26:19] Um,
[02:26:20] you know, fine grained style. This is better if you want to like, like in the straddle demo where you're like moving stuff between core columns, I want to do all this stuff. But then everything basically feeds through
[02:26:30] like I call this optimistic only,  but like you could,  if you did it derived like in,
[02:26:38] this version, this isn't optimistic only, this is list with optimistic thing. And then from here  down, you use this version of the list instead of this version throughout your UI.
[02:26:49] So like this version actually merges the changes
[02:26:55] Um,
[02:26:56] like as part of the primitive, and then you render the merged, the previously merged changes, right?  As I said, this is great for the simple case.  It's the way actions work in solid router.  Right.
[02:27:08] This is much, much, much more powerful and makes it making like advanced optimistic UI updates.
[02:27:16] I'm not going to say trivial, but much easier to get right.
[02:27:21] Thank you.
[02:27:25] Second, are these localized?  Our current API has nice trade off being declared globally.  I guess our action could still work this way.  Yeah, I was basically showing this,  but I actually think the action API would probably work
[02:27:37] like this. But yeah, I'm showing that we could keep solid current action API in the router built on top of this.
[02:27:45] What's cool about this though is if you look at it,
[02:27:47] You know how today our transitions return pending?
[02:27:52] You know, this...
[02:27:53] mechanism works for both
[02:27:55] optimistic updates and normal transition like pending states.
[02:28:01] And,
[02:28:02] I think that's pretty powerful because...
[02:28:05] you control what's pending. The thing that's always bugged me about like,
[02:28:09] is pending or returning stuff like that is like
[02:28:11] Now, if you want to do something special with it, you end up having to drive from it, where a lot of cases, maybe you just have two states and you can just feed them in here yourself, you know, like these optimistic states, you don't have to like, try and derive them from
[02:28:24] a signal to give you. You're the one who gets to choose the signals. I think this is a much more
[02:28:30] sensible API. I was already getting away from our current transitions, like returning the pending  state. That's why I was like looking at stuff like this, which is a signal. But I think this is actually
[02:28:40] even better
[02:28:46] Thank you.
[02:28:47] Thank you.
[02:28:48] Managing errors, this all works nicely for happy case. How do we see errors? Things on the read side naturally error when they're used. Things on the right side have no such ownership. I don't know if it's responsible for updates to contend with that, but historically they have for us. I think the answer most of the time is you don't want to upend the rendering. So the key to this actually is how you manage to return value from the action itself.
[02:29:09] So the idea here is
[02:29:12] When stuff errors,
[02:29:14] Actually, this should have probably a resume in it.
[02:29:16] But when stuff errors, handle it in the action.
[02:29:22] not, don't expect the, again, if we make a specific solution for the router, like we keep our current  action APIs because they're convenient, we'll wrap that logic for you. But generally speaking,  using these like generic low-level tools is errors are not,
[02:29:37] Tide
[02:29:38] to
[02:29:39] Optimistic updates are pending state.
[02:29:40] you
[02:29:42] manage them right now obviously this doesn't work great with progressive enhancement
[02:29:49] So,
[02:29:51] Like,
[02:29:53] To make it work, there will be wrappers around it, like the use submission from the router and stuff that have these
[02:30:00] Seamless.
[02:30:01] things like I picture our APIs in the router here actually staying basically the same, but it's cool to have them built on a more baseline primitive that works in the more general case and is much, much, much more powerful.
[02:30:13] Patterns for async data, what do I got here?
[02:30:16] Yeah, I was started kind of wondering, yeah, as I started working through this, I realized that
[02:30:26] that
[02:30:27] because I've shown this before, but solid,
[02:30:31] 2.0 when you pass a function to signals
[02:30:35] they become drive signals basically.  They become memos that are writable.
[02:30:39] And similarly, if you have a store and you pass a function to it, they become drive store, which makes them a projection that is writable.
[02:30:46] And I started noticing as I was playing around with these that without transitions, like just on the base case, you might...
[02:30:54] do this a lot. You might fetch some async data and then turn into a store, basically.
[02:31:00] um by diffing it this is what the reconcile function does and then whenever the async data  updates from the server you diff it and otherwise you can just mutate it like a normal store i i  can see tons of people using this pattern for doing like
[02:31:12] fine-grained store updates on async data, right?
[02:31:16] And in the sense, if you put these together, this is create async store.
[02:31:20] It's not too hard to see how these compose.
[02:31:23] The diffs, the data wherever it comes to the server, but then you're free to override it as much you want.  It's basically the granular equivalent to drive single.  This technically has optimism built in.
[02:31:31] because you're setting the store and then you've
[02:31:34] fetch manually, but when and how you say the data is up to you, it is very client centric thinking.
[02:31:40] Conversely, with transitions, you might do this.  You might go create async fetch data, and then
[02:31:45] Create optimistic.
[02:31:47] store mutate and then use those things to like I've shown before. You've seen this before,  it's a reducer, right? Difference here is the lifetime and the ephemeral state is set by the  transition that uses the mutate function. Basically, you can't update the store without  also scheduling transition that refreshes the data. It's a much more constrained pattern,  but it automates a lot of the pieces. Both approaches use projections under the hood,  but the latter is more guided approach.
[02:32:09] right this is kind of like the you can do anything with solid approach and this is like the like
[02:32:14] happy path, like use the features properly approach.
[02:32:18] OK.
[02:32:19] should all projections look like this? I was tempted and I went through this kind of side where I was  like what if projection API always looked like this where you had like a baseline that you  could drive from and then you could like do this because it kind of makes sense you know
[02:32:30] But what I realized is
[02:32:33] For this API to work, you have to be able to do the diff at the end and know how that diff works, which means that
[02:32:41] if you want to be performant and actually diff against the projected data and not like lose things  in intermediate steps you have to wait till everything related to this projection  is like all the futuristic stuff like all the optimistic stuff is basically resolved
[02:32:55] so that you can get rid of it and rebase it when the base happens, which actually turns out
[02:33:00] difficult to do manually. Transitions manage this for us or can manage this for us because transitions have a set
[02:33:07] guaranteed finish time and you can go look until these things are entangled, until the transition's done.
[02:33:13] we can't
[02:33:15] you know, clean this up. So you could work, you could be running multiple transitions, kind of,  and getting entangled in multiple actions as you go and be living in optimistic state for a while  until you finally stop typing. And then optimism, you know,
[02:33:26] Yeah.
[02:33:27] clears out and you're done. But basically,
[02:33:30] As long as the final diff happens when all this, you're sure that the server has all the stuff, then you're fine.  But in the general case projections, you wouldn't know that, which makes this not a suitable API for projections in general.
[02:33:41] That's the short version of this long write-up.
[02:33:44] um
[02:33:47] Yeah, the fact that it makes the win here is the Strelo demo literally turns into this, which is just beautiful because, as I said, it's finally
[02:33:57] as easy, if not easier to write than like the React version of the code.
[02:34:02] and it's way more performant.
[02:34:04] So because it's, it does fine grain all throughout. So I'm, I'm,  I'm pretty stoked on that.
[02:34:10] But I haven't implemented this yet.  This is the design thinking here.
[02:34:15] Um,
[02:34:17] Yeah, use action state driving people crazy.  We're going to get to in a second here because I'm talking about the API design.
[02:34:23] I think actions are where we go to next. Let's talk about actions. I've done this one.
[02:34:29] Done this one.
[02:34:32] What do I have left here? Let me look at topics.
[02:34:36] Single feature we already talked about.
[02:34:39] OK, actually, this is related.
[02:34:42] Yeah, what's my last HackMD?  I just want to see if...
[02:34:47] if it's relevant to anything.  Is Create Optimistic the right API?
[02:34:55] Thank you.
[02:34:56] Thank you.
[02:34:58] Thank you.
[02:35:00] Okay.
[02:35:01] I might not get to this one today. We'll see. You have to understand stuff on the other side before we get to this one. So let's continue with...
[02:35:14] Now's a good time to go address all the Twitter stuff.
[02:35:19] related.
[02:35:22] Yeah.
[02:35:23] Because...
[02:35:26] So,
[02:35:27] Thank you.
[02:35:27] I,
[02:35:28] I'm trying to remember where the best conversation for this happened. I think it actually happened to Blue Sky.
[02:35:33] Thank you.
[02:35:34] It's hard when you have everything in multiple places.
[02:35:41] Thank you.
[02:35:42] um oh i forgot to say i was live oh well
[02:35:45] Um,
[02:35:49] Thank you.
[02:35:51] Okay.
[02:35:53] Thank you.
[02:35:54] Okay, cool. So,
[02:35:58] Let's look at this video and see what's happening.
[02:36:01] Okay.
[02:36:02] Start at the beginning.
[02:36:04] We have
[02:36:07] Bye, Buttons.
[02:36:08] on the screen, okay?
[02:36:10] Right?
[02:36:11] Okay.
[02:36:12] And
[02:36:16] Thank you.
[02:36:17] clicking each one one at a time.
[02:36:21] And
[02:36:24] You see these fetching sequentially,
[02:36:27] I'm actually not sure if it's not just his clicking that's causing them to go sequential here.  But the more important part is these two are finished already.
[02:36:37] But these still say acting on them.
[02:36:41] Back.
[02:36:43] These three are finished and still saying acting. Let's keep going a little further.
[02:36:47] All of them are finished except for the last one still saying acting here.
[02:36:51] And then finally,
[02:36:53] Done.
[02:36:55] The answer is because there's a single future in transitions.
[02:37:00] These are all
[02:37:06] These are all kind of seen as the...
[02:37:09] like they all get entangled, right? So
[02:37:13] There's a comment here on this post that says,  is there no way to use server functions in React  without their pending states all being tied together?  Which is fair.
[02:37:21] And the answer is no.
[02:37:25] basically, if you want to use trans, or sorry, transitions.  You can use, sorry, you can use server functions  without transitions, but if you're using transitions,  then the answer is no.
[02:37:34] So,
[02:37:38] - Yeah, this gets the way the confusion starts.  Ricky goes, yes, they're parallel by default in React.  You may be using use action state in which you're opting  a serial processing or doing the pending state  and async transition and all transitions are tntangled  together until we build parallel transitions.  Okay, so,
[02:37:51] One of the things is use action state.
[02:37:54] um like their form processing version actually forces them in order like but this one you can  see it's not in order because
[02:38:02] It patches.
[02:38:04] like it's fetching three forward at the same time. If this was use action state,
[02:38:09] It would do the first one.
[02:38:10] finish, do the second one, finish, do the third one, finish, do the fourth one, finish, do the sixth one, which
[02:38:19] Like, which is not...
[02:38:24] Not great.
[02:38:25] You know, there was a whole controversy about this because that's like the default behavior and no one was expecting that.
[02:38:32] From next.
[02:38:33] I, however, in my retweet here, actually defended the React index position on this stuff, and I want to explain a little bit why.
[02:38:42] Um,
[02:38:43] Not the use action state thing.
[02:38:45] uh,
[02:38:47] I don't think almost anyone wants serial behavior.
[02:38:52] Like that?
[02:38:53] But this isn't serial behavior.  This is just all the pending states being entangled.  In fact, which means that it won't update the UI
[02:39:00] until the last thing comes back.  And there's a very, very good reason for that, right?
[02:39:04] Um,
[02:39:06] And I think we'd have to do some Excalibur to talk about this in a second.
[02:39:10] Yeah, that's all I want to know, use actual data, you opt in serial processing, where else transfer your globally tied together. I disagree with your take on APIs. Of course, this is artificial. So how serious test the worst case? Probably right. I do want to use optimistic updates here. In general, I probably won't suggest using action, use actually how they behave. Also want to have rules without escape patches, plenty, plus good Wi-Fi clicking around and having plenty of states all tied together. Single would not be plenty of experience. That's a good and convincing. I'm sorry. I didn't use extra forces. Blah, blah, blah, blah.
[02:39:37] I think if you use that useAgeist for this pair, it's opt-in when you exactly
[02:39:41] often not use X, you can use raw actions and start transition, which run in parallel.  Then you need to handle race conditions in order to state yourself.
[02:39:49] Thank you.
[02:39:50] So that use action is required to use action, but it's not.  You can change your thing.
[02:39:53] But the thing is, these are...
[02:39:57] in parallel.
[02:39:58] and you're still getting this behavior, which is why I want to flag this out. Okay?
[02:40:03] So let's talk about this. Why?
[02:40:06] do I think
[02:40:07] Because I sit here, I need to remember to talk about this in the next stream.  What React is doing is quite logical here.  I see a lot of parallels between actions and use effect.  They break the dependency graph so you can no longer automatically be smart about what they impact.
[02:40:18] even with better async parameters like BamSolid,  our graph is on the get side, it's derived.  We can trace the state change to it appear in the UI,  set user ID, get user with ID, do this.  I showed this a moment ago when I was showing Dev's demo,  how we could like basically trace through this stuff  to do suspense error boundaries, even transitions.
[02:40:36] Okay.
[02:40:37] But...
[02:40:41] Thank you.
[02:40:42] Actions don't tell us their downstream dependencies. Like useEffect don't tell you what state to write to. This is basically the ASIC version of the same shape of problem. Anyways, food for thought.
[02:40:53] Let's and to be fair,
[02:40:57] I think, you know,
[02:40:58] The Live View guy was nailing Remix about their optimistic updates, saying that it wasn't safe.
[02:41:05] and
[02:41:06] It's a very similar conversation here for why we
[02:41:11] We, um,
[02:41:12] we have to use transitions this way because a lot of people see this kind of behavior and like oh  this sucks i'm not going to use it and then they actually introduce a bunch of race conditions and  they try and solve them but then they miss a few cases
[02:41:23] Um,
[02:41:24] generally speaking.
[02:41:25] The problem is that...
[02:41:29] It takes specific knowledge to know
[02:41:32] Um,
[02:41:33] that you can't merge these together.  Because as I said...
[02:41:37] It's not too hard for us conceptually to use the reactive graph to know when we can merge different transit transitions on the get side.  But on the the.
[02:41:45] action side,
[02:41:47] We don't know what the server is going to be like, oh, yeah, invalidate this data now that you've done this action.  We don't know that.
[02:41:53] And the problem is this.
[02:41:56] Okay.
[02:41:57] Let's draw this out. Let's look at a...
[02:42:01] some kind of
[02:42:04] I'm going to think of how to best show this timeline.
[02:42:07] Let's...
[02:42:08] Use solid lines.
[02:42:11] And let's do some kind of fill in background color. So there's
[02:42:16] Start with red, maybe.
[02:42:19] Phil, okay.
[02:42:20] Because I'm trying to think of how to show this in terms of timing, because there's
[02:42:25] There's basically the first step is...
[02:42:29] Thank you.
[02:42:34] Let's do medium.
[02:42:36] Thank you.
[02:42:37] initiate
[02:42:40] action on the client, okay?
[02:42:43] Thank you.
[02:42:45] Thank you.
[02:42:46] Let's do this.
[02:42:49] Right. And then...
[02:42:54] Thank you.
[02:42:55] Thank you.
[02:42:57] Thank you.
[02:42:57] Thank you.
[02:42:59] Thank you.
[02:43:00] Thank you.
[02:43:03] of course. And then the next state here is
[02:43:09] Apply mutation.
[02:43:13] Thank you.
[02:43:15] On server.
[02:43:21] Thank you.
[02:43:23] Thank you.
[02:43:24] Thank you.
[02:43:25] Let's give it a blue.
[02:43:28] OK.
[02:43:29] And then...
[02:43:32] Thank you.
[02:43:35] I mean, it's actually...
[02:43:39] i'm i haven't drawn this one before so i have to actually think about this a bit about where we want  to uh
[02:43:48] Thank you.
[02:43:50] Thank you.
[02:43:52] where we want to...
[02:43:57] Thank you.
[02:43:59] Thank you.
[02:44:03] Yeah, I think I'm going to need more steps than this.
[02:44:06] I wanted to do it like this instead of a timeline, though, because--
[02:44:13] Let's see if I can get it here.
[02:44:16] initiate
[02:44:20] - Betch.
[02:44:22] On client.
[02:44:26] Thank you.
[02:44:27] And then finally...
[02:44:37] Thank you.
[02:44:41] Get data from
[02:44:50] DB server
[02:44:56] Thank you.
[02:45:00] and then...
[02:45:04] Sorry, I just got to...
[02:45:08] one more stage, which is
[02:45:12] Thank you.
[02:45:17] Thank you.
[02:45:18] Thank you.
[02:45:18] Update.
[02:45:20] UI.
[02:45:25] Do I incline?  I mean, it's a little bit oversimplified.  I'm probably gonna need more steps here, I think.
[02:45:35] Thank you.
[02:45:36] Do I have enough of these?
[02:45:39] Colors.
[02:45:41] Probably not.
[02:45:46] That's fine. I'll use these.
[02:45:50] Thank you.
[02:45:52] - You can rep, this has mostly do with optimistic updates.  So next doesn't have optimistic updates or next, sorry.  Then you might not see this,  but this can always happen actually.  I think this has,
[02:46:07] I mean, law solutions don't solve a lot of these edge cases for you anyways, which is why sometimes like when Jose was going off on like the live view guy on this stuff, I was kind of like, yeah, and so has every client side application for all of eternity. So like, you just have to manage this stuff, you know, but, um,
[02:46:27] Okay.
[02:46:27] Bye.
[02:46:28] I want to show that there's a sequence, right? And
[02:46:31] The challenge is,
[02:46:35] Thank you.
[02:46:36] these things are
[02:46:39] can happen.
[02:46:43] I'm going to shrink it down a little bit.  These things can happen.
[02:46:46] with different timing.
[02:46:48] Right?
[02:46:50] Now, it's not until...
[02:46:54] we get to here.
[02:46:57] that we know
[02:46:59] with an action like what the downseat impact is. This is when we like this part up here,
[02:47:06] Like get is here.
[02:47:09] And I'm not going to include single flight mutations for a second here, but it's the same conceptually thing.
[02:47:20] like i'm only keeping this for a second but i just want to point out that there's two  parts of the cycle there's the post and then there's the get
[02:47:27] Um,
[02:47:28] Right, there's the mutation, and then there's the like,
[02:47:32] you know, revalidation or whatever.  Like it's true that this could just,
[02:47:38] return the data with it immediately and then
[02:47:42] But the problem is the impact of this could be more than just the scope of what launched it in the first place.  This is why we have stuff like Tanstack.
[02:47:52] query, why?
[02:47:54] you know,
[02:47:55] we have loaders that remix working at a fairly global scale at the route level like there's
[02:48:02] there is this part of the cycle, you know, react server functions that they include their server actions, I guess, are now server functions to basically do this and then return server components, which is kind of like to get like there's this full cycle, right? You,
[02:48:18] you post to a page and get the next html right this is this is common the thing is
[02:48:23] Okay.
[02:48:25] Thank you.
[02:48:26] If you have multiple of these things going at the same time, okay?
[02:48:30] Let's grab another one of these.
[02:48:34] Thank you.
[02:48:36] and let's just offset them a little bit.  This is the simplest case.
[02:48:46] In the simplest case,
[02:48:49] Thank you.
[02:48:50] Thank you.
[02:48:53] as I mentioned it's only on the get that you understand that there's that they are actually  entangled so if we just don't do anything special and assume that transitions are not  entangled until they hit a reactive graph node change the simple case is actually
[02:49:07] fairly helpful here because the simple case, when you're doing the fetch on the client,
[02:49:13] you set the state this is when the transition classic starts and this cell  solid 1.0 actually works uh with its stuff i didn't actually wrap the action
[02:49:21] part in the transition.
[02:49:23] There's a reason I want to in 2.0, but...
[02:49:27] Initially, I just did it here. What would happen is,
[02:49:30] When this gets to here,
[02:49:33] it realizes that it's the same transition. It's impacting the same data set, right? If these are  would be entangled, right? We only care about the entangled case and the not entangled case,  then yeah, these things can go independently. We don't really care, right? But
[02:49:47] It's when we get to like set, you know, we go, yes, we succeeded.  Refresh the data.
[02:49:53] with this ID, you know, at this point,
[02:49:55] we have our more synchronous,  like we have the full reactive graph in this get side.  And when this hits it, it can see that it overlaps with this  'cause it's happening at the same time.  And what's beautiful about this is,
[02:50:06] It knows this one happened after.
[02:50:09] Right. So it actually will cancel out
[02:50:12] this one, so to speak, right?
[02:50:14] because of CreateAsync essentially
[02:50:21] knows that like it handles these kind of race conditions which is great because
[02:50:27] you know,
[02:50:28] If something weird happens here, like you're doing this one,
[02:50:33] And it suddenly, you know,
[02:50:35] for some reason,
[02:50:37] does this.
[02:50:41] Thank you.
[02:50:42] Sorry.
[02:50:44] Thank you.
[02:50:45] Thank you.
[02:50:47] Thank you.
[02:50:48] If this happens, you know what I mean?
[02:50:50] it's basically going to ignore...
[02:50:54] this and it's just going to continue on from here like this this part just won't exist it'll just be  like bye bye right
[02:51:00] But
[02:51:02] Thank you.
[02:51:03] Thank you.
[02:51:04] So you get some protection automatically simply by...
[02:51:10] the fact that
[02:51:12] because these get locked in a transition.
[02:51:15] sequence that
[02:51:17] and the uh because of the uh
[02:51:21] It actually technically because of transition,  I'll wait for them both to come back, I guess,  which is arguably, but actually,  if they're the exact same data being fetched,
[02:51:29] it will be canceled if it's the exact same data source being  updated because of the internals of create async.
[02:51:38] It'll just basically cancel the first one.
[02:51:40] Thank you.
[02:51:41] Right.
[02:51:42] Okay.
[02:51:44] But basically,
[02:51:46] this already, you know, is kind of helpful.  The challenge is,
[02:51:53] What happens?
[02:51:57] if,
[02:51:58] So mostly the fetch side stuff gets handled automatically now because of transitions and  async printouts. But what happens if
[02:52:10] if these two miss each other.
[02:52:14] Thank you.
[02:52:15] Like if I move this just a slight bit further,
[02:52:20] to hear.
[02:52:24] Now,
[02:52:25] Oh, actually, this isn't quite right.
[02:52:30] Thank you.
[02:52:30] I think I can move it a little bit further.
[02:52:37] Thank you.
[02:52:39] Thank you.
[02:52:41] Thank you.
[02:52:42] We got to move this to here after this gets back.
[02:52:49] Because this can happen in solid today.
[02:52:53] Thank you.
[02:52:55] The transition ends.
[02:52:58] before this green part happens. So when this goes to go, it doesn't actually see that it overlapped.
[02:53:04] if we didn't start the transition here.
[02:53:06] So,
[02:53:08] And it's possible
[02:53:11] depending on when the supply server
[02:53:14] mutation on the server and this get data from the database happens.
[02:53:18] for
[02:53:20] for this apply to happen
[02:53:24] before this get.
[02:53:29] Do you see what I'm saying?
[02:53:31] So this to actually get the change from this action,
[02:53:37] ahead of time before it actually
[02:53:40] before it actually like should.
[02:53:44] Right.
[02:53:44] I
[02:53:46] And,
[02:53:47] As I said, in a basic case,
[02:53:49] No one actually notices this.
[02:53:51] In general.
[02:53:55] Okay, I can zoom in a little bit more.
[02:53:58] But I'm pretty wide here.
[02:54:00] Let me see if I can move myself down maybe. This is better.
[02:54:08] Um,
[02:54:11] Thank you.
[02:54:12] Thank you.
[02:54:14] What I'm trying to get at is it's possible for it to save on the server before the get cycle happens.  And for this to update the UI with both changes,
[02:54:24] And then...
[02:54:26] go to update again with both changes. I mean, this is not a big deal.
[02:54:30] for normal UI, but this is actually a really awkward
[02:54:34] I, I, I,
[02:54:35] for optimistic updates because these don't because the timing of this  fetch happens after the transition ends it doesn't make them the same
[02:54:42] transition.
[02:54:44] You know, if you only start the transition on the get side and not on the action side, which means that like if this optimistic update was to add one item.
[02:54:54] And then this was to add another item.
[02:54:58] So you've now got two items sitting there.
[02:55:01] well like extra items on the end of the list when this finishes
[02:55:06] It goes, okay, I'm done my transition.  And they didn't get interlocked.  They didn't realize they were the same transition.  So it removes the one item that it was intending to.  The other item stays there.
[02:55:15] but it returns the data for both items.  So briefly, between...
[02:55:19] this rendering,
[02:55:21] And this rendering?
[02:55:23] the second item is going to appear in the list twice.
[02:55:26] Once it's new and once already there.
[02:55:29] because it returned it because it already applied the mutation.
[02:55:33] Right. Because these did not get interlocked.
[02:55:37] like they didn't entangle.
[02:55:39] because the transition started too late.
[02:55:42] Um,
[02:55:44] you use similar things with deletion where like if one needs a deletion, you'll see stuff delete and then show up again and then delete like delete again.  These kind of things can happen with optimistic updates.
[02:55:54] If
[02:55:56] if essentially these aren't tied together as the same transition but they don't know they're the same transition
[02:56:01] because, you know,
[02:56:04] because the transition ends before this one actually
[02:56:08] figures out its data dependencies.
[02:56:11] This is kind of...
[02:56:13] The the challenge. The funny thing is, I said without optimistic updates,
[02:56:17] you wouldn't probably notice this because I mean we're all kind of accustomed to this kind of  behavior like you're on a website and then different user updates the state not you
[02:56:25] but like a different update, the user updates the state.  And when you do a save, not just your new data,  but like other data comes in too.  It's a little bit jarring, but you're like, oh,  someone else must be on this page.
[02:56:36] Right?
[02:56:40] Thank you.
[02:56:42] Thank you.
[02:56:43] Thank you.
[02:56:48] Yeah, I don't have time to make these kind of demos per se.
[02:56:55] But yes, I mean, these are just conceptual. Like, I think Jose from LiveView on Twitter, I maybe dig it out a while ago, did a decent job of like picking apart a website.
[02:57:06] that had these sort of issues. You've probably seen them before not realize the cause of them.
[02:57:12] But yes, this timing bit is a little bit awkward.  The ways to fix it, right, is if you entangle this,
[02:57:20] Then,
[02:57:21] you know not to update the you you you know not to do the update until the end here.
[02:57:27] Salt.
[02:57:28] But...
[02:57:29] Thank you.
[02:57:30] but you you don't know the entanglement i also just realized the solid events creates a graph  for the post side it can tell us everything that will be updated right at the beginning of the event
[02:57:42] That's interesting.
[02:57:43] Because one of the API choices is basically to tell the transition, this is what we'll update. But that's...
[02:57:50] it might not know because the server might fail or work a certain way.  And like,  you can dynamically choose what gets invalidated at mutation time.
[02:57:58] right?  Um,
[02:58:01] so like...
[02:58:04] It's...
[02:58:06] The other...
[02:58:07] solution to this though that I was thinking about is
[02:58:11] If you're okay with this happening,
[02:58:14] when optimistic updates aren't involved,
[02:58:17] we could just entangle
[02:58:19] Like you have two options.  You basically have to say, look, all actions, when there's actions involved, have to entangle.
[02:58:24] You can do the get stuff as much as you want,  but as soon as you have actions, they're going to untangle,  which means you're basically...
[02:58:30] back at this React example. It's not unreasonable.
[02:58:34] If they didn't do this,
[02:58:37] you know, stuff like I'm showing you right now,
[02:58:40] in the XcaloDraw can definitely happen, especially
[02:58:44] And these are not the kinds of...
[02:58:47] things.
[02:58:48] Like as I said, people are accepting when optimistic updates aren't involved. But as soon as optimistic updates are involved,
[02:58:53] It this is not.
[02:58:55] the pro developers fault for not handling these educations.  This is the framework's fault.  Like react knows that if they didn't,
[02:59:01] say this was a behavior.
[02:59:03] like,
[02:59:04] and you had your optimistic updates popping in and out,
[02:59:07] like,
[02:59:08] They can't offer an optimistic primitive and not handle this case.
[02:59:13] Right?
[02:59:14] So like,
[02:59:16] it makes perfect sense for it to work the way that it does.  I'm not action state, that's a whole other thing.  But for transitions in general to work like this,  that they encapsulate, they don't know what's going to happen,  and they encapsulate the action state.
[02:59:32] But yeah, I mean, what I'm thinking is interesting is if these are related to the same data and they feed through the same optimistic updates, that could be the indicator that they entangle.
[02:59:41] Right, because without optimistic updates, you might not actually care if this happens.
[02:59:46] Do you know what I mean?  So that's my working principle, at least right now.  We'll see how this goes.  But there's a whole bunch of situations you get when these timings happen.
[02:59:59] compressed.
[03:00:00] - Or change or shift happens before.
[03:00:02] Half of them are resolved by transitions simply from the synchronous
[03:00:07] data fetching point down.
[03:00:08] like just having transitions. The other half of them
[03:00:11] are can be solved by actually encapsulating the whole process right because now
[03:00:19] It's only if you start the action after you started the UI update that they're not that they're not potentially entangled.  The beautiful thing about actions generally is you can.
[03:00:30] I mean,
[03:00:31] If...
[03:00:32] you will set the optimistic updates upfront. Now it's possible that you can be in the middle of an  await chain setting optimistic updates and then you won't know until the middle. So like,
[03:00:40] the approach that React is taking right now  is the only actually foolproof solution.  It's just, there's a certain question here that,
[03:00:49] if
[03:00:51] If we basically assumed--
[03:00:54] React to graph entanglement using stuff like optimistic updates.  Could we get there? Like one of the tools that I have in solid that they don't have in React is I know the graph, right?
[03:01:04] When React talks about parallel...
[03:01:08] um transitions they're kind of talking about transactions i think and then  figuring out how to merge them and like like it's kind of complicated
[03:01:16] Um,
[03:01:19] Whereas
[03:01:22] When I'm talking about parallel transitions,
[03:01:26] I can just go, I know what's impacted from a graph standpoint. In React,
[03:01:32] The challenge is,
[03:01:33] because the UI components pull lots of data together.
[03:01:36] Colocation in the UI is actually what decides the thing.  So then you can't really isolate any like thing within the same tree.
[03:01:42] you know whereas because again transitions conceptually start from the global level i  guess it's where you set that state
[03:01:49] So if stuff's in the same component,
[03:01:51] then you're kind of messed like there's nothing you can do whereas when the fine-grained approach  you don't actually care what component it's in only if the graph overlaps so
[03:01:59] Um,
[03:02:01] I think this opens an opportunity for us to have different solutions in the space simply on the fact that we can actually know the dependencies of the graph. And this is what I'm talking about some of the applications of signals that go beyond what we can do in react today.
[03:02:16] So
[03:02:17] But yeah, I mean, getting back to...
[03:02:20] to this thing.
[03:02:25] Thank you.
[03:02:28] There was a comment on here.
[03:02:33] Thank you.
[03:02:34] Thank you.
[03:02:37] I thought there was a response.  Maybe it was on the Twitter...
[03:02:41] Twitter thread.
[03:02:42] Let's go to X.
[03:02:48] .
[03:02:49] Thank you.
[03:02:53] Thank you.
[03:02:54] Okay.
[03:02:56] Thank you.
[03:02:56] Thank you.
[03:03:02] Hmm. No, it's probably deep somewhere in the,  in the comments on the blue sky thread then,  because it wasn't on my top level.
[03:03:11] top level thing.
[03:03:15] Thank you.
[03:03:15] 111, yeah.
[03:03:21] Thank you.
[03:03:22] Thank you.
[03:03:23] I think there is a comment...
[03:03:28] Thank you.
[03:03:31] - Let me see, React is enforcing them in order,  the requests are parallel, they just get grouped  in the same transition pending state.
[03:03:39] "Tilumely, use action state, it's great.  Me, oh, this doesn't do what I expect.  Now my UX is very specific where you can,  don't use it, do this stuff, back to score one.  Maybe it's a bit simplistic, but every time I touch  new React 19 stuff, this is our Intune.  It's like, I like remix fetchers.  I get them to problems you described,  or mostly back in problems.  I want server function to work with fetchers, blah, blah,
[03:03:56] Yeah, so he's using use transition, not use action state.
[03:04:01] I get a global plan.  The way not to get them is don't use transitions.  Now I know.
[03:04:05] Yeah.
[03:04:06] It's tricky.
[03:04:09] Because...
[03:04:11] If you don't use transitions,
[03:04:16] or something like this, it's very difficult
[03:04:19] Sorry, where's my Excalibur?  It's very difficult to handle these problems.
[03:04:25] problems completely because
[03:04:26] The number one thing you can do is control the sequence that these happen.
[03:04:30] from the client, right?  You can go like,  give each of these an individual ID.
[03:04:35] But...
[03:04:36] You also have to know
[03:04:39] Um,
[03:04:41] Hmm.
[03:04:42] when to say,
[03:04:43] cancel which is fine i mean if they're the same fetch it's or same action but like
[03:04:49] you also but if they're a different action but related to the same data like there's so many permutations
[03:04:55] of,
[03:04:56] of how this can go wrong.
[03:05:00] that you basically end up building something very similar where you act like hold the,
[03:05:06] applying the state.
[03:05:08] again, forking it in order to get yourself there.
[03:05:11] Um,
[03:05:12] just
[03:05:13] so that,
[03:05:14] I'm interested to see, but my gut feeling is,
[03:05:19] In order to avoid
[03:05:22] doing what React does.
[03:05:24] when you have a solution to similar things you're probably missing
[03:05:29] some edge cases in the general sense.
[03:05:31] Like maybe you have a specific solution where you're like, oh, in this case, do this or use this version of the API.  But in a general sense, you...
[03:05:38] you,
[03:05:39] you can cause this kind of,
[03:05:41] behavior.
[03:05:43] probably i i i can't like prove that but my gut feeling is that
[03:05:49] there is some way to cause an issue if you're not entangling in these,  just because there's, there's so many different timing situations.
[03:05:58] And
[03:05:59] at the point where you're basically forking and creating your own updates.  They again, this is kind of like what I'm talking about, the physics of it all.  They have to behave a certain way.
[03:06:09] in order to ensure this behavior.  I'm not looking at this as a React specific way.  I'm looking at this in the general problem space sort of way,  like we did with transitions or whatever or async.
[03:06:20] The shape of the solution can only look a couple of ways and with certain caveats.  Now, you might not like the caveats that the React team chose, but...
[03:06:29] But,
[03:06:31] I think looking at this from a general sense, that has to be the solution unless you have some like clever trick up your sleeve, you know, like maybe use the dependency graph or something like that.
[03:06:40] Whereas
[03:06:42] I think if you're already building in React, you're kind of stuck with the same tools that React has given to you, unless you specialize.
[03:06:49] But then if you specialize, you're not solving the general case. So I'm like,
[03:06:53] Yeah, my...
[03:06:55] That's my gut feeling here.  So yeah, that's...
[03:06:58] This is why transitions are tricky.
[03:07:01] My...
[03:07:01] I think the most reasonable trade-off that I can think of right now is the
[03:07:06] not caring about this if there's no optimistic state because then
[03:07:10] you're used to that as a developer on the front end.  It's only when you introduce optimistic state  that you kind of feel responsible that you're like,  look, I can't have it be weird and janky.
[03:07:20] It needs to be predictable.  You know, when it's my own state and my own changes,  I can't have it stuff appearing twice or disappearing and reappearing.  And in that case,
[03:07:28] Um,
[03:07:30] Maybe we can use the graph there. Anyway, I think that's it on this topic.
[03:07:35] for now. Let me continue because I want to show off a bit of what I've been working on.
[03:07:45] Thank you.
[03:07:46] This is a tricky problem. I don't think people appreciate
[03:07:51] Appreciate it.
[03:07:52] how it kind of has to operate like this.
[03:07:59] And I mean, this is my gut feeling on it. It's funny because
[03:08:03] I came to this independently, you know what I mean?
[03:08:07] This is not me like copying react and agreeing with them.
[03:08:10] Um,
[03:08:13] I've been actually just working on this completely
[03:08:17] not completely aware of all the React behavior.  Like I only found out about use optimistic like a month ago.  I mean, I knew about it, but I never looked into it.  I didn't really think about it much.
[03:08:26] because it wasn't the topic I was on.
[03:08:29] So,
[03:08:30] Yeah.
[03:08:31] Anyway.
[03:08:32] Okay, let me get to the demo that I originally showed off that I wanted to talk about on the stream today.
[03:08:38] Because people probably saw this demo.  And let me close this up a bit.
[03:08:44] And they probably thought,
[03:08:47] that I was basically showing
[03:08:50] the answer
[03:08:51] to
[03:08:53] the this twitter post like look it looks the same right
[03:09:00] you know,
[03:09:02] They're independent.
[03:09:05] The key difference here is that...
[03:09:12] There's no post here. This is purely get.
[03:09:17] Thank you.
[03:09:18] So yeah, I'm
[03:09:19] In case you haven't seen this, I'm going to share this link in the in the tab. This is a very early
[03:09:24] look at, um,
[03:09:26] 2.0 transition approach.  And let me kind of show,
[03:09:30] show the basic example. Basically, I'm using real DOM elements. There's no JSX compiler. This isn't like a solid build. This is just me literally in the playground hacking the solid signals implementation and then just using DOM effects directly.
[03:09:49] But essentially I made a component
[03:09:52] that has an ID.
[03:09:55] that you can increment.
[03:09:57] has an optimistic pending state that gets sent to true and false.
[03:10:01] has async data based on that id which literally just appends a d to the front of the id
[03:10:06] Nothing creative here.  Then I create a div and a button.
[03:10:10] and then set the text and then on click, run a transition, which sends pending data to true and increments the ID.
[03:10:17] And then, yeah.
[03:10:21] some div stuff, just initial loading state, and then it has an effect.
[03:10:25] This effect listens to the ID,
[03:10:28] the return data
[03:10:31] and some global counter that just keeps incrementing.  And then I have a different render effect that listens  to the pending state.
[03:10:40] And like if the data is pending and then sets the opacity based on whether it's pending or not.
[03:10:45] Right.
[03:10:47] which was the optimistic data from the transition.
[03:10:51] And then finally,
[03:10:53] I grab my app and then I append two copies of the component, one with name one and one to name two.  And we set up our global counter. OK, that's that's a setup for this.
[03:11:07] Oh, yeah.  This, I have not...
[03:11:12] Um...
[03:11:14] i like i have not made this work generally practically at all um crit effect is also um
[03:11:23] different because crit effect uh is it doesn't participate in transitions if you remember this  was the outcome of uh
[03:11:31] of our, uh,
[03:11:33] of our discussion. I mean, we can try it on stream and see what it does and see if it's what I expect it to do. Or if it just errors out and it doesn't work. But
[03:11:41] Uh,
[03:11:42] Yeah, get...
[03:11:44] Generally speaking,
[03:11:46] um
[03:11:47] Because for the same reason here,
[03:11:49] This effect is reading from phrase up here.
[03:11:53] And it's not...
[03:11:55] suspending the whole phrase counter. We said that only render effects participate in these  node collections because this doesn't have to do with rendering.
[03:12:04] So this gets
[03:12:06] This gets held up on the graph when it's like, it only runs when it can resolve async, but it does not like throw up to a suspense. This is how we can have an effect that reads an async data above a suspense.
[03:12:18] Whereas,
[03:12:19] Um,
[03:12:21] The rendering happens under suspense, otherwise it would move all the way up.
[03:12:26] Similar idea when working on this example here. So,
[03:12:31] Render effects are key to this example working.
[03:12:39] Thank you.
[03:12:40] Thank you.
[03:12:40] Okay, so it's like just broken. Okay, fair enough. Yeah, so basically,
[03:12:48] When I increment this ID, you're going to see it turn gray, right?
[03:12:52] for two seconds.  The counter's at every...
[03:12:54] So it goes 8, 9, 10, click.  Right.
[03:12:58] And if I jam this like 10 times,
[03:13:04] Like you see that it actually waited until the end to actually show the updated data. And the key part is this count keeps on counting throughout. I told you to actually prove transitions, you actually have to have a counter going because that means that there's a version that's locked up on here.
[03:13:21] And there's a version.
[03:13:23] that
[03:13:24] continues to count up
[03:13:27] in the foreground, right?
[03:13:29] But the key part is ID9.
[03:13:32] And these are always the same.  They're always consistent.  The ID cannot get out of sync with the data.
[03:13:38] Right?
[03:13:40] And
[03:13:41] that now as it turns out and i obviously i did this very
[03:13:45] easily because I just made it onto a component that does it in real apps more complicated.
[03:13:50] This...
[03:13:51] One.
[03:13:53] is this transition is completely independent because it doesn't share any part of the same graph.
[03:13:59] It sets a different signal.
[03:14:02] has a different optimistic update.
[03:14:05] has a different async,
[03:14:07] So there's no reason for these two entangle together. So I can hit this five times, hit this five times,
[03:14:14] And,
[03:14:17] they can run independently here  because I can create multiple transitions at the same time,  as long as they don't entangle.  If they do entangle, that's what this case,  when I hit it multiple times, that's them entangling.
[03:14:27] That's why they wait to the last one.  But these ones are completely independent.
[03:14:32] Um,
[03:14:36] Yeah, so I mean, that's the basic example. See, if you don't have a transition in this example,
[03:14:44] and we do this, what ends up happening is,
[03:14:52] id goes and then that goes id goes then that goes yeah you can hit it like six times seven  and then it'll jump up to seven that's create resource or create async sorry
[03:15:03] managing
[03:15:06] managing the race conditions. And again, this is not blocking and it's parallel.  This is what happens if you don't use transitions, right?
[03:15:13] Um,
[03:15:15] But...
[03:15:16] This is what tearing looks like.
[03:15:18] Listen, what's cool about this example is there's actually no suspense anywhere in this example.  I can show this off because of...
[03:15:24] Um,
[03:15:25] the way we do tearing, but
[03:15:27] what I'm
[03:15:29] what I'm getting at is
[03:15:31] This is fine behavior for some stuff.
[03:15:34] Um,
[03:15:35] But...
[03:15:36] And you can always go back to this, but transitions can give you that guarantee.
[03:15:42] And as I said, you need to add the affordance, which is why there's this optimistic update, because without the optimistic,
[03:15:51] it doesn't there's no there's no like i mean you can visibly see it i'll just cross out this effect  for a second
[03:15:59] I felt they're optimistic.
[03:16:00] you can there's no immediate feedback you can't tell
[03:16:05] you know, what's going on.
[03:16:08] Which is why...
[03:16:09] like transitions
[03:16:12] kind of need that which is why they you know start use transition kind of ships with you know a pending
[03:16:20] But I was talking to the
[03:16:22] to, um,
[03:16:24] Ricky and he said that the they literally like they just put the pending state that comes back from use transition is just one of these like exactly like this.
[03:16:34] with exactly this and that's how they basically model it
[03:16:38] Um,
[03:16:39] In terms of the code, if you guys are interested in how this kind of stuff works,
[03:16:47] Thank you.
[03:16:48] I can give a quick run through.
[03:16:51] The transition function
[03:16:53] It's fairly straightforward.  It creates a new transition, which is a kind of cue.
[03:16:57] uh,
[03:16:58] If you haven't seen most solid 2.0 stuff, you probably don't know too much about these cues, but
[03:17:03] It's basically a way of managing running when it flushes,
[03:17:08] In this case, it sets the active transition.  It runs the pure queue.
[03:17:13] And then,
[03:17:14] it checks if it's finishing and if it finishes it actually runs the uh the the more effectful queue but
[03:17:22] What's more interesting here is that the graph cloning.
[03:17:26] So,
[03:17:27] Thank you.
[03:17:28] This is how it merges.  It's actually fairly straightforward, funnily enough.
[03:17:33] you pass in a node that already is associated with a transition, and it doesn't equal the current transition.
[03:17:39] then go through the
[03:17:42] the sources for the current transition and merge them into that existing
[03:17:46] transition.
[03:17:48] Basically, like just literally just add them to all the sets, essentially.
[03:17:53] and arrays.
[03:17:55] And then...
[03:17:56] say that that transition is the transition.
[03:18:01] and then return
[03:18:03] the cloned version for that node.
[03:18:07] And then here, the cloning, I'm just cloning the computation node, removing the disposal,
[03:18:14] elements,
[03:18:15] and the children, essentially.
[03:18:19] And then,
[03:18:20] creating a backlink to the original node.
[03:18:24] and then adding it to our transition um and then going through its list of observers cloning
[03:18:32] cloning them, but also adding them to their observer list, which is important because sometimes
[03:18:42] the nodes...
[03:18:43] Thank you.
[03:18:44] don't exist in
[03:18:46] Both places.
[03:18:49] Yeah, you don't really need to know that. And I guess the other fun part is what happens when the transition ends. Basically, if it's done.
[03:18:58] or it's scheduled or there's promises or all these things you can't you can't finish the transition  you have to wait because it's fine it's scheduled it'll do some work and then it'll
[03:19:06] try finishing it. But then at the end, what we do is you go through all the sources,
[03:19:10] And if they're for this transition,
[03:19:13] not for this transition or the source equals a clone or whatever, then we can continue. Otherwise,  we remove the backlinks, those extra observers we have, we dispose of,
[03:19:25] the original, this is when you finally do the cleanup on the original nodes.  You assign all the new values into the source.
[03:19:31] remove the transition fields,
[03:19:34] And then once you've gone through all the sources,  you let the transition done, delete it  from the overall transition set.
[03:19:42] and then run the effects.
[03:19:43] and then reset all the optimistic
[03:19:46] updates.
[03:19:48] Thank you.
[03:19:49] And that's,
[03:19:50] That's basically it.  I mean, I still gotta do more work on it.  This is very, very basic.
[03:19:56] But it's basically what I described earlier in terms of that.  The trickiest part to the reactive system, I think, is...
[03:20:02] is that like in solid 1.0,
[03:20:05] These should get tree shaken out because you can only set the transition in the transition function, but...
[03:20:13] essentially, sorry,
[03:20:15] uh transition there's there's a lot of hooks in that like look for if active transition so this coach
[03:20:25] tree shake or like coats, like tree shake right out of the bundle if you don't use the transition  feature. But there's, there are a lot of places, not this one, this is the transition queue itself,  where in the core of it, let me see if I can get to it.
[03:20:38] We have to do stuff like,
[03:20:40] if there's an action transition and if this is a source in it, then get the source.  Otherwise, use the original source.
[03:20:46] If there's a like, this is when we are creating computation,  like a core like memo or something.  If there's a transition, set the transition, set the sources.  Like there's a bunch of these hooks.  Whenever we read a reactive value,  it has to check if it's there.  If there's a transition.
[03:21:01] Wait.  So this code does increase...
[03:21:06] over everything, but almost always it's
[03:21:09] controlled by an if active transition, which is cool, because if this can never be set to anything but false or null,
[03:21:15] this code will be just removed from your bundle.
[03:21:19] So,
[03:21:20] At least that's good, but it does make maintaining the code a little bit trickier because there is
[03:21:25] there's a lot of these in place things because I don't clone, even though I clone the sources, I keep the source side of the graph, the same nodes, as I mentioned, for the reasons earlier. So there's there's there's a lot of.
[03:21:37] touch points um unfortunately which until we get you know i i hit all of them properly  we might have some bugs but that's that's generally it it's it's doing
[03:21:50] what I want it to, which makes me pretty happy.
[03:21:58] Yeah, I
[03:22:01] I wonder what happens if
[03:22:03] If I change create,
[03:22:05] effect to create effect.
[03:22:09] So this is completely dye.
[03:22:13] Thank you.
[03:22:15] Thank you.
[03:22:17] Thank you.
[03:22:20] Thank you.
[03:22:22] Thank you.
[03:22:24] Transition already completed. Okay. Yeah, this might not be that hard to debug.
[03:22:31] Do you know what it is?
[03:22:36] It is delayed, though. Interesting.
[03:22:39] See.
[03:22:41] I think what's happening is,
[03:22:43] Yeah, that's interesting.
[03:22:46] Yeah.
[03:22:48] Basically these nodes shouldn't be getting added to the transition.
[03:22:52] But I wonder if the fetching still is.  So it's like in this weird state where it's like,
[03:22:57] the fetching finishes and then he goes like,
[03:23:00] Yeah, I bet you that that's what's happening.  What's happening is that...
[03:23:04] Create async.
[03:23:05] registers with the transition.
[03:23:07] So it's going to do its thing, but then it has no effects nodes.  So basically the transition completes.  It goes, okay, I'm done.  You never see go depending here, right?
[03:23:15] But then when the async data comes in and goes, OK, I'm going to continue this transition, it's like,
[03:23:20] it.
[03:23:21] Yeah, you know what?
[03:23:22] Can we fix this right now?
[03:23:25] Uh...
[03:23:28] Great.
[03:23:29] Create async.
[03:23:32] Do, do, do, do, do.
[03:23:36] And transition to.
[03:23:40] Yeah.
[03:23:41] Done.
[03:23:43] and not done.
[03:23:44] 'cause if it's done, you don't wanna do this.
[03:23:54] Yeah, okay, thanks for that.
[03:23:56] Thank you.
[03:23:58] It's funny though.
[03:24:02] Thank you.
[03:24:03] What's funny about-- oh, you know why this works like this?
[03:24:09] create effect doesn't tear.  Only create render effects tear.
[03:24:13] Create effect actually doesn't tear.
[03:24:15] which is why it's
[03:24:17] It's holding. See how...
[03:24:21] it's not counting. I just created Svelte.
[03:24:27] right? See it's holding it in the past including R39.
[03:24:32] So,
[03:24:33] Thank you.
[03:24:34] uh,
[03:24:36] Yeah.
[03:24:37] Yeah, you wouldn't use this to render.  This is logical.
[03:24:45] This is behavior like this is what happens if you block without transitions, right?
[03:24:52] Um,
[03:24:54] Thank you.
[03:24:56] But yeah, I mean, this this is a good showcase because if this wasn't rendering to the DOM, but doing some other side effectful thing like, you know,
[03:25:05] creating logs,
[03:25:07] This is what you'd want, right?
[03:25:09] CrateEffect is designed to be consistent, actually.
[03:25:13] and not use suspense. It's actually an isolated, consistent thing. This is what split effects give you. Split effects give you this great benefit of consistency.
[03:25:24] So these stay in sync with create effect. It's just that
[03:25:28] you know,
[03:25:29] You don't want to block things.  It's only within the scope just because these are doing DOM operations that it's doing that where.
[03:25:36] I think the more logical
[03:25:39] um
[03:25:40] behavior here for rendering, let's go back to rendering, would be,
[03:25:46] Thank you.
[03:25:49] Thank you.
[03:25:53] would like if you if you if you want to
[03:25:56] Yeah, if you're not using like using transitions,
[03:25:59] Good, and if you're not using transitions,
[03:26:02] Thank you.
[03:26:03] there but in no world
[03:26:06] should count ever stop counting.
[03:26:10] Right.
[03:26:13] Yeah.
[03:26:16] Thank you.
[03:26:18] As I said, there's a difference. My opinion, it could be wrong, but the thing that I've been working with Solid is I think.
[03:26:26] that rendering and the UI have slightly different expectations than, um,
[03:26:32] then like
[03:26:36] Then like
[03:26:38] just normal effects. I think the biggest difference here is that rendering the UI,
[03:26:43] Um,
[03:26:44] you need to show that consistency.
[03:26:46] or purposely opt into tearing like like or purposely tear like make a decision like you  have to make a decision on this.
[03:26:53] But the one thing that no one ever expects...
[03:26:56] is for stuff to just freeze up.
[03:27:00] on you.
[03:27:07] Okay, yeah.  Salt sales and mechanisms not to block unrelated updates.  From what I could see, I've seen it should keep  the count running as well.  Yeah, I believe so.
[03:27:16] I think...
[03:27:18] It depends on how you write it, though.  Like, I think you can entangle them if like it's like this where you put it inside like the same text node.
[03:27:26] I think in general, though, if these aren't in the same effect,
[03:27:30] they're not going to entangle.
[03:27:37] Thank you.
[03:27:38] Right.
[03:27:40] I did this on purpose to show it in the same effect.
[03:27:42] um,
[03:27:45] If these were not in the same effect,
[03:27:47] Um,
[03:27:49] then
[03:27:52] count wouldn't freeze up like that, right? We're still using the graph to make this determination. And I think,
[03:27:58] I think that's
[03:28:00] That's basically the gist, right?  I think quite often these aren't in the same effect.
[03:28:06] So like Svelte's approach gets by most of the time.
[03:28:14] And that's pretty good because when you have an...
[03:28:17] Like, yeah, I guess.
[03:28:23] I mean, this is fairly reasonable if we change this to create effect.
[03:28:29] Right.
[03:28:31] And then
[03:28:34] I'm trying to think of how to make this work.  I guess I can just make like a different...
[03:28:40] Bye.
[03:28:41] I'm trying to think of how not to put this in the same effect.
[03:28:47] I mean, it's not...
[03:28:49] Thank you.
[03:28:52] Thank you.
[03:28:53] Thank you.
[03:28:56] Thank you.
[03:29:00] Thank you.
[03:29:01] Thank you.
[03:29:03] Held.
[03:29:06] Thank you.
[03:29:09] Um...
[03:29:11] Hmm.
[03:29:12] Thank you.
[03:29:13] I have to make div two.
[03:29:16] Thank you.
[03:29:17] You go make a span.
[03:29:20] Thank you.
[03:29:23] Thank you.
[03:29:24] Thank you.
[03:29:27] Thank you.
[03:29:28] Thank you.
[03:29:30] Thank you.
[03:29:31] Thank you.
[03:29:34] Thank you.
[03:29:35] Thank you.
[03:29:38] Thank you.
[03:29:40] Thank you.
[03:29:41] Thank you.
[03:29:42] Thank you.
[03:29:44] Thank you.
[03:29:54] hmm
[03:29:56] Thank you.
[03:29:58] Thank you.
[03:30:09] Is it just called Cal?
[03:30:13] It's like, what am I doing wrong here?
[03:30:15] All right, I know what I'm doing.
[03:30:19] One fun part with split effects, eh?
[03:30:21] the--
[03:30:24] the second function being a function okay sweet and then when i do it
[03:30:29] Yeah, it no longer freezes.
[03:30:33] There we go.
[03:30:37] so i guess this is probably the more typical svelte behavior
[03:30:44] And
[03:30:44] So yeah, I mean, it's perfectly fine.  And then they have a way of injecting within the scope of the components.
[03:30:52] the pending state so like this holds up to
[03:30:56] the boundary as i said
[03:30:58] I think transitions...
[03:30:59] are global so that's kind of
[03:31:01] Odd, but...
[03:31:03] I get why this would be attractive from an API standpoint.
[03:31:07] Um,
[03:31:10] Thank you.
[03:31:12] Yeah.
[03:31:20] Yeah, that would be better.
[03:31:26] I thought Svelte's approach is to compile image CSS.  Yeah, for CSS, they do some stuff, but I'm--
[03:31:32] I am.
[03:31:32] This isn't really animation, this is state updates.  I'm talking about an async data flows.
[03:31:42] Yeah.
[03:31:44] I imagine they're smart enough to know the graph relation.  One of the biggest differences between the solid approach and the solid approach for the async stuff is that...
[03:31:54] We, our approach is completely runtime. We actually use the, the, basically the throwing of promises to figure this stuff out.
[03:32:03] And
[03:32:07] We,
[03:32:09] I realized, and again, it was actually thanks to Dominic  when he was working on Stout, he mentioned something.  I realized that
[03:32:15] I'd already come up with a helper to see that get the previous value latest that we could just make render effects wrap.
[03:32:20] latest around this and that would give us tearing back.
[03:32:24] Which meant that...
[03:32:27] But I mean,
[03:32:30] As you can see here,
[03:32:33] Um
[03:32:35] it's not hard with these things to model any of the different styles of behavior i just
[03:32:40] I,
[03:32:42] personally,
[03:32:44] don't think holding as a default is as good, but I mean, it's hard to say.
[03:32:56] OK, you made it for us, Dev.
[03:33:01] I got this go to...
[03:33:05] to my Twitch, which I haven't had opened all day, which is actually on me.  I usually have it open so I can interact with chat better.
[03:33:14] Um...
[03:33:17] My channel.
[03:33:22] Thank you.
[03:33:24] All right.
[03:33:26] There we go.
[03:33:29] Haha.
[03:33:32] Yeah.
[03:33:54] Yeah, I mean, so this is graph connected. Now we just need to add a counter to this.
[03:33:59] This is from their docs, right?  So then all we have to do is add a counter to this, to do this, which wouldn't be hard.  We should really go...
[03:34:07] let count equals state
[03:34:12] Thank you.
[03:34:13] - Zero.
[03:34:16] and then do something like set timeout.
[03:34:22] Thank you.
[03:34:23] I'm not going to clean up after myself.  Sorry.  Count.
[03:34:27] plus plus.
[03:34:29] Thank you.
[03:34:30] Thank you.
[03:34:31] Thank you.
[03:34:32] And then...
[03:34:34] Put count in here.
[03:34:41] Oh, it's not set timeout.  I want set interval.
[03:34:45] Thank you.
[03:34:46] Thank you.
[03:34:47] Their timeout is a small delay, so I'm actually going to have to go faster than that.
[03:34:54] Yeah.
[03:34:56] Thank you.
[03:34:57] Yeah, see, they know that it's independent.
[03:35:05] Thank you.
[03:35:07] Thank you.
[03:35:08] Thank you.
[03:35:10] There you go. Yeah. So that proves that
[03:35:16] And it's interesting because actually I want to see what the JS output is.
[03:35:27] Thank you.
[03:35:31] Thank you.
[03:35:37] Interesting. See, I was expecting count to get subdivided off.
[03:35:42] But it is actually...
[03:35:46] It does appear to
[03:35:48] be in here
[03:35:53] *sniff*
[03:35:55] Which means they must be using some form of runtime in addition to the compile time stuff.
[03:36:00] to determine the connectivity.  Yeah, no, this is reasonable because basically they ensure that
[03:36:15] I wonder if it's just simply because this update,
[03:36:22] just runs the effect and it grabs the latest yeah so the
[03:36:27] Yeah, I think I understand their solution.
[03:36:36] It's like halfway between a transition and not this.  So this isn't quite a solution, what we created here.
[03:36:43] Like technically it works the same way,
[03:36:45] as like the output is the same.
[03:36:48] But the difference for the Svelte solution is they actually do fork the values in the signals so that when the effect runs here,
[03:36:58] essentially like when this effect keeps on running over and over again to do this counter up.
[03:37:01] it just reads the latest values even when it's in flight.
[03:37:07] So in that way, it's similar.
[03:37:09] to the solids approach of using latest.
[03:37:13] the
[03:37:14] like our...
[03:37:22] Their version of latest
[03:37:26] includes
[03:37:28] the things that trigger the async.
[03:37:32] So it's like a mini transition in a sense.
[03:37:38] Yes, because the difference with the solid version is it doesn't include the state change.
[03:37:44] And the way they're able to do that,
[03:37:47] is--
[03:37:49] My guess is that that's where the compiler part comes in.  Let's take a look here.
[03:38:02] Like how do they know,
[03:38:07] Thank you.
[03:38:10] Thank you.
[03:38:15] I mean, it could be done runtime as well, to be fair.
[03:38:19] Anyways, not to get too much of the minutiae here on the specifics here, but I...
[03:38:26] I understand the gist of it, right? The idea here is that they hold
[03:38:33] They do almost something transition-like
[03:38:37] in holding the values of the
[03:38:42] of the
[03:38:45] of the set, but they do so in such a way that
[03:38:48] I guess it's-- yeah, there has to be some element of it,  because they don't wrap the set.  Like, where does the set happen?
[03:38:58] It's right here, this add.
[03:39:12] Yeah.
[03:39:14] Given that this is already in await, I think this might, or an async function,  this might actually simplify things a little bit.  I'm curious to see what it would look like in a case where it's like a,
[03:39:23] state set leading to a fetch, like a memo that's awaited,  like a way to drive value and then see how they determine that.  But yeah, they have to be using the graph shape
[03:39:33] to basically determine-- because the reason you wrap in a transition API,
[03:39:38] is because when you call a set, you don't know...
[03:39:43] until you actually go to set it, like you actually call it. You go, "Okay, what are my dependencies?" Like, at that point you can go, "Okay, I know this is going to trigger async." But
[03:39:51] You don't know that beforehand.
[03:39:53] And you don't want to change it so that every time anyone
[03:39:55] triggers a signal that you basically transition probably like because if every time you did it  that would be expensive right so that's why my guess this is why we're spell ends up using  the compiler a little bit because
[03:40:07] Thank you.
[03:40:08] If they can determine that ahead of time, then they don't need to use the wrapper.  So that piece of the solution is actually
[03:40:14] Um,
[03:40:16] Pretty clever.
[03:40:23] Thank you.
[03:40:26] Yeah, yeah, the two way binding.
[03:40:29] Oh, yeah, yeah, yeah, yeah. You're right, you're right, you're right, right.
[03:40:35] Thank you.
[03:40:40] I'm trying to scroll sideways.
[03:40:43] Thank you.
[03:40:48] I was trying to see if there's any indicator hint that they would be dealing with something  async here, but I actually don't see it in the compiled code, which is kind of,
[03:40:55] cool.
[03:40:56] I was kind of like expecting...
[03:41:00] Thank you.
[03:41:01] expecting something here to that effect.
[03:41:04] Thank you.
[03:41:04] Thank you.
[03:41:06] Anyway, um...
[03:41:11] Yeah, I mean, I think this gets the result that...
[03:41:15] that they're going for. I think
[03:41:18] that
[03:41:19] the holding when you can ensure this isolation,
[03:41:23] Um,
[03:41:25] is fairly reasonable.  The tricky part, obviously, is like,
[03:41:33] Thank you.
[03:41:33] The same problem you have with transitions. I say it's hard to make transitions to default API because
[03:41:39] people are like, where's my affordances?  In Svelte, you can inject this back in, I believe,  by using a boundary.
[03:41:45] But
[03:41:47] People are like,
[03:41:50] you know,
[03:41:51] Thank you.
[03:41:54] To be fair, though,
[03:41:58] They don't have a localized reload. Can I get it here?
[03:42:03] No.
[03:42:04] like trying to
[03:42:06] I can trigger it by changing the code,  but I don't want to do that.
[03:42:12] Okay.
[03:42:14] Yeah, see, it would take a long time to show up.  So theoretically, you'd have a boundary here already because you would literally be
[03:42:21] loading the code.
[03:42:23] Um...
[03:42:24] Right. Like, so...
[03:42:26] it wouldn't be too hard to
[03:42:27] position in your stale state through.
[03:42:31] Yeah, this does remind me of a lot of what
[03:42:35] they wanted to do with Marco. It will be interesting to see
[03:42:38] What they did choose to go with Marco when Dylan...
[03:42:42] Piercy joins me on my next stream on September 5th, and we talk about Marco 6.
[03:42:48] Thank you.
[03:42:51] OK, yeah.
[03:42:54] hmm
[03:42:56] Anyways.
[03:42:58] Enough of this for now.
[03:43:01] Um...
[03:43:07] I don't think there's actually much
[03:43:09] Did I publish this one?
[03:43:16] All right.
[03:43:17] I think this one, I actually covered everything already  in the course of the stream.
[03:43:26] Talking about what single future means.
[03:43:32] Yeah.
[03:43:34] The trickiest part, obviously,
[03:43:39] I don't know.
[03:43:40] with these pieces
[03:43:44] And one thing that's very elegant about the React solution is the way that they've included, basically incorporate optimistic updates.
[03:43:51] into the same model with the transitions, which is, as I said, valuable.
[03:43:55] because
[03:43:56] then you can solve this issue as well.
[03:43:59] Um,
[03:44:01] Okay.
[03:44:05] I think...
[03:44:08] Thank you.
[03:44:09] I think the runtime approach with the latest splitting is-- I'm still pretty big on that approach.
[03:44:22] But yeah, it is interesting to see different models at play.
[03:44:28] Where did I want to go next? Sorry.
[03:44:33] Talked about this, talked about this.
[03:44:39] You know what, I mean, that's pretty much--
[03:44:41] the transition topic.
[03:44:43] I might as well do a bit of this week in JavaScript because I
[03:44:46] We haven't done this in a while, but give me two seconds while I sort that out.
[03:44:55] Thank you.
[03:44:56] OK.
[03:45:01] I just saw a comment, use RxJS to handle concurrency.
[03:45:06] Um...
[03:45:09] I think you can. I've been getting a lot of Rx comments like on my signal streams. The challenges, I mean, yeah, use events because they are streamlined. The problem is about these async models. It's never the actual managing of the async. It's getting the async back into a synchronous system.
[03:45:28] one where there's guarantees in terms of what you show up.
[03:45:30] and show up in terms of UI.
[03:45:36] Yeah, let me see.  When was my last stream?
[03:45:51] It's funny, there's actually a
[03:45:54] There's actually...
[03:45:59] *pulls*
[03:46:02] Okay, yeah, I covered the Rich Harris thing.  My last stream would have been on...
[03:46:08] July 25th. Okay, cool.
[03:46:10] Thank you.
[03:46:12] Okay.
[03:46:14] And
[03:46:25] Okay, give me two seconds.
[03:46:30] -
[03:46:32] How's chat doing? You guys alive?
[03:46:40] Thank you.
[03:46:41] Quantum programming.  Yeah.
[03:46:46] Yeah, has React--
[03:46:49] push their complexity on everyone else.  I think about this stuff all the time too,  because it's like, is there simpler models?  But it's like,
[03:46:56] not if you define the baseline
[03:46:59] you know, to be
[03:47:02] what it's
[03:47:05] Thank you.
[03:47:10] Thank you.
[03:47:12] Thank you.
[03:47:14] God, there's so much stuff.
[03:47:16] Thank you.
[03:47:16] by so much stuff, so many interesting Brian Florence  and Michael Jackson tweets to talk about.
[03:47:23] All right, one, two, three.  I'm good to go.  Let's switch modes to this week in JavaScripts.
[03:47:29] That way I can get back to programming.
[03:47:32] Yeah.
[03:47:34] Let's get going on this.
[03:47:37] Um,
[03:47:39] I'm going to start with solid stuff.
[03:47:44] Yeah, probably because it's just completely off the...
[03:47:47] off the side of things.
[03:47:51] I've been loving the TanStack stuff.  Me and Tanner did a stream recently where we  talked about some solid and TanStack stuff  and RPCs and server functions.  But like,
[03:48:00] It's so cool.
[03:48:02] to have a framework ecosystem and one of the largest ones in React
[03:48:07] to have solid as a second citizen right a lot of times a lot of react frameworks don't
[03:48:13] don't cater to other frameworks.  Like when they release something,  they don't immediately release it for another framework.
[03:48:18] And,
[03:48:19] If there were ones that were fairly fast at it, usually Angular and Vue get the next nod and then occasionally Svelte.
[03:48:27] But with Tanstack, Solid's number two.
[03:48:30] which means that like,
[03:48:32] for once like all the new cool stuff comes directly to us so it's like
[03:48:37] Thank you.
[03:48:37] TensTackDB comes out for React.  A week later, it's out for Solid,  which is just...
[03:48:43] Awesome.
[03:48:46] So,
[03:48:48] Like,
[03:48:49] this is this has been good you know obviously
[03:48:51] uh tan stack dev tools and stuff have been written in solid like very close to the team
[03:48:56] Kenner is amazing.
[03:48:58] you know, I love the work he's doing. He does this, he does the stuff that I don't care to do. I focus  so much on these like really low level print of someone has to make the developer experience
[03:49:08] pleasurable and hopefully I'm building the right stuff for him and but yeah
[03:49:15] - Yeah, they should, because the stuff we've been working on,
[03:49:23] I think makes it actually a better solution than React.
[03:49:27] We're not React, so you have to support React first.  But it's kind of like this.  I remember when Jamie from Convex first saw Solid,  and he went off on a tangent and made a YouTube video  and made a Convex integration and did this all in Stu.  And his team had to pull him back and be like,  look, we got to focus on React right now  because we're trying to...
[03:49:46] raise and go to our next stage or whatever it was like it was like two two three years ago i feel  like and but like anyone who's working on a sync engine they see solid and they're just like oh
[03:49:56] They're like, this is the UI framework that makes sense for us.
[03:50:04] Thank you.
[03:50:05] So yeah, I mean,
[03:50:08] yeah it's exciting to see this kind of progress right and it's been part of this like
[03:50:17] Yeah, solid in a terminal with HMR.  People are just starting to understand.  The things that React has been having a hold on the ecosystem was,  was like everyone's like, oh, with a virtual DOM, you can do things that aren't,
[03:50:30] the DOM or you can go into these different kind of scenarios.  And it's like, you know what?
[03:50:35] You don't need a virtual GoF.
[03:50:37] Getting over that hump has taken like a decade for people to recognize it, but
[03:50:42] It's starting.
[03:50:43] Yeah.
[03:50:44] But yeah, this is what...
[03:50:47] I mean, this growth has to be thanks to Tanstack.
[03:50:50] And, um, and, uh,
[03:50:54] and the Sync Engine peoples because like,
[03:50:58] This doesn't look very impressive.  You're like, oh, this is a fairly flat line.  It's six months.  It's because I've stretched it.
[03:51:05] 300,000
[03:51:07] 710,000 or something.  We've over doubled the amount of downloads in the next last six months,  which I said going up,
[03:51:16] 300 and some odd thousand isn't a big deal when you consider like
[03:51:19] you know most frameworks get millions of downloads a week but doubling in that short period of time when we have not
[03:51:27] got a major release, no new features, no, like literally nothing to merit. This kind of growth  is incredible. It means that people are starting to catch on.
[03:51:40] Right?
[03:51:42] This is not because you just dropped...
[03:51:45] the solid 2.0 release or whatever. This is just people picking up solid and going,
[03:51:50] Yeah, this makes a lot of sense.
[03:51:52] Um,
[03:51:54] you know,
[03:51:55] Like,
[03:51:56] and
[03:51:57] It's funny because when you do NPM trends,
[03:52:01] You can see it a little better than my graph.
[03:52:04] I just didn't want to show the history because we flatlined a little bit, but
[03:52:07] You go here.
[03:52:12] uh because like the last year doesn't look too impressive either you're like okay because it's  stupid spike that's why i didn't want to show the trend see every framework has these stupid spikes  that happened and you're like how the hell happened but let's let's look at the five years
[03:52:25] To give you a better idea, yeah, here we go.
[03:52:27] Or all time, yeah.
[03:52:29] This is more indicative of the growth of the last six months.
[03:52:33] This.
[03:52:35] You know what I mean?
[03:52:37] 2024 was tricky.  It looks like we had a solid start.
[03:52:42] came out around here, so we had a swell.
[03:52:45] But then it almost returned.  Basically, SolidStart did not perform as well as I might have imagined it would.  Even though it humped up and looked down,  for the most part, we just kept the same trajectory when you averaged it out.  The growth was constant.  SolidStart didn't end up.
[03:53:04] adding much to our user base initially it just kind of kept the same trend line that we've been on  since about 2023 which is you know
[03:53:12] a decent growth pattern.  But then the last six months,  like,  ooh,  you know,
[03:53:18] that makes that trend line look like exponential instead of flat, which is good.
[03:53:24] The stupid spike in the middle ruins everything, but...
[03:53:27] Um,
[03:53:31] To be fair,
[03:53:33] If I put Astro during the same time period, they probably pulled away from us.
[03:53:39] Oh no.
[03:53:40] I guess we caught back up on the Astro...
[03:53:44] The Astro thing. See, traditionally, us and Astro have been very close.
[03:53:48] Probably a lot of the same users.
[03:53:51] um and then salt start jumped it a bit and then we kind of went down a bit and then astro was  the thing but then we're back to basically neck and neck with astro which again isn't a competitive  thing because us and astro do different things and do the same things are very complementary but
[03:54:07] Thank you.
[03:54:08] Yeah, I mean,
[03:54:09] So definitely Tanstack using us and fixing it so it actually showed is actually good.
[03:54:16] um
[03:54:18] Probably a good good sign.
[03:54:23] It's supposed to be a starter.  I'm trying to, my plan for it was it to basically be our version of Create React app.
[03:54:32] but modernized using beat and using like SSR.
[03:54:40] So, yeah, I mean...
[03:54:45] Yeah, I just...
[03:54:47] It's been good.
[03:54:52] Dax, this is your comment about that whole scene.
[03:54:59] 10 stack. I mean, that's all the news. More DAC stuff.
[03:55:02] 10 stack.
[03:55:04] Um,
[03:55:10] Yeah, I don't know that that that's all the solid news that we've announced, but I actually do have some solid news that I want to talk about a bit. We, we've got some and it'll come out this week, so I'm kind of ruining it a little bit, but we've got some new fellowships coming in. And most importantly, we have a newest member added to the solid core team.
[03:55:29] Achilla Fasina, you've seen him on the stream before,  doing the Tori stream with us.
[03:55:35] Great public speakers, done tons of solid JS talks, head of our DX team.
[03:55:42] you know, he's
[03:55:43] he's actually stepped up to kind of lead the efforts on Solid Start.
[03:55:49] Um,
[03:55:51] which is great because I have not been focusing in on it all.
[03:55:54] and with the we've actually got a pretty solid team now uh
[03:55:59] uh,
[03:56:00] I know everyone by their username like Brennels and Brendonovic or whatever.
[03:56:06] But Katya is on it, too.  Like, there's a group of them that have been doing a lot of...
[03:56:16] work um on solid start uh more specifically when i have not been able to focus on it and they've  been doing heading up like the da vinci uh like removing vinci effort and modernization getting  on the same uh bones now as uh tan stack start um they've been obviously working a lot with the 10  stack people anyways help like
[03:56:37] getting a solid integration of tan stack as well so it but it's it's really awesome to see uh
[03:56:45] you know, these, uh,
[03:56:48] this kind of coming together in an official way. And Jilla has just done amazing work for us over  the time and it was long overdue for that. So the announcement should be coming out soon.  He'll be, I believe he's going to be coming up speaking at ViteConf coming up, I believe. I  haven't heard too much about that. I haven't actually looked at the site recently.  So yeah, very, very excited about this.
[03:57:14] Thank you.
[03:57:15] Thank you.
[03:57:16] So, I'm sorry, they're taking this long to take off. Years of head-bearing into React.
[03:57:23] Yeah, I mean, it's just one of these things.  I mean, don't get me wrong.  It's not even taking off.  It's just...
[03:57:31] steady growth it's really hard when the stuff is so um
[03:57:38] um, green.
[03:57:40] How is a solid full-scale enterprise web app?
[03:57:45] the client side part of the solution like not the solid start side of the solution has always has  been pretty stable for quite a long time and pretty solid um obviously 2.0 is coming out which is probably the first
[03:57:57] just considerable change in seven or eight years actually not there's a tweet here that actually  that i skipped over that i think
[03:58:05] we should talk about in regards to this thing and you decide you know
[03:58:11] For a framework known for its innovation, it is funny how little solid has changed in the last seven years. Yeah, we've innovated on features, fine-grained concurrency, hydration, streaming, server function, single-flight mutations, but the core tech instructor untouched.
[03:58:23] And it's true.  I forget.  I was doing a podcast or something and I was like,
[03:58:27] I sometimes forget because we're always, you know, talk about signals, but  we've actually been at the forefront of a lot of
[03:58:34] stuff like uh like we were the first one to do like transitions with the signals or like this kind of  these kind of async models right uh fine-grained hydration did not exist before solid right like  people didn't coarse-grained hydration
[03:58:46] Obviously there's better versions of that arguably today with Zoom really quick, but you know, streaming Marco was first technically.
[03:58:55] So, you know, there's that. But, you know, other than that, Solid pushed forward and was one of the first frames to do streaming other than Marco. Server functions, that was something that we worked on during Solid Start. We did.
[03:59:12] Blitz technically...
[03:59:14] had some kind of
[03:59:16] proxy, I believe based or like they had an approach to doing RPCs, but like the modern  server functions started in solid start single flight mutations was solid start.
[03:59:25] But through all of this, we actually haven't
[03:59:27] like solid hasn't changed pretty much at all. Um,
[03:59:32] We haven't changed our templating language.  We haven't changed our reactivity model.
[03:59:38] Like.
[03:59:39] Like what I say, when I look at reactive Angular view or solve the same campus, even when backwards compatible, they change their structure underlying text significantly at least two times each.
[03:59:48] It's a hindsight observation, but one we could bank on ahead of time.  Like I knew. And what I mean by that is like,
[03:59:52] I knew what I liked with Knockout, so I just went in with that kind of mentality.  Ironically, split effects are probably going to
[04:00:00] to the,
[04:00:00] biggest like conceptual breaking change for solid 2.0 but
[04:00:04] My original knockout wrapper that I had at my company had split effects back in 2013.  Like it's just one of those things where
[04:00:12] Like,
[04:00:13] Anyway.
[04:00:14] Um,
[04:00:15] Part of this is we bet on old tech.  We didn't try to use classes before they existed.  Yeah, so switch to switch...
[04:00:22] Um,
[04:00:24] switch to real classes, decide functions are better than add a compiler to fix. Okay,  I'm clearly talking about react here. But like, because people talk about react, you know,
[04:00:33] and, you know, not changing and stuff. But
[04:00:36] While it's been backwards compatible in a very impressive way, considering how big the scale is,
[04:00:40] if you like, yes, React hasn't changed much in the last few years. You can say RCs, but RCs don't actually change React. They're like an additive feature, perhaps. I mean, the async features, I could argue, changed in the, it's significant, but
[04:00:52] for the most part, I could see an argument to say that React hasn't changed much recently. But
[04:00:57] Let's look at the first five years even.  Or most frameworks, when they're trying to find their footing,
[04:01:05] have actually changed as they figured these things out right create class or react you know create  um create component or create classic remember basically they had one class and they had actual  classic sense component which wasn't a huge change but then but they had the remove mixins right um
[04:01:22] when they made that change then they switched the functions with hooks which again was another
[04:01:27] API change.
[04:01:28] And then the compiler, to be fair, isn't
[04:01:31] actually as big of a change i could argue that that's still this hooks continued but
[04:01:36] It is enough that it
[04:01:37] like
[04:01:38] of a kind of a API surface all change, right?  And part of this is because they tried to use classes  before classes were primetime.  So I get why, but that is one of the challenges  when you're coming out with something new  and you can start new, you don't wanna start in the past.  You don't wanna like assume, like take this clunkiness.  You wanna jump ahead, right?  You know, reactions a few times over years,  like force async local storage  when it doesn't exist on the platforms,  you know, stuff like this.  But sometimes that leads to,
[04:02:08] you know,
[04:02:09] API changes when you realize stuff other stuff ends up working better anyway.
[04:02:13] OK, nor did it start with no VDOM and switch to it and then switch back again.  I'm talking about view.
[04:02:21] Right? Like,
[04:02:23] And Vue also went from option API to composition API, right?  They actually, you know, Vue 2 to Vue 3 was a fairly big change on an API standpoint.
[04:02:33] They basically changed the whole way their rendering worked a couple of times out of the hood.  So architecturally, it was a different framework.
[04:02:40] um
[04:02:42] Right. And then, I mean, Svelte's had Svelte 1 and 2, Svelte 3 and 4, and then Svelte 5. So they've had
[04:02:49] basically three versions of Svelte over their first seven years.
[04:02:54] um which is good because like in a sense when you change and you increment  um you learn stuff and you move on in a sense
[04:03:00] Solid hasn't changed since 2000.
[04:03:04] 18-ish. I mean 2019 I guess when I switched to the tuple thing. But even if you forget the,  if you replace the array destructuring with
[04:03:12] um,
[04:03:14] Um,
[04:03:16] Um,
[04:03:17] like get.getter, how did I used to do it?  Yeah, it was like,
[04:03:22] I think it was .getting.set or something like that.
[04:03:27] essentially solid it.
[04:03:30] the same structure of app and the same technology approach since before I even released it on the  server like going back to I guess the biggest change is when I changed to JSX so
[04:03:41] 2000 end of 2017 solid hasn't really changed
[04:03:45] in a fundamental way in about eight years. Um,
[04:03:48] So like,
[04:03:50] I don't know. It's interesting to me because we've been working at this thing and everyone wants stability.  Everyone's like, oh, blah, blah, blah. And ecosystem and all this stuff. I mean,
[04:04:01] It's I'm also saying this knowing that there will be a couple of breaking changes coming in 2.0, you know,
[04:04:07] But,
[04:04:08] Like,
[04:04:12] From that perspective, while continuing to push the boundaries, we've done all the right things in terms of being stable for our users.
[04:04:19] Um,
[04:04:22] like to a point that there should be no expectation for us to be even
[04:04:27] stable even longer necessarily because in the same period of time,  every other the framework has switched what they've done like three times.
[04:04:37] And I was trying to think why this happened, right?
[04:04:40] Instead, Ricky was like, do you think it was prior art?  Do you think when you looked at other solutions, it helped you avoid stuff?  And yes, I spent a lot of time looking at other solutions, but it's not even the solutions that they created.  It's the solutions that they could create.
[04:04:56] And I feel like it's because, you know,
[04:04:59] focused early on mechanics, looked at the best way to solve a problem and then interpolated back.
[04:05:05] Sure, it isn't an approach without false, you know, made plenty of mistakes and there's a lot of things about 1.0 I don't like. We just avoided some fundamental ones by curbing ambition and focusing on engineering less on the developer.
[04:05:15] It wasn't like just chasing like, oh, what's the least number of characters you can type here?  It was like, what's the best way to do this?  And then let's figure that out. Right.  Because if you start from a place of performance first, you can usually find a way back to something acceptable, hopefully.  But if you start from a place of like what you would like to write first and then kind of get there, you know,
[04:05:37] You can't always make the performance.  The shape of the API can actually limit what you can do.
[04:05:44] Thank you.
[04:05:45] Hey, Shai, it's been a long time.
[04:05:50] Although it does require some amount of success to recognize it's impacting your mistakes, so we might be seeing benefits from lower adoption.
[04:05:57] But yeah, it was just something interesting.  I wonder if something about solid is...
[04:06:03] innately
[04:06:05] characterized by these characteristics.  And that's something that we can actually codify  into our values to make solid the type of framework it is.  Sorry, I didn't even talk about Angular here  in terms of change, right?  Angular 1 to Angular 2.
[04:06:20] The switch to Ivy, which is a completely engine change overhaul.  I mean, these things happen over time, not...
[04:06:26] you know, Sol being later to the game  does have a bit of benefit, but
[04:06:30] when it's,
[04:06:31] It's been...
[04:06:33] longer now since Solid was introduced,
[04:06:37] than like,
[04:06:39] the time period of all the churn of the frameworks that, you know, people talk about. So this whole, like,
[04:06:46] you know,
[04:06:49] Yeah, it's very difficult to, you know,
[04:06:55] look at the argument against stability and like it becomes increasingly difficult to make the type  of arguments people have been making against us as time goes on. It's just it's just it's just
[04:07:08] they look very out of place which is why maybe that's why the growth with no releases the growth  has been you know doing so well it's just like maybe eventually you get like hit over the head  with a sledgehammer enough times you kind of go okay fine i'll i'll wake up i'll take a look
[04:07:25] Oh, you're right, I did.  When did I remove my screen?
[04:07:32] That's funny.
[04:07:36] Thank you.
[04:07:38] 10 minutes ago.
[04:07:40] Thank you.
[04:07:41] Thank you.
[04:07:46] - Did I not have it like the whole this week in JavaScript?
[04:07:55] OK, just before I start reading this thread, OK.
[04:07:58] Thank you.
[04:08:02] Yeah.
[04:08:04] The truth of the matter is things do have to change.  I'm like the first person to...
[04:08:08] Say like if things you find a better way to do things,
[04:08:12] change like this is the most ironic thing about this i am not adverse to change i when react  pushes these boundaries changing things i respect them incredibly for finding ways to do that
[04:08:23] when they're the incumbent.
[04:08:25] the
[04:08:26] I'm the first person to push for change and yet somehow
[04:08:32] Mm.
[04:08:33] We've just managed to be in the right spot.  I don't think we'll forever be in the right spot.  I think things do change.  I just...  We somehow...
[04:08:40] managed to find
[04:08:42] like,
[04:08:43] i don't know is that what people call it when you're like five or seven years ahead of your time  like we just
[04:08:50] found the pocket and now things are finally catching up to where we were seven years ago.
[04:08:57] So it's like,
[04:08:59] It's like,
[04:09:00] It's easy for me.  This is probably one of the last times I get to make this kind of statement.  Do you know what I mean?  Because stuff will continue to grow.  We just happen to be...
[04:09:07] you know,
[04:09:08] ahead of the curve in such a significant way but like also not
[04:09:15] like appreciated or noticed for it so like because we didn't have the adoption it like  perception that's i said how much of this i'm talking about is just perception right um
[04:09:24] And luck, because like,
[04:09:26] How likely are you to come up with a solution that everyone else ends up doing?  I don't know.
[04:09:34] like,
[04:09:36] and then at the same time don't get adopted on your own merit yourself as much like
[04:09:40] we now have much more popular solutions taking the approach that we were doing seven years ago.
[04:09:45] You know what I mean? Like...
[04:09:48] Or eight years ago.  So it's like.
[04:09:51] It's kind of funny.
[04:10:01] Okay.
[04:10:02] Break the API, you break the existing app product, you never break user space, do anything else you have to announce here.  So, yeah, this is the thing is like,
[04:10:11] There's a difference between, say, breaking changes and like,
[04:10:15] Like React has done, for example, a very good job of not breaking.  But to be fair, I guess...
[04:10:21] I don't know how Vue and Svelte have done.  I guess Svelte-- you can still use Svelte for components.  But when they moved to Svelte 3 from 1 or 2, I don't know.
[04:10:29] You can be non-breaking, but still change everything, which effectively has been breaking.  I think this is one of the challenges with the UI frameworks.  If you so drastically change the way you actually use them, you can be non-breaking, but yet at the same time completely...
[04:10:43] Um,
[04:10:44] changed like
[04:10:46] Thank you.
[04:10:47] like,
[04:10:48] how anyone would write it to the point that the old code is basically not maintainable  anymore because no one even knows how it works.
[04:10:56] So it's Python. I mean, sometimes those changes are necessary, right?
[04:11:00] Thank you.
[04:11:00] Um,
[04:11:02] And as frameworks and tools mature, they should be changing less.  I mean, truth of the matter is Solid hasn't done 2.0.  Like we have like you had two to three, Svelte had two to three.
[04:11:13] And again, maybe
[04:11:15] four to five.
[04:11:18] We haven't had 2.0, so I recognize that.
[04:11:22] It's just...
[04:11:25] If you look at something for seven years and go, yeah, actually 95% of it was actually the right call.
[04:11:32] I mean, that's a pretty decent place to be in.
[04:11:35] like over a seven year period.
[04:11:38] Thank you.
[04:11:40] But yeah, it's just funny because like you'd hope something like this, you know, I'm not saying this, I agree completely, but you'd hope something like this.
[04:11:51] would help
[04:11:54] you know,
[04:11:55] encourage people to you know do something and it's like
[04:11:58] Over the exact same time period,
[04:12:01] you know,
[04:12:04] Yeah.
[04:12:06] People have switched with their favorite tool like three different times, you know, how they write stuff to now the point that they're basically writing the same way they'd write in solid.  But they they wouldn't just have changed us all in the first place like five years earlier.  It's it's it there's there's a bit of irony in it, but it is what it is.
[04:12:31] Yeah, I mean, most frameworks have been good on a migration path.  I'm just saying like conceptually, it's still churn if you effectively end up having to rewrite all your components.
[04:12:44] Like, I don't...
[04:12:45] like,
[04:12:47] you
[04:12:49] Thank you.
[04:12:53] Yeah.
[04:12:55] Thank you.
[04:12:56] It was just something I noticed. I mean, this is just like one of those hindsight things because like,
[04:13:00] you watch where you sit there like i can still remember sitting back to where i was when i was  first like doing solid by myself like 2016 15 16 period playing with stuff and
[04:13:12] how I looked at the ecosystem and then how I built the thing.
[04:13:16] And then compare it to now, as I said, almost 10 years later,
[04:13:20] And,
[04:13:21] And just like,
[04:13:23] It's kind of unreal.
[04:13:26] to see this kind of change or switch over and you're just like,
[04:13:30] Huh.
[04:13:32] Thank you.
[04:13:32] Thank you.
[04:13:33] Thank you.
[04:13:34] Thank you.
[04:13:36] Makes you wonder how things could have been different. I don't know.
[04:13:40] Thank you.
[04:13:41] Thank you.
[04:13:42] Anyway.
[04:13:43] that's enough solid stuff today um what else do we got here
[04:13:55] Okay, yeah, yeah, this is good.
[04:13:58] Thank you.
[04:13:59] I forget why I wanted to do this. This is probably subtweeting.
[04:14:04] Something...
[04:14:05] um that ryan florence said but i probably don't have it anywhere
[04:14:11] Thank you.
[04:14:11] Maybe someone else's. Okay.
[04:14:14] Suspense activity and other boundaries are fundamentally different than concurrent transitions. Boundaries are read centric and local. They care if and when something can be rendered. Transitions are right centric and global. They enable transactional state updates. I'm kind of stepping back from the whole transactional thing, but
[04:14:29] It makes it easy for people to understand.  The reason the lines blur is that while transitions wrap  from the right, that indicator completion is still based  on read.  So the state of boundaries can impact their completion.  However, they aren't interchangeable.  It cannot be completely replaced by each other.  Yeah, this is still talking about people trying  to remove transitions.  I think our whole stream today basically.
[04:14:48] covered why this is the case.
[04:14:50] I'm not worried too much about this.
[04:14:53] Thank you.
[04:14:54] Thank you.
[04:14:56] Thank you.
[04:14:58] Thank you.
[04:14:59] All right, this Ryan Florence tweet. "Seems like if we went all in on Canvas, the web would be so much better. It's a clean start with the HTML DOM requiring a whole new platform. It's not fundamentally impossible to make Canvas successful if everyone is on board with it."
[04:15:16] And I think people misunderstood my quote tweet here.
[04:15:24] This kind of thinking I can respect. I can't comment on buyability, but which I want to stress. I can't comment on buyability. I'm not saying that this is a good idea.
[04:15:33] I'm saying you have to challenge the assumption if you want to enact real change.  We tend to not get to significant places by incrementing alone.  You have to throw something out, move a step backwards and move forward.  And I actually think that the Remix guys...
[04:15:46] are one of the best
[04:15:48] teams or groups of people
[04:15:50] at doing this.
[04:15:52] I've been critical of them times saying that they move two steps backwards one step forward not one step backwards two steps forward.
[04:15:58] But,
[04:15:59] To be able to move two steps backwards still requires an understanding of a pivot like that.
[04:16:05] to be able to move forward again.
[04:16:07] is a skill in
[04:16:09] in terms of itself.
[04:16:13] This is a legit argument.  And I was actually kind of laughing about it  because this was actually my reply to...
[04:16:20] This takes not being afraid of where the train thought leads you.  Come up with an outrageous position and then try to take it to the extent.  That's why we have the VDOM today.  Not all ideas at work are worth it, but I'm glad to see the thing can get here.  And what I mean by that is if...
[04:16:32] Jordan Walk hadn't come up with an idea that conceptually,
[04:16:36] was kind of crazy.  Basically, the virtual DOM, if you think about it, is a terrible idea.
[04:16:41] Like you're just like, why would you just do something worse?
[04:16:44] Right. And yet it's worked so well for people over the years.  It wouldn't happen if people weren't willing to challenge and go,  I wonder if this is good enough or this will work.  And it was funny because Ryan Florence did the same components are awesome,  but not enough. Hooks or compels are awkward. Signals are this, this,  this tweet I read and I was just like,
[04:17:00] This is kind of crazy, right?
[04:17:03] What if we didn't track them?
[04:17:05] I don't I don't think I mean, he asked some good questions, but I don't think there's actually an answer for this that's reasonable.
[04:17:12] But I'm like, okay, let's think through this.  And by the end, I was like...
[04:17:18] basic dominance execution context unless you talk about rendering to canvas that's pretty interesting  basically if you follow the logic
[04:17:25] you might get to a place that you don't,
[04:17:27] you don't expect to basically to solve these. The reason we have these problems is because of the shape of the DOM.
[04:17:34] Otherwise, you can probably come up with a solution that will make some other trade-off, maybe in performance or something, and be happy without these.  But you're not going to have one as good.
[04:17:43] Right.
[04:17:44] and it makes it interesting right because like every framework or tool has its own kind of angle  and in the case of solace gives no
[04:17:51] I've,
[04:17:52] initially and continue with the team focused on
[04:17:55] mechanics on performance on like architectural considerations. So when I see these lists and I'm
[04:18:05] To be able to kind of because of the performance stuff to be able to throw it out and start again and
[04:18:10] takes incredible amount of like,
[04:18:12] pulling it back, which is what I was going to get at.
[04:18:17] Thank you.
[04:18:17] I don't know. Everyone in the comments was like, this doesn't work. We've tried this before. It fails. Okay.
[04:18:23] Yeah, I'm not commenting on my ability, but it takes
[04:18:27] being bold sometimes to be able to change things up.
[04:18:32] And most of the time it's not going to work.
[04:18:34] like 99% of the time it's not going to work.
[04:18:37] But that 1% doesn't happen if no one doesn't do this.
[04:18:43] Thank you.
[04:18:49] Okay.
[04:18:51] Thank you.
[04:18:52] Yeah, well, I mean, yeah, actually, Deb, I like this argument here because
[04:18:58] if you change your state, like the portability of your state,
[04:19:01] actually matters like a bit on signals versus not, you know, like once you have signals and you want to use signals and other components, and technically you can use them in your cell for components. But once you start translating your state into the state manager, then you have to go update those components, at which point you probably should change them to use fine grained rendering rather than cell for rendering. So it's like, this has cascading effects, because not every part of your app is independent, especially when it's about data dependencies and stuff, it actually changes the patterns considerably. I think the same thing is going to be true of view vapor for the fine grained rendering, like that one's a little bit
[04:19:31] more isolated, but like,
[04:19:34] These are big changes that
[04:19:36] you know um
[04:19:40] Thank you.
[04:19:40] it's hard to know until you like get in that. And it's always the hardest part. Yeah.
[04:19:49] It's funny how the standard almost nobody questions it.  Yeah, yeah, yeah.  I forgot people came up with it.  Legitimate, like you have to, like sometimes it just works, you know?  Like sometimes you just hit the right thing, you know?
[04:20:02] Anyways.
[04:20:03] Yeah, still waiting on this super stoked for the documentary.
[04:20:08] Yeah.
[04:20:10] Oh god, I forgot how much cool stuff I have here.
[04:20:16] God, we went through a lot the last few weeks, eh?
[04:20:20] Um.
[04:20:23] Thank you.
[04:20:26] Sorry, this one's solid.
[04:20:32] Am I on my page? Yeah, I'm on my page. I'm like, where's my bookmarks? One of these has got to be bookmarks.
[04:20:38] Oh, here it is, yeah.
[04:20:42] Thank you.
[04:20:46] Yeah, I mean,
[04:20:49] I coined JavaScript fatigue.  So I just bookmarked this because I needed to see the guy who coined JavaScript fatigue, if this is actually true.
[04:20:58] Because this is the most...
[04:21:01] It's true, but it's also been like my biggest enemy for like eight years.
[04:21:06] Yeah.
[04:21:08] Um...
[04:21:12] Thank you.
[04:21:14] Thank you.
[04:21:17] Thank you.
[04:21:18] Oh man, there's so much good stuff here that I've missed.
[04:21:25] Thank you.
[04:21:30] Thank you.
[04:21:34] Okay.
[04:21:35] Thank you.
[04:21:36] Yeah, I mean, I don't believe, I don't, I remember reading the original,
[04:21:41] Article 2016? 15, yeah.
[04:21:45] Thank you.
[04:21:46] Yeah.
[04:21:48] Thank you.
[04:21:49] Yeah, and it's funny.  It was...
[04:21:52] It was relating to React changing anything.
[04:21:58] Thank you.
[04:21:58] Thank you.
[04:21:59] Thank you.
[04:22:02] Thank you.
[04:22:06] Thank you.
[04:22:06] Thank you.
[04:22:07] Here's your assignment.
[04:22:15] Yeah, man, this is a classic.
[04:22:17] um thanks for sharing that though i was trying to find this the other day
[04:22:23] Oh man.
[04:22:25] Thank you.
[04:22:27] Sorry, I know I didn't put that on screen.
[04:22:30] That's fine. I mean, I can put it on screen for people who want to see it, but the article itself isn't very long.  It's just like.
[04:22:38] It's like a conversation. It looks like some of the old images are gone, probably because the React core team decides to delete all their posts on Twitter.
[04:22:47] So,
[04:22:48] They don't realize the impact of that.
[04:22:52] It's fine.  I'm still choked about that.
[04:22:55] Thank you.
[04:22:56] I know it seems dumb, but like...
[04:23:00] it be these social conversations become a fixture of like
[04:23:06] the history of of the of these tools in the internet and it's just to remove them is just
[04:23:13] Thank you.
[04:23:15] Anyway.
[04:23:17] Where do we want to consider things? There's so many different ways to go. I guess I just pick one. We're done with solid.
[04:23:26] Solid, am I done with solid? Yeah, solid, solid, solid, solid, done with solid, okay.
[04:23:31] Amen.
[04:23:32] All right.
[04:23:39] Angular has been working on deep signals, like--
[04:23:46] Thank you.
[04:23:47] Apparently, I don't think I want to look at the code here.  I think what I wanted to do,
[04:23:52] would see people talking about the proposals,  because I think someone like Manfred was talking about how stoked he was about, yeah,  about the approach they're taking.
[04:24:03] because they're using something kind of more path-based  than the way that we're doing with the nodes,  with the stores.  The danger here, I think, yeah,  they have almost like lenses.
[04:24:13] I wonder if I could find the API for it. It would be easier to talk about it. I think the challenge here is you want to make sure when you have deep stuff that every time someone reads that property, it is done in the deep way. Because if you split between the deep and the non-deep approach, you're going to end up with weird UI tearing.
[04:24:30] which I think is my biggest fear of this approach of just basically –
[04:24:35] Um,
[04:24:37] kind of like having these kind of
[04:24:40] lens-like wrappers into the state.  Because if you can access the same values  without them tracking deep,  and also with them tracking deep,  you end up in a weird...
[04:24:50] like duality place where stuff can get out of sync with each other um
[04:24:55] Essentially I.
[04:24:57] Because some things will trigger updates and other things won't.
[04:25:00] When something changes deep, it should always trigger the update of the thing above it.
[04:25:07] uh
[04:25:08] in certain scenarios there's places like when you have storage where you go i want to trigger the  deep thing i don't need to notify the the top level thing but if you can listen to the top level thing
[04:25:17] then you expect to have the latest value and actually have it trigger like
[04:25:22] it's kind of like on you. It's, it's,
[04:25:24] I'm going to have to see more of this in motion, but...
[04:25:28] What I saw so far did leave me a little bit concerned.
[04:25:32] um
[04:25:33] I think I get it, but I...
[04:25:36] It is definitely a different direction.
[04:25:40] Thank you.
[04:25:42] Um...
[04:25:44] Thank you.
[04:25:46] We can talk about those. Yeah, talk about those. Okay, let's go back here.
[04:25:55] Okay, this one's just a novel one I want to throw out here.
[04:25:59] I was talking...
[04:26:01] Proxies, I've been looking at for hydration, which is kind of cool.
[04:26:05] Um,
[04:26:10] Thank you.
[04:26:12] Thank you.
[04:26:13] Are they just from rendering model-like server? Sorry about the Angular thing.
[04:26:20] I mean, we all had the reinvented view. Reactive, solid store are basically the same thing.
[04:26:30] The API services are a little bit different.  But yes, I mean, we all need deep reactivity.  It's a whole classification, I think.
[04:26:40] that's underexplored, especially on the drive side.
[04:26:42] That's why I've been focusing the last few streams on this.
[04:26:46] But yeah, I mean...
[04:26:50] There's a lot of devils in the details. And I do think there might be like a generalized solution of what these should look like. Like the trickiest part is as you move further away from the core of this stuff, it's easier to diverge and have different opinions and like different types of solutions. I do wonder, though, if there's some fundamental truths here to be understood.
[04:27:13] Anyways, sorry, this example was fun.  I was sitting there and I was like,  I wonder if we can like create an, because with hydration,  we could create an element before an element exists  with this like idea I had using a proxy.  So someone had a proposal for solid for like create safe ref,  which didn't really fit solid semantics.  But I like, I looked at it and I was like,
[04:27:34] Because they were like
[04:27:36] basically making almost like an like special helpers that would wrap like a function that  would trigger when the signal and the wrap updated and i mean i got what they're doing i've seen  stuff like almost like uh solid hook forms and stuff like that use a similar kind of almost  approach to handling their internal refs but then i was like what if we just
[04:27:54] Fake it, like create a proxy ahead of time.
[04:27:58] for something that we're going to set
[04:28:00] down here.
[04:28:02] But...
[04:28:04] Until then, we can, you know, add an event listener to it.
[04:28:08] set a value on it.
[04:28:11] console log value on it.
[04:28:17] This return of promise thing is kind of,
[04:28:20] Interesting. I'm not...
[04:28:22] sure this is the approach because but basically i didn't make this um mizulu or zulu on our  discord like basically heard me think out loud and then just made this demo and
[04:28:32] It just looks cool to have...
[04:28:35] to basically have be able to wire the stuff up before it even
[04:28:40] goes and because solid components don't rerun again
[04:28:43] This is perfectly valid way to do stuff.  You basically are just setting a bunch of stuff  on the proxy, which you store.  And then when the actual mount hook happens, you know,  like when it mounts with suspense or whatever,  whenever it happens or show,  he's using show to show the timing coming in.
[04:28:58] It's only at that point that it actually can resolve and sort all this stuff out. And
[04:29:03] I mean,
[04:29:06] Cool. You know, um,
[04:29:10] That's all I got to say about it.  I don't know if I'd go as far as doing this,  but this is the kind of thinking
[04:29:17] that we have to do, you know, when I'm talking about thinking about outside the box and trying to push stuff, it's like the shape of the problem doesn't fit what you're doing like,
[04:29:23] Rethink it.
[04:29:24] Like,
[04:29:25] If refs are awkward, maybe create them ahead of time.
[04:29:30] The other thing I like this is there's no creative act here.
[04:29:34] Right. Like I've been playing this kind of game of like how many ways we use create effect can we get rid of because
[04:29:42] On one side,
[04:29:43] I think it's, I've kind of tried to show it, and I think it was actually kind of obvious today with the transition stuff, why effects need to be split to actually do what we want.  Like they kind of have to be.
[04:29:54] But...
[04:29:56] But then it's like, can we avoid using create effect?
[04:30:00] Like, is it just like our effects, should they be for something very specific?  Like for...
[04:30:05] side effects of your system.
[04:30:07] there definitely should be first thinking safe state.
[04:30:10] Maybe you don't even need them for managing a...
[04:30:14] DOM refs,
[04:30:15] You know, like maybe maybe there's a better way that effects are literally for stuff like logging.  You know what I mean? Like.
[04:30:21] Thank you.
[04:30:22] Um,
[04:30:24] We know that we don't need them for async.
[04:30:26] We know we don't need them for, you know, a...
[04:30:29] bunch of other things.
[04:30:32] So interesting.
[04:30:34] Nonetheless.
[04:30:39] I'll paste this example in case anyone wants to look at it later.
[04:30:47] Um...
[04:30:54] Thank you.
[04:31:05] OK.
[04:31:07] just double checking something here because I want
[04:31:10] We talked about all of this stuff.
[04:31:14] Okay. Yeah. So my last technical topic is about the
[04:31:18] browser before we get to that.
[04:31:24] Let's look here.
[04:31:27] Let's talk about React for a moment, it looks like.  React the good parts, components,  composable building blocks or UI, JSX,  Mark refuses JS language extensions,  that bespoke template language, virtual DOM,  render everything with the runtime figure out.  I don't know if that's a good thing, but let's say it is.  REST, sometimes you need input to focus.
[04:31:44] The okay part. See, I view this as like the good, the bad, and the ugly.
[04:31:48] Um,
[04:31:49] Because he called him okay, but...
[04:31:51] Context, synthetic events.  OK, that's fine.  These are actually OK.  The style prop.
[04:32:00] uh,
[04:32:01] Yeah, I guess it's a special case.  Class component lifecycle methods, mostly deprecated now.  Yeah, effects, workable but foot gunny.
[04:32:09] Bad parts react to own your state free enters couples of state changes. Okay.
[04:32:12] But,
[04:32:13] That is the virtual DOM.
[04:32:15] I mean, unless you want your users to call update themselves, that is the virtual DOM.
[04:32:23] Um,
[04:32:24] or you're like doing some kind of polling system.
[04:32:27] Lines are blurry around what state is versus refs.
[04:32:29] I agree, that's because of the virtual DOM, again, because of
[04:32:34] Re-renders, rules of hooks,
[04:32:37] Anyways.
[04:32:38] Yeah, how is the virtual DOM not the bad part here?
[04:32:48] Thank you.
[04:32:49] Like, all his bad parts are an extension.  Like, okay, you don't...  Okay, fine.  You don't need the...  You don't need...
[04:32:58] hooks if you have the virtual like the virtual arm doesn't mean you need hooks so like the vdom maybe is in the okay part
[04:33:03] and the hooks are the bad part.
[04:33:10] I mean, it's server rendering, yeah.  I mean, it's tricky.
[04:33:17] I feel like SSR is the...
[04:33:20] is the main reason for this.
[04:33:24] there just isn't isomorphism is actually the the main call for it like you don't  avoid this it's not like remixes and bundler magic either right like
[04:33:33] Um,
[04:33:34] Like having magic exports is definitely like loader and actions, definitely bundler magic.
[04:33:40] So I don't know...
[04:33:43] I feel like bundler magic is like the okay part.  It's like a necessary evil.  Like I think everyone recognizes that at this point.
[04:33:51] But I do think there's an interesting way to break it up.
[04:33:54] Because components are great.  I think JSX is great.
[04:34:00] You don't need refs if you don't have the virtual thumb, arguably.  But yeah, refs are pretty...
[04:34:04] They're they're pretty good.  I think your rest might actually be OK.  Context is kind of interesting because I think context and fine grained systems is a
[04:34:12] is a
[04:34:13] good part, whereas in React, it's a mediocre part because you can actually put
[04:34:18] state in it and like all your third-party state solutions can work with it like you can't use  state in context without like it kind of
[04:34:25] you have to bring your own management in, but in like a signals library you can.
[04:34:29] synthetic birds merging music probably gets ugly. I agree, but
[04:34:33] Yeah, this is definitely on the side.  Style prop, yeah.  So, yeah, I don't know.
[04:34:39] Class components, right?  As I said, they're not gone, but they are basically.  So...
[04:34:46] Yeah, I think that's an interesting list nonetheless. I do think it's funny how many of these things are related to the virtual dawn though.
[04:34:53] Thank you.
[04:34:57] Um,
[04:34:58] Let's see another one. Functional programming is absolutely correct.  Logical way to write code. It was discovered like physics rather than invented like social science.
[04:35:04] Yes.
[04:35:05] which is a good characteristic to have.  However, only people with socially  disability can master it.  SS needs social science.
[04:35:12] I don't know if it's an effect.
[04:35:15] Or what's a...
[04:35:17] What's a monad?
[04:35:23] Yeah.
[04:35:24] or effect.
[04:35:27] Thank you.
[04:35:32] Yeah, he's like, I remember introducing use effect on the world stage.
[04:35:39] purity over pragmatism and then try to force on other languages.  You don't need to really inject a master or laying elixir on camel.
[04:35:45] Hmm.
[04:35:47] Thank you.
[04:35:50] This is all positioning stuff, I think, for the walk away from React, but I like the engagement they're getting on this. It's interesting.
[04:35:59] What else we got here?
[04:36:01] I'll get back to that one.  I have thoughts.  The short answer is AppRotter is easy, but not simple.
[04:36:07] It's easy to get started, but complexity ramps up fast.  I've said this previously that if you don't need streaming,  then app router might not be a good fit.
[04:36:13] Why is the site slower in the app router?  Let's see.  I've wondered.
[04:36:18] I flagged this one because lead doesn't work at for sell anymore.
[04:36:23] Um,
[04:36:24] But he still decided to kind of talk about like the trade offs here. And I,
[04:36:29] And app routers apps have hit some impact.  I wonder what his perspective is.  Maybe it's slightly different now that he's not there.
[04:36:37] Here's a random complex match. What React transitions are and how next router uses them. Okay.
[04:36:43] We talked about transitions today. How streaming rendering works and why Next.js apps are designed to word them like generate.
[04:36:48] metadata right okay because it's tricky because you have to hoist the
[04:36:53] Yeah, OK.  Like the data fetching, the hoisting, and the timing  is tricky in order to get streaming to work in the right way.  I see what he means now.
[04:37:00] how dynamic rendering affects
[04:37:03] different prefetching configurations.
[04:37:07] Um...
[04:37:09] Yeah.
[04:37:10] Yeah.
[04:37:10] Yeah.
[04:37:12] I do think...
[04:37:14] PPR and stuff, add this extra layer that make it even more confusing.  What RC plate and how to optimize it.  My server actions are unguessable and encrypted URL endpoints.
[04:37:24] I don't think that's a big deal, but yes, it's a good point. Why use client is actually a bundler feature.
[04:37:29] It is, yeah.
[04:37:31] It has to be. This is kind of something we talked about.
[04:37:34] um but bundler like bundlers are actually kind of essential which is what ryan
[04:37:41] Lawrence's or MJ's, I forget which one of them complaint was, but we're getting kind of to this point where like you can't solve this just with a compiler.
[04:37:51] that reading search params
[04:37:53] Because like you might not, if you have code splitting balls, sorry, just to clarify, you might not.
[04:37:59] things have to exist on the client and the server builds  from a whole graph understanding perspective,  not just as you hit them.
[04:38:06] So it takes more than just changing the code because you also need to have the code that registers the code that.
[04:38:13] and links it back together.
[04:38:15] Reading search around takes your page dynamically rendered.  Yeah, I guess that magic stuff.
[04:38:20] Most of this complexity comes around is that the app router,
[04:38:23] Um,
[04:38:24] is designed almost to start from like i'm building an astro site and then scale up from there and
[04:38:30] Um,
[04:38:34] It's feeling where the central complexity, central complexity, the step back and show whether and actually seeing the right tool for the job. Many times the answer will be yes, hell I'm building an ex-aparantia, but other times it's no. Next thing is, army knife. Sometimes you need the really sharp single purpose knife.
[04:38:49] Okay.
[04:38:51] Thank you.
[04:38:52] Yeah, that's tricky.
[04:38:56] That seems tricky.
[04:38:58] But I...
[04:39:01] Yeah, I don't know if I actually have as many thoughts as I had.  I just marked this because I thought it would be interesting to see what he thought, but
[04:39:09] Yeah, I mean, takeaways, sometimes it's tricky to have an easy to use, but general tool.
[04:39:15] you know, when you make stuff flexible,
[04:39:18] it's different than making something adaptable.
[04:39:22] It's one thing like you can keep things simple.
[04:39:25] and be able to use them a lot of different ways, which I consider being adaptable or being flexible is usually involves like,
[04:39:33] having
[04:39:34] config or having like lots of different
[04:39:37] modes something can work in.
[04:39:41] but hides that
[04:39:45] basically hides the complexity from you it makes it easier but it doesn't you know make it simpler
[04:39:51] Thank you.
[04:39:52] Um...
[04:39:55] I bookmarked both of those. We'll get back to that in a minute.
[04:40:00] Actually, you know what?
[04:40:02] Let's talk about it now.  We've been talking about a lot of Ryan Michael stuff.  Because it's interesting.  Sorry.  It's funny because I said I probably wouldn't talk about the stuff on stream.  But...
[04:40:10] When you're building a framework, you end up in these weird zones where you're like,
[04:40:15] Hmm.
[04:40:16] "Can I do this thing a little bit differently?"
[04:40:18] And I so I relate to a lot of tweets when I see them, whether I agree or disagree the whole other thing.  But I actually see a lot of these tweets and I'm like, huh.
[04:40:27] *sigh*
[04:40:30] Thank you.
[04:40:39] Thank you.
[04:40:40] But yeah, this is a funny thing on AI.
[04:40:43] Ryan and I are barely writing any code ourselves for Remix3. It will be the first web framework that is almost entirely written by AI.
[04:40:49] I read this and I was just like,
[04:40:52] This is...
[04:40:53] bat shit crazy.
[04:40:56] I can't picture it, but maybe I'm not that AI-verse as you guys saw in the last stream.
[04:41:02] Um,
[04:41:06] All right.
[04:41:08] It's interesting.
[04:41:12] I started asking myself a more general question.  Would I trust an AI to write my framework?
[04:41:21] Thank you.
[04:41:24] Thank you.
[04:41:27] And I mean, the answer is no, because like generally my experience with AI is it caters to the lowest common denominator, which means you never get the best thing.  You always get the...
[04:41:37] the reasonable thing.
[04:41:44] Thank you.
[04:41:44] I think when they say it's written by AI, it's like the previous version was written by VS Code.
[04:41:50] Oh, oh, okay.
[04:41:52] Let's see what--
[04:41:58] Thank you.
[04:42:03] It's interesting. Maybe like if I was doing like solid star stuff, I could see this because like,
[04:42:07] I don't I don't like you can you can actually almost see this like in the in the repo I don't need to
[04:42:13] turn through a bunch of code.
[04:42:15] most of the time when I'm working on solid.  The signal thing is like,
[04:42:19] less like when I put the build output out, it's less than 2000 lines of code, right?
[04:42:25] And I've been iterating on it for like a year.
[04:42:28] Like,
[04:42:31] Um,
[04:42:33] I'm not doing a vast amount of code.  I don't need to churn through this stuff.  Every decision is so critical.  Every piece requires...
[04:42:42] weeks of thought, right?
[04:42:46] in terms of how they all work together. I'm not being bottlenecked by my ability to code fast, I'm being bottlenecked by my ability to think through problems.
[04:42:55] and finding solution.
[04:43:00] Right. I mean, there's a different
[04:43:02] thinking about AI failing to work with not being great with certain types of things.
[04:43:12] Unless you're saying you get something else about AI working on libraries.  Do you mean using AI to work on libraries or AI not being good at generating code for certain libraries?
[04:43:22] Yeah, it seems to fill with libraries specifically.
[04:43:25] I'm more talking about like picture you,  like I'm writing my like solid signals, you know?
[04:43:31] Thank you.
[04:43:32] Yes, it signals. And I'm
[04:43:36] I'm working on this code base.
[04:43:39] with AI. It's like
[04:43:41] I just can't.
[04:43:43] As I said, I'm never limited by my, pretty much ever by my speed to code.
[04:43:49] It's and it's not even generally by my my speed to implement like ideas.
[04:43:55] it's more of like you implement and then you go, oh, this was the wrong idea.  And then you're like, OK, I got to do this again.
[04:44:00] or refactor this out.  So it's like,
[04:44:03] I... I...
[04:44:05] When I read this, I'm just like, what are they building that this would actually have any kind of impact?  Like, any impact.
[04:44:12] Um,
[04:44:13] like,
[04:44:14] I was thinking, it's not like you build
[04:44:19] a lot of
[04:44:20] features and that require much code. Like when you're building product,
[04:44:23] and you like have a new section of the app and you're like, okay, crap, I need admin sections. I need, you know, to manage that. I need like all the features. I need this, this view, this, you know, like I got a light box here. I got like modal pop-ups. This can flow, maybe a wizard, you know, simple view, expert view, you know, like there's all these kinds of consideration when you go like, I'm adding this feature to my product.
[04:44:46] Frameworks,
[04:44:48] Generally,
[04:44:49] the pieces are much smaller and they're all integrated.  So like,  I don't end up,
[04:44:54] when I add a new feature,  I rarely,  I end up adding like one function and then editing everything.
[04:45:02] a dozen other functions in different places, like a one line here, there.  And then sometimes, oh, actually, I can't do that.  And then like
[04:45:10] pull this thing out or something, but it's not like
[04:45:12] It's not like the amount of code that changes is so minimal.
[04:45:16] Comparatively.
[04:45:19] Thank you.
[04:45:26] Docs, yeah, I can see that.
[04:45:28] Thank you.
[04:45:30] critical part of code you're definitely not going to write with a code you're going to make a persist  update so use but like everything i feel like everything i do is critical i don't maybe maybe i'm just
[04:45:38] view myself too self-important.
[04:45:40] Um,
[04:45:43] Yes, yeah, tests got AI and tests have been my best friend.
[04:45:49] But I won't, you know what I mean?  Tests are amazing.
[04:46:08] What?
[04:46:11] I don't know what that means. Maybe they're just sensationalizing.
[04:46:20] Thank you.
[04:46:20] Thank you.
[04:46:24] See, I can see that maybe for 10 stack DB. I could see that for like,
[04:46:33] Yeah, I don't know.
[04:46:36] Maybe I just lack the way to
[04:46:37] Yeah, I don't know. I couldn't even describe what I was trying to do. I mean, maybe I'm just not seeing this well enough.
[04:46:44] "Keep feeding elements to examples of another framework,  "and then might rewrite and remix free.  "Then I ask it to compare and contrast to determine  "which is easier for devs elements  "to create bug fix and change over time.  "Maybe it's glazing me,  "but I get this kind of response every time.  "If you want a quick standing check,  "give a mid-tier LM two tasks on each version, blah, blah, blah.  "So not flattering.  "My take is that reducing invisible links  "to specialized lore.
[04:47:04] that tends to win for approachability and safe edits today.
[04:47:08] Thank you.
[04:47:11] Thank you.
[04:47:14] I mean, reading this,
[04:47:16] So you usually see fewer mistakes and less back and forth on the remakes bearing because the edit points are obvious and the behavior isn't hidden in the dependency graph.
[04:47:27] This is interesting.
[04:47:29] Because I can get this perspective.
[04:47:33] he didn't ask it which produces the best results he didn't ask what's the most performant he didn't ask it
[04:47:39] what will get the best user experience. He asked which one
[04:47:42] is more likely...
[04:47:44] to
[04:47:46] you know, produce the working results
[04:47:51] to the expectation of the framework.
[04:47:54] right so like you know we talk about lowest common denominator like
[04:47:58] can I make my framework
[04:48:00] dumb enough that anyone including an LLM could could leverage. And I think this is an interesting  quality because this is this is their pitch, right? This is their thought. They're like, I want to make
[04:48:13] a framework that works really, really well with LLMs. What does that mean? Well, it means that you can ask it something and it generates the
[04:48:19] the code that works for it.
[04:48:23] Um,
[04:48:24] React is pretty good, but we want to make something better.
[04:48:28] it says nothing about the quality of what comes out the other side, right?
[04:48:33] like you could build something
[04:48:36] that
[04:48:37] AI can generate no problem.
[04:48:40] I mean, this is an interesting hypothesis.
[04:48:43] If it performed good enough, but you could just...
[04:48:48] you know, easily generated.
[04:48:51] This would be an angle because people won't care if it's not the fastest.
[04:48:56] or like
[04:48:57] Pick a framework that was like,
[04:48:59] like React, but slower.
[04:49:01] But it was easier for LOMs to generate.
[04:49:05] Thank you.
[04:49:07] um
[04:49:10] people would probably still use it.
[04:49:12] Right?
[04:49:13] I mean, it's you would hope over time that AI would just choose better solutions or that you could like build better stuff with it.  But if you're targeting the lowest common, like if your goal isn't to over time create the best thing, but.
[04:49:29] Okay.
[04:49:31] Um,
[04:49:32] approach the thing to where it's at today.
[04:49:36] Actually, you know what?  It says here, this tends to win for approachability and safe edits, comma, today.  The AI said today.  It even recognizes this might not be the...
[04:49:45] the case in the future. But if your goal is to approach what happens today and close that gap,  then this makes a lot of sense.
[04:49:51] Right?
[04:49:54] right like i remember the devon creating the to do mvc app
[04:49:59] that used, God, I forget what component library is,  a really big one, but basically,  they created like a 300 kilobyte to do MVC app.
[04:50:10] in React and a bunch of stuff and used all the libraries and stuff.
[04:50:15] if you're okay with that and you can create more
[04:50:19] like,
[04:50:21] like better, like things that more...
[04:50:25] represent what you're trying to create like if if it's better at
[04:50:28] creating what you visualize on screen,
[04:50:32] There's a lot of people that would like, say, take a two megabyte bundle size for that.
[04:50:37] You know?
[04:50:37] Like, I'm not saying that you're doomed to fall that way, but I'm just using that as an example.
[04:50:43] Right?
[04:51:01] Yeah, I mean, a little bit, right?
[04:51:06] it's definitely setting the bar pretty low in some ways but on the other hand yeah it's approaching  yeah protein what happens today
[04:51:14] Okay.
[04:51:16] Oh, that's an idea. Give AI all my HackMDs.
[04:51:27] I'm just looking at the comments here.
[04:51:30] catching up on
[04:51:36] Oh, sorry, the Rich Harris thing.  Okay, yeah, we'll talk about that in a second.
[04:51:41] I'll finish up on this one here.
[04:51:44] Um,
[04:51:45] AI is fine for crud and boilerplate.  Funnily enough, Solid will always be better with L&Ms than whatever Remix 3 comes out with because Solid has more training presence.  I mean, I don't know if that'll always be the case.  I mean, I hate when React levels that argument against us, but it...
[04:52:01] You wonder if this is a situation where you're trying to rush approach where things are today and it's a moving target.
[04:52:10] And for that reason, you miss.  But...
[04:52:18] Thank you.
[04:52:28] Yeah.
[04:52:30] I agree simple and readable code is peripheral,  but I disagree with you can write simple,  but that works, that is bug free, yeah.
[04:52:37] Now, this is kind of an interesting question.
[04:52:39] Call it equals here.  I love these questions.
[04:52:45] The main thing to understand about it is it's going to be as good as a prompt we give them. Yeah.
[04:52:50] So I mean, that also makes the challenge.  But the thing is, the idea is they want to make the prompts,  like it better at handling the prompts, right?  That's essentially the goal here.
[04:53:00] It's like attacking it from the other vector.  I think it's interesting.  I just...
[04:53:04] don't know if the result
[04:53:06] is worth chasing but like long term but short term this might be an angle right
[04:53:12] Is Solid.js stagnating or is there a future from 2008 watching out things going?
[04:53:22] I feel like if you've watched any of the streams,
[04:53:25] then you know that
[04:53:28] like,
[04:53:29] I mean, even this stream covered everything, right,  from the growth that's happening.
[04:53:36] the 2.0 changes in features.
[04:53:38] The how solid itself core hasn't changed very much yet has participated in and led in a lot of the innovation that's happened in front in the last seven or eight years.
[04:53:49] So yeah, I mean,
[04:53:51] we we haven't stagnated just certain area we certain we focused on other areas other than  the core reactivity i'd say and
[04:53:58] because we had that mostly right
[04:54:09] But yeah, I mean, this is interesting. I really do like
[04:54:14] opening this kind of thing.
[04:54:17] Okay, but he just links to the thing about how all this stuff is awkward. Yeah, I mean, it is awkward.
[04:54:24] if your goal it's interesting like it's the goal to make it as easy
[04:54:31] as possible.
[04:54:33] to accomplish
[04:54:35] I mean, obviously the goal on a high level is to make it easy,  if possible, to accomplish your goals, right?  Like that's the goal high level.
[04:54:42] But,
[04:54:42] there's a lot of like,
[04:54:44] quality questions that come in between.
[04:54:48] I--
[04:54:49] I think this is very interesting because this is like the exact opposite way I look at the problem space.
[04:54:56] um,
[04:54:57] which is interesting to me because it starts opening up, you know,  the potential of thinking about this, you know,
[04:55:05] Huh.
[04:55:06] Honestly, yeah, really interesting stuff.
[04:55:09] Let's see Rich Harris.
[04:55:13] This is an interesting balanced research and it confirms my prior so I'm sharing it. It also makes sense. Elements feed up your typing part, which feels like the bulk of the job, but it's actually dwarfed by the thinking part and these things.
[04:55:23] Don't think good.
[04:55:26] Randomized control trial to see how much AI coding tools speed up experiences.
[04:55:30] open source developers. The results for developers thought they were 20% faster than AI tools, but they were actually 19% slower when they had access to AI than when they didn't.
[04:55:41] Also, participants are OSS devs, library authors, people largely building kind of software that  doesn't already exist in training data. If you're building a prod app or marketing page, maybe the  results are different. But what the study doesn't appear to account for is the time spent weeks  later when you're trying to augment your fixed code that no one on your team wrote. Me vibe coding.  Yes, me vibe debugging.
[04:56:05] Yeah.
[04:56:06] Yeah, I just like I literally like this is.
[04:56:09] the exact counterbalance. This makes sense to me.
[04:56:12] Whereas
[04:56:15] This just seems like
[04:56:17] craziness but it's sensational so i don't know like
[04:56:22] you're either wondering,  are they just building something like
[04:56:26] Like,
[04:56:27] Are they building something massive?  Is this like...
[04:56:29] are they building rails?  Like, are they building something  where they just have so many features  that they just need to spit them out  and like typing actually is a consideration.  Like they're just like,  we have like this huge feature set.
[04:56:39] We encompass everything, and that would make a lot of sense.
[04:56:43] because
[04:56:47] Like, I'm here, you know, like,
[04:57:00] Thank you.
[04:57:02] Thank you.
[04:57:05] That's interesting. Okay.
[04:57:09] Okay, so that's it for bookmarks, I think.
[04:57:12] OK, yeah, there's one more, but we'll.
[04:57:17] I mean, it's already here.  It's really...
[04:57:20] Dominic Ganaway,
[04:57:22] Creator of Inferno.
[04:57:24] Lexical.
[04:57:28] Thank you.
[04:57:29] main catalyst probably in Svelte runes.
[04:57:33] And that creates a slope 5 and fine-grained reactivity.
[04:57:37] Oh.
[04:57:38] an all-around great guy we've had him on stream before um i know we talked about this like previous  stream but he it's official now he's leaving versell and he's also hasn't been working on the  svelte team for a couple months now as we know so um this is a big change right the svelte 5 journey  was especially incredible it was challenging in many ways but i truly feel what was a better place  because of what we built with some salt kit the team behind is such a talented friendly group  people miss working together yeah
[04:58:04] But,
[04:58:05] Big shift, yeah.  Dominic, you know,
[04:58:08] is not with the Svelte team anymore.
[04:58:11] He hasn't said what he's doing yet, I believe.  But in my world, at least, this is big news.  Of course, I've known about it for a little while, but it's official now.  So...
[04:58:23] Yeah.
[04:58:27] I said,
[04:58:28] I like
[04:58:29] it's it's kind of funny because i remember i i was talking dominic was working on some of his  own prototypes of signals and trying to create this convincing reacting that signals can be used  under the hood and then he wasn't finding the right place for his work and then he actually  talked to rich and they actually okay let's do this but i i'm
[04:58:45] If Dominic hadn't done that, I wonder if Svelte 5 would exist in the form that it does today.  I'm not sure.
[04:58:51] um,
[04:58:52] It's definitely interesting to see the kind of
[04:58:55] impact people coming and going out of projects can have on those projects, you know.
[04:59:00] So
[04:59:01] Yeah.
[04:59:03] Thank you.
[04:59:05] I'm very interested to see what he does next. Okay, I think that's it for bookmarks. I think I have
[04:59:11] one more topic probably about
[04:59:16] Yeah, I don't even want to talk about that. Probably about
[04:59:20] Web components. Yeah, here we go.
[04:59:24] Okay, let's do it.
[04:59:27] The dividing point between frameworks versus platform purists
[04:59:31] is the belief.
[04:59:33] of whether DOM should be the source of truth for state.  Almost every web component argument issue with design comes back to this.  You don't need to go any further than forms to see this in action.
[04:59:43] The gap between the value attribute, the default value, and the value property already surfaces this tension.
[04:59:49] When UI equals a function state, there are fewer concepts than
[04:59:53] even using native APIs. However, using both together correctly ends up being the most involved and easiest to miss
[04:59:59] certain edge cases.
[05:00:01] You can see it even with it.
[05:00:03] increment and reset buttons to be fair solid like most firmers already use special cases value as a property unless
[05:00:08] It is static.
[05:00:12] And the reason this came about was
[05:00:15] It's so awesome now to be working with a team of people.  Like I know I often get credited with a lot of the work on solid, but we've actually kind of split stuff off into, you know, there's certain people working on fellowships in specific areas.  Certain people in the core team who have specific specialties, you know.  Obviously, you guys see a lot of the work I do or dev does more than anything else because we talk a lot about async models.  We talk about events.  We talk about concurrency, you know, have expertise in this area.  But there's other people in the team who do amazing work.
[05:00:45] of our fellowships, I guess I think
[05:00:48] I think Tito, hopefully I'm pronouncing the name correctly,  has been basically taking over DOM expressions in the compiler  the last like six months or so.
[05:00:58] He was instrumental in the changes in 1.9. So yeah, whenever that was, you know, the web component changes, I guess it's been long, maybe almost a year. And he's been a huge force in updating and standardizing the stuff for 2.0, mostly because he's also a web component guy. And he knew my frustration with dealing with all the edge cases of web components. So he's been
[05:01:18] Looking at the community going, okay, Gus, how do we actually do this in a way that good for web components? How do we make this work in a sensible way? And he
[05:01:26] managed to come up with
[05:01:28] a solution that's quite agreeable to me for the most part he's like let's get rid
[05:01:32] of
[05:01:33] setting properties, default everything to attributes, even on web components, which I always thought was weird.  I wanted props on web components.  And like lit, make things explicit.  And the details of this have been actually great.
[05:01:46] he also triggered the webclones are not the future article because i was just so  frustrated hearing about it the funny thing is after that article
[05:01:54] broke.
[05:01:55] And he's still a webcam punk guy, don't get me wrong.  But after that article broke and he was in there trying to defend,  and then he heard the back and forth, and he actually worked through the problems  and been working DOM expressions.
[05:02:04] I think his perspective...
[05:02:06] is changed a little bit like he's still you know into this stuff but and he's he understands what  the right solutions are but i saw him get into like arguments even with the web component people  you know being like you guys are just being kind of crazy they they basically didn't self-identify  him in the in the there they were like oh you're just a solid guy but ironically
[05:02:28] his impact has actually been actually fairly substantial.  Cause like,  if I go here,  there is one more story that I missed here.  I want to talk about our man,  uh,
[05:02:38] Tito here, if I go to my profile.
[05:02:42] Because
[05:02:44] I forgot this blue sky only thing.
[05:02:47] Justin from Lit,
[05:02:49] went and was like, a while ago, there's a confocal about web components.  So he's talking about my article, basically.  Frameworks were mad that they had the detective templates contain custom elements  so they could switch between clone node and import node.
[05:03:02] This was like one complaint out of like dozens that I said I believe is actually a fundamental
[05:03:07] mismatch, which is what I'm talking about
[05:03:11] here.
[05:03:12] But...
[05:03:13] Um, yeah.
[05:03:15] He was saying, but it turns out import node was slower than flow node in Chrome.  So parameters added extra logic to look for elements or dashes in a name to choose import node only for templates to have them.  And some blamed web components for messing up the web APIs.
[05:03:27] Fair enough. Some framework.
[05:03:29] What can there is file bugs against specific new features  like is custom on so that they could farm this detection  logic to browsers and got really mad when the browser said  they shouldn't give any that.  I mean, that wasn't us because important node being slower.  It's just a bugging Chrome.
[05:03:41] Okay.
[05:03:41] It was kind of a silly situation.  And some people in the webcomers communities
[05:03:45] by some people in the webhomens community filed an issue in Blink, and advocate for performance to be fixed. Turns out, some kind of navigation, heuristic tracking, import node, not clone node. So the bug was just fixed. Now import node and clone node have the same performance in Chrome. I'm happy, frameworks can get simpler, but also because lit, which also uses the import node, probably got faster too. Filing an issue for browser implementation.
[05:04:04] bugs is a good thing for everyone.
[05:04:06] Okay.
[05:04:07] Do you know what problem I have with this?
[05:04:11] How in the world are you supposed to know that this is a bug?
[05:04:14] Import node does do different stuff than clone node.
[05:04:19] Otherwise, we wouldn't, like, why should you even use it?
[05:04:23] He basically said, you should always be using import note.  Why? I don't know why.  But we know that
[05:04:30] Clearly,
[05:04:31] if clone node did what import node did, we wouldn't need import node and we just consider to use clone node. Import node actually adds it to the current document where clone node does not, which actually has impact on certain types of elements, custom elements, iframes, a bunch of other ones. But
[05:04:48] But so it does more work.  It's like saying should inner HTML and inner text,
[05:04:53] have different performance.
[05:04:56] Probably.
[05:04:58] inner HTML has to parse for markup,  inner text knows that it's just text.
[05:05:03] Right. In fact, text content is faster than inner text for another different reason.  In fact, we hit these kind of things all the time when building a framework.
[05:05:12] every little detail like this.  And we don't,
[05:05:15] question it and go, oh, we just go, OK, well, this seems faster in all the browser, probably because it's doing less work.
[05:05:25] Right?
[05:05:29] Simon H, you got this background. This program is fixed only because solid and svelte were actively working around it. Look at the reproduction. It's referencing solid playground. Thank you.
[05:05:36] Tito.
[05:05:38] actually created the issue.
[05:05:40] So just side note.
[05:05:45] I have no idea where you think it's backwards, but you sound like a jerk with this tone. Have fun with that, I guess.
[05:05:52] Yeah.
[05:05:53] then dom i'll talk about dominion
[05:05:56] Yeah, I know we can look at this, but yeah, I mean,
[05:06:01] That's a very good thing. I don't think the complaint was silly. It's just difficult to know if something is fundamentally slower if it's implementation.
[05:06:07] Fortunately,
[05:06:08] Tito.
[05:06:09] Solid maintainer report the issue now expects for everyone. For issue like this is a dozen not so easy to address. Also this. Yeah. So,
[05:06:17] Just...
[05:06:18] Yeah, so Dom's like you're tones off server.  I and a bunch of other framework authors have been pushing for this change for a while.  I've been paying folks at Google's gets escalated even when I was on the React team.
[05:06:26] While you might think it's a silly situation,  for those who really care about forms implications here,  I've strongly aligned that this is
[05:06:32] I've been strongly aligned that this is a Chrome bug that just needs fixing as it's not evident in other browser engines. Furthermore, just filing issues is simply not enough. This took a lot of effort folks to push the issue specifically so it got noticed and had eyes on so many folks.
[05:06:43] Toning of our industry should have been different from the start.
[05:06:45] This is a community effort driven by framework authors who have wandered justice issues for many years now. This work
[05:06:50] Nothing to do with weapon once they're lit.
[05:06:52] That's why the tone is off.
[05:06:56] Silly issue, there's no issue filed against Chrome at all.  The Chrome DOM folk I talked to didn't even know about the problem,  so it wasn't widely known or probably even actionable for the DOM team for apparently years.
[05:07:06] It took urging webconets discord to get anyone to file the issue.  Once it was done, there was a visible progress.  It's silly that took years to file anyways.
[05:07:13] But you're welcome to understand blah, blah, blah.
[05:07:16] I was on this React and we had rarely meetings, Chromium folks.  Yeah, that's probably true.  It got worse in Chrome 125.
[05:07:26] Yeah.
[05:07:30] a bunch of times because i know some of them join it it's silly yeah i mean
[05:07:37] Ah.
[05:07:38] This is a tricky tension here because you can hear it in Justin's tone initially that, you know,  we were all just being silly and yet
[05:07:45] Like,
[05:07:46] How do you possibly include that?  I guess they don't know it's an issue unless someone reports it,  but no one's going to report it.  They'll just work around it.
[05:07:55] And unfortunately,
[05:07:57] No one, you know,
[05:07:59] probably the real problem was no one knew why web components don't work with clone node in the first place.  There's probably a really good reason for it.
[05:08:09] But essentially,
[05:08:12] This is kind of...
[05:08:14] the realm here of...
[05:08:16] Thank you.
[05:08:18] the kind of challenges we come up here with here.
[05:08:23] I want to I want to I want to show I'm going to go back to my my thing about
[05:08:28] DOM holding the state because the
[05:08:31] The funny thing is web components encapsulate state in the DOM element, even if
[05:08:36] you know, they don't intend to, you're actually encoding
[05:08:42] that logic
[05:08:44] not in like instead of having components that output dom essentially you're actually encoding  that information into the dom elements themselves which is as i said fun for things like ssr and  serialization considerations when you're dealing with properties you basically can't serialize  props unless you do something specially whereas attributes are the way  and because again it makes sense there's a difference between attributes and properties
[05:09:06] But
[05:09:07] Having...
[05:09:09] properties is only valuable in places that don't have HTML that
[05:09:13] or sorry, have the DOM, right?  Whereas attributes can be used in places that only have HTML.
[05:09:20] So,
[05:09:21] There is this kind of tension here, and what I wanted to point out here is,
[05:09:25] Sometimes the model,
[05:09:27] Let's open all three of these.
[05:09:34] Sometimes the model,
[05:09:36] is easier to
[05:09:39] without using the native stuff.
[05:09:41] Because here,
[05:09:43] For example,
[05:09:44] This is completely a naive framework approach.  We're pushing state. We're like, okay, we have some state,  you could create single use state, doesn't matter what it is.  Increment it, reset it.
[05:09:53] driven by framework. So we update,
[05:09:56] to four or five, we hit reset, it goes back to zero because we set it to zero. This
[05:10:00] is how people are introduced to this stuff these days because of React. Right? It's simple. You drive it off state.
[05:10:07] The Dom is kind of like...
[05:10:09] an output.
[05:10:10] Right. Like we don't care. It just...
[05:10:12] We control the state.
[05:10:14] Thank you.
[05:10:17] Now, the naive DOM approach is kind of interesting.  I love value as a number, as a side note.  If you guys aren't aware, it lets you, it's, it's,
[05:10:24] it basically,
[05:10:26] converts it to a number.
[05:10:28] Now, the simplest framework version should have also had
[05:10:32] Hype.
[05:10:33] number. I missed that. But because it lets you do this too.
[05:10:41] because you'll see why this is relevant because this is you setting it via state, right?
[05:10:50] this is typing into it.
[05:10:53] essentially.
[05:10:58] Am I missing something here? Yeah, sorry, you know what I'm missing here?
[05:11:04] The naive framework, I don't know how, how did I miss this?
[05:11:08] Sorry, this is my bad.
[05:11:13] This is actually my bad.  The naive framework version should have had
[05:11:18] uh
[05:11:20] event.
[05:11:23] This is my bad.
[05:11:25] Event dot.
[05:11:27] target.value. Okay, sorry.
[05:11:31] I don't know how I missed that. That's that actually probably makes this look way. OK, now we're better. So this goes up.
[05:11:37] This...
[05:11:39] All right.
[05:11:41] Uh...
[05:11:41] Thank you.
[05:11:42] Cast it, yeah.
[05:11:44] There we go, naive framework version.
[05:11:46] I actually missed that. That is actually on me.
[05:11:49] Now the state's unified. We reset. Okay, cool. Okay.
[05:11:54] No problem. Okay.
[05:11:57] The naive DOM version actually in a lot of ways is a little bit simpler,  because it stores the state inside.  When I press plus,
[05:12:09] what I'm doing here.
[05:12:11] is
[05:12:14] I'm updating the DOM node directly.
[05:12:19] And then when I press this,
[05:12:21] Thank you.
[05:12:22] Thank you.
[05:12:25] my input is updating.
[05:12:28] And then,
[05:12:29] when I call reset, I'm actually calling the forms. There's a type reset. I don't know if people know this, but forms also have a type reset, which automatically resets it. So now the state is owned completely by the DOM in this example. So here we have
[05:12:43] Sorry, external state.
[05:12:45] driving it here, we have the Dom doing it and
[05:12:48] Arguably,
[05:12:50] Um,
[05:12:52] The benefit of this is you don't need event.
[05:12:55] Um,
[05:12:56] You only need the event handler on the increment.
[05:12:59] to synchronize.
[05:13:00] But you didn't have to know about a button type
[05:13:04] reset, make it work. But I mean, I think this is reasonable other than
[05:13:09] it doesn't scale greatly because it's like,
[05:13:11] you can't pull the state out into something else like,
[05:13:16] Thank you.
[05:13:17] And then the final version,
[05:13:20] uh
[05:13:22] is...
[05:13:24] And I'm actually missing something here, I just realized.
[05:13:27] Thank you.
[05:13:28] the ad.
[05:13:29] this.
[05:13:30] Thank you.
[05:13:31] Final version,
[05:13:40] that handles things properly,
[05:13:44] is
[05:13:45] is this version.
[05:13:48] See if this works.
[05:13:52] Yeah.
[05:13:53] Then reset. Yeah, okay, cool. And what the way this one works.
[05:13:57] is
[05:13:59] This is Dom correct because it's using the reset button.
[05:14:06] Um,
[05:14:08] And,
[05:14:09] The thing that isn't obvious here is this is setting the property because we do that by default in solid.
[05:14:15] And this one is setting the attribute.
[05:14:20] to make sure that it matches because if you didn't have the attribute the reset wouldn't work because  the input has to have the the attribute of value is the default value technically i could have  also done props default value but i'm just trying to
[05:14:34] kind of show that the attribute, like if you
[05:14:37] If you were...
[05:14:39] if you weren't overriding it, like made this prop value and make this
[05:14:44] just value like if you're trying to inverse it
[05:14:47] would have to be like this.  And this handles the full scenario here the proper way.
[05:14:53] Right. So
[05:14:55] The reason I'm trying to show this is like,
[05:14:57] Stay driven.
[05:14:58] DOM driven.
[05:15:00] Both. Both is definitely the most complicated.
[05:15:04] Right.
[05:15:05] I'm going to go ahead and get some more questions.
[05:15:06] And the reason this is like a concern
[05:15:10] is that
[05:15:12] It's very easy to...
[05:15:14] Turn like.
[05:15:16] not
[05:15:17] do this quite properly.
[05:15:22] Let me see if I...
[05:15:27] Where is it? I'm not seeing it here.
[05:15:29] And I actually started asking people this.
[05:15:33] because
[05:15:35] The argument was,
[05:15:37] We should...
[05:15:40] not special case essentially. We should say value is just an attribute not a property.
[05:15:45] Every like people say they want their framework to behave like plain HTML, yet every major framework except lit special cases value checked and selected as properties and setting the attribute doesn't update the input just sets the default perform reset.
[05:15:57] Right?
[05:15:58] I got to admit, this vote was closer than I expected. I expected most people,
[05:16:03] like wide range. I expected this to be like a 90 10.
[05:16:07] vote, not like a 60, 57, 38.  So that is actually interesting.
[05:16:12] But...
[05:16:13] This is what I'm talking about.
[05:16:18] If.
[05:16:20] Thank you.
[05:16:25] Thank you.
[05:16:27] Thank you.
[05:16:28] If we use attribute,
[05:16:31] to bind.
[05:16:34] When we reset,
[05:16:35] OK, that worked.  I'm trying to remember the case.
[05:16:46] Thank you.
[05:16:49] Thank you.
[05:16:55] Thank you.
[05:16:59] All right, this is not type numbers.
[05:17:03] This will just make my life easier.
[05:17:11] Yeah, this is a fun one.
[05:17:14] Because we're binding to the attribute, when we click reset,
[05:17:19] it doesn't actually it's we're changing the default value, not the actual value. So reset now,
[05:17:27] Um,
[05:17:28] doesn't work properly, which I mean, that's fine. But more importantly,
[05:17:36] the state got out of sync. Now to be fair,
[05:17:40] I think I should add on input here.
[05:17:43] Thank you.
[05:17:44] Because I miss this.
[05:17:47] Thank you.
[05:17:51] Thank you.
[05:17:53] Thank you.
[05:17:53] Thank you.
[05:17:56] Thank you.
[05:17:58] Thank you.
[05:18:00] But I'm just the reason I'm going through this is I'm like picture.  This is just how value work by default.
[05:18:07] So when you did this,
[05:18:10] Oh wait.
[05:18:11] Plus doesn't work.
[05:18:20] Right.
[05:18:22] But to make it more confusing, plus works initially, but then once I change the value on the input, plus stops working.
[05:18:30] This would be the default behavior if we bound to attribute instead of attribute.
[05:18:35] instead of
[05:18:37] to the property.
[05:18:45] This poll might have been shared on a web discord or something. Maybe like it's like picture if this was the default, like it's kind of crazy. You're like, okay, I'm count. I'm setting the count.
[05:18:54] if you like value and then you're like,
[05:18:56] bound to value,
[05:18:59] Basically, I don't...
[05:19:01] I think if this is how solid work by default, people would be like, what, how does this work?  Because the proper answer is you tell the end user,
[05:19:09] Thank you.
[05:19:10] to use prop.value, right? Because then,
[05:19:14] When you do this,
[05:19:15] Oh.
[05:19:16] Sorry, I'm going to plus it.
[05:19:17] Again, sorry.
[05:19:21] Because then it will work the way you expect it to.
[05:19:24] But just doing the value binding,
[05:19:29] would
[05:19:30] would essentially...
[05:19:32] Work like this.
[05:19:35] stop working the second you actually change the input.
[05:19:39] I don't know. I think the reason it's weird is because the value of,
[05:19:44] attribute maps to the default attribute value
[05:19:48] at prop.
[05:19:50] and the value prop
[05:19:52] doesn't have an attribute.
[05:19:58] Yeah, but I mean...
[05:20:01] Every...
[05:20:03] I was like,  this is what I was trying to figure out.  Like people who actually think like,
[05:20:09] Who in their right mind wants to know that this is how it works?
[05:20:15] Like, this is way closer than I expected.
[05:20:19] Lit works like that. Not a single other framework works this way.
[05:20:26] But the reason we're forced into this is because...
[05:20:30] uh
[05:20:31] At the same time.
[05:20:32] weird stuff like it's not weird it makes sense why forms have let's say a reset button
[05:20:37] But like,
[05:20:39] Picture.
[05:20:40] Picture this one, like what if,
[05:20:42] What if we just said,
[05:20:48] Thank you.
[05:20:49] Thank you.
[05:20:51] I mean, I guess we should have no expectation that state doesn't work.
[05:20:59] Yeah, I mean, I don't even...
[05:21:01] No.
[05:21:02] This is just, I'm just breaking things at this point.
[05:21:06] Thank you.
[05:21:06] I just like...
[05:21:08] considering the number of people who choke on solid using on input instead of on change,  I cannot picture the number of people who would choke on being like,
[05:21:16] on like, oh no, you have to use prop colon value  instead of just value here.  I like...
[05:21:23] But this is where things are at.  I just kind of wanted to put this out here.
[05:21:31] I there's a bunch of other special cases like values.  Like if you have ranges on inputs, if you set the value before the range,  the value doesn't come in like.
[05:21:39] within the range, you have to actually set the ranges like min and max before you set the value.  There's a bunch of special cases that we have to do around inputs anyways.  Even before you get to this, we actually pull values out into their own separate binding.  They don't get grouped.
[05:21:52] So,
[05:21:53] like,
[05:21:54] This is already a bit magical to compensate for weird discrepancies in the DOM.
[05:22:02] I think this is an interesting touch point though, as I said, like,
[05:22:06] this is kind of reflective of where the split is.  And I don't know where people sit on this.  I mean, clearly more people want to leverage their, their knowledge of the Dom here,  but I can't picture the average developer.
[05:22:21] wanting to like
[05:22:23] go, oh, right, yes, I was setting the attribute.  I need to actually use the value property.  Now, I found a view...
[05:22:31] gets around this a little bit because people use their model and angular they tend to use  the models which use property and if you just use the value directly it uses the attribute
[05:22:41] But obviously we don't have anything like two-way binding.  So we're not going to like default the attribute and then switch to property.  In fact, Tito's own framework also...
[05:22:51] uses like two-way binding.  So most of the time people are using this other syntax,
[05:22:56] But it seems interesting to me to like, you don't need to know about prop colon for anything else, except now you do your first input field and that's when you have to do it.
[05:23:05] I don't know. I these are the kind of things that keep these communities divided over kind of silly stuff like this, because the framework authors resent having to special case.
[05:23:16] and even more so for web components. This one, see, we can special case this one because we know  the input fields are weird.
[05:23:22] Like, we just know that.
[05:23:24] But,
[05:23:25] picture
[05:23:26] random web component someone makes.
[05:23:29] We don't know which stuff's weird.
[05:23:31] That being said, I think in general,
[05:23:33] Other than these special cases,
[05:23:35] the person we're taking in 2.0 of basically defaulting always to attributes and less explicit is probably the most sensible thing.  It gets rid of a bunch of extra checks and all these weird, like most of the other weird special casing around Web Components.
[05:23:49] Um,
[05:23:49] So,
[05:23:51] And another change that we're proposing for 2.0 is for Booleans.
[05:23:56] to...
[05:23:57] to actually require Boolean values.
[05:24:02] if you want them to show or hide, right?
[05:24:04] Like,
[05:24:05] like the string, like the difference between an attribute that takes a true string and an attribute that's an Boolean attribute that hides with false.
[05:24:13] I think that change in general will be good. We'll have to play with it and see what people think. But
[05:24:18] Sorry, where am I?
[05:24:20] uh
[05:24:23] I think this is...
[05:24:25] It's funny that
[05:24:27] We've been struggling with this stuff in the web development.
[05:24:30] community for like 15 years now and it's still
[05:24:33] It's interesting that this stuff kind of comes back to head because this is like,
[05:24:38] In 2010,
[05:24:39] over special casing value was just the obvious choice.
[05:24:42] And now it's like,
[05:24:44] Do you want to not special case it and push that responsibility onto users just to be more consistent to consider, you know,
[05:24:53] things like web components.
[05:24:55] 38% of people think so. So I've pollers here think so. So I don't know, it's interesting.
[05:25:04] Well, because...
[05:25:05] jQuery because most people
[05:25:10] Thank you.
[05:25:11] like most people aren't thinking about stuff at this level.  They just like bind up their stuff.  Like, as I said, in a lot of ways,
[05:25:18] Um,
[05:25:19] Where's the original version? Yeah. This state driven version.
[05:25:23] is just
[05:25:26] the most straightforward implementation.
[05:25:33] Because like,
[05:25:35] A lot of ways, this is the most straightforward act.  You saw a pure DOM thing,  but you know that this isn't going to scale  with your data set.
[05:25:41] So,
[05:25:41] The only thing that gets really weird is here,  like you notice actually have attribute value zero,
[05:25:46] I think it's because the default value,
[05:25:50] with that absent.
[05:25:54] Yeah, there's no default value. The reset button doesn't work properly.
[05:25:58] It sets the count.
[05:26:04] Yeah.
[05:26:08] Huh.
[05:26:09] I actually need to put the value on here.
[05:26:13] so that it has something to reset to.
[05:26:15] So,
[05:26:19] Yeah, I mean,
[05:26:22] it's interesting like you need to use both if you want to
[05:26:27] Yeah.
[05:26:28] So,
[05:26:33] Even though I'm handling the set,
[05:26:34] This is actually interesting because I'm handling the reset event.
[05:26:38] I wonder if I have to
[05:26:40] do this like
[05:26:44] I wonder if the trick here is to do prevent default.
[05:26:48] Thank you.
[05:26:50] And then I don't need it.
[05:26:54] I wouldn't say this is working exactly with the on default.
[05:26:58] Thank you.
[05:27:02] Would this fix it?
[05:27:06] Thank you.
[05:27:07] Yeah, there we go.
[05:27:14] Now I don't need the attribute.
[05:27:19] But at this point, it's like, why am I even using the reset event?  I could literally just...
[05:27:26] put on click on the button do you know what i mean
[05:27:31] Thank you.
[05:27:37] -
[05:27:38] Thank you.
[05:27:42] Yeah, the reason I had to do it as attribute here is because that value equals zero.  Solid actually does make it an attribute when there's nothing dynamic on it, I guess, which is an inconsistency.  But we can't use it because we already have value bound to count.  So, I mean, that's the argument.  It's like, how do you set a default?
[05:27:57] I guess the whole argument here is how do you, if you don't want to prevent default,
[05:28:02] And you don't have attribute this.  Because one of the cool things about Tito's PR  is that this attribute thing is gone.  We don't have anymore.  We just have prop.
[05:28:10] In order to get this behavior so it doesn't collision,  you'd have to do prop default.
[05:28:19] default value, I think.
[05:28:21] And then,
[05:28:25] Thank you.
[05:28:25] See if that works.
[05:28:29] Yeah, that works.
[05:28:31] Thank you.
[05:28:32] Of course, you could also just prevent default on the reset,  but if you want to use reset the way the browser intended, you would do this.  And honestly, I'm very tempted at this point that we should just,
[05:28:43] support default value as like if you're going to do value, then we have to support default value.  I'd rather people go from value and then realize they need default value. I think.
[05:28:52] than for people to
[05:28:54] like start
[05:28:56] realizing that they immediately need to do prop.value.
[05:29:00] And then,
[05:29:02] Yeah.
[05:29:05] This stuff is just weird, right?
[05:29:10] Thank you.
[05:29:11] Thank you.
[05:29:13] Thank you.
[05:29:17] Yeah, sorry. I noticed afterwards.
[05:29:21] I was just saying that like,
[05:29:23] for this to work.
[05:29:24] properly
[05:29:26] because you have a collision with the value name,  you'd have to do like this.
[05:29:33] We could also just get rid of the prop here for this.  I don't believe the namespaces should be used for
[05:29:38] anything but special cases, which makes it difficult to say that value
[05:29:44] shouldn't be a prop because
[05:29:48] If value is the attribute, what do you call the prop value without using a special case name?
[05:29:55] Yeah.
[05:29:57] Anyway.
[05:30:00] It's a topic.
[05:30:02] All right.
[05:30:04] I think that's it for me today.
[05:30:07] Other than what did you share fuzzy?
[05:30:09] Uh...
[05:30:10] Let me see.
[05:30:17] Can I use CSS attribute? Let me see.
[05:30:25] Not in Safari or Firefox.
[05:30:27] All right.
[05:30:54] Oh, interesting.
[05:30:55] I've seen this.
[05:31:00] Thank you.
[05:31:02] Yeah, so it says here to use it for non-string values,  including numbers and colors. That's cool.
[05:31:09] Anyway, um...
[05:31:13] I think that's it.
[05:31:17] The stream today. Yeah. How did we do? We did five hours, didn't we? Yeah. Five and a half hours. Okay.
[05:31:23] Yeah, long one.  Thanks for joining me.
[05:31:26] again like the video or if you can it definitely helps out um as i said not streaming this friday
[05:31:34] But September 5th, I should be back.  I believe Dylan...
[05:31:39] Piercy
[05:31:40] from Marco will be joining me.
[05:31:42] to talk about
[05:31:44] upcoming Marco.
[05:31:45] which is very exciting.
[05:31:47] Um,
[05:31:48] So I've been looking forward to talking about Marco.
[05:31:52] So,
[05:31:53] I hope to see everyone there.  You guys all have a great--
[05:31:58] long weekend coming up and,  uh,
[05:32:01] Till next time.