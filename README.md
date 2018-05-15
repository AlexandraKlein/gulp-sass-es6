# ES6 + Babel + Gulp + ExpressJS Boilerplate
> A boilerplate for developing ES6 web apps using Babel, Gulp & ExpressJS.

## Babel

Babel is a compiler for writing next generation JavaScript. [babeljs.io](https://babeljs.io/)

## Technology Stack

- Transpiles ES6+ using [Babel](https://babeljs.io/) and [Browserify](http://browserify.org/)
- SASS compilation using [gulp-sass](https://github.com/dlmanning/gulp-sass)
- Local development environment with [ExpressJS](https://github.com/expressjs/express) & [node-livereload](https://github.com/napcs/node-livereload) using [gulp-livereload](https://github.com/vohof/gulp-livereload)

## Usage

2. Run `npm install` in the root directory to install all dependencies
3. Run `gulp watch` to set up watches for the development environment
4. Run `npm start` to start the local dev server using ExpressJS

## Building

Run `gulp build` to build the app for distribution in the `dist` folder.