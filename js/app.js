// Variables
let game;
const startBtn = document.getElementById('btn__reset');
const keyboardBtns = document.getElementById('qwerty');

// Resets the display
function resetDisplay() {

    // Remove message from overlay
    const msg = document.getElementById('game-over-message');
    msg.textContent = '';

    // Get the board
    const board = document.getElementById('phrase');

    // Get the list items on the board
    const listItems = Array.from(document.querySelector('#phrase ul').childNodes);

    // Reset the board
    if (listItems.length > 0) {
        listItems.forEach(listItem => board.firstElementChild.removeChild(listItem));
    }

    // Enable all the keys
    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => key.disabled = false);

    // Reset the hearts
    const scoreboard = document.getElementById('scoreboard');
    const hearts = Array.from(document.querySelectorAll('.tries'));
    if (hearts.length < 5) {
        hearts.forEach(heart => scoreboard.firstElementChild.removeChild(heart));

        for (let i = 0; i < 5; i++) {
            const li = document.createElement('li');
            li.className = 'tries';
            const img = document.createElement('img');
            img.setAttribute('src', 'images/liveHeart.png');
            img.setAttribute('height', '35px');
            img.setAttribute('width', '35px');
            li.appendChild(img);
            scoreboard.firstElementChild.appendChild(li);
        }
    }

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

        // Call the handleInteraction() method of the Game class
        // game.handleInteraction(event);
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