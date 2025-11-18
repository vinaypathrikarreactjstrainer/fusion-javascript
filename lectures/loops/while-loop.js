console.log("javascript: while loop");

// let count = 0;
//while loop: Entry control loop, in which we checked the condition first and then iteration happen if the condition is true
// loop is running until it will get false.
// while(count < 5){
//     count++;
//     console.log('count = ', count);
// }

// do guess the number program

let num = 2,
  n = 1;

do {
  console.log(num * n);
  n++;
} while (n >= 10);

// for loop
for (let x = 0; x < 5; x++) {
  console.log("x = ", x);
}

// username
let userName = "Fusion",
  name;

for (let x = 0; x < 3; x++) {
  // user having only 3 chances
  name = prompt("Guess the name");
  if (x < 3) {
    if (name == userName) {
      alert("You guess the right name" + name);
    }
  }
}
