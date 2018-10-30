// Perform basic DOM selection, add event handlers, and to reset the game when it ends
// This file creates a new instance of the Game class, adds event listeners for the onscreen keyboard and a function to display the game

// This function hides the start screen overlay
function resetDisplay() {

}

// This function is called when a player selects a letter
function markButton() {
    // It disables the button on the onscreen keyboard and calls the handleInteraction() method of the Game class
}

// Add an event listener to the "Start Game" button
const startBtn = document.getElementById('btn__reset');
startBtn.addEventListener('click', function() {
    // Calls the resetDisplay() function, creates a new Game object, and starts the game
    const game = new Game();
});

// Add event listeners to each of the keyboard buttons
const keyboardBtns = document.getElementById('qwerty');
keyboardBtns.addEventListener('click', function() {
    // Clicking a button calls the markButton() function
    // Only the keys of the onscreen keyboard should be clickable
});

// Extra: Let players use the computer keyboard to enter guesses. You'll need to use the keypress event
// Extra: Add a button to the “success” and “failure” screens that resets the game
