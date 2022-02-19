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
class ChooseEmotion {
    constructor(choice) {
        this.currentChoice= choice;
}
};





