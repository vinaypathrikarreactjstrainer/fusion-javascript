// methods

// const user = new Object();
// user.name = 'Muskan';
// user.age = 21;
// user.phone = 6783694837;

// console.log('user ', user);

const user = {
    name : 'Muskan',
    age : 21,
    phone: 7398493499
}
console.log('user ', user);

// object.keys() : will return keys in the form of array
console.log('users keys => ', Object.keys(user));

// object.values() : will return values in the form of array
console.log('user values => ', Object.values(user));

let myObj = {},
    keys = Object.keys(user),
    values = Object.values(user);

myObj = {
    name: values[0],
    age : values[1],
    phone: values[2]
}

console.log('myObject => ', myObj);

// object.entries => will return key & values arrays inthe form of nested array
let keyValArr = Object.entries(user);
console.log('user entries => ', keyValArr);

// Take a input from user like name, phone, email, city (3)
// make an object 
// add object into the array
// create array of an object

let userName, userPhone, userEmail, userCity;
// empty object
let userData = {};
// empty array
let users = [];

const getUserInfo = () => {
    for(let x = 0; x < 3; x++){
        userName = prompt('Enter your name');
        userEmail = prompt('Enter your Email');
        userPhone = prompt('Enter your phone');
        userCity = prompt('Enter your city');

        userData = {
            name: userName,
            email : userEmail,
            phone: userPhone,
            city: userCity
        }
        users.push(userData);
    }
    console.log('users => ', users);
}

const employee = [
    {name: 'Shruti', employeeId : 11, location: 'Kharadi'},
    {name: 'Priyanka', employeeId : 12, location: 'Banguluru'},
    {name: 'Shweta', employeeId : 13, location: 'Chennai'},
    {name: 'Dikshant', employeeId : 14, location: 'Hydrabad'},
    {name: 'Dimple', employeeId : 15, location: 'Pune'},
    {name: 'Anjali', employeeId : 16, location: 'Mumbai'},
];

// for in loop
// if you are using an object it will return keys names
for(let key in user){
    // acces the keys
    // console.log('keys using for-in => ', key)
    // console.log('value using for-in => ', user[key])
}

// if you are using an arrat it will return indexes
const arr = ['Vinay', 'Kuhoo', 'Itukali', 'Pitukali'];
for (let idx in arr){
    console.log('arr index ', arr[idx]);
}