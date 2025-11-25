console.log("Javascript: string");

/*
    STRINGS: It's a sequance of charecters including whitespaces.
             We can use single Quote '' & double quote "" to define string
*/

let name = "Fusion",
  userName = "Anjali",
  employeeName = "Dikshant",
  girlName = "Sakshi";

/*
   Template Literals :
        * To define template literal we use back ticks ``

   string interpolation = variable with a string (both are together)
*/

// console.log(userName + ' is group leader of GROUP B');

let employee = `${employeeName} is cleaver boy`;
// console.log('employee => ', employee);

// trim() : remove the whitespaces from the string
const word =
  "                    trim() remove the whitespaces from the string                  ";
console.log("word => ", word);
// console.log('trimStart() => ', word.trimStart());

const oldName = `Vinay Pathrikar`;
console.log(
  "Change vinay to virendra => ",
  oldName.replace("Vinay", "Virendra")
);

// FUNCTION definition
function getUser(name) {
  // parameters
  // logic = task
  let greet = `Welcome, ${name}`;
  console.log(greet);
}

// function call
getUser(userName); // arguments
getUser("Priyanka"); // arguments

function addition(val1, val2, val3) {
  let output = val1 + val2 + val3;
  console.log(output);
}

addition(20, 30, 40);
addition(12, 28, "21");

let employees = [];

function getEmployee() {
  for (let i = 0; i < 3; i++) {
    let name = prompt("Enter Name:");
    employees.push(name);

    for (let y = 0; y < employees.length; y++) {
      if (employees[y] === "kuhoo") {
        //    let changeKuhoo = employees.join().replace('kuhoo', 'Avni');
            employee[y].replace("kuhoo", 'Avni');
           console.log(changeKuhoo);
      }
    //   console.log("employees => ", employees);
    }
  }
  console.log("employees => ", employees);

  return employees;
}
