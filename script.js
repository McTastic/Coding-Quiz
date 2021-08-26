var startBtn = document.getElementById("start");
var timerEl = document.getElementById("time");
var startBox = document.getElementById("start-box");
var questionEl = document.getElementById("qBox");

function countDown() {
    var timeLeft = 30;
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerEl.textContent = "Time's Up!";
            clearInterval(timeInterval);
        }
    }, 1000);
}


// Question arrays  
var questionArray = [{
    q: "What is a question?",
    a: [
        "Answer1",
        "Answer2",
        "Answer3",
        "Answer4",
    ],
    correct: "Answer2"
},
{
    q: "What is a question2?",
    a: [
        "Answer1",
        "Answer2",
        "Answer3",
        "Answer4",
    ],
    correct: "Answer2"
},
{
    q: "What is a question3?",
    a: [
        "Answer1",
        "Answer2",
        "Answer3",
        "Answer4",
    ],
    correct: "Answer2"
}, {
    q: "What is a question4?",
    a: [
        "Answer1",
        "Answer2",
        "Answer3",
        "Answer4",
    ],
    correct: "Answer2"
}, {
    q: "What is a question5?",
    a: [
        "Answer1",
        "Answer2",
        "Answer3",
        "Answer4",
    ],
    correct: "Answer2"
}, {
    q: "What is a question6?",
    a: [
        "Answer1",
        "Answer2",
        "Answer3",
        "Answer4",
    ],
    correct: "Answer2"
}, {
    q: "What is a question7?",
    a: [
        "Answer1",
        "Answer2",
        "Answer3",
        "Answer4",
    ],
    correct: "Answer2"
}, {
    q: "What is a question8?",
    a: [
        "Answer1",
        "Answer2",
        "Answer3",
        "Answer4",
    ],
    correct: "Answer2"
}, {
    q: "What is a question9?",
    a: [
        "Answer1",
        "Answer2",
        "Answer3",
        "Answer4",
    ],
    correct: "Answer2"
}, {
    q: "What is a question10?",
    a: [
        "Answer1",
        "Answer2",
        "Answer3",
        "Answer4",
    ],
    correct: "Answer2"
},
]

// function to render question to page 
function renderQuestion() {
    startBox.style.display = "none";
    questionEl.innerHTML = questionArray[0].q;
}


startBtn.addEventListener("click", function () {
    countDown();
    renderQuestion(); console.log(renderQuestion);
    startBtn.disabled = true;

})

