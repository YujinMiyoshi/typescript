"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResults(num) {
    console.log('Result: ' + num);
}
let combinationValues;
combinationValues = add;
//combinationValues = printResults;
//combinationValues = 5;
console.log(combinationValues(8, 8));
printResults(add(5, 12));
