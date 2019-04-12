'use strict';

function Letter(letter, guessed = false) {
    this.letter = letter;
    this.guessed = guessed;
}

Letter.prototype.toString = function() {
    if (this.guessed) {
        return this.letter;
    } else {
        return '_';
    }
}

Letter.prototype.letterCheck = function(guess) {
    if (guess.toLowerCase() === this.letter.toLowerCase()) this.guessed = true;
}

module.exports = Letter;