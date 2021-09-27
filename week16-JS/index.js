/*
//Task 1
function sumInput (){

  let numbers =[];
  for (;;){
    let value = +prompt("Geben Sie ihre Zahn ein");
    if (value =="" || !value ){
        break;
    }
    numbers.push(value);
  }
  
  
  numbers.sort( (a, b) => a - b );
  alert(`Your numbers: ${numbers}`);


  let sum = 0;

  numbers.forEach(number =>{
    sum += number;
  })
  //for(let number of numbers){
  //  sum += number;
  //  }


  alert(`Total sum: ${sum}`);

}

sumInput();
*/


//Task 2

//create neu options
let marke = document.querySelector(`#marke`);
marke.addEventListener(`change`, function(){

let markeValue = document.querySelector(`#marke`).value;
  
let audis =['A5','А6','TT',`SQ 7`,`SQ 8`,`V8`];
let mercedeses =[`A-Klasse`,`B-Klasse`,`C-Klasse`,`E-Klasse`,`G-Klasse`,`CLK`];
let volkswagens =[`Golf`,`Polo`,`Sharan`,`Touran`,`Passat`,`Käfer`,`Pointer`];
let toyotas =[`Auris`,`Avensis`,`Camry`,`Highlander`,`RAV 4`,`Verso`,`Yaris`];
let bmws =[`5-er`,`6-er`,`7-er`,`8-er`,`M-Reihe`,`X-Reihe`,`Z-Reihe`];


  let modellValue = [];
  let modell = document.querySelector(`#modell`);
  document.querySelector(`#modell`).innerHTML ="";
  

  if(markeValue==0){
    return
  }
  else if(markeValue==13000){
    modellValue = [...audis]
  }
  else if(markeValue==17000){
    modellValue = [...mercedeses]
  }
  else if(markeValue==10000){
    modellValue = [...volkswagens]
  }
  else if(markeValue==11000){
    modellValue = [...toyotas]
  }
  else if(markeValue==15000){
    modellValue = [...bmws]
  }
 
  for( val of modellValue){
        let option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        modell.append(option);
  }

})

// button 

const button = document.querySelector(`#button`);
button.addEventListener (`click`, getsum);

const karosserie = document.querySelectorAll(`option[name="karosserie"]`);
console.log(karosserie);
const radioZulass = document.querySelectorAll(`input[name="zulassung"]`);
console.log(radioZulass)
const radioKraft = document.querySelectorAll(`input[name="kraft"]`);
const radioGetriebe = document.querySelectorAll(`input[name="getriebe"]`);
let total = document.querySelector(`#total`);



function getsum (){
    
  let totalPrice= ``;

  
  for(drop of marke){
    if(drop.selected){
      totalPrice += parseInt(drop.value);
    }
  } 
  
  for(drop of karosserie){
    if(drop.selected){
      totalPrice += parseInt(drop.value);
    }
  } 

  for(radio of radioZulass){
    if(radio.checked){
      totalPrice += parseInt(radio.value);
    }
  } 

  for(radio of radioKraft){
    if(radio.checked){
      totalPrice += parseInt(radio.value);
    }
  }

  for(radio of radioGetriebe){
    if(radio.checked){
      totalPrice += parseInt(radio.value);
    }
  }

total.value = totalPrice;

}
