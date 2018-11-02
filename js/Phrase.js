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
    checkLetter(event) {

        // Get the letter from the button that was clicked
        const letter = event.target.textContent;
        
        // Spread the phrase into individual characters
        const characters = [...this.phrase];

        // Checks if there is a match in the characters array
        // Credit: https://stackoverflow.com/questions/20798477/how-to-find-index-of-all-occurrences-of-element-in-array
        const indexes = characters.reduce((indexes, char, i) => {

            // If the character matches the letter from the button
            if (char === letter) {

                // Add the matching character index to the indexes array
                indexes.push(i);
            }

            // Then return the final indexes array
            return indexes;
        }, []);

        // Returns a boolean and the indexes array
        return {
            match: indexes.length > 0,
            indexes: indexes
        }
    }

    // Reveals the letter(s) on the board that matches player's selection
    showMatchedLetter(event) {

        // Matching indexes array from the checkLetter() method
        const indexes = this.checkLetter(event).indexes;

        // An array of the letter elements from the board
        const boardLetters = Array.from(document.getElementById('phrase').firstElementChild.children);

        // Loops over each letter element from the board
        boardLetters.forEach((boardLetter, i) => {

            // Loops over the matching indexes array
            indexes.forEach(index => {
                
                // If the matching index is the same as the letter index, then change the class name to 'show letter'
                if (index === i) {
                    boardLetter.classList = 'show letter';
                }
            });
        });
    }

}