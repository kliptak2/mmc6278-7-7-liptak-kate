// Your code here

// Global variables
var quizDiv = document.getElementById("quiz");
var intervalId = null;
var interval = null;
var index = 0;
var currentQuestion = null;
var startBtn = null;
var correct = 0;             // Don’t need to keep track of incorrects. Just corrects/questionsArr.length
var questionIndex = 0;
var questionsArr = [
    {
        question: "Which of these states doesn't have a 'panhandle'?",
        answer: "Ohio",
        options: [
            "Florida",
            "Oklahoma",
            "Ohio",
            "Texas",
        ]
      },
      {
        question: "Which one of these Presidents is carved on Mount Rushmore?",
        answer: "Theodore Roosevelt",
        options: [
            "Grover Cleveland",
            "James Madison",
            "Franklin D. Roosevelt",
            "Theodore Roosevelt",
        ]
      },
      {
        question: "Does any part of the Rocky Mountains touch California?",
        answer: "No",
        options: [
            "Yes",
            "No",
        ]
      },
      {
        question: "Which of these states is farthest south?",
        answer: "Texas",
        options: [
            "California",
            "Ohio",
            "Texas",
            "Wyoming",
        ]
      },
      {
        question: "Which of these states appears rectangular on maps?",
        answer: "Colorado",
        options: [
            "Colorado",
            "Georgia",
            "Minnesota",
            "West Virginia",
        ]
      },
];
//Generate Question
var generateQuestion = function (index){
    if (index >= questionsArr.length){
        endGame();
        return;
    }
    var question = questionsArr[index];
    buildQuizHTML(question);
    startCountdown(30);
};

//Start game
function startGame() {
    var previousScore = localStorage.getItem("previous-score") // try to find prev score
    var prevScoreEl = document.createElement("p"); //create a place to display it
    if (previousScore){                            //if prev score exists, display it
        prevScoreEl.innerHTML = `Previous Score: ${previousScore}%`
    };
    var btn = document.createElement("button");   // make button
    btn.id = "start-quiz";
    btn.innerHTML = "Start Quiz";
    btn.onclick = handleNewQuestion;
    quizDiv.replaceChildren(prevScoreEl, btn)
};
    
function handleNewQuestion() {
    console.log("in handle new question")
    if (questionIndex >= questionsArr.length){
        endGame();
        return          //everything after this line (in this function) shouldn't happen
    }
    if (questionIndex === 0){   //if we're on the first question
        quizDiv.innerHTML === ""  //what it's displaying
    }
    currentQuestion = questionsArr[questionIndex]
    buildQuizHtml();
    startCountdown();
};
    
function buildQuizHtml() {
    var p = document.createElement("p");  //document.createElement(“p”) with question.question as innerHTML
    p.innerHTML = currentQuestion.question;  //".question" comes from property in array
    var innerDiv = document.createElement("div");   //document.createElement(“div") with id of “innerDiv”
    innerDiv.id = "innerDiv";
    for (i=0; i<currentQuestion.options.length; i++){
        var option = currentQuestion.options[i];
        var btn = document.createElement("button"); 
        btn.value = option;                          //btn.value = <option> (this is hidden)
        btn.innerHTML = option;                      //btn.innerHtml = <option> (this will be seen)
        btn.onclick = handleAnswer;                //btn.onclick = handleAnswer
        innerDiv.append(btn);                        //innerDiv.append(btn) 
    }
    //Loop over options: for each option let btn = document.createElement(“button”)
    var localtimerEl = document.createElement("p");   //Once all buttons are created and appended to innerDiv, document.
    localtimerEl.id = "timer"                         //createElement(“p”) with id=”timer”
    quizDiv.replaceChildren(p, innerDiv, localtimerEl);
};

function startCountdown() {
    var secondsRemaining = 30;               //let secondsRemaining = 30
    var localTimerEl_2 = document.getElementById("timer");   //Get the <p> element we just created that will hold the current = timer value and set it to 30
    localTimerEl_2.innerHTML = secondsRemaining;   //display the seconds remaining
    intervalId = setInterval(function() {       //timerId = setInterval(()=>{
        secondsRemaining--;                  //secondsRemaining --
        localTimerEl_2.innerHTML = secondsRemaining;   //timer.innerHtml = secondsRemaining
        if (secondsRemaining === 0){         //Check if secondsRemaining === 0, if yes handleTimerRunout()
            timerRunout();
        }
    }, 1000);                                // }, 1000)
};
    
function timerRunout() {
    clearInterval(intervalId);
    questionIndex++;
    handleNewQuestion();
};
    
function handleAnswer(e) {
    if (e.target.value === questionsArr[questionIndex].answer){   //compare e.target.value to question.answer
        correct++;                                                //update correct if the user picked the right answer
    }
    clearInterval(intervalId);
    questionIndex++;
    handleNewQuestion();                                          //call handleNewQuestion function
};

function endGame() {
    var score = Math.round((correct/questionsArr.length) * 100);
    localStorage.setItem("previous-score", score);
    correct = 0;
    questionIndex = 0;
    startGame();
};

window.onload = startGame();

/*
NOTES
*Can’t use a for loop to go from question to question bc can’t stop them w/o using alert, confirm, prompt. CAN use a for loop if don't neet to stop them.
*You should be able to go to the next question with a click or a timeout. So on page you'll cycle through the data
*setInterval => do something every set amount of time until the interval is canceled
*setTimeout => wait a set amount of time then do something once
*/