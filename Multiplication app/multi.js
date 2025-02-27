const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const question1 = document.querySelector("#question");  

const formE1 = document.querySelector(".form")
const inputE1 = document.querySelector("#input")
const scoreE1 = document.querySelector("#score")
let score = JSON.parse(localStorage.getItem("score"))

if(!score){
  score = 0;
}
scoreE1.innerText = `score : ${score}`

question1.innerText = `what is ${num1} multiply by ${num2} ?` ;

const correctAns = num1 * num2 ;

formE1.addEventListener("submit",()=> {
  const userAns = +inputE1.value
  // here  + isliye dia hai woh string val ko convert kra number me
  if(userAns === correctAns){
  score++;
  updateLocalStorage();
  }else{
    score--
    updateLocalStorage();
  }
});

function updateLocalStorage(){
  localStorage.setItem("score",JSON.stringify(score))
}