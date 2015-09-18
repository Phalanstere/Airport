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

The **div** parameter refers to the id of the dom elemnents
The **textlist** parameter refers to the string array
The **speed** parameter - the duration of the change (in seconds)
The **speed_variation** parameter - to humanize the effect, a random factor between 0 and 1
The **delay** parameter - delay before the effect takes place
The **timeout** parameter - timeout, before the next item in the array gets processed,
The **offset** parameter - offset betwenn the indvidual letters (in pixels)



### Copyright

Copyright &copy; 2015. Phalanstere.