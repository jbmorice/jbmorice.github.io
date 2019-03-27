---
title: "Long Live The King"
order: 3
excerpt: "A real-time strategy game prototype done as a school project."
header:
  teaser: /assets/images/projects/03_long_live_the_king/teaser.jpg
sidebar:
  - title: "Responsibilities"
    text: "Software Architecture, Gameplay Development, DevOps"
  - title: "Engine"
    text: "Unity"
  - title: "Language"
    text: "C#"
  - title: "Tools"
    text: "Visual Studio, Git"
  - title: "Duration"
    text: "Around 28 hours of practical work"
---

This project was carried out as a group project for the Video-Games module taught during the third year of my engineering studies at ESIR. The group was composed of three people : [Kelig Perigault](https://www.linkedin.com/in/kelig-perigault/), [Guillaume Versal](https://www.linkedin.com/in/guillaume-versal-54175abb/) and myself.

The goal of this project was to design and develop a video game prototype of our own invention. We had complete freedom regarding the kind of game we wanted to make and the technologies and tools we wanted to use. After some brainstorming we came up with the following concept for a game that we named : "Long Live The King !".

This game prototype was selected by our teachers to be presented to the public during the following open-door days of our engineering school.

## Game concept

> "King Leo I, the lion king, is dead. The animal kingdom is in turmoil and a civil war is on the verge of breaking out. All the little lords who had coveted the throne for years are now preparing to wage war upon their rivals, ready to assert their right to the throne. They will not hesitate to use their greatest strategies, their most vile tricks and their most powerful magic spells to win the final battle and become king!"

Our goal was to develop a fast paced real-time strategy game based on cities, producing soldiers, spread around a map and linked by roads between which the players can send armies and try to take the enemy cities. All of this set in a world populated by factions of anthropomorphic animals.

This idea has been strongly influenced by games like [Civilization Wars, developed by Cave Of Wonders Studios](http://www.cawogames.com/) and [available on Kongregate](https://www.kongregate.com/games/tjcarlos/civilizations-wars), [Mushroom Wars, developed by Zillion Whales](http://mushroomwars2.com/voyna-gribov-original/), along with fictional worlds like those of [Armello, developed by League of Geeks](https://armello.com/), and [Redwall's short stories written by Brian Jacques](http://www.redwallabbey.com/).

## Gameplay

Here is a video showing a game of our prototype.

{% include video id="6vH1-SMIzAs" provider="youtube" %}

This game is a real-time strategy game where two or more players, represented by animal kingdoms, compete on a map which contains multiple cities linked by roads. Their goal is to extend their influence on the map by capturing cities with their armies. A player wins the game when he captures all the cities owned by his opponents or kill their kings. A game is played as described below.

You start a game with only one city belonging to your kingdom. This city has a population which increases over time up to a fixed maximum level. You can send an army from this city to a nearby city by clicking and dragging from your city to the targeted one. Doing this will create an army containing half the city population which will then begin to march along the road towards the selected city.

<figure>
	<a href="/assets/images/projects/03_long_live_the_king/send_army.gif" title="">
    <img src="/assets/images/projects/03_long_live_the_king/send_army.gif">
  </a>
	<figcaption>
    Here the player waits for its starting city population to grow and then uses it to send an army on a nearby neutral city.
  </figcaption>
</figure>

If your army encounter an enemy on this path the two armies will stop and fight until only one remains standing. During the fight, both armies numbers decrease over time until one is left with no soldiers. The winner will continue its movement toward its destination. If the fight does not turn in your favor, you can send an other army from a town behind your army and it will add itself, as reinforcements, to your current fighting force.

<figure>
	<a href="/assets/images/projects/03_long_live_the_king/army_fight.gif" title="">
    <img src="/assets/images/projects/03_long_live_the_king/army_fight.gif">
  </a>
	<figcaption>
    Here the player tries to intercept an incoming enemy army and loses.
  </figcaption>
</figure>

Once your army reaches the enemy town a siege will begin. A siege is conducted in the same way as a battle between armies, except that the besieged city has an advantage over its attackers. If the city has different access points you can besiege it from each and every one of them. If you lose the siege your army is destroyed and the city remains owned by the enemy kingdom, and if you win the remaining forces of your army will enter the city and it will be yours.

<figure>
	<a href="/assets/images/projects/03_long_live_the_king/siege.gif" title="">
    <img src="/assets/images/projects/03_long_live_the_king/siege.gif">
  </a>
	<figcaption>
    Here the player besiege a neutral city from two roads and wins it.
  </figcaption>
</figure>

I mentioned earlier that a city has a fixed maximum amount of population, however it is possible to exceed this number (for example by moving an army from one of your neighboring cities to this city). When this maximum threshold is exceeded, the city will enter a period of famine, and its population will begin to decline slowly over time until it falls back to its maximum population level. This gameplay mechanism allows you, for example, to prepare a large-scale attack on an enemy city by gathering a large number of troops in nearby town and unleashing them all at once on the enemy. But you will have to be fast and organized, or risk losing a large number of soldiers due to famine.

<figure>
	<a href="/assets/images/projects/03_long_live_the_king/famine.gif" title="">
    <img src="/assets/images/projects/03_long_live_the_king/famine.gif">
  </a>
	<figcaption>
    Here the player sends an army to one of its city which is already at max capacity, causing a famine.
  </figcaption>
</figure>

You also have another game mechanism at your disposal: your king. It begins the game in your starting city and its presence is symbolized by a crown floating above the city. Its presence offers the city a gain in economic activity and allows it to welcome more inhabitants, meaning its maximum population is increased. The king can be moved between cities belonging the kingdom, thus moving his maximum population bonus with him. However, if he is attacked by an enemy army during a movement, or if the city in which he is located is taken by the enemy, your king is immediately captured and killed causing you to lose the game. You must therefore use your king sparingly and make sure to protect it at all times during the game.

<figure>
	<a href="/assets/images/projects/03_long_live_the_king/king.gif" title="">
    <img src="/assets/images/projects/03_long_live_the_king/king.gif">
  </a>
	<figcaption>
    Here the player move its king between two of its cities, causing the modification of the maximum population level of these cities.
  </figcaption>
</figure>

## Development

Before we started the development we began by fleshing out a class diagram in UML. We decided to use a system of "Agents" representing active pieces of gameplay, these agents can be supplied with "Behaviors", which are basically finite state machines ticking over time, which are able to modify the agent inner state. For example, the "famine" gameplay mechanic is implemented by adding a "PopulationDecreaseBehavior" behavior to the "CityAgent" when the population exceeds the limit and removing it when it goes back into range, the king bonus is also a behavior placed on the city it is in, etc.

<figure>
	<a href="/assets/images/projects/03_long_live_the_king/uml.png" title="Early development UML class diagram">
    <img src="/assets/images/projects/03_long_live_the_king/uml.png">
  </a>
	<figcaption>
    An example of an UML class diagram we made in the early stages of planning our software architecture.
  </figcaption>
</figure>

We organized our work through a remote Git repository hosted on GitHub and divided the workload into two big milestones : the purpose of the first one was "having all the core code structure and gameplay mechanics layed out" and the second one being "integrate graphics and user experience". Since we did not have a graphics designer on the team we had to rely on free and royalty-free assets to customize our game to our liking.

## Future work

We invested a lot of time and effort in this project, so we would like to continue it. We have plenty of ideas to improve the gameplay and advance to a full-fledged game and we are currently working on it, so stay tuned !