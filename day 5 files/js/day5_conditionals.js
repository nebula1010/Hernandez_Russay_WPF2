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


var kidHeight = 46;

var minHeight = 60;
var sneakerLift = 2;

if(kidHeight + sneakerLift>=minHeight){
    console.log("you can ride!!");
}else{
    console.log("sorry, not tall enough");
}
console.log("what comes after");