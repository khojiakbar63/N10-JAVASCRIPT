let a = 5;
let b = 4;

function sumNumbers(x, y) {
    console.log("Kichik function");
    return x + y;
}

function findPeremetr(fn, a, b) {
    console.log("Katta function");
    return fn(a, b) * 2;
}

let result = findPeremetr(sumNumbers, a, b);
console.log(result);