/**
 * Created by russayhernandez on 5/12/14.
 */
//alert("hello");
/*
Russay Hernandez
WPF Section 1
Arrays
 */
avengersNames = ["hulk","iron man","capt america"];
//print out the whole array
console.log(avengersNames);
//access a specific item in the array
console.log(avengersNames[1]);
//sset the value of a specific value
avengersNames[0] = "black widow";
// print while array
console.log(avengersNames);
// add a new variable to the array
avengersNames[3] = "hawkeye";
avengersNames[4] = "scarlet witch";
avengersNames[5] = "quick silver";
avengersNames[6] = "she hulk";
console.log(avengersNames);
//fighure out how long the array is?
//length property of array
// to access a property of attribute of a variable
//use dot syntax
console.log(avengersNames.length);

//index number of the last item in an array
// is one less than the length of the array
//create a variable to find out the last item
var newestRecruit = avengersNames.length - 1;
//gives us the index number of the last item in array

////print out the newest avengers
console.log("welcome " + avengersNames[newestRecruit]+" you are the newest avenger");

// pick oranges
// create an array to hold the number of oranges we pick each day
var orangesPicks = [9000, 30, 35000];
//averages amount of oranges picked in a day
// add all 3 days then divide by # of days
// create variable to hold the total number of oranges
var total = orangesPicks[0] + orangesPicks[1] + orangesPicks[2];
// create a variable for total number of days

console.log(total);
var totalDays = orangesPicks.length;
console.log(totalDays);

//create a variable to hold the average per day
var average = total/totalDays;
console.log(average);
console.log("the average amount of oranges picked is "+average+" per day")
