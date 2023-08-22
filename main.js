// main.js

// Generate a random number between 0 (inclusive) and 1 (exclusive)
const randomNumber = Math.random();

// Convert the random number to a range of your choice
const minRange = 1;
const maxRange = 100;
const scaledRandomNumber = Math.floor(randomNumber * (maxRange - minRange + 1)) + minRange;

console.log("Random Number:", scaledRandomNumber);
