
   


const list = document.querySelector(`#list`);
const listFilm = ["Гарри Поттер и Философский камень","Гарри Поттер и Тайная комната", "Гарри Поттер и Узник Азкабана", "Гарри Поттер и Кубок огня", "Гарри Поттер и Орден Феникса", "Гарри Поттер и Принц полукровка", "Гарри Поттер и Дары смерти. Часть 1", "Гарри Поттер и Дары смерти. Часть 2"];

for (let i=0; i< listFilm.length; i++){
     const element = document.createElement(`li`);
     element. innerText = listFilm[i];
     element.classList.add(`li`);
     list.appendChild(element);
     element.addEventListener(`click`, hello);
}

function hello(element) {
    //alert(`hurra!!!`);
}