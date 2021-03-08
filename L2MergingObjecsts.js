const merge = (obj1,obj2) => {
    return Object.assign(obj1,obj2);
};

console.log(merge({a:1,c:2},{c:3,d:4}));


// Merging Objects

// Write a function, merge, that takes two objects,objA & objB respectively then returns a new object with all keys of objA & objB. objA & objB should not be mutated when calling this function. If objects objA & objB share keys, objB's key should take precedence over objA's.
// You can not use Object.assign.

// Example:
// merge({a: 1, b: 2}, {c: 3, d: 4}); // return {a: 1, b: 2, c: 3, d: 4}
// // with shared keys
// merge(
//   {firstName: 'Ron', lastName: 'Wesley', occupation: 'Wizard'},
//   {firstName: 'Harry', lastName: 'Potter'}
// ); // returns {firstName: 'Harry', lastName: 'Potter', occupation: 'Wizard'}