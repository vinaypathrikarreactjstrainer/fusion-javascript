console.log('javascript - about file');
// variables
let pageTitle,state, city, container, section, vinay;
pageTitle = document.querySelector('#pageTitle');
state = document.querySelector('#state');
city = document.querySelectorAll('.city');
container = document.querySelector('#container');
section = document.querySelector('#section');
vinay = document.querySelector('#vinay');

// parentElement : we can access the given elements parent
console.log('ul parent ele => ', state.parentElement);

// children : it is used for get the children elements
let list = state.children;
for(let val of list){
    console.log('val => ', val);
    val.style.color = 'white';
    val.style.backgroundColor = 'blue';
    console.log('check li parent => ', val.parentElement);
    // to access the b tag which is inner most children of state(ul)
    console.log('b tag ', val.children);
    console.log('first child ', val.firstElementChild);
}

// firstElementChild = return the first child element
let firstChild = container.firstElementChild;
console.log('firstChild => ', firstChild);
console.log('ul > first li => ', state.firstElementChild);

// lastElementChild = return the last child element
let last = state.lastElementChild;
console.log('ul > last li => ', last);
