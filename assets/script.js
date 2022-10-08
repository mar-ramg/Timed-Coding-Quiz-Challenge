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
