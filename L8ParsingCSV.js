let csvData = `id,firstName,lastName,email\n1,jane,doe,wildmirror@yahoo.com\n2,john,doe,tamepool@hotmail.com\n3,sherlock,holmes,mag@glass.com\n4,natalia,romanov,8legged@ninja.com\n5,peter,quill,starlord@gmail.com`;

const parseCSV = (csv) => {
    let arrData = csv.split("\n");
    let arr2D = [];
    let arrObj = []
    for (let str of arrData) {
        arr2D.push(str.split(','));
    }
    for (let i = 1; i < arr2D.length; i++) {
        let innerObj = {}
        for (let j = 0; j < arr2D[i].length; j++) {
            innerObj[arr2D[0][j]] = arr2D[i][j];
        }
        arrObj.push(innerObj);
    }
    return arrObj;
};

console.log(parseCSV(csvData));

let func = (a) => {
    if (a == 4) {
        return true
    } else return false
}
console.log(func(5))


const search = (arr, str) => {
    let lowCase = str.toLowerCase();
    for (let val of arr) {
        if (val.firstName == lowCase || val.lastName == lowCase) {
            return val;
        };
    }
    return 'No word searched for'
}

console.log(search(parseCSV(csvData), 'doe'))



// Parsing CSV

// Write a function, parseCSV, to parse a string formatted as CSV into an array of objects as shown below:

// // Note that the following string is created with back ticks. This is important because it allows us to a create a string on multiple lines.
// let csvData = `
// id,firstName,lastName,email
// 1,jane,doe,wildmirror@yahoo.com
// 2,john,doe,tamepool@hotmail.com
// 3,sherlock,holmes,mag@glass.com
// 4,natalia,romanov,8legged@ninja.com
// 5,peter,quill,starlord@gmail.com
// `
// let users = parseCSV(csvData)
// console.log(users)

// /* logs
// [
//   {id: 1, firstName: 'jane', lastName: 'doe', email: 'wildmirror@yahoo.com'},
//   {id: 2, firstName: 'john', lastName: 'doe', email: 'tamepool@hotmail.com'},
//   {id: 3, firstName: 'sherlock', lastName: 'holmes', email: 'mag@glass.com'},
//   {id: 4, firstName: 'natalia', lastName: 'romanov', email: '8legged@ninja.com'},
//   {id: 5, firstName: 'peter', lastName: 'quill', email: 'starlord@gmail.com'},
// ]
// */

// #### Stretch
// Write a function, search, that takes an array of objects like the data returned from parseCSV and a string, then returns the first object in the array of objects that matches that string in firstName or lastName.

// Example:
// // users would be the array of objects from above

// search(users, 'romanov') // returns
// // {id: 1, firstName: 'jane', lastName: 'doe', email: 'wildmirror@yahoo.com'}

// search(users, 'peter') // returns
// // {id: 5, firstName: 'peter', lastName: 'quill', email: 'starlord@gmail.com'}