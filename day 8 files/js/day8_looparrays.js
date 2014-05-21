/**
 * Created by russayhernandez on 5/21/14.
 */
//russay hernandez
//WPF section 1
//looping arrays

//cycle through an array'

//for(var i - 0 ; i < array.length; i++)

//create an array of scooby doo characters

var names = ["scooby", "shaggy", "velma", "fred", "daphne"]

//loop through and tell each one that they soved a case

for(var i = 0; i<names.length; i++){
    console.log("you solved the case "+names[i] +"!")
}
//create an array of bills
 var bills = [50,10,5,20,10];

var totalBills = 0;

//create the loop cycle throguh add up a;; the bills

for(var j = 0; j<bills.length; j++){
    //add up all the bills
    //totalBills = totalBills + bills[j];

    //only care about bills that are equal or above 20
    if(bills[j]>=20){
        //if greater than 20 add it to total bills
        totalBills = totalBills + bills[j];
    }

}
console.log("your total for bills "+totalBills)