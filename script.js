var possibleWords = ["array", "concat", "string", "boolean", "object", "attributes", "storage", "DOM", "append", "APIs", "timer", "variable", "conditional", "funtion", "iteration", "scope", "methods"];
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timeLeft");

var chosenWord = '';
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;