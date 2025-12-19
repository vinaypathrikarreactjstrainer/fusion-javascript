console.log('javascript: destructuring');

// destruring
// It is a Javascript Syntax which allows you to extract the elements from arrays or properties from objects in a single variable

const users = ['Amol', 'Vinay', 'Manish', 'Dikshant', 'Akshay'];
const car = {
    model : 'TATA',
    color: 'Bottle Green',
    speed : '140 km/h'
}
let user1 = users[0];
let speeds = car.speed;

// syntax
const [user11, user22, user33, ...users44] = users;
console.log('user 11 => ', user11);
console.log('user 22 => ', user22);
console.log('user 33 => ', user33);
console.log('user 44 => ', users44);

const [a, b, ...c] = users;
console.log('a ', a);

const {model, speed, color} = car;
console.log('model => ', model);

// ... spred operator / rest parameter
const employee = {
    name: 'Sakshi',
    age: 23,
    city: 'Pune',
    designation: 'Sr. FullStack Developer'
}
const {name, age, ...city} = employee;

 