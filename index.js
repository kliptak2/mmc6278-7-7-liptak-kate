// Your code here

// Global variables
var quizDiv = document.getElementById("quiz");
var timerId = "";
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

//Simulate loop through quiz questions
// Global variable for index - up top
// Index = 0 - up top
// currentQuestion = null - up top
// Function for timer runout: index++
// Function for user clicked on an answer: index++ -> handleNewQuestion()

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
    // try to find prev score
    // if yes display it
    // make button
    // button will start game
    // Add button (and maybe previous score) to screen
    //     element.replaceChildren(prevScore, button)
        //create empty <p> tag to maybe put previous score in
        //Get “previous-score” from localStorage
        //if you get a real value for “previous-score” put it in <p> tag
        //Create your start button document.createElement(“button”)
        //startBtn.onclick = handleNewQuestion
        //quiz.replaceChildren(prevScore, button)
};
    
function handleNewQuestion() {
    //Check if game is over before trying to get next question
    //if index === 0
//set previousScore <p> tag innerHtml = “” even if it already was empty
    //quiz.removeChild(startBtn)
    //is our index >= length of the questions arr
//if the index is not possible, end the game gameOver()
//     question = questionsArr[index]
//     setQuizHtml()
// createCountdown()
};
    
function buildQuizHtml() {
    var p = document.createElement(“p”);   //document.createElement(“p”) with question.question as innerHTML
    p.innerHTML = question.question;
    var innerDiv = document.createElement("div");   //document.createElement(“div") with id of “innerDiv”
    innerDiv.id = "innerDiv";

    //Loop over options: for each option let btn = document.createElement(“button”)
    var btn = document.createElement("button"); 
    btn.value = option;                          //btn.value = <option> (this is hidden)
    btn.innerHTML = option;                      //btn.innerHtml = <option> (this will be seen)
    btn.onclick = handleAnswer();                //btn.onclick = handleAnswer
    innerDiv.append(btn);                        //innerDiv.append(btn)
    var timerEl = document.createElement("p");   //Once all buttons are created and appended to innerDiv, document.createElement(“p”) with id=”timer”
    timerEl.id = timer
    //quiz.replaceChildren(question, innerDiv, timer)
};
    
function startCountdown() {
    var secondsRemaining = 30;               //let secondsRemaining = 30
    timer = getElementById("timer");         //Get the <p> element we just created that will hold the current timer value and set it to 30
    timerId = setInterval(() {                //timerId = setInterval(()=>{
        secondsRemaining--;                  //secondsRemaining --
        timer.innerHtml = secondsRemaining   //timer.innerHtml = secondsRemaining
        if (secondsRemaining === 0){         //Check if secondsRemaining === 0, if yes handleTimerRunout()
            timerRunout();
        }
    }, 1000);                                // }, 1000)
};
    
function timerRunout() {
    clearInterval();     //what interval?
    //update the global question index
    handleNewQuestion();
};
    
function handleAnswer(e) {
    if (e.target.value === questionsArr[questionIndex].answer){   //compare e.target.value to question.answer
        correct++;                                                //update correct if the user picked the right answer
    }
    clearInterval(); //what interval?
    //update the global question index
    handleNewQuestion();                                          //call handleNewQuestion function
};

function endGame() {
    var score = Math.round((correct/questionsArr.length) * 100);
    localStorage.setItem(“previous-score”, score);
    correct = 0;
    questionIndex = 0;
    startGame();
};

window.onload = startGame();

/*
NOTES
*Can’t use loops for this assignment bc can’t stop them w/o using alert, confirm, prompt
*You should be able to go to the next question with a click or a timeout. So on page you'll cycle through the data
*setInterval => do something every set amount of time until the interval is canceled
*setTimeout => wait a set amount of time then do something once
*/