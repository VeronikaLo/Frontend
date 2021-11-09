const api ={
    endpoint:"https://api.giphy.com/v1/gifs/search?",
    key: "WVWFB4UHkhAg5qfvQRkIw9FY5CnRMHkr"
}


const input = document.querySelector(`#input`);
input.addEventListener("keydown", enter); // Прослушка на input


//Extra function, чтобы search начался только после Enter 
 function enter(e){
    if(e.code === "Enter"){
        console.log(input.value);
        search(input.value);
    }
    
 }


//search process
 async function search(data){

    try{
    const res = await fetch(`${api.endpoint}api_key=${api.key}&q=${data}&limit=5&offset=0&rating=g&lang=en`);
    console.log(res);
    const result = await res.json();
    console.log(result);
    render(result);
}
    catch(error){
    console.log(error);
}
input.value ='';
    
}

function render(result){
    let box = document.querySelector(`.output`);
    for (let i =0; i< result.data.length; i++){
        let img = document.createElement(`img`);
        img.src = result.data[i].images.original.url;
        img.classList.add(`pics`);
        box.appendChild(img);
    }
}











/*

//Function render() without a loop

function render(result){
    let box = document.querySelector(`.output`);
    let img1 = document.createElement(`img`);
    img1.src = result.data[0].images.original.url;
    img1.classList.add(`pics`);
    box.appendChild(img1);

    let img2 = document.createElement(`img`);
    img2.src = result.data[1].images.original.url;
    img2.classList.add(`pics`);
    box.appendChild(img2);

    let img3 = document.createElement(`img`);
    img3.src = result.data[2].images.original.url;
    img3.classList.add(`pics`);
    box.appendChild(img3);

    let img4 = document.createElement(`img`);
    img4.src = result.data[3].images.original.url;
    img4.classList.add(`pics`);
    box.appendChild(img4);

    let img5 = document.createElement(`img`);
    img5.src = result.data[4].images.original.url;
    img5.classList.add(`pics`);
    box.appendChild(img5);   
}
*/
    

