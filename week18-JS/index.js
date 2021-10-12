//Task 2 

const buttonForm = document.querySelector(`#cta`);
let nameInput = document.querySelector(`#name`);
let surname = document.querySelector(`#surname`);
let username = document.querySelector(`#username`);
let email = document.querySelector(`#email`);
let phone = document.querySelector(`#telephone`);
let password = document.querySelector(`#password`);

let errors=[];


function checkName() {
    let nameFormat = /^[a-z ,.'-]+$/i ;
    
    if (nameInput.value.match(nameFormat) || surname.value.match(nameFormat)){
        return true;
    }
    else{ 
        errors.push(`Please, enter your Name in English`);

        return false;
        console.log(errors);
    }
}

function checkUsername(){
    let userNameFormat = /^[a-z0-9_-]{3,16}$/i ;
    if (username.value.match(userNameFormat)){
        return true;
    }
    else{ 
        errors.push(`Please, enter your user name `);
        return false;
    }
}

function checkEmail(){
    let emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i ;
    if (email.value.match(emailFormat)){
        return true;
    }
    else{ 
        errors.push(`Please, enter your user email correctly `);
        return false;
    }
}

function checkTelephone(){
    let telephoneFormat = /^\d{8,}$/ ;
    if (telephone.value.match(telephoneFormat)){
        return true;
    }
    else{ 
        errors.push(`Please, enter your telephone number correctly. It must contain at least 8 digits `);
        return false;
    }
}

function checkPassword(){
    let passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ ;
    if (password.value.match(passwordFormat)){
        return true;
    }
    else{ 
        errors.push(` Your password is insecure! It must contain minimum eight characters: at least one letter, one number and one special character `);
        return false;
    }
}


function checkAll(){
    
    document.querySelector(`#errorForm`).innerText ="";
    
    checkName();
    checkUsername();
    checkEmail();
    checkTelephone();
    checkPassword();

    document.querySelector(`#errorForm`).innerText += errors.join('. \n');


    if (checkName() && checkUsername() && checkEmail() && checkTelephone() && checkPassword()){

    document.querySelector(`#welcome`).innerText = `Welcome to our community, ${nameInput.value} !`;
    document.querySelector(`#errorForm`).innerText = '';
    nameInput.value ='';
    surname.value ='';
    username.value='';
    email.value = '';
    telephone.value = '';
    password.value = '';
    }

} 

buttonForm.addEventListener(`click`, checkAll);


//Task 3

