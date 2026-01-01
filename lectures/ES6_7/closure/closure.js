console.log('javascript : closure, set & reduce');
/*
    A closure is created when a function remembers variables from its outer scope, even after the outer fucntion stop the execution

    A function + its lexical scope = closure.
*/

function outer(){
    let count = 0;
    // inner function
    function inner(){
        count++;
        console.log('count => ', count);
    }
    return inner;
}

const counter = outer();

function createBankAccount() {
    let balance = 0;
     return {
        deposite(amount){
            balance += amount;
            console.log('Balance => ', balance);
        },
        withdraw(amount){
            balance -= amount;
            console.log("Balance => ", balance); 
        }
        
     };
}

const account = createBankAccount();
console.log('Deposite => ', account.deposite(1000));
console.log('Withdraw => ', account.withdraw(500));

// set() => A Set is a collection of unique values
/*
    * No duplicates values
    * It maintains interation orders
*/
// create A Set
const mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(40);
console.log('mySet => ', mySet);

// delete
mySet.delete(30);
console.log('mySet => ', mySet);

// has
mySet.has(40);
console.log('mySet => ', mySet.has(45), mySet.size);

// clear = it will clear a set
mySet.clear();

const dupArr = [11,22,33,21,28,30,23,11,28,21,23];
console.log('dupArr => ', dupArr);
const uniqueArr = [...new Set(dupArr)];
console.log('uniqueArr => ', uniqueArr);

// reduce() => reduces an array into single value
/**
    array.reduce((accumulator, currentValue) => {
            return accumulator;
        }, initialValue)
 */

const num = [1,2,3,4,5,6];
const largeNum = num.reduce((a, b) => (a > b ? a : b));
console.log('largeNum => ', largeNum);

// objects
const cart = [
    {name : "Laptop", price : 50000},
    {name : "Mouse", price : 500},
    {name : "Keyboard", price : 2000},
];

const totalAmmount = cart.reduce(
    (total, item) => total + item.price, 0
);
console.log('totalAmount => ', totalAmmount);

const people = [
    {name: 'Sakshi', role : 'Admin'},
    {name: 'Akshay', role : 'staff'},
    {name: 'Shruti', role : 'user'},
    {name: 'Shweta', role : 'Admin'},
    {name: 'Sahil', role : 'user'},
];

const grouped = people.reduce(
    (acc, person) => {
        acc[person.role] = acc[person.role] || [];
        acc[person.role].push(person);
        return acc;
    }, {}
)
console.log('grouped => ', grouped);

function uniqueCounter() {
    const set = new Set();

    return function(value){
        set.add(value);
        return set.size;
    }
}

const abc = uniqueCounter();
console.log('abc => ', abc(1))
console.log('abc => ', abc(2))
console.log('abc => ', abc(1))
console.log('abc => ', abc(28))
console.log('abc => ', abc(2))