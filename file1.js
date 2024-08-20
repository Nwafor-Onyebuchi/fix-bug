// file1.js

function calculateSum(numbers) {
    return numbers.reduce((acc, num) => {
       return acc += num;
    }, 0);
}

const nums = [1, 2, 3, 4, 5];
console.log("Sum:", calculateSum(nums)); // Expected output: 15, but will log: undefined
