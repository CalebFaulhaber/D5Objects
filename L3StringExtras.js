const stringExtras =  {
    repeat (str,n) {
        return `${str.repeat(n)}`;
    },
    leftPad (str,n) {
        if (str.length < n) {
            return `${' '.repeat(n-str.length)}${str}`
        } else return str;
    },
    rightPad (str,n) {
        if (str.length < n) {
            return `${str}${' '.repeat(n-str.length)}`
        }
    },
    pad (str,n) {
        if (str.length >= n) {
            console.log('here')
            return str;
        } else {
            let left = '';
            let rigth = '';
            for (let i = 1; i <= n - str.length; i++) {
                console.log('here 51')
                if (i % 2 === 1) {
                    left += ' ';
                } else {
                    right += ' ';
                }
            }
            return `\"${left}${str}${right}\"`;
        }
    },
    capitalize (str) {
        return str[0].toUpperCase() + str.slice(1);
    },
};

console.log(stringExtras.capitalize('you', 6));


// ----------------start of Davids object------------------
// const StringExtras = {
//     name: 'john',
//     age: 32,
//     // repeat: function (string, n) {
//     //   let repeated_string = ''
//     //   for (let i = 0; i < n; i++) {
//     //     repeated_string += string
//     //   }
//     //     return repeated_string
//     //   },
//     //   leftPad: function (string, n) {
//     //     return
//     //   },
//     repeat(string, n) {
//       let repeated_string = ''
//       for (let i = 0; i < n; i++) {
//         repeated_string += string
//       }
//       return repeated_string
//     },
//   }
  
//   let a = 'you'
  
//   console.log(StringExtras.repeat(a, 3)) // returns 'youyouyou'

// ---------------start of Davids object---------------------


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