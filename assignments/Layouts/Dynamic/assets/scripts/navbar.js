console.log('javascript : dynamic navbar');

// variables
let navbar = document.querySelector('#navbar');
const actions = [
    {name: 'Home', link: 'https://www.google.com'},
    {name: 'About Us', link: 'https://fonts.google.com'},
    {name: 'Services', link: 'https://images.google.com'},
    {name: 'Products', link: 'https://maps.google.com'},
    {name: 'Contact', link: 'https://www.flipkart.com'},
];
let ul = document.createElement('ul');
ul.classList.add('menu');
// create dynamic menu/navbar
for(let p = 0; p < actions.length; p++){
    let li = document.createElement('li');
    let anchor = document.createElement('a');
        anchor.textContent = actions[p].name;
        anchor.setAttribute('href', actions[p].link);
        // inset anchor tag into the li
        li.appendChild(anchor);
        // insert li into ul
        ul.appendChild(li);
        // insert ul into navbar
    navbar.appendChild(ul);
}