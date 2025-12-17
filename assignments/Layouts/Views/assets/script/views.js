console.log('javascript - views');
// variable
// dynamically created navbar
const nav = [
    {name: 'List', url: '#', event: 'list', iconClass : 'fa-solid fa-list'},
    {name: 'Grid', url: '#', event: 'grid', iconClass : 'fa fa-th-large'},
    // {name: 'Both', url: '#', event: 'both', iconClass : ''},
];
let menu = document.querySelector('#menu'),
    table = document.querySelector('#sec-table'),
    card = document.querySelector('#sec-card'),
    tbody = document.querySelector('#userTbody');
let ui = '';
nav.forEach((link) => {
    // console.log('link: ', link);
    ui += `<li><a href="${link.url}"  onclick="views('${link.event}')"><i class="${link.iconClass}"></i> ${link.name}</a></li>`;
});
menu.innerHTML = ui;

// views function
const views = viewName => {
    // alert('view name ' + viewName);
    // switch
    switch(viewName) {
        case 'list' :
            // alert('List view');
            // hide the card section
            card.classList.add('hide');
            // show the table section
            table.classList.remove('hide');
            tableUi(users);
        break;
        case 'grid' :
            // alert('Grid view');
            // show the card section
            card.classList.remove('hide');
            // hide the table section
            table.classList.add('hide');
            cardUi(users);
        break;
        default :
    }
};

// user data
const users = [
    {name:'Dikshant', phone: 12343434, course: 'Java FullStack', email: 'dikshant@gmail.com' },
    {name:'Akshay', phone: 6987987987, course: 'Python FullStack', email: 'akshay@gmail.com' },
    {name:'Muskan', phone: 63464873487, course: 'Data Science', email: 'muskan@gmail.com' },
    {name:'Shweta', phone: 938948938, course: 'MERN Stack', email: 'shweta@gmail.com' },
    {name:'Shruti', phone: 23434343, course: 'MEAN Stack', email: 'shruti@gmail.com' },
    {name:'Sakshi', phone: 234234234, course: 'Core JAVA', email: 'sakshi@gmail.com' },
    {name:'Sahil', phone: 3435345435, course: 'Data Science', email: 'sahil@gmail.com' },
    {name:'Rohini', phone: 12343434, course: 'Java FullStack', email: 'rohini@gmail.com' }
];
let uiTable = '', uiCard = '';
// tableUI
const tableUi = items => {
    // console.log('table ui items => ', items);
    // forEach
    items.forEach((person, index) => {
        // console.log('table ui person => ', person, index);
        uiTable += `<tr>
                        <td>${index + 1}</td>
                        <td>${person.name}</td>
                        <td>${person.course}</td>
                        <td>${person.phone}</td>
                        <td>${person.email}</td>
                    </tr>`
    });
    // insert the user data inside the tbody
    tbody.innerHTML = uiTable;
}

// card ui
const cardUi = items => {
    items.forEach(list => {
        uiCard += `<div class="card">
                        <h3>${list.name}</h3>
                        <h3>${list.course}</h3>
                        <h3>${list.phone}</h3>
                        <h3>${list.email}</h3>
                    </div>`
    });
    card.innerHTML = uiCard;
}

// window onload
tableUi(users);

const friends = ['Akshay', 'Dikshant', 'Sahil', 'Amol', 'Vinay'];
friends.forEach(
    // callback function
    (name) => {
        console.log('Name = ', name);
    }
);