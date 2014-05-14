/**
 * Created by russayhernandez on 5/14/14.
 */
//Russay Hernandez
//WPF Section 1
//basic conditionals
// if statement ---
//if a child is tall enough, print to the console that he can ride a roller coster
var tallEnough = true;

/*
if(thing to evaluate){
code to run if it is true!
}
 */
if(tallEnough){
    //this code will run if the kid is tall enough
    console.log("you can ride the roller coster");

} else {
    //code eill ruin if the kid is not tall
    console.log("sorry kid isnt tall enoguh");
}
console.log("what comes after");


//relational expression
// if a child is not over 30 inches long then he cant ride


var kidHeight = 50;

var minHeight = 48;
var wParentHeight = 45;

if(kidHeight>=minHeight){
    console.log("you can ride!!");
}else if(kidHeight >= wParentHeight){

console.log("you can ride with a parent");
}else {
    console.log("no riding");
}


//if the child is 48 inches or taller he can ride the coaster
//if the child is riding with a parent, then he can
// ber 45 tall. anything smaller than thant, no riding