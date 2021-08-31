var highScoreEl = document.getElementById("score");
var highScoreEl2 = document.getElementById("score2");
var highScoreEl3 = document.getElementById("score3");
var userNameEl = document.getElementById("userName");
var userNameEl2 = document.getElementById("userName2");
var userNameEl3 = document.getElementById("userName3");
var getScore1 = localStorage.getItem("Score");
var getScore2 = localStorage.getItem("Score2");
var getScore3 = localStorage.getItem("Score3");
var getName = localStorage.getItem("PlayerName");
var getName2 = localStorage.getItem('PlayerName2');
var getName3 = localStorage.getItem("PlayerName3");
var submitFormEl = document.getElementById("submitForm");

function initHighScore() {
    highScoreEl.textContent = getScore1;
    highScoreEl2.textContent = getScore2;
    highScoreEl3.textContent = getScore3;
    userNameEl.textContent = getName;
    userNameEl2.textContent = getName2;
    userNameEl3.textContent = getName3;
  }

  initHighScore();