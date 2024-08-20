// file6.js

function filterEvenNumbers(numbers) {
    //I fixed this by doing num % 2 == 0
    return numbers.filter(num => num % 2 == 0);  
}

console.log("Even numbers:", filterEvenNumbers([1, 2, 3, 4, 5])); // Expected output: [2, 4]
