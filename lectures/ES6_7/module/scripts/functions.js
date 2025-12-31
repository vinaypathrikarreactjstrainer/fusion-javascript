console.log('javascript - functions');

import {userName, showUserName} from './variables.js';

const getUserName = () => {
    alert();
    console.log('userName => ', userName);
    // userName.value = name;
    showUserName.innerHTML = `User Name = ${userName.value}`;
}


class STUDENTS {
    constructor(name, phone, city){
        this.name = name,
        this.city = city,
        this.phone = phone;

    }

    getCity(){
        console.log(`City => ${this.city}`);
    }

    displayUserName() {
        console.log('Display User Name => ', this.name);
        showUserName.textContent;
    }
}


export {getUserName, STUDENTS};