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

    // Create a new instance of the Phrase class
    createPhrase() {

         // Get a random phrase
         const randomPhrase = this.getRandomPhrase();

         console.log(randomPhrase);

         // Create a new instance of the Phrase class
         return new Phrase(randomPhrase);
    }

    // Get a random phrase from the phrases array
    getRandomPhrase() {
        const index = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[index];
    }

    // Checks to see if the button clicked by the player matches a letter in the phrase
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

        // Get the DOM elements
        const scoreboard = document.getElementById('scoreboard').firstElementChild;
        const hearts = Array.from(document.getElementById('scoreboard').firstElementChild.children);
        
        // Remove one heart from the DOM
        scoreboard.removeChild(hearts[hearts.length - 1]);

        // If the player has 5 missed guesses, call gameOver()
        if (this.missed === 5) {
            this.gameOver();
        }
    }

    // Checks to see if the player has selected all of the letters
    checkForWin() {
        const boardChars = Array.from(document.getElementById('phrase').firstElementChild.children);

        const boardLetters = boardChars.filter(char => char.classList.contains('letter'));
        const shownLetters = boardChars.filter(char => char.classList.contains('show'));

        if (boardLetters.length === shownLetters.length) {
            this.gameOver();
        }
    }

    // Displays a message if the player wins or a different message if they lose
    gameOver() {
        if (this.missed === 5) {
            console.log('Game over');
        } else if (this.missed < 5) {
            console.log('You win!');
        }
    }

    // Start the game
    startGame() {
        // Add the random phrase to the board
        this.phrase.addPhraseToDisplay();
    }
}