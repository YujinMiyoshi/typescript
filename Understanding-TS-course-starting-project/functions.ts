function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResults(num: number) {
    console.log('Result: ' + num);
}

let combinationValues: (a: number, b: number) => number;

combinationValues = add;
//combinationValues = printResults;
//combinationValues = 5;

console.log(combinationValues(8, 8))

printResults(add(5, 12))