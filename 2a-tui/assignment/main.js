// Add your interface code here.

// For search:

// // My solution:

// // 1. In `main.js`, import the function you completed. Look to the test file if you're not sure how to import your function.
// const search = require('./search.js');
// // const translate = require('./translate-words.js');

// // 2. Use `process.argv` to grab the **command** the user typed. This will either be "search" or "translate". It will be **at index 2** in the `process.argv` array, since it will come after index 0, the path to node, and index 1, the path to `main.js`.
// const searchCommand = String(process.argv[2]) === 'search';
// const translateCommand = String(process.argv[2]) === 'translate';

// // 3. Use `process.argv` to grab either the search string or the words to translate, depending on which feature you've worked on first. The search string will be at index 3, but the translation words will be all the remaining indexes. Use slice to grab from index 3 on in `process.argv` to get the translation words.
// const searchStr = String(process.argv[3]);
// const translateStr = String(process.argv.slice(3, argv.length));

// // 4. Create an `if/else` chain to handle if the command is "search", if the command is "translate", or if the command is something else. In the case of the feature you haven't completed, print out "Under construction." In the `else` block, for neither "translate" nor "search", print out what the user's options are for valid commands.
// if (searchCommand) {
//     console.log(search(searchStr));
// } else if (translateCommand) {
//     console.log('Under construction');
// } else {
//     return `We were unable to perform your command. \nPlease try your search again and ensure that the first term you enter is either 'search' or 'translate' followed by the word(s) you are looking to process via the emojinator app.\n Acceptable complete search inputs will look something like 'node main.js search/translate [key word you are looking to transform via emojinator]'\n Happy emojiying! :)`;
// }

// // 5. In the `if` block, call your function, passing in the user's input, and print out the results. In the case of translating words, the `translateWord()` function is expecting one string of space-separated words, so you'll have to use `.join(' ')` to change the array of words into one string before passing them on to `translateWord()`. In the case of Search, you will want to loop through the results and print out the `.symbol` properties of each.

// Colin's solution

const search = require('./search');
const translateWords = require('./translate-words');

const command = process.argv[2];

if (command === 'search') {
    const searchWord = process.argv[3];
    const matchingEmojis = search(searchWord);
    matchingEmojis.forEach((emoji) => console.log(emoji.symbol));
} else if (command === 'translate') {
    const words = process.argv.slice(3);
    console.log(translateWords(words.join(' ')));
} else {
    console.log('Command must either be "search" or "translate"');
}

