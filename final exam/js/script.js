/**
 * Created by russayhernandez on 5/30/14.
 */
//russay hernandez
//WPF section 1
//final exam
var itemCost = Number(prompt("what is the cost of the item"));

while(isNaN(itemCost)|| itemCost === ""){
    itemCost = Number(prompt("re type the cost of the item"));}

var discountPer = Number(prompt("what is the discount percent, must be 0 to 100"));

while(isNaN(discountPer)|| discountPer > 100){
    discountPer = Number(prompt("re type the cost of the item"));}


var newPrice = discountPrice(itemCost,discountPer);
console.log(newPrice)

function discountPrice(){

    var converted = itemCost - (itemCost * (discountPer  * .0100));
return converted


    console.log(converted);

}

console.log("a laptop costing $"+itemCost+" was on sale with a "+discountPer+"% discount. after my calculations, " +
    "the laptop costs now is "+newPrice+"")


