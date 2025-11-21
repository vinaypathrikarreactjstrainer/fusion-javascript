console.log('javascript - Array - other methods');

const arr = [21, 'vinay', 28, 'priya', true, 'Aaishwarya'];
console.log('Array = ', arr, arr.length); // 6

// indexOf() => Find the position of an element
console.log('Index of priya ', arr.indexOf('priya'));

// includes() => It will check if elements exist or not
console.log('Is vinay there? ', arr.includes('Vinay'));

// reverse() => It will reverse the array
console.log('Reverse the Array = ', arr.reverse());

// sort() => It will sort the array by alphabetically or numerically
let sortArr = arr.sort();
console.log('Sort Array = ', sortArr);

const numArr = [27, 32, 45, 29, 50, -100, 28];
// console.log('num array sorting = ', numArr.sort());
const numbers = [100, 5, 20];
console.log('numbers = ', numbers);
numbers.sort((a, b) => a - b);
console.log('numbers = ', numbers);

// join() => It will convert the array into the string
const users = ['Harsh', 'Aaishwarya', 'Akansha', 'Aditya', 'Fusion'];
console.log('array to string = ', users);
const arrTostr = users.join(' ');
console.log('array to string = ', arrTostr);

// toString() => Converts the array into the string (default by comma separated)
console.log('toString => ', users.toString());

// filter() => It will return elements that pass the conditions
const userId = [10, 21, 28, 30, 68, 100, 50];
const filterArr = userId.filter(num => num > 35);
console.log('Filter Array => ', filterArr);

// reduce() => Reduces the array into the single value
const sum = userId.reduce((num, add) => add + num);
console.log('sum => ', sum); // 307

// find() => it will return the first element which pass the condition
const roleNum = [21,28,30,10];
const found = roleNum.find(val => val > 25);
console.log('Found => ', found);

// some() => it will return true if at least one element passes the test
const someArr = roleNum.some(val => val > 20);
console.log('someArr => ', someArr);