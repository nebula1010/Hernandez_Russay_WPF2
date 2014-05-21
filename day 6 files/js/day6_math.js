/**
 * Created by russayhernandez on 5/21/14.
 */
/*
 Russay Hernandez
 WPF Section 01
 Math Class
 */

//alert("It's alive!");

//Math.round()
//Normal Rounding . 5 goes up, less goes down
var num1 = 9.544;
console.log(num1);
console.log(Math.round(num1));

// Math.floor()
// Floor chops off all decimals and always rounds down.
var num2 = 6.9;
console.log(num2);
console.log(Math.floor(num2));

//Math.ceil()
//Always rounds up!
var num3 = 4.1;
console.log(num3);
console.log(Math.ceil(num3));


//Random Numbers
//Math.random()
//Gives a random number between 0 -> 1
var num4 = Math.random();
console.log(num4);

//random number between 0 -> 10
var num5 = Math.random()*10;
console.log(num5);

//random integer between 0 -> 100
var num6 = Math.round(Math.random()*100);
console.log(num6);

//Get a random integer between two numbers
//Math.random() * (max-min) + min

//integer between 50 -> 80
var num7 = Math.round(Math.random() * (30) + 50);
console.log(num7);


// Math Constant
// All Constants are CAPITAL letters
// Pi - 3.1425.......
//Math.PI

//Circumference of a circle
// 2* pi * radius
//radius is 1/2 diameter
//pi * d

var radius = Number(prompt("What is the radius of the circle?"));

var areaCircle = 2*Math.PI*radius;

// .toFixed(#of decimal places)
areaCircle = areaCircle.toFixed(2);

console.log(areaCircle);

//add descriptive text
console.log("The area of a cicle with a radius of "+radius+" is "+areaCircle +".");


