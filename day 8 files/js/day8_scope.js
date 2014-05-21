/**
 * Created by russayhernandez on 5/21/14.
 */
//russay hernandez
//WPF section 1
//scope

//variable scope
//variables inside and outside of a function


//we try not to use the same variable name/ but
//this is going to be inpossible in large files



//create a variable for width in our main code

var width = 5; //scoped outside of the function - "main code"


//create a function that clculates the perimiter of a triangle


function calcPeri(){


var heigth = 20

var width = 10 // this is coped to the function calcPeri
    console.log("inside "+width);
var perimeter = width*2 + heigth*2;
    console.log("inside of function, perimiter is "+perimeter)
//variabvle created in a function, cannot be accessed outside of a function



}
console.log("before call "+width);
calcPeri();
console.log("after call "+width);

//console.log("after call the perimeter is "+perimeter)
//cannot access a variable declared inside of a function;