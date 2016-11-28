console.log('i am initialized');


// get the height and width of the page
var body = document.body;
var html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
    html.clientHeight, html.scrollHeight, html.offsetHeight );

console.log('the height is', height);


// define array of colors to use to create painting
var colors = ['blue', 'yellow', 'red'];


// for each pixel in the height of the page
//    get a random color (from the array)
//    paint a bar horizontally in that color

var lineEl = document.createElement("DIV");
lineEl.setAttribute("style", "height: 1px; background-color: blue;");
body.appendChild(lineEl);

