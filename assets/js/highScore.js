var highScoreEl = document.getElementById("score");
var userNameEl = document.getElementById("userName");
var getScore = localStorage.getItem("Score");
var getName = localStorage.getItem("PlayerName");
var submitFormEl = document.getElementById("submitForm");

function initHighScore() {
    highScoreEl.textContent = getScore;
    userNameEl.textContent = getName;
  }

  initHighScore();