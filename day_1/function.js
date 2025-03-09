var prompt = require('prompt-sync')({ sigint: true });

const length = parseFloat(prompt("enter your len : "))
const width = parseFloat(prompt("enter your width :  "))

function area(length, width) {
    return length * width
}
console.log("total area is " ,area(length, width))
//============================================================
// Prompt the user to enter the length and width of the rectangle
let len = parseFloat(prompt("Enter the length of the rectangle:"));
let wid = parseFloat(prompt("Enter the width of the rectangle:"));

// Calculate the area
const area = len* wid;

// Display the result
console.log("The area of the rectangle is: " + area);
alert("The area of the rectangle is: " + area);
