// Creating variables to hold the number of wins, losses, and guesses.
// They start at zero.
var wins = 0;
var losses = 0;
var guesses = 0;
var displayGuesses = [];
var answerLines = [];

// Creates an array that lists out all of the possible words for the game.
var words = ["bulbasaur", "ivysaur", "venusaur"];

var computerPick = Math.floor(Math.random() * words.length);

//document.getElementById("#word").innerHTML = computerPick;

var newWord = words[computerPick];

var reset = function() {
	guesses = 0;
	displayGuesses = [];
	computerPick = Math.floor(Math.random() * words.length);
};

for (var i = 0; i < newWord.length; i++) {
    answerLines.push("_");
    }

var remainingLetters = newWord.length;

//The console logs are good checks for the code, but they are unnecessary once the game is finished.
console.log(computerPick);

var chars = newWord.split('');

//The console logs are good checks for the code, but they are unnecessary once the game is finished.
console.log(chars);

console.log(guesses)

document.onkeyup = function(event) {

var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

while (remainingLetters > 0 && guesses < 12) {

	var matchesNone = true;

	for (var j = 0; j < newWord.length; j++) {

		if (newWord[j] === userGuess) {
			answerLines[j] = userGuess;
			remainingLetters--;
			matchesNone = false; //the guess matched atleast one letter
        }
    }
		if (matchesNone) { //the guess matched none of the letters
		guesses ++;
	}
}

if(remainingLetters > 0 && guesses === 12) {
    alert("You failed to guess the word: " + newWord);
}

else if (remainingLetters === 0 && guesses < 12){
    alert("You guessed the word!  It was: " + newWord);
}

/*Pseudocode

if (userGuess is one of the letters in chars) {
	Blank should be uncovered;
}

else if (guesses < 12) {
	guesses++;
}

if (word is completely uncovered) {
	wins++;
	reset();
} */

if (guesses === 12) {
	losses++;
	reset();
}

}

var html =

	"<p>Letters already chosen: " + displayGuesses.join(' ') + "</p>" +
	"<p>wins: " + wins + "</p>" +
	"<p>losses: " + losses + "</p>" +
	"<p>guesses: " + guesses + "</p>" +
	"<p>guesses left: " + (12 - guesses) + "</p>"+
	"<p>Word: " + answerLines + "</p>";

// Set the inner HTML contents of the #game div to our html string
document.querySelector("#game").innerHTML = html;
