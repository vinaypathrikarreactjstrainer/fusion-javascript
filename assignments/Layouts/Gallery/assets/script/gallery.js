console.log('javascript: Image Gallery');

// variables
const food = [
    {id: 1, title: 'Image_1', imgPath: 'assets/img/img_01.jpeg'},
    {id: 2, title: 'Image_2', imgPath: 'assets/img/img_02.jpeg'},
    {id: 3, title: 'Image_3', imgPath: 'assets/img/img_03.jpeg'},
    {id: 4, title: 'Image_4', imgPath: 'assets/img/img_04.jpeg'},
    {id: 5, title: 'Image_5', imgPath: 'assets/img/img_05.jpeg'},
    {id: 6, title: 'Image_6', imgPath: 'assets/img/img_06.jpeg'},
    {id: 7, title: 'Image_7', imgPath: 'assets/img/img_07.jpeg'},
    {id: 8, title: 'Image_8', imgPath: 'assets/img/img_08.jpeg'},
];

// console.log('food => ', food);

// function createGallery
// let gallery = document.querySelector('#gallery');
// const createGallery = (priyanka) => {
//     // alert(img);
//     console.log('img inside the func. =>', priyanka);
//     for(let x = 0; x < priyanka.length; x++){
//         let div = document.createElement('div');
//         let image = document.createElement('img');
//         let title = document.createElement('h2');
//         // add title to h2
//         title.textContent = priyanka[x].title;
//          // add css class to div
//         div.setAttribute('class', 'box-img');
//         // add src, alt attributes 
//         image.setAttribute('src', priyanka[x].imgPath);
//         image.setAttribute('alt', `Image-${x}`);
//         // insert an image inside the div
//         div.appendChild(image);
//         // insert title inside the div
//         div.appendChild(title);
//         // insert div inside #gallery
//         gallery.appendChild(div);
//     }

// }
let gallery = document.querySelector('#gallery'),
    ui = '';
function createGallery(list) {
    console.log('list=>', list);
    // forEach loop
    list.forEach(element => {
        // console.log('element', element);
        ui += `<div class="box-img">
                <img src = "${element.imgPath}" alt="Image-${element.title}" />
              </div>`;
    });
    gallery.innerHTML = ui;
}

// call createGallery func. on window load
// window.onload = createGallery(food);

const students = [
    {name: "shweta", age : 20, course : 'java fullstack', phone : 112233, city: 'pune'},
    {name: "akshay", age : 23, course : 'python fullstack', phone : 332211, city: 'banguluru'},
    {name: "sakshi", age : 25, course : 'mern stack', phone : 123123, city: 'mumbai'},
];

let tbody = document.querySelector('#tbl_data'),
    row = '';
// function for table rows
const listView = () => {
    // itterate the student data
    for(let z = 0; z < students.length; z++){
        row += `<tr>
                    <td>${students[z].name}</td>
                    <td>${students[z].age}</td>
                    <td>${students[z].course}</td>
                    <td>${students[z].phone}</td>
                    <td>${students[z].city}</td>
                </tr>`
    };
    // insert all rows inside tbody
    tbody.innerHTML = row;
}
listView();

let rohini, anjali, btnRohini, btnAnjali;
rohini = document.querySelector('#rohini');
anjali = document.querySelector('#anjali');
btnRohini = document.querySelector('#btnRohini');
btnAnjali = document.querySelector('#btnAnjali');

// listview - anjali
const tableView = () => {
    anjali.classList.remove('hide');
    rohini.classList.add('hide');
}

// gridview - rohini
const cardView = () => {
    anjali.classList.add('hide');
    rohini.classList.remove('hide');
}

btnRohini.addEventListener('click', cardView);
btnAnjali.addEventListener('click', tableView);