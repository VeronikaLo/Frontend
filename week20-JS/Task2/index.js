const api ={
    endpoint:"https://api.openweathermap.org/data/2.5/",
    key: "d7058a7cd0920a24a90816437e46ed30"
}


const input = document.querySelector(`#input`);
input.addEventListener("keydown", enter); // Прослушка на input


//Extra funktion, чтобы search начался только после Enter 
 function enter(e){
    if(e.keyCode ==13){
        search(input.value);
    }
      
}

async function search(data){
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    console.log(res);
    const result = await res.json();
    console.log(result);

    document.querySelector(`#city`).innerText = `${result.name}, ${result.sys.country} `;
    document.querySelector(`#temp`).innerHTML= `${Math.round(result.main.temp)}<span>°</span> `;
    document.querySelector(`#feelslike`).innerHTML= `Feels like: ${Math.round(result.main.feels_like)}<span>°</span> `;
    document.querySelector(`#condition`).textContent= `${result.weather[0].main}`;
    document.querySelector(`#variation`).innerHTML = `Min:${Math.round(result.main.temp_min)}<span>°</span>`+
    `Max:${Math.round(result.main.temp_max)}<span>°</span>`

    input.value ='';
    getDatum();
}

function getDatum(){
    const now = new Date();
    const days = ["Sunday","Monday", "Tuesday", "Wednesday","Thursday","Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const myDay= days[now.getDay()];
    const dayNum = now.getDate();
    const myMonth= months[now.getMonth()];
    const myYear = now.getFullYear();
    
    document.querySelector(`#date`).innerHTML = `${myDay}, ${dayNum} ${myMonth} ${myYear}`;
}

