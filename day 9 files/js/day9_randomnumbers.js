/**
 * Created by russayhernandez on 5/23/14.
 */
//Russay Hernandez
//WPF section 1
//random numbers


//alert("hello")

//create a function that will give us a random integer

function randomizer( mn,mx){//used peramiters

    //generate a random integer and return it back

    //create a variable to hold our random integer
    var randomNum = Math.round(Math.random() * (mx-mn)+mn);


//return the random integer
    return randomNum;






}


//cat user prompts to numbers
var minUser = Number(prompt("please insert a min value"));
var maxUser = Number(prompt("please insert a max value"));

//function call this randomizer
//need  variable to catch the return value
var result = randomizer(minUser, maxUser); //you need argunment

console.log(result);
for(var i = 0; i < 15; i++){
    //create a random integer
    console.log(result);
    //console.log(result); does not work

    //must function call to start the funtion
    console.log(randomizer(minUser,maxUser));
}



//math.round() = normal rounding
//math.ceil() = always rounds up 9.2 = 10
//math.floor = always rounds down