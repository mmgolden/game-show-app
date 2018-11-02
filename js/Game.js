// Game class
class Game {
    constructor() {
        // The number of missed guesses by the player
        this.missed = 0;
        // An array of phrases to use with the game
        this.phrases = ['best of luck', 'a way of life', 'catch a wave', 'dawn to dusk', 'eat my words', 'a mixed bag', 'a new twist', 'all fired up','back in my day', 'do the hustle', 'drop the ball', 'far from over', 'fit for a king', 'seize the day','two thumbs up'];
        // Phrase instance with random phrase to use in the game
        this.phrase = this.createPhrase();
    }

    // Get a random phrase from the phrases array
    getRandomPhrase() {
        const index = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[index];
    }

    // Create a new instance of the Phrase class
    createPhrase() {

        // Get a random phrase
        const randomPhrase = this.getRandomPhrase();

        // Create a new instance of the Phrase class
        return new Phrase(randomPhrase);
    }

    // Checks to see if the letter selected by the player matches a letter in the phrase
    handleInteraction(event) {

        // Returns true if the letter matches a letter in the phrase
        const match = this.phrase.checkLetter(event).match;

        // If the selected letter matches
        if (match) {

            // Call the showMatchedLetter() method on the phrase and then call the checkForWin() method
            this.phrase.showMatchedLetter(event);
            this.checkForWin();

        // Otherwise call the removeLife() method
        } else {
            this.removeLife();
        }
    }

    // Removes a life
    removeLife() {

        // Add 1 to the number of missed guesses
        this.missed += 1;
        
        // Hide the heart
        const hearts = Array.from(document.querySelectorAll('.tries'));
        hearts[hearts.length - 1].className = 'hidden';

        // If the player has 5 missed guesses, call gameOver()
        if (this.missed === 5) {
            this.gameOver();
        }
    }

    // Checks to see if the player has selected all of the letters
    checkForWin() {

        // If there are the same number of shown letters as letters on the board, then the player wins
        const boardLetters = Array.from(document.querySelectorAll('.letter'));
        const shownLetters = Array.from(document.querySelectorAll('.show'));      
        if (boardLetters.length === shownLetters.length) {
            this.gameOver();
        }
    }

    // Show success or failure screen
    showOverlay(message) {
        
        // Show the overlay
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'flex';

        // Show a message
        const msg = document.getElementById('game-over-message');
        msg.textContent = message;

        // Change the text of the button
        const btn = document.getElementById('btn__reset');
        btn.textContent = 'Play Again';
    }

    // Displays a message if the player wins or a different message if they lose
    gameOver() {

        // If the player has 5 missed guesses then the game is over
        if (this.missed === 5) {
            this.showOverlay('Game over!');

        // If the player has less than 5 missed guesses then they won
        } else if (this.missed < 5) {
            this.showOverlay('You win!');
        }
    }

    // Start the game
    startGame() {
        // Add the random phrase to the board
        this.phrase.addPhraseToDisplay();
    }
}