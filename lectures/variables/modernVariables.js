// var let and const

var a = 10;
var a = 'dkfjkdj';
var a = true;
console.log('value of a in global scope = ', a);
/*
  var : it is global scope variable
        it can reinitite, redeclared
*/
{
    var a = null;
    var a = 'vinay';
    console.log('value of a in block scope = ', a);
}

console.log('outside value of a in global scope = ', a);

// let 
/*
   it can be reinitite, but it can't redeclared
   it is block scope variable
*/
let user;
user = 'Anjali';
user = 'Muskan';
console.log('user in global scope = ', user);
{
    let user = 'Dikshant';
    user = 'Shweta';
    console.log('user in block scope = ', user);
}
    console.log('outside user in global scope = ', user);


// const
/*
   it can't be redeclared and re initiateg
*/
const employeeId = 2821;
// const employeeId = 2324;
console.log('employee id in global scope =', employeeId);

{
    const employeeId = 34;
    console.log('employee id in block scope = ', employeeId);
}
console.log('outside employee id in global scope =', employeeId);