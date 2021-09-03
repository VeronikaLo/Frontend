//Say hello

function showMessage(){
    let ask=prompt("Как Вас зовут?");
    alert(`Здравствуйте, ${ask}! Рады видеть Вас здесь :)!`);
}

//Calculator

function add(){
    let a = prompt("Первое число?", 1);
    let b = prompt("Второе число?", 2);
    let c = +a + +b;
    alert(`Ваш результат: ${c}`);

}


function minus(){
    let a = prompt("Первое число?", 1);
    let b = prompt("Второе число?", 2);
    
    alert(`Ваш результат: ${a - b}`);
}

function multiply(){
    let a = prompt("Первое число?", 1);
    let b = prompt("Второе число?", 2);
    
    alert(`Ваш результат: ${a * b}`);
}

function divide(){
    let a = prompt("Первое число?", 1);
    let b = prompt("Второе число?", 2);
    
    alert(`Ваш результат: ${a / b}`);
}
