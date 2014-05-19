/**
 * Created by russayhernandez on 5/19/14.
 */
//Russay Hernandez
//WPF section 1
//beer


//create the 99 beer on the walls song

//console.log("99 of bears on the wall. 99 bottles on beer on the wall \nyou take one down, you pass it around. 98 bottles of beer on the wall")

//loop method
//for loop(variable ; condition; increment)


for(var i = 99; i > 0; i--){
    //test for the right numbers
    // console.log(i);



if(i===1){
      console.log(i+" of beers on the wall. "+i+"  bottle on beer on the wall \nyou take one down, you pass it around. no more bottles of beer on the wall. \nthe end");
}     else{
        console.log(i+" of bears on the wall. "+i+"  bottles on beer on the wall \nyou take one down, you pass it around. "+(i-1)+" bottles of beer on the wall");
}
}
