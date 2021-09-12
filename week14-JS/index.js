


function add(){
    let a = document.querySelector(`#number1`).value;
    let b = document.querySelector(`#number2`).value;
    let c = +a + +b;
    console.log(c);

    document.querySelector(`#result1`).value = c;   
}

function minus(){
    let a = document.querySelector(`#number3`).value;
    let b = document.querySelector(`#number4`).value;
    let c = a - b;
    console.log(c);

    document.querySelector(`#result2`).value = c;   
}

function multiply(){
    let a = document.querySelector(`#number5`).value;
    let b = document.querySelector(`#number6`).value;
    let c = a * b;
    console.log(c);

    document.querySelector(`#result3`).value = c;   
}

function divide(){
    let a = document.querySelector(`#number7`).value;
    let b = document.querySelector(`#number8`).value;
    let c = a / b;
    console.log(c);

    document.querySelector(`#result4`).value = c;   
}

/*Task 2*/

function magic(sender){
    sender.classList.add(`selected`);
}

/*Task 3*/

const back = document.querySelector(`#back`);
const next = document.querySelector(`#next`);

function goBack(){
    document.querySelector(`.img`).src = "assets/cat2.jpg";
}

function goNext(){
    document.querySelector(`.img`).src = "assets/cat3.jpg";
}





