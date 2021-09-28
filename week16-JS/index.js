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

marke.addEventListener(`change`, function () {

  let markeValue = document.querySelector(`#marke`).value;
  console.log(markeValue);

  let audis = [
    'A5', 1000,
    'А6', 2000,
    'TT', 3000,
    `SQ 7`, 4000,
    `SQ 8`, 5000
  ];

  let mercedeses = [
    `A-Klasse`, 3500,
    `B-Klasse`, 4500,
    `C-Klasse`, 5500,
    `E-Klasse`, 5000,
    `CLK`, 6500
  ];

  let volkswagens = [
    `Golf`, 700,
    `Polo`, 600,
    `Sharan`, 800,
    `Touran`, 1000,
    `Passat`, 9000
  ];

  let toyotas = [
    `Auris`, 700,
    `Avensis`, 2000,
    `Camry`, 2500,
    `Highlander`, 3500,
    `RAV 4`, 3000
  ];

  let bmws = [
    `7-er`, 2000,
    `8-er`, 2800,
    `M-Reihe`, 4000,
    `X-Reihe`, 3500,
    `Z-Reihe`, 3000
  ];


  let modellValue = [];
  let modell = document.querySelector(`#modell`);
  document.querySelector(`#modell`).innerHTML = "";


  if (markeValue == 0) {
    return
  } else if (markeValue == 13000) {
    modellValue = [...audis]
  } else if (markeValue == 17000) {
    modellValue = [...mercedeses]
  } else if (markeValue == 10000) {
    modellValue = [...volkswagens]
  } else if (markeValue == 11000) {
    modellValue = [...toyotas]
  } else if (markeValue == 15000) {
    modellValue = [...bmws]
  }


  for (let i = 0; i < modellValue.length; i += 2) {
    let option = document.createElement("option");
    let val = modellValue[i];
    let price = modellValue[i + 1];
    option.value = price;
    option.text = val.charAt(0).toUpperCase() + val.slice(1);
    modell.append(option);
  }


})

// button 

const button = document.querySelector(`#button`);
button.addEventListener(`click`, getsum);

const radioZulass = document.querySelectorAll(`input[name="zulassung"]`);
const radioKraft = document.querySelectorAll(`input[name="kraft"]`);
const radioGetriebe = document.querySelectorAll(`input[name="getriebe"]`);
let total = document.querySelector(`#total`);



function getsum() {

  let totalPrice = 0;

  let karosserie = document.querySelector(`#karosserie`);

  let karosserieValue = karosserie.options[karosserie.selectedIndex].value;

  markeValue = document.querySelector(`#marke`).value;

  price = document.querySelector(`#modell`).value;

  for (radio of radioZulass) {
    if (radio.checked) {
      totalPrice += parseInt(radio.value);
      console.log(totalPrice);
    }
  }

  for (radio of radioKraft) {
    if (radio.checked) {
      totalPrice += parseInt(radio.value);
      console.log(totalPrice)
    }
  }

  for (radio of radioGetriebe) {
    if (radio.checked) {
      totalPrice += parseInt(radio.value);
    }
  }

  total.value = +karosserieValue + +markeValue + +price + +totalPrice;

}