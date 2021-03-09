const parseCSV = () => {

};




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