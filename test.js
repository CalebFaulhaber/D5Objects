function arrToList(array) {
    let result = null;
    if (array.length < 1) {
        return result;
    }

    result = {
        value: array[0],
        next: null
    }
    let current = result;
    for (let i=1; i<array.length; i++) {
        let temp = {
            value: array[i],
            next: null
        }
        current["next"] = temp;
        current = current["next"];
    }
    return result;
}

let example = ["a", "b", 'c', 'd'];

console.log(arrToList(example));



// const func = (str) => {
//     return `${str}${str}\n${str}\n\n${str}`
// }

// console.log(func('str'))

// const a = {a: 1, b: 2, c: 3};
// const b = {a:26, y:25, x:24};
// const val = Object.assign(a,b,{apples:'one', bannanas: 'two'});

// console.log(val)