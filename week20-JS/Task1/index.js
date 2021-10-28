//Task 1 

//create massive
//rendering the data
// get the data into localStorage






// create massive with data
let heroes = [
    {
        heroName: 'Бэтмен',
        universe: "DC Comics",
        alterEgo: "Брюс Уэйн",
        activity: "борец с преступностью, филантроп, миллиардер",
        friends: "Робин, Бэтгерл",
        superPower: "интеллект, обширные познания, знания боевых искусств, ловкость",
        src: "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg",
        rating: 1,
    },

    {
        heroName: "Супермен",
        universe: "DC Comics",
        alterEgo: "Кларк Кент",
        activity: "борец за справедливость",
        friends: "собака Крипто",
        superPower: "интеллект, обширные познания, знания боевых искусств, ловкость",
        src: "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg",
        rating: 1, 
    },

    {
        heroName: "Железный человек",
        universe: "Marvel Comics",
        alterEgo: "Тони Старк",
        activity: "гений, миллиардер, плейбой, филантроп",
        friends: "Мстители",
        superPower: "интеллект, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
        src: "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg",
        rating: 1,
    },

    {
        heroName: "Чудо-женщина",
        universe: "DC Comics",
        alterEgo: "Диана Принс",
        activity: "супергероиня, секретарь-референт",
        friends: "Лига Справедливости, Бэтмен, Супермен",
        superPower: "интеллект, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
        src: "https://n1s1.hsmedia.ru/87/ed/c5/87edc525d8813c7b2899e04a4e562fe9/547x397_0xac120002_6444132261540468872.jpg",
        rating: 1,
    },

    {
        heroName: "Черная вдова",
        universe: "Marvel Comics",
        alterEgo: "Наташа Романофф",
        activity: "супергероиня, шпионка",
        friends: "Мстители",
        superPower: "пик человеческого физического потенциала, замедленное старение, знание многих языков",
        src: "https://n1s1.hsmedia.ru/e0/2b/55/e02b55b147eeaff9b3fe6bdbb36ff9ea/547x397_0xac120002_744074131540468872.jpg",
        rating: 1,
    }
];



//read from the local storage
getFromLocalStorage();


// rendering the data
let result = ``;

for (hero of heroes){

    result +=

    `<div class = "card">`+
    `<div class = "card_title">` + hero.heroName + `</div>` +
    `<div class = "card-item"> <span>Вселенная:</span> ` + hero.universe + `</div>` +
    `<div class = "card-item"><span>Альтер эго:</span> ` + hero.alterEgo + `</div>` +
    `<div class = "card-item"><span>Род деятельности:</span> ` + hero.activity + `</div>` +
    `<div class = "card-item"><span>Друзья:</span> ` + hero.friends + `</div>` +
    `<div class = "card-item"><span>Суперсилы:</span> ` + hero.superPower + `</div>` +
    `<img class = "picture" src ="` + hero.src + `">` +
    `<div class = "card-item">` + 
    `<span>Рейтинг от 1 до 10:</span>`+`<input  type="range" min="1" max="10" value ="`+ hero.rating + `">`  
    + `</div>` +  
    `</div>`

}

document.querySelector(`.container`).innerHTML = result;

// putting the  changed data into massiv
//adding the data into local storage  

let inputs = document.querySelectorAll(`input`);
inputs.forEach((rating, index)=> {
    rating.addEventListener(`change`, () =>{
        const range = rating.value;
        heroes[index].rating = range;
        setToLocalStorage();
    })

});




function getFromLocalStorage(){
    let savedHeroes = JSON.parse(localStorage.getItem('heroes'));
    heroes = savedHeroes;
}

function setToLocalStorage(){
    localStorage.setItem("heroes", JSON.stringify(heroes));
}




console.log(heroes[0]);
console.log(heroes[1]);
console.log(heroes[2]);
console.log(heroes[3]);
console.log(heroes[4]);





