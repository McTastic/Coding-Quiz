var startBtn = document.getElementById("start");
var submitBtn = document.getElementById("submit");
var restartBtn = document.getElementById("restart");
var highScoreBtn = document.getElementById("highScores");
var timerEl = document.getElementById("time");
var startBox = document.getElementById("start-box");
var questionEl = document.getElementById("qBox");
var pointsEl = document.getElementById("points");
var answersEl = document.getElementById("aBox");
var submitFormEl = document.getElementById("submitForm");
var userImput = document.getElementById("exampleInputName2");
var answerA = document.getElementById("choiceA");
var answerB = document.getElementById("choiceB");
var answerC = document.getElementById("choiceC");
var answerD = document.getElementById("choiceD");
var timeLeft = 60;
var points = 0;
var currentQuestion = 0;

// small function to remove initial lag when timer starts
function noDelaySetInterval(func, interval) {
  func();
  return setInterval(func, interval);
}
// function for timer
function countDown(timeInterval) {
  var timeInterval = noDelaySetInterval(function () {
    if (points > 100) {
      timerEl.textContent = "Great job! You scored " + points + " points!";
      clearInterval(timeInterval);
    } else if (timeLeft > 1) {
      timerEl.textContent = "Time Remaining " + timeLeft;
      timeLeft--;
    } else {
      timerEl.textContent = "Time's Up! You scored " + points + " points!";
      clearInterval(timeInterval);
      gameOver();
    }
  }, 1000);
}

// Question arrays
var questionArray = [
  {
    q: "Which is not a Javascript data type?",
    a: ["String", "Boolean", "Noodles", "Undefined"],
    correct: "Noodles",
  },
  {
    q: "Which of the following is equal in type and value to 4?",
    a: ["x=4", "x===4", "'4'", "x==4"],
    correct: "x===4",
  },
  {
    q: "What does DOM stand for?",
    a: [
      "Does obstructive math",
      "Dynamic object manipulation",
      "Destructive old magic",
      "Document Object Model",
    ],
    correct: "Document Object Model",
  },
  {
    q: "Which of the following is a boolean?",
    a: ["True", "29939114", "False", "Both B and D"],
    correct: "Both B and D",
  },
  {
    q: "What does HTML stand for?",
    a: [
      "HyperText Markup Language",
      "Hippie Trippy Monster Land",
      "HillTop Master List",
      "Hexidecimal Testing Mapped Language",
    ],
    correct: "HyperText Markup Language",
  },
  {
    q: "Which of these is a method to add a child to a parent using Javascript?",
    a: [".add", ".addChild", ".appendChild", ".appendToParent"],
    correct: ".appendChild",
  },
  {
    q: "Which method can be used wait for the user to click on a button?",
    a: ["addClick", "userClick", "listendForClick", "addEventListener"],
    correct: "addEventListener",
  },
  {
    q: "What will be the result of 3+2+'7'?",
    a: ["12", "57", "327", "Math is too hard!"],
    correct: "57",
  },
  {
    q: "Which of the following is not a type of popup box in Javascript?",
    a: ["Notification", "Alert", "Prompt", "Confirm"],
    correct: "Notification",
  },
  {
    q: "Which of the following is used for multi-line comments in Javascript?",
    a: ["/*", "//", "/ comment /", "./"],
    correct: "/*",
  },
];

// function to render question to page
function renderQuestion() {
  questionEl.style.display = "block";
  startBox.style.display = "none";
  //   for loop which displays question and answers
  for (var i = 0; i < questionArray.length; i++) {
    if (i < questionArray.length) {
      var nextQuestion = questionArray[currentQuestion].q;
      questionEl.textContent = nextQuestion;
      answersEl.style.display = "flex";
      answerA.textContent = questionArray[currentQuestion].a[0];
      answerA.addEventListener("click", correctAnswer);
      answerB.textContent = questionArray[currentQuestion].a[1];
      answerB.addEventListener("click", correctAnswer);
      answerC.textContent = questionArray[currentQuestion].a[2];
      answerC.addEventListener("click", correctAnswer);
      answerD.textContent = questionArray[currentQuestion].a[3];
      answerD.addEventListener("click", correctAnswer);
    } else {
      return gameOver();
    }
  }
}
// checks if user chooses the correct answer
function correctAnswer() {
  var answer = questionArray[currentQuestion].correct;
  var userChoice = this.textContent;
  if (userChoice !== answer) {
    timeLeft -= 5;
    timerEl.textContent="Time Remaining " + timeLeft;
  } else if (currentQuestion === 9 && userChoice === answer) {
    points += 10 + timeLeft;
    pointsEl.textContent = "Score " + points;
    gameOver();
  } else {
    points += 10;
    pointsEl.textContent = "Score " + points;
    currentQuestion++;
    renderQuestion();

  }
}

function restartButton() {
  restartBtn.addEventListener("click", function () {
    location.reload();
  });
}

function gameOver() {
  answersEl.style.display = "none";
  questionEl.style.display = "none";
  pointsEl.style.display = "none";
  submitFormEl.style.display = "block";
  restartBtn.style.display = "block";
  highScoreBtn.style.display = "block";
  timerEl.style.position = "relative";
  timerEl.style.bottom = "-5rem";
  restartButton();
  highScore();
}

function highScore() {
  localStorage.setItem("Score", points);
}

// TODO see if you can get multiple high score values to save

function init() {
  restartBtn.style.display = "none";
  pointsEl.style.display = "none";
  answersEl.style.display = "none";
  submitFormEl.style.display = "none";
}

submitBtn.addEventListener("click", function () {
  event.preventDefault();
  location.replace("high-scores.html");
  localStorage.setItem("PlayerName",userImput.value)
});

startBtn.addEventListener("click", function () {
  startBtn.style.display = "none";
  submitFormEl.style.display = "none";
  pointsEl.style.display = "block";
  pointsEl.textContent = "Score " + points;
  highScoreBtn.style.display = "none";
  countDown();
  renderQuestion();
});

init();