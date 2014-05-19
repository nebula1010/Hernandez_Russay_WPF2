/**
 * Created by russayhernandez on 5/19/14.
 */
//alert("hello");

//basic wild loop
//wild loops loops through a block of code as long as the condition is true

//initialize the counter variable
var counter = 0;

//now we set up wild loop

while(counter<200){//condition- loops unitl false
    console.log("something just never end");
    //change the value of the counter variable
    //or it will run forever;;not good
    console.log("the counter is "+counter+"")
    counter++;

}
console.log("ending counter "+counter);

//do while loop
//this loop will run the code once to start, before checking if the condition is true
//then it will repeat as long as the condition stays true

//initialize the variable
var i=20;

//setup the do while loop

do{
    console.log("the number of i is "+i);
    //change the value of variable to avoid an infinite loop
    i++;

}while(i<10); //condition to test

console.log("the ending value of i is "+i);