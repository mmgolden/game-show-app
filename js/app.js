// Variables
let game;
const startBtn = document.getElementById('btn__reset');
const keyboardBtns = document.getElementById('qwerty');

// Hides the start screen overlay
function resetDisplay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

// When a player selects a letter
function markButton(event) {
    
    // Disable the button on the onscreen keyboard
    event.target.disabled = true;

    // Call the handleInteraction() method of the Game class
    game.handleInteraction(event);
}

// When the "Start Game" button is clicked
startBtn.addEventListener('click', function() {
    // Call the resetDisplay() function, create a new Game object, and start the game
    resetDisplay();
    game = new Game();
    game.startGame();
});

// When a keyboard button is clicked
keyboardBtns.addEventListener('click', function(event) {
    // If a button is clicked, call the markButton() function
    if (event.target.tagName === 'BUTTON') {
        markButton(event);
    }
});

// Extra: Let players use the computer keyboard to enter guesses. You'll need to use the keypress event
// Extra: Add a button to the “success” and “failure” screens that resets the game
