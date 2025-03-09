//Imports the Mongoose library, which is used to interact with MongoDB in Node.js.
// mongoose provides a simple way to define schemas and manage MongoDB connections.
const mongoose = require('mongoose');

// Specifies the connection URL for MongoDB.
// mongodb://localhost:27017/hotels means:
// mongodb:// → The protocol for connecting to MongoDB.
// localhost → The database is running on the local machine.
// 27017 → The default MongoDB port.
// hotels → The name of the database to connect to (MongoDB will create it if it doesn’t exist).
// define mongodb connection url
const MONGO_URL = 'mongodb://127.0.0.1:27017/hotels'; // a good practice is to use .env files to store mongo_url and jwt_secrets


//Initiates the connection to MongoDB using mongoose.connect().
// The options:
// { useNewUrlParser: true } → Ensures MongoDB's connection string parser is used.
// { useUnifiedTopology: true } → Enables a more stable connection using the new topology engine.
//set up mongodb connection
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })

// Stores the connection instance in db.
// mongoose.connection gives access to the active MongoDB connection, allowing us to listen for connection events.
const db = mongoose.connection;

//Listens for the "connected" event.
// If the connection is successful, it prints:

// mongodb connected
db.on('connected', ()=>{
    console.log('mongodb connected');
})

db.on('disconnected', ()=>{
    console.log('mongodb dis');
})

//Exports the db connection instance so it can be used in other files.
// This allows require('./db') to automatically connect to MongoDB when imported in other parts of the project.
module.exports = db;

//========================================
// ### **Execution Flow Step by Step**  

// Your project consists of two main files:  

// - **`db.js`** → Handles MongoDB connection.
// - **`server.js`** → Sets up an Express server and imports `db.js` to establish the database connection.

// ---

// ## **🔹 Step-by-Step Execution Flow**  

// ### **1️⃣ `server.js` Starts Execution**  
// When you run:  
// ```sh
// node server.js
// ```
// the execution begins with the **server.js** file.

// ---

// ### **2️⃣ `server.js` Imports Required Modules**  
// ```javascript
// const express = require('express');
// const db = require('./db');
// const person = require('./models/person');
// ```
// - **`express` is imported** → This will be used to create a web server.  
// - **`./db` is imported** → This executes the **`db.js`** file, triggering the database connection.  
// - **`./models/person` is imported** → This likely contains a Mongoose schema for a `person` collection.

// ---

// ### **3️⃣ `db.js` Execution Begins**  
// Since `db.js` is imported, its code runs before continuing in `server.js`.

// #### **Inside `db.js` Execution:**
// ```javascript
// const mongoose = require('mongoose');
// const MONGO_URL = 'mongodb://localhost:27017/hotels';
// mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// ```
// - **Mongoose is imported**.
// - **The connection URL (`MONGO_URL`) is defined**.
// - **`mongoose.connect()` starts the connection** to MongoDB.
// - **`mongoose.connection` gives access to the database connection instance**.

// ##### **Handling Connection Events**  
// ```javascript
// db.on('connected', () => {
//     console.log('mongodb connected');
// });

// db.on('disconnected', () => {
//     console.log('mongodb dis');
// });
// ```
// - If the connection succeeds, `"mongodb connected"` is printed.
// - If the database disconnects, `"mongodb dis"` is printed.

// ##### **Exports `db` for use in `server.js`**
// ```javascript
// module.exports = db;
// ```
// - The connection instance is **exported back** to `server.js`.

// ---

// ### **4️⃣ Back to `server.js` Execution**  
// After `db.js` runs, `server.js` resumes execution.

// #### **Express App is Created**
// ```javascript
// const app = express();
// ```
// - **`express()` initializes an Express application**.

// #### **Defines a Route Handler**
// ```javascript
// app.get('/', function (req, res) {
//     res.send('welcome to the hotel');
// });
// ```
// - When a user visits `http://localhost:3000/`, it sends `"welcome to the hotel"` as a response.

// ---

// ### **5️⃣ Express Server Starts Listening on Port 3000**  
// ```javascript
// app.listen(3000, () => {
//     console.log('server is running on port 3000');
// });
// ```
// - The **server starts running** and listens for incoming HTTP requests on **port 3000**.
// - The console prints:  
//   ```sh
//   server is running on port 3000
//   ```

// ---

// ## **🔹 Final Flow Summary**
// | **Step** | **What Happens?** |
// |----------|------------------|
// | **1️⃣** | `server.js` is executed using `node server.js`. |
// | **2️⃣** | `server.js` imports `express`, `db.js`, and `person.js`. |
// | **3️⃣** | `db.js` is executed and connects to MongoDB. |
// | **4️⃣** | `"mongodb connected"` is printed if the connection is successful. |
// | **5️⃣** | `server.js` continues execution, initializes Express (`app = express()`). |
// | **6️⃣** | The route `/` is defined (returns `"welcome to the hotel"` when accessed). |
// | **7️⃣** | The Express server starts on port `3000`. |
// | **8️⃣** | `"server is running on port 3000"` is printed in the console. |

// ---

// ## **🔹 Example Run Output**
// ```sh
// mongodb connected
// server is running on port 3000
// ```
// Now, when you visit `http://localhost:3000/` in your browser, you see:  

// ```
// welcome to the hotel
// ```

// This completes the full execution flow. 🚀