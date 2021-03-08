const toObject = (arr) => {
    obj = {};
    for (let arr2 of arr) {
        obj[arr2[0]] = arr2[1];
    }
    return obj;
};


console.log(toObject([['a',1],['b',2],['c',3]]));