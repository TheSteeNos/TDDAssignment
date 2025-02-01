import test from "./test.mjs";
const tests = test("guessNumber test");

/*
    Challenge: Implement the `guessNumber` function.

    The function `guessNumber` takes two parameters:
    1. `target` (an integer) - the number to guess.
    2. `guess` (an integer) - the player's guess.

    The function should:
    - Return "Too low" if the guess is less than the target.
    - Return "Too high" if the guess is greater than the target.
    - Return "Correct!" if the guess matches the target.
    - Return null if either input is not a valid integer.

    Your task:
    1. Complete the tests below to verify the functionality.
    2. Implement the `guessNumber` function so it passes all the tests.

    
*/

//#region function -----------------------------------------------------------------
// Write your function her.

function guessNumber(target, guess) {
    if (typeof target !== 'number' || target <= -1 || !Number.isInteger(target)) return null;
    if (typeof guess !== 'number' || guess <= -1 || !Number.isInteger(guess)) return null;

    if (guess < target) return "Too low";
    if (guess > target) return "Too high";
    return "Correct!";
}


//#endregion

//#region Tests --------------------------------------------------------------------

console.log("");
console.log("Basic cases");
tests.isEqual(guessNumber(10, 5), "Too low", "If target is 10 and guess is 5, return 'Too low'");
tests.isEqual(guessNumber(10, 15), "Too high", "If target is 10 and guess is 15, return 'Too high'");
tests.isEqual(guessNumber(10, 10), "Correct!", "If target is 10 and guess is 10, return 'Correct!'");

console.log("");
console.log("Invalid inputs");
tests.isEqual(guessNumber("2", 4), null, "Expects null due to string in input");
tests.isEqual(guessNumber(2, "4"), null, "Expects null due to string in input");
tests.isEqual(guessNumber(null, 4), null, "Expects null due to null in input");
tests.isEqual(guessNumber(2, undefined), null, "Expects null due to undefined in input");
tests.isEqual(guessNumber(2, 4.2), null, "Expects null due to non-integer in input");

console.log("");
console.log("Edge cases");
tests.isEqual(guessNumber(0, 0), "Correct!", "Expects 'Correct!' as input has guessed target");

//#endregion
