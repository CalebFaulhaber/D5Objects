const string = {
    this: a,
    this: n,
    func(a,n) {
        return this;
    }
}

console.log(string.func('you', 5));


// const a = {a: 1, b: 2, c: 3};
// const b = {a:26, y:25, x:24};
// const val = Object.assign(a,b,{apples:'one', bannanas: 'two'});

// console.log(val)