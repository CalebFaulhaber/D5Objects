let list = {value: 'a', 
            next: {value: 'b', 
                    next: {value: 'c', 
                            next: null}}};

const listToArr = (list) => {

};

// Playing with Linked Lists

// A linked list is a type of data structure, like an array, that holds list like 
// data. We can create linked lists in javascript by using objects.

// {value: 1, next: null} // list with one element, 1
// {value: 2, next: {value: 3, next: {value: 4, next: null}}}
// // list of 3 elements 2, 3, 4

// We know we've reached the end of the list when the next property is null 
// instead of another object.

// Write a function, listToArr that takes a linked list and returns it converted 
// into an array.

// Example:
// listToArr({value: 1, next: null}) // returns [1]
// listToArr({value: 'a', next: {value: 'b', next: {value: 'c', next: null}}})
// // returns ['a', 'b', 'c']

// ### Stretch

// Write a function, arrToList, that takes a an array and returns a linked 
// list converted from the array.

// Example:
// arrToList([4]) // returns {value: 4, next: null}
// arrToList([4, 3, 2, 1])
// // returns
// // {value: 4, next: {value: 3, next: {value: 2, next: {value: 1, next: null}