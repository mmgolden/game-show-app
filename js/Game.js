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

    // This method removes a life, removes a heart from the board, and, if the player is out of lives, ends the game
    removeLife() {
        // console.log('removeLife() called');
    }

    // This method checks to see if the player has selected all of the letters
    checkForWin() {
        // console.log('checkForWin() called');
    }

    // This method displays a message if the player wins or a different message if they lose
    gameOver() {

    }

    // Start the game
    startGame() {
        // Add the random phrase to the board
        this.phrase.addPhraseToDisplay();
    }
}