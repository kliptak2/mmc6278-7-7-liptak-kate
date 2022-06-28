// Your code here
var questionsArr = [
    {
        question: "1",
        answer: "",
        options: [
            "A",
            "B",
            "C",
            "D",
        ]
      },
      {
        question: "2",
        answer: true
      },
      {
        question: "3",
        answer: true
      },
      {
        question: "4",
        answer: true
      },
      {
        question: "5",
        answer: true
      },
]
var button = document.createElement("button");
var prevScore = localStorage.getItem("prevScore")
var noScore = "0"

/*
PSEUDOCODE
Create <p>, <div>, and buttons inside <div id="quiz"></div>. Use button onclick?

Create a runQuiz function

Set timer

Capture user inputs

preventDefault()

Calculate score

Store score with localStorage.setItem("prevScore", value)

Make function to reset game
*/

// TO DO
// When the page loads, if the user has never played the game before, the game should display a "start quiz" button. The button MUST have an id attribute of "start-quiz"

// If the user has taken the quiz before, the app should display the previous score

// After starting the quiz, your program should select the first question in questionsArr and display the question as well as the possible choices (figure 3). The quiz should also display a timer that counts down from 30 one second at a time (figure 3.1). Please use JavaScript's setInterval and clearInterval methods to create the timer

// Selecting one of the options or running out of time should cause the app to immediately cycle to the next question and set of choices in questionsArr. There should be no messaging or feedback displayed to the user after making a selection or running out of time

// After the last question is answered or time runs out, the game should display the "start quiz" button along with a score that is calculated from the amount of correctly answered questions divided by the total number of questions. This number should be rounded to the nearest whole number

//To persist score data between games, the application should use the JavaScript localStorage API to store the user's most recent score under the key previous-score after each game and retrieve the score on page load. This means that if the user navigates away from the page and then later returns to the site, their previous score information should still be displayed.