var prompt = require('prompt-sync')({sigint: true});

const age = prompt("Please enter your age: ");

if (age < 18) {
    console.log("You are a minor");
} else {
    console.log("You are a major");
}
