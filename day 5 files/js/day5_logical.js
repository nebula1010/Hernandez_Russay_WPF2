/**
 * Created by russayhernandez on 5/14/14.
 */
//russay hernandezWPF
//ection 1
//logical operators
// see if we can afford an ipad
// if the price of ipad is less than our budger
// and if our paycheck is over 600 dollars

var budget = 700;
var iPadPrice = 499.00;
var payCheck = 700;
//and &&- both must be true to be true
if (iPadPrice <= budget && payCheck > 600){
    //run if it is True
    console.log("you can buy the ipad");
}else{
    console.log("no ipad for you");
}

//can we buy a car
//if the price if the car is less than budget - buy the car!
// or if you win the lottery


var carPrices = 35000;
var carBudget = 12000;
var winLottery = true;
//or|| one or more of the pair must be true to be true

if (carPrices < carBudget || winLottery){
    console.log("buy the car");


}else{
    console.log("youre broke, no car for you");
}