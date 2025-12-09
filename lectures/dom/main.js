console.log("javascript: DOM - document object model");
console.log("document => ", document);

// access the h1 from the DOM
// getElementById() : returns an element which having id attribute
let title = document.getElementById("title");
let subTitle = document.getElementById("subTitle");

// getElementsByClassName() : returns a HTML collections (elements which using the same class) in the from of array
let friends = document.getElementsByClassName("friends");

// getElementsByTagName() : returns a HTML collections (tags)
let header = document.getElementsByTagName("header");
let aTag = document.getElementsByTagName("a");

/*
    1] Make title in normal font, change the color
    2] Change the content of the sub title
    3] Hide Title on button mouseover
*/

console.log("title => ", title);
const updateTitle = () => {
  // 1] Make title in normal font, change the color
  title.style.color = "red";
  title.style.fontWeight = "normal";
  title.style.fontStyle = "italic";
};

// 2] Change the content of the sub title
console.log("sub title => ", subTitle);
// button sub title
let btnSubTitle = document.getElementById("btn_subTitle");
const updateSubTitle = () => {
  // heading subtitle
  subTitle.textContent = "Students";
  subTitle.style.color = "blue";
};

//
let btnHideTitle = document.getElementById("btn_hideTitle");
const hideTitle = () => {
  // using remove()
  // title.remove();
  // using display property
  title.style.visibility = "hidden";
};

// show title
const showTitle = () => {
  title.style.visibility = "visible";
};

// Evnets
// btnSubTitle.addEventListener('click', function(){
//     subTitle.textContent = "Students";
// })

btnSubTitle.addEventListener("click", updateSubTitle);
btnHideTitle.addEventListener("mouseenter", hideTitle);
btnHideTitle.addEventListener("mouseleave", showTitle);

// friends
for (let x = 0; x < friends.length; x++) {
  friends[x].style.color = "white";
  friends[x].style.backgroundColor = "#fec201";
  friends[x].style.marginBottom = "5px";
}

// variable
let shweta, akshay, summary, allParagraphs, allAnchorTag;
// shweta = document.getElementById('shweta');
/*
    querySelector() : 
        * it access id & class both
        * it will return the first match of the element
*/
shweta = document.querySelector('#shweta');
console.log('shweta => ', shweta);
console.log('shweta  inner text=> ', shweta.innerText = "Anjali", shweta);

summary = document.querySelector(".summary");
console.log('summary => ', summary);

/*
querySelectorAll() : 
* it access id & class both
* it will return the collection of the all elements
*/
allParagraphs = document.querySelectorAll('.summary');
console.log('summary with all ele => ', allParagraphs);

allAnchorTag = document.querySelectorAll('a');
console.log('all anchor tags => ', allAnchorTag);

// innerHTML = set the html content

let boxImg = document.querySelector('#box-img');
// boxImg.innerHTML = "<h1>Fusion</h1>";
boxImg.innerHTML = `<div class='img'>
                        <img src='https://convergesolve.com/wp-content/themes/wotech/img/logo/logo@2x.svg' alt = '' />
                    </div>`