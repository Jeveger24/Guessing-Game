var number = Math.floor(Math.random() * 100);
var guess;
var limit = 5;
var won = false;
var guesses = [];

// program data:
function previousGuess(){
    for (var i = 1; i < guesses.length; i++){
        if(guesses[i] == guess){
            return true;
        }
    }
    return false;
}

for (var i = 1; i <= limit; i++){
// prompt user for their guess
    do{
        var guess = parseInt(prompt("Guess a number"));
    } while(isNaN(guess) || previousGuess(guess));

// if correct: let the user know they won
    if (guess == number){
        document.write("You have guessed the right number!\n    ");
        won = true;
        break;
    }
// if incorrect: let the user know
    else{
        guesses[i] = guess;
        alert("Wrong, you have " + (limit-i) + " more tries. \n");
        if (guess < number){
            alert("Your guess is too low");
        }
        else{
            alert("Your guess is too high");
        }
    }
}

if (won == true){
    document.write("You have won the game!")
}
else{
    document.write("Game Over! The number is " + number + ".")
}

