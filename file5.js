// file5.js

function sumArray(arr) {
    let sum = 0;  
    arr.forEach(num => {
        sum += num;
    });
    return sum;
}

console.log("Sum of array [1, 2, 3]:", sumArray([1, 2, 3])); // Expected output: 6, but will log: error
//  the bug here is we declared a constant variable where we know that the value of that variable will be changed at every loop count.
//  the fix is to change the const keyword to let keyword.