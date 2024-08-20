// file3.js

function reverseString(str) {
    let reversed = '';
    for (let i = 0; i < str.length; i++) { 
        reversed += str[i];
    }
    return reversed;
}

console.log("Reversed 'hello':", reverseString("hello")); // Expected output: 'olleh', but will log: 'h'
