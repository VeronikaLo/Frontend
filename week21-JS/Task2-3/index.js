//Task2

 let button1 = document.querySelector(`#cta`);
button1.onclick = function (event){
    event.preventDefault();

    document.querySelector(`#welcome`).innerText = ``;

    let user = {

        name: document.querySelector(`#name`).value,
        surname: document.querySelector(`#surname`).value,
        username: document.querySelector(`#username`).value,
        email: document.querySelector(`#email`).value,
        telephone: document.querySelector(`#tel`).value,
        password: document.querySelector(`#password`).value
    }
     console.log(user);

    fetch ("https://httpbin.org/post",
        {
            method: `POST`,
            body: JSON.stringify(user),
            headers:{
                'Content-Type': 'application/json; charset=utf-8'
            }
        }
    )
    .then(response => response.json())
    .then(user => {console.log(user);})
    .catch(error => console.log(error));


    document.querySelector(`#name`).value ="";
    document.querySelector(`#surname`).value="";
    document.querySelector(`#username`).value="";
    document.querySelector(`#email`).value="";
    document.querySelector(`#tel`).value="";
    document.querySelector(`#password`).value="";
    document.querySelector(`#welcome`).innerText = `You're registered! Congrats!`;
} 

//Task3
/*
let formCat = document.querySelector(`#formCat`);
formCat.onsubmit =  function (event){
    event.preventDefault();
    

    fetch ("https://httpbin.org/post",
        {
            method: `POST`,
            body: new FormData(formCat),
        }
    )
    .then(response => response.json())
    .then(formCat => {console.log(formCat);})
    .catch(error => console.log(error));

} 

*/

//Пробую новый синтаксис


 let formCat = document.querySelector(`#formCat`);
formCat.onsubmit = async (e) =>{
    e.preventDefault();
    
    try {
    let response = await fetch ("https://httpbin.org/post",
        {
            method: `POST`,
            body: new FormData(formCat),
        }
    );
    
    let result = await response.json();
    console.log(result); 
}

    catch(error){
        console.log(error);
    }

}

