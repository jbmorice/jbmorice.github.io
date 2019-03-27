---
title: "Rendering Module"
order: 1
excerpt: "A simple ray-tracing rendering engine done as a school project."
header:
  teaser: /assets/images/projects/01_rendering_module/teaser.png
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
gallery:
  - url: /assets/images/projects/01_rendering_module/diffuse_box.png
    image_path: /assets/images/projects/01_rendering_module/diffuse_box.png
    title: "A box with fully diffuse floor, walls and ceiling, two cubes and a point light (36 triangles). Rendered with five ray bounces."
  - url: /assets/images/projects/01_rendering_module/diffuse_specular_box.png
    image_path: /assets/images/projects/01_rendering_module/diffuse_specular_box.png
    title: "A box with fully diffuse floor and ceiling, fully specular walls, two cubes and a point light (36 triangles). Rendered with five ray bounces."
  - url: /assets/images/projects/01_rendering_module/specular_box_5_bounces.png
    image_path: /assets/images/projects/01_rendering_module/specular_box_5_bounces.png
    title: "A box with fully specular floor walls and ceiling, two cubes and a point light (36 triangles). Rendered with five ray bounces."
  - url: /assets/images/projects/01_rendering_module/specular_box_10_bounces.png
    image_path: /assets/images/projects/01_rendering_module/specular_box_10_bounces.png
    title: "A box with fully specular floor walls and ceiling, two cubes and a point light (36 triangles). Rendered with ten ray bounces."
  - url: /assets/images/projects/01_rendering_module/guitar.png
    image_path: /assets/images/projects/01_rendering_module/guitar.png
    title: "A guitar model (45 399 triangles) and two point lights. Rendered with five ray bounces."
  - url: /assets/images/projects/01_rendering_module/robot.png
    image_path: /assets/images/projects/01_rendering_module/robot.png
    title: "A futuristic robot model (126 944 triangles) and a point light. Rendered with five ray bounces."
  - url: /assets/images/projects/01_rendering_module/tombstone.png
    image_path: /assets/images/projects/01_rendering_module/tombstone.png
    title: "A textured tombstone with leaves and moss growing over it (540 902 triangles) and a point light. Rendered with five ray bounces."
  - url: /assets/images/projects/01_rendering_module/medieval_town.png
    image_path: /assets/images/projects/01_rendering_module/medieval_town.png
    title: "A textured detailed medieval town (774 644 triangles) and a point light. Rendered with five ray bounces."
---

This project was carried out as the practical work part of the Rendering module taught during the second year of my engineering studies at ESIR. It was a pair project on which I worked on with [Kelig Perigault](https://www.linkedin.com/in/kelig-perigault/).

The goal of this project was to understand and implement the main parts of a ray-tracing rendering engine, as well as implementing several extensions to it. Such as normals interpolation, textures handling and implementing an acceleration structure ray-scene intersections.

For this project we were provided with an application framework which was already taking care of the loading of all the 3D models and the setting up of the scenes to be rendered, along with several helper classes (to help with maths and geometry).

We started with a fully diffuse scene, resembling a Cornell Box, and implemented a ray triangle intersection. Then, we handled diffuse lightning, and finally we generated shadow rays to compute shaded areas. After that, we changed scene for one with fully specular walls in order to implement specular reflections, handle the emissive material component, and finally address indirect lightning through specular reflection.

Then, since our ray tracing engine was quite slow (because for each ray sent we checked its intersection with every triangle of the scene), we implemented a bounding volume hierarchy (an axis-aligned bounding box tree) to speed up ray-scene intersection calculations, which gave us a massive performance boost. Finally, we added texture handling for materials along with normals interpolation, to give the rendered surfaces a smoother aspect.

You can check out our results on different test scenes in the following gallery.

**Warning :** You may notice several artifacts in these renderings which is quite normal since it is a very basic ray-tracing solution with no Monte-Carlo integration.
{: .notice--warning}

{% include gallery layout="half" caption="This is a sample of the images rendered with our ray-tracing rendering engine" %}