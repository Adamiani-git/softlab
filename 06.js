const numbers = [-2, 0, 6, 3, -11, 4, -5, 10, 11, -1, 7, 9];
let mult =1;
numbers.filter(n => n !== 0).map(n => Math.abs(n)).reduce((acc, n) => mult = acc * n);
console.log(mult);