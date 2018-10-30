// Create a Game class with methods for starting and ending the game, handling interactions, getting random phrases, checking for a win, and removing a life counter
class Game {
    constructor() {
        // Used to track the number of missed guesses by the player
        this.missed = 0;
        // An array of phrases to use with the game
        this.phrases = [];
    }

    // This method randomly retrieves one of the phrases stored in the phrases array
    getRandomPhrase() {

    }

    // This method checks to see if the button clicked by the player matches a letter in the phrase
    handleInteraction() {
        // If it does not, then call the removeLife() method
        // If the selected letter matches, call the showMatchedLetter() method on the phrase and then call the checkForWin() method
    }

    // This method removes a life, removes a heart from the board, and, if the player is out of lives, ends the game
    removeLife() {

    }

    // This method checks to see if the player has selected all of the letters
    checkForWin() {

    }

    // This method displays a message if the player wins or a different message if they lose
    gameOver() {

    }

    // Calls the getRandomPhrase() method, and adds that phrase to the board by calling the Phrase class' addPhraseToDisplay() method
    startGame() {
        
    }
}