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