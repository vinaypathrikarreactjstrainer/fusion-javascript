console.log('javascript - users');

// variable
let users = [], person = {}, fullName, phone, email, add, cancel, title;

// fullName = document.getElementById('fullName');
fullName = document.querySelector('#fullName');
phone = document.querySelector('#phone');
email = document.querySelector('#email');
title = document.querySelector('#title');
add = document.querySelector('#btn_add');
cancel = document.querySelector('#btn_cancel');

// addUser
const addUser = (event) => {
    event.preventDefault();
    // get values from inputs
    person = {
        name : fullName.value,
        email: email.value,
        phone : phone.value
    }
    console.log('person => ', person);
    // insert the person obj into the users array
    users.push(person);
    localStorage.setItem('userList',JSON.stringify(users)) || []
    restForm(event);
    // showUsers(users);
}

// cancel
const restForm = (event) => {
    event.preventDefault();
    fullName.value = '';
    email.value = '';
    phone.value = '';
}

console.log('users => ', users);
add.addEventListener('click', addUser);
cancel.addEventListener('click', restForm);

console.log('userList ', JSON.parse(localStorage.getItem('userList')));
const list = JSON.parse(localStorage.getItem('userList')) || [];
let persons = document.querySelector('#persons');
let ui = '';
const showUsers = (personList) => {
    for(let x = 0; x < personList.length; x++){
        ui += `<div class='card'>
                    <h1>${personList[x].name}</h1>
                    <p>Email: <b>${personList[x].email}</b></p>
                    <p>Phone: <b>${personList[x].phone}</b></p>
                </div>`
    }
    persons.innerHTML = ui;

}
showUsers(list);

// let girlName = document.querySelector('#girlName'),
//     boyName = document.querySelector('#boyName');
//     // updateGirlName = prompt('Enter girl name');
//     const arr = [
//         {id: 1, name: 'Vinay'},
//         {id: 2, name: 'Rohini'},
//     ]
//     localStorage.setItem('girl', JSON.stringify(arr) );
//     // girlName.textContent = localStorage.getItem('girl');
//     let myList = JSON.parse(localStorage.getItem('girl'))
//     girlName.textContent = myList[1].name;

sessionStorage.setItem('person', 'vinay');
console.log('person', sessionStorage.getItem('person'));
title.textContent = sessionStorage.getItem('person');

let light, dark,body, toggle;
btnThemes = document.querySelector('#btn_themes');
body = document.querySelector('#body');
toggle = document.querySelector('#toggle');

const theme = sessionStorage.getItem('themes');
const inputTheme = document.querySelector('#getTheme');
// sessionStorage.setItem('themes', false) || '';
btnThemes.addEventListener('click', () => {
    sessionStorage.setItem('inputThemes', inputTheme.value);
    const getTheme = sessionStorage.getItem('inputThemes');
    console.log('myThemessss', getTheme);
    if(getTheme === 'dark'){
        body.classList.remove('light');
        body.classList.add('dark');
    } else {
        body.classList.add('light');
        body.classList.remove('dark');
    }
    
})
console.log('myTheme', theme);

