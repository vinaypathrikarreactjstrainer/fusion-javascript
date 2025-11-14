console.log('Javascript : Operators');

// ARITHMATIC OPERATORS :  +, -, *, /, %

var num_1, num_2, result;
num_1 = 25, num_2 = 27;
// Addition
result = num_1 + num_2;
console.log('num_1 + num_2 = ', result);
console.log(num_1, " + ", num_2, " = ", result);

// multiplication
/*
var val_1, val_2, output;
val_1 = Number.parseInt(prompt('Enter value 1:'));
val_2 = Number.parseInt(prompt('Enter value 2:'));
output = val_1 * val_2;
console.log(val_1 + "X" + val_2 + "=", output);
*/
// COMPARISION OPERATORS :
/*
    =, ==, ===, <, <=, >, >=, !=, ++, --

    a] == : it will check only values
    b] === : it will check values as well as its data type
*/

var name = "10", employeeName = 10;
console.log("name == employeeName : ", name == employeeName);
console.log("name === employeeName : ", name === employeeName);

var a = 20, b = 30;
console.log('value of a = ', a);
console.log('value of a++ = ', a++);
console.log('value of b = ', b);
console.log('value of b = ', --b);

// LOGICAL OPERATORS : &&(AND), ||(OR), !(NOT)
/*
    &&(AND) : if all the conditions is true it is true
              if one of the condition get false it will false
    ||(OR) :  if all the condition is true it is true
              if one of the condition get false it will be true
    !(NOT) :  if condition is true then it will be false
              if condition is false then it will be true
*/

var c = 100, d = 200;

var z = (a < b) && (c < d); // true
console.log("(a < b) && (c < d) = ", z);

var y = (a < b) && (c > d);
console.log("(a < b) && (c > d) = ", y);

var x = (a < b) || (c > d);
console.log("(a < b) || (c > d) = ", x);

