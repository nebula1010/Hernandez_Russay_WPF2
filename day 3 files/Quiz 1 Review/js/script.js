/**
 * Created by russayhernandez on 5/12/14.
 */
console.log("hello");
//alert("hello")
var slices = 12
var pizzas = 6
var people = 20
var slicesPerPerson = (slices * pizzas) / people;
console.log("each person ate "+slicesPerPerson+" slices of pizza at the party");
var totalSlices = slices * pizzas;
var sparkySlices = totalSlices % people;
console.log("sparky got "+sparkySlices+" slices of pizzas")

var week1 = 40;
var week2 = 34;
var week3 = 45;
var week4 = 40;
var week5 = 40;
var totalSpent = week1 + week2 + week3 + week4 + week5;
var averageSpent = totalSpent / 5;
console.log("you have spent a total of $"+totalSpent+" on groceries over 5 weeks. that is an average of $"+averageSpent+" per week");
