console.log('javascript - fetch method');

/*
    fetch: fetch is javascript API which uses HTTP methods
    * GET, POST, PUT & DELETE
    * fetch return a promise that we can handle a async. javascript operation
*/
/*
fetch() // it has two args. 1. URL 2. optional method ({obj})
    .then() // we received the data from server in the form of json. we need to convert this data into the javascript object
    .then() // we get actual data. we can do the operations here
    .catch() // if there is any error received from the server catch method invoke
*/
const userURL = './users.json';
// fetch method
let ul = document.createElement('ul'), li = '';
// GET method
fetch(userURL)
    .then(resp => resp.json()) // .json() => convert data intho plain js obj.
    .then(data => {
        console.log(data);
        showUserName(data);
        // data.forEach(user => {
        //     li += `<li>${user.name}</li>`;
        // });
        // ul.innerHTML = li;
        // document.body.appendChild(ul);

    })
    .catch(err => console.log('err => ', err))

const showUserName = name => {
    name.forEach(user => {
            li += `<li>${user.name}</li>`;
        });
        ul.innerHTML = li;
        document.body.appendChild(ul);
}