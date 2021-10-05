//Task 1

let button1 = document.querySelector(`#button_one`);
button1.addEventListener(`click`, transform);


function transform(){
    let input1Row = document.querySelector(`#input1`).value.toLowerCase();
    console.log(input1Row);
    let inputChanged = input1Row.replace(/\s+/g,' ').trim();
    console.log(inputChanged);
    let array = inputChanged.split(" ");

    console.log(array);
    
     
 
    let array1 = array[0];
    array1 = array1[0].toUpperCase() + array1.slice(1);
    let array2 = array[1];
    array2 = array2[0].toUpperCase() + array2.slice(1);
    let array3 = array[2];
    array3 = array3[0].toUpperCase() + array3.slice(1);


/*
    for (item of array ){
        
        item = item[0].toUpperCase() + item.slice(1);
        console.log (item);
    }
*/
    console.log (array[0]);
    console.log (array[1]);
    console.log (array[2]);

    
    let familyName = document.querySelector(`#familyName`);
    familyName.value = array1;
    console.log (familyName);

    let name1 = document.querySelector(`#name1`);
    name1.value = array2;

    let surname = document.querySelector(`#surname`);
    surname.value = array3;
    
}

/*Task2*/

let reg = /viagra|XXX/gim ;
let text = document.querySelector(`#text`);
let output = document.querySelector(`#output`);
let button2 = document.querySelector(`#button2`);
button2.addEventListener(`click`, checkSpam);

function checkSpam(){
    
   let value = text.value;

   if (reg.test(value)){
       console.log('Hurra!')
       let a = value.replace(/viagra|XXX/gim ,"*****");
       console.log(a);
       output.textContent += a;
   }
   else{
    output.textContent = value;
   }
 
}


/*Task 3*/

/*
let date = prompt('set the date');
alert (formatDate(date));


function formatDate(date) {
    let now = new Date;
    let diff = (now - date);
    //let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();


    if(diff<1000){
    return "Прямо сейчас";

    } else if(diff<60*1000){
    return `${Math.round(diff/1000)} сек. назад`;

    } else if(diff<60*60*1000){
    return `${Math.round(diff/(1000*60))} мин. назад`;
    } 
    
    else {
    return `${day}.${month}.${year} ${hours}:${minutes}`;
    }
    
    }

*/



/*Task 4*/


let button4 = document.querySelector(`#button4`);
button4.addEventListener(`click`, function(){

    let randomNumbers = [];

    for( let i=0; i< 10; i++){
        randomNumbers[i] = Math.round(Math.random() * 21 - 10);
        document.querySelector("#numbers").textContent = `Ваши числа: ${randomNumbers.join("  ,")}` ;
    }
    

    randomNumbers.sort((a, b) => a - b);
    console.log(randomNumbers);
    
    document.querySelector("#min").innerHTML= `Минимальное число: ${randomNumbers[0]}` ;
    document.querySelector("#max").innerHTML= `Максимальное число: ${randomNumbers[9]}` ;

    let sum = 0;
    let multiply= 1;
    
    for (item of randomNumbers){
        sum += item;
        multiply *=item;   
    }

    document.querySelector(`#sum`).innerHTML= `Сумма чисел: ${sum}`;
    document.querySelector(`#multiply`).innerHTML= `Произведение чисел: ${multiply}`;

    let average = +sum / randomNumbers.length;
    document.querySelector(`#average`).innerHTML= `Среднее арифметическое: ${average}`;
    
} )