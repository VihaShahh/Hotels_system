//Understanding the person.js File (Step-by-Step Explanation)
// This file defines a Mongoose schema for a Person collection in MongoDB. It ensures structured storage of employee details for a hotel, like name, work role, contact information, and salary.

//Loads the Mongoose library, which helps interact with MongoDB.
// Mongoose allows defining a schema for structured data storage.
const mongoose = require('mongoose');

//Creates a new Mongoose schema (personSchema).
// The schema defines what fields each person document in MongoDB will contain.
const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    age:{
        type:Number,
    },
    work:{
        type:String,
        enum: ['chef', 'waiter', 'manager'],
        required: true   
    },
//Defines the job role of the person (only chef, waiter, or manager allowed).
// enum ensures only valid job roles can be stored.
// required: true → A job role must be provided.
    mobile:{
        type: String,
        required: true

    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        required:true
    }
})

//create Person model
//Creates a MongoDB model named person using personSchema.
// Mongoose automatically creates a MongoDB collection named people (Mongoose converts model names to plural).
// The person model is used to interact with MongoDB (create, read, update, delete documents).
const person = mongoose.model('person', personSchema);
//Exports the person model so it can be used in other files.

module.exports = person;
//=================================================================

// //### **Understanding the `person.js` File (Step-by-Step Explanation)**  

// This file defines a **Mongoose schema** for a `Person` collection in MongoDB. It ensures structured storage of employee details for a hotel, like name, work role, contact information, and salary.

// ---

// ## **🔹 Step-by-Step Execution Flow**  

// ### **1️⃣ Import Mongoose**  
// ```javascript
// const mongoose = require('mongoose');
// ```
// - Loads the **Mongoose library**, which helps interact with MongoDB.
// - Mongoose allows defining a **schema** for structured data storage.

// ---

// ### **2️⃣ Define the `personSchema`**  
// ```javascript
// const personSchema = new mongoose.Schema({
// ```
// - **Creates a new Mongoose schema (`personSchema`)**.
// - The schema defines **what fields** each person document in MongoDB will contain.

// ---

// ### **3️⃣ Define Schema Fields & Rules**  
// Each field in the schema is defined with a type and optional constraints:

// #### **➤ `name` (String, Required)**
// ```javascript
// name:{
//     type:String,
//     required: true
// },
// ```
// - Stores the **name** of the person as a string.
// - `required: true` → A name **must** be provided.

// #### **➤ `age` (Number, Optional)**
// ```javascript
// age:{
//     type:Number,
// },
// ```
// - Stores the **age** as a number.
// - No `required` constraint → It’s optional.

// #### **➤ `work` (String, Required, Limited to Specific Roles)**
// ```javascript
// work:{
//     type:String,
//     enum: ['chef', 'waiter', 'manager'],
//     required: true   
// },
// ```
// - Defines the **job role** of the person (only `chef`, `waiter`, or `manager` allowed).
// - **`enum` ensures** only valid job roles can be stored.
// - `required: true` → A job role must be provided.

// #### **➤ `mobile` (String, Required)**
// ```javascript
// mobile:{
//     type: String,
//     required: true
// },
// ```
// - Stores the person's **mobile number**.
// - `required: true` → A mobile number **must** be provided.

// #### **➤ `email` (String, Required, Unique)**
// ```javascript
// email:{
//     type:String,
//     required: true,
//     unique: true
// },
// ```
// - Stores the **email address**.
// - `required: true` → Email **must** be provided.
// - `unique: true` → Prevents duplicate emails in the database.

// #### **➤ `address` (String, Optional)**
// ```javascript
// address:{
//     type:String
// },
// ```
// - Stores the **address**.
// - No `required` constraint → It’s optional.

// #### **➤ `salary` (Number, Required)**
// ```javascript
// salary:{
//     type:Number,
//     required:true
// }
// ```
// - Stores the **salary**.
// - `required: true` → Salary **must** be provided.

// ---

// ### **4️⃣ Create the `Person` Model**  
// ```javascript
// const person = mongoose.model('person', personSchema);
// ```
// - **Creates a MongoDB model named `person`** using `personSchema`.
// - Mongoose automatically creates a **MongoDB collection named `people`** (Mongoose converts model names to plural).
// - The `person` model is used to interact with MongoDB (create, read, update, delete documents).

// ---

// ### **5️⃣ Export the Model**
// ```javascript
// module.exports = person;
// ```
// - Exports the **person** model so it can be used in other files.
// - When imported using:
//   ```javascript
//   const person = require('./models/person');
//   ```
//   It allows creating, reading, and updating `Person` documents in MongoDB.

// ---

// ## **🔹 Execution Flow Summary**
// | **Step** | **What Happens?** |
// |----------|------------------|
// | **1️⃣** | `mongoose` is imported. |
// | **2️⃣** | `personSchema` is defined with fields like `name`, `age`, `work`, etc. |
// | **3️⃣** | Constraints like `required`, `enum`, and `unique` are applied. |
// | **4️⃣** | A `Person` model is created using `mongoose.model()`. |
// | **5️⃣** | The model is exported for use in `server.js`. |

// ---

// ## **🔹 How This Fits Into `server.js`**
// 1. **`server.js` imports `person.js`**:
//    ```javascript
//    const person = require('./models/person');
//    ```
// 2. This allows using Mongoose functions like:
//    ```javascript
//    person.create({ name: 'John', age: 30, work: 'chef', mobile: '1234567890', email: 'john@example.com', salary: 50000 });
//    ```
// 3. The data gets stored in **MongoDB’s `people` collection**.

// ---

// ## **🔹 Example Document Stored in MongoDB**
// ```json
// {
//     "_id": "65a7c4b8f9c3e23456789abc",
//     "name": "John Doe",
//     "age": 30,
//     "work": "chef",
//     "mobile": "1234567890",
//     "email": "john@example.com",
//     "salary": 50000,
//     "__v": 0
// }
// ```
// This document is saved in the **`people` collection**.

// ---

// ## **🔹 Conclusion**
// The `person.js` file defines how **employee data** is structured and stored in MongoDB. It ensures that every person has valid details (name, work, mobile, etc.) and prevents duplicate emails. This schema is then used in `server.js` to interact with the database. 🚀