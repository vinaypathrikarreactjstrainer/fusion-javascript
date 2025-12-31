console.log('javascript - buttons');
import { getName,  name, phone, city } from "./variables.js";
import { getUserName, STUDENTS } from "./functions.js";

const eventGetName = getName.addEventListener('click', getUserName);
const shweta = new STUDENTS(name, phone, city);

// Events
console.log(getName);
export {eventGetName, shweta}