// Variables
let game;
let pressedKeys = [];
const startBtn = document.getElementById('btn__reset');
const keyboardBtns = document.getElementById('qwerty');

// Resets the display
function resetDisplay() {

    // Remove message from overlay
    const msg = document.getElementById('game-over-message');
    msg.textContent = '';

    // Reset the board
    const board = document.getElementById('phrase');
    const listItems = Array.from(document.querySelector('#phrase ul').childNodes);
    if (listItems.length > 0) {
        listItems.forEach(listItem => board.firstElementChild.removeChild(listItem));
    }

    // Enable all the keys
    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => key.disabled = false);

    // Reset the hearts
    const hidden = Array.from(document.querySelectorAll('.hidden'));
    hidden.forEach(heart => heart.className = 'tries');

    // Reset the pressedKeys array
    pressedKeys = [];

    // Hide the start screen
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

// When a player selects a letter
function markButton(event) {

    // If a button is clicked
    if (event.type === 'click') {

        // Disable the button on the onscreen keyboard
        event.target.disabled = true;

        // Call the handleInteraction() method of the Game class
        game.handleInteraction(event);

    // If a key is pressed
    } else if (event.type === 'keypress') {

        // Disable the button on the onscreen keyboard
        const keys = Array.from(document.querySelectorAll('.key'));
        keys.forEach(key => {
            if (event.key === key.innerText) {
                key.disabled = true;
            }
        });

        // Add all of the pressed keys to the pressedKeys array
        pressedKeys.push(event.keyCode);

        // Only get the previous keys (not the current key)
        const previousKeys = pressedKeys.slice(0, pressedKeys.length - 1);

        // If the player presses a previous key, return false
        if (previousKeys.indexOf(event.keyCode) > -1) {
            event.preventDefault();
            return false;

        // Otherwise call handleInteraction()
        } else {
            game.handleInteraction(event);
        } 
    }
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

// When a key is pressed
document.addEventListener('keypress', function(event) {
    markButton(event);
});