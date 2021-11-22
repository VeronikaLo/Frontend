let text = "Ты действительно готов увидеть нечто невероятно ужасное ? Не боишься ? Не говори, что я тебя не предупреждал...";

let i=0;
speed =120;

function beginning(){

   if (i<text.length){
       
       document.querySelector(`.par`).textContent+=text.charAt(i);
       i++;
       setTimeout(beginning, speed);   
   }
}



  function weiter (){
    
    let pic = document.createElement(`img`);
    pic.src = "assets/header_harry-potter.png";
    pic.classList.add("pic");
    document.querySelector(`.header`).appendChild(pic);

     beginning();
}

   weiter();

