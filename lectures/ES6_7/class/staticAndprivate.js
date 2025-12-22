console.log('javascript - static & private keywords in class');
// static : Static methods belogs to the class only, not the object.

class User {
    constructor(name, phone, city){
        this.name = name;
        this.phone = phone;
        this.city = city;
    }
    // methods
    getName() {
        console.log(`He/She is ${this.name}`);
    }
    getCity() {
        console.log(`He/She lives in ${this.city}`);
    }
};

class Person extends User{
    constructor(name, phone, city, email){
        super(name, phone, city);
        this.email = email;
    }

    getName(){
        console.log('He is Vinay');
    }

    static addition(a,b){
        return console.log(`Addditon of ${a} + ${b} = ${a + b}`);
    }
}

const shweta = new User('Shweta', 2232323, 'Pune');
const anjali = new Person('Anjali', 2323232, 'Mumbai', 'anjali@gmail.com');
// console.log('access the getName method using static keyword => ', User.getName());

class Employee {
    // method
   static getSalary(salary){
        return console.log('Salray is ', salary)
    }
    static showEmployeeId(){
        return console.log('Employee Id => ', '2821');
    }
}

// PRIVATE: 
// we can make class fields private using #
// They can not access outside of the class
class ACCOUNT {
    // private
    #balance = 0;

    deposite(val){
     this.#balance += val;   
    }
    balance(){
        return this.#balance;
    }
}

const acc1 = new ACCOUNT();
acc1.deposite(1000);
console.log(acc1.balance());