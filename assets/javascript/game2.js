//Code works, but came from a website; trying to use elements of it in my own code.

//These first three variables are to pick a random word.
var words = ["skate", "guitar", "laugh", "party", "shirt"]

var wordValue = Math.floor(Math.random() * 4) + 1;

var newWord = words[wordValue];

console.log("Word is: " + newWord);

var misses = 0;
var answerLines = [];

for (var i = 0; i < newWord.length; i++) {
    answerLines[i] = "_";
}

var remainingLetters = newWord.length;


while (remainingLetters > 0 && misses < 6) {
    alert(answerLines.join(" "));
    var guess = prompt("Guess a letter, any letter!");

    var matchesNone = true; //boolean to track if guess matched any letters

    for (var j = 0; j < newWord.length; j++) {

        if (newWord[j] === guess) {
            answerLines[j] = guess;
            remainingLetters--;
            matchesNone = false; //the guess matched atleast one letter
        }
    }

    if (matchesNone) { //the guess matched none of the letters
        misses ++;
        alert("That was is incorrect.  You have " + misses + " of 6 misses.");
    }
}

if(remainingLetters>0) {
    alert("You failed to guess the word: " + newWord);
}else{
    alert("You guessed the word!  It was: " + newWord);
}