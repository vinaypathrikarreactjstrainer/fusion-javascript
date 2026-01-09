console.log('javascript - users');

// variable

let users = JSON.parse(localStorage.getItem('userList'));

let person = {}, fullName, phone, email, add, cancel, title;


// fullName = document.getElementById('fullName');
fullName = document.querySelector('#fullName');
phone = document.querySelector('#phone');
email = document.querySelector('#email');
title = document.querySelector('#title');
add = document.querySelector('#btn_add');
cancel = document.querySelector('#btn_cancel');
let persons = document.querySelector('#persons');


// addUser
const addUser = (event) => {
    event.preventDefault();
    // get values from inputs
    person = {
        name: fullName.value,
        email: email.value,
        phone: phone.value
    }
    console.log('person => ', person);
    // insert the person obj into the users array
    users.push(person);
    restForm(event);
    localStorage.setItem('userList', JSON.stringify(users));
    showUsers(users);

}

// cancel
const restForm = (event) => {
    event.preventDefault();
    fullName.value = '';
    email.value = '';
    phone.value = '';
}
const showUsers = (personList) => {
    let ui = '';

    if (personList) {
        for (let x = 0; x < personList.length; x++) {
            ui += `<div class='card'>
                        <h3>${personList[x].name}</h3>
                        <p>Email: <b>${personList[x].email}</b></p>
                        <p>Phone: <b>${personList[x].phone}</b></p>
                    </div>`
        }
    } 

    
    persons.innerHTML = ui;
}
showUsers(users);
add.addEventListener('click', addUser);

const theme = 'light';

