'use strict';
const Word = require('./word.js');
const inquirer = require('inquirer');

// This astronomy-themed word bank is taken from my hangman game project, but any word bank will do.
const wordBank = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto', 'Ceres', 'asteroid', 'meteor', 'meteoroid', 'meteorite', 'comet', 'galaxy', 'star', 'nebula', 'Andromeda', 'eclipse', 'umbra', 'penumbra', 'Sirius', 'Betelgeuse', 'Rigel', 'supernova', 'aurora', 'crater', 'Moon', 'Phobos', 'Deimos', 'Europa', 'Ganymede', 'Callisto', 'Titan', 'Mimas', 'Enceladus', 'constellation', 'equinox', 'crescent', 'gibbous', 'sunspot', 'transit', 'twilight', 'waning', 'waxing', 'zenith'];

// Set total allowable guesses
let remainingGuesses = 15;

// Create a new word object based on a randomly chosen word from the work bank.
let chosenWord = new Word(wordBank[Math.floor(Math.random() * wordBank.length)]);

// Display the current status of the randomly chosen word at the start of the game.
console.log('Your word: ', chosenWord.wordDisplay(), `${remainingGuesses} Guesses remaining`, '\n');

// Ask the user for a letter to guess using inquirer, repeat until guesses run out or word is guessed.
inquirer
    .prompt([{
        type: 'input',
        name: 'guess',
        message: 'Please guess a letter:',
        validate: (value) => {
            chosenWord.guess(value);
            remainingGuesses--;
            if (chosenWord.wordDisplay().indexOf('_') === -1) {
                return true;
            } else if (remainingGuesses === 0) {
                return true;
            }
            console.log('\n\n', chosenWord.wordDisplay(), `\n${remainingGuesses} Guesses remaining`);
            return 'Guess another letter';
        },
    }])
    .then((answer) => {
        if (chosenWord.wordDisplay().indexOf('_') === -1) {
            console.log('\n', `The word is ${chosenWord.word}!`, '\nYou Win! Congratulations!');
        } else if (remainingGuesses === 0) {
            console.log(`\nSorry, the word was ${chosenWord.word}. Try again!`);
        } else {
            console.log('Oops... the game ended improperly.');
        }
    })
    .catch(error => console.log(error));