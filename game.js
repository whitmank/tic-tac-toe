// Functions

function getPlayerChoice() {
    let choice = prompt("1 = Rock ; 2 = Paper ; 3 = Scissors")
    switch (Number(choice)) {
        case 1: return "rock"
            break;
        case 2: return "paper"
            break;
        case 3: return "scissors"
            break;
    }
}

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    switch (random) {
        case 1: return "rock"
            break;
        case 2: return "paper"
            break;
        case 3: return "scissors"
            break;
    }
}

function round() {

    let p = getPlayerChoice();
    let c = getComputerChoice();
    // Print selections
    console.log("Player > " + p + " - " + c + " < Computer");
    // Tie
    if (p === c) {
        console.log("Tie. Play again.");
        round();
    }
    // Player Wins
    else if ((p == "rock" && c == "scissors") || (p == "paper" && c == "rock") || (p == "scissors" && c == "paper")) {
        console.log("Player wins.");
        pScore++;
        return;
    }
    // Computer Wins
    else {
        console.log("Computer wins.");
        cScore++;
        return;
    }
}

let pScore = 0;
let cScore = 0;

function game() {
    // Play rounds until one player's score is equal to 3.
    while ((pScore < 3) && (cScore < 3)) {
        round();
        console.log("Score: " + pScore + "-" + cScore);

    }
    // Declare winner.
    if (pScore == 3) {
        console.log("PLAYER WINS THE GAME!");
    } else {
        console.log("COMPUTER WINS THE GAME!");
    }
}

// Calls
game()
