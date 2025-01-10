# Emojinator

Today we'll make an app that works with emojis in the terminal, searching for an emoji by name, replacing words with their matching emojis, and more.

### Setup

This assignment has tests to guide you forward with the logic. As a result, we need a good test library. Here's how we set that up.

- Install the Jest testing framework with `npm install` _by itself_, NOT `npm install jest`. This will install everything listed as a dependency in the already-included `package.json` file.

-----

### Features

#### Search

This app will allow the user to search for an emoji by name. If they type `node main.js search heart`, both "💜" and "💔" will print out in the terminal.

Partial search words match as well, so a search of `node main.js search corn` prints out both "🦄" and "🍿".

#### Translation

This app will allow the user to "translate" their words to matching emojis, if they exist. If they type `node main.js translate i have a question`, "i have a ❓" will print out to the terminal.

-----

### Directions

#### Solve Search Or Translate

You can solve either Search or Translate both. We recommend that you solve whichever sounds simplest first.

You have a few options for running tests:

- `npm test` runs all tests once.
- `npm run test-watch` runs all tests continuously, watching the directory for changes to files.
- `npm run test-search` runs all tests for Search _only_ once.
- `npm run test-translate` runs all tests for Translate _only_ once.
- `npm run test-search-watch` runs all tests for Search continuously, watching the directory for changes to files.
- `npm run test-translate-watch` runs all tests for Translate continuously, watching the directory for changes to files.

The functions are set up for you in `search.js` and `translate-words.js`, and export statements are pre-written for you at the bottom of the file.

#### Write Interface Code

Once you have one of the above functions written, you have the logic for a feature completed. The next step is to handle the interface between the user and the logic, taking in input from the user and giving them the emojis they want.

1. In `main.js`, import the function you completed. Look to the test file if you're not sure how to import your function.
2. Use `process.argv` to grab the **command** the user typed. This will either be "search" or "translate". It will be **at index 2** in the `process.argv` array, since it will come after index 0, the path to node, and index 1, the path to `main.js`.
3. Use `process.argv` to grab either the search string or the words to translate, depending on which feature you've worked on first. The search string will be at index 3, but the translation words will be all the remaining indexes. Use slice to grab from index 3 on in `process.argv` to get the translation words.
4. Create an `if/else` chain to handle if the command is "search", if the command is "translate", or if the command is something else. In the case of the feature you haven't completed, print out "Under construction." In the `else` block, for neither "translate" nor "search", print out what the user's options are for valid commands.
5. In the `if` block, call your function, passing in the user's input, and print out the results. In the case of translating words, the `translateWord()` function is expecting one string of space-separated words, so you'll have to use `.join(' ')` to change the array of words into one string before passing them on to `translateWord()`. In the case of Search, you will want to loop through the results and print out the `.symbol` properties of each. 

#### Test Your Interface

If you implemented Search, call `node main.js search` and then a word. Try "robot" or "heart" or "corn". You should see one or two 

If you implemented Translate, call `node main.js translate` and then a series of words. Try "i have a question" or "i heart computer".

#### Implement Your Other Feature

Go through the above process for the feature you have yet to implement. Solve the tests, and then fill out your interface code's if/else block for that feature.

#### Bonus: Implement One Of The Following Features

You will not have tests, but you can still implement one or more of the following features:

- Give a random emoji to the user.
- Give a random emoji to the user from the category the user enters.
- Replace each _letter_ in the user's sentence with the matching emoji based on the `.letter` property
- Replace any word that's a category word from the users's sentence with a random emoji from that category. For example, if the user typed "i gave some food to the animal yesterday", you would randomly print out something like "i gave some 🍟 to the 🐘 yesterday" or "i gave some 🍕 to the 🦄 yesterday".