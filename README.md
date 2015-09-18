# Airport
> Airport font effect


## Features:

- An elegant Airport font effects


## Installation:

#### CDN

Include the following two lines in your `head` and you are ready to go:
```html

 <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
 <script src="lib/Airport.js"></script>
<link rel="stylesheet" type="text/css" href="css/Airport.css">


```
To create an Airport object you first define an array of strings, like this:


```html
var list = ["Boole", "Babbage", "Jacquard", "Frege"]; 
	
```

Then you define the parameters and invoke the object  

```html
	var obj = { 
			  div: "Airport",
			  textlist: list,	
			  speed: 1.6,  // in seconds
			  speed_variation: 0.12, 
			  delay: 0.1,	
			  timeout: 6200, // in milliseconds
			  percentage: 1, 
			  offset: 63, 
			  };
	
	
	var d = new Airport.Display(obj);
```	

The #div# parameters refers to the id of the dom elemnents




### Copyright

Copyright &copy; 2015. Phalanstere.