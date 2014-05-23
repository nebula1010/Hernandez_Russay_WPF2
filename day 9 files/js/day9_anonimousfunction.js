/**
 * Created by russayhernandez on 5/23/14.
 */
//Russay Hernandez
//WPF section 1

//anonymous functions are super important in object oriented programing
//exptremely popular in jQuery
//both regular and anonymous fuction will both work for you
//very quick and easy






//basic fuction structure
function functionName(){

}
//basic structure of an anonymous function



//declaring the anonym,ous function
var functionName2= function(){
    //code run
}

//this code still needs a function call to run
//you must declare an anonymous function before calling it


functionName2();


//normal function that calculates the area of a function

function trangleArea(b, h){
    //area of trangle .5 *h * b
    var area = .5 * b * h;
    return area;
}

//create a variable to catch return area
var  triArea = trangleArea(5,6);

console.log(triArea);

var trangleArea2 = function(b,h){
    var area = .5 * b * h;
    return area;




}
//function call to the anonymous function //create a variable to cathc the return
var triArea2 = trangleArea2(7,8);

console.log(triArea2);