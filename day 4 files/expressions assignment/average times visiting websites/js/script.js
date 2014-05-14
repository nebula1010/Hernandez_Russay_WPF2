/**
 * Created by russayhernandez on 5/12/14.
 */
//Russay Hernandez
//WPF section 1
//expressions homework day 4

//create an array of of the most popular websites you visit on  normal day

var webSites = ["facebook","google","netflix","twitter","youtube","yahoo"];
//now create an array of the number of times you visit each individual website
console.log(webSites);
var timesVisited = [6,15,15,13,22,4];
//now find the average and total amount of times you visit websites
var total = timesVisited[0] + timesVisited[1] + timesVisited[2] + timesVisited[3] + timesVisited[4] + timesVisited[5];
var average = total / timesVisited.length;

console.log("the websites i visited the most are "+webSites+". i visited a total of "+total+" websites per day. on average," +
    "i would visit a page "+average+" times per day" )

