---
title: 'NBA Project Blog #1: Brainstorming and Core Concepts'
date: '2024-02-27'
---

A great piece of advice I once received was to make any side project you do align closely with your interests. An old project I did was [Road to Orion](https://roadtoorion.web.app/), which was for Call of Duty: Modern Warfare II. That site will probably get its own blog post eventually, but in short: it was a site to track the progress of obtaining weapon camoflages in the game. The final camo you obtained by getting all the others was called Orion, thus the site name. Wanting a tool to track my progress motivated me to work on the site.

Now, did you know the official NBA site has a new section called NBA Play? It was launched back in January, and features a variety of games you can play that update every day. As an NBA fan, it pleased me, but as a developer, it left a lot to be desired.

/nbaplay.png

*Above: The NBA Play homepage. Below: The Full Court Guess game, where you're provided 3 clues about a player and have to guess them in five tries.*

/fullcourtguess.png

Not only does it not actually update every day, but the difficulty can be very easy. 2015 Finals MVP mentioned, Iguodala came to mind instantly in the picture above. I like some of the games on NBA Play, but you can't play forever, and you can't turn up the difficulty. These faults started juicing the gears in my head to make my own project. But first, let's look at another successful site to clue us in on what a good NBA web game could be:

/poetl.png

*Above: A completed round of Poetl, a web game officially approved by the National Basketball Players Association.*

Poetl is closer to what I wanted out of an NBA web game. Unlike NBA Play, it actually does update daily, and is much richer than a game of Full Court Guess. The round pictured above took me ten minutes of sorting my brain out and consulting friends. You unveil the clues as you go, so the game starts out with the difficulty I wanted, but still allotted 8 guesses that can let even less experienced players win. It also features a much more busy and pleasing design than NBA Play, and great styling that makes each guess pop out of the page. The only detraction I can make from the site is that you can't play previous games, and you can't play forever! That's a great problem to have with your game.

There's obviously a great number of other fanmade games. There's a quite popular one called HoopGrids, where you guess players that categories in a grid chart. Another popular game done on Youtube involves just looking at career pages on Basketball Reference and trying to figure out who it is based on things like awards they receieved, the teams they were on, their stats, etc. That also gave me a bit of inspiration, and could present a programming challenge to use an API to fetch that information remotely.

/bbreference.png

*Above: a Basketball Reference player page, cropped to just their career statistics.

Let's take some core ideas so far and try to list things that can make this project stand on it's own compared to these other games.

### Things we want
- Difficult, but also forgiving like Poetl
- Multiple games, like NBA Play
- Implement statistics into the games, with API fetching
- The ability to play forever, or at least be able to play past days

### Things we don't want
- Games being too easy
- To include ALL NBA players, only current players.

Come back when part 2 is released, where I'll be constructing the core design of the project, tech-wise and game-wise.