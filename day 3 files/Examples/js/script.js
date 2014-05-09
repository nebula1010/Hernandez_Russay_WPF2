/*
Russay Hernandez
WPF 1405
Day 3 class examples
 */
//alert("test")
//find out how old we are
//create a variable for birth year
var birthYear = 1985;
//create a variable to hold the age
var age = 2014 - birthYear;
console.log(age);
//math
//+ - x /
//find the are of a triangle
// base * hight *1/2
var base = 4;
var height = 5;
var areaTriangle = base*height*.5;
console.log(areaTriangle);
//modulo = percent
//gives you the remainder
var remainder = 32%10;
console.log(remainder);
//find out if things are even or odd
var evenOrOdd = 67%2;
console.log(evenOrOdd);

//Assignment Operators
/*
= assignment
++ adds one to the variable
-- subtracts one
 += addition assigment
 -+ subtract assignment
  division assignment
 multiplication assignemtnt

 */
var a = 1;
a++; //a = a plus one
a--; // a = a minus one
a+=4; //a = a + 4
a-=3; //a = a - 3
a/=2; // a = a /2
a*=6;
console.log(a);
//strings
//" or ' used to find the beginging and end of string
// needed to distinguish between variable names and normal text
var kermit = "light green";
var flogName = "kermit";
//double or single quotes?
// can use either but must match!
var courseName = 'web programing fundamentals';
var phrase = 'i don\'t know.\n new line starts here.';
//escaping character \ backslash
console.log(phrase);
//\n =new line character
//boolean
// true of false
// not the text value of it!
var yes = true;
var maybe = "true";
//not boolean just text
var nope = false;
//order of operations
//PEMDAS
//find the average of quiz grades
var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 70;
var quiz4 = 80;

//find the average, add them all together and divide by
//total number of quizes
var average = (quiz1+quiz2+quiz3+quiz4) /4;
console.log(average);
//do not over use them
//find the perimiter of a rectangle
//lenght * 2 + width * 2
var width = 6;
var length = 7;

var perimeter = length * 2 + width * 2;
console.log(perimeter);
console.log("the perimeter of a rectangle with a length of "+length+" and the width of "+width+" is " +perimeter);
//concatenating = combining strings of text together
var firstName = "kermit";
var lastName = "the frog";
var fullName = firstName +" "+ lastName;
console.log(fullName);

var d = "6";
var e = "7";
var combine = d+e;
console.log(combine);


