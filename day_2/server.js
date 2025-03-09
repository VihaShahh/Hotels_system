 const books = require('./book.js')
 var _ = require('lodash'); 

 console.log('server file')

 var age = books.age
 console.log(age)

 var result = books.addNo(age+12 , 5);
 console.log(result);

 

// Define an array with duplicate values
var data = ["person", "person", 1, 2, 1, 2, 'name', 'age', '2'];

// Use lodash's uniq() function to remove duplicates
var filteredData = _.uniq(data);

// Log the result
console.log(filteredData);
console.log(_.isString(4));

//output
// notes page loaded
// server file
// 56
// 73
// [ 'person', 1, 2, 'name', 'age', '2' ]
// false

// If **`console.log("notes page loaded")`** is at the beginning of **`book.js`**, it will be printed **before anything else in `server.js`**, because when you use `require('./book.js')` in `server.js`, the entire `book.js` file is executed first.

// ---

// ### **📌 Execution Flow**
// 1. **`server.js` starts running**
//    - Encounters `require('./book.js')`
//    - This triggers **`book.js`** to execute before continuing `server.js`.

// 2. **`book.js` Execution**
//    - Prints **"notes page loaded"**
//    - Exports `age` and `addNo` back to `server.js`

// 3. **Back to `server.js`**
//    - Prints `"server file"`
//    - Prints `age` value (`56`)
//    - Calls `addNo(68, 5)`, prints `73`
//    - Executes lodash functions and prints results.

// ---

// ### **Final Console Output**
// ```sh
// notes page loaded  # <-- This comes from book.js first
// server file
// 56
// 73
// [ 'person', 1, 2, 'name', 'age', '2' ]
// false
// ```

// ---

// ### **🔍 Why?**
// - **`require('./book.js')` immediately runs `book.js`**
// - Any `console.log()` in `book.js` gets executed **before** `server.js` continues.

// Would you like me to clarify anything further? 😊🚀