

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
    constructor( nickName, ownerName, ownerPhone, ownerEmail, breed, food, sex, comments){
        this.nickName = nickName;
        this.ownerName = ownerName;
        this.onerPhone = ownerPhone;
        this.ownerEmail = ownerEmail;
        this.breed = breed;
        this.food = food;
        this.sex = sex;
        this.comments = comments;
    }
}


function setNewcat() {
    const nickName = document.querySelector(`#pet`).value;

    const ownerName = document.querySelector(`#name`).value;
    
    const ownerPhone = document.querySelector(`#tel`).value;
    const ownerEmail = document.querySelector(`#email`).value;
    const breed = document.querySelector(`#breed`).value;
    
    
    const food =[];
    const meal = document.querySelectorAll(`input[type="checkbox"]:checked`);
       for (let i=0; i< meal.length; i++){
           food.push(meal[i].value)
       }
    
    const sex = document.querySelector(`input[name="sex"]:checked`).value;
    const comments = document.querySelector(`#comments`).value;
    

    let cat = new Cat(nickName, ownerName, ownerPhone, ownerEmail, breed, food, sex, comments);

    console.log(`Кличка питомца: `+ cat.nickName );
    console.log(`Имя владельца:` + cat.ownerName);
    console.log(`Номер телефона:`+ cat.ownerPhone );
    console.log(`Электронная почта:` + cat.ownerEmail );
    console.log(`Порода:` + cat.breed);
    console.log(`Чем питается:` + cat.food);
    console.log(`Пол:` + cat.sex);
    console.log(`Комментарии:` + cat.comments);
}

document.querySelector('#form1').addEventListener(`submit`, (evt) =>{
    evt.preventDefault();
    setNewcat(); 
})



//Task 3

class Calc  {
       
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


let num1 = document.querySelector(`#num1`);

let num2 = document.querySelector(`#num2`);

let result = document.querySelector(`#results`);
let button1= document.querySelector(`#plus`);
let button2= document.querySelector(`#min`);
let button3= document.querySelector(`#mult`);
let button4= document.querySelector(`#div`);


button1.addEventListener(`click`, function(){
    
     result.value = Calc.sum(+num1.value, +num2.value);
     
})

button2.addEventListener(`click`,function(){

    result.value = Calc.minus(num1.value, num2.value);
    
})

button3.addEventListener(`click`,function(){

    let c = Calc.multiply(num1.value, num2.value);
    result.value = c;
})

button4.addEventListener(`click`,function(){

    if (num2.value == 0){
        alert(`You can't divide by 0 ! Try another number!`)
        return;
    }

    result.value = Calc.divide(num1.value, num2.value);
    
})


// task 4

class ValidatorStatic{

    static isEmail(str){
        let emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        if (email.value.match(emailFormat)){
            return true;
        }
        else{ 
            alert(`Please, enter your user email correctly `);
            return false;
        }
    }

    static isDomain(str){
        let domainFormat = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
        if (domain.value.match(domainFormat)){
            return true;
        }
        else{ 
            return false;
        }
    }

    static isDate(str){
        let dateFormat = /^\d{2}\/\d{2}\/\d{4}$/;
        if (date.value.match(dateFormat)){
            return true;
        }
        else{ 
            alert(`Please, enter the date correctly `);
            return false;
        }
    }

    static isPhone(str){
        let phoneFormat =/^((\(?(00)?49\)?)?(-|\s)?((0|\(0\))?\s?[0-9]{3,4})((-|\s)?[0-9]{5,8})){1}$/;
        if (phone.value.match(phoneFormat)){
            return true;
        }
        else{ 
            alert(`Please, enter your phone number correctly `);
            return false;
        }
    }
}








