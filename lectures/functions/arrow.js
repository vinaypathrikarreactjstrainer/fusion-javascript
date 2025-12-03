console.log('javascript => arrow functions');

// function greet() {
//     console.log('Welcome Team');
// }
// greet();
/*
    Function Expressions : 
        * An anynomous function is assigned to the variable
*/
let getInfo = function () {
    console.log('we are inside the getInfo function');
}
/*
    * When we use arrow function it needs function expression 
    * We don't use function keyword
    * we use => sign after the ()
*/
// function greet() {
//     console.log('Welcome Team');
// }
const greet = () => {
    console.log('welcome Team');
}
// greet();

// const getUserName = function (name) {
//     console.log('user name = ', name);
// }
// getUserName('Vinay');

// with single parameter we don't need paranthesis(optional)
const getUserName = name => console.log('userName = ', name);

// incase of multiple parameter we should use ()
// const getInfos = function(name, city, phone, company) {
//     console.log('name')
// }
const getInfos = (name, city, phone, company) => {
    console.log(`Hello this is ${name}`);
}

 const getEmployeeName = person => {
    console.log('person => ', person);
    for(let i = 0; i < employee.length; i++){
        myEmployee.push(person[i]);
    }
    console.log('myEmployee => ', myEmployee);
}
/*
const addition = (x, y) => console.log(`Addition of ${x} + ${y} = `, x + y);
const subtraction = (x, y) => {
    (x < y) 
    ? console.log(`Subtraction of ${y} - ${x} = `, y - x)
    : console.log(`Subtraction of ${x} - ${y} = `, x - y)
};
const multiplication = (x, y) => console.log(`Multiplication of ${x} x ${y} = `, x * y);
const division = (x, y) => console.log(`Division of ${x} / ${y} = `, x / y);

const calculator = (operation) => {
    switch(operation) {
        case 'add' : 
            addition(10, 20);
        break;
        case 'sub' : 
            subtraction(30, 50);
        break;
        case 'multi' : 
            multiplication(2, 100);
        break;
        case 'devide' : 
            division(20, 100);
        break;
    }
}
calculator('add');
calculator('sub');
calculator('multi');
calculator('devide');
*/

const calculator = (choice, num1, num2, operator) => {
    let statment = `${num1} ${operator} ${num2}`;
    choice == 'add'
    ? console.log(`${statment} = ${num1 + num2}`)
    : null

    choice == 'sub'
    ? console.log(`${statment} = ${num1 - num2}`)
    : null
}

calculator('sub', 12, 10, '-');