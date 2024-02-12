/**
 * Program to perform addition and multiplication of two given numbers.
 * The given numbers will be in the form of arrays and the output will also be in the form of an array.
 */

/** 
 * Function to reverse an array.
 * @param {Array} arrayList - The array to reverse.
 * @return {Array} - The reversed array.
 */
function reverseArray(arrayList) {
  return arrayList.reverse();
}

/**
* To check if all the value is number or not
* @param {Any} value - The value to check.
* @returns {boolean} - True if all values in the array are numbers, otherwise false.
*/
function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}

/** 
* Function to perform addition of two given arrays representing numbers.
* @param {Array} number1 - The first number as an array.
* @param {Array} number2 - The second number as an array.
* @returns {Array} - The result of the addition as an array.
* @throws {Error} - If input arrays contain non-numeric values.
* @param {array} output-this is output array in which we will perfrom addition
* @param {array} final a the final 
*/
function Addition(number1, number2) {
  // Check if arrays contain only numbers
  if (!number1.every(isNumber) || !number2.every(isNumber)) {
      throw new Error("Only number data type will be accepted here");
  }

  // Reverse both arrays
  let output = [];
  let reverseArray1 = reverseArray(number1);
  let reverseArray2 = reverseArray(number2);
  let i = 0, carry = 0;

  // Traverse both arrays until one of them ends
  while (i < reverseArray1.length || i < reverseArray2.length) {
      let temp = (reverseArray1[i] || 0) + (reverseArray2[i] || 0) + carry;
      carry = Math.floor(temp / 10);
      output[i] = temp % 10;
      i++;
  }
  // If carry is still present after traversing both arrays
  if (carry > 0) {
      output[i] = carry;
  }

  // Reverse the output array to get the desired result
  let finalOutput = reverseArray(output);
  return finalOutput;
}

// Example usage:
let num1 = [3, 6];
let num2 = [4, 5, 0];
try {
  let ans = Addition(num1, num2);
  console.log("Addition of the two given array:", ans);
} catch (error) {
  console.error(error.message);
}

/** 
* Function to perform multiplication of two numbers given as arrays.
* @param {Array} num1Array - The first number as an array.
* @param {Array} num2Array - The second number as an array.
* @returns {Array} - The result of the multiplication as an array.
* @param {Array} tempResult temporary result
*/
function Multiplication(num1Array, num2Array) {
  let result = [0]; // Initialize result with zero

  // Iterate through each digit of the second number
  for (let i = num2Array.length - 1; i >= 0; i--) {
      let carry = 0;
      let tempResult = []; 

      // Multiply each digit of the second number with each digit of the first number
      for (let j = num1Array.length - 1; j >= 0; j--) {
          let product = num1Array[j] * num2Array[i] + carry;
          tempResult.unshift(product % 10); // Add the least significant digit to the temporary result
          carry = Math.floor(product / 10); // Update the carry
      }

      // if any carry after multiplying the add at the top
      if (carry > 0) {
          tempResult.unshift(carry);
      }
      for (let k = num2Array.length - 1; k > i; k--) {
          tempResult.push(0);
      }

      // Adding the result
      result = Addition(result, tempResult);
  }
  return result;
}

const array1 = [3, 6];
const array2 = [4];
const resultArray =Multiplication(array1, array2);
console.log("Multiplication of the two given array:", resultArray);

// Test cases 
const edgeCase1 = [0]; // Single digit zero
const edgeCase2 = [9, 9, 9]; // Large number
const edgeCase3 = []; // Empty array
const edgeCase4 = [1, 2, "a", 3]; // Array with non-numeric value

// Testing edge cases
try {
  console.log("Edge case 1: ", Addition(array1, array2)); // Expected output: [0]
  console.log("Edge case 2: ", Multiplication(edgeCase2, edgeCase2)); // Expected output: [9, 9, 8, 0, 0, 1]
  console.log("Edge case 3: ", Addition(edgeCase3, edgeCase3)); // Expected output: [0]
  console.log("Edge case 4: ", Multiplication(edgeCase4, edgeCase4)); // Expected output: Error
} catch (error) {
  console.error("Error: ", error.message);
}
