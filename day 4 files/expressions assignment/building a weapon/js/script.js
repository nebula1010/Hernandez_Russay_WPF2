/**
 * Created by russayhernandez on 5/12/14.
 */
//russay hernandez
//WPF section 1
// expression assignment
//building a weapon

// you are trying to build a weapon,or should i saw upgrade the one you have. you spent most of last night ordering parts and now you have
// everything you need to do so. assemble the weapon and see
// which parts you prefer and return the rest.

var originalParts = ["buttstock","barrel","upper receiver","lower receiver","iron sight"];
var newParts = ["hand guard","front pistol grip","ACOG scope","heat sink barrel","extended buttstock","cast barrel","long range scope","sling"]
console.log(originalParts);
console.log(newParts);

originalParts[5]="hand guard";
originalParts[6]="front pistol grip";
originalParts[4]="ACOG scope";
originalParts[1]="heat sink barrel";
originalParts[0]="extended buttstock";
var partPrices = [80,70,400,380,130,450,700,70];

var partsUnUsed = ["cast barrel","long range scope","sling"];
var sellPrices = [50,150,80];


//now you realized that you might be over budget. calculate the amount you spent on the modifications that you bought
//and subtract it from the parts you didnt use. also calculate the amount you will receive for the original parts that came
//with the weapon

var totalSpent = partPrices[0]+partPrices[1]+partPrices[2]+partPrices[3]+partPrices[4]+partPrices[5]+partPrices[6]+partPrices[7];
var afterPAR = totalSpent - partPrices[3]-partPrices[7]-partPrices[7];
var afterPareS = afterPAR + sellPrices[0]+sellPrices[1]+sellPrices[2];
console.log("After buying all the parts, i spent a total of $"+totalSpent+" but after returning the parts i didnt use, i " +
    "was left with $"+afterPAR+" once i sold the the original parts for the weapon, it increased to $"+afterPareS);

console.log(totalSpent);