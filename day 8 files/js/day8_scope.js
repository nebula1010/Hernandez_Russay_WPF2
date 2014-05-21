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

var width = 28 // this is coped to the function calcPeri
    console.log("inside "+width);
}
console.log("before call "+width)
calcPeri();
console.log("after call "+width)