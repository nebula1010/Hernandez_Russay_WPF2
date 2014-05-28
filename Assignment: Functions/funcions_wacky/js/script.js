/**
 * Created by russayhernandez on 5/23/14.
 */
//Russay Hernandez
//WPF section 1
//assignment: functions
//wacky



// youre trying to find a randomizer that will go from 1 to 50 in order to get lottery numbers. then find a way to get
// 7 different numbers for each of the lottery slots


function randomizer(min,max){


    var randomNum = Math.round(Math.random() * (max-min)+min);


    return randomNum;

}

var minNumber = 1
var maxNumber = 50

var lotteryArray = [];

for(var i = 0; i < 7; i++){
    var result = randomizer(minNumber, maxNumber);
    console.log(result);


    lotteryArray.push(result);


}
console.log(lotteryArray);