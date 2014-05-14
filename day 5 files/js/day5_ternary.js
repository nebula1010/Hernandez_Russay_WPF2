/**
 * Created by russayhernandez on 5/14/14.
 */
//russay hernandez
//WPF section 1
//ternary conditions


//check our GPA and see if we can graduate
//higher 2.0 GPA tp graduate

var gpa = 3.7;
if(gpa>2.0){
    console.log("congrats you can graduate!");
}else{
    console.log("youre a failure")
}

//(condition)? true code : false code;:
(gpa>2.0) ? console.log("congrats you can graduate"):console.log("sorry")

//pick a book bases on a kids age
// under 10 green eggs and ham- 10 and over gets time machine

var age = 6;
(age < 10) ? console.log("green eggs"):console.log("time machine");

(age >= 10) ? console.log("time machine"):console.log("green eggs");

// same the book game to a variable
var book;

book = (age < 10) ? "green egss and ham" : "time machine";
console.log ("your kid gets the book" + book);

if(age<10){
    book = "green egss and ham";

}else{
    book= "time machine"
}

console.log("this is the if statement" + book);
