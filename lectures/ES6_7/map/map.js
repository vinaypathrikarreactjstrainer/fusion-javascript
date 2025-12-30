console.log("javascript - map method");

const arr = ["Vinay", "Mumbai", 2128, true, null, { id: 1, product: "Apple" }];
const num = [1, 2, 3, 4, 5, 6];

arr.forEach((name, ind) => {
  console.log("name ", name, ind);
});

num.forEach((number, ind) => {
  let multiplyBy2 = number * 2;
  console.log("multiplyBy 2 => ", multiplyBy2);
});

let newArr = num.map((digits, index) => {
  console.log(digits, index);
  return digits * 2;
});

// variables
// json-server :  npm install -g json-server@^0.17.4
let fullName,
  phone,
  email,
  btn_add,
  btn_cancel,
  newUser = {};
fullName = document.querySelector("#fullName");
phone = document.querySelector("#phone");
email = document.querySelector("#email");
btn_add = document.querySelector("#btn_add");
btn_cancel = document.querySelector("#btn_cancel");

// validation
const validation = () => {
  let isValid = false;
  if (
    (fullName.value == "" || fullName.value == undefined) &&
    (email.value == "" || email.value == undefined) &&
    (phone.value == "" || phone.value == undefined)
  ) {
    alert("Please enter required fields");
    return isValid;
  } else if (fullName.value == "" || fullName.value == undefined) {
    alert("Enter Full Name");
    return isValid;
  } else if (email.value == "" || email.value == undefined) {
    alert("Enter Email");
    return isValid;
  } else if (phone.value == "" || phone.value == undefined) {
    alert("Enter Phone");
    return isValid;
  } else {
    return (isValid = true);
  }
};

// addUser
const addUser = (e) => {
    e.preventDefault();
  if (validation() == true) {
    // object
    newUser = {
      fullName: fullName.value,
      email: email.value,
      phone: phone.value,
    };
    console.log("newUser", newUser);

    // add new user entries
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
  }
};

// Events
btn_add.addEventListener("click", addUser);
