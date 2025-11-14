console.log('Javascript - variables');
// single line comments
/*
  multi line comments
*/

// VARIABLE : It is a container which stored or hold any data(value)
/*
   Variable Declaration: A variable which is defined but does not assigned any value
   Varibale Initilization : A variable which is defined and also having a value
*/

// syntax : var varable_name = 'fusion'

var name; // declaration
name = "Fusion";
console.log('My Institute name is ', name);

// data-types in javascript
/*
  1] Primitive: 
        number, null, boolean, BigInt(), string, Symbol(), undefined
  2] Non-Primitive : Objects
*/
// check what is the datatype of the given varibales
var num = 28, isAdmin = false, user = null, userName = 'Priyanka K.', isStudent = undefined;

console.log('before num => ', num);
console.log('data type of num => ', typeof(num));
console.log('isAdmin => ', isAdmin);
console.log('data type of isAdmin => ', typeof isAdmin);
console.log('user => ', user);
console.log('data type of user => ', typeof user);
console.log('userName => ', userName);
console.log('isStudent => ', isStudent);
console.log('data type of isStudent => ', typeof isStudent);

var num = 'Anjali';
console.log('after num => ', num);
console.log('data type of num => ', typeof(num));