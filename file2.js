// file2.js

function isEven(number) {
    if (number % 2 === 0) { ///strict equality operator.
        return true;
    } else {
        return false;
    }
}

console.log("4 is even:", isEven(4)); // Expected output: true, but will log: false
console.log("7 is even:", isEven(7)); // Expected output: false, but will log: false


////4 is even: true
///7 is even: false