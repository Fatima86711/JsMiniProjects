const quizzData = [
  {
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
  },
];
const p_ques = document.querySelectorAll("p");
const options = document.querySelectorAll("input");
const labels = document.querySelectorAll("label");
const button = document.getElementById("sub_btn");
let index = 0;
let corrans = 0;
let wrong = 0;

function loadQuestion(index) {
  let ques = document.getElementById("question_id");
  ques.innerText = `${index + 1})  ${quizzData[index].question}`;
  labels[0].innerText = quizzData[index].a;
  labels[1].innerText = quizzData[index].b;
  labels[2].innerText = quizzData[index].c;
  labels[3].innerText = quizzData[index].d;
  options.forEach((option) => (option.checked = false));
}

document.querySelector("#sub_btn").addEventListener("click", function () {
  const ans = getAnswer();
  if (ans === quizzData[index].correct) {
    corrans++;
  } else {
    wrong++;
  }
  if (index < quizzData.length-1) {
    index++;
    loadQuestion(index);
  } else {
    result();
  }
});
function result() {
  document.getElementsByClassName("box")[0].innerHTML = 
    `
    <div class="col">
      <h3>
        Well Done! You have Scored ${corrans}/${quizzData.length}
      </h3>
    </div> 
    `
  
}
function getAnswer() {
  let ans;
  options.forEach((option) => {
    if (option.checked) {
      ans = option.value;
      console.log(ans);
    }
  });
  return ans;
}
loadQuestion(index);
// console.log("its working");
