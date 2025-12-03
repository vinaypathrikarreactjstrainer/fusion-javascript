console.log('javascript - objects');

/*
    Object: It is collection of key-value paires.
    Data is storing in the form of key & values
*/

// syntax
let a = {}; // empty object

let user = {
    name : "Fusion",
    branch : "Kharadi",
    city : "Pune"
}

// accessing the keys from object (dot notation)
console.log('Name => ', user.name, user);
console.log('City => ', user.city, user);

// adding keys into the object
user.ratings = 4.5;
console.log('user => ', user);

let obj1 = {}, obj2 = {};
console.log('obj1 = obj2', obj1, typeof obj1);

// creating object using new keyword
const employee = new Object();
employee.name = 'Vinay';
employee.city = "Mumbai"
console.log('employee =>', employee);