//start the game
var gamebox=document.querySelector(".gamebox");

//Start game button
var startgameBtn=document.querySelector("#start-game");
startgameBtn.addEventListener("click", startgame);

function startgame() {
    display();
    startgameBtn.setAttribute("class", "hide");
    console.log(startgameBtn);
    countDown();
}

//set timers
var timeEl=document.querySelector(".timer");
var timeLeft=60;

function countDown() {
    var timer = setInterval(function() {
        timeLeft--;
    var setTime=document.querySelector(".timer")
        setTime.textContent = timeLeft;
        if (timeLeft===0) {
            clearInterval(timer);
        }
    }, 1000);
    }


//Trivia qestions 

//connect questions to their right answers
//first question on top of the page
//4 multiple choice answer below
//correct answer = alert correct and move on to next qeustion
//wrong= alert wrong! then move on to next question
//tally the point on the side of score
//leaderboard: email form and current rank


function Gameset (questions, options, answers) {
    this.questions= questions; 
    this.options=options;
    this.answers=answers;
}

var gameset01 = new Gameset ("What is the name of the tallest mountain in the world?", ["Kangchenjunga", "Mount Everest", "K2", "Mt. Dhaulagiri"], "Mount Everest");
console.log(gameset01);
var gameset02 = new Gameset ("Which country has the largest population in the world?", ["India", "Russia", "United States", "China"], "China");
var gameset03 = new Gameset ("What is the name of longest river in Africa?", ["Limpopo River", "Congo River", "Nile River", "Zambezi River"], "Nile River");
var game = [gameset01, gameset02, gameset03];


function display() {
    var questionsets=document.createElement("ul");
    questionsets.textContent=gameset01.questions;
    gamebox.append(questionsets);
    for (var i=0; i<gameset01.options.length; i++) {
    var choices = document.createElement("button");
    choices.textContent=gameset01.options[4];
    gamebox.append(choices);
    }
    

//questionEl.textContent=trivia[0].question2;
//gamebox.append(questionEl)
}
