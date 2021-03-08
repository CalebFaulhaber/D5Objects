const stringExtras =  {
    // str: 'a',
    repeat (a,n) {
        if (a.length < n) {
            return `\"${' '.repeat(n-a.length)}${this}\"`
            // return this.str;
        }
        console.log("hello")
    },
    leftPad (a,n) {

    },
    rightPad (a,n) {

    },
    pad (a,n) {

    },
    capitalize (a,n) {

    },
};

console.log(stringExtras.repeat('you', 5));


// String Extras

// Create an object named, StringExtras, that contain several utility methods that re-implement some string library methods. You are not allowed to use the existing methods of the same name to implement these. 
// It should have a:
// - repeat method that duplicates a string n of times.
// - leftPad method that adds space to the left of a string until the string is of length n.
// - rightPad method like leftPad, but adds spaces to the right of the string.
// - pad method like leftPad, but adds spaces to the left & right of the string.
// - capitalize method which uppercases the first letter of a string.

// Example usage:
// let a = 'you';

// StringExtras.repeat(a, 3); // returns 'youyouyou'
// StringExtras.repeat(' ', 6); // returns '      '
// StringExtras.leftPad(a, 5); // returns '  you'
// StringExtras.leftPad(a, 1); // returns 'you'
// StringExtras.leftPad(a, 3); // returns 'you'
// StringExtras.leftPad(a, 4); // returns ' you'
// StringExtras.rightPad(a, 6) + 'me'; // returns 'you   me'
// StringExtras.pad(a, 5); // returns ' you '
// StringExtras.pad(a, 6); // returns '  you '
// StringExtras.pad(a, 10); // returns '    you   '
// StringExtras.capitalize(a); // returns 'You'

// Stretch
// Given what you've learned of prototypes and this, can you think of a way to add
// all StringExtras methods to Javascript String's prototype?
// Modify StringExtras to act as an extension to String. You may have to do some research to figure this one out. After your modifications, you should be able to do the following:

// Object.assign(String.prototype, StringExtras);
// let a = 'you';
// a.repeat(3); // returns 'youyouyou'
// a.leftPad(4); // returns ' you'
// a.rightPad(5) + 'me'; // returns 'you  me'
// a.capitalize(); // returns 'You'
// Yes, this is very cool! But, it's regarded as bad practice. 