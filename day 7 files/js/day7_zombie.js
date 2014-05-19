/**
 * Created by russayhernandez on 5/19/14.
 */
//russay hernandez
//WPF section 1
//zombies


//zombie madness!!
//we have a zombie at full sail
//zombie can bite 4 people a day and turn them into zombies

//cdc wants to know how many zombies there will be in 8 days if not contained


//create givens

var numZombies = 1; //how many zombies do we have
var numBites = 4; //number of bites per zombie per day
var days= 8; //number of days

//for loop
/*
for(var i = 1; i<=days; i++){

    //how many new zombies get made everyday
    //when do they actully bite new people
    var newZombies = numZombies * numBites;

    //add the new zombies to the total number of zombies
    numZombies += newZombies; //numZombies + newZombies
    console.log("there are "+numZombies+" zombies at the end of day "+i);
*/


var numDays = 0;
while(numZombies < 7000000000){
    numDays++;

    for(var i = 1; i<=days; i++){

        //how many new zombies get made everyday
        //when do they actully bite new people
        var newZombies = numZombies * numBites;

        //add the new zombies to the total number of zombies
        numZombies += newZombies; //numZombies + newZombies
        console.log("there are "+numZombies+" zombies at the end of day "+numDays);
numDays++;

}
console.log("it will take "+numDays+" of dayes to toake over the world");
}