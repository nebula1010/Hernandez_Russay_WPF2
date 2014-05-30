/**
 * Created by russayhernandez on 5/28/14.
 */
//Russay Hernandez
//WPF section 1
//test review
//prompt user to enter a radius

var radius = Number(prompt("what is the radius of a circle"));
console.log(radius)

while(isNaN(radius)|| radius === ""){
radius = Number(prompt("re type the radius"));}

areaCircle();


function areaCircle(r){

 var area = 2*r*Math.PI;
return area

}
var result = areaCircle(radius);

console.log("fhefkledr "+radius+" sfkjefjkn "+result+"")