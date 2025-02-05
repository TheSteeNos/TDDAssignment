import test from "./test.mjs";
const tests = test("Multiplication test");

/*
    Challenge: Implement the `formatName` function.

    The function `formatName` takes a single parameter `name` (a string) and formats it based on the following rules:

    1. If `name` is not a string, return null.
    2. Remove any leading or trailing whitespace from the string.
    3. Capitalize the first letter of each word in the name (e.g., "john doe" becomes "John Doe").
    4. If the string is empty (after trimming), return an empty string.
    5. If the string contains special characters (e.g., "@", "#", etc.), return null.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `formatName` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.

function formatName(input) {
    if (typeof input !== "string" || /[^a-zA-Z\s]/.test(input)) return null;

    input = input.trim();
    let parts = input.split(' ');
    for (let i = 0; i < parts.length; i++) {
        parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1).toLowerCase();
    }

    return parts.join(' ');
}

//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.

tests.isEqual(formatName(540), null, "Expects null as input isn't a string");
tests.isEqual(formatName('     Donald Duck  '), 'Donald Duck', 'Expects removal of spaces in front and behind');
tests.isEqual(formatName('donald duck'), 'Donald Duck', 'Expects to capitalize first letters of each word');
tests.isEqual(formatName('  '), '', 'Expects empty string as function removes spaces');
tests.isEqual(formatName('donaldduck@gmail.com'), null, 'Expects null as input has special characters');

//#endregion