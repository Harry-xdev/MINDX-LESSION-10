let obj = {
    b: 2,
    a: 1,
    c: 3,
};

let array = Object.keys(obj);
let Upper = function(a) {
    return a.toUpperCase();
};
array = array.map(Upper);
console.log(array);

