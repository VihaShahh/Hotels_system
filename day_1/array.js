

// var prompt = require('prompt-sync')({sigint: true});
// const guest_list = ["a", "n", "c"]

// const name = prompt("enter your name ");

// if(guest_list.includes(name)){
//     console.log("welcome")
// }
// else{
//     console.log("sorry")
// }

//=========================================
// Define the guest list
const guestList = ["Alice", "Bob", "Charlie", "David", "Emma"];

// Ask for the guest's name
const name1 = prompt("Enter your name:");

// Flag to track if the name is found
let found = false;

// Iterate through the guest list
for (let i = 0; i < guestList.length; i++) {
    if (guestList[i] === name1) {
        found = true;
        break; // Exit the loop early if a match is found
    }
}

// Display the appropriate message
if (found) {
    console.log(`Welcome to the party, ${name1}!`);
} else {
    console.log("Sorry, you're not on the guest list.");
}
