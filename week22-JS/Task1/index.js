

 let formCat = document.querySelector(`#formCat`);
formCat.onsubmit = async (e) =>{
    e.preventDefault();

    document.querySelector(`#saved`).innerText = ``;
    
    try {
    let response = await fetch ("https://httpbin.org/post",
        {
            method: `POST`,
            body: new FormData(formCat),
        }
    );
    
    let result = await response.json();
    console.log(result);
    
    if(response.status !=200){
        throw new Error(`Cannot get the answer from the server. Try again!`)
    }
    
}

    catch(error){
        console.log(`Problem:` + error.name + error.message);
        alert(`Ops, we've got a problem! ${error.message}`)
    }

    document.querySelector(`#formCat`).reset();
    document.querySelector(`#saved`).innerText = `Спасибо, ваши данные были успешно сохранены!`;
}

