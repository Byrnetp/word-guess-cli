'use strict';
const Letter = require('./letter.js');

function Word(word) {
    this.word = word;
    this.wordArray = [];
    for (const letter of word) {
        this.wordArray.push(new Letter(letter));
    }
}

Word.prototype.wordDisplay = function() {
    let displayString = '';
    for (const letter of this.wordArray) {
        displayString += letter + ' ';
    }
    return displayString;
}

Word.prototype.guess = function(guessLetter) {
    for (const trueLetter of this.wordArray) {
        trueLetter.letterCheck(guessLetter);
    }
}

module.exports = Word;