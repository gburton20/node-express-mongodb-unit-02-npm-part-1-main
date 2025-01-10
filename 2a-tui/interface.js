// Add your interface code below!

// 1. Import the object from logic.js that contains the functions you need.
const { convertTemperature } = require('./logic');

// 2. Grab the variables you'll need from the user's input (process.argv).
// process.argv is the argument vector for the process
// It's built into Node
// Every time Node executes a file, node first builds process.argv from what you typed in the command line
// It's an array of all the "words" in the command running the file

// Alternative could be +(process.argv[2]);
const degrees = Number(process.argv[2]);
const scale = process.argv[3];

// 3. Call the function that will convert the temperature, passing in the user's input.
const result = convertTemperature(degrees, scale);
const newScale = scale === 'f' ? 'C' : 'F'; // Ternary

// 4. Print the result to the console.
console.log(`That converts to: ${Math.round(result)}${newScale}.`);