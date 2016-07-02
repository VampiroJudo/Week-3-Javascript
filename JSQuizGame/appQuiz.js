var Question = require("./lib/question.js");
var Quiz = require("./lib/quiz.js");
var read = require('read');



//begins the quiz
console.log("Welcome to the USA quiz!" )
console.log("Lets see if you know your US history...")




//this connects with the Question class
var question1 = new Question("How many states are there in the United States?", "Fifty", 1);
var question2 = new Question("Who was the first president of the United States?", "George Washington", 2);
var question3 = new Question("What year was the United States founded", 1776, 3)


//array of questions
var questions = [question1, question2, question3];
var myQuiz = new Quiz(questions);
//connects the array to the Quiz class

myQuiz.getAnswer()