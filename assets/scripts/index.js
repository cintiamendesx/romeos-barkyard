const romeoimage1 = document.getElementById("romeoimage1");
const startButton = document.getElementById ("btn");
const name = document.getElementById("input");
const elements = document.querySelectorAll(".emotion");

console.log(elements)

const question1 = document.querySelector(".question1");
const question2 = document.querySelector(".question2");
const question3 = document.querySelector(".question3");
const question4 = document.querySelector(".question4");


const response1 = document.getElementById("angry").innerText;
const question1_ = {question: question1, answer: response1 }
const response2 = document.getElementById("sleepy").innerText;
const question2_ = {question: question2, answer: response2 }
const response3 = document.getElementById("surprised").innerText;
const question3_ = {question: question3, answer: response3 }
const response4 = document.getElementById("upset").innerText;
const question4_ = {question: question4, answer: response3 }


const question = [question1_, question2_, question3_, question4_];
const randomQuestion = Math.floor(Math.random() * question.length)
const roundQ =  question[randomQuestion];
console.log(randomQuestion);
console.log(roundQ);
  roundQ.question.style.display="inline";
  for (var i = 0; i < elements.length; i++)
  elements[i].addEventListener("click", function (event) {
    console.log(event.target.alt); 
    console.log(roundQ.answer)
    if (event.target.alt === roundQ.answer) {
    alert(`You're amazing, buddy`);
    window.location.href = "index copy.html";
    } else {
    alert("keep trying, buddy!");
  }
  });



function addName(name){
  if((document.getElementById("input").value !="") && (checkForStart)) {
    alert(`Be welcome, ${input.value}`);
    window.location.href="index copy.html"
  }else{
   alert("Please tell me your name, buddy!")
  }
};

function checkForStart() {
  startButton.addEventListener("click")};


elements[0].addEventListener("click", function() {
for (var i = 0; i < elements.length; i++);
});
