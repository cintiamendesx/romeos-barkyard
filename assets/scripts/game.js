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


const sortImages = document.getElementsByClassName("emotion");
for (let i = 0; i < emotion.length; i++) {
  console.log(emotion[i]);
  emotion[i].addEventListener('click', removeDisplayNone);
}