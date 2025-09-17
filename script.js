const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "HighText Machine Language", "Hyper Trainer Marking Language", "HyperText Marking Language"],
    answer: "HyperText Markup Language"
  },
  {
    question: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets", " Cascading Style Sheets"],
    answer: "Cascading Style Sheets"
  },
 {
  question: "Which HTML tag is used to display an image?",
  options: ["<image>", "<picture>", "<img>", "<src>"],
  answer: "<img>"
},
{
  question: "Which JavaScript keyword is used to declare a variable?",
  options: ["var", "let", "const", "All of the above"],
  answer: "All of the above"
},
{
  question: "Which CSS property is used to change text color?",
  options: ["text-style", " font-color", "color", "text-color "],
  answer: "color"
}

];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsBox = document.getElementById("options-box");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");


function loadQuestion() {
  optionsBox.innerHTML = "";
  questionEl.textContent = quizData[current].question;
  quizData[current].options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.classList.add("option-btn");
    btn.onclick = () => {
      if (opt === quizData[current].answer) score++;
      nextQuestion();
    };
    optionsBox.appendChild(btn);
  });
}


function nextQuestion() {
  current++;
  if (current < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz").classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreEl.textContent = `${score} / ${quizData.length}`;
  }
}


restartBtn.onclick = () => {
  current = 0;
  score = 0;
  resultBox.classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  loadQuestion();
};


loadQuestion();
