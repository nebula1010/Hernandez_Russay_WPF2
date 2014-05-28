/**
 * Created by russayhernandez on 5/23/14.
 */
//Russay Hernandez
//WPF section 1
//assignment: functions
//personal

//im trying to put new carpet on my floor. there are many rooms so i need to create a formula that will allow me to
    //find the perimeter and area

var width = Number(prompt("type the width of the room"));
while(isNaN(width)|| width === ""){
    var width = Number(prompt("re type the width of the room"));
}

 var length = Number(prompt("type in the room length"));
while(isNaN(length)|| length === ""){
  var length = Number(prompt("re type the room length"));

}
var perimeter = perimeterRoom(width, length);

console.log(perimeter);



var area = areaRoom(width,length);

console.log(area);
console.log("with a width of "+width+" and  a length of "+length+" ,the perimeter of the house is "+perimeter+"" +
    "and the area is "+area );
function perimeterRoom(width, length){


    var p = 2*width + 2*length;


    return p;

}
function areaRoom(w, l){

    var a = w*l;


    return a;
}