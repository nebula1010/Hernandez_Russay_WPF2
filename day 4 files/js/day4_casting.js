/**
 * Created by russayhernandez on 5/12/14.
 */
/*
russay hernandez
WPF section
day 4 casting variables
 */
//casting variables means treating one variable type like another
var stringVar = Number("6");
var result = 7+stringVar;
console.log(result);
//cast by wrapping the variable in the datatype you want in to be
//number(); - whatever is inside will be treated as number

//casting numbers as string variables
var areaCode = 407;
var firstPart= 203;
var secondPart= 4529;
//var phoneNumber = areaCode + firstPart + secondPart;
var phoneNumber = String(areaCode)+String(firstPart)+String(secondPart);
console.log(phoneNumber);

//prompting
//prompt returns string values
//sometimes the computer can figure out numbers, but usually not

var cupsHad = prompt("how many cups do you have?");
var cupsBought = prompt("how many cups are you going to buy?")

// total number of cups this person will have

//var totalCups = cupsHad + cupsBought;
var totalCups = Number(cupsHad) + Number(cupsBought);

console.log(totalCups);

//parsing integer
// looks through a text string and tries to find an integer
// only the frist number in a string is returned
//leading and trailing spaces are allowed
//if the first characted cannot be converted to a number , it will
//returna NaN - not  a number
//you are trying to use a non number in a math situation

//parseInt()
var a = parseInt("40 years old");
console.log(a);
var b = parseInt("he was 40 years old");
console.log(b);

