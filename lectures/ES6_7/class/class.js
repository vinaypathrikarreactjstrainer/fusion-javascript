console.log('javascript - class');

// class - keyword
// we don't use function & arrow function inside the class
class Users {
    // methods
    getName(){
        console.log('My Name is Fusion');
    }
    getCity(){
        console.log('I lived in Pune');
    }
};

const vinay = new Users();
const muskan = vinay;
console.log('vinay', vinay);
// Base Class || Parent Class
class Employee {
    constructor(name, designation, location){
        this.employeeName = name;
        this.employeeDesignation = designation;
        this.employeeLocation = location;
    }

    // methods
    getEmployeeName() {
        console.log(`Hello, I am ${this.employeeName}`)
    }
    getEmployeeDesignation() {
        console.log(`I worked as ${this.employeeDesignation}`)
    }
    getEmployeeLocation() {
        console.log(`My branch is ${this.employeeLocation}`)
    }
}

const rohini = new Employee('Rohini', 'Java fullstack Developer', 'Baner');
const sahil = new Employee('Sahil', 'Python Developer', 'Kharadi');

// Base Class
class Animal {
    speak(){
        console.log('Animal speak');
    }
}

// Child Class
class Dog extends Animal {
    bark(){
        console.log('Dog barks');
    }
}
const tomy = new Dog();

class Fusion {
    constructor(studentName, courseName, phone, email){
        this.name = studentName;
        this.course = courseName;
    }

    getStudentData(){
        console.log('Student Name =>', this.name);
        console.log('Course Course => ', this.course);
    }
}

class Student extends Fusion{
    constructor(){
        super();
    }

    getStudentInfo(){
        console.log('Student Phone => ', this.phone);
        console.log('Student Email => ', this.email);
        console.log('Student Name => ', this.name);
        console.log('Student Course => ', this.course);
    }
}

const shruti = new Student();

class Vinay {
    show(){
        console.log('Show is on...');
    }
}

class Amol extends Vinay{
    show(){
        console.log('Show is off..');
    }
}