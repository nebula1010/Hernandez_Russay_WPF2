/**
 * Created by russayhernandez on 5/23/14.
 */
//Russay Hernandez
//WPF section 1
//multiple

//create a function to find a perimeter of a rectangle




//create a funtion call a perimeter
//prompt te user for wifth and height

var width = Number(prompt("please type in a rect width"));
var height = Number(prompt("please type in a rect height"));

//create a varible to cach a return value

var perimeter = perimeterRect(width, height);

console.log(perimeter);



var area = areaRectangle(width,height);

console.log(area);
console.log("a rectangle with a width of "+width+" and a "+height+" has a perimeter of "+perimeter+" and an area of "+area);
alert("a rectangle with a width of "+width+" and a "+height+" has a perimeter of "+perimeter+" and an area of "+area);
function perimeterRect(width, height){

   //peeimeter of a rectangle os
    //2* width + 2* height
    var p = 2*width + 2*height;

    //return a perimeter
    return p;

}
function areaRectangle(w, h){;
var a = w*h;
return a;
}