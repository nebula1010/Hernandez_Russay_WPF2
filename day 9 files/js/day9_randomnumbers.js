/**
 * Created by russayhernandez on 5/23/14.
 */
//Russay Hernandez
//WPF section 1
//random numbers


//alert("hello")

//create a function that will give us a random integer

function randomizer(mn,mx ){//used peramiters

    //generate a random integer and return it back

    //create a variable to hold our random integer
    var randomNum = Math.round(Math.random() * (mx-mn)+mn);


//return the random integer
    return randomNum;






}



var minUser = prompt("please insert a max value");
var maxUser = prompt("please insert a max value")

//function call this randomizer
//need  variable to catch the return value
var result = randomizer(20,100); //you need argunment

console.log(result)









//math.round() = normal rounding
//math.ceil() = always rounds up 9.2 = 10
//math.floor = always rounds down