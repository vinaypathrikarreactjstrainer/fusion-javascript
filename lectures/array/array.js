console.log('javascript : array');

const arr = [];
// console.log('data type of arr => ', typeof arr);
/*
    array is the collection of any datatype
*/
let num = [11,12,13,14];
// access the arry element
// console.log('get 13 from num array => ', num[2]);
// add array elements by index
// num[4] = 28;
// num[6] = 21;
// num[10] = 24;
// console.log('num => ', num);
// to check the length of an array
// console.log('how many ele in num array? ', num.length);

// push method : it will add an element at the last index
// console.log('num => ', num);
num.push(28);
// console.log('num => ', num);
num.push(21,31,56);
// console.log('multiple added ele in num => ', num);

// pop method : it will remove the last element from the array
// console.log('num => ', num);
num.pop();
// console.log('after the pop() num => ', num);
num.pop();
num.pop();
// console.log('num => ', num);

// unshift method : it will add an element at the beggining of the array (0 index)
num.unshift(78);
// console.log('unshift num => ', num);
num.unshift(100, 90, 80);
// console.log('unshift + multiple num => ', num);

// shif() : it will remove the first element of an array (0 index)
const brr = ["Fusion", 29, true, null, "vinay28"];
console.log('brr array => ', brr);
brr.shift();
console.log('shift() brr => ', brr);

// take an input from user upto 5 values and insert into the user array.

/*let user = [], any = [], userInput;
for(let x = 0; x < 5; x++){
    userInput = prompt('Enter any value/string:');
    user.push(userInput);
    any.unshift(userInput);
}
console.log('user array => ', user);
console.log('any array => ', any); */

const employee = ["Shweta", "Muskan", "Priyanka", "Aaishwarya", "Anjali", "Dikshant", "Akshay", "Anushka", "Dimpal"];

for(let y = 0; y < employee.length; y++){
    // print the employee name
    // console.log('Employee Name = ', employee[y]);
    // console.log('Employee Id = ', y + 1);
}

const numbers = [10, 20, 30, 40, 50, 60, 70, 80];
// check the length of given array
// if is there number 20 then skip this the number
// if is there number 70 then stop the loop
console.log('numbers lenght => ', numbers.length);
/*for(let i = 0; i < numbers.length; i++){
    if(numbers[i] === 20){
        continue;
    }
    if(numbers[i] === 70){
        break;
    }
    console.log('inside for loop numbers => ', numbers[i]);
}

let girlName = 'Muskan', userName, girls = [];
while(userName != girlName){
    userName = prompt('Enter the girl name');
    girls.push(userName);
    if(userName === girlName){
        break;
    }
}
console.log('girls => ', girls); */

// splice()
/*
    start index,
    deleted count,
    add elements
*/
numbers.splice(3, 0, "Fusion");
console.log('numbers after splice()', numbers);
numbers.splice(4, 3);
console.log('numbers after splice()', numbers);

// slice()
/*
    start index
    end index
    it will return deleted element array
*/
const students = ["Shweta", "Anjali", "Dikshant", "Sagar"];
console.log('students arr ', students);
let boys = students.slice(2, 4);
console.log('after slice students arr ', boys);

