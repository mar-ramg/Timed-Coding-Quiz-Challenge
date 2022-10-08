var header = document.querySelector("#header");
var scoresBtn = document.querySelector("scores-button");
// var timer = document.querySelector("#time"); //

var welcome  = document.querySelector("#intro");
var startBtn = document.querySelector("#start-button");

var questionScreen = document.querySelector("#question-page");
var question = document.querySelector("#question");

var reactButton = document.querySelectorAll(".choices");
var answerBtn1 = document.querySelector("#answer-button-1");
var answerBtn2 = document.querySelector("#answer-button-2");
var answerBtn3 = document.querySelector("#answer-button-3");
var answerBtn4 = document.querySelector("#answer-button-4");
var answerCheck = document.querySelector("#check-answer");

var completeScreen = document.querySelector("#complete-screen");
var score = document.querySelector("#final-score");
var userInitial = document.querySelector("#enter-initials");
var submitBtn = document.querySelector("#submit-button");

var highscorePage = document.querySelector("#highscore-page");
var scoreRecord = document.querySelector("#score-record");
var backBtn = document.querySelector("#back-button");
var clearBtn = document.querySelector("#clear-button");

var questionSource = [
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
        answer: "c"
    },
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c"
    },
    {
        question: "The first index of an array is ____.",
        choices: ["a. 1", "b. 8", "c. any", "d. 0"],
        answer: "d"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choices: ["a. onclick", "b. onchange", "c. onmouseclick", "d. click"],
        answer: "a"
    },
    {
        question: "What color is #FFFFFF?",
        choices: ["a. black", "b. white", "c. grey", "d. gold"],
        answer: "b"
    }
]

var timeLeft = document.getElementById("time");

var secondsLeft = 60;
var questionNumber = 0;
var totalScore = 0;
var questionCount = 1;

function countdown() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeLeft.textContent = "Timer:" + secondsLeft + "s";

        if(secondsLeft <=0){
            clearInterval(timerInterval);
            timeLeft.textContent = "Time is up!";
            finish.textContent = "Time is up!";
            gameOver();
        } 
        else if(questionCount >= questionSource.length +1) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
    
}

function startQuiz() {
    welcome.style.display ="none";
    questionScreen.style.display ="block";
    questionNumber = 0;
    countdown();
    showQuestion(questionNumber);
}

function showQuestion(n) {
    question.textContent = questionSource[n].question;
    answerBtn1.textContent = questionSource[n].choices[0];
    answerBtn2.textContent = questionSource[n].choices[1];
    answerBtn3.textContent = questionSource[n].choices[2];
    answerBtn4.textContent = questionSource[n].choices[3];
    questionNumber = n;
}

function answerCheck (event) {
    event.preventDefault();
    answerCheck.style.display = "block";
    setTimeout(function () {
        answerCheck.style.display = "none";
    }, 1000);
}





