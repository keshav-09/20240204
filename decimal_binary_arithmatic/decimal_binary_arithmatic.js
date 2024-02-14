/*
 Task Description - Write a Javascript function that takes in an array of 
 0s and 1s, and converts them to their respective decimal format
*/


// Function to convert a two's complement binary representation to decimal
function TwoscomplementToBinary(b_Representation, signBitExists = true){
    // Check if the input is an array
    if (!Array.isArray(b_Representation)) {
        throw new TypeError("Error: Enter an array.");
    }

    // Check if the sign bit exists
    if (signBitExists) {
        // Remove the sign bit from the binary representation
        const signBit = b_Representation.shift();
        // If the sign bit is 1, the number is negative
        if (signBit === 1) {
            // Convert the remaining binary representation to decimal and return 
            // the negative value
            return -1 * binaryToDecimal(b_Representation) - 1;
        }
        // If the sign bit is 0, the number is positive
        // Convert the remaining binary representation to decimal and return 
        // the positive value
        return binaryToDecimal(b_Representation);
    }
    // If the sign bit does not exist, treat the binary representation 
    // as an unsigned number
    return binaryToDecimal(b_Representation);
}
/**
 * Converts an array of 0s and 1s to its respective decimal format.
 * @param {number[]} binaryArray - An array of 0s and 1s representing a 
 * binary number.
 * @returns {number} - The decimal equivalent of the binary number.
 */
function binaryToDecimal(binaryArray) {
    // Check if the input is an array
    if (!Array.isArray(binaryArray)) {
        throw new TypeError("Error: Input must be an array.");
    }

    // Initialize the decimal number
    let decimal = 0;

    // Iterate through the binary array
    for (let i = 0; i < binaryArray.length; i++) {
        // Check if the element is not 0 or 1
        if (binaryArray[i] !== 0 && binaryArray[i] !== 1) {
            throw new TypeError("Error: Input array must contain only 0s and 1s.");
        }
        // Calculate the decimal value by multiplying the bit with its 
        // corresponding power of 2
        decimal += binaryArray[i] * Math.pow(2, binaryArray.length - 1 - i);
    }

    // Return the decimal value
    return decimal;
}

// Test the function
console.log(TwoscomplementToBinary([1, 1, 0, 0, 1, 0, 1], true))
