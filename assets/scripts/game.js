
class StartGame {
    constructor(currentChoice) {
        this.currentChoice= '';
}

};
 
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