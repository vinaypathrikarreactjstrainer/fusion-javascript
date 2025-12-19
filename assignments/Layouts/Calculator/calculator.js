console.log('javascript: calculator example');

// Base class
class Calculator {
    constructor(value_1, value_2){
        this.num_1 = value_1;
        this.num_2 = value_2;
    }
    // methods
    add(){
        let result = this.num_1 + this.num_2;
        console.log(`Addition of ${this.num_1} + ${this.num_2} = ${result}`);
    }
    sub(){
        let result = this.num_1 - this.num_2;
        console.log(`Subtraction of ${this.num_1} - ${this.num_2} = ${result}`);
    }
    multi(){
        let result = this.num_1 * this.num_2;
        console.log(`Multiplication of ${this.num_1} x ${this.num_2} = ${result}`);
    }
    division(){
        let result = this.num_1 / this.num_2;
        console.log(`Division of ${this.num_1} - ${this.num_2} = ${result}`);
    }
};

class ChildCalculator extends Calculator{
    constructor(value_1, value_2, option){
        super(value_1, value_2);
        this.choice = option;
    }
    
    calc(){
        // switch
        switch(this.choice){
            case 'add' :
                this.add();
            break;
            case 'sub' :
                this.sub();
            break;
            case 'multi' :
                this.multi();
            break;
            case 'division' :
                this.division();
            break;
            default:
                console.log('invalid choice')
        }
    }
};

// function - get values & option from user
const getValAndOpt = () => {
    let val_1 = Number.parseInt(prompt('Enter Value 1:'));
    let val_2 = Number.parseInt(prompt('Enter Value 2:'));
    let option = prompt('Choose one of the => add | sub | multi | division');
    console.log(val_1, val_2, option);

    const userChoice = new ChildCalculator(val_1, val_2, option);
    // calling the calc method from child class
    userChoice.calc();
}

const a = new ChildCalculator(20, 30, 'add');
const b = new ChildCalculator(20, 30, 'sub');
const c = new ChildCalculator(20, 30, 'multi');
const d = new ChildCalculator(20, 30, 'division');
// console.log(addition);

// assignment - Dynamic Ui - Navbar
let li = '', anc = '', ui = '';
const link = [
    {title: 'Home', url : "#"},
    {title: 'About Us', url : "#"},
    {title: 'Products', url : "#"},
    {title: 'Contact Us', url : "#"},
]
const footerLink = [
    {title: 'Akshay', url : "#"},
    {title: 'Shruti', url : "#"},
    {title: 'Shweta', url : "#"},
    {title: 'Anjali', url : "#"},
]
class Navbar {
    constructor(links){
        this.links = links;
    }

    // createLi() {
    //     return document.createElement('li');
    // }
    // createAnchor() {
    //     return document.createElement('a');
    // }
    nav() {
            for(let x = 0; x < this.links.length; x++){
                ui += `<li>
                        <a href= '${this.links[x].url}'>${this.links[x].title}</a>
                       </li>`
            }
            document.body.innerHTML = ui;
    }

}

const createNavbar = new Navbar(link);
const footerNav = new Navbar(footerLink);
