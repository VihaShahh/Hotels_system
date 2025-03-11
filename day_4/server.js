//// This line imports the express framework, which is a lightweight and fast web application framework for Node.js.
// require('express') loads the Express module, making it available to use in the script.
// const express = require('express') stores the imported Express module in a constant variable named express.
require('dotenv').config();
// console.log("✅ Checking .env file: DB_URL =", process.env.DB_URL);
const express = require('express')


//This imports the db.js file, which likely contains the MongoDB database connection logic.
// Using require('./db') ensures that the database connection is established when the server starts.
const db = require('./db');
const bodyParser = require('body-parser');




//import the router files
const person_routes = require("../routes/person_route")
const menu_routes = require("../routes/menu_route")

const port= process.env.PORT || 3000;

//=================================================
// //It allows creating, reading, and updating Person documents in MongoDB.
// const Hotel_Menu = require('../models/menu');
//============================================================

//express() initializes an Express application and stores it in a variable app.
// This app object is used to configure routes, middleware, and other settings for the server.
const app = express()

app.use(bodyParser.json()); //req.body
//or - app.use(express.json()); 
// app.use(express.urlencoded({ extended: true }));

//use the router 
app.use('/person', person_routes)
app.use('/menu', menu_routes)



// //This starts the Express server and listens for incoming requests on port 3000.
// app.listen(3000, ...) tells the Node.js application to keep running and handle HTTP requests on port 3000.
// The callback function ()=> { console.log('server is running on port 3000') } logs a message to the console once the server starts successfully.
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
