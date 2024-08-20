// file2.js

function isEven(number) {
  return number % 2 === 0;
}

console.log("4 is even:", isEven(4)); // Expected output: true, but will log: false
console.log("7 is even:", isEven(7)); // Expected output: false, but will log: false
