class User {
    constructor(name, surname){
       this.name =name;
       this.surname = surname;}

 get fullName() {
   return `${this.name} ${this.surname}`;
 }

 set fullName(value) {
   [this.name, this.surname] = value.split(" ");
 }
}

let person = new User('Ivan', 'Ivanov');
console.log (person.fullName);






/*

//Task 1

class Worker {
    constructor(name, surname, rate, days ){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary(){
        let salary = this.rate * this.days;
        return salary;
    }
}

const worker = new Worker("Ivan", "Ivanov", "50", "20");

console.log(worker.name); 
console.log(worker.surname); 
console.log(worker.rate); 
console.log(worker.days); 
console.log(worker.getSalary());

//Task2

class Cat {
    constructor( nickName, ownerName, ownerPhone, ownerEmail, breed, feed, sex){
        this.nickName = nickName;
        this.ownerName = ownerName;
        this.onerPhone = ownerPhone;
        this.ownerEmail = ownerEmail;
        this.breed = breed;
        this.feed = feed;
        this.sex = sex;
    }
}


function setNewcat() {
   
const pet = document.querySelector(`#pet`).value;
console.log(pet);
const owner = document.querySelector(`#name1`).value;
console.log(owner);
const tel = document.querySelector(`#tel1`).value;
const email = document.querySelector(`#email1`).value;
const breed = document.querySelector(`#breed`).value;
console.log(breed);
const meal = document.querySelector(`.feed`).checked.value;
console.log(meal);
const sex = document.querySelector(`.sex.checked`);
console.log(sex);




let inputs = [];



}

document.querySelector('#form1').addEventListener(`submit`, (evt) =>{
    evt.preventDefault();
    setNewcat(); 
})



//Task 3

class Calc  {
       constructor(a,b){
           this.a = a;
           this.b = b;
       }
    static sum(a,b){
        return a + b;
    }

    static minus(a,b){
        return a-b;
    }

    static multiply(a,b){
        return a*b;
    }
    static divide(a,b){
        return a / b;
    }
}

console.log(Calc.sum(5,10));
console.log(Calc.minus(5,10));
console.log(Calc.multiply(5,10));
console.log(Calc.divide(5,10));



let sev = new Calc (2,4);
console.log(Calc.sum(2,4));



*/




