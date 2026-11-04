"use strict";

// Task #1
function createLogger(prefix) {
  return (message) => `${prefix}: ${message}`;
}
const authLogger = createLogger("AUTH");
const apiLogger = createLogger("API");

console.log(authLogger("User logged in"));
console.log(apiLogger("Request failed"));



// Task #2
function createLimiter(limit) {
  let countCreate = 0;
  return () => (++countCreate <= limit ? "Ok" : "Error");
}

const limited = createLimiter(2);

console.log(limited()); 
console.log(limited()); 
console.log(limited()); 


// Task #3

function createFilter(callback) {
  return (arr) => arr.filter((el) => callback(el));
}

// Create filter for even numbers
const getEvenNumbers = createFilter((el) => el % 2 === 0);
const arrNumb = [1, 2, 3, 4, 5, 8, 12, 15, 24];

console.log(getEvenNumbers(arrNumb));

// Ctreate filter for numbers > 10
const getGreateTenNumbers = createFilter((el) => el > 10);

console.log(getGreateTenNumbers(arrNumb)); 


