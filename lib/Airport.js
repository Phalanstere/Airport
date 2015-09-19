/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ /*global define */
/*global $, jQuery, alert, console, TimelineMax, Sine, Bounce */
var Airport = {};

var TIMELINE;

Airport.Token = function(str, id, parent) {
    "use strict";
    var self = this;
    this.id = id;  
    this.orig = str;  
    this.line = [];


    this.randomized = false;
    
    this.animate = function() {
    var i, strip, tl, ident, el, el2, height, delay, speed, classname, pos;
    if (self.line.length > 0)
        { 
        ident = parent.div + "tkl_" + id;
         
        classname = "token_line";
            
        strip = '<span id = "' + ident + '" class = "' + classname + '">';    
        for (i = 0; i < self.line.length; i+=1)
            {
            strip += self.line[i] + '<br>';    
            }    
        strip += '</span>';
        
        $("#" + parent.div + " #token" + self.id).html(strip);
        
        
        height = $("#" + ident).css("height");
        height = parseInt(height, 10)*0.91;
        height*= -1;


        pos = $("#" + ident).css("top");
        // factor 0.01

        tl = new TimelineMax({  });
       
        el = document.getElementById(ident);
       
        delay = Math.random() * parent.delay/4 + parent.delay*0.75;
        speed = parent.speed;
        
  
        tl.pause();
        
        tl.to(el, 0, {
                     top: 0,
                     opacity: 1
                     }, 0 );
        
        
        
        
        tl.to(el, 3.2, {
                     top: height-5,
                     opacity: 1,
                     // ease:Bounce.easeIn
                     ease:Sine.easeOut
                     }, delay );

        tl.to(el, 0.3, {
                     top: height,
                     opacity: 1,
                    
                     ease:Bounce.easeOut
                     }, "start" );   


        tl.play();

      
        
        }
        
    };


    this.sequence = function(percentage){
           
    self.line = [];       
             
    var temp,i, x, y, z, offset, exception = false;
    if (str === " " || str === "." || str === "," || str === "&")  { exception = true; }
    
    temp = Math.random();
    if (temp < percentage && exception === false) 
        {
        self.randomized = true;
        x = self.orig.charCodeAt(0);
        if (x < 112) { offset = 10; }
        else         { offset = -10;}
        
        if (offset > 0)
            {
            for (i = x+offset; i > x; i-=1) {
                temp = String.fromCharCode(i);
                self.line.push(temp);
                }
            self.line.push(str);
            }

         if (offset < 0)
            {
            for (i = x+offset; i < x; i+=1) {
                temp = String.fromCharCode(i);
                self.line.push(temp);
                }            
            self.line.push(str);
            }
          
   
        }   
   
    };
};



Airport.Phrase = function(str, id, percentage, parent) {
  "use strict";
  var self = this;
  this.parent = parent;
  this.id = id;
  
  
  this.tokens = [];
  
  this.shuffle = function() {
    var i;  
    for (i = 0; i < self.tokens.length; i+=1) {
        self.tokens[i].sequence(percentage);    
        }
  };
  
  this.animate = function()
    {      
    var i, temp;
    for (i = 0; i < self.tokens.length; i+=1)
        {    
        // alert("tk");    
        self.tokens[i].animate();   
        }   
    }; 
  
  this.init = function(){
    var i, temp;
    for(i = 0; i < str.length; i+=1) {
        temp = new Airport.Token(str[i], i, parent);
        self.tokens.push(temp);    
        }
     };
  
  self.init();
    
};



Airport.Display = function(obj) {
 "use strict";   
 var self = this;   
 this.id = null;
 this.phrases = [];
 
 this.actual  = 0;
 
 this.delay = obj.delay;
 this.speed = obj.speed;
 
 if (obj.style) { this.style = obj.style; }
 
 
 this.paint_string = function(id)
    {
    var i, ident, style, text, str="", classname = "token", offset;
    
    text = obj.textlist[id];
    
    offset = 70;  // war 70
    if (obj.offset) { offset = obj.offset; }
    
    for (i = 0; i < text.length; i+=1) {
        style = 'style = "left: ' + i * offset + 'px"'; 
        
        ident = "token" + i;
        
        if (self.style) { classname = self.div + "_" + "token"; } 
        
        str += '<span class = "' + classname + '"  id = "' +  ident + '" ' + style + '">' + text[i] + '</span>';    
        }    
        
    $("#" + obj.div).html(str);

    
    if (obj.callback_start) {  obj.callback_start.call(this, obj, text);   }
    
    };
 
 
 // evtl. überflüssig
 this.loop = function() {
     window.setTimeout(self.loop, 200);  
 };
 
 
 this.animate = function() {
   var s;  
     
   if (self.actual < self.phrases.length)
    {
    self.paint_string(self.actual);
    self.phrases[self.actual].shuffle();  // Hier wird gemischt    
    self.phrases[self.actual].animate();
        
    self.actual += 1;
    window.setTimeout(self.animate, obj.timeout);  
    }
  else { 
       self.actual = 0; 
       
       self.paint_string(self.actual);
       self.phrases[self.actual].animate();
       window.setTimeout(self.animate, obj.timeout); 
       }
     
 };
 
 
 this.create_phrases = function() {
    var i, temp;
    for (i = 0; i < obj.textlist.length; i+=1) {
      temp = new Airport.Phrase(obj.textlist[i], i, obj.percentage, this);
      // temp.shuffle();
      self.phrases.push(temp);
      
    }
 };
 
 
 this.init = function(){ 
   self.create_phrases(); 
   self.div = obj.div;
      
   if (! obj.div) {
        alert("kein DIV");    
        }  
   else {
        self.paint_string(0);
        }
        
   self.animate();     
   };
    
self.init();    
    
};

