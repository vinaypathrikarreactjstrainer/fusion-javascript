console.log('javascript - async & await');

// console.log('1st console');

// async function getUserName (name) {
//    await setTimeout(() => console.log('name => ', name), 2000);
// }
// getUserName('Fusion');
// console.log('2nd console');

// variables
let URL;
URL = `https://jsonplaceholder.typicode.com/photos`;

// fetch(URL)
//     .then(resp => resp.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err));

// const getPhotos = async() => {
//     const resp = await fetch(URL);
//     const data = await (resp.json());
//     console.log('data', data);
// }
const getPhotos = async() => {
    try {
        const resp = await fetch(URL);
        const data = await (resp.json());
        console.log('data', data);
    } catch(err){
        console.err(err);
    }
}

async function getPhoto() {
    try{
        const respose = await fetch(URL);
        const photos = await respose.json();
        console.log('photos =>', photos);

    }catch(err){
        console.error(err);
    }
}