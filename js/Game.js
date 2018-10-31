// Game class
class Game {
    constructor() {
        // The number of missed guesses by the player
        this.missed = 0;
        // An array of phrases to use with the game
        this.phrases = ['best of luck', 'a way of life', 'catch a wave', 'dawn to dusk', 'eat my words', 'a mixed bag', 'a new twist', 'all fired up','back in my day', 'do the hustle', 'drop the ball', 'far from over', 'fit for a king', 'seize the day','two thumbs up'];
    }

    // Get a random phrase from the phrases array
    getRandomPhrase() {
        const index = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[index];
    }

    // This method checks to see if the button clicked by the player matches a letter in the phrase
    handleInteraction() {
        
        // If the selected letter matches, call the showMatchedLetter() method on the phrase and then call the checkForWin() method
        if (phrase.checkLetter()) {

            console.log('The letter matches');

        // If it does not, then call the removeLife() method
        } else {
            this.removeLife();
        }
    }

    // This method removes a life, removes a heart from the board, and, if the player is out of lives, ends the game
    removeLife() {
        console.log('A life has been removed');
    }

    // This method checks to see if the player has selected all of the letters
    checkForWin() {

    }

    // This method displays a message if the player wins or a different message if they lose
    gameOver() {

    }

    // Start the game
    startGame() {
        console.log('The game has started');

        // Get a random phrase
        const randomPhrase = this.getRandomPhrase();

        // Create a new instance of the Phrase class
        const phrase = new Phrase(randomPhrase);

        // Add the phrase to the board
        phrase.addPhraseToDisplay();
    }
}