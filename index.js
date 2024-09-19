// 1. Function to calculate the difference between two arguments
function calculateDifference(a, b) {
    return a - b;
}

// 2. Function to check if a number is odd
function isOdd(num) {
    return num % 2 !== 0;
}

// 3. Function to find the minimum number in an array
function findMin(arr) {
    return Math.min(...arr);
}

// 4. Function to filter even numbers from an array
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// 5. Function to sort an array in descending order
function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}

// 6. Function to lowercase the first letter of a string
function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

// 7. Function to count the number of vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return [...str].filter(char => vowels.includes(char)).length;
}

// 8. Function to find the average of an array of numbers
function findAverage(arr) {
    const sum = arr.reduce((total, num) => total + num, 0);
    return sum / arr.length;
}

// Example calls for each function

console.log(calculateDifference(10, 3)); // Output: 7
console.log(isOdd(5)); // Output: true
console.log(findMin([10, 5, 3, 8, 1])); // Output: 1
console.log(filterEvenNumbers([10, 5, 3, 8, 2])); // Output: [10, 8, 2]
console.log(sortArrayDescending([10, 5, 3, 8, 1])); // Output: [10, 8, 5, 3, 1]
console.log(lowercaseFirstLetter("HELLO")); // Output: "hELLO"
console.log(countVowels("Hello World")); // Output: 3
console.log(findAverage([10, 5, 3, 8, 1])); // Output: 5.4