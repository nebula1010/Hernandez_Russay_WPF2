/**
 * Created by russayhernandez on 5/19/14.
 */
//Russay Hernandez
//WPF section 1
//Assignment conditionals - industry

//im creating a questioner online to ask some of the other people in my field if they work for clients or a company
    //the real goal of these questions is to determine how many clients do web developers normally have in order to
    // get a feel of what i should do when i graduate school

var workOption = prompt("clients or company");

if(workOption == "clients"){
totalClients = prompt("how many clients do you have");
    console.log("After a questioner, i have determined that the ones that worked individually, had "+totalClients+" clients" +
        ". ");
//now i need to create a conditional to determine if i should work on my own or a company. based on the resposes, i will
    // average them out and see if its a good idea to work for either
var minimumClients = 30;

    (totalClients>=minimumClients) ? console.log("work on my own"): console.log("work for an industry");



}else if(workOption == "company"){
    var company = "worked for a company";
console.log("from the questioner i took, these individual stated they worked for a company");

}


