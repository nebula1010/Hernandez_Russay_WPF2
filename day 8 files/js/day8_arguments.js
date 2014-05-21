/**
 * Created by russayhernandez on 5/21/14.
 */
//russay hernandez
//WPF section 1
//arguments


//arguments and paramiters

//arguments goes into functions

//parameters catch the arguments in the functions

//functions to calculate the area of a rectangle

function calcArea(w, h){//parameters go here

    //var width = 10;
    //var height = 20;
    //var area = width * height;
    var area = w * h;
    console.log(area);







}

//call the function

calcArea(10, 20);//arguments go here


function dogYears(humanAge){

    //imput a human year....spit out a dog year
    //dogYears = humanYears * 7

    //crrate a variable for dog yearws

    var dogAge = humanAge * 7;

    //print it out

    console.log("dog age is "+dogAge)






}

//call the dog function
var userImput = prompt("how old is your dog")
dogYears(userImput);