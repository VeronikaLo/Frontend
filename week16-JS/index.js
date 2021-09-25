/*
let arr = ["a", "b"];

    arr.push(function() {
      alert( this );
    })

  alert(arr[2])  ;

*/  

function sumInput (){

  let numbers =[];
  for (;;){
    let value = +prompt("Geben Sie ihre Zahn ein");
    if (value =="" || !value){
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


/*
function sumInput() {
    let numbers = [];
    while (true) {
      let value = prompt("Введите число");
      if (value === "" || value === null || !isFinite(value)) 
      break;
      numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }

    numbers.sort(function(a, b){return a-b});
    alert (numbers);
    return sum;
  }
  alert( sumInput() );
*/
    

    





