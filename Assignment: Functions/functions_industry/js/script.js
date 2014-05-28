/**
 * Created by russayhernandez on 5/23/14.
 */
//Russay Hernandez
//WPF section 1
//assignment: functions
//industry

var result = "";

function webClass(){
//find out what webdevelopers like to use the most
userInput = prompt("which do you pefer, dreamweaver or webstorm")

while(userInput!="dreamweaver" && userInput!= "webstorm"){
    userInput = prompt("only dreamweaver OR webstorm");

}


if(userInput ==="dreamweaver"){
    result = "congrats";
}

if(userInput === "webstorm"){
    result = "sorry";

return;
}
}
webClass();
//console.log(userInput);
console.log("youre using "+userInput+" "+result+"");

//"You're using Dreamwaver! Congrats!"