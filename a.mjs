import test from "./test.mjs";
const tests = test("Multiplication test");

/*
    Challenge: Implement the `multiply` function.

    The function `multiply` takes an indefinite number of parameters (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
    It should return the product of the numbers, with the following constraints:

    1. If one or more of the parameters are not valid numbers, the function should return NaN (Not a Number).
    2. If either parameter is a string that can be converted to a number (e.g., "3"), it should be parsed into a number before multiplying.
    3. If either parameter is Infinity or -Infinity, return Infinity or -Infinity based on the rules of multiplication.
    4. Handle edge cases like multiplying by 0 and NaN appropriately.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `multiply` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.

function multiply(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (isNaN(numbers[i])) return NaN;
        numbers[i] = Number(numbers[i]);
    }

    return numbers.reduce((total, next) => total * next, 1);
}

//#endregion


//#region Tests --------------------------------------------------------------------
// Write your tests her.

tests.isEqual(multiply(4, 3, 5, 9), 540, 'Expects sum of 4x3x5x9 which is 540');
tests.isEqual(multiply(4,'3',5, '9'), 540, 'Expects to modify strings to integers, then multiply, expects 540');
tests.isEqual(multiply(4, 0, 5, 9), 0, 'Expects 0 if multiplied by 0');
tests.isNotANumber(multiply(4, 'hello world', 3), 'Expects NaN if input includes values which are not numbers');
tests.isNotANumber(multiply(NaN, 3, 5, 9), 'Expects NaN if NaN is included in input');
tests.isEqual(multiply(4, Infinity), Infinity, 'Expects Infinity');
tests.isEqual(multiply(4, -Infinity), -Infinity, 'Expects -Infinity');
tests.isEqual(multiply(-4, Infinity), -Infinity, 'Expects -Infinity');

//#endregion