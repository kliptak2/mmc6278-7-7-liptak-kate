// Your code here

// Global variables
var quizDiv = document.getElementById("quiz");
var intervalId = null;
var index = 0;
var currentQuestion = null;
var correct = 0;                   // Don’t need to keep track of incorrects. Just corrects/questionsArr.length
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
    if (index >= questionsArr.length){     //if the index position is >= to the length of the array, end the game
        endGame();
        return;
    }
    var question = questionsArr[index];
    buildQuizHTML(question);
    startCountdown(30);
};

//Start game
function startGame() {
    var previousScore = localStorage.getItem("previous-score")       //try to find prev score
    var prevScoreEl = document.createElement("p");                   //create a <p> to display it
    if (previousScore){                                              //if prev score exists, display it
        prevScoreEl.innerHTML = `Previous Score: ${previousScore}%`
    };
    var btn = document.createElement("button");                      // make a button. This is a local var, can reuse btn
    btn.id = "start-quiz";                                           //assign it an ID
    btn.innerHTML = "Start Quiz";                                    //set what btn will display
    btn.onclick = handleNewQuestion;                                 // you don't want to call the function (), just assign it
    quizDiv.replaceChildren(prevScoreEl, btn)
};
    
function handleNewQuestion() {
    console.log("in handle new question")
    if (questionIndex >= questionsArr.length){
        endGame();
        return                                               //return stops everything after this line ffrom running (in this function only) 
    }
    if (questionIndex === 0){                                //if we're on the first question
        quizDiv.innerHTML === ""                             //display it
    }
    currentQuestion = questionsArr[questionIndex]            //display the current questionIndex in the elements created in buildQuizHtml and start the counter
    buildQuizHtml();
    startCountdown();
};
    
function buildQuizHtml() {
    var p = document.createElement("p");                     //make a "p"
    p.innerHTML = currentQuestion.question;                  //display the question in the <p>. ".question" comes from the question property in the array
    var innerDiv = document.createElement("div");            //make a div
    innerDiv.id = "innerDiv";                                // give it an ID
    for (i=0; i<currentQuestion.options.length; i++){        //loop over the questions in the array
        var option = currentQuestion.options[i];             //option = the 4 answer choices for the selected question
        var btn = document.createElement("button");          //for each option, make a btn with the following properties
        btn.value = option;                                  //(this is hidden)
        btn.innerHTML = option;                              //(this will be seen)
        btn.onclick = handleAnswer;                          //don't call function, just assign it to onclick
        innerDiv.append(btn);                                //append the btns to the div
    }
    var localtimerEl = document.createElement("p");          //once all buttons are created and appended, make a "p"
    localtimerEl.id = "timer"                                //give it an ID
    quizDiv.replaceChildren(p, innerDiv, localtimerEl);      //swap out the elements
};

function startCountdown() {
    var secondsRemaining = 30;                               //let secondsRemaining = 30
    var localTimerEl_2 = document.getElementById("timer");   //Get the "p" element we just created that will hold the current = timer value and set it to 30
    localTimerEl_2.innerHTML = secondsRemaining;             //display the seconds remaining
    intervalId = setInterval(function() {                    //timerId = setInterval(()=>{
        secondsRemaining--;                                  //decrease seconds
        localTimerEl_2.innerHTML = secondsRemaining;         //display the secondsRemaining, again
        if (secondsRemaining === 0){                         //Check if secondsRemaining === 0, if yes run timerRunout
            timerRunout();
        }
    }, 1000);                                                // 1000 milliseconds = 1 sec
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