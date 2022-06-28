// Your code here
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
        options [
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
]
var button = document.createElement("button");
var prevScore = localStorage.getItem("prevScore")
var noScore = "0"
var timerId = ""

/*
PSEUDOCODE
Create <p>, <div>, and buttons inside <div id="quiz"></div>. Use button onclick?

Create a runQuiz function
function runQuiz()
{
  let correct = 0
  let incorrect = 0

  for (let i = 0; i < questionsArr.length; i++)
    {
     let answerFromUI = confirm(questionsArr[i].question)

     if(answerFromUI == questionsArr[i].answer)
     {
      correct ++
     }
     else
     {
         incorrect ++
     }
 };

 let answerPercentage = 0.00

 answerPercentage = correct / (incorrect + correct) * 100
 alert("Congratulations, you got a " + Math.round(answerPercentage).toString() + '%')
}

function startTimer (onSubmit "start quiz")
function stopTimer()
    clearInterval(timerID)
    countEl.textContent = ""

Capture user inputs

preventDefault()

Calculate score

Store score with localStorage.setItem("prevScore", value)


Make function to reset game
If prevScore is in local storage, display it
*/

// TO DO
// When the page loads, if the user has never played the game before, the game should display a "start quiz" button. The button MUST have an id attribute of "start-quiz"

// If the user has taken the quiz before, the app should display the previous score

// After starting the quiz, your program should select the first question in questionsArr and display the question as well as the possible choices (figure 3). The quiz should also display a timer that counts down from 30 one second at a time (figure 3.1). Please use JavaScript's setInterval and clearInterval methods to create the timer

// Selecting one of the options or running out of time should cause the app to immediately cycle to the next question and set of choices in questionsArr. There should be no messaging or feedback displayed to the user after making a selection or running out of time

// After the last question is answered or time runs out, the game should display the "start quiz" button along with a score that is calculated from the amount of correctly answered questions divided by the total number of questions. This number should be rounded to the nearest whole number

//To persist score data between games, the application should use the JavaScript localStorage API to store the user's most recent score under the key previous-score after each game and retrieve the score on page load. This means that if the user navigates away from the page and then later returns to the site, their previous score information should still be displayed.