console.log('javascript - fetch() - GET method');
// variables
let section = document.querySelector('#users'),
    div = '', btnList, btnGrid;

btnList = document.querySelector('#btn-list');
btnGrid = document.querySelector('#btn-grid');

const getUsers = () => {
    // debugger;
    // fetch - GET
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(data => showUser(data))
        .catch(err => console.error(err))
}

// showUser data function
const showUser = list => {
    
    for(let x = 0; x < list.length; x++){
        div += `<div class="card" id="grid">
                    <h1>${list[x].name}</h1>
                    <p>Email: <b>${list[x].email}</b></p>
                    <hr>
                    <p>City: <b>${list[x].address.city}</b></p>
                    <p>Company Name: <b>${list[x].company.name}</b></p>
                </div>`;
    };
    section.innerHTML = div;
}

getUsers();

const listView = () => {
    let card = document.querySelectorAll('.card');
    console.log('card => ', card);
    for(let x = 0; x < card.length; x++){
        card[x].setAttribute('id', 'list');
    }
    // getUsers();
}

btnList.addEventListener('click', listView);
btnGrid.addEventListener('click', getUsers);