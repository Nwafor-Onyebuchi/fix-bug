// file4.js

function getLargestNumber(numbers) {
    let max = numbers[1];  
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

console.log("Largest number:", getLargestNumber([3, 5, 7, 2, 8])); // Expected output: 8, but will log: undefined or incorrect value
