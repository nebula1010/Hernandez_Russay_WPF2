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
    var radius = Number(prompt("re type the radius"));}

areaCircle();


function areaCircle(){
    area = radius * 2 * Math.PI;
    console.log(area);

}