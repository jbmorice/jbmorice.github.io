<a href="https://jbmorice.com/">
    <img src="assets/images/logo.png" alt="jbmorice.com logo" title="jbmorice.com" align="right" height="60" />
</a>

# jbmorice.github.io
![Website](https://img.shields.io/website/https/jbmorice.github.io.svg?down_message=is%20not%20reachable&label=jbmorice.github.io&up_message=is%20reachable)
![Website](https://img.shields.io/website/https/jbmorice.com.svg?down_message=is%20not%20reachable&label=jbmorice.com&up_message=is%20reachable)
![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m782708748-9ae50ad509947adc436907a4.svg)
[![GitHub license](https://img.shields.io/github/license/jbmorice/jbmorice.github.io.svg)](https://github.com/jbmorice/jbmorice.github.io)

My personal portfolio website. Created with the static website generator [Jekyll](https://jekyllrb.com/) (targeting the Github Pages environment), using the theme [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) (slightly customized for my needs) and hosted on [Github Pages](https://pages.github.com/).

## Features (i.e. theme customizations)

* A resume layout with configurable sections :
    * Banner section with customizable ID picture and background
    * Summary section with customizable text
    * Personal projects display section (based on a Jekyll collection named "projects")
    * Skill section with animated badges (with icons) sliding in
    * Education section
    * Experiences section with an animated timeline
    * Call for action/contact section
* A modified collection layout to sort collection posts in a user specified order

## Installation

If you want to run this project locally follow these instructions. If you are using Windows make sure that all the programs used are correctly setup in your PATH.

First, you will need to have Jekyll installed on your system, check out [their documentation](https://jekyllrb.com/docs/installation/) to install it. Then, open a terminal and do the following commands.

Clone this repository somewhere on your system :
```
git clone https://github.com/jbmorice/jbmorice.github.io.git
```

Step into the repository :
```
cd jbmorice.github.io.git
```

Fetch the bundled Ruby gems using Bundler :
```
bundler install
```

Run the following command to generate the website with Jekyll and launch a web server in your shell serving the website locally :
```
bundle exec jekyll serve
```

Go to the URL : `http://127.0.0.1:4000/` in your browser to see the website. All changes done to the project files while the server is running will trigger a rebuild and update what you see at this URL.

When you are done, press <kbd>CTRL</kbd> + <kbd>C</kbd> in your terminal to kill the server.

## Usage

> :warning: *Disclaimer : By no means am I a full fledged web developer or designer so things might be a bit messy here and there in this project. Use it at your own risk. If you found a mistake or something that could be done in a better, cleaner way, feel free to open an issue or submit a pull request.*

If you wish to use my resume template and/or the projects collection page in your own Jekyll website based on the Minimal Mistakes theme, follow the instructions below.

### Use the resume layout

* Copy and paste the `_includes/resume` folder into your `_includes` folder
* Copy and paste the `_layouts/resume.html` file into your `_layouts` folder
* Copy and paste the `assets/css` folder into your `assets` folder
* Copy and paste the `assets/fonts` folder into your `assets` folder
* Copy and paste the `assets/js` folder into your `assets` folder

Create a page with the `resume` layout to use it. Check the content of the `_pages/home.md` file to see how it is used.

### Use the custom order collection layout

* Copy and paste the `_includes/documents-collection.html` file into your `_includes` folder
* Copy and paste the `_layouts/collection.html` file into your `_layouts` folder

Now if you add the option `order: <value>` (replace *\<value\>* by an integer) to all the posts of the collection you want to sort and use the option `sort_by: order` in the corresponding collection display page, all the posts will be sorted according to their order value.

## Roadmap

I plan on adding a technical blog with articles on subjects I find interesting and that might useful to other people.

I will probably end up switching the whole website to Hugo sometime down the road, since I am not really happy the lack of multiple languages support on Jekyll for Github Pages and I would like to make this website fully available in english and in french.

## Support

If you found a mistake (typo, error in a blog post, etc.), something broken (dead-link, wrong picture, etc.) or if you tried to use a template and it did not work, or even if you think something could be done in a better/cleaner way, then feel free to open an issue or submit a pull request with a solution.

## Acknowledgments and attributions
* The Minimal Mistakes theme for Jekyll is copyrighted material owned by [Michael "mmistakes" Rose](https://github.com/mmistakes) and contributors.  It is hosted here : [https://github.com/mmistakes/minimal-mistakes](https://github.com/mmistakes/minimal-mistakes), and licensed under the [MIT License](https://github.com/mmistakes/minimal-mistakes/blob/master/LICENSE).
* The vertical timeline in the experiences sections of the resume layout is adapted from a CodyHouse Experiment made by [CodyHouse](https://codyhouse.co/) and is copyrighted material owned by Amber Creative Lab Ltd. It is hosted here : [https://github.com/CodyHouse/vertical-timeline](https://github.com/CodyHouse/vertical-timeline), and licensed under the [MIT License](https://codyhouse.co/license).
* Banner image in the home page from [Crytek Sponza scene rendered in Babylon.js](https://www.babylonjs.com/demos/sponza/)
* VR HMD timeline icon in the home page made by [Freepik](http://www.freepik.com) from [Flaticon](www.flaticon.com) is licensed by [Creative Commons BY 3.0](http://creativecommons.org/licenses/by/3.0/)
* Plane timeline icon in the home page made by [Dave Gandy](https://www.flaticon.com/authors/dave-gandy) from [Flaticon](www.flaticon.com) is licensed by [Creative Commons BY 3.0](http://creativecommons.org/licenses/by/3.0/)
* Milk bottle timeline icon in the home page made by [Freepik](http://www.freepik.com) from [Flaticon](www.flaticon.com) is licensed by [Creative Commons BY 3.0](http://creativecommons.org/licenses/by/3.0/)
* Vynil record timeline icon in the home page made by [Freepik](http://www.freepik.com) from [Flaticon](www.flaticon.com) is licensed by [Creative Commons BY 3.0](http://creativecommons.org/licenses/by/3.0/)

## License

This project and all the code snippets you might find in the articles are licensed under the [MIT License](LICENSE).
