const emojis = require('./emojis.js');

/**
 * search()
 * Returns the emojis whose names match the given query.
 * --------
 * @param {string} searchStr - The query to match.
 * @returns {Object[]} - An array of objects where each object is a matching emoji.  {Object[]} is a very common syntax for describing an array of objects.
 */

// My first solution, which worked

// const search = function(userInput) {
//     const searchStr = userInput.toLowerCase();
//     const matchedEmojis = emojis
//         .filter((emoji) => emoji.name === searchStr || emoji.name.includes(searchStr))
//         .map((emoji) => emoji.symbol);
//     return matchedEmojis.join('');
// }

// For testing the function in this file:
// console.log(search('alien'));

// // Colin's first solution:
// const search = function(searchStr) {
//     // Declare an empty array to push relevant emoji objects into
//     const matchingEmojis = [];
//     // Loop through each emoji in the emojis array;
//     for (const emoji of emojis) {
//         // If the the emoji 
//         if (emoji.name.includes(searchStr.toLowerCase())) {
//             // Push any emojis that match the search string to matchingEmojis
//             matchingEmojis.push(emoji);
//         }
//     }
//     // Return matchingEmojis
//     return matchingEmojis;
// }

// Colin's second sophisticated solution:
const search = function(searchStr) {
    return emojis.filter((emoji) => emoji.name.includes(searchStr.toLowerCase()))
};

// search is being exported in order so that it can be imported in the search.test.js file
module.exports = search;