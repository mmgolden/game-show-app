// Phrase class
class Phrase {
    // Accepts a phrase
    constructor(phrase) {
        this.phrase = phrase;
    }

    // Adds letter placeholders to the display when the game starts
    addPhraseToDisplay() {
        
        // Get the board
        const board = document.getElementById('phrase');

        // Spread the phrase into individual characters
        const characters = [...this.phrase];
      
        // Iterate over the characters array
        characters.forEach(char => {

            // Create a new li element
            const li = document.createElement('li');

            // If the character is a space, add the class 'hide space'
            if (char === ' ') {
                li.className = 'hide space';

            // Otherwise add the class 'hide letter' with the character
            } else {
                li.className = `hide letter ${char}`;
                li.textContent = char;
            }

            // Append the list item to the unordered list in the board
            board.firstElementChild.appendChild(li);
        });
    }

    // Checks to see if letter selected by player matches a letter in the phrase
    checkLetter() {
        return true;
    }

    // Reveals the letter(s) on the board that matches player's selection
    showMatchedLetter() {

    }

}