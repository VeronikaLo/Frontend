/*
let arr = ["a", "b"];

    arr.push(function() {
      alert( this );
    })

  alert(arr[2])  ;

*/  
//Task 1
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


//Task 2

    





