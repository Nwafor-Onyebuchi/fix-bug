// file3.js

function reverseString(str) {
    let reversed = '';
    for (let i = str.length -1; i >= 0; i--) { 
        reversed += str[i];
    }
    return reversed;
}

console.log("Reversed 'hello':", reverseString("hello")); // Expected output: 'olleh', but will log: 'h'
