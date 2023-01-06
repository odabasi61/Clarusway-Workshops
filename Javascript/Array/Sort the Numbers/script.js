"use strict";

const input = [1502369201789];

function output(num) {
    return +num.toString().split('').sort().reverse().join('');
}
console.log(output(input));