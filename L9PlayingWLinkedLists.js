let list = {
    value: 'a', next: {
        value: 'b', next: {
            value: 'c', next: {
                value: 'd',next: null
            }
        }
    }
};

let arr = ['a','b','c','d'];

const listToArr = (list) => {
    let outputArr = [];
    const recursive = (list) => {
        let arrlist = Object.keys(list)
        let obj = list
        if (obj[arrlist[1]] == null) {
            outputArr.push(obj[arrlist[0]]);
            return 
        } else {
            outputArr.push(obj[arrlist[0]])
            recursive(obj[arrlist[1]])
        }
        return outputArr
    };
    recursive(list);
    return outputArr;
}

console.log(listToArr(list))
// ----------stretch------------
function arrToList(arr) {
  let result = null;
  if (arr.length < 1) {
      return result;
  }

  result = {
      value: arr[0],
      next: null
  }
  let current = result;
  for (let i = 1; i < arr.length; i++) {
      let temp = {
          value: arr[i],
          next: null
      }
      current["next"] = temp;
      current = current["next"];
  }
  return result;
}

console.log(arrToList(arr));


// ----------gabes method-------------
// const recursive = (list) => {
//     if !list {
//       return [];
//     } else {
//       return recursive(list.next).unshift(list.value);  
//     }
//   }
// ------------------------
// let current = list;
// while (current.next) {
//   outputArr.push(current.value);
//   current = current.next;
// }
// // still missing function and variable declaration.
// -----------gabes method-----------


// -----------------
// function ListNode(index) {
//     this.value = index;
//     this.next = null;
// };

// const arrToList = (arr) => {
//     let list = new ListNode(arr[0]);
//     let selectedNode = list;
//     for (let i = 1; 1 < arr.length; i++) {
//         selectedNode.next = new ListNode(arr[i]);
//         selectedNode = selectedNode.next
//     }
//     return list
// }

// console.log(arrToList(arr));
// -------------------------------


// -------------online method--------------
// // function arrToList(array){
// //     let list = null;
// //     console.log(arr.length-1)
// //     for (let i = array.length-1; i >=  0 ; i--){
// //         list = {value: array[i], next: list};
// //     }
// //     return list;
// // }

// arrayToList([1, 2,3,4]);
// ---------------online method-------------


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