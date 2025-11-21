console.log('javascript: array => other methods');

const arr = [20, 'kashyap', null, 'shweta', true, 'anu'];

let priya = arr.indexOf('priya');
console.log('index of priya => ', priya);

let isShwetaThere = arr.includes('Shweta');
console.log('is shweta there? ', isShwetaThere);

// if(arr.includes('kashyap') && isShwetaThere){
//     alert('Welcome, Shweta & Kashyap');
// } else {
//     alert('Opps! the person you are looking for is not available at the moment');
// }

let reverseArr = arr.reverse();
console.log('revers the arr ', reverseArr);

const numArr = [7,10, 14, 28, 58, 1, 9, 11, 4, 111, 32, 1123];
let sortNumArr = numArr.sort();
console.log('sortNumArr', sortNumArr);

const strArr = ["Shweta", "Anjali", "Priyanka", "Anushka", "Akshay", "Aaishwarya", "Sahil", "Dimpal", "Sakshi", "Dikshant", "Rohini", "Muskan", "Shruti"];
// let sortStrArr = strArr.sort();
// console.log('sort string array ', sortStrArr);

const joinStrArr = strArr.join("-");
console.log('join string array', joinStrArr);

const mixArr = ["Vinay", "Kuhoo", "Piyush", "Fusion"];
console.log('mix arr with string', mixArr.toString());

const xyz = [100, 12, 35, 89, 97, 30];
let divisibleBy2 = xyz.filter(val => val / 2 );
console.log('divisibleBy2 => ', divisibleBy2);

const alpha = ['aa', 'a', 'i', 'a', 'z'];
let findA = alpha.find(ltr => ltr == 'a');
console.log('find a ', findA);

const friends = ["Akshay - 9", "Vinay - 28", "Sahil - 21", "Akshay - 7"];
let isAkshay = friends.find((val) => val.includes('Akshay - 7'));
console.log('isAkshay', isAkshay);