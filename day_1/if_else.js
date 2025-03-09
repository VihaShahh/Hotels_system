

// Problem 2: Variables (var and const)

// Create a JavaScript program to calculate the area of a rectangle. Ask the user for the length and width of the rectangle and store them in variables. Calculate and display the area using the formula: "area length width'.
var prompt = require('prompt-sync')({sigint: true});

const age =  prompt("enter your age")
age = Number(age)

if(age <18){
    console.log("you are a minor")
}
else if(age >=18 && age <= 60){
    console.log("you are an adult")
}
else{
    console.log("you are a senior")
}