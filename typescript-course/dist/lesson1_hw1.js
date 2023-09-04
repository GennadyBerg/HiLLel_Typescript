"use strict";
function createArr() {
    let n;
    n = 1;
    let m;
    m = 10;
    const numbers = [];
    if (n < m) {
        for (let i = n; i <= m; i++) {
            numbers.push(i);
        }
    }
    else {
        for (let i = m; i < n; i++) {
            numbers.push(i);
        }
    }
    return numbers;
    console.log(numbers);
}
createArr();
