var readlinesync = require('readline-sync');
var chalk = require('chalk');


var score = 0;

var userName = readlinesync.question(chalk.bgBlue("Hi Buddy, What's Your Name: "));

console.log("Glad to have you here ",userName," Let's see how well do you know me.");

console.log(chalk.blue("*****************************************"))
console.log(chalk.yellowBright("GENERAL INSTRUCTIONS: "))
console.log("1. You will be asked a total of 5 questions about me");
console.log("2. To avoid errors, please use lowercase letters only in your answer");
console.log("3. Based on your answers a score will be generated & displayed");
console.log("Without any further talk, let's start")
console.log(chalk.blue("******************************************"))

var questions = [
  {
    question: "Would i rather live without internet or cellphone?",
    answer: "internet"
  },
  {
    question: "What weather do I prefer? (hot/cold)",
    answer: "cold"
  },
  {
     question: "What's my fav food?",
     answer: "pizza"
  },
  {
     question: "Am I a dog or a cat person?",
     answer: "dog"
  },
  {
     question: "What is my favorite social media platform?",
     answer: "twitter"
  }
]

function play(question,answer)
{
  var userAnswer = readlinesync.question(question);
  if(userAnswer==answer)
  {
    console.log(chalk.greenBright("Correct"));
    score++;
  }
  else
  {
    console.log(chalk.redBright("Oops!, That's incorrect"));
  }
  console.log(chalk.blue("----------------------------------------------------"));
}

for(var i=0; i<questions.length; i++)
{
  play(questions[i].question,questions[i].answer);
}

console.log(chalk.blue("*******************************************"))

if(score>=3)
{
console.log("Yayyy, You scored: ",score,"/5");
}
else
{
  console.log("Oops, You score: ",score,"/5"," Not bad eh? ");
}


