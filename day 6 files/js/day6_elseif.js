/**
 * Created by russayhernandez on 5/21/14.
 */
/*
 Russay Hernandez
 WPF Section 01
 Else If Statement
 */

//alert("My Day 6 Files Are Setup Properly!");

//Testing Steak Temperatures

/*
 under 120 is uncooked
 120-124 Steak is Rare
 125-129 Steak is Medium-Rare
 130-139 Steak is Medium
 140-149 Steak is Medium-Well
 150-165 Steak Is Well Done
 Anything above 165 is BURNT!
 */

//Create a variable for the steak temp
//var steakTemp = 135;
//Cast the variable as a number
var steakTemp = Number(prompt("What temp is your steak?"));

if(steakTemp<120){
    console.log("Steak is uncooked! Might be still mooing!");
}else if(steakTemp<125){
    console.log("Steak is cooked Rare!");
}else if(steakTemp<130){
    console.log("Steak is Medium-Rare!");
}else if(steakTemp<140){
    console.log("Steak is Medium!");
}else if(steakTemp<150){
    console.log("Steak is Medium - Well!");
}else if(steakTemp<=165){
    console.log("Steak is Well Done!");
}else{
    console.log("Steak is Burnt To A Crisp!");
}
