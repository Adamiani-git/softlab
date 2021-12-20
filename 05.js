const numbers = [-2, 0, 6, 3, -11, 4, -5, 10, 11, -1, 7, 9];
let sum =0;
numbers.filter(n => n >= 0).reduce((acc, n) => sum = acc + n);
console.log(sum);