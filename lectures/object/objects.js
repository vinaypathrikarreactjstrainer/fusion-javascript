// const car = new Object();
const car = {
    model : 'BMW',
    color: 'dark wine',
    topSpeed: '140 km/h',
    
}
console.log('car => ', car);
const myCar = car;
console.log('myCar => ', myCar);
myCar.color = 'light blue';
console.log('car => ', car);




// insert keys into the car obj
car.name = 'priyanka';
car.friend = 'Muskan';
// console.log('car => ', car);

// for - of loop doesn't work on objects
// for(let val of car){
//     console.log('car values => ', val);
// }

// object.key => return key in array
let key = Object.keys(car);
// console.log('keys => ', key);

// object.values => return values in an array
let val = Object.values(car);
// console.log('values => ', val);

// object.entries => return key-value paired nested array
let entries = Object.entries(car);
// console.log('entries => ', entries);

const user = {
    name : 'Shweta',
    age : 21,
    address : {
        city: 'Pune',
        state: 'Maharashtra'
    },
    company : {
        name : 'Google',
        address : {
            branch : 'Hydrabad',
            zipCode : 3647834
        }
    },
    phone: 2324354353,
    email : 'shweta@gmail.com',
    friends : ['Priyanka', 'Shruti'],
    greet : function (){
        alert(`Welcome, ${this.name}`)
    }
}

// accessing 
// console.log('user name => ', user.name);
// console.log('user email => ', user["email"]);
// console.log('user city => ', user.address.city);
// console.log('comapany name => ', user.company.name);
// console.log('company branch => ', user.company.address.branch);

// for - in loop
for(let key in user){
    // console.log('user keys => ', key);
    // console.log('user vlaues => ', user[key]);
}
// console.log('call the function => ', user.greet())

// let x = 10;
// console.log('x => ', x);
// console.log('vinay');
// let y = true;
// console.log('y => ', y);
// x = 20;
// console.log('x => ', x);

const friends = ["Shruti", "Muskan", "Shweta", "Anjali", "Sakshi"];
// for - in
for(let ind in friends){
    // console.log('index => ', ind);
    // console.log('value => ', friends[ind]);
}

// for - of
for (let ele of friends){
    // console.log('arr elements => ', ele, friends.indexOf(ele));
}