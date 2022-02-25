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




/*const sortImages = document.getElementsByClassName("emotion");
for (let i = 0; i < emotion.length; i++) {
  console.log(emotion[i]);
  emotion[i].addEventListener('click', removeDisplayNone);*/


    /*function getRandomImage () {
       let items = $('div.emotionsFigures emotion').length;
       let rnd   = Math.floor(Math.random() * items);
        
       document.getElementsByClassName("emotion").style.display = "block";
    };*/

 
const figures1 = document.getElementsByClassName("emotionsFigures");
const figures2 = document.getElementsByClassName("emotionsFigures2");
const figures3 = document.getElementsByClassName("emotionsFigures3");

var elems  = [figures1,figures2,figures3];
const randomIndex = Math.floor(Math.random() * elems.length)

const round = elems[randomIndex];
console.log(randomIndex);
console.log(round);

for(let i = 0; i < round.length; i++){
    round[i].style.display="inline"; 
   
};



/*function sortQuestion (round) {
    for() {
        style.display="inline";
    }
    sortear 
    elems[1][3].alt angry
    pergunta e resposta
    if(angry === )
/*
let round
1 2 3 
let i = 0 
function round (elems[i]){
    for(){
        style.display="block";
    }
    sortear 
    elems[1][3].alt angry
    pergunta e resposta
    if(angry === )

}





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