/**
 * Created by russayhernandez on 5/19/14.
 */
//Russay Hernandez
//WPF section 1
//for loops


//basic for loop
//for(initialization; conditions to test; change variable)

for(var i = 1; i <= 20; i+=4){

    console.log("i= "+i);
}
//breaks
//breaks- it stops the loop anywhere it is


for(var k = 0; k < 5; k++){

    console.log("k = "+k);


    if(k===3){
        console.log("your number is 3")
        break;
    }
}
