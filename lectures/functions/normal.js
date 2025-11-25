console.log('javascript - basic functions');

/*
   Function: 
        * It's a block of code which perform a perticular task
        * We start to write a function using "function" keyword + function name + () + { ... }
        * sntax: function functionName() {...}
        * function definition & function call/invoke/run
*/ 

function addition(){ // function declaration/definition
    let x, y , output;
    x = 10, y = 20;
    output = x + y;
    console.log(`Addition of ${x} + ${y} = ${output}`);
    console.log("Sum of ",x, " + ", y , " = ", output );
}

addition(); // function call

function getUserInfo(name, phone, city) {
    return console.log(`Welcome, ${name} they lives in ${city} and you will reachout with ${phone}`);
}

getUserInfo('Shruti', 587686786, 'pune');
getUserInfo('Omkar', 12345678, 'Jalna');

let users = [];
function getUsers() {
    // take 3 user input from user
    for(let x = 0; x < 3; x++){
        let name = prompt('Enter your name');
        // insert the name into the users array
        users.push(name);
    }
    console.log('users = ', users);
}
getUsers();