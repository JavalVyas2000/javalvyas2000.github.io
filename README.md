# Personal Portfolio of Projects
Hosted at [https://javalvyas2000.github.io/](https://javalvyas2000.github.io/)
### Navigation
User UI -> _config.yml

Intro Page Update -> _pages/about.md -> Add required data

Available Pages -> _data/navigation.yml -> Update the file with relevant headers

Update Projects -> _pages/projects_and_publications.md -> Get template and add project data

Resume Update -> files/Resume_Javal.pdf -> Update the file in the folder with the same name


A Github Pages template for academic websites. This was forked (then detached) by [Stuart Geiger](https://github.com/staeiou) from the [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/), which is © 2016 Michael Rose and released under the MIT License. See LICENSE.md.

I
## To run locally (not on GitHub Pages, to serve on your own computer)

1. Clone the repository and made updates as detailed above
1. Make sure you have ruby-dev, bundler, and nodejs installed: `sudo apt install ruby-dev ruby-bundler nodejs`
1. Run `bundle clean` to clean up the directory (no need to run `--force`)
1. Run `bundle install` to install ruby dependencies. If you get errors, delete Gemfile.lock and try again.
1. Run `bundle exec jekyll serve` to generate the HTML and serve it from `localhost:4000` the local server will automatically rebuild and refresh the pages on change.

