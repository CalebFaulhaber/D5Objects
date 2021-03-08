const a = {a: 1, b: 2, c: 3};

const toArray = (obj) => {
    const arr = [];
    for (let key in obj) {
        arr.push([key, obj[key]]);
    }
    return arr;
} 

console.log(toArray(a));