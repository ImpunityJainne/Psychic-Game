// Remember to reference the rock, paper, scissors game


// 4. Wins: (# of times the user has guessed the letter correctly)

var wins = 0;
console.log("Wins is set to " + wins + ".");

document.getElementById("winsContainer").innerHTML = "Wins: " + wins;


// 5. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

var losses = 0;
console.log("Losses is set to " + losses + ".");

document.getElementById("lossesContainer").innerHTML = "Losses: " + losses;


// 6. Guesses Left: (# of guesses left. This will update)

var letter = "";

var guessesLeft = 9;
console.log("Guesses left: " + guessesLeft);

document.getElementById("turnsContainer").innerHTML = "Guesses left: " + guessesLeft;


// randomly generate a letter

var compLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
console.log("The computer has selected " + compLetter);


// 7. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

document.onkeyup = function(event) {
    guessesLeft--;
    letter = event.key.toLowerCase();
    console.log("User typed " + letter + ", which compares to computer's " + compLetter);
    document.getElementById("guesses").innerHTML += letter + " ";
    document.getElementById("turnsContainer").innerHTML = "Guesses left: " + guessesLeft;

    if (letter === compLetter) {
        wins++;
        document.getElementById("winsContainer").innerHTML = "Wins: " + wins;
        guessesLeft = 9;
        document.getElementById("turnsContainer").innerHTML = "Guesses left: " + guessesLeft;
        alert("Congratulations, you correctly guessed the letter \"" + compLetter + "\"!");
        document.getElementById("guesses").innerHTML = "";
        compLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        console.log("The computer has selected " + compLetter);
     };

     if (guessesLeft === 0 && letter !== compLetter) {
        losses++;
        document.getElementById("lossesContainer").innerHTML = "Losses: " + losses;
        guessesLeft = 9;
        document.getElementById("turnsContainer").innerHTML = "Guesses left: " + guessesLeft;
        alert("Aww, you didn't win. The correct letter was: \"" + compLetter + "\"!");
        document.getElementById("guesses").innerHTML = "";
        compLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        console.log("The computer has selected " + compLetter);
     }
}


// 8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).




// 9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).