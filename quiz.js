//THE QUIZ QUIZ!

//Ask a series of—three—questions and evaluate each answer
//To do this you’ll use a TWO DIMENSIONAL ARRAY to hold the questions and the answers. 
//You’ll use a LOOP to cycle through each question—ask it and compare it to the response in the array. You can use the prompt method to ask the question. 
var guess;
var guessCountCorrect = 0;
var guessCountWrong = 0;
var correctGuess = false;
var question;
var answer;
var userInput;
var html;

var unitedStates = [
	["How many states are in the U.S.A.?", 50],
	["How many oceans border the continent?", 2],
	["What are the flag's colors? Write them in alphabetical order with only spaces in between (not commas).", "blue red white"]
];

var answersRightWrong = [
  [50, userInput],
  [2, userInput],
  ["blue red white", userInput]
  ];
  
var youGotRight = [];

var youGotWrong = [];

function print(message) {
  document.write(message);
}

function html(questions) {
  var listHTML = '<ol>';
  for ( var i = 0; i < youGotRight.length; i += 1) {
    listHTML += '<li>' + youGotRight[i][0] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

function html(questions) {
  var listHTML = '<ol>';
  for ( var i = 0; i < youGotWrong.length; i += 1) {
    listHTML += '<li>' + youGotWrong[i][0] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

for (var i = 0; i < unitedStates.length; i += 1 ) {
		do {
		  var userInput = prompt(unitedStates[i][0]);
		  var question = unitedStates[i][0];
		  var answer = answersRightWrong[i][0];
		        if (userInput != answer) {
		          guessCountWrong += 1;
		          youGotWrong.push(question);
  		      document.write("You guessed " + userInput + ". But the correct answer was " + answer);
  		    } else {
  		      if (userInput == answer) {
  		        guessCountCorrect += 1;
  		        youGotRight.push(question);
  		        document.write("Great! You guessed " + userInput + " and that is the correct answer!");
  		      }
  		    }
  		  } while (correctGuess = false)  
}
document.write("You got " + guessCountCorrect + " correct and " + guessCountWrong + " wrong.");

html(youGotRight);
html(youGotWrong);


//The program should keep track of the number of questions answered correctly
//You’ll also use a CONDITIONAL STATEMENT, to see if the players answer matches the real answer.


//After all questions are answered the program should display the number of questions correct
//By the end of the program you should know how many questions were answered correctly, so then PRINT that out to the screen. 
//It will also display which questions they got correct
//It will also display which they got wrong