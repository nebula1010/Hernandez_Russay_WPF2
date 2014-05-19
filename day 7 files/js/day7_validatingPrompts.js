/**
 * Created by russayhernandez on 5/19/14.
 */
//russay hernandez
//WPF section one
//validating prompts

//as the user for a min and max number
//create a random number in between those 2 numbers
alert("lets find a random number bwetween two numbers");
var min = prompt("please type in a minmum number");
var max = Number(prompt("please type in a maximum number"));

if(min===""){
    console.log("inside of empty string minif statement");
    min = prompt("dont leave it blank give me a number ")

}

//in NaN()
//if its a number returns false
//text string returns true
console.log(isNaN(max));

if (isNaN(max)){
    //will run if its true
    //text string return true
}

//math.random()*(max-min)+min;
//generate a random integer
var randomNumber = Math.round(Math.random()*(max-min)+min);
console.log("your random number is "+randomNumber);