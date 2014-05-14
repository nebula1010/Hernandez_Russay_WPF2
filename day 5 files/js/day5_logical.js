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