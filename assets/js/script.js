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
var incorrectEl = document.getElementById("incorrect");
var timeLeft = 60;
var points = 0;
var currentQuestion = 0;
var playerName;

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
// function to shuffle the questions every time the quiz starts
function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = 
    [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

// function to render question to page
function renderQuestion() {
  questionEl.style.display = "block";
  startBox.style.display = "none";
  //   for loop which displays question and answers
  for (var i = 0; i < questionArray.length; i++) {
    // currentQuestion = Math.floor(Math.random() * questionArray.length)
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
    timerEl.textContent = "Time Remaining " + timeLeft;
    incorrectEl.textContent = "Incorrect!";
  } else if (currentQuestion === 9 && userChoice === answer) {
    points += 10 + timeLeft;
    pointsEl.textContent = "Score " + points;
    gameOver();
  } else {
    points += 10;
    pointsEl.textContent = "Score " + points;
    currentQuestion++;
    renderQuestion();
    incorrectEl.textContent = "";
  }
}

function restartButton() {
  restartBtn.addEventListener("click", function () {
    location.reload();
  });
}
// Triggered at the end of the game, whether time runs out or the user answers all questions
function gameOver() {
  answersEl.style.display = "none";
  questionEl.style.display = "none";
  pointsEl.style.display = "none";
  incorrectEl.style.display= "none";
  restartBtn.style.display = "block";
  highScoreBtn.style.display = "block";
  timerEl.style.position = "relative";
  timerEl.style.bottom = "-5rem";
  restartButton();
  highScore();
}
// Storing the point value to local storage for use on the high score page 
function highScore() {
  var getScore1 = localStorage.getItem("Score");
  var getScore2 = localStorage.getItem("Score2");
  var getScore3 = localStorage.getItem("Score3");
  submitFormEl.style.display = "none";
//  if no values on high score, places value at first place
  if (points > getScore1){
    localStorage.setItem("Score", points);
    playerName = "PlayerName";
    submitFormEl.style.display = "block";
// replaces highest score with new value if greater than previous
  } if (getScore1 > 0 && points > getScore1){
  submitFormEl.style.display = "block";
  localStorage.setItem("Score2", getScore1);
  localStorage.setItem("Score3", getScore2);
  var playerName3 = localStorage.getItem("PlayerName2");
  localStorage.setItem("PlayerName3", playerName3);
  var playerName2 = localStorage.getItem("PlayerName")
  localStorage.setItem("PlayerName2", playerName2);
  playerName = "PlayerName";
} 
// if player gets a new 2nd place score
if (getScore1 >= points && points >= getScore2){
  submitFormEl.style.display = "block";
  var playerName3 = localStorage.getItem("PlayerName2");
  localStorage.setItem("PlayerName3", playerName3);
  localStorage.setItem("Score3", getScore2);
  localStorage.setItem("Score2", points);
  playerName = "PlayerName2";
} 
// if player gets a new 3rd place score
 if (getScore1 > points && getScore2 >= points && points > getScore3){
  submitFormEl.style.display = "block";
  playerName = "PlayerName3"
  localStorage.setItem("Score3", points)
}
}

function init() {
  restartBtn.style.display = "none";
  pointsEl.style.display = "none";
  answersEl.style.display = "none";
  submitFormEl.style.display = "none";
}
// Sumbit button for entering name to put on high score page. 
submitBtn.addEventListener("click", function () {
  event.preventDefault(); 
  location.replace("high-scores.html");
  localStorage.setItem(playerName, userImput.value); 
  if (!userImput.value){
    return alert("You must enter a name to submit a high score.")
  }
});
// Start button to start the game and render the correct items on the page
startBtn.addEventListener("click", function () {
  startBtn.style.display = "none";
  submitFormEl.style.display = "none";
  pointsEl.style.display = "block";
  pointsEl.textContent = "Score " + points;
  highScoreBtn.style.display = "none";
  shuffle(questionArray);
  countDown();
  renderQuestion();
});

init();
