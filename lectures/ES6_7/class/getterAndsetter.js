console.log('Javascript : class => Getter & Setter');

// Getter and setters allow you to control how properties are accessed or updated.

class STUDENT {
    constructor(name, marks, course){
        this.name = name; // vinay
        this.marks = marks; // 45
        this.course = course; // 'fullstack'
    }

    // getter
    get result(){
        return this.marks >= 35 ? "Pass" : "Fail";
    }

    // setter
    set updateMarks(value){
        this.marks = value;
    }

    set updateName(user){
        this.name = user;
    }

    set updateCourse(subject){
        this.course = subject;
    }
}
/*
const shweta = new STUDENT('Shweta', 32, 'FullStack');
console.log(`${shweta.name} has ${shweta.result}`);
console.log(`${shweta.name} is learing ${shweta.course}`);
// update marks
shweta.updateMarks = 80;
console.log(`${shweta.name} has ${shweta.result}`);
// akansha.updateName = 'Aaishwarya';
// console.log(`${akansha.name} has ${akansha.result}`);

const shruti = new STUDENT('Shruti', 32, 'Java FullStack');
console.log(`${shruti.name} has ${shruti.result}`);
// update marks of shruti
shruti.updateMarks = 85;
console.log(`${shruti.name} has ${shruti.result}`);
// update course of shruti & shweta too
shweta.updateCourse = 'Java FullStack';
shruti.updateCourse = 'MERN Stack';
console.log(`${shweta.name} is learing ${shweta.course}`);
*/

console.log('Task 1');
// we hold the function at given time
setTimeout(() => {
    console.log('Task 2');
}, 5000); // ms
console.log('Task 3');