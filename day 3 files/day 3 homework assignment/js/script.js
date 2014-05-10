/*Russay Hernandez
Day 3 Homework assignment
 */

//PROBLEM 1
var slices = 12;
var pizzas = 6;
var people = 14;
var totalSlices = slices * pizzas;//i added a new variable which is the product of slices&pizzas
var slicesPerPerson = totalSlices/people;//the total slices devided by how many people there are gives me the amount
//per person
console.log("each person ate "+slicesPerPerson+" slices of pizza at the party"); //ensure that when adding a variable
//inside a string you put _"+variable+"_
var sparkySlices = totalSlices % people; //to find the remeinder i took the total slices and devided it by how many
//people there were. giving me a remeinder of 2
console.log("sparky got "+sparkySlices+" slices of pizza");

//PROBLEM 2
var week1=45;
var week2=55;
var week3=50;
var week4=40;
var week5=50;
var totalSpent = week1+week2+week3+week4+week5;
var average = totalSpent / 5;
console.log("you have spent a total of "+totalSpent+" on groceries over 5 weeks. That is an average of $"+average+" per week");


var originalPrice = 100;
var discountPercent = 15;
var converted = originalPrice - (originalPrice * (discountPercent  * .0100));
var salesTax = 6;
var priceWithTax = converted + (converted * (salesTax * .0100))
console.log("your game was originally $"+originalPrice+" ,but after a "+discountPercent+"% discount, it is now $"+converted+" without " +
    "tax, and $"+priceWithTax+" with tax");
