/*Task1*/
function add(){
    let a = document.querySelector(`#number1`).value;
    let b = document.querySelector(`#number2`).value;
    let c = +a + +b;

    document.querySelector(`#result1`).value = c;   
}

function minus(){
    let a = document.querySelector(`#number3`).value;
    let b = document.querySelector(`#number4`).value;
    let c = a - b;

    document.querySelector(`#result2`).value = c;   
}

function multiply(){
    let a = document.querySelector(`#number5`).value;
    let b = document.querySelector(`#number6`).value;
    let c = a * b;

    document.querySelector(`#result3`).value = c;   
}

function divide(){
    let a = document.querySelector(`#number7`).value;
    let b = document.querySelector(`#number8`).value;

    document.querySelector(`#error`).innerText = "";

        if (b==0){

        //alert(`Oops... you cannot divide by 0! Please, try another number ;)`);
        //return;
        
        document.querySelector(`#error`).innerText += "Oops... you cannot divide by 0! Please, try another number ;)";
        return;
    }

    let c = a / b;

    document.querySelector(`#result4`).value = c;   
}



/*Task 2*/

const buttonForm = document.querySelector(`#cta`);
let nameInput = document.querySelector(`#name`);
let surname = document.querySelector(`#surname`);
let username = document.querySelector(`#username`);
let email = document.querySelector(`#email`);
let phone = document.querySelector(`#telephone`);
let password = document.querySelector(`#password`);


buttonForm.addEventListener(`click`, function(){
    
    
    document.querySelector(`#errorForm`).innerText ="";

    if(nameInput.value ==""){
        document.querySelector(`#errorForm`).innerText += "Please, enter your name !";
        
    }

    if(surname.value ==""){
        document.querySelector(`#errorForm`).innerText += "Please, enter your surname !";
        
    }

    if(username.value ==""){
        document.querySelector(`#errorForm`).innerText += "Please, enter your Username !";
        
    }

    if(email.value ==""){
        document.querySelector(`#errorForm`).innerText += "Please, enter your email !";
        
    }

    if(phone.value ==""){
        document.querySelector(`#errorForm`).innerText += "Please, enter your phone number !";
        
    }

    if(password.value ==""){
        document.querySelector(`#errorForm`).innerText += "Please, enter your password !";
        
    }

    if(password.value.length <6){
        document.querySelector(`#errorForm`).innerText += "Your password is insecure! It must contain at least 6 characters !";
        
    }

    else{
        document.querySelector(`#errorForm`).innerText += `Welcome to our community, ${nameInput.value} !`;
    }

})

/*Task 3*/
let select = document.querySelector(`#choice`);

select.addEventListener(`click`, function(){

    if (select.value ===`White`){
        document.body.style.backgroundColor = "#fff";
    }

    if (select.value ===`Dark`){
        document.body.style.backgroundColor = "rgb(77, 79, 80)";
    }

    if (select.value ===`Yellow`){
        document.body.style.backgroundColor = "rgb(238, 238, 125)";
    }

    if (select.value ===`Light blue`){
        document.body.style.backgroundColor = "rgb(151, 205, 252)";
    }
})





    


