/*  1 - Tela Inicial - preencher nome
    2 - Tela Inicial - clicar no botão de start
    3 - Segunda tela - Escolher emoção correta
    ~~ Escolher emoção correta
    ~~ Escolher emoção correta
    ~~ Escolher emoção correta
    ~~ Escolher emoção correta
    4 - Fim do jogo */

class StartGame {
    constructor(PlayerName) {
        this.name = PlayerName;
        this.points = 0;
        this.currentChoice= '';
}

};

//3 - Segunda tela - Escolher emoção correta


function removeDisplayNone() {
    //... your code goes here
    document.getElementsByClassName("emotion").style.display = "block";
}


/*const sortImages = document.getElementsByClassName("emotion");
for (let i = 0; i < emotion.length; i++) {
  console.log(emotion[i]);
  emotion[i].addEventListener('click', removeDisplayNone);*/


    /*function getRandomImage () {
       let items = $('div.emotionsFigures emotion').length;
       let rnd   = Math.floor(Math.random() * items);
        
       document.getElementsByClassName("emotion").style.display = "block";
    };*/


var elems  = [document.getElementsByClassName("emotionsFigures"),document.getElementsByClassName("emotionsFigures2"),document.getElementsByClassName("emotionsFigures3")];
for(var i=0;i<elems.lenght;i++)
elems[i].style.display="none";
var randomvalue = Math.floor(Math.random() * elems.length);
elems[randomvalue].style.display="inherit";



emotionsFigures.innerHTML = elems[randomvalue];





/*
apendar componente
Math.random
indice aleatorio
for 
multiplica pelo tamanho da array - math floor 
todas elas evento click 
random index a cada loop 
ao inves de (i) - random index
de - para */