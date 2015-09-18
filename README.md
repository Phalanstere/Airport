# Airport
> Airport font effect


## Features:

- An elegant Airport font effects


## Getting Started

Create a quiz on on the [QAlity Frontend](http://qality.philipp-burckhardt.com/),
grab the created JavaScript object and insert on your page via one of the following options.

## Installation:

#### CDN

Include the following two lines in your `head` and you are ready to go:
```html

 <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
 <script src="lib/Airport.js"></script>
<link rel="stylesheet" type="text/css" href="css/Airport.css">


To create an Airport object you first define an array of strings, like this_

```
var list = ["Boole", "Babbage", "Jacquard", "Frege"]; 
	
```

To render your own quiz, replace the first argument passed to the `QAlity` function.  

#### npm

```bash
npm install qality
```

Use [browserify](https://github.com/substack/node-browserify) and render a quiz with only a few lines:

```javascript
var QAlity = require( 'qality' );

new QAlity(<qa object>, {
  "div":"<div to render to>"
}, <optional callback>);
```

#### bower

```
bower install qality
```

Require the necessary files in your `index.html` document:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Load QA Reader, which exposes constructor function QAlity to the window object -->
    <script src="bower_components/qality/dist/QAreader.min.js"></script>
    <!-- Load the standard CSS or provide your own -->
    <link href="bower_components/qality/css/exam.css" media="screen"
      rel="stylesheet" type="text/css"/>
  </head>
  <body>
    <!-- your code comes here -->
  </body>
</html>
```

## Usage:

### Running the Editor

A hosted version of the editor is accessible under the following link: [QAlity Frontend](http://qality.philipp-burckhardt.com/).

<img src="http://burckhardt.ludicmedia.de/Quiz01.png">

To run your own version, clone this repository and run

```bash
make build
```

to compile the JavaScript necessary for running the frontend. The command

```bash
make server
```

starts a server at port 8000 and should automatically open the frontend in a browser.

### API

## Tests:

Run tests via the command `npm test`

---
### License

[MIT](http://opensource.org/licenses/MIT)

### Icon Credits

- "Wrench" by Calvin Goodman
- "Network" by José Campos
- "Survey" by Ann Fandrey
- "Close" by Mateo Zlatar
- "Play" by Mike Rowe
- "Add" by Vittorio Maria Vecchi
- "Upload" by Thomas Le Bas
- "Text" by Zyad Basheer
- "Survey" by Icons8
- "Marker" by Anton Gajdosik
- "Box" by Arthur Schmitt

[npm-image]: https://badge.fury.io/js/qality.svg
[npm-url]: http://badge.fury.io/js/qality

[bower-image]:  https://img.shields.io/bower/v/qality.svg
[bower-url]: https://github.com/Planeshifter/qality.js.git

[travis-image]: https://travis-ci.org/Planeshifter/qality.js.svg
[travis-url]: https://travis-ci.org/Planeshifter/qality.js

[dependencies-image]: http://img.shields.io/david/Planeshifter/qality.js.svg
[dependencies-url]: https://david-dm.org/Planeshifter/qality.js

### Copyright

Copyright &copy; 2015. Philipp Burckhardt.