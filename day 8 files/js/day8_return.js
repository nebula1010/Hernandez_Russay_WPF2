/**
 * Created by russayhernandez on 5/21/14.
 */
//russay hernandez
//WPF section 1
//return


//returning a value from a funtion

function calcArea(w, h){//parameters

    //calculate area
    var area = w*h;
    console.log(area);

//return the area to the main code

    return area ;


}
//call the function

calcArea(30,20);




//console.log(area);

//this will not work

//catch the return value from the funtion
//create a variable to hold the results

var returnArea = calcArea(10, 20);

console.log(returnArea);



function circleArea(radius){

    //area of a circle = 2*pie
    var area = 2*Math.PI * radius
    return area;

}


//fing the area ofa circle and then mutiply times 2
var result = circleArea(4);
result *=2;

console.log("the area of a circle mutiplied times 2 is "+result);

//find the area of a cirlce and mutiply it by 3

var result2 = circleArea(5);

