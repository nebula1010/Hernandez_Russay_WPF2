/**
 * Created by russayhernandez on 5/19/14.
 */
//Russay Hernandez
//WPF section 1
//assignment conditionals- personal

//im trying to find out if i am strong enough to beat the amount of weight that my friend can bench.
    // he currenctly benches 250 pounds, i need to find a formula to see if i can

var amountICB = 236;
var goal = 250;
var strength;

if(amountICB>goal){
    strength = "strong enough";
}else{
        strength = "not strong enough";
}
console.log("based on the results, i can determine that i am "+strength+" to beat my opponent" );

//with the results in, i now have to determine if in a week i can beat his maxed out weight.

oneWeek = 15;

if (strength>goal || oneWeek){
    var metGoal = "i can beat him"
}else{
    var metGoal = "i couldnt beat him"
}
console.log("after one week of working out, i have determined that "+metGoal+"");



