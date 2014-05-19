/**
 * Created by russayhernandez on 5/14/14.
 */
//Russay Hernandez
//WPF section 1
    // create an array describing how many times you go to the bathroom every week. given that you start the array at monday and end in sunday

var timesYG=[7,8,11,11,14,8,9];
// now calculate the total amount of times you went to the bathroom
var total = timesYG[0] + timesYG[1] + timesYG[2] + timesYG[3] + timesYG[4] + timesYG[5] + timesYG[6];
//what was the average times you went to the bathroom per day
var average = total/timesYG.length;
console.log("last week i went to the bathroom "+total+" times. that was about "+average+" times a day");