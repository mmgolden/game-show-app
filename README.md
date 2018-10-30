# Game Show App

View the demo [here](https://mmgolden.github.io/game-show-app/).

This is a browser-based, word guessing game called "Phrase Hunter." This project focuses on OOP (Object Oriented Programming). In the game, the player tries to guess a random, hidden phrase by clicking on letters on an onscreen keyboard. This project was created for the purpose of the Treehouse Full Stack JavaScript Techdegree.

## Project Requirements

This project is reviewed and graded based on a set of requirements.

### Meets Expectations

* Includes constructor which accepts a phrase
* Includes addPhraseToDisplay() method which shows the phrase on the gameboard
* Includes checkLetter() method which checks if a letter is in the phrase
* Includes showMatchedLetter() method which reveals the letter(s) on the board that matches the player's selection
* Includes a constructor that adds a missed property, and a phrases property containing an array of phrases
* Phrases should only include spaces and letters.
* Includes getRandomPhrase() method to randomly retrieve one phrase from the phrases array
* Includes handleInteraction() method to check player's letter selection and assess win or lose conditions
* Includes checkForWin() method to see if the player has guessed all letters in the phrase
* Includes a removeLife() method to remove a life from the player, update the game board, and check to see if player loses game.
* Includes gameOver() method to display a final win or lose message
* Includes startGame() method to get a random phrase and display it
* Includes resetDisplay() function which hides the start screen overlay
* Includes markButton() function which is called when player selects a letter. It disables the button on the onscreen keyboard and calls the handleInteraction() method of the Game class
* Clicking the "Start Game" button calls the resetDisplay() function, creates a new Game object, and starts the game
* Event listeners on onscreen keyboard buttons, so that clicking a button calls the markButton() function
* If a player makes 5 wrong guesses, the “lose” overlay is shown
* If all the letters in the phrase are shown, the “win” overlay is shown

### Exceeds Expectations

* Event listener for the "keypress" event that calls the markButton() function for the associated onscreen keyboard button
* A button has been added to the “lose” and “win” overlays to reset the game

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Downloading

Click on the 'Clone or download' button and select 'Download Zip.'

### Installing

Step 1: Unzip the zip file.

Step 2: Open the folder in a text editor.

Using a text editor, you can view/edit the code or preview the app in a browser.
