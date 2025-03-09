// In JavaScript, you can convert JSON to an object and vice versa using `JSON.parse()` and `JSON.stringify()`. Here’s how:

// ### **📌 JSON to Object (Parsing)**
// Convert a JSON string into a JavaScript object:
```js
const jsonString = '{"name": "Viha", "age": 22, "city": "Ahmedabad"}';

// Convert JSON to object
const obj = JSON.parse(jsonString);

console.log(obj); // { name: 'Viha', age: 22, city: 'Ahmedabad' }
console.log(obj.name); // Viha
```


// ### **📌 Object to JSON (Stringify)**
// Convert a JavaScript object into a JSON string:
```js
const person = {
    name: "Viha",
    age: 22,
    city: "Ahmedabad"
};

// Convert object to JSON string
const jsonStringified = JSON.stringify(person);

console.log(jsonStringified); // {"name":"Viha","age":22,"city":"Ahmedabad"}
```

// ---

// ### **🔄 Combined Example**
```js
const person = {
    name: "Viha",
    age: 22,
    city: "Ahmedabad"
};

// Convert object to JSON
const jsonString = JSON.stringify(person);
console.log("JSON String:", jsonString);

// Convert JSON back to object
const jsonObject = JSON.parse(jsonString);
console.log("JavaScript Object:", jsonObject);
```

// Would you like to see a more advanced example with nested objects? 🚀