---
title: "Advanced Rendering Module"
order: 2
excerpt: "Several animation related algorithms implementations (scene graph, inverse kinematic, spring-mass system) done as a school project."
header:
  teaser: /assets/images/projects/02_advanced_rendering_module/teaser.png
sidebar:
  - title: "Responsibilities"
    text: "Software Development, Software Architecture"
  - title: "Platform"
    text: "Windows"
  - title: "Language"
    text: "C++"
  - title: "Tools"
    text: "Visual Studio"
  - title: "Duration"
    text: "Around 12 hours of practical work"
---

This project was carried out as the practical work part of the Advanced Rendering module taught during the second year of my engineering studies at ESIR. It was a pair project on which I worked on with [Kelig Perigault](https://www.linkedin.com/in/kelig-perigault/). This project was structured in three parts: the first was to create and animate an object using a scene graph, the second was to implement an inverse kinematics algorithm to control an articulated arm, and the final part was to build a spring-mass system to simulate the movements of a patch of fabric.

## Scene Graph and First Animations

This part consisted of creating a butterfly-like "insect" using the scene graph, then animating it to simulate a wing flapping. Next, we were tasked to animate its movement by making it follow a trajectory by developing and using a cubic Hermite spline interpolator, while correctly adjusting its speed and orientation in relation to its current trajectory.

Watch the video below for a demonstration of this "flying insect" animation.

{% include video id="BDDdwtv1Jfs" provider="youtube" %}

## Inverse Kinematic

For this part we created a poly-articulated chain that we added to the scene graph. This chain is represented by a series of cylinders of 0.1 radius and 0.5 height connected by joints represented by spheres of radius 0.2. Each joint has one rotation along its local X axis and one rotation along its local Z axis, i. e. two degrees of freedom. Then we implemented the cyclic coordinate descent algorithm to solve the inverse kinematic equation, in order to be able to point the end of our poly-articulated chain towards a point in 3D space. The result of the calculation is displayed at each iteration of the algorithm until it converges.

Watch the video below for a demonstration of the **inverse kinematic implementation** applied to a five segment long fixed arm with four articulations allowing two degrees of freedom.

{% include video id="x5xePi4o7xQ" provider="youtube" %}

## Spring-Mass System

For this project we had to create and configure a simulation system to calculate the positions of a spring-mass system according to the different forces and constraints it is being subjected to. In this system, we modeled the force of gravity, the binding force of the springs and a damping force to stabilize the system. We also added the ability to specify constraints to masses in order to anchor their position in space or to simulate a collision with another geometry. This physical simulation system is updated at each iteration of the program's main loop and the results it provides are applied to a corresponding visual representation in the scene graph, namely a mesh whose vertices are displaced.

Watch the video below for a demonstration of this spring-mass system simulating a cloth being dropped on a sphere with its four extremities released successively.

{% include video id="-fVkmN6LKDg" provider="youtube" %}