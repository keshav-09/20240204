/**
 * This function performs subtraction of two arrays representing numbers.
 * @param {Array} array1 - The first number as an array.
 * @param {Array} array2 - The second number as an array.
 * @returns {Array} - The result of the subtraction as an array.
 */
function check(numArray) {
    // To check if the input is an array
    if (!Array.isArray(numArray)) {
        throw new Error("Given input is not an Array");
    }

    // To check if the array is empty
    if (numArray.length === 0) {
        throw new Error("Given Input is Empty");
    }

    // To check if the array consists only of integers in the range of 0-9
    for (let i = 0; i < numArray.length; i++) {
        if (!Number.isInteger(numArray[i]) || numArray[i] < 0 || numArray[i] > 9) {
            throw new Error("Please input valid integers between 0 and 9.");
        }
    }
}
function sub(array1, array2) {
    // Reverse the arrays
    let num1 = array1.slice().reverse();
    let num2 = array2.slice().reverse();

    // Check if both arrays are of the same length
    while (num1.length < num2.length) {
        num1.push(0);
    }
    while (num2.length < num1.length) {
        num2.push(0);
    }

    // Perform subtraction digit by digit
    for (let i = 0; i < num1.length; i++) {
        if (num1[i] < num2[i]) {
            num1[i] = num1[i] + 10;
            num1[i + 1] -= 1;
        }
        num1[i] = num1[i] - num2[i];
    }

    // Remove leading zeros from the result
    while (num1.length > 1 && num1[num1.length - 1] === 0) {
        num1.pop();
    }
    return num1.reverse();
}

/**
 * This function converts arrays to numbers, performs subtraction, and handles the edge case of negative results.
 * @param {Array} array1 - The first number as an array.
 * @param {Array} array2 - The second number as an array.
 */
function arraysToNumbers(array1, array2) {
    // Convert arrays to numbers
    let number1 = parseInt(array1.join(''), 10);
    let number2 = parseInt(array2.join(''), 10);

    // Validate if both numbers are in the range of 0-9
    

    // Perform subtraction
    if (number1 < number2) {
        const temp = array1;
        array1 = array2;
        array2 = temp;
        const result = sub(array1, array2);
        result.unshift("-"); // Add '-' symbol to indicate negative result
        console.log(result);
    } else {
        console.log(sub(array1, array2));
    }
}

// Test cases
const array1 = [4,0];
const array2 = [1,0];
arraysToNumbers(array1, array2);
