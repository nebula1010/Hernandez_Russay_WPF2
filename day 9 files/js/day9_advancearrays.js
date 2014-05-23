/**
 * Created by russayhernandez on 5/23/14.
 */
//Russay Hernandez
//WPF section 1
//advance arrays

//ceate an array of fruits

var fruitArray = ["banana", "pear", "peach", "mango"];

console.log(fruitArray);


//total number of the array
console.log(fruitArray.length);
//last item in an array is lenght  -1

console.log(fruitArray[fruitArray.length -1]);

//add an item to the end of the array
//push() function- code that adds whatever is inside
//of the () to the end of the array

//push an apple into the array
fruitArray.push("apple");
console.log("Test");
console.log(fruitArray);

// add a tomato
fruitArray.push("tomato");
console.log(fruitArray);
//quick way to remove the last item in the array
//pop()- nothing goes inside of the ()

fruitArray.pop();
console.log(fruitArray);

//pop() can also return that item it removes
//crreate a variable to catch that removed item

var caught = fruitArray.pop();
console.log(fruitArray);
console.log(caught);
