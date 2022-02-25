const romeoimage1 = document.getElementById("romeoimage1");
const startButton = document.getElementById ("btn");
const name = document.getElementById("input");
const elements = document.querySelectorAll(".emotion");

const question1 = document.getElementsByClassName("question1");
const question2 = document.getElementsByClassName("question2");
const question3 = document.getElementsByClassName("question3");

const question = [question1, question2, question3];

const randomQuestion = Math.floor(Math.random() * question.length)
const roundQ =  question[randomIndex];
console.log(randomIndex);
console.log(roundQ);

for(let i = 0; i < roundQ.length; i++){
  roundQ[i].style.display="inline"; }




function addName(name){
  if((document.getElementById("input").value !="") && (checkForStart)) {
    alert(`Be welcome, ${input.value}`);
    window.location.href="index copy.html"
  }else{
   alert("Please tell me your name, buddy!")
  }
};



elements[0].addEventListener("click", function(){});
for (var i = 0; i < elements.length; i++)


elements[i].addEventListener("click", function() {
  if (elements.length.alt[i] === question.length) {

  alert(`You're amazing, ${input.value}`);
 window.location.href="index copy.html"
 }else{
 alert("keep trying, buddy!"); }});


/*elements.addEventListener("click", () => { 
  if(answer = true) {
    alert(`You're amazing, ${input.value}`);
    window.location.href="index copy.html"
  }else{
    alert("keep trying, buddy!");
  }});*/


  /*volume.addEventListener("change", (event) => {
    noteAudio.volume = event.currentTarget.value / 100;
  });
  noteAudio.volume = volume/100;
}


function answer() {

}
  
function checkForStart() {
startButton.addEventListener("click")};*/
