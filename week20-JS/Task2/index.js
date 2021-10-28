let ans = prompt("enter your city");

const api ={
    endpoint:"https://api.openweathermap.org/data/2.5/",
    key: "d7058a7cd0920a24a90816437e46ed30"
}
const input = document.querySelector(`#input`);
input.addEventListener("keydown", enter);

function enter(e){
    
    if (e.keycode === 13){
        search(input.value);
        
    }
}

console.log(ans);

function search(ans){
    fetch(`${api.endpoint}weather?q=${ans}&units=metric&appID=${api.key}`)
    //fetch(`https://api.openweathermap.org/data/2.5/weather?q=`+ ans +`&APPID=d7058a7cd0920a24a90816437e46ed30`)
    .then(response => response.json())
    .then(weather => {
        console.log(weather);
        document.querySelector(`#city`).innerText = weather.name;
        document.querySelector(`#temp`).innerText = Math.round(weather.main.temp);
        document.querySelector(`#feelslike`).innerText=
        document.querySelector(`#condition`).innerText= weather.weather[0].description;
        document.querySelector(`#variation`).innerText= Math.round() 
    })
}
search();


