const emojis = require('./emojis.js');

/**
 * translateWords()
 * -----------
 * Returns the given sentence with some words replaced with emojis.
 * @param {string} words - The sentence to translate.
 * @returns {string} - The sentence with any emoji words replaced with their matching emojis.
 */

// My first unfinished attempt:
// const translateWords = function(userInput) {
//     const stringToTranslateToEmoji = userInput.toLowerCase();
//     emojis.forEach(emoji => {
//         if (stringToTranslateToEmoji.includes(emoji.name)) {
//             console.log();
//         } else if () {
    
//         }
//     });;
// };

// Code I ported from search.js to help me:
// const matchingEmojis = emojis
//         .filter((emoji) => emoji.name === stringToTranslate)
//         .map((emoji) => emoji.symbol);
//     return matchingEmojis.replace(stringToTranslate);

// console.log(translateWords('alien'));

// Colin's solution:
const translateWords = function(sentence) {
    // Split the sentence into an array of individual words
    const words = sentence.split(' ');
    const replacedWords = words.map((word) => {
        // Store the result of finding a word, an array item of the new words array formed from the input sentenve, from within the emojis array array 
        const emoji = emojis.find((emoji) => emoji.name === word.toLowerCase());
        // If there's a match in the emojis array
        if (emoji) {
            // Add that emoji symbol to the replaceWords array
            return emoji.symbol;
        // Else
        } else {
            // Add the word as is
            return word;
        }
    })

    return replacedWords.join (' ');
}

// translateWords is being exported in order so that it can be imported in the test.js files for translate
module.exports = translateWords;
